<script setup>
import NavBar from '../components/NavBar.vue';
import FooterHome from '../components/FooterHome.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <NavBar />
    <RouterView />
    <FooterHome />
</template>