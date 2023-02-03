<script>
    import { loading } from "../stores/loading";
    import { poke_info } from "../stores/poke";


    let search_txt = "";

    const searchPoke = async ()=>{
        $loading = true;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search_txt}`);

        $loading = false;

        if (!response.ok) {
            $poke_info = null;
            return;
        }

        const json = await response.json();

        const name = json.name;
        const image = json.sprites.other["official-artwork"].front_default;
        const ability = json.abilities[0].ability.name;

        const [ hp, atk, def ] = json.stats.map(stat => stat.base_stat);

        $poke_info = {
            name, image, ability, hp, atk, def
        }
    }

    $: if (search_txt != search_txt.toLowerCase()) search_txt = search_txt.toLowerCase();

</script>

<main>
    <input type="text" name="search" id="search" placeholder="Search" bind:value={search_txt}>
    <button on:click={searchPoke}>Go!</button>
</main>

<style>
    input, button {
        padding: 0.5rem 0.7rem;
        border: none;
        /* font-weight: bold; */
        font-size: 1.2rem;
    }
</style>
