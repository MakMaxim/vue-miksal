<template>
   <footer class="footer">
      <div class="footer__container _container">
         <div class="footer__left">© 2008–2022 МИКСАЛ | Карта сайта</div>
         <div class="footer__right">Создание сайта — Individ</div>
      </div>
   </footer>
</template>

<script>
export default {
   name: 'FooterBlock',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.footer {
   background-color: $blackColor;
   color: #e7e7e7;
   font-size: 17px;
   line-height: 160%;
   font-family: 'Monrope Regular';
   margin-top: 130px;
   @media (max-width: $md3 + px) {
      margin-top: 60px;
   }
   &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 90px;
      @media (max-width: 600px) {
         flex-direction: column;
         justify-content: center;
      }
   }
   &__left {
   }
   &__right {
   }
}
</style>
