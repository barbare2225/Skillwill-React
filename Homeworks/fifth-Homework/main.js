// 1 //
const hideButton = document.getElementById('hideButton')
const contentDiv = document.getElementById('contentDiv')

hideButton.addEventListener('click', () => {
    contentDiv.style.display = 'none'
})



// 2 //
const div = document.createElement('div')
div.setAttribute('id', 'card')

const h2 = document.createElement('h2')
h2.textContent = 'Gandalf'

const a = document.createElement('a')
a.setAttribute('href', '#')
a.textContent = 'Go to profile'

div.append(h2, a)
document.body.appendChild(div)



// 3 //
let score = 0
function showQ(question, answers,correctAnswerIndex){
    const questionElement = document.getElementById(question)
    questionElement.textContent=question

    const answerElements =document.querySelectorAll('.aswer')
    answerElements.forEach((element, index)=>{
        element.textContent=answers[index]
    })
}
