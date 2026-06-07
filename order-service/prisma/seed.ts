import { PrismaService } from '../src/prisma/prisma.service';

const prisma = new PrismaService();

async function main() {
  const order = await prisma.order.create({
    data: {
      user_id: 1,
      is_delivery: true,
      notes: 'Orden especial',
      address: {
        street: 5,
        avenue: 10,
        house_number: 2,
        reference: 'Al lado de Pizza Antonio',
      },
      status: 'PENDING',
      items: {
        create: [
          {
            product_id: 1,
            quantity: 2,
            features: [
              {
                name_tag: 'TYPE_MEAT',
                value: 'Carne',
              },
              {
                name_tag: 'SIZE',
                value: 'Mediana',
              },
            ],
          },
          {
            product_id: 2,
            quantity: 1,
            features: [
              {
                name_tag: 'TOPPINGS',
                value: 'Queso extra',
              },
              {
                name_tag: 'SAUCE',
                value: 'Napolitana',
              },
            ],
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
