import { hash } from "bcryptjs";
import { CreateUserDto, UpdateUserDto } from "../dto/UserDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class UserService {

  /**
   * create method
   */
  async create({ name, email, password, active, profileId }: CreateUserDto) {

    const exists = await prisma.user.findFirst({
      where: { name }
    });

    if (exists) {
      throw new Error('E-mail já cadastrado');
    }

    const hashPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name, email, password: hashPassword, active, createdAt: getCurrentTime(),
        profile: {
          connect: { id: profileId }
        }
      },
      select: {
        id: true, name: true, email: true, active: true,
        profile: true
      }
    });

    return user;

  }

  /**
   * find all method
   */
  async findAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true, name: true, email: true, active: true, profile: true
      }
    });
    return users;
  }

  /**
   * find by id method
   */
  async findById(id: number) {
    const user = await prisma.user.findFirst({
      where: { id },
      select: {
        id: true, name: true, email: true, active: true, createdAt: true, updatedAt: true,
        profile: true
      }
    });
    return user;
  }

  /**
   * update method
   */
  async update(id: number, { name, email, active, profileId }: UpdateUserDto) {

    const user = await prisma.user.findFirst({
      where: { id }
    });

    const exists = await prisma.user.findFirst({
      where: { email }
    });

    if (exists && exists.id !== user?.id) {
      throw new Error('E-mail já cadastrado');
    }

    const userUpdated = await prisma.user.update({
      where: { id },
      data: {
        name, email, active, updatedAt: getCurrentTime(),
        profile: {
          connect: { id: profileId }
        }
      },
      select: {
        id: true, name: true, email: true, active: true, profile: true
      }
    });

    return userUpdated;

  }

}