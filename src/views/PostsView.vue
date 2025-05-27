<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <!-- ":" puts to treat is as a dynamic bind(${post.id}) instead of static string -->
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
import { ref } from 'vue';

// posts
const posts = ref([
  { id: 'id1', title: 'Post1' },
  { id: 'id2', title: 'Post2' },
  { id: 'id3', title: 'Post3' },
])
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>