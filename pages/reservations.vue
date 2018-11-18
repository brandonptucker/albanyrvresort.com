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
            <input
              class="form-control"
              type="date"
              required
            >
          </div>
          <div class="col-md-3 form-group">
            <label>Check Out</label>
            <input
              class="form-control"
              type="date"
              required
            >
          </div>
          <div class="col-md-3 form-group">
            <label>Adults</label>
            <input
              class="form-control"
              type="number"
              value="2"
              min="1"
              required
            >
          </div>
          <div class="col-md-3 form-group">
            <label>Children</label>
            <input
              class="form-control"
              type="number"
              value="0"
              min="0"
              required
            >
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
import Hero from '../components/Hero.vue';

export default {
  components: {
    Hero,
  },
};
</script>
