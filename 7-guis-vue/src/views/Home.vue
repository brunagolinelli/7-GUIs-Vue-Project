<template>
  <div class="flex flex-col lg:flex-row h-screen bg-blue-100">
    <aside class="bg-blue-200 text-gray-800 p-4 lg:w-1/5 overflow-y-auto">
      <h2 class="text-xl font-semibold mb-4">Menu</h2>
      <ul>
        <li>
          <router-link class="hover:text-blue-500" to="/cells">Cells</router-link>
        </li>
        <li>
          <router-link class="hover:text-blue-500" to="/circle-drawer">Circle Drawer</router-link>
        </li>
        <li>
          <router-link class="hover:text-blue-500" to="/counter">Counter</router-link>
        </li>
        <li>
          <router-link class="hover:text-blue-500" to="/crud">Crud</router-link>
        </li>
        <li>
          <router-link class="hover:text-blue-500" to="/flight">Flight</router-link>
        </li>
        <li>
          <router-link class="hover:text-blue-500" to="/temperature-convert">Temperature Convert</router-link>
        </li>
        <li>
          <router-link class="hover:text-blue-500" to="/timer">Timer</router-link>
        </li>
      </ul>
    </aside>

    <main class="flex-grow p-8">
      <div class="max-w-full overflow-x-auto">
        <h1 class="text-3xl font-semibold mb-4">Bem-vindo à sua aplicação GUI!</h1>
        <p class="text-gray-600 mb-6">
          As tarefas nesta aplicação foram selecionadas com base em critérios rigorosos.
          O conjunto de tarefas foi projetado para ser o menor possível, mas ainda reflete
          uma ampla gama de desafios típicos na programação de interfaces gráficas do usuário (GUI).
          Cada tarefa é concebida para ser simples e independente, evitando artificialidades excessivas.
          Preferencialmente, cada tarefa é derivada de exemplos existentes, proporcionando uma
          justificativa robusta para sua utilidade, além de já contar com pelo menos uma implementação de referência.
        </p>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>