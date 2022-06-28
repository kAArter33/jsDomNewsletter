let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('allagree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() == '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imi i nazwisko !';

        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() == '') {

        let liError = document.createElement('li');
        liError.innerText = 'Wpisz poprawny e-mail !';

        errors.appendChild(liError)
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierać @ ';

        errors.appendChild(liError)
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłes zgody jeden';

        errors.appendChild(liError)
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }


}

newsletterForm.addEventListener('submit', validate);

const allAgree = (event) => {

    let agree1 = document.getElementById('agree1');
    let agree2 = document.getElementById('agree2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

    console.log(event.target.checked);

}

allAgreeChx.addEventListener('change', allAgree);