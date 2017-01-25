window.quickquizData = {};
window.quickquizData.config ={
  "settings": {
    "whiteframe": true,
    "titleToolbar": true,
    "showPageNumber": true,
    "showProgressBar": true,
    "showQuestionNumber": true,
    "graded": true,
    "personality": false,
    "showPointsPerQuestion": true,
    "requiredQuestions": false,
    "requiredAsterisk": true,
    "requiredType": "alert",
    "showGlobalAlert": false,
    "showQuestionAlert": true,
    "pageAnimation": "",
    "timerCount": 0,
    "saveLocalStorage": false,
    "showLocalStoragePopUp": false,
    "refreshBrowser": false,
    "autoAdvance": false,
    "hidePageButtons": false
  },
  "labels": {
    "homeTitle": "Shembull",
    "homeDescription": "<p></p>",
    "startQuiz": "START",
    "mainTitle": "",
    "previousText": "Previous",
    "nextText": "Next",
    "lastText": "Finish",
    "requiredGlobalAlert": "",
    "requiredQuestionAlert": "This question is",
    "pointsPerQuestionText": "points",
    "showFeedback": "",
    "feedbackTitle": "",
    "feedbackOK": "",
    "closeImage": "Close",
    "scoreTitle": "Score",
    "scoreDescription": "",
    "pointsScored": "Points scored",
    "percentageScored": "",
    "correct": "Correct",
    "incorrect": "Incorrect",
    "leftBlank": "Left blank",
    "unansweredQuestion": "Unanswered question",
    "answerPrevText": "",
    "solutionPrevText": "Solution",
    "submitButton": "",
    "sentSuccess": "",
    "sentError": "",
    "sendTitle": "",
    "sendName": "",
    "sendEmail": "",
    "requiredField": "",
    "emailError": "",
    "thanksTitle": "Thanks!",
    "thanksDescription": "",
    "showMessagePoints": [
      {
        "greaterThan": 0,
        "message": "Needs Improvement"
      },
      {
        "greaterThan": 50,
        "message": "Well done! But you can do it better."
      },
      {
        "greaterThan": 70,
        "message": "Excellent! Congratulations!"
      }
    ],
    "loadLocalStorageAlert": "",
    "fromSavedButton": "",
    "fromScratchButton": ""
  },
  "score": {
    "maxPoints": 0,
    "scoreByQuestion": true,
    "penaltyPointsPerQuestion": 0,
    "decimalNumber": 0,
    "showMessage": true,
    "showPoints": true,
    "showMaxPoints": true,
    "showPointsMessage": true,
    "showPercentage": false,
    "showPercentageMessage": false,
    "showPersonalityMessage": false,
    "showSummary": true,
    "showQuiz": true,
    "showUserAnswers": true,
    "showIcons": true,
    "showSolution": true,
    "scoreMessageBGColor": "#80CBC4",
    "scoreMessageTextColor": "#333333"
  }
};
window.quickquizData.questions ={
  "pages": [
    {
      "title": "Biologji",
      "questions": [
        {
          "type": "single-answer",
          "statement": "How many legs do Arachnids have?",
          "description": "Single choice.",
          "graded": true,
          "points": 6,
          "penaltyPoints": -1,
          "choicesType": "radio",
          "choices": [
            "8",
            "6",
            "4",
            "10"
          ],
          "solution": 0,
          "imagePosition": "right",
          "asideImage": "http://static.videogular.com/quickquiz/spider.jpg"
        },
        {
          "type": "single-answer",
          "statement": "What do you call a scientist that studies life?",
          "description": "Single choice.",
          "graded": true,
          "points": 6,
          "penaltyPoints": -1,
          "choicesType": "button",
          "choices": [
            "Geologist",
            "Physicist",
            "Chemist",
            "Biologist"
          ],
          "itemsWidth": 50,
          "itemSeparation": true,
          "solution": 3
        },
        {
          "type": "single-answer",
          "statement": "Which of these images is a giraffe?",
          "description": "Me foto.",
          "graded": true,
          "points": 6,
          "penaltyPoints": -1,
          "choicesType": "button",
          "choices": [
            "http://static.videogular.com/quickquiz/panda.jpg",
            "http://static.videogular.com/quickquiz/jaguar.jpg",
            "http://static.videogular.com/quickquiz/giraffe.jpg",
            "http://static.videogular.com/quickquiz/gorilla.jpg"
          ],
          "itemsWidth": 50,
          "itemSeparation": true,
          "images": true,
          "solution": 2
        },
        {
          "type": "single-answer",
          "statement": "What is the human body’s biggest organ?",
          "description": "Single answer me dropdown.",
          "graded": true,
          "points": 8,
          "penaltyPoints": -1,
          "choicesType": "select",
          "choices": [
            "The brain",
            "The skin",
            "The liver",
            "The lungs",
            "The heart"
          ],
          "placeholder": "Select",
          "solution": 1
        }
      ]
    },
    {
      "title": "Gjeo Test ",
      "questions": [
        {
          "type": "multiple-answers",
          "statement": "What are the two main metals in the earth’s core?",
          "description": "Multiple choice.",
          "graded": true,
          "points": 8,
          "penaltyPoints": -1,
          "choicesType": "button",
          "choices": [
            "Iron",
            "Silver",
            "Copper",
            "Nickel"
          ],
          "solution": [
            0,
            3
          ],
          "itemsWidth": 50,
          "itemSeparation": true,
          "minHeight": 300,
          "bgImg": "http://static.videogular.com/quickquiz/iron.jpg",
          "semitransparent": true
        },
        {
          "type": "multiple-answers",
          "statement": "Name the three time periods of the dinosaurs.",
          "description": "Multiple pergjigje me checkbox.",
          "graded": true,
          "points": 8,
          "penaltyPoints": -1,
          "choicesType": "checkbox",
          "choices": [
            "Cretaceous",
            "Triassic",
            "Paleogene",
            "Jurassic",
            "Permian"
          ],
          "solution": [
            0,
            1,
            3
          ],
          "imagePosition": "right",
          "asideImage": "http://static.videogular.com/quickquiz/dinosaur.jpg"
        }
      ]
    },
    {
      "title": "Matrix mode",
      "questions": [
        {
          "type": "matrix",
          "statement": "Select true o false for each sentence.",
          "description": "Matrix.",
          "graded": true,
          "points": 30,
          "penaltyPoints": -5,
          "choicesType": "radio",
          "choices": [
            "True",
            "False"
          ],
          "rows": [
            "The Atlantic Ocean is the biggest ocean on Earth.",
            "Sharks are mammals.",
            "Filtration separates mixtures based upon their particle size.",
            "Conductors have low resistance.",
            "The human skeleton is made up of less than 100 bones."
          ],
          "solution": [
            1,
            1,
            0,
            0,
            1
          ],
          "random": true
        }
      ]
    },
    {
      "title": "Gjeo.",
      "questions": [
        {
          "type": "matching-pairs",
          "statement": "Match each moon with its planet",
          "description": "Asocimi.",
          "graded": true,
          "points": 10,
          "penaltyPoints": -1,
          "choicesType": "button",
          "choicesLeft": [
            "Europa",
            "Titan",
            "Deimos",
            "Triton"
          ],
          "choicesRight": [
            "Mars",
            "Jupiter",
            "Neptune",
            "Saturn"
          ],
          "borderColor": true,
          "solution": [
            1,
            3,
            0,
            2
          ],
          "itemsWidth": 50,
          "itemSeparation": true
        },
        {
          "type": "short-answer",
          "statement": "What is the name of our galaxy?",
          "description": "Short.",
          "graded": true,
          "points": 8,
          "penaltyPoints": -1,
          "solution": [
            "The Milky Way Galaxy",
            "Milky Way",
            "Milky Way Galaxy",
            "Milkyway",
            "The Milky Way"
          ],
          "placeholder": "Write your answer here"
        },
        {
          "type": "sequence",
          "statement": "Order of the planets from the Sun",
          "description": "Mode per order.",
          "graded": true,
          "points": 10,
          "penaltyPoints": -1,
          "choicesType": "select",
          "choices": [
            "Venus",
            "Jupiter",
            "Neptune",
            "Earth",
            "Saturn",
            "Uranus",
            "Mercury",
            "Mars"
          ],
          "solution": [
            6,
            0,
            3,
            7,
            1,
            4,
            5,
            2
          ],
          "placeholder": "Select a planet"
        }
      ]
    }
  ]
};