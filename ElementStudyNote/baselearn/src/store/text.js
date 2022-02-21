export default {
    state: {
        count: 0,
    },
    getters:  {
        doubleCount(state) {
            return state.count * 2;
        }
    },
    // 方法
    mutations: {
        add(state) {
            state.count++;
        },
        decrease(state) {
            state.count--;
        }
    },
}