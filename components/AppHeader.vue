<template>
  <header class="bg-dark">
    <div class="container d-flex flex-column flex-md-row pt-2">
      <a
        class="mr-3 mb-1"
        href="tel:1-229-431-2229"
      ><font-awesome-icon icon="phone" /> (229) 431-2229</a>
      <div class="mr-auto mb-1">
        <font-awesome-icon icon="map-marker-alt" /> 1202 Liberty Expy SE Albany, GA 31705
      </div>
      <ul class="list-inline mb-2">
        <li class="list-inline-item">
          <a
            class="facebook"
            href="https://www.facebook.com/Albany-RV-Resort-Inc-111460132227079/"
            target="_blank"
            rel="noopener"
          ><font-awesome-icon :icon="['fab', 'facebook']" /> Facebook</a>
        </li>
        <li class="list-inline-item">
          <a
            class="instagram"
            href="#"
          ><font-awesome-icon :icon="['fab', 'instagram']" /> Instagram</a>
        </li>
        <li class="list-inline-item">
          <a
            class="twitter"
            href="https://twitter.com/albanyrvresort"
            target="_blank"
            rel="noopener"
          ><font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  font-size: 0.875rem;
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.5);
}

header a {
  color: rgba(255, 255, 255, 0.5);
}

header a:hover {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
}

header > div {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
