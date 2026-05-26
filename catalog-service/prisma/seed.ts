import { PrismaService } from 'src/prisma/prisma.service';

const prisma = new PrismaService();

async function main() {
  const branch1 = await prisma.branch.upsert({
    where: { name: 'Branch 1' },
    update: {},
    create: {
      name: 'Branch 1',
      coordinates_long: -72.20961952403658,
      coordinates_lat: 7.7683729580809295,
    },
  });

  const branch2 = await prisma.branch.upsert({
    where: { name: 'Branch 2' },
    update: {},
    create: {
      name: 'Branch 2',
      coordinates_long: -72.22707251374922,
      coordinates_lat: 7.782521387818282,
    },
  });

  await prisma.branch.upsert({
    where: { name: 'Branch 3' },
    update: {},
    create: {
      name: 'Branch 3',
      coordinates_long: -72.47458764413882,
      coordinates_lat: 7.914157382429402,
    },
  });

  await prisma.branch.upsert({
    where: { name: 'Branch 4' },
    update: {},
    create: {
      name: 'Branch 4',
      coordinates_long: -72.48847070413751,
      coordinates_lat: 7.894905770669543,
    },
  });

  const category = await prisma.category.upsert({
    where: { name: 'Default' },
    update: {},
    create: { name: 'Default' },
  });

  const menuA = await prisma.menu.upsert({
    where: { name: 'Main Menu A' },
    update: {},
    create: { name: 'Main Menu A', branch_id: branch1.id },
  });

  const menuB = await prisma.menu.upsert({
    where: { name: 'Main Menu B' },
    update: {},
    create: { name: 'Main Menu B', branch_id: branch2.id },
  });

  await prisma.product.upsert({
    where: { name: 'Sample Product A' },
    update: {},
    create: {
      name: 'Sample Product A',
      img_src: '',
      base_price: 5.0,
      menu_id: menuA.id,
      category_id: category.id,
    },
  });

  await prisma.product.upsert({
    where: { name: 'Sample Product B' },
    update: {},
    create: {
      name: 'Sample Product B',
      img_src: '',
      base_price: 7.5,
      menu_id: menuB.id,
      category_id: category.id,
    },
  });

  console.log('Catalog seed completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
