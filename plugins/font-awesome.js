import Vue from 'vue'; // eslint-disable-line
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faMapMarkerAlt,
  faBus,
  faSmile,
  faFish,
  faWifi,
  faCircle,
  faEnvelope,
  faCalendarAlt,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(
  faPhone,
  faMapMarkerAlt,
  faFacebook,
  faInstagram,
  faTwitter,
  faBus,
  faSmile,
  faFish,
  faWifi,
  faCircle,
  faEnvelope,
  faCalendarAlt,
  faSpinner
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
