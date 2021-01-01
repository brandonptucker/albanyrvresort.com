<template>
  <div
    id="map"
    style="height: 400px; width: 100%"
  />
</template>

<script>
export default {
  mounted() {
    const src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyACjoJo-MBep3Rbcs757lP9Omo3pbfYfGM&callback=initMap';
    if (!document.querySelector(`script[src='${src}']`)) {
      window.initMap = this.initMap;
      this.loadJS(src);
    } else {
      this.initMap();
    }
  },
  methods: {
    loadJS(src) {
      const ref = document.getElementsByTagName('script')[0];
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      ref.parentNode.insertBefore(script, ref);
    },
    initMap() {
      const center = { lat: 31.520605, lng: -84.114041 };
      const map = new google.maps.Map(this.$el, { // eslint-disable-line
        zoom: 7,
        center,
      });
      const marker = new google.maps.Marker({ // eslint-disable-line
        position: center,
        map,
      });
    },
  },
};
</script>
