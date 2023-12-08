let currentQuestion = 1;
let warriorCount = 0;
let mageCount = 0;
let thiefCount = 0;

function startQuiz() {
  const startContainer = document.getElementById("start-container");
  const questionContainer = document.getElementById(
    `question-${currentQuestion}`
  );

  startContainer.style.display = "none";
  questionContainer.classList.remove("hidden");
}

function nextQuestion(classType) {
  const currentQuestionElement = document.getElementById(
    `question-${currentQuestion}`
  );
  currentQuestionElement.classList.add("hidden");

  // Update the class counters based on the selected class
  if (classType === "Warrior") {
    warriorCount += 1;
  } else if (classType === "Mage") {
    mageCount += 1;
  } else if (classType === "Thief") {
    thiefCount += 1;
  }

  currentQuestion += 1;

  if (currentQuestion <= 5) {
    const nextQuestionElement = document.getElementById(
      `question-${currentQuestion}`
    );
    nextQuestionElement.classList.remove("hidden");
  } else {
    showResult();
  }
}

function showResult() {
  const resultContainer = document.getElementById("result");
  const resultElement = document.getElementById("class-result");

  // Determine the class based on the highest counter
  let playerClass;

  if (warriorCount >= mageCount && warriorCount >= thiefCount) {
    playerClass = "Warrior";
  } else if (mageCount >= warriorCount && mageCount >= thiefCount) {
    playerClass = "Mage";
  } else {
    playerClass = "Thief";
  }

  resultElement.textContent = `You are a ${playerClass} in Skyrim`;
  resultContainer.classList.remove("hidden");
}

function retakeQuiz() {
  // Reset the quiz to the initial state
  currentQuestion = 1;
  warriorCount = 0;
  mageCount = 0;
  thiefCount = 0;

  // Hide result container
  const resultContainer = document.getElementById("result");
  resultContainer.classList.add("hidden");

  // Hide all question containers
  for (let i = 1; i <= 5; i++) {
    const questionContainer = document.getElementById(`question-${i}`);
    questionContainer.classList.add("hidden");
  }

  // Show the first question
  const firstQuestion = document.getElementById("question-1");
  firstQuestion.classList.remove("hidden");
}
