<template>
   <div
      class="burgerMenu"
      @click="burgerMenuOpen()"
      :class="{ burgerMenu_active: ISBURGERPUSH }"
   >
      <span></span>
      <div class="burgerMenu__text">Меню</div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
   computed: {
      ...mapGetters(['ISBURGERMENUOPEN', 'ISBURGERPUSH']),
   },
   methods: {
      ...mapActions(['MAKE_BURGER_MENU_OPEN', 'MAKE_BURGER_PUSH']),
      burgerMenuOpen() {
         this.MAKE_BURGER_MENU_OPEN();
         this.MAKE_BURGER_PUSH();
         document.body.classList.toggle('_lock');
      },
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.burgerMenu {
   &__text {
      display: none;
   }
   @media (max-width: $md2+px) {
      &__text {
         display: block;
         margin-left: 40px;
         font-size: 19px;
         line-height: 130%;
      }
      position: relative;
      margin-right: 55px;
      z-index: 12;
      display: block;
      width: 30px;
      height: 18px;
      cursor: pointer;
      span,
      &:after,
      &:before {
         left: 0;
         position: absolute;
         height: 10%;
         width: 100%;
         transition: all 0.3s ease 0s;
         background-color: white;
         @media (max-width: $md2 + px) {
            background-color: black;
         }
      }
      &:after,
      &:before {
         content: '';
      }
      &:before {
         top: 0;
      }
      &:after {
         bottom: 0;
      }
      span {
         top: 50%;
         transform: scale(1) translate(0px, -50%);
      }
      &_active {
         span {
            transform: scale(0) translate(0px, -50%);
         }
         &:before {
            top: 50%;
            transform: rotate(-45deg) translate(0px, -50%);
         }
         &:after {
            bottom: 50%;
            transform: rotate(45deg) translate(0px, 50%);
         }
      }
   }
}
</style>
