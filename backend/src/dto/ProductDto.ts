class CreateProductDto {
  name!: string;
  partNumber!: string;
  active!: boolean;
  productTypeId!: number;
  manufacturerId!: number;
}

export {
  CreateProductDto
}