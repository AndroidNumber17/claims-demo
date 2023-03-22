import type {PageServerLoad} from "../../../../.svelte-kit/types/src/routes/sverdle/$types";
import {GetCars} from "../../../lib/services/carservice";

export const load: PageServerLoad = async () => {
    const data = await GetCars();
    return {
        data
    }
}