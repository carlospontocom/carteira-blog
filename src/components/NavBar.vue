
<script setup>
import { ref } from 'vue';

const menu = ref(false);

const items = [
  { id: 1, url: '#home', label: 'Home' },
  { id: 2, url: '#services', label: 'Serviços' },
  { id: 3, url: '#porque', label: 'Por que usar?' },
  { id: 4, url: '#contact', label: 'Contatos' },
];
</script>

<template>
  <header class="header">
    <nav class="container navbar">

      <div class="brand">
        <span class="brand-name">Vue</span>

        <div class="brand-info">
          <p class="brand-title">Financeiro</p>
          <p class="brand-tagline">Gestão financeira</p>
        </div>
      </div>

      <button
        type="button"
        class="btn-menu"
        @click="menu = !menu"
        :aria-expanded="menu"
        aria-label="Abrir ou fechar menu"
      >
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
          alt=""
        />
      </button>

      <ul class="menu" :class="{ aberto: menu }">
        <li v-for="item in items" :key="item.id">
          <a
            :href="item.url"
            class="item-link"
            @click="menu = false"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

    </nav>
  </header>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

li {
  list-style: none;
}

.header {
  box-shadow: 0 0 5px #00000040;
  padding: 8px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  width: 100%;
}

.container {
  max-width: 992px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-name {
  background-color: blueviolet;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  padding: 10px;
}

.brand-title {
  font-weight: 600;
  letter-spacing: 1.05px;
}

.brand-tagline {
  font-size: 12px;
  color: #00000080;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.btn-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 5px;
}

.menu {
  display: none;
  flex-direction: column;
  background-color: blueviolet;
  width: 100%;
  position: absolute;
  top: 120%;
  left: 0;
}

.menu.aberto {
  display: flex;
}

.item-link {
  color: white;
  display: block;
  padding: 12px 1.5rem;
  text-transform: capitalize;
  text-decoration: none;
}

.item-link:hover {
  background-color: #6b21a8;
}

@media (min-width: 568px) {
  .btn-menu {
    display: none;
  }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    position: static;
    width: auto;
    background-color: transparent;
  }

  .item-link {
    color: blueviolet;
    padding: 10px;
  }

  .item-link:hover {
    background-color: transparent;
    color: #6b21a8;
  }
}
</style>