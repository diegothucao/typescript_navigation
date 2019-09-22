export interface UserData {
    emailPrimary: string
    firstName: string
    lastName: string
    _id: string
    isConfirmed: Boolean
}

export declare type UUserData = UserData | undefined

export interface LoginUserData {
    token: string
    refreshToken: string
    expiry: number
    data: UserData
}