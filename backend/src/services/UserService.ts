import { hash } from "bcryptjs";
import { CreateUserDto } from "../dto/UserDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class UserService {

  /**
   * create method
   */
  async create({ name, email, password, active }: CreateUserDto) {

    const exists = await prisma.user.findFirst({
      where: { name }
    });

    if (exists) {
      throw new Error('E-mail já cadastrado');
    }

    const hashPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name, email, password: hashPassword, active, createdAt: getCurrentTime()
      },
      select: {
        id: true, name: true, email: true, active: true
      }
    });

    return user;

  }

}