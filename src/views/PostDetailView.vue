<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }} here</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to First Post</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const showPostId = () => {
    alert(`Post ID: ${route.params.id}`);
  }

  const goHomeIn3Seconds = () => {
    setTimeout(() => {
      // router.push('/'); // by path of the router
      // or 
      router.push({ name: 'home'}) // by name of the router
    }, 3000);
  };

  const goToFirstPost = () => {
    // -> postDetail/id1
    router.push({
      name: 'postDetail',
      params: { id: 'id1'},
    })
  };
  
</script>