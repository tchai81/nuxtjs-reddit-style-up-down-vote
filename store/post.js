export const state = () => ({
    list: [],
    top20List: [],
    maxItem: 20
})

export const mutations = {
    add(state, title) {
        state.list.push({
            id: state.list.length + 1,
            title: title,
            vote: 0
        })
    },
    upvote(state, index) {
        state.list[index].vote++
    },
    downvote(state, index) {
        if (state.list[index].vote > 0) {
            state.list[index].vote--
        }
    },
    getTop20(state) {
        state.top20List = state.list
            .sort((a, b) => {
                return b.vote - a.vote
            })
            .slice(0, state.maxItem)
    }
}