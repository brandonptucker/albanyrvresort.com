<template>
  <main
    role="main">
    <div style="background-image: url(https://source.unsplash.com/random)">
      <div class="overlay">
        <div class="container d-flex h-100">
          <div class="m-auto">
            <p class="display-4 text-white text-center mb-4">Reserve Your Site Today!</p>
            <form>
              <div class="form-row justify-content-center">
                <div class="form-group col-md-3">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Check-In">
                </div>
                <div class="form-group col-md-3">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Check-Out">
                </div>
                <div class="form-group col-md-2">
                  <select class="form-control form-control-lg">
                    <option>Adults</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <a
                    class="btn btn-lg btn-primary"
                    style="margin-right: 5px; margin-left: 5px"
                    href="#">Book Now</a>
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
          <p>Extra large RV sites designed for accessibility and big rigs</p>
        </div>
        <div class="col-md-3 mb-5">
          <font-awesome-icon
            class="text-primary mb-3"
            icon="smile"
            size="3x"/>
          <h3>Friendly Staff</h3>
          <p>We strive to create a fun camping experience for all</p>
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
              <li>82 full hookup campsites</li>
              <li>20 x 40 ft. level cement patios</li>
              <li>Extra large 120 ft. pull thrus</li>
              <li>Spacious, private sites</li>
              <li>Easy entry and exit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
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

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  height: calc(100vh - 152px);
  min-height: 515px;
}

@media screen and (min-width: 768px) {
  .overlay {
    height: calc(100vh - 102px);
  }
}
</style>
