<template>
    <button>{{ label }}</button>
</template>

<script setup lang="ts">
    const props = defineProps<{
        label:string
    }>();
</script>