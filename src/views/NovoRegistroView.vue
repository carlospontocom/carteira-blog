<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import CampoTexto from '@/components/CampoTexto.vue';
import BotaoDefault from '@/components/BotaoDefault.vue';


</script>

<template>
    <section class="register"> 
        <RouterLink to="/">Voltar a home</RouterLink>

        <div class="area-form">
            <h1>Formulário de cadastro</h1>
            <form class="form">
                <CampoTexto typ="text" placeholder="Nome completo" />
                <CampoTexto typ="email" placeholder="E-mail" />
                <CampoTexto typ="password" placeholder="senha" />
                <CampoTexto typ="password" placeholder="Confirmar senha" />
                <BotaoDefault label="Cadastrar"/>            
            </form>
        </div>
    </section>
</template>

<style scoped>
.register{
    background:#958b8b;
    padding:5rem;
}
.area-form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    margin:0 auto;
    max-width: 500px;
    width:100%;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 35px 0;
}
</style>