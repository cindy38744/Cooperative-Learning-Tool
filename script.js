const msgContent = document.querySelector('.chatContainer')
const msg = document.querySelector('input')
const send = document.querySelector('.sendMsg')
const noteTag = document.querySelector('.note')
const materialTag = document.querySelector('.material')
const problemTag = document.querySelector('.problem')

send.addEventListener('click', ()=>{
    let message =msg.value
    if(message === 'no'){
        alert('no')
        const msgEl = document.createElement('li')
        msgEl.innerText = message
        msgContent.appendChild(msgEl)
    } else {
        const msgEl = document.createElement('li')
        msgEl.innerText = message
        msgContent.appendChild(msgEl)
    }
})


