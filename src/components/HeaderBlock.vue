<template>
   <header class="header">
      <div class="header__wrapper">
         <div class="header__body _container">
            <div class="header__content">
               <transition-group name="burger-content">
                  <div
                     class="header__top header-top"
                     v-if="WIDTH > 991.98 || ISBURGERMENUOPEN"
                  >
                     <div class="header-top__left">
                        <a class="header-top__item" href="#">О Компании</a>
                        <a class="header-top__item" href="#">Портфолио</a>
                        <a class="header-top__item" href="#">Сотрудничество</a>
                        <a class="header-top__item" href="#">Контакты</a>
                     </div>
                     <div class="header-top__right">
                        <a class="header-top__tel" href="tel:+74956628732"
                           >+7 (495) 662-87-32
                        </a>
                        <a class="header-top__po" href="#">Личный кабинет</a>
                        <button
                           class="header-top__project"
                           @click="orderFormOpen()"
                        >
                           Обсудить проект
                        </button>
                     </div>
                  </div>
               </transition-group>
               <div class="header__middle"></div>
               <div class="header__bottom header-bottom">
                  <div class="header-bottom__logo">
                     <img
                        v-if="WIDTH > 991.98"
                        src="../assets/images/header/logo-white.png"
                        alt="logo"
                        class="header-bottom__logo-img"
                     />
                     <img
                        v-else
                        src="../assets/images/header/logo-black.png"
                        alt="logo"
                        class="header-bottom__logo-img"
                     />
                     <div class="header-bottom__text">
                        <div>Уникальные интерьерные решения.</div>
                        <div>От 3D-модели до установки.</div>
                     </div>
                  </div>
                  <burger-menu />
                  <div
                     class="header-bottom__products"
                     v-if="WIDTH > 991.98 || ISBURGERMENUOPEN"
                  >
                     <a class="header-bottom__product" href="#">Двери</a>
                     <a class="header-bottom__product" href="#">Перегородки</a>
                     <a class="header-bottom__product" href="#">
                        Стеновые панели
                     </a>
                     <a class="header-bottom__product" href="#">
                        Дверные коробки
                     </a>
                     <a class="header-bottom__product" href="#">Мебель</a>
                     <a
                        class="header-bottom__product header-bottom__product_icon"
                        href="#"
                     >
                        В наличии
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
   name: 'HeaderBlock',
   components: {
      BurgerMenu,
   },
   computed: {
      ...mapGetters(['WIDTH', 'HEIGHT', 'ISBURGERMENUOPEN', 'ISORDERFORMOPEN']),
   },
   methods: {
      ...mapActions(['MAKE_ORDER_FORM_OPEN']),
      orderFormOpen() {
         this.MAKE_ORDER_FORM_OPEN();
         document.body.classList.add('_lock');
      },
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';
a {
   transition: 0.4s;
   &:hover {
      color: rgb(155, 155, 155);
   }
}
.header {
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   color: white;
   @media (max-width: $md2 + px) {
      color: $blackColor;
   }
   &__wrapper {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 12;
      @media (max-width: $md2 + px) {
         background-color: white;
      }
   }
   &__body {
      position: relative;
   }
   &__content {
      padding: 10px 0;
      @media (max-width: $md2 + px) {
         padding: 14px 0;
      }
   }
   &__top {
   }
   &__middle {
      margin: 10px 0;
      border: 0.7px solid rgba(255, 255, 255, 0.73);
      @media (max-width: 1130px) {
         margin: 6px 0;
      }
      @media (max-width: $md2 + px) {
         display: none;
      }
   }
   &__bottom {
      display: flex;
   }
}

.header-top {
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 15px;
   line-height: 20/15 * 100%;
   @media (max-width: 1130px) {
      font-size: 14px;
   }
   @media (max-width: $md2 + px) {
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: auto;
      top: 68px;
      left: 0;
      background-color: rgb(66, 66, 66);
      align-items: start;
      justify-content: start;
      padding: 40px 15px 30px 15px;
      flex-direction: column-reverse;
   }
   @media (max-width: $md3 + px) {
      top: 60px;
      padding: 40px 39px 30px;
   }
   @media (max-width: $md4 + px) {
      top: 59px;
   }
   &__left {
      display: flex;
      justify-content: space-between;
      @media (max-width: $md2 + px) {
         flex-direction: column;
         width: 100%;
         font-size: 28px;
      }
      @media (max-width: $md4 + px) {
         font-size: 22px;
      }
   }
   &__item {
      &:not(:last-child) {
         @include adaptiv-value('margin-right', 60, -30, 1);
      }
      white-space: nowrap;
      @media (max-width: $md2 + px) {
         margin-top: 40px;
      }
   }
   &__right {
      display: flex;
      @media (max-width: $md2 + px) {
         flex-direction: column-reverse;
         width: 100%;
         font-size: 28px;
      }
      @media (max-width: $md4 + px) {
         font-size: 22px;
      }
   }
   &__tel {
      @include adaptiv-value('margin-right', 60, -30, 1);
      white-space: nowrap;
      background: url('@/assets/images/header/phone.svg') left no-repeat;
      padding: 10px 0 10px 32px;
      @media (max-width: $md2 + px) {
         margin-top: 20px;
      }
   }
   &__po {
      @include adaptiv-value('margin-right', 60, -30, 1);
      white-space: nowrap;
      background: url('@/assets/images/header/Group.svg') left no-repeat;
      padding: 10px 0 10px 32px;
      @media (max-width: $md2 + px) {
         margin-top: 20px;
      }
   }
   &__project {
      border: 1px white solid;
      color: white;
      padding: 7px 20px;
      background-color: transparent;
      transition: 0.4s;
      @media (max-width: 1130px) {
         white-space: nowrap;
         padding: 4px 16px;
      }
      &:hover {
         background-color: $grayColor;
      }
   }
}

.header-bottom {
   display: flex;
   align-items: center;
   @media (max-width: $md2 + px) {
      justify-content: space-between;
   }
   &__logo {
      position: relative;
      z-index: 5;
      display: flex;
      align-items: center;
      @include adaptiv-value('margin-right', 66, -100, 0);
   }
   &__logo-img {
      width: 163px;
      height: 34px;
      margin-right: 20px;
      padding: 2px;
      transition: 0.4s;
      cursor: pointer;
      transition: 0.4s;
      @media (max-width: $md3 + px) {
         width: 150px;
         height: 31px;
      }
      &:hover {
         scale: 1.08;
      }
   }
   &__text {
      font-size: 15px;
      line-height: 20/15 * 100%;
      white-space: nowrap;
      @include adaptiv-value('width', 270, 170, 0);
      @media (max-width: 1390px) {
         white-space: pre-wrap;
      }
      @media (max-width: $md2 + px) {
         width: 290px;
      }
      @media (max-width: $md3 + px) {
         width: 220px;
         font-size: 12px;
         line-height: 16/12 * 100%;
      }
      @media (max-width: $md4 + px) {
         display: none;
      }
   }
   &__products {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-family: 'Manrope Bold';
      font-size: 19px;
      line-height: 130%;
      @media (max-width: 1330px) {
         font-size: 17px;
         grid-template-columns: 160px 130px 160px;
         grid-template-rows: 1fr 1fr;
         display: grid;
         justify-content: space-between;
      }
      @media (max-width: 1130px) {
         grid-template-columns: 180px 180px;
         grid-template-rows: 1fr 1fr 1fr;
         justify-content: space-around;
         font-size: 17px;
      }
      @media (max-width: $md2 + px) {
         display: none;
      }
   }
   &__product {
      white-space: nowrap;
      &_icon {
         background: url('@/assets/images/header/stock.svg') left no-repeat;
         @include adaptiv-value('padding-left', 32, 24, 1);
      }
   }
}

.burger-content-item {
   display: inline-block;
   margin-right: 10px;
}
.burger-content-enter-active,
.burger-content-leave-active {
   transition: all 0.4s ease;
}
.burger-content-enter-from,
.burger-content-leave-to {
   opacity: 0;
   transform: translateY(30px);
}
</style>
