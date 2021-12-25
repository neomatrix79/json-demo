<script lang="ts">
  // import User from "./components/User.svelte";
  import AlbumList from "./components/AlbumList.svelte";
  import UserList from "./components/UserList.svelte";

  interface Data {
    name: string;
    version: string;
  }

  export let pkg: Data = null;
  // let user: User = null;
</script>

<main>
  <h2>package.json</h2>
  <div class="data">name: {pkg.name}</div>
  <div class="data">version: {pkg.version}</div>

  <hr />

  <!-- <UserList /> -->
  <AlbumList />
</main>

<style>
  .data {
    font-size: 2rem;
    color: indigo;
  }

  h2 {
    color: darkorchid;
  }
</style>
