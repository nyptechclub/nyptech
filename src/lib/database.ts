import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEvents() {
  return await prisma.event.findMany();
}

export async function getFeatures() {
  return await prisma.feature.findMany();
}