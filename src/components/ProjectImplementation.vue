<template>
   <div class="impl">
      <div class="impl__title">Как мы реализуем проект</div>
      <ul class="impl__list">
         <li class="impl__item">
            <img src="@/assets/images/square.svg" alt="square" />Производим
            замеры для будущего изделия (<span>5–15 дней</span>)
         </li>
         <li class="impl__item">
            <img src="@/assets/images/square.svg" alt="square" />Разрабатываем
            эскизы и выпускаем заказ (<span>15–35 дней</span>)
         </li>
         <li class="impl__item">
            <img src="@/assets/images/square.svg" alt="square" />Доставка и
            установка (<span>2-5 дней</span>)
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   name: 'ProjectImplementation',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.impl {
   margin-top: 80px;
   color: white;
   @media (max-width: $md3 + px) {
      margin-top: 40px;
   }
   &__title {
      font-size: 23px;
      line-height: 120%;
      margin-bottom: 22px;
      @media (max-width: $md4 + px) {
         font-size: 18px;
      }
   }
   &__list {
   }
   &__item {
      font-family: 'Manrope Light';
      font-size: 17px;
      line-height: 160%;
      &:not(:last-child) {
         margin-bottom: 10px;
      }
      span {
         font-family: 'Manrope Bold';
      }
      img {
         margin-right: 10px;
      }
      @media (max-width: $md4 + px) {
         font-size: 14px;
      }
   }
}
</style>
