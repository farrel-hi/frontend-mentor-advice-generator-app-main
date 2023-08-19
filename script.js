const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp=>resp.json())
}

const API = { get }

const adviceObj = {};

function getQuotes() {
    // data['slip']['id']
    // data['slip']['advice']
    API.get(API_URL).then(data => addData(data['slip']['id'],data['slip']['advice']));
}

function addData(id,advice){
    document.getElementById("adviceID").innerHTML = `A  D V I C E # ${id}`
    document.getElementById("advice").innerHTML = `${advice}`
}

getQuotes();
