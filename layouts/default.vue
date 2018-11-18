<template>
  <div class="wrapper">
    <AppHeader />
    <Navbar />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import Navbar from '../components/Navbar.vue';
import AppFooter from '../components/AppFooter.vue';

if (process.browser) {
  require('bootstrap'); // eslint-disable-line
}

export default {
  components: {
    AppHeader,
    Navbar,
    AppFooter,
  },
};
</script>
