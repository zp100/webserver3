<script setup lang="ts">
    import { ref } from 'vue'

    const server_status = ref('...')

    async function get_server_status() {
        const api_url = import.meta.env['VITE_BACKEND_URL']
        const status_url = `${api_url}/status`
        try {
            const response = await fetch(status_url)
            const result = await response.json()
            server_status.value = result['status']
        } catch (e) {
            console.error(e.message)
            server_status.value = '<fetch error>'
        }
    }
</script>

<template>
    <h2>Hello world!</h2>
    <div>Status response from server: {{ server_status }}</div>
    <button @click="get_server_status">Fetch</button>
</template>

<style scoped></style>
