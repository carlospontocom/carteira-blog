<script setup>
import { ref } from 'vue';
import { enviarEmail } from '@/email/configJSemail';

const modalForm = ref(false);

const nome = ref("");
const email = ref("");
const telefone = ref("");
const assunto = ref("");
const mensagem = ref("");

const enviando = ref(false);

function fecharModalForm() {
  modalForm.value = false;
}

function abrirModalForm() {
  modalForm.value = true;
}

// Máscara de telefone brasileiro
function mascararTelefone() {
  let valor = telefone.value.replace(/\D/g, "").slice(0, 11);

  if (valor.length > 10) {
    // (99) 9.9999-9999
    valor = valor.replace(/^(\d{2})(\d)(\d{4})(\d{0,4})$/, "($1) $2.$3-$4");
  } else if (valor.length > 6) {
    // (99) 9999-9999
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else if (valor.length > 2) {
    // (99) 999...
    valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else if (valor.length > 0) {
    // (9...
    valor = valor.replace(/^(\d{0,2})$/, "($1");
  }

  telefone.value = valor;
}

async function handleSend() {
  if (enviando.value) return;

  const nomeValor = nome.value.trim();
  const emailValor = email.value.trim();
  const telefoneValor = telefone.value.trim();
  const assuntoValor = assunto.value.trim();
  const mensagemValor = mensagem.value.trim();

  // Campos obrigatórios
  if (!nomeValor || !emailValor || !telefoneValor || !assuntoValor || !mensagemValor) {
    alert("Todos os campos são obrigatórios!");
    return;
  }

  // Nome: mínimo 3 caracteres (evita bloquear nomes curtos)
  if (nomeValor.length < 3) {
    alert("Digite seu nome completo!");
    return;
  }

  // E-mail: formato válido (a regex já cobre tamanho mínimo real)
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(emailValor)) {
    alert("Digite um e-mail válido!");
    return;
  }

  // Telefone: 11 dígitos (DDD + 9 dígitos)
  const telefoneNumeros = telefoneValor.replace(/\D/g, "");
  if (telefoneNumeros.length !== 11) {
    alert("Digite um telefone válido com DDD!");
    return;
  }

  // Assunto: mínimo 6 caracteres
  if (assuntoValor.length < 6) {
    alert("O assunto deve ter no mínimo 6 caracteres!");
    return;
  }

  // Mensagem: mínimo 20 caracteres
  if (mensagemValor.length < 20) {
    alert("A mensagem deve ter no mínimo 20 caracteres!");
    return;
  }

  const dados = {
    nome: nomeValor,
    email: emailValor,
    telefone: telefoneValor,
    assunto: assuntoValor,
    mensagem: mensagemValor,
  };

  try {
    enviando.value = true;

    await enviarEmail(dados);

    alert("E-mail enviado com sucesso!");

    fecharModalForm();

    nome.value = "";
    email.value = "";
    telefone.value = "";
    assunto.value = "";
    mensagem.value = "";
  } catch (erro) {
    console.error("Erro ao enviar e-mail:", erro);
    alert("Não foi possível enviar o e-mail. Verifique sua conexão e tente novamente.");
  } finally {
    enviando.value = false;
  }
}
</script>

<template>
  <div>
    <div class="info">
      <div class="info-content">
        <h3 class="title">Precisa de ajuda?</h3>
        <p>Entre em contato conosco para tirar dúvidas e saber mais
          sobre nossas funcionalidades.</p>
        <button class="btn-info" @click="abrirModalForm">
          <img width="48" height="48" src="https://img.icons8.com/emoji/48/e-mail.png" alt="e-mail" />
          <p>Clique aqui enviar e-mail</p>
        </button>
      </div>
    </div>

    <div class="window-form" v-if="modalForm">
      <div class="modal-content">
        <div class="header-form-mail">
          <h2 class="title-form-mail">Formulário de manifestação</h2>
          <button class="btn-close" @click="fecharModalForm">X</button>
        </div>
        <form class="form" @submit.prevent="handleSend">
          <input type="text" placeholder="Nome completo" v-model="nome" required />
          <input type="E-mail" placeholder="E-mail" v-model="email" required />
          <input v-model="telefone" type="tel" placeholder="(88) 9.9783-8872" maxlength="15" @input="mascararTelefone"
            required /> <input type="text" placeholder="Assunto" v-model="assunto" required />
          <textarea placeholder="Mensagem" v-model="mensagem" required></textarea>
          <button class="btn-enviar" type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>

  </div>
</template>


<style scoped>
.window-form {
  background-color: azure;
  position: fixed;
  top: 3rem;
  height: 100vh;
  width: 100%;
  padding: 3rem 1rem 1rem 1rem;
}

.modal-content {
  background-color: white;
  box-shadow: 0 0 10px #00000050;
  padding: 1rem;
  margin: 0 auto;
  max-width: 400px;
}

.header-form-mail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem auto;
  max-width: 500px;
}

.title-form-mail {
  text-align: center;
}

.btn-close {
  background-color: tomato;
  color: white;
  cursor: pointer;
  border: 0;
  padding: .5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  height: 320px;
}

.form input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

textarea {
  resize: none;
  min-height: 100px;
}

.btn-enviar {
  border: 0;
  padding: 10px;
  background-color: seagreen;
  color: white;
  cursor: pointer;
}

.info {
  padding: 5rem 2rem;
  background-color: orange;
}

.info-content {
  border-radius: 5rem;
  box-shadow: 0 3px 5px #00000050;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  gap: 15px;
  max-width: 768px;
  margin: 0 auto;
}

.btn-info {
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid blueviolet;
  background-color: #fff;
  color: blueviolet;
  font-size: 1.3rem;
  padding: 4px 2rem;
  border-radius: 2rem;
}
</style>