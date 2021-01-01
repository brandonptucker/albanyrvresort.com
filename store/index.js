export const state = () => ({
  checkin: null,
  checkout: null,
  adults: 1,
});

export const mutations = {
  /* eslint-disable no-shadow */
  /* eslint-disable no-param-reassign */
  updateCheckin(state, value) {
    state.checkin = value;
  },
  updateCheckout(state, value) {
    state.checkout = value;
  },
  updateAdults(state, value) {
    state.adults = value;
  },
};
