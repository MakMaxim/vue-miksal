import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default createStore({
   state: {
      isBurgerMenuOpen: false,
      isBurgerPush: false,
      isOrderFormOpen: false,
      isSuccesFormOpen: false,
      width: 0,
      height: 0,
      materials: [
         {
            id: 1,
            // url: '#',
            title: 'Порошковая покраска профиля',
            text: 'в 24 вариантах',
            image: '1.png',
         },
         {
            id: 2,
            // url: '#',
            title: 'Покраска RAL classic матовая',
            text: 'в 120 вариантах',
            image: '2.png',
         },
         {
            id: 3,
            // url: '#',
            title: 'Покраска RAL classic глянцевая',
            text: 'в 135 вариантах',
            image: '3.png',
         },
         {
            id: 4,
            // url: '#',
            title: 'Стекло',
            text: 'в 12 вариантах',
            image: '4.png',
         },
         {
            id: 5,
            // url: '#',
            title: 'Зеркало',
            text: 'в 7 вариантах',
            image: '5.png',
         },
         {
            id: 6,
            // url: '#',
            title: 'Шпон',
            text: 'в 1 вариантe',
            image: '6.png',
         },
      ],
      schemes: [
         {
            id: 1,
            text: 'Распашная одностворчатая правосторонняя дверь. Открывается наружу',
            image: '1.png',
         },
         {
            id: 2,
            text: 'Распашная двустворчатая дверь',
            image: '2.png',
         },
         {
            id: 3,
            text: 'Распашная одностворчатая левостронняя дверь с фрамугой',
            image: '3.png',
         },
         {
            id: 4,
            text: 'Распашная одностворчатая правосторонняя дверь. Открывается внутрь',
            image: '4.png',
         },
         {
            id: 5,
            text: 'Распашная одностворчатая левосторонняя дверь. Открывается наружу',
            image: '5.png',
         },
         {
            id: 6,
            text: 'Распашная одностворчатая левосторонняя дверь. Открывается внутрь',
            image: '6.png',
         },
         {
            id: 7,
            text: 'Распашная одностворчатая правосторонняя дверь с фрамугой',
            image: '7.png',
         },
      ],
   },
   getters,
   mutations,
   actions,
   modules: {},
});
