<template>
    <main class="container m-auto">
        <RouterView />
    </main>
</template>
  
<script setup lang="ts">
import CmmvMixins from "/public/assets/rpc-mixins.js";
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineOptions({
    mixins: [CmmvMixins],
});

onMounted(() => {
    const currentPath = window.location.pathname;

    if (currentPath && currentPath !== router.currentRoute.value.path) {
        router.push(currentPath).catch((err) => {
            if (err.name !== 'NavigationDuplicated') 
                console.error(err);
        });
    }
});
</script>