import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
  // $ npx ts-node script-02-findMany.ts
  // [ { id: 1, email: 'alice@prisma.io', name: 'Alice' } ]
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
