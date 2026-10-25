 
<script setup>
</script>

<template>
  <section class="services">
    <div class="service">
      <h2 class="title">Nossos serviços</h2>
      <p class="lema">
        Gerencie suas entradas, saídas e saldo em um só lugar,
        com controle financeiro simples e intuitivo.
      </p>
    </div>

    <div class="service-grid">

      <!-- Card 1: Entradas -->
      <div class="card">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/cash-in-hand.png"
          alt="Ícone de entradas financeiras"
        />
        <h3>Entradas</h3>
        <p>
          Registre seus recebimentos, salários e outras fontes de renda,
          acompanhando tudo o que entra na sua carteira.
        </p>
      </div>

      <!-- Card 2: Saídas -->
      <div class="card">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/cash-register.png"
          alt="Ícone de saídas financeiras"
        />
        <h3>Saídas</h3>
        <p>
          Registre suas despesas e acompanhe seus gastos para
          identificar oportunidades de economizar.
        </p>
      </div>

      <!-- Card 3: Saldo -->
      <div class="card">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/money-bag.png"
          alt="Ícone de saldo financeiro"
        />
        <h3>Saldo</h3>
        <p>
          Consulte seu saldo atualizado e tenha uma visão clara
          de quanto dinheiro está disponível.
        </p>
      </div>

      <!-- Card 4: Relatórios -->
      <div class="card">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/combo-chart--v1.png"
          alt="Ícone de relatórios financeiros"
        />
        <h3>Relatórios</h3>
        <p>
          Analise suas movimentações financeiras e visualize
          informações que ajudam no planejamento do seu orçamento.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.services {
  padding-bottom: 2rem;
}

.service {
  padding: 6rem 1rem 2rem;
}

h2.title {
  text-align: center;
  font-size: 2rem;
  color: #333;
}

p.lema {
  max-width: 600px;
  margin: 1rem auto 0;
  text-align: center;
  line-height: 1.6;
  color: #666;
}

.service-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
}

.service-grid .card {
  border: 1px solid #ccc;
  border-radius: 10px;
  flex: 1 1 320px;
  padding: 1.5rem;
  background-color: #fff;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.service-grid .card:hover {
  transform: translateY(-4px);
  box-shadow: 0 5px 15px #00000012;
}

.card img {
  display: block;
  margin-bottom: 1rem;
}

.card h3 {
  margin-bottom: 0.5rem;
  color: blueviolet;
  font-size: 1.2rem;
}

.card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 480px) {
  .service {
    padding-top: 5rem;
  }

  h2.title {
    font-size: 1.6rem;
  }

  .service-grid .card {
    flex-basis: 100%;
  }
}
</style>