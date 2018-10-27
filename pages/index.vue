<template>
  <div 
    class="container mt-5" 
    style="height: 2000px">
    <p>This is the content for <code>index.vue</code>.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Home',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
};
</script>
