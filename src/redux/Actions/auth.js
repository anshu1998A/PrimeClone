import types from "../types"
export const logIn = () => {
    return{
        type: types.LOGIN
    }
}
export const logOut = () => {
    return{
        type: types.LOGOUT
    }
}