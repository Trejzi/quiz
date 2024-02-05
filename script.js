const questions = [
  {
    difficulty: 'easy',
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    difficulty: 'easy',
    questionText: ' Which country has the largest population in the world?',
    answerOptions: [
      { answerText: 'China', isCorrect: true },
      { answerText: 'India', isCorrect: false },
      { answerText: 'Nigeria', isCorrect: false },
      { answerText: 'USA', isCorrect: false },
    ],
  },
  {
    difficulty: 'easy',
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Venus', isCorrect: false },
      { answerText: 'Jupiter', isCorrect: false },
    ],
  },
  {
    difficulty: 'easy',
    questionText: ' What country are the Great Pyramids of Giza located in?',
    answerOptions: [
      { answerText: 'Morocco', isCorrect: false },
      { answerText: 'Egypt', isCorrect: true },
      { answerText: 'Saudi Arabia', isCorrect: false },
      { answerText: 'Turkey', isCorrect: false },
    ],
  },
  {
    difficulty: 'easy',
    questionText: 'What is the largest ocean on Earth?',
    answerOptions: [
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Arctic Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: true },
    ],
  },
  {
    difficulty: 'medium',
    questionText: 'How many countries are there in the United Kingdom?',
    answerOptions: [
      { answerText: '2', isCorrect: false },
      { answerText: '3', isCorrect: false },
      { answerText: '4', isCorrect: true },
      { answerText: '5', isCorrect: false },
    ],
  },
  {
    difficulty: 'medium',
    questionText: 'Which ocean does the Amazon River run into?',
    answerOptions: [
      { answerText: 'Atlantic Ocean', isCorrect: true },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Arctic Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: false },
    ],
  },
  {
    difficulty: 'medium',
    questionText: 'Which country is known as the Land of the Rising Sun?',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'Japan', isCorrect: true },
      { answerText: 'South Korea', isCorrect: false },
      { answerText: 'India', isCorrect: false },
    ],
  },
  {
    difficulty: 'medium',
    questionText: 'What is the capital of Canada?',
    answerOptions: [
      { answerText: 'Ottawa', isCorrect: true },
      { answerText: 'Toronto', isCorrect: false },
      { answerText: 'Vancouver', isCorrect: false },
      { answerText: 'Montreal', isCorrect: false },
    ],
  },
  {
    difficulty: 'medium',
    questionText: ' What season does Australia experience in December?',
    answerOptions: [
      { answerText: 'Spring', isCorrect: false },
      { answerText: 'Summer', isCorrect: true },
      { answerText: 'Autumn', isCorrect: false },
      { answerText: 'Winter', isCorrect: false },
    ],
  },

  {
    difficulty: 'hard',
    questionText: 'In what ocean is the Bermuda Triangle located?',
    answerOptions: [
      { answerText: 'Atlantic Ocean', isCorrect: true },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Arctic Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: false },
    ],
  },
  {
    difficulty: 'hard',
    questionText: 'Which of these is the capital of Costa Rica?',
    answerOptions: [
      { answerText: 'San Jose', isCorrect: true },
      { answerText: 'San Cristobel', isCorrect: false },
      { answerText: 'San Sebastien', isCorrect: false },
      { answerText: 'Santa Cruz', isCorrect: false },
    ],
  },
  {
    difficulty: 'hard',
    questionText: 'What is the only continent with land in all four hemispheres?',
    answerOptions: [
      { answerText: 'Asia', isCorrect: false },
      { answerText: 'Australia', isCorrect: false },
      { answerText: 'Europe', isCorrect: false },
      { answerText: 'Africa', isCorrect: true },
    ],
  },
  {
    difficulty: 'hard',
    questionText: 'What is the flattest state in the United States?',
    answerOptions: [
      { answerText: 'Kansas', isCorrect: false },
      { answerText: 'Oklahoma', isCorrect: false },
      { answerText: 'Florida', isCorrect: true },
      { answerText: 'Illinois', isCorrect: false },
    ],
  },
  {
    difficulty: 'hard',
    questionText: 'Which island is the largest?',
    answerOptions: [
      { answerText: 'Sumatra', isCorrect: false },
      { answerText: 'Great Britain', isCorrect: false },
      { answerText: 'Honshu', isCorrect: false },
      { answerText: 'Greenland', isCorrect: true },
    ],
  },
  {
    difficulty: 'very hard',
    questionText: 'Which country is home to the most volcanos?',
    answerOptions: [
      { answerText: 'Guatemala', isCorrect: false },
      { answerText: 'Indonesia', isCorrect: true },
      { answerText: 'Iceland', isCorrect: false },
      { answerText: 'Hawaii', isCorrect: false },
    ],
  },
  {
    difficulty: 'very hard',
    questionText: 'Identify the location of the Tropic of Capricorn on the world map and name three countries through which it passes.',
    answerOptions: [
      { answerText: 'Brazil, Madagascar, Australia', isCorrect: true },
      { answerText: 'Argentina, South Africa, India', isCorrect: false },
      { answerText: 'Chile, Mozambique, Indonesia', isCorrect: false },
      { answerText: 'New Zealand, Namibia, Mexico', isCorrect: false },
    ],
  },
  {
    difficulty: 'very hard',
    questionText: 'Identify the world\'s largest and second-largest lakes by surface area.',
    answerOptions: [
      { answerText: 'Caspian Sea, Lake Superior', isCorrect: true },
      { answerText: 'Lake Baikal, Lake Tanganyika', isCorrect: false },
      { answerText: 'Great Bear Lake, Great Slave Lake', isCorrect: false },
      { answerText: 'Lake Victoria, Lake Huron', isCorrect: false },
    ],
  },
  {
    difficulty: 'very hard',
    questionText: 'Which city is the world’s most densely populated?',
    answerOptions: [
      { answerText: 'Bogotá, Colombia', isCorrect: false },
      { answerText: 'Dhaka, Bangladesh', isCorrect: false },
      { answerText: 'Kathmandu, Nepal', isCorrect: false },
      { answerText: 'Manila, Philippines', isCorrect: true },
    ],
  },
  {
    difficulty: 'very hard',
    questionText: 'Which country has the most natural lakes?',
    answerOptions: [
      { answerText: 'USA', isCorrect: false },
      { answerText: 'Canada', isCorrect: true },
      { answerText: 'Australia', isCorrect: false },
      { answerText: 'Brazil', isCorrect: false },
    ],
  },
];

let difficultyLevel = "easy";
let currentQuestion = 0;
let score = 0;
let hint = true; // if true you have the hint to use


const header = document.querySelector(".header");
const startPage = document.querySelector("#startPage");
const mainPage = document.querySelector("#mainPage");
const showScore = document.querySelector(".header span");

const startBtn = document.querySelector("#startPage button");
startBtn.addEventListener('click', function () {
  startPage.style.display = "none";
  header.style.display = "flex";
  mainPage.style.display = "flex";
  showQuestion();
});

showScore.innerText = "Score: " + score;

function updateScore(newScore) {
  const showScore = document.querySelector(".header span");
  showScore.innerText = "Score: " + newScore;
  score = newScore;
}

let filteredQuestions = questions.filter(
  (question) => question.difficulty === difficultyLevel
);



function showQuestion() {
  mainPageHeader = document.querySelector("#mainPage > h2");
  mainPageHeader.innerText = "Question " + (currentQuestion + 1);

  questionContainer = document.querySelector("#question-text");
  questionContainer.innerText = filteredQuestions[currentQuestion].questionText;

  showAnswers(filteredQuestions[currentQuestion].answerOptions);
}

function showAnswers(answerOption) {
  const answerContainer = document.querySelector(".answer-options");
  if (answerContainer) {
    while (answerContainer.firstChild) {
      answerContainer.removeChild(answerContainer.firstChild);
    }
  }
  for (let i = 0; i < answerOption.length; i++) {
    const button = document.createElement('button');
    button.innerText = answerOption[i].answerText;
    button.classList.add('answers');
    button.id = i;
    button.addEventListener('click', function () {
      console.log("Clicked button with ID:", this.id);
      checkAnswer(answerOption, this.id);
      let children = answerContainer.querySelectorAll("*");
      children.forEach(child => {
        child.disabled = true;
      });
    });
    answerContainer.appendChild(button);
  }


  function checkAnswer(answerOption, i) {
    let btn = document.querySelector(`.answer-options button[ID="${i}"]`);
    if (answerOption[i].isCorrect) {
      updateScore(score + 1);
      btn.style.backgroundColor = "green";
    }
    else {
      btn.style.backgroundColor = "red";
    }
    setTimeout(() => {
      if (currentQuestion < 4) {
        currentQuestion++;
        showQuestion(difficultyLevel, currentQuestion);
      }
      else {
        endPage();
      }
    }, 1500);


  }

  const hintButton = document.querySelector("#hint");
  hintButton.addEventListener("click", function () {
    if (hint) {
      const currentAnswerOptions = filteredQuestions[currentQuestion].answerOptions;
      const correctAnswerIndex = currentAnswerOptions.findIndex(
        (option) => option.isCorrect
      );

      let randomIncorrectIndex;
      do {
        randomIncorrectIndex = Math.floor(Math.random() * currentAnswerOptions.length);
      } while (randomIncorrectIndex === correctAnswerIndex);

      const hintAnswerOptions = [
        currentAnswerOptions[correctAnswerIndex],
        currentAnswerOptions[randomIncorrectIndex],
      ];

      console.log(hintAnswerOptions);
      hintButton.disabled = true;

      showAnswers(hintAnswerOptions);
    }
  });

  function endPage() {
    const gamePage = document.querySelector("#mainPage");
    const container = document.querySelector("#endPage");
    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
    const message = document.createElement('p');
    message.innerText = "You scored " + score + " of 5";

    const button = document.createElement('button');

    if (score > 3 && difficultyLevel === "very hard") {
      const header = document.createElement('h2');
      header.innerText = "YOU WON !!!";
      container.appendChild(header);
      button.innerText = "Play Again";
      button.addEventListener("click", function () {
        difficultyLevel = "easy";
        updateScore(0);
        currentQuestion = 0;
        hint = true;
        filteredQuestions = questions.filter(
          (question) => question.difficulty === difficultyLevel
        );

        showQuestion(difficultyLevel, currentQuestion);

        container.style.display = "none";
        gamePage.style.display = "flex";
      });
    } else {
      const header = document.createElement('h2');
      if (score > 3) {
        button.innerText = "Next Level";
        button.addEventListener("click", function () {
          if (difficultyLevel === "easy") {
            difficultyLevel = "medium";
          }
          else if (difficultyLevel === "medium") {
            difficultyLevel = "hard";
          }
          else if (difficultyLevel = "hard") {
            difficultyLevel = "very Hard";
          }
          filteredQuestions = questions.filter(
            (question) => question.difficulty === difficultyLevel
          );

          updateScore(0);
          currentQuestion = 0;

          showQuestion(difficultyLevel, currentQuestion);


          container.style.display = "none";
          gamePage.style.display = "flex";
        });
      } else {
        header.innerText = "GAME OVER";
        container.appendChild(header);
        button.innerText = "Play Again";
        button.addEventListener("click", function () {
          difficultyLevel = "easy";
          updateScore(0);
          currentQuestion = 0;
          hint = true;
          filteredQuestions = questions.filter(
            (question) => question.difficulty === difficultyLevel
          );

          showQuestion(difficultyLevel, currentQuestion);

          container.style.display = "none";
          gamePage.style.display = "flex";
        });
      }
    }

    container.appendChild(message);
    container.appendChild(button);

    gamePage.style.display = "none";
    container.style.display = "flex";
  }

}