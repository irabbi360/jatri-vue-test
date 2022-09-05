<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    store.dispatch('getPosts')
    const posts = computed(() => store.state.posts);

    return {
      posts
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Vue 3</h1>
    <pre>{{ posts }}</pre>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
