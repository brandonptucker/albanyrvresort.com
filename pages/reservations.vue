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
              v-model="name"
              v-validate="'required'"
              :class="errors.has('name') ? 'form-control is-invalid' : 'form-control'"
              type="text"
              name="name"
              placeholder="Name"
            >
            <div class="invalid-feedback">
              {{ errors.first('name') }}
            </div>
          </div>
          <div class="col-md-4 form-group">
            <label>Email</label>
            <input
              v-model="email"
              v-validate="'required|email'"
              :class="errors.has('email') ? 'form-control is-invalid' : 'form-control'"
              type="email"
              name="email"
              placeholder="Email"
            >
            <div class="invalid-feedback">
              {{ errors.first('email') }}
            </div>
          </div>
          <div class="col-md-4 form-group">
            <label>Phone</label>
            <input
              v-model="phone"
              v-validate="'required|numeric|digits:10'"
              :class="errors.has('phone') ? 'form-control is-invalid' : 'form-control'"
              type="tel"
              name="phone"
              placeholder="Phone"
            >
            <div class="invalid-feedback">
              {{ errors.first('phone') }}
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 form-group">
            <label>Check-In</label>
            <datepicker
              v-model="checkin"
              v-validate="'required'"
              :disabled-dates="{ to: new Date() }"
              :input-class="errors.has('checkin') ? 'form-control is-invalid' : 'form-control'"
              name="checkin"
              placeholder="Check-In"
              format="MMM dd yyyy"
              @selected="checkinSelected"
              @closed="$validator.validate('checkin')"
            />
            <div style="margin-top: 0.25rem; font-size: 80%; color: #dc3545">
              {{ errors.first('checkin') }}
            </div>
          </div>
          <div class="col-md-3 form-group">
            <label>Check-Out</label>
            <datepicker
              v-model="checkout"
              v-validate="'required'"
              :disabled-dates="checkin ? { to: addDays(checkin, 1) } : { to: new Date() }"
              :input-class="errors.has('checkout') ? 'form-control is-invalid' : 'form-control'"
              name="checkout"
              placeholder="Check-Out"
              format="MMM dd yyyy"
              @closed="$validator.validate('checkout')"
            />
            <div style="margin-top: 0.25rem; font-size: 80%; color: #dc3545">
              {{ errors.first('checkout') }}
            </div>
          </div>
          <div class="col-md-3 form-group">
            <label>Adults</label>
            <select
              v-model="adults"
              class="form-control"
            >
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
              class="form-control"
            >
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
              v-model="comments"
              class="form-control"
              rows="10"
              placeholder="Comments"
            />
          </div>
        </div>
        <div
          v-if="errors.items.length > 0"
          class="alert alert-danger"
          role="alert"
        >
          Please correct the validation errors above.
        </div>
        <div
          v-if="showError"
          class="alert alert-danger"
          role="alert"
        >
          An error was encountered while submitting the form.
          Please try again later or call us at <strong>(229) 431-2229</strong>.
        </div>
        <div
          v-if="showSuccess"
          class="alert alert-success"
          role="alert"
        >
          The form was submitted successfully. Please allow 24 hours for us to process this request.
        </div>
        <button
          :disabled="submitDisabled"
          class="btn btn-primary col-md-12"
        >
          <font-awesome-icon
            v-if="submitDisabled"
            icon="spinner"
            spin
          /> Send
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import { post } from 'axios';
import Datepicker from 'vuejs-datepicker';
import Hero from '../components/Hero.vue';

function buildData(data, state, myEmail) {
  return {
    myEmail,
    email: data.email,
    subject: `Reservation form: ${data.name}`,
    message: `New submission from http://albanyrvresort.com/reservations.\n\nName:\n${
      data.name
    }\n\nEmail:\n${data.email}\n\nPhone:\n${
      data.phone
    }\n\nCheck-In:\n${state.checkin.toDateString()}\n\nCheck-Out:\n${state.checkout.toDateString()}\n\nAdults:\n${
      state.adults
    }\n\nChildren:\n${data.children}\n\nComments:\n${
      data.comments
    }\n\nTimestamp:\n${new Date()}`,
  };
}

export default {
  components: {
    Datepicker,
    Hero,
  },
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      children: 0,
      comments: null,
      submitDisabled: false,
      showError: false,
      showSuccess: false,
    };
  },
  head() {
    return {
      titleTemplate: '%s - Request a Reservation',
      meta: [
        {
          name: 'description',
          content: 'Fill out the form to request a reservation.',
        },
      ],
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
    clearForm() {
      this.name = null;
      this.email = null;
      this.phone = null;
      this.checkin = null;
      this.checkout = null;
      this.adults = 1;
      this.children = 0;
      this.comments = null;
    },
    async submit() {
      this.resetAlerts();
      const result = await this.$validator.validateAll();
      if (result) {
        const data = buildData(this.$data, this.$store.state, this.$config.emailAddress);
        try {
          this.submitDisabled = true;
          await post(this.$config.emailServiceURL, data);
          this.clearForm();
          this.$nextTick(() => this.$validator.reset());
          this.showSuccess = true;
        } catch (e) {
          this.showError = true;
        } finally {
          this.submitDisabled = false;
        }
      }
    },
    resetAlerts() {
      this.$data.showError = false;
      this.$data.showSuccess = false;
    },
  },
};
</script>

<style scoped>
.hero {
  background: url(/reservations/hero-sm.jpg) no-repeat center center;
  background-size: cover;
}
@media screen and (min-width: 576px) {
  .hero {
    background-image: url(/reservations/hero-md.jpg);
  }
}
@media screen and (min-width: 768px) {
  .hero {
    background-image: url(/reservations/hero-lg.jpg);
  }
}
</style>
