class CreateCustomerDto {
  name!: string;
  cnpj!: string;
  sellerId!: number;
  type!: string;
  notes?: string;
}

export {
  CreateCustomerDto
}