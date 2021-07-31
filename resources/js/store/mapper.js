import { mapActions, mapGetters, mapState } from "vuex";

export const usersActions = {
    ...mapActions("users", {
        getUsers: "getUsers"
    })
};
