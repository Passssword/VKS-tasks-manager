
const VKSList_btnCreateVKS = document.getElementById('VKSList_btnCreateVKS');

const modalWindow = document.querySelector('.modal_wrapper');
const btnModal_Edit = document.getElementById('btnModal_Edit');
const btnModal_Close = document.getElementById('btnModal_Close');
const VKSList_ivent_wrapper = document.getElementById('VKSList_ivent_wrapper');



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
    
    VKSList_link.forEach( element => {
        element.addEventListener('click', (e) => {modalWindow.style.display = 'flex';})
        element.addEventListener('mouseover', (elem) => {
            let target = elem.target;
            target.parentNode.style.background = "var(--color7)"
        })
        element.addEventListener('mouseout', (elem) => {
            let target = elem.target;
            target.parentNode.style.background = ""
        })
    })
}

iventsController.GetAllIvents().then( ivents => {
    console.log(ivents)

    let reformatIventsArray = reformatDate(ivents)
    let iventsMap = mapIvents(reformatIventsArray)
    let iventsHTML = arrToString(iventsMap)

    VKSList_ivent_wrapper.innerHTML = iventsHTML

    addEventsButtons (ivents)
})



/* Включение / Выключение модального окна */
// VKSList_link.addEventListener('click', (e) => {modalWindow.style.display = 'flex';})
btnModal_Close.onclick = function () {modalWindow.style.display = 'none';}