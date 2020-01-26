<template>
  <div class="review-list">
    <paginate name="reviewData" :list="reviewData" class="paginate-list">
      <review-list-item
        v-for="review in paginated('reviewData')"
        :key="review.id"
        :review="review"
      ></review-list-item>
    </paginate>
    <paginate-links
      for="reviewData"
      :limit="5"
      :show-step-links="true"
    ></paginate-links>
  </div>
</template>

<script>
import ReviewListItem from './ReviewListItem';
export default {
  name: 'ReviewList',
  components: {
    ReviewListItem,
  },
  data() {
    return {
      reviewData: this.reviews,
      paginate: ['reviewData'],
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.reviews.length / this.reviewPerPage);
    },
  },
  props: {
    reviews: Array,
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.paginate-links.items {
  user-select: none;
  a {
    cursor: pointer;
  }
  li.active a {
    font-weight: bold;
  }
  li.next:before {
    content: ' | ';
    margin-right: 13px;
    color: #ddd;
  }
  li.disabled a {
    color: #ccc;
    cursor: no-drop;
  }
}

a {
  color: #42b983;
}
</style>
