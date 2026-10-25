
<script setup>
const telefone = '5588997838872';
const email = 'frontendcnn@gmail.com';

const linksUteis = [
  {
    label: 'Documentação Vue',
    url: 'https://vuejs.org/guide/introduction.html',
  },
  {
    label: 'Dúvidas com IA',
    url: 'https://chatgpt.com/',
  },
  {
    label: 'Carteira financeira',
    url: '#home',
  },
];

const redesSociais = [
  {
    label: 'GitHub',
    url: 'https://github.com/carlospontocom',
    icon: 'https://img.icons8.com/ios/ffffff/50/github--v1.png',
    alt: 'GitHub',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: 'https://img.icons8.com/fluency/48/linkedin.png',
    alt: 'LinkedIn',
  },
  {
    label: 'E-mail profissional',
    url: `mailto:${email}`,
    icon: 'https://img.icons8.com/emoji/48/e-mail.png',
    alt: 'E-mail',
  },
  {
    label: 'WhatsApp',
    url: `https://wa.me/${telefone}`,
    icon: 'https://img.icons8.com/color/48/whatsapp--v1.png',
    alt: 'WhatsApp',
  },
];
</script>

<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- Marca -->
      <div class="brand">
        <span class="brand-name">Vue</span>

        <div class="brand-info">
          <p class="brand-title">Financeiro</p>
          <p class="brand-tagline">Gestão financeira</p>
        </div>
      </div>

      <!-- Links úteis -->
      <div class="links-uteis">
        <h3>Links úteis</h3>

        <ul>
          <li v-for="link in linksUteis" :key="link.label">
            <a :href="link.url" class="link-util" style="color:white">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Contatos -->
      <div class="contacts">
        <h3>Contatos</h3>

        <ul>
          <li>Rua Vituais</li>
          <li>Quadra 10, Conjunto B, Lote 1542, Sobral/CE</li>

          <li>
            <a :href="`https://wa.me/${telefone}`" target="_blank" rel="noopener noreferrer" style="color:white">
              (88) 9.9783-8872
            </a>
          </li>

          <li>
            <a :href="`mailto:${email}`" style="color:white">
              {{ email }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Redes sociais -->
      <div class="contacts">
        <h3>Redes sociais</h3>

        <ul class="social-links">
          <li v-for="rede in redesSociais" :key="rede.label">
            <a
              :href="rede.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="rede.label"
              style="color:white"
            >
              <img
                :src="rede.icon"
                :alt="rede.alt"
                width="30"
                height="30"
              />
              <span>{{ rede.label }}</span>
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Vue Financeiro. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding:6rem 1.5rem 1.5rem;

/**  background-color: #f8f7fb; **/
background-color: black;
  color: white;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
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
  font-weight: 700;
}

.brand-tagline {
  font-size: 12px;
  color: #777;
}

.links-uteis,
.contacts {
  max-width: 280px;
}

.links-uteis h3,
.contacts h3 {
  margin-bottom: 1rem;
  color: blueviolet;
  font-size: 1.1rem;
}

.links-uteis ul,
.contacts ul {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
}

.links-uteis li,
.contacts li {
  list-style: none;
  font-size: 0.95rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.links-uteis a,
.contacts a {
  color: #555;
  text-decoration: none;
  transition: color 0.2s ease;
}

.links-uteis a:hover,
.contacts a:hover {
  color: blueviolet;
}

.social-links a {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-links img {
  object-fit: contain;
}

.footer-bottom {
  max-width: 1100px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid #ddd;
  text-align: center;
  color: #777;
  font-size: 0.85rem;
}

@media (max-width: 600px) {
  .footer {
    padding: 3rem 1.2rem 1.5rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }

  .links-uteis,
  .contacts {
    max-width: 100%;
  }
}
</style>