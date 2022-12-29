import { CreateProfileDto, UpdateProfileDto } from "../dto/ProfileDto";
import { prisma } from "../prisma";

export class ProfileService {

  /**
   * create method
   */
  async create({ name, permissions }: CreateProfileDto) {

    const exists = await prisma.profile.findFirst({
      where: { name }
    });

    if (exists) {
      throw new Error('Perfil já existente');
    }

    const profile = await prisma.profile.create({
      data: {
        name,
        profilePermission: {
          create: permissions.map((permissionId: number) => ({
            permission: {
              connect: { id: permissionId }
            }
          }))
        }
      },
      select: {
        id: true, name: true, profilePermission: {
          select: { permission: true }
        }
      }
    });

    return profile;

  }

  /**
   * find all method
   */
  async findAll() {
    const profiles = await prisma.profile.findMany();
    return profiles;
  }

  /**
   * find by id
   */
  async findById(id: number) {
    const profile = await prisma.profile.findFirst({
      where: { id },
      select: {
        id: true, name: true, profilePermission: {
          select: { permission: true }
        }
      }
    });
    return profile;
  }

  /**
   * update method
   */
  async update(id: number, { name, permissionsToAdd, permissionsToRemove }: UpdateProfileDto) {

    const profile = await prisma.profile.findFirst({
      where: { id }
    });

    const exists = await prisma.profile.findFirst({
      where: { name }
    });

    if (exists && exists.id !== profile?.id) {
      throw new Error('Perfil já existente');
    }
    
    const profileUpdated = await prisma.profile.update({
      where: { id },
      data: {
        name,
        profilePermission: {
          create: permissionsToAdd.map((permissionId: number) => ({
            permission: {
              connect: { id: permissionId }
            }
          })),
          deleteMany: permissionsToRemove.map((permissionId: number) => ({
            permissionId: permissionId,
            profileId: id
          }))
        }
      },
      select: {
        id: true, name: true, profilePermission: {
          select: { permission: true }
        }
      }
    });

    return profileUpdated;
  }

  /**
   * delete method
   */
  async deleteOne(id: number) {
    try {
      await prisma.profile.delete({
        where: { id }
      });
    } catch {
      throw new Error('Não é possível excluir esse perfil');
    }
  }

}