const btn_form_request = document.querySelector('.package__form .form__btn.request')
const btn_form_contact = document.querySelector('.package__form .form__btn.contact-form')


btn_form_request.onclick = () => {
    btn_form_request.classList.toggle('active')
    btn_form_contact.classList.toggle('active')
}


btn_form_contact.onclick = () => {
    btn_form_contact.classList.toggle('active')
    btn_form_request.classList.toggle('active')
}