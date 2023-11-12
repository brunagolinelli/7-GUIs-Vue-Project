<template>
  <div
    class="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-blue-200 to-blue-300"
  >
    <aside
      class="bg-blue-400 text-gray-800 p-4 lg:w-1/6 overflow-y-auto transition-all duration-300"
    >
      <h2 class="text-2xl font-bold mb-4">Menu</h2>
      <ul>
        <li>
          <router-link class="menu-link" to="/cells">Cells</router-link>
        </li>
        <li>
          <router-link class="menu-link" to="/circle-drawer"
            >Circle Drawer</router-link
          >
        </li>
        <li>
          <router-link class="menu-link" to="/counter">Counter</router-link>
        </li>
        <li>
          <router-link class="menu-link" to="/crud">Crud</router-link>
        </li>
        <li>
          <router-link class="menu-link" to="/flight">Flight</router-link>
        </li>
        <li>
          <router-link class="menu-link" to="/temperature-convert"
            >Temperature Convert</router-link
          >
        </li>
        <li>
          <router-link class="menu-link" to="/timer">Timer</router-link>
        </li>
      </ul>
    </aside>

    <main class="flex-grow p-8 itens-center justify-center">
      <div class="max-w-2xl mx-auto ">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">
          Bem-vindo à sua aplicação GUI!
        </h1>
        <p class="text-gray-500 mb-6">
          As tarefas nesta aplicação foram selecionadas com base em critérios
          rigorosos. O conjunto de tarefas foi projetado para ser o menor
          possível, mas ainda reflete uma ampla gama de desafios típicos na
          programação de interfaces gráficas do usuário (GUI). Cada tarefa é
          concebida para ser simples e independente, evitando artificialidades
          excessivas. Preferencialmente, cada tarefa é derivada de exemplos
          existentes, proporcionando uma justificativa robusta para sua
          utilidade, além de já contar com pelo menos uma implementação de
          referência.
        </p>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
/* Adicionei alguns estilos de cor e fonte aqui */
body {
  font-family: "Arial", sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

.menu-link {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

.menu-link:hover {
  color: #87ceeb; /* Cor mais clara para o hover */
}
</style>