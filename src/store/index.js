import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state:{
        posts: ''
    },
    getters: {},
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