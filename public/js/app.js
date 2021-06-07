
const waetherForm = document.querySelector('form')
const search =document.querySelector('input')
let messageOne = document.querySelector("#p-1")
let messageTwo = document.querySelector("#p-2")
waetherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location  = search.value
    messageOne.textContent = "Loading"
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = `Weather:${data.weather}`
            messageTwo.textContent = `Place:${data.place}`
            console.log(data)
        })
    })
})
