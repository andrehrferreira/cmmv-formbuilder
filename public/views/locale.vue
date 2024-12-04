<template>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">{{ $t("locale", "Locale") }}</h1>

    <CButton 
        type="button"
        buttonType="button"
        text="button"
        name="btnSend"
    >Button</CButton>
</template>

<script setup>
import Form from "./localeForm.vue";
import { CButton } from '@cmmv/ui';
</script>