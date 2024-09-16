# quickstart-sqlite

## Commands

Setup environment:

```shell
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

Install and setup Prisma:

```shell
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
```

Migrate:

```shell
npx prisma migrate dev --name init
```

Run scripts:

```shell
npx ts-node script-01-create.ts
```

## Reference

- [Quickstart with TypeScript & SQLite \| Prisma Documentation](https://www.prisma.io/docs/getting-started/quickstart)
