import { CreateUserDto } from "../dto/UserDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class UserService {

  /**
   * create method
   */
  async create({ name, email, password, active }: CreateUserDto) {

    const user = await prisma.user.create({
      data: {
        name, email, password, active, createdAt: getCurrentTime()
      },
      select: {
        id: true, name: true, email: true, active: true
      }
    });

    return user;

  }

}