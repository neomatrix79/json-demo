<script lang="ts">
  import albumJson from "../lib/album.json";
  import type { AlbumType } from "../lib/types";
  import Album from "./Album.svelte";

  const albumStr = JSON.stringify(albumJson);
  const albums: AlbumType[] = JSON.parse(albumStr);

  let clientHeight;
  let elem: HTMLDivElement;

  let scrollTop: number;

  const onScroll = (e: Event) => {
    const div = e.target as HTMLDivElement;

    scrollTop = div.scrollTop;
  };
</script>

{#if !!clientHeight}
  <!-- content here -->
  <div>clientHeight: {clientHeight}</div>
  <div>clientHeight2: {elem.clientHeight}</div>
  <div>scrollHeight: {elem.scrollHeight}</div>
  <div>scrollTop: {scrollTop.toFixed(2)}</div>
  <div>
    scrollHeight - scrollTop = {elem.scrollHeight - Math.round(scrollTop)}
  </div>
{/if}

<div
  class="album-wrapper"
  on:scroll={onScroll}
  bind:this={elem}
  bind:clientHeight
>
  {#each albums as album (album.id)}
    <!-- content here -->
    <Album {album} />
  {/each}
</div>

<style>
  .album-wrapper {
    width: 80%;
    height: 500px;
    margin: 1rem auto;
    overflow-y: scroll;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 10px;
    padding: 1rem;
  }
</style>
