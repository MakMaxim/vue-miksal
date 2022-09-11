<template>
   <section class="main-screen">
      <div class="main-screen__slider slider">
         <swiper
            class="slider__body"
            :slidesPerView="1"
            :spaceBetween="32"
            :parallax="true"
            :loop="true"
            :speed="800"
            :loopAdditionalSlides="5"
            :pagination="{
               el: '.controls__dotts',
               clickable: true,
            }"
            :navigation="{
               nextEl: '.slider .slider-arrow_next',
               prevEl: '.slider .slider-arrow_prev',
            }"
            :modules="modules"
         >
            <swiper-slide v-for="slide in slider" :key="slide">
               <div class="slider__slide">
                  <div class="slider__image ibg">
                     <img
                        :src="
                           require('@/assets/images/slider/' + slide + '.png')
                        "
                        alt="bg"
                     />
                  </div>
               </div>
            </swiper-slide>
         </swiper>

         <div class="main-screen__info _container">
            <div class="content__info info">
               <div class="info__way">
                  Главная
                  <img src="@/assets/images/arrowRight.svg" alt="arrowRight" />
                  Распашные двери
                  <img src="@/assets/images/arrowRight.svg" alt="arrowRight" />
                  Серия Loft
                  <img
                     src="@/assets/images/arrowRightDown.svg"
                     alt="arrowRightDown"
                  />
               </div>
               <div class="info__title">Loft 6 серия Loft</div>
               <div class="info__text">
                  Распашная дверь в скрытом коробе в стекле
               </div>
               <div class="info__params">
                  <span class="info__par1">M-1649px</span>
                  <span class="info__par2">40px</span>
               </div>
            </div>
         </div>
         <div class="main-screen__controls _container">
            <div class="content__controls controls">
               <button
                  type="button"
                  class="controls__slider-arrow slider-arrow_prev"
               >
                  <img src="@/assets/images/arrowPrev.svg" alt="arrow_prev" />
               </button>
               <div class="controls__dotts"></div>
               <button
                  type="button"
                  class="controls__slider-arrow slider-arrow_next"
               >
                  <img src="@/assets/images/arrowNext.svg" alt="arrow_next" />
               </button>
            </div>
         </div>
         <div class="main-screen__doors _container">
            <div class="content__doors doors">
               <div class="doors__params">
                  <span class="doors__par1">S - 1649px</span>
                  <span class="doors__par2">30px</span>
               </div>
               <div class="doors__title">Весь модельный ряд для серии Loft</div>
               <div class="doors__params">
                  <span class="doors__par1">S - 1649px</span>
                  <span class="doors__par2">30px</span>
               </div>
               <div class="doors__items">
                  <div
                     class="doors__item"
                     v-for="(door, i) in numDoors"
                     :key="i"
                  >
                     <img
                        class="doors__image"
                        :src="require('@/assets/images/doors/' + door + '.png')"
                        alt="door"
                     />
                     <div class="doors__text">Loft {{ door }}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { mapGetters } from 'vuex';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
// import "swiper/scss/pagination";
import 'swiper/scss/navigation';

// import required modules
import { Pagination, Navigation, Parallax } from 'swiper';

export default {
   name: 'SectionMainScreen',
   components: {
      Swiper,
      SwiperSlide,
   },
   data() {
      return {
         numDoors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
         slider: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      };
   },
   computed: {
      ...mapGetters(['WIDTH']),
   },
   setup() {
      return {
         modules: [Pagination, Navigation, Parallax],
      };
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';
.main-screen {
   color: white;
   @media (max-width: $md2 + px) {
      margin-top: 68px;
   }
   &__controls {
      display: flex;
      justify-content: center;
      @media (max-width: 1500px) {
         justify-content: start;
      }
      @media (max-width: $md2 + px) {
         justify-content: center;
      }
   }
   &__doors {
      display: flex;
      justify-content: end;
      @media (max-width: $md2 + px) {
         justify-content: start;
         // overflow: auto;
      }
   }
}

.slider {
   &__image {
      width: 100%;
      height: 850px;
      @media (max-width: $md2 + px) {
         height: 420px;
      }
      @media (max-width: $md4 + px) {
         height: 320px;
      }
   }
}

.controls {
   position: absolute;
   display: flex;
   margin-top: -65px;
   z-index: 11;
   margin-right: -35px;
   @media (max-width: 1500px) {
   }
   @media (max-width: $md2 + px) {
      margin-top: -63px;
   }
   @media (max-width: $md4 + px) {
      margin-top: -47px;
   }
   &__dotts {
      @media (max-width: $md4 + px) {
         display: none;
      }
   }
}

.slider-arrow_prev {
   margin-right: 40px;
   transition: 0.3s;
   @media (max-width: 1500px) {
      margin-right: 30px;
   }
   @media (max-width: $md2 + px) {
      margin-right: 40px;
   }
   @media (max-width: $md4 + px) {
      margin-right: 20px;
   }
   &:hover {
      scale: 1.1;
   }
}
.slider-arrow_next {
   margin-left: 40px;
   transition: 0.3s;
   @media (max-width: 1500px) {
      margin-left: 30px;
   }
   @media (max-width: $md2 + px) {
      margin-left: 40px;
   }
   @media (max-width: $md4 + px) {
      margin-left: 20px;
   }
   &:hover {
      scale: 1.1;
   }
}

.info {
   position: absolute;
   margin-top: -148px;
   z-index: 11;
   @media (max-width: 1500px) {
      margin-top: -233px;
   }
   @media (max-width: $md2 + px) {
      margin-top: -241px;
   }
   @media (max-width: $md4 + px) {
      margin-top: -190px;
   }
   &__way {
      font-family: 'Manrope Regular';
      font-size: 17px;
      line-height: 160%;
      color: rgba(255, 255, 255, 0.8);
      @media (max-width: $md4 + px) {
         font-size: 14px;
         line-height: 140%;
      }
      @media (max-width: $md4 + px) {
         width: 250px;
      }
   }
   &__title {
      font-size: 48px;
      line-height: 110%;
      @media (max-width: $md4 + px) {
         font-size: 28px;
         line-height: 150%;
      }
   }
   &__text {
      font-family: 'Manrope Regular';
      font-size: 21px;
      line-height: 170%;
      @media (max-width: $md4 + px) {
         font-size: 14px;
         line-height: 140%;
      }
      @media (max-width: $md4 + px) {
         width: 260px;
      }
   }
   &__params {
      @media (max-width: $md2 + px) {
         display: none;
      }
   }
   &__par1 {
      font-family: 'Open Sans Bold';
      font-size: 16px;
      line-height: 160%;
      margin-right: 20px;
   }
   &__par2 {
      font-family: 'Open Sans Regular';
      font-size: 16px;
      line-height: 160%;
   }
}

.doors {
   padding: 5px 55px 24px 55px;
   background-color: #353535;
   z-index: 11;
   margin-right: -35px;
   transform: translate(0, -100%);
   position: absolute;
   @media (max-width: $md2 + px) {
      margin-left: -45px;
      transform: translate(0, 0);
      position: relative;
      padding: 0 0 43px 33px;
   }
   @media (max-width: $md3 + px) {
      margin-left: -39px;
      padding-left: 27px;
   }
   @media (max-width: $md4 + px) {
      margin-left: -15px;
      padding: 0 0 36px 3px;
   }
   &__params {
      text-align: center;
      @media (max-width: $md2 + px) {
         display: none;
      }
   }
   &__par1 {
      font-family: 'Open Sans Bold';
      font-size: 16px;
      line-height: 160%;
      margin-right: 20px;
   }
   &__par2 {
      font-family: 'Open Sans Regular';
      font-size: 16px;
      line-height: 160%;
   }
   &__title {
      width: 190px;
      font-size: 19px;
      line-height: 120%;
      text-align: center;
      margin: 0 auto;
      @media (max-width: $md2 + px) {
         width: 360px;
         margin-top: 30px;
         margin-bottom: 18px;
      }
   }
   &__items {
      display: flex;
      column-gap: 5px;
      @media (min-width: $md2 + px) {
         width: 311px;
         flex-wrap: wrap;
      }
   }
   &__item {
      margin-bottom: 4px;
      padding: 7px 12px 8px;
   }
   &__image {
      width: 44px;
      height: 104px;
      margin-bottom: 6px;
   }
   &__text {
      font-family: 'Inter';
      font-size: 11px;
      line-height: 120%;
      text-align: center;
   }
}
</style>
