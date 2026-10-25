<script setup></script>

<template>
  <section id="hero">
    <div class="container hero">
      <div class="hero-content">
        <div class="badge">Gestor de finanças com VUE</div>
        <h1>Sistema web gerenciador de <span>Fianças Pessoais</span></h1>
        <p>Criado para administrar rendas e gastos a nível profissional com VueTS</p>


        <div class="line-tag">
          <span>Vuets</span>
          <span>Api NodeJS</span>
          <span>Mysql Tidb</span>
        </div>

        <div class="actions">
          <button class="btn-solid">Explore mais</button>
          <button class="btn-outline">Informações</button>
        </div>
      </div>

      <div class="hero-image">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487912304-274bac203320?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          class="hero-image" />
      </div>
    </div>
  </section>
</template>


<style>
#hero{
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
}
  
.hero {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 400px;
 }

.badge {
  background-color: aliceblue;
  border-radius: 20px;
  padding: 5px 1rem;
  width: fit-content;
  font-size: 12px;
  letter-spacing: 1.09px;
}

h1 {
  margin: 1rem 0;
}

.hero-content span {
  color: blueviolet;
}

.hero-content p {
  line-height: 160%;
  color: #00000080;
}

.hero-image {
  border-radius: 1rem;
  width: 100%;
}

.line-tag {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.line-tag span {
  border-radius: 6px;
  border-left: 3px solid plum;
  padding-inline: .5rem;
}

.hero-content .actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.hero-content .actions button {
  border: 0;
  padding: .7rem;
}

.btn-solid {
  background-color: blueviolet;
  border: 2px solid blueviolet;
  color: white;
  font-weight: 800;
  letter-spacing: 1.08px;
}

.btn-outline {
  border: 2px solid blueviolet;
}

@media (min-width:800px) {
  
  #hero{
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  min-height: 100vh;
 }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  .hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 992px;
  }
}
</style>