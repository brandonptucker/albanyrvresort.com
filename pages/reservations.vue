<template>
  <main role="main">
    <hero />
    <div class="container py-5">
      <h2 class="mb-5 text-center">
        <font-awesome-icon
          icon="calendar-alt"
          class="text-primary"
        />
        Reserve Your Site
      </h2>
      <form>
        <div class="form-row">
          <div class="col-md-4 form-group">
            <label>Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Name"
              required
            >
          </div>
          <div class="col-md-4 form-group">
            <label>Email</label>
            <input
              class="form-control"
              type="email"
              placeholder="Email"
              required
            >
          </div>
          <div class="col-md-4 form-group">
            <label>Phone</label>
            <input
              class="form-control"
              type="tel"
              placeholder="Phone"
              required
            >
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 form-group">
            <label>Check In</label>
            <datepicker
              :disabled-dates="{ to: new Date() }"
              v-model="checkin"
              placeholder="Check-In"
              input-class="form-control"
              format="MMM dd yyyy"
              @selected="checkinSelected" />
          </div>
          <div class="col-md-3 form-group">
            <label>Check Out</label>
            <datepicker
              :disabled-dates="checkin ? { to: addDays(checkin, 1) } : { to: new Date() }"
              v-model="checkout"
              placeholder="Check-Out"
              input-class="form-control"
              format="MMM dd yyyy" />
          </div>
          <div class="col-md-3 form-group">
            <label>Adults</label>
            <select
              v-model="adults"
              class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="col-md-3 form-group">
            <label>Children</label>
            <select
              v-model="children"
              class="form-control">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label>Comments</label>
            <textarea
              class="form-control"
              rows="10"
              placeholder="Comments"
            />
          </div>
        </div>
        <button
          class="btn btn-primary col-md-12"
        >
          Send
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Hero from '../components/Hero.vue';

export default {
  components: {
    Datepicker,
    Hero,
  },
  data() {
    return {
      children: 0,
    };
  },
  computed: {
    checkin: {
      get() {
        return this.$store.state.checkin;
      },
      set(value) {
        this.$store.commit('updateCheckin', value);
      },
    },
    checkout: {
      get() {
        return this.$store.state.checkout;
      },
      set(value) {
        this.$store.commit('updateCheckout', value);
      },
    },
    adults: {
      get() {
        return this.$store.state.adults;
      },
      set(value) {
        this.$store.commit('updateAdults', value);
      },
    },
  },
  methods: {
    checkinSelected(selected) {
      if (selected >= this.checkout) {
        const date = new Date(selected);
        date.setDate(date.getDate() + 1);
        this.checkout = date;
      }
    },
    addDays(date, days) {
      const d = new Date(date);
      d.setDate(date.getDate() + days);
      return d;
    },
  },
};
</script>
