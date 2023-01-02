import { CreateOrderDto, UpdateOrderDto } from "../dto/OrderDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class OrderService {

  /**
   * create method
   */
  async create({ userId, status, customerId }: CreateOrderDto) {

    const order = await prisma.order.create({
      data: {
        seller: { connect: { id: userId } },
        customer: { connect: { id: customerId } },
        status,
        totalValue: 0,
        createdAt: getCurrentTime()
      },
      select: {
        id: true, totalValue: true, status: true, createdAt: true,
        seller: { select: { id: true, name: true, email: true } },
        customer: { select: { id: true, name: true } }
      }
    });

    return order;
  }

  /**
   * find all methods
   */
  async findAll() {
    const orders = await prisma.order.findMany({
      select: {
        id: true, totalValue: true, status: true,
        seller: { select: { id: true, name: true, email: true } }
      }
    });
    return orders;
  }

  /**
   * find one by id
   */
  async findById(id: number) {
    const order = await prisma.order.findFirst({
      where: { id },
      select: {
        id: true, totalValue: true, status: true,
        seller: { select: { id: true, name: true, email: true } },
        customer: { select: { id: true, name: true } },
        items: {
          select: {
            id: true, price: true, ammount: true,
            product: { select: { id: true, name: true } }
          }
        }
      }
    });
    return order;
  }

  /**
   * update method
   */
  async update(id: number, { userId, status, customerId }: UpdateOrderDto) {

    const order = await prisma.order.update({
      where: { id },
      data: {
        seller: { connect: { id: userId } },
        customer: { connect: { id: customerId } },
        status,
        updatedAt: getCurrentTime()
      },
      select: {
        id: true, totalValue: true, status: true, createdAt: true,
        seller: { select: { id: true, name: true, email: true } },
        customer: { select: { id: true, name: true } }
      }
    });

    return order;

  }

  /**
   * delete method
   */
  async deleteOne(id: number) {
    try {
      await prisma.order.delete({
        where: { id }
      });
    } catch {
      throw new Error('A venda não pode ser removida');
    }
  }

}