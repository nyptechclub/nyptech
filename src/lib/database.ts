import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEvent(id: string) {
  return await prisma.event.findUnique({
    where: {
      id,
    },
  });
}

export async function getEvents() {
  return await prisma.event.findMany();
}

export async function setEvent(event: Prisma.eventCreateInput) {
  return await prisma.event.create({
    data: event,
  });
}

export async function getFeature(id: string) {
  return await prisma.feature.findUnique({
    where: {
      id,
    },
  });
}

export async function getFeatures() {
  return await prisma.feature.findMany();
}

export async function setFeature(feature: Prisma.FeatureCreateInput) {
  return await prisma.feature.create({
    data: feature,
  });
}