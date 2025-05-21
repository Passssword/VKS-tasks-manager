const input_Date = document.getElementById('CreateVKS_Date');
const input_Object = document.getElementById('CreateVKS_Object');
const input_Type = document.getElementById('CreateVKS_Type');
const input_Judge = document.getElementById('CreateVKS_Judge');
const input_Hall = document.getElementById('CreateVKS_Hall');
const input_Description = document.getElementById('CreateVKS_Description');
const btn_Create = document.getElementById('btn_CreateVKS_create');

btn_Create.onclick = function () {
    let iventObject = {
        iventDate: "",
        iventObject: "",
        iventType: "",
        iventJudge: "",
        iventHall: "",
        iventDescription: ""
    }
    console.log(iventObject)
}