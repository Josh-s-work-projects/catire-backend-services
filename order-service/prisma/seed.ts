import { PrismaService } from '../src/prisma/prisma.service';

const prisma = new PrismaService();

async function main() {
  const order = await prisma.order.create({
    data: {
      user_id: 1,
      is_delivery: true,
      notes: 'Sample seeded order',
      address: {
        recipient: 'Sample Customer',
        street: '123 Sample St',
        city: 'Sample City',
        postalCode: '00000',
      },
      status: 'PENDING',
      items: {
        create: [
          {
            product_id: 1,
            menu_id: 1,
            name: 'Sample Product A',
            img_src: '',
            base_price: 5.0,
            category_id: 1,
            quantity: 2,
            line_total: 10.0,
          },
        ],
      },
    },
  });

  console.log('Order seed created', order.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
