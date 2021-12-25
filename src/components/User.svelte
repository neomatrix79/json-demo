<script lang="ts">
  interface User {
    id: number;
    name: string;
    password: string;
  }

  export let user: User = null;
</script>

<li>
  <div class="data">user-id: {user.id}</div>
  <div class="data">user-name: {user.name}</div>
  <div class="data">user-password: {user.password}</div>
</li>
<hr />

<style>
  .data {
    font-size: 2rem;
    color: white;
  }
</style>
