<script setup lang="ts">
    import { ref } from 'vue'

    const server_status = ref('...')

    async function get_server_status() {
        const host = 'http://localhost'
        const port = 8081

        const status_url = `${host}:${port}/status`
        const response = await fetch(status_url)
        const result = await response.json()
        server_status.value = result['status']
    }
</script>

<template>
    <h2>Hello world!</h2>
    <div>Status response from server: {{ server_status }}</div>
    <button @click="get_server_status">Fetch</button>
</template>

<style scoped></style>
