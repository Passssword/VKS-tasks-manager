
const workspace = document.querySelector('.workspace')
const btnVKS = document.querySelector('.btnVKS');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// workspace.innerHTML = pages.listPage()


btnVKS.onclick = function () {
    console.log('onclick')
    workspace.innerHTML = "<h1>btnVKS</h1>"
}
// btnVKS.addEventListener('click', (e) => {workspace.innerHTML = '<h1>btnVKS</h1>'} )