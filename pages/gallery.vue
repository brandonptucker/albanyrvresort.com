<template>
  <main role="main">
    <hero />
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4"
          style="margin-bottom: 30px"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
        <div
          class="col-md-4 mb-5"
        >
          <a
            href="http://via.placeholder.com/800x600.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://via.placeholder.com/400x300.jpg"
              class="img-fluid"
            >
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';

if (process.browser) {
  require('@fancyapps/fancybox'); // eslint-disable-line
  require('@fancyapps/fancybox/dist/jquery.fancybox.css'); // eslint-disable-line
}
export default {
  components: {
    Hero,
  },
};
</script>
