<script lang="ts">
    import type Car from "../../../lib/models/car";

    type payload = {
        data: Car[]
    }

    export let data: payload;
</script>

<div>
    <table>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
            </tr>
        </thead>
    </table>
    <tbody>
        {#each data.data as car}
            <tr>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
            </tr>
        {/each}
</div>