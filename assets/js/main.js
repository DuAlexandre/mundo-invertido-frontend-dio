import { subscribeClub } from "./firebase/hellfire-clube.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

//Alt + shift mais click do cursor: adiciona multiplos cursores

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    const subscriptionId = await subscribeClub(subscription);
    console.log(`Inscrito ${subscriptionId}`);
})