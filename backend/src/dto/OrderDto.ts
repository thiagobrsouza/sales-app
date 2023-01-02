class CreateOrderDto {
  userId!: number;
  status!: string;
  customerId!: number;
}

class UpdateOrderDto {
  userId!: number;
  status!: string;
  customerId!: number;
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