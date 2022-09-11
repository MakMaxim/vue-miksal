<template>
   <section class="description">
      <div class="description__container _container">
         <div class="description__title">Описание</div>

         <div class="description__item">
            <div
               class="description__name"
               @click="isFinishOpen = !isFinishOpen"
            >
               <img
                  v-if="!isFinishOpen"
                  src="@/assets/images/description/plus.svg"
                  alt="plus"
               />
               <img
                  v-if="isFinishOpen"
                  src="@/assets/images/description/minus.svg"
                  alt="minus"
               />
               <div :style="{ color: isFinishOpen ? '#11ace5' : '#111111' }">
                  Варианты отделки
               </div>
            </div>
            <transition-group name="items-list">
               <div v-if="isFinishOpen">
                  Варианты отделки Варианты отделки Варианты отделки Варианты
                  отделки Варианты отделки
               </div>
            </transition-group>
         </div>

         <div class="description__item">
            <div
               class="description__name"
               @click="isSchemesOpen = !isSchemesOpen"
            >
               <img
                  v-if="!isSchemesOpen"
                  src="@/assets/images/description/plus.svg"
                  alt="plus"
               />
               <img
                  v-if="isSchemesOpen"
                  src="@/assets/images/description/minus.svg"
                  alt="minus"
               />
               <div :style="{ color: isSchemesOpen ? '#11ace5' : '#111111' }">
                  Схемы открывания
               </div>
            </div>
            <transition-group name="items-list">
               <div class="description__schemes schemes" v-if="isSchemesOpen">
                  <div class="schemes__text">
                     Разнообразные системы открывания дверей станут незаменимым
                     решением в проектировании строгих и современных интерьеров
                  </div>
                  <div class="schemes__items">
                     <li
                        class="schemes__item"
                        v-for="scheme in SCHEMES"
                        :key="scheme.id"
                     >
                        <img
                           class="schemes__image"
                           :src="
                              require('@/assets/images/description/schemes/' +
                                 scheme.image)
                           "
                           alt="image"
                        />
                        <div class="schemes__title">
                           {{ scheme.text }}
                        </div>
                     </li>
                  </div>
               </div>
            </transition-group>
         </div>

         <div class="description__item">
            <div
               class="description__name"
               @click="isPackagingOpen = !isPackagingOpen"
            >
               <img
                  v-if="!isPackagingOpen"
                  src="@/assets/images/description/plus.svg"
                  alt="plus"
               />
               <img
                  v-if="isPackagingOpen"
                  src="@/assets/images/description/minus.svg"
                  alt="minus"
               />
               <div :style="{ color: isPackagingOpen ? '#11ace5' : '#111111' }">
                  Комплектация
               </div>
            </div>

            <transition-group name="items-list">
               <div v-if="isPackagingOpen">
                  Комплектация Комплектация Комплектация Комплектация
                  Комплектация
               </div>
            </transition-group>
         </div>

         <div class="description__item">
            <div
               class="description__name"
               @click="isFindingsOpen = !isFindingsOpen"
            >
               <img
                  v-if="!isFindingsOpen"
                  src="@/assets/images/description/plus.svg"
                  alt="plus"
               />
               <img
                  v-if="isFindingsOpen"
                  src="@/assets/images/description/minus.svg"
                  alt="minus"
               />
               <div :style="{ color: isFindingsOpen ? '#11ace5' : '#111111' }">
                  Фурнитура
               </div>
            </div>
            <transition-group name="items-list">
               <div v-if="isFindingsOpen">
                  Фурнитура Фурнитура Фурнитура Фурнитура Фурнитура
               </div>
            </transition-group>
         </div>

         <div class="description__item">
            <div class="description__name" @click="isBoxOpen = !isBoxOpen">
               <img
                  v-if="!isBoxOpen"
                  src="@/assets/images/description/plus.svg"
                  alt="plus"
               />
               <img
                  v-if="isBoxOpen"
                  src="@/assets/images/description/minus.svg"
                  alt="minus"
               />
               <div :style="{ color: isBoxOpen ? '#11ace5' : '#111111' }">
                  Варианты коробов
               </div>
            </div>
            <transition-group name="items-list">
               <div v-if="isBoxOpen">
                  Варианты коробов Варианты коробов Варианты коробов Варианты
                  коробов Варианты коробов
               </div>
            </transition-group>
         </div>

         <div class="description__item">
            <div class="description__name" @click="isDescrOpen = !isDescrOpen">
               <img
                  v-if="!isDescrOpen"
                  src="@/assets/images/description/plus.svg"
                  alt="plus"
               />
               <img
                  v-if="isDescrOpen"
                  src="@/assets/images/description/minus.svg"
                  alt="minus"
               />
               <div :style="{ color: isDescrOpen ? '#11ace5' : '#111111' }">
                  Техническое описание
               </div>
            </div>
            <transition-group name="items-list">
               <div v-if="isDescrOpen">
                  Техническое описание Техническое описание Техническое описание
                  Техническое описание Техническое описание
               </div>
            </transition-group>
         </div>
      </div>
   </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: 'SectionDescription',
   data() {
      return {
         isFinishOpen: false,
         isSchemesOpen: true,
         isPackagingOpen: false,
         isFindingsOpen: false,
         isBoxOpen: false,
         isDescrOpen: false,
      };
   },
   computed: {
      ...mapGetters(['SCHEMES']),
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.description {
   margin-top: 120px;
   @media (max-width: $md3 + px) {
      margin-top: 60px;
   }
   &__container {
   }
   &__title {
      font-size: 48px;
      line-height: 110%;
      @media (max-width: $md3 + px) {
         font-size: 42px;
         line-height: 120%;
      }
      @media (max-width: $md4 + px) {
         font-size: 28px;
         line-height: 150%;
      }
   }
   &__item {
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 30px;
   }
   &__name {
      display: flex;
      cursor: pointer;
      margin-top: 40px;
      div {
         font-size: 28px;
         line-height: 150%;
         margin-left: 20px;
         @media (max-width: $md4 + px) {
            font-size: 19px;
            line-height: 130%;
            font-family: 'Manrope Bold';
         }
      }
   }
   &__schemes {
   }
}

.schemes {
   font-family: 'Manrope Regular';
   &__text {
      color: $grayColor;
      font-size: 19px;
      line-height: 175%;
      margin-top: 70px;
      margin-bottom: 40px;
      @media (max-width: $md4 + px) {
         margin-top: 40px;
      }
   }
   &__items {
      display: flex;
      column-gap: 30px;
      flex-wrap: wrap;
      margin-bottom: 35px;
      @media (max-width: $md3 + px) {
         margin-bottom: 0;
      }
   }
   &__item {
      width: 240px;
      margin-bottom: 40px;
      @media (max-width: $md3 + px) {
         margin-bottom: 35px;
         width: 210px;
      }
      @media (max-width: $md4 + px) {
         width: 130px;
      }
   }
   &__image {
      width: 240px;
      height: 240px;
      margin-bottom: 15px;
      @media (max-width: $md3 + px) {
         width: 210px;
         height: 210px;
      }
      @media (max-width: $md4 + px) {
         width: 130px;
         height: 130px;
      }
   }
   &__title {
      color: $grayColor;
      font-size: 14px;
      line-height: 140%;
      @media (max-width: $md4 + px) {
         font-size: 12px;
         line-height: 16/12 * 100%;
      }
   }
}

.items-list-item {
   display: inline-block;
   margin-right: 10px;
}
.items-list-enter-active,
.items-list-leave-active {
   transition: all 0.4s ease;
}
.items-list-enter-from,
.items-list-leave-to {
   opacity: 0;
   transform: translateY(30px);
}
</style>
