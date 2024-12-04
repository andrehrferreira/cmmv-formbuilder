<!-- Generated automatically by CMMV -->

<template>
    <Vueform ref="form$">
        <StaticElement  name="title" content="Locale" tag="h1" ></StaticElement >
        <TextElement name="code" input-type="text" :mask="{'mask':'AA','overwrite':true}" :placeholder="$t('code', 'Code')" :rules="['required','max:2','min:2']" ></TextElement>
        <TextElement name="code3" input-type="text" :mask="{'mask':'AAA','overwrite':true}" :placeholder="$t('code3', 'Code A3C')" :rules="['required','max:3','min:3']" ></TextElement>
        <TextElement name="codeNum" input-type="number" :mask="{'mask':'000','overwrite':true}" :placeholder="$t('numeric', 'Numeric')" :rules="['required']" ></TextElement>
        <TextElement name="name" input-type="text" :placeholder="$t('name', 'Name')" ></TextElement>
        <TextElement name="nameOriginal" input-type="text" :placeholder="$t('nameOriginal', 'Original Name')" ></TextElement>
        <ButtonElement name="submit" button-label="Submit" button-type="submit" :submits="true" :full="false" ></ButtonElement>
    </Vueform>

</template>

<script setup>
import { ref, onMounted } from 'vue';
const form$ = ref(null);

onMounted(async () => {

});
</script>