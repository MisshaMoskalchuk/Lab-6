import MultiAnswerComponent from './multiAnswers';
import SingleAnswerComponent from './singleAnswer';
import './style.css';

const questions = [
 {
  question: '2+2=?.',
  answers: [
   '4.',
   '5.',
   '6.'
  ],
  correctAnswer: 0
 },
 {
  question: '2+2*2=?.',
  answers: [
   '6.',
   '8.',
   '12.'
  ],
  correctAnswer: 0
 },
 {
  question: 'X^2=9 X=?.',
  answers: [
   '-3;3.',
   '3.',
   '-3.'
  ],
  correctAnswer: 0
 }
 ,
 {
  question: 'Скільки годин?',
  answers: [
   'Ой не чує баба.',
   '10.',
   '9 чи 10?.'
  ],
  correctAnswer: [0, 2]
 }
];


const QuestionsComponent = () => {

 return (
  <div className='questions'>
   <h1>Questions</h1>
   <div className='container'>

    {
     questions.map(el => (
      Array.isArray(el.correctAnswer)
       ? <MultiAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
       : <SingleAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
     ))
    }

   </div>
  </div>
 );
};

export default QuestionsComponent;