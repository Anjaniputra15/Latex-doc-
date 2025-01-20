import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: Request) {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM subscriptions ORDER BY created_at DESC');
      return NextResponse.json({ subscriptions: result.rows }, { status: 200 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Failed to fetch subscriptions:', error);
    return NextResponse.json({ error: 'Failed to fetch subscriptions' }, { status: 500 });
  }
}

