<template>
  <div>
    <blockquote class="blockquote mb-5">
      <p><em>"{{ testimonials[index].text }}"</em></p>
      <footer class="blockquote-footer">{{ testimonials[index].name }}</footer>
    </blockquote>
    <ul class="list-inline">
      <li
        v-for="(testimonial, idx) in testimonials"
        :class="index === idx ? 'text-primary' : 'text-secondary'"
        :key="idx"
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
