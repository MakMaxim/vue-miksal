<template>
   <section class="info">
      <div class="info__container _container">
         <div class="info__left info-left">
            <div class="info-left__top">
               <div class="info-left__config">
                  <div class="info-left__cost">от 50 424 ₽</div>
                  <div class="info-left__text">
                     <span>За комплект.</span>
                     <a href="#">Что входит в комплект?</a>
                  </div>
                  <button class="info-left__btn-config btn">
                     Обсудить конфигурацию
                  </button>
               </div>
               <div class="info-left__links">
                  <a class="info-left__save">
                     <img src="@/assets/images/save.svg" alt="save" />
                     <div>Скачать материалы</div>
                  </a>
                  <a class="info-left__geo">
                     <img src="@/assets/images/geo.svg" alt="save" />
                     <div>Где купить?</div>
                  </a>
               </div>
            </div>
            <div class="info-left__bottom">
               <div>
                  Дверное полотно с алюминиевым профилем 18 мм. Закалённое
                  стекло 6мм.
               </div>
               <div>
                  Современные решения, способные украсить любой интерьер.
                  Внешний вид двери формируют явно видимый алюминиевый профиль и
                  стекло, на которое можно нанести художественный рисунок.
                  Управляемый дизайн: внешний вид легко разнообразить, добавив
                  или убрав поперечины, или нанеся на стекло рисунок.
               </div>
            </div>
         </div>
         <div class="info__right info-right">
            <div class="info-right__series">
               Серия не ограничена модельным рядом и <br />может быть выполнена
               по индивидуальному дизайн-проекту
            </div>
            <div class="info-right__materials">
               <div class="info-right__title">
                  Ваша дверь может быть исполнена в любом варианте отделки
               </div>
               <div class="info-right__list">
                  <material-item
                     v-for="material in MATERIALS"
                     :key="material.id"
                     :material_item="material"
                  />
               </div>
               <a href="#" class="info-right__more">
                  Посмотреть все варианты отделки
               </a>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { mapGetters } from 'vuex';
import MaterialItem from '@/components/MaterialItem.vue';

export default {
   name: 'SectionInfo',
   components: {
      MaterialItem,
   },
   computed: {
      ...mapGetters(['MATERIALS']),
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.info {
   margin-top: 70px;
   @media (max-width: 1330px) {
      margin-top: 30px;
   }
   @media (max-width: $md3 + px) {
      margin-top: 20px;
   }
   a {
      color: $blackColor;
      cursor: pointer;
      &:hover {
         color: $grayColor;
      }
   }
   &__container {
      display: flex;
      @media (max-width: 1330px) {
         flex-direction: column;
      }
   }
   &__left {
      flex: 0 1 50%;
   }
   &__right {
      flex: 0 1 50%;
   }
}

.info-left {
   &__top {
      display: flex;
      @media (max-width: $md3 + px) {
         flex-direction: column;
      }
   }
   &__config {
      display: inline-block;
      padding: 40px 75px 40px 40px;
      background-color: #f5f5f5;
      margin-right: 30px;
      @media (max-width: $md3 + px) {
         padding: 20px 25px 30px 20px;
         margin-right: 0;
      }
   }
   &__cost {
      font-family: 'Manrope Bold';
      font-size: 26px;
      line-height: 120%;
   }
   &__text {
      font-size: 12px;
      line-height: 16/12 * 100%;
      margin-top: 15px;
      margin-bottom: 20px;
      a {
         border-bottom: 1px solid #c5c5c5;
      }
   }
   &__btn-config {
      padding: 16.5px 27.5px;
   }
   &__links {
      display: flex;
      flex-direction: column;
      @media (max-width: $md3 + px) {
         margin-top: 20px;
      }
      a {
         display: flex;
         align-items: center;
         font-size: 19px;
         line-height: 160%;
         img {
            margin-right: 15px;
         }
         @media (max-width: $md3 + px) {
            font-size: 17px;
            font-family: 'Manrope Regular';
         }
      }
   }
   &__save {
      margin-bottom: 17px;
   }
   &__geo {
   }
   &__bottom {
      font-family: 'Manrope Regular';
      font-size: 19px;
      line-height: 175%;
      max-width: 90%;
      margin-top: 40px;
      color: $grayColor;
      > div {
         margin-bottom: 20px;
      }
      @media (max-width: 1330px) {
         max-width: 100%;
      }
      @media (max-width: $md3 + px) {
         font-size: 17px;
      }
   }
}

.info-right {
   &__series {
      font-size: 19px;
      line-height: 130%;
      text-align: center;
      padding: 20px 45px;
      background-color: #edf8fc;
      @media (max-width: 1330px) {
         margin-top: 30px;
      }
      @media (max-width: $md3 + px) {
         margin-top: 20px;
         font-size: 17px;
         line-height: 160%;
         font-family: 'Manrope Bold';
      }
   }
   &__materials {
      margin-top: 20px;
      padding: 30px 45px 58px 35px;
      background-color: #f5f5f5;
      @media (max-width: 1330px) {
         margin-top: 30px;
         padding-left: 0;
      }
   }
   &__title {
      font-size: 28px;
      line-height: 150%;
      @media (max-width: $md3 + px) {
         font-size: 21px;
         line-height: 120%;
         font-family: 'Manrope Bold';
      }
   }
   &__list {
      margin: 30px 0;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
   }
   &__more {
      border-bottom: 1px solid #000;
      font-family: 'Manrope Regular';
      @media (max-width: $md3 + px) {
         font-size: 17px;
         line-height: 160%;
      }
   }
}
</style>
