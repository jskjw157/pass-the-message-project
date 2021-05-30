'use strict'

const form = document.querySelector("#message-form");
const message = document.querySelector("#message");
const messageContent = document.querySelector(".message-content");
const feedback = document.querySelector(".feedback");



function handleSubmit(event){
    event.preventDefault();

    if(message.value === ''){
        feedback.classList.add("show");
        setTimeout(function(){
            feedback.classList.remove("show")
        }, 2000);
    } else{
        messageContent.textContent = message.value;
        message.value = '';
    }
}

function init(){
    form.addEventListener("submit",handleSubmit);
}

init();

