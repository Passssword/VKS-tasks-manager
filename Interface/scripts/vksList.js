
const VKSList_btnCreateVKS = document.getElementById('VKSList_btnCreateVKS');

const modalWindow = document.querySelector('.modal_wrapper');
const btnModal_Edit = document.getElementById('btnModal_Edit');
const btnModal_Close = document.getElementById('btnModal_Close');
const VKSList_ivent_wrapper = document.getElementById('VKSList_ivent_wrapper');



VKSList_btnCreateVKS.onclick = function () {
    window.location.replace("create-vks.html");
}

const mapIvents = (ivents) => {

    return ivents.map(ivent => `
        <a class="VKSList_link_wrapper" href="#">
            <div class="VKSList_event_wrapper">

            <div class="VKSList_event_caption">
                <p>${ivent.iventDate}</p>
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
    
    let openEventLinkCount = 0
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

    let iventsMap = mapIvents(ivents)
    let iventsHTML = arrToString(iventsMap)

    VKSList_ivent_wrapper.innerHTML = iventsHTML

    addEventsButtons (ivents)
})



/* Включение / Выключение модального окна */
// VKSList_link.addEventListener('click', (e) => {modalWindow.style.display = 'flex';})
btnModal_Close.onclick = function () {modalWindow.style.display = 'none';}