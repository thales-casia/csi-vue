<template>
  <article class="home">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </article>
</template>
<script setup lang="ts">
import { useArticle } from '@/store';
import { computed, onMounted } from 'vue';
const props = defineProps({
  id: {
    type: String,
    default: ''
  }
});
const store = useArticle();
const title = computed(() => store.title);
const content = computed(() => store.content);
onMounted(() => {
  store.refreshArticleByID(parseInt(props.id));
});
</script>
