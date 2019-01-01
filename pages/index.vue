<template>
  <main
    role="main">
    <div class="hero">
      <div class="overlay">
        <div class="container d-flex h-100">
          <div class="m-auto">
            <p class="display-4 text-white text-center mb-4">Reserve Your Site Today!</p>
            <form>
              <div class="form-row justify-content-center">
                <div class="form-group col-md-3">
                  <label style="color: white">Check-In</label>
                  <datepicker
                    :disabled-dates="{ to: new Date() }"
                    v-model="checkin"
                    placeholder="Check-In"
                    input-class="form-control form-control-lg"
                    format="MMM dd yyyy"
                    @selected="checkinSelected"/>
                </div>
                <div class="form-group col-md-3">
                  <label style="color: white">Check-Out</label>
                  <datepicker
                    :disabled-dates="checkin ? { to: addDays(checkin, 1) } : { to: new Date() }"
                    v-model="checkout"
                    placeholder="Check-Out"
                    input-class="form-control form-control-lg"
                    format="MMM dd yyyy" />
                </div>
                <div class="form-group col-md-2">
                  <label style="color: white">Adults</label>
                  <select
                    v-model="adults"
                    class="form-control form-control-lg">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div
                  class="form-group"
                  style="padding-left: 5px; padding-right: 5px">
                  <router-link
                    class="btn btn-lg btn-primary"
                    style="margin-top: 32px"
                    to="/reservations">Book Now</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5 text-center">
      <h1>Welcome</h1>
      <p class="lead mb-5">Albany RV Resort is a family owned and operated RV campground located in Albany, GA.</p>
      <div class="row">
        <div class="col-md-3 mb-5">
          <font-awesome-icon
            class="text-primary mb-3"
            icon="bus"
            size="3x"/>
          <h3>Big Rigs</h3>
          <p>Large RV sites designed for accessibility and convenience</p>
        </div>
        <div class="col-md-3 mb-5">
          <font-awesome-icon
            class="text-primary mb-3"
            icon="smile"
            size="3x"/>
          <h3>Friendly Staff</h3>
          <p>We strive for memorable camping experiences</p>
        </div>
        <div class="col-md-3 mb-5">
          <font-awesome-icon
            class="text-primary mb-3"
            icon="fish"
            size="3x"/>
          <h3>Lake Tucker</h3>
          <p>Stocked fishing pond with bass, bream, and catfish</p>
        </div>
        <div class="col-md-3 mb-5">
          <font-awesome-icon
            class="text-primary mb-3"
            icon="wifi"
            size="3x"/>
          <h3>Free Wifi</h3>
          <p>High speed wireless internet at no additional cost</p>
        </div>
      </div>
    </div>
    <div class="bg-dark pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-self-center mb-5">
            <img
              class="img-fluid"
              src="https://source.unsplash.com/random"
            >
          </div>
          <div class="col-md-6 align-self-center mb-5 text-center text-white">
            <h2 class="mb-5">Our RV Sites</h2>
            <ul
              class="list-unstyled lead"
              style="color: rgba(255, 255, 255, .5)"
            >
              <li>93 full hookup campsites</li>
              <li>20 x 40 ft. level cement patios</li>
              <li>Extra large 120 ft. pull thrus</li>
              <li>Spacious, private sites</li>
              <li>Easy entry and exit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 text-center">
      <h2 class="mb-5">Testimonials</h2>
      <testimonials :testimonials="testimonials"/>
    </div>
    <google-map />
  </main>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Testimonials from '../components/Testimonials.vue';
import GoogleMap from '../components/GoogleMap.vue';

export default {
  components: {
    Datepicker,
    Testimonials,
    GoogleMap,
  },
  data() {
    return {
      testimonials: [
        {
          text:
            'This is a great place to stay. Family owned and operated, very clean and well kept. Jennifer booked our reservation and was extremely friendly and hospitable. The spaces are clean, easy to get in and out of and everything worked as it should. A great place for peace and quiet. We will be back!',
          name: 'Darren Janesky',
        },
        {
          text:
            'Super clean resort-like bathrooms and showers, well maintained park, nice rigs stay here, owners are very friendly and helpful, RV parts and service next door.',
          name: 'Mike Shelton',
        },
        {
          text:
            'We love this place! Each lot has ample space, shade and privacy! It has now become our go-to place to stop going north and heading south!',
          name: 'Rose Gifford',
        },
        {
          text:
            '5 stars Love, Love, Love this park! Staff is tremendously helpful, Clean well maintained facilities. Spacious Lots, Quiet. Will be back!',
          name: 'A Google User',
        },
      ],
    };
  },
  computed: {
    checkin: {
      get() {
        return this.$store.state.checkin;
      },
      set(value) {
        this.$store.commit('updateCheckin', value);
      },
    },
    checkout: {
      get() {
        return this.$store.state.checkout;
      },
      set(value) {
        this.$store.commit('updateCheckout', value);
      },
    },
    adults: {
      get() {
        return this.$store.state.adults;
      },
      set(value) {
        this.$store.commit('updateAdults', value);
      },
    },
  },
  methods: {
    checkinSelected(selected) {
      if (selected >= this.checkout) {
        const date = new Date(selected);
        date.setDate(date.getDate() + 1);
        this.checkout = date;
      }
    },
    addDays(date, days) {
      const d = new Date(date);
      d.setDate(date.getDate() + days);
      return d;
    },
  },
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

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  height: calc(100vh - 152px);
}

@media screen and (min-width: 768px) {
  .overlay {
    height: calc(100vh - 102px);
  }
}

@media screen and (max-width: 767px) {
  .overlay {
    min-height: 768px;
  }
}

.hero {
  background: url(/index/hero-sm.jpg) no-repeat center center;
  background-size: cover;
}
@media screen and (min-width: 576px) {
  .hero {
    background-image: url(/index/hero-md.jpg);
  }
}
@media screen and (min-width: 768px) {
  .hero {
    background-image: url(/index/hero-lg.jpg);
  }
}
</style>
