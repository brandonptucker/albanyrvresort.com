<template>
  <header class="bg-dark">
    <div class="d-flex flex-column flex-md-row mx-3 pt-2">
      <a 
        class="mr-3 mb-1" 
        href="#"><font-awesome-icon icon="phone" /> (229) 431-2229</a>
      <a 
        class="mr-auto mb-1" 
        href="#"><font-awesome-icon icon="map-marker-alt" /> 1202 Liberty Expy SE Albany, GA 31705</a>
      <ul class="list-inline mb-2">
        <li class="list-inline-item">
          <a 
            class="facebook" 
            href="#"><font-awesome-icon :icon="['fab', 'facebook']" /> Facebook</a>
        </li>
        <li class="list-inline-item">
          <a 
            class="instagram" 
            href="#"><font-awesome-icon :icon="['fab', 'instagram']" /> Instagram</a>
        </li>
        <li class="list-inline-item">
          <a 
            class="twitter" 
            href="#"><font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  font-size: 0.875rem;
  font-weight: lighter;
}

header a {
  color: rgba(255, 255, 255, 0.5);
}

header a:hover {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
}

header a.facebook:hover {
  color: #3b5998;
}

header a.instagram:hover {
  color: #c32aa3;
}

header a.twitter:hover {
  color: #1da1f2;
}

header > div {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
