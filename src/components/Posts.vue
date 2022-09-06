<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import DataTable from './DataTable.vue'
import Pangram from './Pangram.vue'

export default {
  components: {DataTable, Pangram},
  setup () {
    const store = useStore()
    const search = ref();
    store.dispatch('getPosts')
    const totalPosts = computed(() => store.getters.totalPosts);
    const currentPage = computed(() => store.state.currentPage);
    const posts = computed(() => store.getters.allPosts);

    function prev() {
      store.commit('PREV_PAGE')
    };

    function next() {
      store.commit('NEXT_PAGE', totalPosts.value)
    }

    function searchPost() {
      store.commit('SEARCH_POSTS', search.value)
    }

    return {
      posts,
      totalPosts,
      next,
      prev,
      currentPage,
      search,
      searchPost
    }
  }
}
</script>

<template>
  <div>
  <pangram />
</div>

  <h1>Posts</h1>
  <div style="padding: 10px 0">
    <input type="search" v-model="search" name="search" placeholder="Search here" @input="searchPost">
  </div>
  <DataTable :posts="posts"/>
  <div class="pagination">
    <a href="javascript:void(0)" @click="prev">&laquo;</a>
    <a class="active" href="javascript:void(0)">{{ currentPage }}</a>
    <a href="javascript:void(0)" @click="next">&raquo;</a>
</div>
</template>

<style scoped>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>
