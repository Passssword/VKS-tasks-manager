const sidebarNickname = document.getElementById('sidebar_nickname');
const sidebarMenu = document.getElementById('sidebar_menu');
const sidebarAdminka = document.getElementById('sidebar_adminka');

let authData = stateManager.authStatus()
// authData = JSON.parse(authData)
if ( authData ) {
    console.log( "authefication Status: true" )
    console.log( authData )
    sidebarNickname.innerHTML = authData.Nickname
    sidebarMenu.innerHTML = `
        <p class="munu_caption">ВКС События:</p>
        <a href="vksList.html" class="menuBtn">Список ВКС</a> <br />
        <a href="tableListVKS.html" class="menuBtn">Таблица ВКС</a> <br />
        <a href="#" class="menuBtn">Отчеты ВКС</a> <br />
        `
    if (authData.rolle == "Admin") {
        sidebarAdminka.innerHTML = `
            <p class="munu_caption">Настройки:</p>
            <a href="settings.html" class="menuBtn">Settings</a> <br />
            <a href="users.html" class="menuBtn">Users</a> <br />
        `
    }
}
else { console.log( "Unregistered user" ) }
