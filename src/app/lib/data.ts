import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Wallet } from './definition';


export async function fetchWallet() {
  noStore();
  try {

    await new Promise((resolve) => setTimeout(resolve, 20));

    const data = await sql<Wallet>`SELECT * FROM wallets`;

    console.log('Data fetch completed after 2 seconds.');
    console.log(data.rows);
    
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch wallets data.');
  }
}