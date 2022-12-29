import { CreateProfileDto } from "../dto/ProfileDto";
import { prisma } from "../prisma";

export class ProfileService {

  /**
   * create method
   */
  async create({ name }: CreateProfileDto) {
    
    const exists = await prisma.profile.findFirst({
      where: { name }
    });

    if (exists) {
      throw new Error('Perfil já existente');
    }

    const profile = await prisma.profile.create({
      data: {
        name
      }
    });

    return profile;
    
  }

}