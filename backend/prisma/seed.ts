import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const alice = await prisma.donation.create({
    data: {
      email: 'aliceBarreto@pgmail.com',
      displayName: 'Alice Barreto',
      count: 5,
    },
  });

  console.log({ alice });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
