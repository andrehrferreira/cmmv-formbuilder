<template>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">{{ $t("locale", "Locale") }}</h1>

    <ButtonElement 
        type="button"
        buttonType="button"
        text="button"
        name="btnSend"
        @click="() => alert('noix')"
    >Button</ButtonElement>
</template>

<script setup>
import Form from "./localeForm.vue";
import { ButtonElement } from '@cmmv/ui';
</script>