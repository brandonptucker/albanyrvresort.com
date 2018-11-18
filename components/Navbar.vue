<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a
        class="navbar-brand mr-auto"
        href="#"><img src="~/assets/logo.png"></a>
      <a
        class="btn btn-primary d-sm-block d-md-none mr-2"
        href="#">Book Now</a>
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
          <a
            class="nav-item nav-link active"
            href="#">Home <span class="sr-only">(current)</span></a>
          <a
            class="nav-item nav-link"
            href="#">Features</a>
          <a
            class="nav-item nav-link"
            href="#">Rates</a>
          <a
            class="nav-item nav-link"
            href="#">Gallery</a>
          <a
            class="nav-item nav-link"
            href="/brochure.pdf"
            target="_blank">Map &amp; Rules</a>
          <a
            class="nav-item nav-link"
            href="#">Contact</a>
        </div>
        <a
          class="btn btn-primary d-none d-md-block"
          href="#">Book Now</a>
      </div>
    </div>
  </nav>
</template>
