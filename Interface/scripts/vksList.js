const btnVKSList_headermenu = document.getElementById('VKSList_button_1');
const VKSList_li_item = document.getElementById('VKSList_li_item');
const VKSList_GetUser = document.getElementById('VKSList_GetUser');

btnVKSList_headermenu.addEventListener('click', (e) => {
    VKSList_li_item.innerHTML = 'list item'
} )

VKSList_GetUser.onclick = function () {
    let result = stateManager.authStatus()
    console.log( "Authefication Status: "+result.isAuth )
    console.log( "Nickname: "+result.userObject.Nickname )
    console.log( "rolle: "+result.userObject.rolle )
    console.log( "---------------------------------------")
}