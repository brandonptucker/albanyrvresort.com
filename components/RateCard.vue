<template>
  <div class="col-md-4 mb-5">
    <div
      class="card"
      style="box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05)"
    >
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">
          {{ title }}
        </h4>
      </div>
      <div class="card-body">
        <h1 class="display-4 mb-0 py-3">
          ${{ rate }}
        </h1>
        <router-link
          class="btn btn-lg btn-block btn-primary mt-3"
          to="reservations"
        >
          Book Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    rate: { type: Number, required: true },
  },
};
</script>
