import { CreateOrderDto } from "../dto/OrderDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class OrderService {

  /**
   * create method
   */
  async create({ userId, status }: CreateOrderDto) {
    
    const order = await prisma.order.create({
      data: {
        seller: { connect: { id: userId } },
        status,
        totalValue: 0,
        createdAt: getCurrentTime()
      },
      select: {
        id: true, totalValue: true, status: true, createdAt: true,
        seller: { select: { id: true, name: true, email: true } }
      }
    });

    return order;
  }

}