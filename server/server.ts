import { PrismaClient } from "@prisma/client";

// You can also overwrite the db url here
/*const prisma = new PrismaClient({
    datasources: {
        db: {
            url: ""
        }
    }
});*/

const prisma = new PrismaClient();

RegisterCommand(
  "getfromprisma",
  async () => {
    const data = await prisma.users.findMany();
    console.log(data);
  },
  false
);
