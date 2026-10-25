<template>
    <input 
    :type="type" :placeholder="placeholder" v-model="model" class="field"/>
</template>


<script setup lang="ts">
    const props = defineProps<{
        type?: 'text' | 'number' | 'email' | 'password';
        placeholder?: string
    }>();

    const model = defineModel<string>({default:''});
</script>

<style scoped>
    .field{
        border:1px solid #ccc;
        border-radius: 6px;
        padding:12px;
        width:100%;
    }
</style>