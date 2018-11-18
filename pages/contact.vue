<template>
  <main role="main">
    <hero />
    <div class="container py-5 text-center">
      <h2 class="mb-5">
        <font-awesome-icon
          class="text-primary"
          icon="envelope"
        />
        Get in Touch
      </h2>
      <form>
        <div class="form-row">
          <div class="col-md-4 form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Name*"
            >
          </div>
          <div class="col-md-4 form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Email*"
            >
          </div>
          <div class="col-md-4 form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Phone*"
            >
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <textarea
              class="form-control"
              rows="10"
              placeholder="Message*"
            />
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
};
</script>
