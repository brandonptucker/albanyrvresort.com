<template>
  <h1>Hello world!</h1>
</template>

<script>
if (process.browser) {
  require('bootstrap');
}

export default {
  head() {
    return {
      titleTemplate: '%s - Home',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    };
  }
};
</script>
