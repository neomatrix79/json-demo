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

  <h5>master write...</h5>

  <h5>master added....</h5>
  <h3>neo write the code...22</h3>

  <h3>neo version 22...</h3>
  <h3>master v2</h3>

  <h2>master add v3</h2>

  <h3>master write...11:45</h3>
  <h3>neo v3~~</h3>

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

  h5 {
    background-color: chocolate;
    color: white;
  }
</style>
