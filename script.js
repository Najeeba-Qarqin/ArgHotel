const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList = isOpen
    ? 'soild2'
    : 'soild'
}

// form validation:

const form = document.getElementById('myform');
const name = document.getElementById('name');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const name_error = document.getElementById('name_error');
const phone_error = document.getElementById('phone_error');
const email_error = document.getElementById('email_error');
form.addEventListener('submit', (e) => {
  var email_checker = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.com$/;
  var phone_checker = /^([0-9+])/
  if (name.value === '' || name.value === null) {
    e.preventDefault();
    name_error.innerHTML = "Name is required!";
  }else {
    name_error.innerHTML = "";
  }
  if (!phoneNumber.value.match(phone_checker)) {
    e.preventDefault();
    phone_error.innerText = "Please enter a valid phone number!"
  }else if (phoneNumber.value.length <= 9) {
    e.preventDefault();
    phone_error.innerText = "Please enter a valid phone number!"
  } else {
    phone_error.innerText = ""
  }
  if (!email.value.match(email_checker)) {
    e.preventDefault();
    email_error.innerText = "Please enter a valid email address!"
  }else {
    email_error.innerText = ""
  }
});
