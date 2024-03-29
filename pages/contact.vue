<template>
  <main role="main">
    <hero />
    <div class="container py-5">
      <h2 class="mb-5 text-center">
        <font-awesome-icon
          class="text-primary"
          icon="envelope"
        />
        Get in Touch
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
              v-validate="'required'"
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
          <div class="form-group col-md-12">
            <label>Comments</label>
            <textarea
              v-model="comments"
              v-validate="'required'"
              :class="errors.has('comments') ? 'form-control is-invalid' : 'form-control'"
              rows="10"
              name="comments"
              placeholder="Comments"
            />
            <div class="invalid-feedback">
              {{ errors.first('comments') }}
            </div>
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
    <google-map />
  </main>
</template>

<script>
import { post } from 'axios';
import Hero from '../components/Hero.vue';
import GoogleMap from '../components/GoogleMap.vue';

function buildData(data, myEmail) {
  return {
    myEmail,
    email: data.email,
    subject: `Contact form: ${data.name}`,
    message: `New submission from http://albanyrvresort.com/contact.\n\nName:\n${
      data.name
    }\n\nEmail:\n${data.email}\n\nPhone:\n${data.phone}\n\nComments:\n${
      data.comments
    }\n\nTimestamp:\n${new Date()}`,
  };
}

export default {
  components: {
    Hero,
    GoogleMap,
  },
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      comments: null,
      submitDisabled: false,
      showError: false,
      showSuccess: false,
    };
  },
  head() {
    return {
      titleTemplate: '%s - Contact Us',
      meta: [
        {
          name: 'description',
          content:
            'Send us an email, view map, get directions, view our hours of operations, and visit us on Facebook, Instagram, or Twitter.',
        },
      ],
    };
  },
  methods: {
    clearForm() {
      this.name = null;
      this.email = null;
      this.phone = null;
      this.comments = null;
    },
    async submit() {
      this.resetAlerts();
      const result = await this.$validator.validateAll();
      if (result) {
        const data = buildData(this.$data, this.$config.emailAddress);
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
      this.showError = false;
      this.showSuccess = false;
    },
  },
};
</script>

<style scoped>
.hero {
  background: url(/contact/hero-sm.jpg) no-repeat center center;
  background-size: cover;
}
@media screen and (min-width: 576px) {
  .hero {
    background-image: url(/contact/hero-md.jpg);
  }
}
@media screen and (min-width: 768px) {
  .hero {
    background-image: url(/contact/hero-lg.jpg);
  }
}
</style>
