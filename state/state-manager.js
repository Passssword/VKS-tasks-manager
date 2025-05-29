
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
    // get authStatus () { return this.state.authState}
    // set authStatus (userData) {
    //     this.state.authState.userObject.Nickname = userData.Nickname;
    //     this.state.authState.userObject.rolle = userData.rolle;
    //     this.state.authState.isAuth = true;
    // }
    get IventEditPageData () {return JSON.parse(localStorage.IventEditPageData)}
    set IventEditPageData (userData) { 
        // localStorage.removeItem('IventEditPageData')
        localStorage.IventEditPageData = JSON.stringify(userData) }
    get UserEditPageData () {return JSON.parse(localStorage.UserEditPageData)}
    set UserEditPageData (userData) { 
        // localStorage.removeItem('UserEditPageData')
        localStorage.UserEditPageData = JSON.stringify(userData) }
}

const stateController = new StateController(initialState);

function getAuthStatus () {
    return stateController.LocalUser
}
function setAuthStatus (userData) { stateController.LocalUser = userData }
function getEditPage () {return stateController.UserEditPageData}
function setEditPage (userData) { stateController.UserEditPageData = userData}
function getIventEditPage () {return stateController.IventEditPageData}
function setIventEditPage (iventData) { stateController.IventEditPageData = iventData}









module.exports.AuthState = AuthState;
module.exports.initialState = initialState;
module.exports.getAuthStatus = getAuthStatus;
module.exports.setAuthStatus = setAuthStatus;
module.exports.getEditPage = getEditPage;
module.exports.setEditPage = setEditPage;
module.exports.getIventEditPage = getIventEditPage;
module.exports.setIventEditPage = setIventEditPage;
module.exports.StateController = StateController;