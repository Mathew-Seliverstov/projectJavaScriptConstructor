import image from './assets/imagetop.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils'


const text = `
JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript (стандарт ECMA-262).

JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам[8].

Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса.

На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java. Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования, используемых в веб-разработке[~ 1][9].

Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США.
`

const textColumnstext = 
[
    'Приложение на чистом Js,  без использования библиотек',
    'Этот сайт создан с использованием принципов ООП и SOLID',
    'JavaScript - это просто и интересно!'
]

export const model = [
  new TitleBlock('Конструктор сайтов на JavaScript', {
      tag: 'h1',
      styles: css({
        background: 'linear-gradient(to right, #3236a8, #9d32a8); border-radius: 9px;',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      })
  }),

  new ImageBlock (image, {
      styles: 'padding: 2rem 0; display: flex; justify-content: center;',
      alt: 'my image',
      imageStyles: 'width: auto; height: 400px; border-radius: 15px; background-image: url('
  }),

  new TextColumnsBlock( textColumnstext, {
        styles: 'padding: 2rem 0; color: #fff; background: linear-gradient(to bottom, #03b1fc, #03fc4a); font-weight: bold; border-radius: 5px; margin-bottom: 2px;'
  }),
  
  new TextBlock (text, {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c); font-weight: bold; padding: 30px; border-radius: 5px;'
  })
]



