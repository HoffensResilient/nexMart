"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const email = 'test@example.com';
    const password = 'test123';
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: 'USER',
            },
        });
        console.log('✅ Test user created:', email);
    }
    else {
        console.log('ℹ️ Test user already exists:', email);
    }
    const existingProducts = await prisma.product.findMany();
    if (existingProducts.length === 0) {
        await prisma.product.createMany({
            data: [
                {
                    title: 'NexShirt Classic',
                    slug: 'nexshirt-classic',
                    price: 19.99,
                    image: 'https://via.placeholder.com/150',
                    category: 'clothing',
                },
                {
                    title: 'NexShoes Pro',
                    slug: 'nexshoes-pro',
                    price: 49.99,
                    image: 'https://via.placeholder.com/150',
                    category: 'footwear',
                },
                {
                    title: 'NexWatch X',
                    slug: 'nexwatch-x',
                    price: 99.99,
                    image: 'https://via.placeholder.com/150',
                    category: 'electronics',
                },
            ],
        });
        console.log('✅ Test products seeded');
    }
    else {
        console.log('ℹ️ Products already exist, skipping seed');
    }
}
main()
    .catch(e => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map