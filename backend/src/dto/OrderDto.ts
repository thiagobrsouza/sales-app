class CreateOrderDto {
  userId!: number;
  status!: string;
}

class UpdateOrderDto {
  userId!: number;
  status!: string;
}

class OrderItemDto {
  productId!: number;
  ammount!: number;
  price!: number;
}

export {
  CreateOrderDto,
  OrderItemDto
}