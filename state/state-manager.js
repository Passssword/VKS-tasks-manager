
const indexAC = ( route = '/', data = null ) => {}

const AuthState = {
    isAuth: false,
    role: 'Unregestered'
}
const initialState = {
    activeRoute: '/',
    authState: {
        isAuth: false,
        userObject: {
            Nickname: null,
            rolle: 'unregistered',
        }
    }
}

const reducer = (state = initialState, route) => {
    switch(route) {
        case 'INDEX-PAGE':
            return 0
        case 'LOGIN-PAGE':
            return 0
        case 'SETTINGS-PAGE':
            return 0
        default:
            return 0
    }
}

class StateController {
    constructor () {
        this.initialState = initialState
    }
    render (route) {
        if (route == this.initialState.activeRoute) { return 0 }
        else {}
    }
    checkRole (rolle = 'unregistered') {
        if (rolle == this.initialState.authState.userObject.rolle) {}
    }
}

export default StateController;