import { OrderItemDto } from "../dto/OrderDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class OrderItemService {

  /**
   * add items to order
   */
  async addItemToOrder({ orderId, price, productId, ammount }: OrderItemDto) {

    const item = await prisma.orderItem.create({
      data: {
        order: {
          connect: { id: orderId }
        },
        product: {
          connect: { id: productId }
        },
        price, ammount
      }
    });

    const orderItems = await prisma.orderItem.findMany({
      where: { orderId: orderId }
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

  /**
   * remove items from order
   */
  async removeItemFromOrder(orderId: number, itemId: number) {

    const item = await prisma.orderItem.findFirst({
      where: { id: itemId }
    });

    await prisma.orderItem.delete({
      where: { id: itemId }
    });

    const order = await prisma.order.findFirst({
      where: { id: orderId }
    });

    const updateOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        totalValue: Number(order?.totalValue) - ((Number(item?.price) * Number(item?.ammount))),
        updatedAt: getCurrentTime()
      }
    });

  }

  /**
   * update method
   */
  async updateItem({ orderId, price, productId, ammount }: OrderItemDto) {

    const item = await prisma.orderItem.findFirst({
      where: { id: productId }
    });

    const updatedItem = await prisma.orderItem.update({
      where: { id: productId },
      data: {
        price, ammount
      }
    });

    const orderItems = await prisma.orderItem.findMany({
      where: { orderId: orderId }
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

    return updatedItem;

  }

}