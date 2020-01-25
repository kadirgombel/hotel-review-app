<template>
  <div class="review-item">
    <md-avatar class="md-avatar-icon review-item__point">
      <md-ripple>{{ review.reviewPoint }}</md-ripple>
    </md-avatar>
    <span class="review-item__body">{{ review.body }}</span>
  </div>
</template>

<script>
export default {
  name: 'ReviewListItem',
  props: {
    review: Object,
  },
};
</script>

<style lang="scss">
.review-item {
  display: flex;
  align-items: center;
  padding: 15px;
  &__point {
    width: 5%;
    margin-right: 10px;
  }
  &__body {
    flex: 1;
  }
}
</style>
