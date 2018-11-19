<template>
  <footer
    class="bg-light pt-5"
    style="border-top: 1px solid rgba(0, 0, 0, .1); border-bottom: 1px solid rgba(0, 0, 0, .1)">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-3">
          <router-link
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/">
            <img
              src="~/assets/logo.png"
              class="mb-2">
          </router-link>
          <p class="mb-5">Albany RV Resort<br>© Copyright 2018<br>All Rights Reserved.</p>
        </div>
        <div class="col-md-3">
          <h3 style="margin-top: 5px">Contact</h3>
          <p class="mb-5">1202 Liberty Expy SE<br>Albany, GA 31705<br>(229) 431-2229</p>
        </div>
        <div class="col-md-3">
          <h3 style="margin-top: 5px">Hours</h3>
          <p class="mb-5">Monday - Saturday:<br>7:30 am to noon<br>2:00 pm to 5:00 pm</p>
        </div>
        <div class="col-md-3">
          <h3 style="margin-top: 5px">Social</h3>
          <ul class="list-unstyled">
            <li>
              <a
                class="facebook"
                href="#"><font-awesome-icon :icon="['fab', 'facebook']" /> Facebook</a>
            </li>
            <li>
              <a
                class="instagram"
                href="#"><font-awesome-icon :icon="['fab', 'instagram']" /> Instagram</a>
            </li>
            <li>
              <a
                class="twitter"
                href="#"><font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer a:hover {
  text-decoration: none;
}
</style>
