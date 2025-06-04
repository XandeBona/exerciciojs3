//Função para buscar o CNPJ via API
function searchCnpj() {
    const inputCnpjNumber = document.getElementById("input_cnpj");
    const cnpjNumberValue = inputCnpjNumber.value;

    fetch("https://brasilapi.com.br/api/cnpj/v1/" + cnpjNumberValue).then((response) => {
        return response.json();
    })
        .then((json) => {
            document.getElementById("cpnj_razao_social").innerText = json.razao_social;
            document.getElementById("cpnj_nome_fantasia").innerText = json.nome_fantasia;
            document.getElementById("cpnj_data_inicio").innerText = json.data_inicio_atividade;
            document.getElementById("cnpj_cnae_numero").innerText = json.cnae_fiscal;
            document.getElementById("cpnj_cnae_descricao").innerText = json.cnae_fiscal_descricao;
            document.getElementById("cnpj_porte").innerText = json.porte;
            document.getElementById("cpnj_cep").innerText = json.cep;
            document.getElementById("cpnj_uf").innerText = json.uf;
            document.getElementById("cpnj_municipio").innerText = json.municipio;
            document.getElementById("cpnj_rua").innerText = json.logradouro;
            document.getElementById("cpnj_numero").innerText = json.numero;
        })
}



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
    // //Botão para pesquisar CEP
    // const searchButton = document.getElementById("search_button");
    // searchButton.addEventListener("click", verifyCep);

    //Botão para pesquisar CNPJ
    const searchButtonCnpj = document.getElementById("search_button_cnpj");
    searchButtonCnpj.addEventListener("click", searchCnpj);
}

window.addEventListener("load", manageEvent);