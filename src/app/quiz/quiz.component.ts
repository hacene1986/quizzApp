import { animate, style, transition, trigger } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogService } from '../services/confirm-dialog.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations:[
    trigger('answer', [
      transition('void => *', [style({ opacity: 0, transform: 'translateY(-3rem)'}), animate(400)])
    ])
  ]
})
export class QuizComponent implements OnInit {

  quizzes = [];
  currentQuiz: number;
  prevAnswered = [];
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;
  result: boolean = false;
  startMinutes: number = 2;
  time: number;
  gameOver: boolean = false;
  heighScore;
  constructor(
    private quizService: QuizService,
    private route: Router,
    private confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.heighScore = localStorage.getItem("HEIGHSCORE");
    this.quizzes = this.quizService.getQuizzes();
    this.currentQuiz = this.getRandom();
    console.log(this.currentQuiz)
    this.prevAnswered.push(this.currentQuiz);


    //=========== Compteur =============//
    let elem = document.getElementById('count');
    this.time = this.startMinutes * 30;
    setInterval(()=>{
      const minutes = Math.floor(this.time / 60);
      let seconds = this.time % 60;
      //seconds = seconds < 10 ? '0' + seconds : seconds;
      elem.innerHTML = `${minutes} : ${seconds}`;
      if(this.time > 0){
        this.time--;
       // Si il reste 15 seconde le compteur devient rouge
        if(this.time == 15){
          elem.style.background = "red";
        }
        else if(this.time == 0){
          elem.style.background = "none";
        }
      }
      else{
        this.gameOver = true;
      }
    }, 1000)

  }

  //=============================================Faire passé les question en mode aléatoire
  getRandom(){
    return Math.floor(Math.random() * this.quizzes.length);
  }

  //=============================================Fonction pour les réponse du user
  onAnswer(option: boolean){
    console.log(option)
    setTimeout(() => {
      let newQuiz = this.getRandom();
       while(this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < 10){
        newQuiz = this.getRandom();
       }
       this.currentQuiz = newQuiz;
        this.prevAnswered.push(this.currentQuiz);
    }, 300);

    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
   // console.log("****",this.prevAnswered.length)
    if(this.prevAnswered.length == 10 && this.correctAnswers > this.heighScore){
      this.heighScore = this.correctAnswers;
      localStorage.setItem("HEIGHSCORE", JSON.stringify(this.heighScore));
    }
    if(this.prevAnswered.length == 10){
      this.time = 0
    }
  }

  // showResult(){
  //   this.result = true;
  //   this.resultStatus = 'Play Again!';
  // }
  //================================================fonction pour reprendre le quiz
  playAgain(){
    this.prevAnswered = [];
    this.prevAnswered.push(this.getRandom());
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.gameOver = false;
    this.time = this.startMinutes * 30;
  }

  //================================================= Fonction pour quitter le quiz
  goToHome(){
    this.route.navigate(['/']);
    localStorage.removeItem("HEIGHSCORE");
  }

  //==================================================Modal dialog Confirm
  showDialogConfirm() {
    this.confirmDialogService.confirmThis("Vous etes sur de vouloir quitter le quiz ? Si vous quittez vous allez perdre votre meilleur score", "Attention", "confirm",  () => {
      this.goToHome()
    }, function () {
      return
    })
  }

}
