import { createStore } from 'vuex'
import axios from 'axios';
// https://codepen.io/collinsworth/pen/LYYXYzr
// https://stackoverflow.com/questions/65316893/vue-pagination-array-of-objects

const store = createStore({
    state:{
        posts: '',
        currentPage: 1,
        limit: 10,
        totalPages: 0,
        matchCount: 0,
        alphabet: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    },
    getters: {
        totalPosts(state) {
            return state.posts.length;
        },
        allPosts(state) {
            return state.posts.slice((state.currentPage - 1) * state.limit, (state.currentPage - 1) * state.limit + state.limit);
        }
    },
    mutations: {
        GET_POSTS(state, records) {
            state.posts = records.sort(function (x, y) {
                let a = x.title.toUpperCase(),
                    b = y.title.toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
        },
        
        SORT_POSTS(state, sortKey) {
            const posts = state.posts;
            state.posts = posts.sort(function (x, y) {
                let a = x.title.toUpperCase(),
                    b = y.title.toUpperCase();
                return a == b ? 0 : a > b ? sortKey : -1;
            });
        },
        SEARCH_POSTS(state, search) {
            if(search) {
                state.posts = state.posts.filter(post => {
                    return post.title
                    .toUpperCase()
                    .includes(search.toUpperCase())
                })
    
                return state.posts;
            }
        },
        PANGRAM_CHECK(state, search) {
            let match = 0
			state.alphabet.forEach(letter => {
				const letterMatch = new RegExp(letter, 'gi');
				if (search.match(letterMatch, 'gi')) match++;
			});
			
			return state.matchCount = match;
        },
        NEXT_PAGE(state, total) {
            if(state.currentPage != (total / state.limit)){
                state.currentPage ++
            }
        },
        PREV_PAGE(state) {
            if(state.currentPage > 1){
                state.currentPage--
            }
        }
    },
    actions: {
        getPosts({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                commit('GET_POSTS', response.data);
            })
        }
    }
})

export default store;