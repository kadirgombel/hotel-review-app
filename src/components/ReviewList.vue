<template>
  <div>
    <div v-for="review in reviews" :key="review.id">
      <review-list-item :review="review"></review-list-item>
    </div>
  </div>
</template>

<script>
import ReviewListItem from './ReviewListItem';
export default {
  name: 'ReviewList',
  components: {
    ReviewListItem,
  },
  props: {
    reviews: Array,
  },
};
</script>

<style></style>
