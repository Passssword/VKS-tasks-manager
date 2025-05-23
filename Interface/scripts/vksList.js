
const VKSList_btnCreateVKS = document.getElementById('VKSList_btnCreateVKS');
const VKSList_link = document.querySelector('.VKSList_link_wrapper');
const modalWindow = document.querySelector('.modal_wrapper');
const btnModal_Edit = document.getElementById('btnModal_Edit');
const btnModal_Close = document.getElementById('btnModal_Close');

VKSList_btnCreateVKS.onclick = function () {
    window.location.replace("create-vks.html");
}

iventsController.GetAllIvents().then( res => {
    console.log(res)
})


/* Включение / Выключение модального окна */
VKSList_link.addEventListener('click', (e) => {modalWindow.style.display = 'flex';})
btnModal_Close.onclick = function () {modalWindow.style.display = 'none';}