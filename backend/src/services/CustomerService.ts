import { CreateCustomerDto } from "../dto/CustomerDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class CustomerService {

  /**
   * create method
   */
  async create({ name, cnpj, type, sellerId, notes }: CreateCustomerDto) {
    
    const exists = await prisma.customer.findFirst({
      where: { cnpj }
    });

    if (exists) {
      throw new Error('CNPJ já cadastrado');
    }

    const customer = await prisma.customer.create({
      data: {
        name, cnpj, type, notes,
        seller: {
          connect: { id: sellerId }
        }
      },
      include: {
        seller: { select: { id: true, name: true } }
      }
    });

    return customer;
    
  }

  /**
   * find all method
   */
  async findAll() {
    const customers = await prisma.customer.findMany({
      select: {
        id: true, name: true, cnpj: true,
        seller: { select: { id: true, name: true } }
      }
    });

    return customers;
  }

  /**
   * find by id
   */
  async findById(id: number) {
    const customer = await prisma.customer.findFirst({
      where: { id },
      select: {
        id: true, name: true, cnpj: true, type: true, notes: true,
        seller: { select: { id: true, name: true } }
      }
    });
    return customer;
  }

  /**
   * update method
   */
  async update(id: number, { name, cnpj, type, sellerId, notes }: CreateCustomerDto) {

    const customer = await prisma.customer.findFirst({
      where: { id }
    });

    const exists = await prisma.customer.findFirst({
      where: { cnpj }
    });

    if (exists && exists.id !== customer?.id) {
      throw new Error('CNPJ já existente');
    }
    
    const customerUpdated = await prisma.customer.update({
      where: { id },
      data: {
        name, cnpj, type, notes,
        seller: {
          connect: { id: sellerId }
        }
      },
      include: {
        seller: { select: { id: true, name: true } }
      }
    });

    return customerUpdated;
  }

}