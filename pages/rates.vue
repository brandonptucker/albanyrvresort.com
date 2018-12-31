<template>
  <main role="main">
    <hero />
    <div class="container mt-5 text-center">
      <ul
        id="pills-tab"
        class="nav nav-pills justify-content-center mb-5"
        role="tablist"
      >
        <li class="nav-item">
          <a
            id="pills-home-tab"
            class="nav-link active show"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            30 Amp
          </a>
        </li>
        <li class="nav-item">
          <a
            id="pills-profile-tab"
            class="nav-link"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            50 Amp
          </a>
        </li>
      </ul>
      <div
        id="pills-tabContent"
        class="tab-content"
      >
        <div
          id="pills-home"
          class="tab-pane fade active show"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="row">
            <rate-card
              :rate="32"
              title="Daily"
            />
            <rate-card
              :rate="175"
              title="Weekly"
            />
            <rate-card
              :rate="450"
              title="Monthly"
            />
          </div>
        </div>
        <div
          id="pills-profile"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="row">
            <rate-card
              :rate="36"
              title="Daily"
            />
            <rate-card
              :rate="190"
              title="Weekly"
            />
            <rate-card
              :rate="500"
              title="Monthly"
            />
          </div>
        </div>
      </div>
      <p class="mb-5">
        All rates include 30 or 50 amp electricity, water, sewer, cable TV,
        level cement patio, picnic table, and free wireless internet.
      </p>
    </div>
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';
import RateCard from '../components/RateCard.vue';

export default {
  components: {
    Hero,
    RateCard,
  },
};
</script>

<style scoped>
.hero {
  background: url(/rates/hero-sm.jpg) no-repeat center center;
  background-size: cover;
}
@media screen and (min-width: 576px) {
  .hero {
    background-image: url(/rates/hero-md.jpg);
  }
}
@media screen and (min-width: 768px) {
  .hero {
    background-image: url(/rates/hero-lg.jpg);
  }
}
</style>
