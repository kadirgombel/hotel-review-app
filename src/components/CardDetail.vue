<template>
  <div class="card-detail">
    <h1 class="card-detail__title">{{ hotel.name }}</h1>
    <img class="card-detail__img" :src="hotel.imageUrl" />
    <div class="card-detail__dropdowns">
      <div class="card-detail__night-dropdown">
        <span class="card-detail__dropdown-title">{{ $t('home.night') }}</span>
        <v-select
          :clearable="false"
          v-model="nightCount"
          :options="dropdownOptions"
        ></v-select>
      </div>

      <div class="card-detail__people-dropdown">
        <span class="card-detail__dropdown-title">{{ $t('home.person') }}</span>
        <v-select
          :clearable="false"
          v-model="peopleCount"
          :options="dropdownOptions"
        ></v-select>
      </div>
    </div>
    <div class="card-detail__contact-section">
      <span class="card-detail__price">{{ price }}$</span>
    </div>
    <md-button class="card-detail__cta md-raised md-primary">{{
      $t('home.cta')
    }}</md-button>
    <div class="reviews">
      <h2 class="reviews__title">{{ $t('home.reviewsTitle') }}</h2>
      <review-list :reviews="hotelsReviews"></review-list>
    </div>
  </div>
</template>

<script>
import ReviewList from '@/components/ReviewList';
import { mapGetters } from 'vuex';
export default {
  name: 'CardDetail',
  data() {
    return {
      nightCount: 1,
      peopleCount: 1,
      dropdownOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  components: {
    ReviewList,
  },
  props: {
    hotel: { type: Object, required: true },
  },
  computed: {
    ...mapGetters(['reviews']),
    hotelsReviews() {
      console.log(this.reviews);
      return this.reviews.filter(
        review => review.hotelId === this.hotel.hotelId,
      );
    },
    price() {
      return (
        this.hotel.price.match(/\d+/)[0] * this.nightCount * this.peopleCount
      );
    },
  },
};
</script>

<style scoped lang="scss">
.card-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  transition: all 0.15s;
  &__title {
    text-align: center;
    font-size: 30px;
  }
  &__img {
    display: block;
    text-align: center;
    width: auto;
    height: 300px;
  }
  &__dropdowns {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: space-between;
  }
  &__night-dropdown {
    display: flex;
    margin-right: 10px;
    justify-content: space-evenly;
    align-items: center;
  }
  &__people-dropdown {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  &__dropdown-title {
    font-size: 16px;
    margin-right: 5px;
  }
  &__price {
    margin-bottom: 0;
    font-size: 35px;
  }
  &__contact-section {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  &__cta {
    margin-top: 20px;
  }
}
</style>
