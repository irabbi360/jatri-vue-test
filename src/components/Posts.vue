<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import DataTable from './DataTable.vue'

export default {
  components: {DataTable},
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
  <h1>Posts</h1>
  <DataTable :posts="posts"/>
</template>

<style scoped>

</style>
