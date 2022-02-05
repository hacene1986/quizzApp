import { Injectable } from '@angular/core';

interface Quiz{
  question: string;
  image: string;
  answer: { option: string, correct: boolean } [];
}
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  quizzes: Quiz[] = [
    {
      question: 'Scott Lang, l’alter ego d’Ant-Man, est un criminel et il vole même le costume d’Ant-Man.',
      image : '../../assets/antman.png',
      answer: [
        { option: 'OUI', correct: true },
        { option: 'NON', correct: false },

      ]
    },
    {
      question: 'Le film Spider-Man: Far from Home, est le huitième film sur l’homme-araignée tourné depuis 2002.',
      image: '../../assets/spider-man.jpg',
      answer: [
        { option: 'OUI', correct: true },
        { option: 'NON', correct: false },
      ]
    },
    {
      question: 'Steve Rogers, aussi connu sous le nom de Capitaine America, est le frère aîné de Bucky Barnes, le Soldat de l’Hiver.',
      image: '../../assets/CaptainAmerica_1.jpg',
      answer: [
        { option: 'OUI', correct: false },
        { option: 'NON', correct: true },
      ]
    },
    {
      question: 'Thor et Loki sont frères et ils ont également un autre frère, Balder le brave, qui fait son entrée dans Thor : Ragnarok.',
      image: '../../assets/Thor_Loki_1.jpg',
      answer: [
        { option: 'OUI', correct: false },
        { option: 'NON', correct: true },
      ]
    },
    {
      question: 'Joonas Suotamo a interprété Chewbacca pour la première fois dans Star Wars: Episode VII – The Force Awakens.',
      image: '../../assets/05_premier.jpg',
      answer: [
        { option: 'OUI', correct: true },
        { option: 'NON', correct: false },
      ]
    },
    {
      question: 'Shmi Skywalker a été le premier rôle en langue anglaise de l’actrice Pernilla August.',
      image: '../../assets/lucasfilm_shmi-skywalker.jpeg',
      answer: [
        { option: 'OUI', correct: true },
        { option: 'NON', correct: false },
      ]
    },
    {
      question: 'Les concepteurs de la trilogie originale n’avaient construit qu’un seul modèle complet du Faucon Millenium pour des questions de budget.',
      image: '../../assets/Millennium-Falcon.jpg',
      answer: [
        { option: 'OUI', correct: false },
        { option: 'NON', correct: true },
      ]
    },
    {
      question: 'Yoda meurt à l’âge d’environ 900 ans dans Star Wars: Episode VI – Return of the Jedi.',
      image: '../../assets/yoda-return-jedi.jpg',
      answer: [
        { option: 'OUI', correct: true },
        { option: 'NON', correct: false },
      ]
    },
    {
      question: 'C-3PO parle plus de 6 millions de formes de communication.',
      image: '../../assets/c3po-threepio.jpeg',
      answer: [
        { option: 'OUI', correct: true },
        { option: 'NON', correct: false },
      ]
    },
    {
      question: 'À la fin de Rogue One: A Star Wars Story, la princesse Leia prend la fuite à bord du Tantive IV.',
      image: '../../assets/Tantive-IV-1.jpg',
      answer: [
        { option: 'OUI', correct: true },
        { option: 'NON', correct: false },
      ]
    }
  ]

  getQuizzes(){
    return this.quizzes;
  }
}
