const msgContent = document.querySelector('.chatContainer')
const msg = document.querySelector('input')
const send = document.querySelector('.sendMsg')
const noteTag = document.querySelector('.note')
const materialTag = document.querySelector('.material')
const problemTag = document.querySelector('.problem')

send.addEventListener('click', ()=>{
    const msgEl = document.createElement('li')
    let message =msg.value
    msgEl.innerText = message
    msgContent.appendChild(msgEl)
})


