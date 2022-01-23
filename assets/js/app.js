const btn_form_request = document.querySelector('.package__form .form__btn.request')
const btn_form_contact = document.querySelector('.package__form .form__btn.contact-form')
const btn_form_search = document.querySelector('.slider .slider__form .form__btn.search')
const btn_form_advanced = document.querySelector('.slider .slider__form .form__btn.advanced')

btn_form_request.onclick = () => {
    if (!btn_form_request.closest('.active')) {
        btn_form_request.classList.toggle('active')
        btn_form_contact.classList.toggle('active')
    }
}

btn_form_contact.onclick = () => {
    if (!btn_form_contact.closest('.active')) {
        btn_form_contact.classList.toggle('active')
        btn_form_request.classList.toggle('active')
    }
}

btn_form_search.onclick = () => {
    if (!btn_form_search.closest('.active')) {
        btn_form_search.classList.toggle('active')
        btn_form_advanced.classList.toggle('active')
    }
}

btn_form_advanced.onclick = () => {
    if (!btn_form_advanced.closest('.active')) {
        btn_form_advanced.classList.toggle('active')
        btn_form_search.classList.toggle('active')
    }
}