import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@example.com";
  const plain = "Admin@123";
  const hash = await bcrypt.hash(plain, 10);

 await prisma.admin.upsert({
  where: { email },
  update: { password: hash },
  create: { email, password: hash },
});

  console.log("✅ Seeded admin:", email, "password:", plain);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
