//Função para listar bancos
function searchBank() {
    fetch("https://brasilapi.com.br/api/banks/v1").then((response) => {
        return response.json();
    })
        .then((json) => {
            document.getElementById("lista_banco").innerText = json.ispb, json.name, json.code, json.fullName;

        })
}

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
            document.getElementById("cep_state").innerText = json.state;
            document.getElementById("cep_city").innerText = json.city;
            document.getElementById("cep_neighborhood").innerText = json.neighborhood;
            document.getElementById("cep_street").innerText = json.street;
        })
}

//Função para gerenciar eventos
function manageEvent() {
    // //Botão para pesquisar CEP
    // const searchButton = document.getElementById("search_button");
    // searchButton.addEventListener("click", verifyCep);

    // //Botão para pesquisar CNPJ
    // const searchButtonCnpj = document.getElementById("search_button_cnpj");
    // searchButtonCnpj.addEventListener("click", searchCnpj);

    //Botão para lista Bancos existentes no Brasil
    document.getElementById("search_button_bank").addEventListener("click", searchBank);
}

window.addEventListener("load", manageEvent);