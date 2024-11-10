﻿# Quiz-APP-Rest-API

Take the clone and inside the folder install the npm and run the code.
fellow the beloved command inside the quiz-app-back-end command line

1. # npm install
2. # npm run dev (for running the devlopment mode)
3. # npm run build (for building the code in the dist folder)
4. # npm run start (for start the server which will serve the build code/dist folder)

Rest API payload And examples curl:

1.  # create quiz
            curl --location 'http://localhost:8080/api/quiz' \
    --header 'Content-Type: application/json' \
    --data '{
    "title": "JavaScript Quiz",
    "questions": [
    {
    "id": 1,
    "text": "What is the output of `console.log(typeof NaN)`?",
    "options": [
    "number",
    "string",
    "object",
    "undefined"
    ],
    "correctOption": 0
    },
    {
    "id": 2,
    "text": "Which of the following is a falsy value in JavaScript?",
    "options": [
    "0",
    "1",
    "'\''true'\''",
    "'\''false'\''"
    ],
    "correctOption": 0
    },
    {
    "id": 3,
    "text": "What is the result of the expression `[] == ![]`?",
    "options": [
    "true",
    "false",
    "undefined",
    "NaN"
    ],
    "correctOption": 0
    },
    {
    "id": 4,
    "text": "Which of the following methods can be used to add elements to the beginning of an array in JavaScript?",
    "options": [
    "push()",
    "unshift()",
    "pop()",
    "shift()"
    ],
    "correctOption": 1
    },
    {
    "id": 5,
    "text": "What will `typeof null` return in JavaScript?",
    "options": [
    "object",
    "null",
    "undefined",
    "boolean"
    ],
    "correctOption": 0
    }
    ]
    }
    '
2.  # Get Quiz with all questions
    curl --location 'http://localhost:8080/api/quiz/1'
3.  # Submit Answer
    curl --location 'http://localhost:8080/api/quiz/1/answer' \
     --header 'Content-Type: application/json' \
     --data '{
    "questionId": 1,
    "selectedOption": 0,
    "userId": 1
    }'
4.  # Get Result of the user
        curl --location 'http://localhost:8080/api/quiz/1/results/1' \
    --data ''
