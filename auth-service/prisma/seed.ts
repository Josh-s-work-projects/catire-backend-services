import bcrypt from 'bcrypt';
import { DefaultPermissions, Role } from './types';
import { PrismaService } from '../src/prisma/prisma.service';

const prisma = new PrismaService();

async function main() {
  const roleNames: Role[] = ['client', 'employee', 'admin'];

  for (const name of roleNames) {
    const defaultPermissions: DefaultPermissions = {
      client: {
        Branches: ['read'],
        Products: ['read'],
        Menus: ['read'],
        Orders: ['create', 'read'],
        Purchases: ['create', 'read'],
        Users: [],
        Roles: [],
      },
      employee: {
        Menus: ['create', 'read', 'update', 'delete'],
        Products: ['create', 'read', 'update', 'delete'],
        Orders: ['read', 'update'],
        Purchases: ['read'],
        Branches: ['read'],
        Users: ['read'],
        Roles: [],
      },
      admin: {
        Branches: ['create', 'read', 'update', 'delete'],
        Menus: ['create', 'read', 'update', 'delete'],
        Products: ['create', 'read', 'update', 'delete'],
        Users: ['create', 'read', 'update', 'delete'],
        Roles: ['create', 'read', 'update', 'delete'],
        Orders: ['create', 'read', 'update', 'delete'],
        Purchases: ['create', 'read', 'update', 'delete'],
      },
    };

    await prisma.role.upsert({
      where: { name },
      update: {},
      create: {
        name,
        permissions_json: defaultPermissions[name],
      },
    });
  }

  const clientRole = await prisma.role.findUnique({
    where: { name: 'client' },
  });
  const employeeRole = await prisma.role.findUnique({
    where: { name: 'employee' },
  });
  const adminRole = await prisma.role.findUnique({ where: { name: 'admin' } });

  const pwd = await bcrypt.hash('Password123!', 10);

  if (clientRole) {
    await prisma.user.upsert({
      where: { email: 'client@example.com' },
      update: {},
      create: {
        role_id: clientRole.id,
        full_name: 'Usuario Cliente',
        email: 'client@example.com',
        dni: 10000001,
        phone_1: '5550000001',
        password: pwd,
      },
    });
  }

  if (employeeRole) {
    await prisma.user.upsert({
      where: { email: 'employee@example.com' },
      update: {},
      create: {
        role_id: employeeRole.id,
        full_name: 'Usuario Empleado',
        email: 'employee@example.com',
        dni: 10000002,
        phone_1: '5550000002',
        password: pwd,
      },
    });
  }

  if (adminRole) {
    await prisma.user.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        role_id: adminRole.id,
        full_name: 'Usuario Administrador',
        email: 'admin@example.com',
        dni: 10000003,
        phone_1: '5550000003',
        password: pwd,
      },
    });
  }

  console.log('Seed de autenticación completado');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
