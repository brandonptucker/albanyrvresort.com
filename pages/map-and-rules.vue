<template>
  <main role="main">
    <hero title="Map &amp; Rules" />
    <div class="container py-5">
      <div class="embed-responsive embed-responsive-4by3">
        <object
          class="embed-responsive-item"
          data="/brochure.pdf"
          type="application/pdf"
        >
          <p>Your browser does not support PDFs.
            <a href="/brochure.pdf">Download Brochure</a>.
          </p>
        </object>
      </div>
      <div class="text-center mt-5">
        <a
          class="btn btn-lg btn-primary"
          href="/brochure.pdf"
          target="_blank"
          rel="noopener"
        >
          Download Brochure
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  components: {
    Hero,
  },
  head() {
    return {
      titleTemplate: '%s - Browse Our Map and Rules',
      meta: [
        {
          name: 'description',
          content: 'View or download our brochure.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background: url(/map-and-rules/hero-sm.jpg) no-repeat center center;
  background-size: cover;
}

@media screen and (min-width: 576px) {
  .hero {
    background-image: url(/map-and-rules/hero-md.jpg);
  }
}

@media screen and (min-width: 768px) {
  .hero {
    background-image: url(/map-and-rules/hero-lg.jpg);
  }
}
</style>
