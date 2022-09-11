<template>
   <div class="wrapper">
      <header-block />
      <main class="main">
         <order-form />
         <success-form />
         <section-main-screen />
         <section-info />
         <section-description />
      </main>
      <footer-block />
   </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import SectionMainScreen from '@/components/SectionMainScreen.vue';
import SectionInfo from '@/components/SectionInfo.vue';
import SectionDescription from '@/components/SectionDescription.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import { mapActions } from 'vuex';
import OrderForm from '@/components/OrderForm.vue';
import SuccessForm from '@/components/SuccessForm.vue';

export default {
   name: 'App',
   components: {
      HeaderBlock,
      SectionInfo,
      SectionMainScreen,
      SectionDescription,
      FooterBlock,
      OrderForm,
      SuccessForm,
   },
   created() {
      window.addEventListener('resize', this.handleResize);
   },
   mounted() {
      setInterval(() => {
         this.ibg();
      }, 200);
      this.handleResize();
   },
   unmounted() {
      window.removeEventListener('resize', this.handleResize);
   },

   methods: {
      ...mapActions(['MAKE_RESIZE_WIDTH', 'MAKE_RESIZE_HEIGHT']),
      handleResize() {
         this.MAKE_RESIZE_WIDTH();
         this.MAKE_RESIZE_HEIGHT();
      },
      ibg() {
         let ibg = document.querySelectorAll('.ibg');
         for (let i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
               ibg[i].style.backgroundImage =
                  'url(' +
                  ibg[i].querySelector('img').getAttribute('src') +
                  ')';
            }
         }
      },
   },
};
</script>

<style lang="scss">
@import '@/assets/styles/reset';
</style>
