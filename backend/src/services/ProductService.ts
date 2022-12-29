import { CreateProductDto } from "../dto/ProductDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class ProductService {

  /**
   * create method
   */
  async create({ name, partNumber, productTypeId, manufacturerId, active }: CreateProductDto) {
    
    const exists = await prisma.product.findFirst({
      where: { partNumber }
    });

    if (exists) {
      throw new Error('Partnumber já cadastrado');
    }

    const product = await prisma.product.create({
      data: {
        name, partNumber, active, createdAt: getCurrentTime(),
        type: { connect: { id: productTypeId } },
        manufacturer: { connect: { id: manufacturerId } } 
      },
      select: {
        id: true, name: true, partNumber: true
      }
    });

    return product;
    
  }

  /**
   * find all method
   */
  async findAll() {
    const products = await prisma.product.findMany({
      select: {
        id: true, name: true, active: true, partNumber: true, 
        type: true, manufacturer: true
      }
    });
    return products;
  }

  /**
   * find by id
   */
  async findById(id: number) {
    const product = await prisma.product.findFirst({
      where: { id },
      select: {
        id: true, name: true, active: true, partNumber: true, 
        type: true, manufacturer: true, createdAt: true, updatedAt: true
      }
    });
    return product;
  }

  /**
   * update method
   */
  async update(id: number, { name, partNumber, productTypeId, manufacturerId, active }: CreateProductDto) {

    const product = await prisma.product.findFirst({
      where: { id }
    });

    const exists = await prisma.product.findFirst({
      where: { name }
    });

    if (exists && exists.id !== product?.id) {
      throw new Error('Perfil já existente');
    }
    
    const productUpdated = await prisma.product.update({
      where: { id },
      data: {
        name, partNumber, active, updatedAt: getCurrentTime(),
        type: { connect: { id: productTypeId } },
        manufacturer: { connect: { id: manufacturerId } } 
      },
      select: {
        id: true, name: true, partNumber: true, updatedAt: true
      }
    });

    return productUpdated;
  }

  /**
   * list manufacturers
   */
  async listManufacturers() {
    return await prisma.manufacturer.findMany();
  }

  /**
   * list product types
   */
  async listProductTypes() {
    return await prisma.productType.findMany();
  }

}