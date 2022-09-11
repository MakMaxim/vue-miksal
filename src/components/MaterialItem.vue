<template>
   <article class="material__item material-item">
      <a href="#" class="material-item__content">
         <img
            class="material-item__image"
            :src="require('@/assets/images/materials/' + material_item.image)"
            alt="image"
         />
         <h3 class="material-item__title">{{ material_item.title }}</h3>
         <div class="material-item__text">{{ material_item.text }}</div>
      </a>
   </article>
</template>

<script>
export default {
   name: 'MaterialItem',
   props: {
      material_item: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/constants.scss';

.material {
   &__item {
   }
}
.material-item {
   a {
      display: inline-block;
      color: #000;
   }
   width: 160px;
   height: 145px;
   background-color: white;
   transition: 0.5s;
   &:hover {
      background-color: rgb(202, 202, 202);
      scale: 1.07;
   }
   &__content {
      padding: 12px 10px 12px 14px;
   }
   &__image {
   }
   &__title {
      font-family: 'Manrope Bold';
      font-size: 14px;
      line-height: 130%;
      margin-top: 10px;
      margin-bottom: 9px;
   }
   &__text {
      font-size: 12px;
      line-height: 16/12 * 100%;
      color: $grayColor;
   }
}
</style>
