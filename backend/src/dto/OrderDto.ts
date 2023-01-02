class CreateOrderDto {
  userId!: number;
  status!: string;
}

class UpdateOrderDto {
  userId!: number;
  status!: string;
  items!: number[];
}

class OrderItemDto {
  orderId?: number;
  productId!: number;
  ammount!: number;
  price!: any;
}

export {
  CreateOrderDto,
  UpdateOrderDto,
  OrderItemDto
}