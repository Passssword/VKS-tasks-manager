
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
    constructor (state) {
        this.state = state;
        // const btn = document.querySelector('#VKS-List').addEventListener('clisk', );
        // const workspace = document.querySelector('.workspace');
    }
    render (route) {
        if (route == this.initialState.activeRoute) { return 0 }
        else {}
    }
    checkRole (rolle = 'unregistered') {
        if (rolle == this.initialState.authState.userObject.rolle) {}
    }
    renderVKS () {}
    get authStatus () { return this.state.authState.isAuth}
    set authStatus (status) { this.state.authState.isAuth = status}
}

const stateManager = new StateController(initialState);

function getAuthStatus () {
    return stateManager.authStatus
}
function setAuthStatus (status) {
    console.log("проверка setAuthStatus = "+status)
    // return stateManager.authStatus = status
}











module.exports.AuthState = AuthState;
module.exports.initialState = initialState;
module.exports.getAuthStatus = getAuthStatus;
module.exports.setAuthStatus = setAuthStatus;
module.exports.StateController = StateController;