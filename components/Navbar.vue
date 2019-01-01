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
          alt="Albany RV Resort Logo">
      </router-link>
      <router-link
        class="btn btn-primary d-sm-block d-md-none mr-2"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
        to="/reservations"
      >
        Book Now
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>
      <div
        id="navbarNavAltMarkup"
        class="collapse navbar-collapse">
        <div class="navbar-nav ml-auto mr-2">
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            exact
            to="/"
          >Home</router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/features"
          >Features</router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/rates"
          >Rates</router-link>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/gallery"
          >Gallery</router-link>
          <a
            class="nav-item nav-link"
            href="/brochure.pdf"
            target="_blank"
            rel="noopener"
          >Map &amp; Rules</a>
          <router-link
            active-class="active"
            class="nav-item nav-link"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/contact"
          >Contact</router-link>
        </div>
        <router-link
          class="btn btn-primary d-none d-md-block"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/reservations"
        >Book Now</router-link>
      </div>
    </div>
  </nav>
</template>
