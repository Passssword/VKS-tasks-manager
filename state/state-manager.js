
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
    get LocalUser () {return JSON.parse(localStorage.User)}
    set LocalUser (userData) { localStorage.User = JSON.stringify(userData) }
    get authStatus () { return this.state.authState}
    set authStatus (userData) {
        this.state.authState.userObject.Nickname = userData.Nickname;
        this.state.authState.userObject.rolle = userData.rolle;
        this.state.authState.isAuth = true;
    }
}

const stateController = new StateController(initialState);

function getAuthStatus () {
    return stateController.LocalUser
}
function setAuthStatus (userData) {
    console.log("settup AuthStatus")
    console.log("settup User Data")
    stateController.authStatus = userData
    stateController.LocalUser = userData
}











module.exports.AuthState = AuthState;
module.exports.initialState = initialState;
module.exports.getAuthStatus = getAuthStatus;
module.exports.setAuthStatus = setAuthStatus;
module.exports.StateController = StateController;