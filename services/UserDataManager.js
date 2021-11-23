export default class UserDataManager {

    static myInstance = null;

    user_email = "";
    access_token = "";
    refresh_token = "";
    store = null;

    /**
     * @returns {UserDataManager}
     */
    static getInstance() {
        if (UserDataManager.myInstance == null) {
            UserDataManager.myInstance = new UserDataManager();
        }

        return this.myInstance;
    }

    getUserEmail() {
        return this.user_email;
    }

    setUserEmail(email) {
        this.user_email = email;
    }

    setStore(store) {
        this.store = store;
    }

    getStore() {
        return this.store;
    }
}