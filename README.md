# FiveM boilerplate with Prisma

### Credits to [AleksHSE](https://github.com/AleksanderEvensen/prisma-fivem-poc) for the initial PoC.

## Getting started

1. Run `pnpm install` to install deps
2. Add your db connction string as an env variable, or overwrite the datasource in `./server/server.ts` 
3. Run `pnpm prisma db pull` to connect your database and add Prisma models to your Prisma schema.
4. Run `pnpm prisma generate` to generate the necessary assets.
