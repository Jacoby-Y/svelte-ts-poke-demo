<script lang="ts">
    export let info: Pokemon;

</script>

<main>
    <h2 id="name">{info.name}</h2>
    <img id="image" src="{info.image}" alt="Sprite">
    <div id="stats">
        <h3 id="hp">HP: {info.hp}</h3>
        <h3 id="atk">ATK: {info.atk}</h3>
        <h3 id="def">DEF: {info.def}</h3>
    </div>
    <!-- Just in case if a Pokemon doesn't have any abilities -->
    {#if info.ability}
        <h3 id="ability">Ability: {info.ability}</h3>
    {/if}
</main>

<style>
    #name {
        text-align: center;
        font-size: 2.5rem;
    }
    #name, #ability {
        text-transform: capitalize;
    }
    h3 {
        font-size: 1.5rem;
    }
    #ability {
        color: #f116d8;
        text-align: center;
        padding-top: 0.5rem;
    }
    #stats {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    #hp { color: #19bd19; }
    #atk { color: #ff4b4b; }
    #def { color: #0091ff; }
    #image {
        border: 2px dashed #555;
        margin: 1rem 0;
        max-width: 100vw;
    }
</style>
