import type {Warehouse} from "@prisma/client";
import prisma from "../prisma-client";

export const GetWarehouses = async (): Promise<Warehouse[]> => {
    const warehouses = await prisma.warehouse.findMany({
        include: {
            cars: true
        }
    });
    return warehouses;
}