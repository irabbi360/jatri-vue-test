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
        const totalLetter = computed (() => store.state.alphabet.length)

        function pangramChecker() {
            store.commit('PANGRAM_CHECK', search.value);
        };

        return {
            pangram,
            search,
            pangramChecker,
            matchCount,
            totalLetter
        }
    },
}
</script>
<template>
    <h1>Pangram Checker</h1>
    <input type="text" v-model="search" @input="pangramChecker">
    <div>
        <p>
		<strong>{{ matchCount }} / {{ totalLetter }}</strong>: Your text is <span v-if="matchCount !== totalLetter">not</span> a pangram
	</p>
    </div>
</template>

<style scoped>

</style>