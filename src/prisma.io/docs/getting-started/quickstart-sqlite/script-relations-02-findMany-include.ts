import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log(usersWithPosts);
  // $ npx ts-node script-relations-02-findMany-include.ts
  // [
  //   { id: 1, email: 'alice@prisma.io', name: 'Alice', posts: [] },
  //   {
  //     id: 2,
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: [ [Object], [Object] ]
  //   }
  // ]
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
