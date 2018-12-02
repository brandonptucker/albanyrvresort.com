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
              v-validate="'required'"
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
          <div class="form-group col-md-12">
            <label>Comments</label>
            <textarea
              v-validate="'required'"
              :class="errors.has('comments') ? 'form-control is-invalid' : 'form-control'"
              rows="10"
              name="comments"
              placeholder="Message"
            />
            <div class="invalid-feedback">{{ errors.first('comments') }}</div>
          </div>
        </div>
        <button class="btn btn-primary col-md-12">
          Send
        </button>
      </form>
    </div>
    <google-map />
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';
import GoogleMap from '../components/GoogleMap.vue';

export default {
  components: {
    Hero,
    GoogleMap,
  },
  methods: {
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
