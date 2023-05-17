import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  async create(createDonationInput: Prisma.DonationCreateInput) {
    return await this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  async findAll() {
    return await this.prisma.donation.findMany();
  }

  async findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput,
    });
  }
}
