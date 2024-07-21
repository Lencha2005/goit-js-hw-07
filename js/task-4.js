const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const formData = {
        email: formEl.elements.email.value,
        password: formEl.elements.password.value,
    };

    if(formEl.elements.email.value === '' && formEl.elements.password.value === ''){
        return alert('All form fields must be filled in');
    };
    console.log(formData);

    formEl.reset();
}
formEl.addEventListener('submit', onFormSubmit);