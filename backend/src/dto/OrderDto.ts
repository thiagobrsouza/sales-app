class CreateOrderDto {
  userId!: number;
  status!: string;
}

class UpdateOrderDto {
  orderId?: number;
  userId!: number;
  status!: string;
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