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
    const questionElement = document.getElementById('question')
    questionElement.textContent=question

    const answerElements =document.querySelectorAll('.answer')
    answerElements.forEach((element, index)=>{
        element.textContent=answers[index]
        element.classList.remove('correct','incorrect')
        element.onclick = () => checkansw(element,correctAnswerIndex)
    })
    
}

function checkansw(selectedElement,correctAnswerIndex){
    const answerElements=document.querySelectorAll('.answer')
    const selectedAnswerIndex = Array.from(answerElements).indexOf(selectedElement)
    if(selectedAnswerIndex === correctAnswerIndex){
        selectedElement.classList.add('correct')
        score++
    }else{
        selectedElement.classList.add('incorrect')
    }

    updateScore()
}

function updateScore(){
    const scoreElement =document.getElementById('score')
    scoreElement.textContent=`score: ${score}`;
}

// sample
const question ='What is the capital of Georgia';
const aswers =['paris', 'new-york', 'Tbilisi' ]
const correctAnswersIndex = 2

showQ(question,aswers,correctAnswersIndex)
