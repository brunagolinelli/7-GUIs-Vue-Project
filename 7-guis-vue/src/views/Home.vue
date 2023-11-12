<template>
  <div class="flex h-screen">
    <aside class="bg-gray-800 text-white p-4 w-1/4 fixed h-full">
      <h2 class="text-xl font-semibold mb-4">Menu</h2>
      <ul>
        <li><router-link to="/cells">Cells</router-link></li>
        <li><router-link to="/circle-drawer">Circle Drawer</router-link></li>
        <li><router-link to="/counter">Counter</router-link></li>
        <li><router-link to="/crud">Crud</router-link></li>
        <li><router-link to="/flight">Flight</router-link></li>
        <li><router-link to="/temperature-convert">Temperature Convert</router-link></li>
        <li><router-link to="/timer">Timer</router-link></li>
      </ul>
    </aside>

    <main class="flex-grow p-8 ml-1/4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

