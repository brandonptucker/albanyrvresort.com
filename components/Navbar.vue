<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <router-link
        class="navbar-brand mr-auto"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
        to="/"
      >
        <img
          src="~/assets/logo.png"
          alt="Albany RV Resort Logo"
        >
      </router-link>
      <a
        class="btn btn-primary d-sm-block d-md-none mr-2"
        :href="$config.reservationURL"
      >Book Now</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNavAltMarkup"
        class="collapse navbar-collapse"
      >
        <div class="navbar-nav ml-auto mr-2">
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            exact
            to="/"
          >
            Home
          </router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/features"
          >
            Features
          </router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/rates"
          >
            Rates
          </router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/gallery"
          >
            Gallery
          </router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/map-and-rules"
          >
            Map &amp; Rules
          </router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/contact"
          >
            Contact
          </router-link>
        </div>
        <a
          class="btn btn-primary d-none d-md-block"
          :href="$config.reservationURL"
        >Book
          Now</a>
      </div>
    </div>
  </nav>
</template>
