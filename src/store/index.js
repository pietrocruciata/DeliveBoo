import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cart: [],
    cartTotal: 0,
    restaurantId: null,
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }
      if (localStorage.getItem('cartTotal')) {
        state.cartTotal = parseFloat(localStorage.getItem('cartTotal'));
      }
      if (localStorage.getItem('restaurantId')) {
        state.restaurantId = JSON.parse(localStorage.getItem('restaurantId'));
      }
      console.log("Initialise Store: ", state.restaurantId);
    },
    setRestaurantId(state, restaurantId) {
      state.restaurantId = restaurantId;
      localStorage.setItem('restaurantId', JSON.stringify(restaurantId));
      console.log("Restaurant ID Set: ", state.restaurantId);
    },
    clearCart(state) {
      state.cart = [];
      state.cartTotal = 0;
      state.restaurantId = null;
      localStorage.removeItem('cart');
      localStorage.removeItem('cartTotal');
      localStorage.removeItem('restaurantId');
      
      console.log("Cart Cleared, Restaurant ID Reset: ", state.restaurantId, state);
      console.log('localStorage',localStorage);
      console.log('cart',state.cart);
    },
    
    addRemoveCart(state, payload) {
      // state.restaurantId = null;
      console.log("Restaurant ID before mutation:", state.restaurantId);
      if (state.cart.length > 0 && state.restaurantId !== payload.dish.restaurant_id && payload.toAdd) {
        console.error("Non puoi aggiungere elementi da un altro ristorante.");
        console.log("Current Restaurant ID: ", state.restaurantId);
        console.log("Attempted to Add Dish from Restaurant ID: ", payload.dish.restaurant_id);
        return;
      }

      if (payload.toAdd) {
        state.cart.push(payload.dish);

        state.restaurantId = payload.dish.restaurant_id;
        console.log("Added Dish, Restaurant ID Set To: ", state.restaurantId);
      } else {
        state.cart = state.cart.filter(obj => obj.id !== payload.dish.id);
        if (state.cart.length === 0) {
          payload.dish.qty = 1
          
        } else {
          payload.dish.qty = 1
          

        }

      }

      

      state.cartTotal = state.cart.reduce((accumulator, object) => {
        parseFloat(accumulator) + parseFloat(object.price * object.qty)}, 0);

      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('restaurantId', JSON.stringify(state.restaurantId));
      console.log("Cart Updated, Current Restaurant ID: ", state.restaurantId);
      
    },
    updateCart(state, payload) {
      let itemToUpdate = state.cart.find(o => o.id === payload.dish.id);
      if (itemToUpdate) {
        itemToUpdate.qty = payload.dish.qty;
      }

      state.cartTotal = state.cart.reduce((accumulator, object) =>
        parseFloat(accumulator) + parseFloat(object.price * object.qty), 0);

      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
      localStorage.setItem('cart', JSON.stringify(state.cart));
      console.log("Updated Cart, Current Restaurant ID: ", state.restaurantId);

    },
  },
  actions: {
    async fetchRestaurantId({ commit }, restaurantId) {
      try {
        console.log("Fetching restaurant ID:", restaurantId);

        const response = await axios.get(`http://127.0.0.1:8000/api/restaurants/${restaurantId}`);
        console.log("API Response:", response.data);

        const restaurant = response.data.restaurant;
        console.log("Fetched restaurant:", restaurant);

        commit('setRestaurantId', restaurant.id);
      } catch (error) {
        console.error('Errore durante il recupero dell\'ID del ristorante:', error);
      }
    },
    async checkAndAddToCart({ state, commit }, payload) {
      if (state.restaurantId && state.restaurantId !== payload.dish.restaurant_id) {
        if (confirm("Stai cercando di aggiungere un elemento da un altro ristorante. Vuoi svuotare il carrello?")) {
          commit('clearCart');



        } else {
          return;
        }
      }
      commit('addRemoveCart', payload);

    },
  },
  getters: {
    totalQuantity(state) {
      return state.cart.reduce((total, item) => total + item.qty, 0);
    }
  },
  modules: {},
});
