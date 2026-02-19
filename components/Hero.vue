<template>
  <div class="hero">
    <div style="background: rgba(0, 0, 0, .5)">
      <div
        class="container text-center"
        style="padding-top: 10rem; padding-bottom: 10rem"
      >
        <h1 class="text-white">
          {{ computedTitle }}
        </h1>
        <p
          class="lead"
          style="color: rgba(255, 255, 255, .75)"
        >
          <router-link to="/">
            Home
          </router-link> / {{ computedTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    computedTitle() {
      if (this.title) return this.title;
      const { name } = this.$route;
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>
