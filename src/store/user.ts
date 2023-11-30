/* eslint-disable */
import { StoreOptions } from "vuex";

export default {
    namespaced: true,
    // initial state
    state: () =>
        ({
            user: {
                username: "未登录",
              role: "noLogin",
            },
        }),
    // getters
    getters: {},
    // mutations
    mutations:
        {
            editUser(state, payload)
            {
                state.user = payload
            },
        },
    // actions
    actions:
        {
            getUser({commit})
            {
                commit("editUser", {username: "mabbit"})
            },
        },
} as StoreOptions<any>;
