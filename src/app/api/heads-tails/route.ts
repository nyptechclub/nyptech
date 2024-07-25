// src/app/api/heads-tails/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const coinFlip = Math.random() < 0.5 ? 'heads' : 'tails';
  return NextResponse.json({ result: coinFlip });
}
