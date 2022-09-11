<template>
   <Transition name="slide-fade">
      <div class="success-form" v-if="ISSUCCESSFORMOPEN">
         <div class="success-form__body _container">
            <div class="success-form__content">
               <div class="success-form__close" @click="successFormClose()">
                  <img src="@/assets/images/close.svg" alt="close" />
               </div>
               <div class="success-form__info">
                  <div class="success-form__title">
                     <div>Спасибо!</div>
                     Ваше сообщение успешно отправлено!
                  </div>
                  <div class="success-form__text success-form__text1">
                     В ближайшее время наш менеджер свяжется с вами, чтобы
                     обсудить детали.
                  </div>
                  <div class="success-form__text success-form__text2">
                     А пока вы можете ознакомиться с нашими
                     <a href="#">новинками</a> или посмотреть реализованные
                     <a href="#">проекты</a>.
                  </div>
                  <project-implementation />
               </div>
            </div>
         </div>
      </div>
   </Transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProjectImplementation from '@/components/ProjectImplementation.vue';

export default {
   name: 'SuccessFormOpen',
   components: {
      ProjectImplementation,
   },
   computed: {
      ...mapGetters(['ISORDERFORMOPEN', 'ISBURGERPUSH', 'ISSUCCESSFORMOPEN']),
   },
   methods: {
      ...mapActions([
         'MAKE_ORDER_FORM_OPEN',
         'MAKE_BURGER_MENU_OPEN',
         'MAKE_BURGER_PUSH',
         'MAKE_SUCCESS_FORM_OPEN',
      ]),
      successFormClose() {
         this.MAKE_ORDER_FORM_OPEN();
         this.MAKE_BURGER_MENU_OPEN();
         this.MAKE_BURGER_PUSH();
         this.MAKE_SUCCESS_FORM_OPEN();
         document.body.classList.remove('_lock');
      },
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.success-form {
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: #404040;
   position: fixed;
   z-index: 14;
   color: white;
   overflow: auto;
   &__body {
      display: flex;
      justify-content: center;
   }
   &__content {
      width: 1092px;
      margin-top: 39px;
      margin-bottom: 112px;
      @media (max-width: $md3 + px) {
         width: 100%;
         margin-top: 30px;
         margin-bottom: 80px;
      }
   }
   &__info {
      max-width: 540px;
   }
   &__close {
      display: inline;
      cursor: pointer;
      margin-left: 100%;
      img {
         width: 24px;
         height: 24px;
         transform: translate(-100%, 0);
         transition: 0.3s;
         &:hover {
            scale: 1.05;
         }
      }
   }
   &__title {
      margin-top: 15px;
      font-size: 48px;
      line-height: 130%;
      @media (max-width: $md3 + px) {
         font-size: 36px;
      }
      @media (max-width: $md4 + px) {
         font-size: 22px;
      }
   }
   &__text {
      font-family: 'Manrope Regular';
      font-size: 21px;
      line-height: 120%;
      @media (max-width: $md3 + px) {
         font-size: 19px;
      }
      @media (max-width: $md4 + px) {
         font-size: 17px;
      }
   }
   &__text1 {
      margin-top: 40px;
      margin-bottom: 35px;
      @media (max-width: $md3 + px) {
         margin-top: 35px;
         margin-bottom: 30px;
      }
      @media (max-width: $md4 + px) {
         margin-top: 30px;
         margin-bottom: 25px;
      }
   }
   &__text2 {
      a {
         text-decoration: underline;
         transition: 0.4s;
         &:hover {
            color: rgb(155, 155, 155);
         }
      }
   }
}

.slide-fade-enter-active {
   transition: all 0.4s ease-out;
}
.slide-fade-leave-active {
   transition: all 0.4s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
   transform: translateX(40px);
   opacity: 0;
}
</style>
