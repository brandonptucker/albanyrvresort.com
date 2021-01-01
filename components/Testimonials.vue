<template>
  <div>
    <blockquote class="blockquote mb-5">
      <p>
        <transition name="fade">
          <em :key="index">"{{ testimonials[index].text }}"</em>
        </transition>
      </p>
      <transition name="fade">
        <footer
          v-if="testimonials[index].name"
          :key="index"
          class="blockquote-footer"
        >
          {{ testimonials[index].name }}
        </footer>
      </transition>
    </blockquote>
    <ul class="list-inline">
      <li
        v-for="(testimonial, idx) in testimonials"
        :key="idx"
        :class="index === idx ? 'text-primary' : 'text-secondary'"
        class="list-inline-item"
        @click="index = idx"
      >
        <font-awesome-icon icon="circle" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: { type: Array, required: true },
  },
  data() {
    return {
      index: 0,
    };
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-enter {
  opacity: 0;
}
</style>
