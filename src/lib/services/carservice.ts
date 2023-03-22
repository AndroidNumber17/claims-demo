import type Car from "../models/car";
import prisma from "../prisma-client";

export const GetCars = async (): Promise<Car[]> => {
const cars = await prisma.car.findMany();
return cars;
}