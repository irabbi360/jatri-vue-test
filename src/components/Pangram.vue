<script>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

export default {
    name: 'PangramChecker',
    setup() {
        const store = useStore();
        const pangram = ref();
        const search = ref();
        const matchCount = computed (() => store.state.matchCount);
        const alphabet = computed (() => store.state.alphabet);

        function pangramChecker() {
            store.commit('PANGRAM_CHECK', search.value);
        };

        return {
            pangram,
            search,
            pangramChecker,
            matchCount,
            alphabet
        }
    },
}
</script>
<template>
    <h1>Pangram Checker</h1>
    <input type="text" v-model="search" @input="pangramChecker">
    <div>
        <p>
		<strong>{{ matchCount }} / {{ alphabet.length }}</strong>: Your text is <span v-if="matchCount !== alphabet.length">not</span> a pangram
	</p>
    <span v-for="(letter, index) in alphabet" :key="index" class="char">{{ letter }}</span>
    </div>
</template>

<style scoped>
.char {
	background: lightslategray;
	color: gainsboro;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
}

</style>