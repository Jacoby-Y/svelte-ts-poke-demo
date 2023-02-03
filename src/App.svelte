<script>
    import NoPoke from "./lib/NoPoke.svelte";
    import PokeInfo from "./lib/PokeInfo.svelte";
    import Search from "./lib/Search.svelte";
    import { poke_info } from "./stores/poke";
    // import { loading } from "./stores/loading";

</script>

<!-- Could add the dynamic class attribute -->
<main> <!-- class:loading={$loading} -->
    <h1>Search a Pokemon!</h1>
    
    <Search />

    {#if $poke_info != null}
        <PokeInfo info={$poke_info} />
    {:else}
        <NoPoke />
    {/if}
</main>

<style>
    h1 {
        padding: 1rem;
    }
    main { 
        width: max-content;
        margin: 0 auto;
        transition-duration: 0.3s;
        height: 100%;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content 1fr;
        justify-items: center;
        align-items: center;
    }
</style>
