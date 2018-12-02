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
      <form @submit.prevent="submit">
        <div class="form-row">
          <div class="col-md-4 form-group">
            <label>Name</label>
            <input
              v-validate="'required'"
              :class="errors.has('name') ? 'form-control is-invalid' : 'form-control'"
              type="text"
              name="name"
              placeholder="Name"
            >
            <div class="invalid-feedback">{{ errors.first('name') }}</div>
          </div>
          <div class="col-md-4 form-group">
            <label>Email</label>
            <input
              v-validate="'required|email'"
              :class="errors.has('email') ? 'form-control is-invalid' : 'form-control'"
              type="email"
              name="email"
              placeholder="Email"
            >
            <div class="invalid-feedback">{{ errors.first('email') }}</div>
          </div>
          <div class="col-md-4 form-group">
            <label>Phone</label>
            <input
              v-validate="'required|numeric|digits:10'"
              :class="errors.has('phone') ? 'form-control is-invalid' : 'form-control'"
              type="tel"
              name="phone"
              placeholder="Phone"
            >
            <div class="invalid-feedback">{{ errors.first('phone') }}</div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 form-group">
            <label>Check In</label>
            <datepicker
              v-validate="'required'"
              :disabled-dates="{ to: new Date() }"
              v-model="checkin"
              :input-class="errors.has('checkin') ? 'form-control is-invalid' : 'form-control'"
              name="checkin"
              placeholder="Check-In"
              format="MMM dd yyyy"
              @selected="checkinSelected"
              @closed="$validator.validate('checkin')" />
            <div style="margin-top: 0.25rem; font-size: 80%; color: #dc3545">{{ errors.first('checkin') }}</div>
          </div>
          <div class="col-md-3 form-group">
            <label>Check Out</label>
            <datepicker
              v-validate="'required'"
              :disabled-dates="checkin ? { to: addDays(checkin, 1) } : { to: new Date() }"
              v-model="checkout"
              :input-class="errors.has('checkout') ? 'form-control is-invalid' : 'form-control'"
              name="checkout"
              placeholder="Check-Out"
              format="MMM dd yyyy"
              @closed="$validator.validate('checkout')" />
            <div style="margin-top: 0.25rem; font-size: 80%; color: #dc3545">{{ errors.first('checkout') }}</div>
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
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log('Submit form');
          return;
        }
        console.log('Correct errors');
      });
    },
  },
};
</script>
