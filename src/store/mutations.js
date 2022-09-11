export default {
   BURGER_MENU_OPEN(state) {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
   },
   BURGER_PUSH(state) {
      state.isBurgerPush = !state.isBurgerPush;
   },
   ORDER_FORM_OPEN(state) {
      state.isOrderFormOpen = !state.isOrderFormOpen;
   },
   SUCCESS_FORM_OPEN(state) {
      state.isSuccesFormOpen = !state.isSuccesFormOpen;
   },
   RESIZE_WIDTH(state) {
      state.width = window.innerWidth;
   },
   RESIZE_HEIGHT(state) {
      state.height = window.innerHeight;
   },
};
