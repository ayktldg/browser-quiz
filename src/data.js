'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
export const prizes = ['100','200','300', '500', '1 000', '2 000', '4 000', '8 000', '16 000', '32 000', '64 000', '125 000', '250 000', '500 000', '1 000 000'];

export const quizData = {

  currentQuestionIndex: 0,

  questions: [
    {
      id: 1,
      text: 'How does a WHILE loop start in JavaScript?',
      answers: {
        a: 'while(let i = 0; i < 5; i++)',
        b: 'while(let i = 1 to 5)',
        c: 'while(i < 5; i++)',
        d: 'while(i < 5)',
      },
      correct: 'd',
      difficulty: 'easy',
    },
    {
      id: 2,
      text: 'How does a FOR loop start in JavaScript?',
      answers: {
        a: 'for(let i = 0; i < 5; i++)',
        b: 'for(let i = 1 to 5)',
        c: 'for(i < 5; i++)',
        d: 'for(i < 5)',
      },
      correct: 'a',
      difficulty: 'easy',
    },
    {
      id: 3,
      text: 'How do you write "Hello World" in an alert box?',
      answers: {
        a: 'write("Hello World")',
        b: 'print("Hello World")',
        c: 'prompt("Hello World")',
        d: 'alert("Hello World")',
      },
      correct: 'd',
      difficulty: 'easy',
    },
    {
      id: 4,
      text: 'How do you create a function in JavaScript?',
      answers: {
        a: 'function myFunction()',
        b: 'function = myFunction()',
        c: 'function: myFunction()',
        d: 'const myFunction()',
      },
      correct: 'a',
      difficulty: 'easy',
    },
    {
      id: 5,
      text: 'Which of the following is considered as End of Single line comment?',
      answers: {
        a: 'End of Line',
        b: 'End of State',
        c: 'Semicolon',
        d: 'None of Above',
      },
      correct: 'c',
      difficulty: 'easy',
    },
    {
      id: 6,
      text: 'What is the output in case of one of the number is NaN during addition of two numbers?',
      answers: {
        a: 'infinitive',
        b: 'NaN',
        c: 'Zero',
        d: 'Null',
      },
      correct: 'b',
      difficulty: 'medium',
    },
    {
      id: 7,
      text: 'How do you round the number 3.14, to the nearest integer?',
      answers: {
        a: 'Round(3.14)',
        b: 'Math.round(3.14)',
        c: 'rnd(3.14)',
        d: 'Math.rnd(3.14)',
      },
      correct: 'b',
      difficulty: 'medium',
    },
    {
      id: 8,
      text: 'What is the alternate name for Javascript?',
      answers: {
        a: 'LimeScript',
        b: 'ECMScript',
        c: 'Java',
        d: 'ECMAScript',
      },
      correct: 'd',
      difficulty: 'medium',
    },
    {
      id: 9,
      text: 'How can you add a comment in a JavaScript?',
      answers: {
        a: '//This a comment',
        b: '*This is comment',
        c: '--This is comment',
        d: '!!This is comment',
      },
      correct: 'a',
      difficulty: 'medium',
    },
    {
      id: 10,
      text: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: {
        a: 'if(i<>5)',
        b: 'if i!=5 then',
        c: 'if not i=5',
        d: 'if(i != 5)',
      },
      correct: 'd',
      difficulty: 'medium',
    },
    {
      id: 11,
      text: 'Which of the following function of String object is used to match a regular expression against a string?',
      answers: {
        a: 'concat()',
        b: 'match()',
        c: 'search()',
        d: 'replace()',
      },
      correct: 'b',
      difficulty: 'hard',
    },
    {
      id: 12,
      text: ' How to append a value to an array in JavaScript?',
      answers: {
        a: 'arr[arr.length] = value',
        b: 'arr[arr.length+1] = value',
        c: 'arr[arr.length-1] = value',
        d: 'arr[arr.length*1] = value',
      },
      correct: 'a',
      difficulty: 'hard',
    },
    {
      id: 13,
      text: 'Which machine actually executes the JavaScript?',
      answers: {
        a: 'The web server',
        b: 'Web browser',
        c: 'Java Script engine',
        d: 'Microsoft',
      },
      correct: 'b',
      difficulty: 'hard',
    },
    {
      id: 14,
      text: 'Which is the correct way to write a JavaScript array?',
      answers: {
        a: 'var txt = new Array(1:"arr",2:"kim",3:"jim")',
        b: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")',
        c: 'var txt = new Array("arr","kim","jim")',
        d: 'var txt = new Array=" arr ","kim","jim"',
      },
      correct: 'c',
      difficulty: 'hard',
    },
    {
      id: 15,
      text: 'What is the event that fires when the form elements such as button textarea loses the focus?',
      answers: {
        a: 'Onclick',
        b: 'Onfocus',
        c: 'Onblur',
        d: 'Ondblclick',
      },
      correct: 'c',
      difficulty: 'hard',
    },
  ],
};
