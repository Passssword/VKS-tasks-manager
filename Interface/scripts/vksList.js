
const VKSList_btnCreateVKS = document.getElementById('VKSList_btnCreateVKS');


VKSList_btnCreateVKS.onclick = function () {
    window.location.replace("create-vks.html");
}

iventsController.GetAllIvents().then( res => {
    console.log(res)
})