<template>
    <MdEditor v-model="text" theme="light" language="en-US" preview-theme="github" code-theme="stackoverflow" />
</template>
  
<script setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('# md-editor-v3');
</script>