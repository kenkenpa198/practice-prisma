import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@prisma.io",
      posts: {
        create: [
          {
            title: "Hello, World",
            published: true,
          },
          {
            title: "My second post",
            content: "This is still a draft",
          },
        ],
      },
    },
  });
  console.log(user);
  // $ npx ts-node script-relations-01-create.ts
  // { id: 2, email: 'bob@prisma.io', name: 'Bob' }
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
