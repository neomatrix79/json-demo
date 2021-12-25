<script lang="ts">
  import type { AlbumType } from "../lib/types";

  export let album: AlbumType = null;
</script>

<div class="album-box">
  <div class="title">{album.title}</div>
  <img src={album.url} alt={album.title} />
</div>

<style>
  .album-box {
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }

  .title {
    /* font-size: 1.5rem; */
    font-weight: 700;
    color: darkslateblue;
    height: 100px;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
</style>
