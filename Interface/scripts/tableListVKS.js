
const VKSTable_table = document.getElementById('VKSTable_table');



const mapIvents = (ivents) => {

    return ivents.map(ivent => {
        let date = new Date(ivent.iventDate)
        let dateCreateIvent = null;

        let registrationDate, reqDate, reqTime = ""
        if(ivent.iventRegistrationDate) {
            registrationDate = new Date( parseInt(ivent.iventRegistrationDate) ).toISOString()
            reqDate = registrationDate.split('T')
            reqTime = reqDate[1].slice(0,5)
            dateCreateIvent = `${reqDate[0]} - ${reqTime}`
        } else {
            dateCreateIvent = `not date`
        }

        return (`
            <tr class="VKSTable_tr_iventWrapper">
                  <td>${ivent.id}</td>
                  <td><a href="#">${ivent.iventObject}</a></td>
                  <td><a href="#">${date.toLocaleDateString()} - ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</a></td>
                  <td><a href="#">${ivent.iventType}</a></td>
                  <td><a href="#">${ivent.iventJudge}</a></td>
                  <td><a href="#">${ivent.iventHall}</a></td>
                  <td><a href="#">${ivent.iventWorker}</a></td>
                  <td><a href="#">${dateCreateIvent}</a></td>
                  <td>/-/-/-/-/-/-/-/-/-/-/-</td>
            </tr>
            `)}
    )
}

const arrToString = (array) => {
    let stringValue = ""
    array.forEach(element => {
        stringValue += element
    });

    return stringValue
}

let usersTableCaptions = `<tr>
                            <th>ID</th>
                            <th>Объект ВКС</th>
                            <th>Дата / Время</th>
                            <th>Вх. / Исх.</th>
                            <th>Судья</th>
                            <th>№ Зала</th>
                            <th>Зарегистрировал</th>
                            <th>Дата регистрации</th>
                            <th>Кнопки</th>
                        </tr>`


function addEventsButtons (ivents) {
    const VKSTable_tr_iventWrapper = document.querySelectorAll('.VKSTable_tr_iventWrapper');
    
    let elementsCount = 0
    // VKSList_link.forEach( element => {
    //     let ivent = ivents[elementsCount]
    //     element.addEventListener('click', (e) => {
    //         stateManager.setIventEditPage(ivent)
    //         renderModalWindow(ivent)
    //     })
    //     element.addEventListener('mouseover', (elem) => {
    //         let target = elem.target;
    //         target.parentNode.style.background = "var(--color7)"
    //     })
    //     element.addEventListener('mouseout', (elem) => {
    //         let target = elem.target;
    //         target.parentNode.style.background = ""
    //     })

    //     elementsCount++
    // })
}


iventsController.GetAllIvents().then( ivents => {
    console.log(ivents)

    let iventsMap = mapIvents(ivents)
    let iventsHTML = arrToString(iventsMap)

    VKSTable_table.innerHTML = usersTableCaptions + iventsHTML

    addEventsButtons (ivents)
})