import type Car from "./car";

export default interface Warehouse {
    warehouseId: number;
    name: string;
    address: string;
    cars: Car[];
}