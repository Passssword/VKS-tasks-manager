
const VKSList_btnCreateVKS = document.getElementById('VKSList_btnCreateVKS');

const VKSList_ivent_wrapper = document.getElementById('VKSList_ivent_wrapper');

const modalWindow = document.querySelector('.modal_wrapper');
const Modal_Caption_Date = document.getElementById('Modal_Caption_Date');
const Modal_Caption_Organization = document.getElementById('Modal_Caption_Organization');
const Modal_Caption_Type = document.getElementById('Modal_Caption_Type');
const Modal_Info_Judge = document.getElementById('Modal_Info_Judge');
const Modal_Info_Hall = document.getElementById('Modal_Info_Hall');
const Modal_Info_Date = document.getElementById('Modal_Info_Date');
const Modal_Info_Worker = document.getElementById('Modal_Info_Worker');
const Modal_Comment = document.getElementById('Modal_Comment');
const Modal_Footer_DateRegistration = document.getElementById('Modal_Footer_DateRegistration');
const btnModal_Edit = document.getElementById('btnModal_Edit');
const btnModal_Close = document.getElementById('btnModal_Close');

VKSList_btnCreateVKS.onclick = function () {
    window.location.replace("create-vks.html");
}

const reformatDate = (iventsArray) => {
    
    return iventsArray.map( elem => {
        let date = new Date(elem.iventDate)
        return {
            id: elem.id,
            iventDate: date,
            iventObject: elem.iventObject,
            iventType: elem.iventType,
            iventJudge: elem.iventJudge,
            iventHall: elem.iventHall,
            iventDescription: elem.iventDescription,
            iventWorker: elem.iventWorker,
            registrationDate: elem.registrationDate,
        }
    })

}

const mapIvents = (ivents) => {

    return ivents.map(ivent => `
        <a class="VKSList_link_wrapper" href="#">
            <div class="VKSList_event_wrapper">

            <div class="VKSList_event_caption">
                <p>${ivent.iventDate.toLocaleDateString()} - ${ivent.iventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                <p>${ivent.iventObject}</p>
                <p>${ivent.iventType}</p>
            </div>

        </div></a>`
    )
}

const arrToString = (array) => {
    let stringValue = ""
    array.forEach(element => {
        stringValue += element
    });

    return stringValue
}

function addEventsButtons (ivents) {
    const VKSList_link = document.querySelectorAll('.VKSList_link_wrapper');
    
    let elementsCount = 0
    VKSList_link.forEach( element => {
        let ivent = ivents[elementsCount]
        element.addEventListener('click', (e) => {
            stateManager.setIventEditPage(ivent)
            renderModalWindow(ivent)
        })
        element.addEventListener('mouseover', (elem) => {
            let target = elem.target;
            target.parentNode.style.background = "var(--color7)"
        })
        element.addEventListener('mouseout', (elem) => {
            let target = elem.target;
            target.parentNode.style.background = ""
        })

        elementsCount++
    })
}

iventsController.GetAllIvents().then( ivents => {
    console.log(ivents)

    let reformatIventsArray = reformatDate(ivents)
    let iventsMap = mapIvents(reformatIventsArray)
    let iventsHTML = arrToString(iventsMap)

    VKSList_ivent_wrapper.innerHTML = iventsHTML

    addEventsButtons (reformatIventsArray)
})



/* Включение / Выключение модального окна */
// VKSList_link.addEventListener('click', (e) => {modalWindow.style.display = 'flex';})
btnModal_Close.onclick = function () {modalWindow.style.display = 'none';}

/* Заполнение модального окна */
const renderModalWindow = (ivent) => {
    modalWindow.style.display = 'flex';

    let iventDate = `${ivent.iventDate.toLocaleDateString()} - ${ivent.iventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    Modal_Caption_Date.innerHTML = iventDate
    Modal_Caption_Organization.innerHTML = ivent.iventObject
    Modal_Caption_Type.innerHTML = ivent.iventType
    Modal_Info_Judge.innerHTML = ivent.iventJudge
    Modal_Info_Hall.innerHTML = ivent.iventHall
    Modal_Info_Date.innerHTML = iventDate
    Modal_Info_Worker.innerHTML = ivent.iventWorker
    Modal_Comment.innerHTML = ivent.iventDescription
    Modal_Footer_DateRegistration.innerHTML = ivent.iventRegistrationDate
}

/* Переход на страницу редактирования события */
btnModal_Edit.onclick = function () {
    window.location.replace("edit-vks.html");
}