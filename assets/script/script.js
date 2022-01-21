// dados iniciais
let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

//botão
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

// funções
function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        //barra de progresso
        let pct = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        // mostrar questões
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        
        //mostrar respostas
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        //selecionando as respostas
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })
    } else {
        // sem questões.
        finishQuiz();
    }
}

//função para selecionar as respostas
function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswer++;
    }

    currentQuestion++;
    showQuestion();
}

//função para quando acabar as questões
function finishQuiz() {
    //pontos
    let points = Math.floor((correctAnswer / questions.length) * 100);
    
    //condições de acertos
    if(points < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Tá mal hein, estude mais!';
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if (points >= 30 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bem!';
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if (points > 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    //% de acertos
    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    
    //quantidade de questões respondidas
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer} questões.`;
    
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
}

//função para resetar
function resetEvent() {
    currentQuestion = 0;
    correctAnswer = 0;
    showQuestion();
}