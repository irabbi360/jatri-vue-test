import { createStore } from 'vuex'
import axios from 'axios';

// https://stackoverflow.com/questions/65316893/vue-pagination-array-of-objects

const store = createStore({
    state:{
        posts: '',
        pagination: {
            page: 1,
            limit: 10,
            totalPages: 0,
        }
    },
    getters: {
        totalPosts(state) {
            return state.posts.length;
        }
    },
    mutations: {
        GET_POSTS(state, records) {
            state.posts = records
        }
    },
    actions: {
        getPosts({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                commit('GET_POSTS', response.data)
            })
        }
    }
})

export default store;