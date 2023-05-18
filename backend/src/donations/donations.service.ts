import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderByParams } from '../graphql';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  async create(createDonationInput: Prisma.DonationCreateInput) {
    return await this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  async findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return await this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  async findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput,
    });
  }

  async getTotal() {
    const donations = await this.prisma.donation.aggregate({
      _sum: {
        count: true,
      },
    });
    return donations._sum.count;
  }
}
