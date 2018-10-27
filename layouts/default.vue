<template>
  <div class="wrapper">
    <AppHeader />
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import Navbar from '../components/Navbar.vue';

if (process.browser) {
  require('bootstrap'); // eslint-disable-line
}

export default {
  components: {
    AppHeader,
    Navbar,
  },
};
</script>
