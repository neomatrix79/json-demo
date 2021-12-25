<script lang="ts">
  import type { UserType } from "../lib/types";
  import User from "./User.svelte";
  import userJson from "../lib/data.json";

  let datas = JSON.stringify(userJson);
  let users: UserType[] = JSON.parse(datas);

  //   $: users = JSON.parse(datas);
</script>

<ul>
  {#each users as user (user.id)}
    <!-- content here -->
    <User {user} />
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding-left: 0.5rem;
    width: 50%;
    height: 450px;
    margin: 2rem auto;
    overflow-y: scroll;
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
