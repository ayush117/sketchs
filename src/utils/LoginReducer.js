export const LoginReducer=(state, action)=> {
    switch (action.type) {
        case 'login_success':
            return {login: true};
        default:
            return {login: false}
    }
}