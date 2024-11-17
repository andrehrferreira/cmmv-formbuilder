<template>
    <nav class="dark:text-zinc-50">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/locale">Locale</RouterLink>
    </nav>
    <main>
        <div>
            <RouterView />
        </div>
    </main>
</template>

<style lang="scss">
  @import '@vueform/vueform/themes/vueform/scss/index.scss';

  @media (prefers-color-scheme: dark) {
    :root, :before, :after, * {
      @include vf-dark-vars;
    }
  }
</style>
  
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