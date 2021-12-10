import { Role, Store, UserInfo } from "../models/userModels";

export class UserDataManager {
    private static instance: UserDataManager;

    private static email: string;
    private static accessToken: string;
    private static refreshToken: string;

    private static userinfo: UserInfo;
    private static store: Store;

    

    private constructor() {}

    public static getInstance(): UserDataManager {
        if (!UserDataManager.instance) {
            UserDataManager.instance = new UserDataManager();
        }

        return UserDataManager.instance;
    }

    public static getEmail(): string {
        return this.email;
    }

    public static getRole(): Role {
        return this.userinfo.role;
    }

    public static getAccessToken(): string {
        return this.accessToken;
    }

    public static getRefreshToken(): string {
        return this.refreshToken;
    }

    public static getStore() {
        return this.store;
    }

    public static setEmail(email: string) {
        this.email = email;
    }

    public static setAccess(access: string) {
        this.accessToken = access;
    }

    public static setRefresh(refresh: string) {
        this.refreshToken = refresh;
    }

    public static setUserInfo(userInfo: UserInfo) {
        this.userinfo = userInfo;
    }

    public static setStore(store: Store) {
        this.store = store;
    }

}