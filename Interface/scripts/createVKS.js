const input_Date = document.getElementById('CreateVKS_Date');
const input_Object = document.getElementById('CreateVKS_Object');
const input_Type = document.getElementById('CreateVKS_Type');
const input_Judge = document.getElementById('CreateVKS_Judge');
const input_Hall = document.getElementById('CreateVKS_Hall');
const input_Description = document.getElementById('CreateVKS_Description');
const btn_Create = document.getElementById('btn_CreateVKS_create');

btn_Create.onclick = function () {
    let authData = stateManager.authStatus()
    let dateNow = new Date()
    let dateString = dateFormatString(dateNow)

    console.log(authData) 

    let iventObject = {
        iventDate: input_Date.value,
        iventObject: input_Object.value,
        iventType: input_Type.value,
        iventJudge: input_Judge.value,
        iventHall: input_Hall.value,
        iventDescription: input_Description.value,
        iventWorker: `${authData.lastName} ${authData.firstName} ${authData.patronymic}`,
        registrationDate: Date.parse(dateNow)
    }
    console.log(dateString)
    console.log(iventObject)

    iventsController.CreateNewIvent(iventObject).then( res => {
        window.location.replace("vksList.html");
    })
}

const dateFormatString = (date) => {
    // let dateObject = {
    //     year: date.getFullYear(),
    //     mount: date.getMonth(),
    //     day: date.getDate(),
    //     hours: date.getHours(),
    //     minutes: date.getMinutes()
    // }

    let dateObj = {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
    }

    let dateString = `Дата регистрации события: ${dateObj.date} Время: ${dateObj.time}}`
    
    return dateString
}