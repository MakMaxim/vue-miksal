<template>
   <Transition name="slide-fade">
      <div class="order-form" v-if="ISORDERFORMOPEN">
         <div class="order-form__body _container">
            <div class="order-form__content">
               <div class="order-form__close" @click="orderFormClose()">
                  <img src="@/assets/images/close.svg" alt="close" />
               </div>
               <div class="order-form__form form">
                  <div class="form__title">Обсудить индивидуальный заказ</div>
                  <div class="form__text">или задать вопрос</div>
                  <form action="" class="form__body" @submit.prevent>
                     <input
                        type="text"
                        name="name"
                        placeholder="Контактное лицо"
                        class="form__input form__name"
                     />
                     <input
                        type="tel"
                        name="phone"
                        placeholder=" +7 (__) -__-__-__"
                        class="form__input form__tel"
                     />
                     <input
                        type="email"
                        name="email"
                        placeholder="Укажите email, например, miksal@gmail.com"
                        class="form__input form__email"
                     />
                     <textarea
                        name="message"
                        autocomplete="off"
                        placeholder="Меня интересует: DUBLIN (Loft)"
                        class="form__input form__textarea"
                     ></textarea>

                     <div class="form__add-materials add-materials">
                        <input
                           id="myfile"
                           name="myfile"
                           accept=".jpg, .png, .gif"
                           type="file"
                           class="add-materials__input"
                        />
                        <div class="add-materials__button">
                           <img src="@/assets/images/plus.svg" alt="add" />
                           <span>Прикрепить материалы</span>
                        </div>
                     </div>

                     <div class="form__contact">
                        <button
                           class="form__button btn"
                           @click="successFormOpen()"
                        >
                           Связаться со мной
                        </button>
                        <div class="form__processing-data">
                           Нажимая кнопку «Отправить»,
                           <a href="#">
                              я даю согласие на обработку моих персональных
                              данных
                           </a>
                        </div>
                     </div>
                     <project-implementation />
                  </form>
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
   name: 'OrderFormOpen',
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
      orderFormClose() {
         this.MAKE_ORDER_FORM_OPEN();
         this.MAKE_BURGER_MENU_OPEN();
         this.MAKE_BURGER_PUSH();
         document.body.classList.remove('_lock');
      },
      successFormOpen() {
         this.MAKE_SUCCESS_FORM_OPEN();
      },
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.order-form {
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: #404040;
   position: fixed;
   z-index: 13;
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
   &__form {
   }
}

.form {
   &__body {
      display: flex;
      flex-direction: column;
      max-width: 540px;
      @media (max-width: $md3 + px) {
         max-width: 645px;
      }
   }
   &__title {
      margin-top: 15px;
      font-size: 48px;
      line-height: 130%;
      @media (max-width: $md2 + px) {
         font-size: 36px;
      }
      @media (max-width: $md3 + px) {
         font-size: 26px;
      }
      @media (max-width: $md4 + px) {
         font-size: 16px;
      }
   }
   &__text {
      font-family: 'Manrope Regular';
      font-size: 24px;
      line-height: 160%;
      margin-top: 15px;
      @media (max-width: $md3 + px) {
         font-size: 20px;
      }
      @media (max-width: $md4 + px) {
         font-size: 14px;
      }
   }
   &__input {
      font-family: 'Manrope Regular';
      font-size: 19px;
      line-height: 130%;
      padding: 17.5px 0 17.5px 14px;
      margin-top: 30px;
   }
   &__textarea {
      min-height: 183px;
      resize: vertical;
   }
   &__add-materials {
   }
   &__contact {
      display: flex;
      @media (max-width: $md3 + px) {
         flex-direction: column;
      }
   }
   &__button {
      padding: 16px 43.5px;
      white-space: nowrap;
      margin-right: 32px;
      @media (max-width: $md3 + px) {
         font-size: 19px;
         line-height: 160%;
         width: 100%;
         margin-bottom: 15px;
      }
   }
   &__processing-data {
      font-family: 'Manrope Regular';
      font-size: 15px;
      line-height: 20/15 * 100%;
      a {
         text-decoration: underline;
      }
      @media (max-width: $md4 + px) {
         font-size: 13px;
      }
   }
}

.add-materials {
   position: relative;
   margin-top: 50px;
   margin-bottom: 73px;
   @media (max-width: $md3 + px) {
      margin: 35px 0;
   }
   &__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      font-size: 0;
      cursor: pointer;
   }
   &__button {
      padding: 16px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blackColor;
      img {
         margin-right: 10px;
      }
      span {
         font-family: 'Manrope Light';
         font-size: 19px;
         line-height: 160%;
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
