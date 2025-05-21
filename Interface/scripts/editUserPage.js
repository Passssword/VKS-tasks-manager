const inputEditUserID = document.getElementById('EditUser_id');
const inputEditUserLogin = document.getElementById('EditUser_Login');
const inputEditUserPassword = document.getElementById('EditUser_Password');
const inputEditUserRolle = document.getElementById('EditUser_Rolle');
const inputEditUserName = document.getElementById('EditUser_Name');
const inputEditUserPatronymic = document.getElementById('EditUser_Patronymic');
const inputEditUserLastName = document.getElementById('EditUser_LastName');
const editUserNameBlock = document.querySelector('.editUser_name_block');
const btnEditUser = document.getElementById('editUser_button');

btnEditUser.onclick = function () {
    let UserObject = {
        id: inputEditUserID.innerHTML,
        nickname: inputEditUserLogin.value,
        password: inputEditUserPassword.value,
        rolle: inputEditUserRolle.value,
        firstName: inputEditUserName.value,
        patronymic: inputEditUserPatronymic.value,
        lastName: inputEditUserLastName.value
    }

    usersController.UpdateUser(UserObject).then (res => {
        window.location.replace("users.html");
    })
}

document.addEventListener('DOMContentLoaded', function() {
    // Document is loaded
    let EditPageData = stateManager.getEditPageData()

    editUserNameBlock.innerHTML = `${EditPageData.lastName} ${EditPageData.firstName} ${EditPageData.patronymic}`

    inputEditUserID.innerHTML = EditPageData.id
    inputEditUserLogin.value = EditPageData.nickname
    inputEditUserPassword.value = EditPageData.password
    inputEditUserName.value = EditPageData.firstName
    inputEditUserPatronymic.value = EditPageData.patronymic
    inputEditUserLastName.value = EditPageData.lastName
    if(EditPageData.rolle == 'Admin') {
        inputEditUserRolle.innerHTML = `
            <option value="User" >Пользователь системы</option>
            <option value="Admin" selected>Администратор системы</option>
            `
    }
  });