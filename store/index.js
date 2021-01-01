import Vuex from 'vuex'; // eslint-disable-line

const createStore = () => new Vuex.Store({
  state: {
    checkin: null,
    checkout: null,
    adults: 1,
  },
  mutations: {
    updateCheckin(state, value) {
        state.checkin = value; // eslint-disable-line
    },
    updateCheckout(state, value) {
        state.checkout = value; // eslint-disable-line
    },
    updateAdults(state, value) {
        state.adults = value; // eslint-disable-line
    },
  },
});

export default createStore;
