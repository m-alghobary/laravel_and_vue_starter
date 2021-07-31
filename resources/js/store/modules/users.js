import http from "../../http";

export const state = {
    users: []
};

export const getters = {};

export const mutations = {
    SET_USERS(state, users) {
        state.users = users;
    }
};

export const actions = {
    async getUsers({ commit }) {
        const { data } = await http.get("/users");

        commit("SET_USERS", data.data);
        return data.data;
    }
};
