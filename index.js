//Função para validar se o CEP é válido
function verifyCep() {
    const inputCepNumber = document.getElementById("input_cep");
    const cepNumberValue = parseInt(inputCepNumber.value);
    const cepRegex = /^\d{8}$/;
    if (isNaN(cepNumberValue) || (!cepRegex.test(cepNumberValue))) {
        alert("Favor informar um CEP válido!")
        return;
    } else {
        searchCep();
    }
}


//Função para buscar o CEP via API
function searchCep() {
    const inputCepNumber = document.getElementById("input_cep");
    const cepNumberValue = inputCepNumber.value;

    fetch("https://brasilapi.com.br/api/cep/v1/" + cepNumberValue).then((response) => {
        return response.json();
    })
        .then((json) => {
            const inputCepState = document.getElementById("cep_state");
            inputCepState.innerText = json.state;
            const inputCepCity = document.getElementById("cep_city");
            inputCepCity.innerText = json.city;
            const inputCepNeighborhood = document.getElementById("cep_neighborhood");
            inputCepNeighborhood.innerText = json.neighborhood;
            const inputCepStreet = document.getElementById("cep_street");
            inputCepStreet.innerText = json.street;
        })
}


//Função para gerenciar eventos
function manageEvent() {
    const searchButton = document.getElementById("search_button");
    searchButton.addEventListener("click", verifyCep);
}

window.addEventListener("load", manageEvent);