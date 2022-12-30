import { OrderItemDto } from "../dto/OrderDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class OrderItemService {

  async addItemToOrder(orderId: number, { productId, price, ammount }: OrderItemDto) {
    
    const item = await prisma.orderItem.create({
      data: {
        order: {
          connect: { id: orderId }
        },
        product: {
          connect: { id: productId }
        },
        ammount, price
      }
    });

    const orderItems = await prisma.orderItem.findMany({
      where: {
        orderId
      }
    });

    let totalValue: number = 0;
    orderItems.forEach((i: any) => {
      totalValue += i.price * i.ammount
    });

    await prisma.order.update({
      where: { id: orderId },
      data: {
        totalValue: totalValue,
        updatedAt: getCurrentTime()
      }
    });

    return item;

  }

}