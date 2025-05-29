const input_Date = document.getElementById('CreateVKS_Date');
const input_Object = document.getElementById('CreateVKS_Object');
const input_Type = document.getElementById('CreateVKS_Type');
const Option_Inbox = document.getElementById('CreateVKS_TypeOption_Inbox');
const Option_Outbox = document.getElementById('CreateVKS_TypeOption_Outbox');
const input_Judge = document.getElementById('CreateVKS_Judge');
const input_Hall = document.getElementById('CreateVKS_Hall');
const input_Description = document.getElementById('CreateVKS_Description');
const btn_EditIvent = document.getElementById('btn_EditIvent');


document.addEventListener('DOMContentLoaded', function() {

    let IventEditPageData = stateManager.getIventEditPage()

    let strDate = IventEditPageData.iventDate.split('T')
    let strTime = strDate[1].slice(0,5)
    // let testDate = `${strDate[0]}T${strTime}`
    // console.log(strTime)
    
    input_Date.value = `${strDate[0]}T${strTime}`
    input_Object.value = IventEditPageData.iventObject
    if (IventEditPageData.iventType == 'Inbox') {
        Option_Inbox.selected = true
        Option_Outbox.selected = false
    } else {
        Option_Inbox.selected = false
        Option_Outbox.selected = true
    }
    input_Judge.value = IventEditPageData.iventJudge
    input_Hall.value = IventEditPageData.iventHall
    input_Description.value = IventEditPageData.iventDescription

})