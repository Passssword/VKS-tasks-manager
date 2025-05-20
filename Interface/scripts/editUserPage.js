const inputEditUserID = document.getElementById('EditUser_id');
const inputEditUserLogin = document.getElementById('EditUser_Login');
const inputEditUserPassword = document.getElementById('EditUser_Password');
const inputEditUserRolle = document.getElementById('EditUser_Rolle');
const inputEditUserName = document.getElementById('EditUser_Name');
const inputEditUserPatronymic = document.getElementById('EditUser_Patronymic');
const inputEditUserLastName = document.getElementById('EditUser_LastName');
const editUserNameBlock = document.querySelector('.editUser_name_block');


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