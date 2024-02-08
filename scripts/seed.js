const { db } = require('@vercel/postgres');
const {
  wallets,
} = require('../src/app/lib/placeholder-data.js');
require('dotenv/config');

async function seedWallet(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "wallets" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS wallets (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        amountPri NUMERIC(10,2) NOT NULL,
        savingAmount NUMERIC(10,2) NOT NULL
      );
    `;

    console.log(`Created "wallets" table`);

    // Insert data into the "wallets" table
    const insertedWallets = await Promise.all(
        wallets.map(async (wallet) => {
        return client.sql`
        INSERT INTO wallets (id, amountPri, savingAmount)
        VALUES (${wallet.id}, ${wallet.amountPri}, ${wallet.savingAmount})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedWallets.length} wallets`);

    return {
      createTable,
      wallets: insertedWallets,
    };
  } catch (error) {
    console.error('Error seeding wallets:', error);
    throw error;
  }
}

async function main() {
    const client = await db.connect();
  
    await seedWallet(client);
  
    await client.end();
  }
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });