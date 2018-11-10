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
