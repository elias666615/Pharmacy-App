class UserDataManager {
    private static instance: UserDataManager;

    private static email: string;
    private static firstname: string;
    private static lastname: string;
    private static phonenumber: string;
    private static role: string;
    private static pharmacyname: string;
    private static pharmacylocation: string;
    private static store_id: string;

    private static accessToken: string;
    private static refreshToken: string;

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

    public static getRole(): string {
        return this.role;
    }

    public static getAcessToken(): string {
        return this.accessToken;
    }

    public static getRefreshToken(): string {
        return this.refreshToken;
    }

    public static getStoreId() {
        return this.store_id;
    }
}