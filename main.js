const questionArray = [{
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language'
},
{
    question: 'What is RubberDucking?',
    answer: 'Explaining your code to a rubber duck, in order to Debug it better'
},
{
    question: 'What is a DOM?',
    answer: 'DOM is the Document Object Model, which is basically a tree of HTML elements in the page'
},
{
    question: 'How do you create an element in the DOM?',
    answer: 'element. createElement ("nameOfElement")'
},
{
    question: 'How do you create a closure?',
    answer: 'What"s a closure?'
},
{
    question: 'What is git?',
    answer: "It's a collaboration tool"
},
{
    question: 'How Awesome is this app?',
    answer: "It's Fantastic!"
}

]

const card = document.getElementById('card');
const form = document.getElementById('formContainer');
const usedNumbers = [];
let qLeft = document.getElementById('qLeft');

function getQuestion() {
    cleaner(card);
    toggleFormVisibility();
    let randomNumber = Math.floor(Math.random() * questionArray.length);

    if (usedNumbers.includes(randomNumber)) {
        if (usedNumbers.length !== questionArray.length) {
            return getQuestion();
        }
        alert("Great! You've got them all!");
        usedNumbers.length = 0;
    } else {
        // create p
        let question = document.createElement('h3');
        question.innerHTML = questionArray[randomNumber].question;
        // target the element which will inherit the paragraph
        card.appendChild(question);
        // create a show answer button
        showAnswerButton(randomNumber);

        // we need to check if random number has been used already
        // we need to store the 'used numbers' in an array
        // we need to check the number against that array
        usedNumbers.push(randomNumber);
        qLeft.innerText = `You have ${questionArray.length - usedNumbers.length} questions left!`;

    }

}

function getAnswer(number) {
    let answer = document.createElement('h2');
    answer.innerHTML = questionArray[number].answer;
    card.appendChild(answer);
}

function showAnswerButton(number) {
    const getAnswerBtn = document.createElement('button');
    getAnswerBtn.innerText = 'Show Answer';

    card.appendChild(getAnswerBtn);
    getAnswerBtn.addEventListener('click', function () {
        getAnswer(number);
        this.style.display = "none";
    });
}

function displayForm() {
    cleaner(card);
    form.setAttribute('class', 'Visible');
}

function addQuestion() {
    event.preventDefault();
    const questionInput = document.getElementById('questionInput');
    const answerInput = document.getElementById('answerInput');
    questionArray.push({
        question: questionInput.value,
        answer: answerInput.value
    })
    questionInput.value = null;
    answerInput.value = null;
    toggleFormVisibility();

}

function cleaner(item) {
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
}

function toggleFormVisibility() {
    if (form.className === 'Visible') {
        form.setAttribute('class', 'notVisible');
    }
}