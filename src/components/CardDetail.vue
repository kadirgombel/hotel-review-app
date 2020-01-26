<template>
  <div class="card-detail">
    <h1 class="card-detail__title">{{ hotel.name }}</h1>
    <slider width="100%" height="400px" animation="fade">
      <slider-item
        class="slider-item"
        v-for="(url, index) in hotel.imageUrls"
        :key="index"
      >
        <img class="card-detail__img" :src="url" />
      </slider-item>
    </slider>
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
    <router-link
      :to="{
        name: 'contact.index',
        params: {
          id: hotel.hotelId,
          nightCount: nightCount,
          peopleCount: peopleCount,
          price: price,
        },
      }"
    >
      <md-button class="card-detail__cta md-raised md-primary">
        {{ $t('home.cta') }}
      </md-button>
    </router-link>
    <div class="md-layout md-alignment-center">
      <div
        class="md-layout-item md-large-size-50 md-medium-size-66 md-small-size-100"
      >
        <div class="">
          <h2 class="reviews__title">
            {{ $t('home.reviewsTitle') }}
            <a @click="handleSortReviews">
              <md-icon v-if="sortReviews === 'asc'" class="md-size-2x">
                keyboard_arrow_up
              </md-icon>
              <md-icon v-if="sortReviews === 'desc'" class="md-size-2x">
                keyboard_arrow_down
              </md-icon>
            </a>
          </h2>

          <review-list :reviews="hotelsReviews"></review-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

import ReviewList from '@/components/ReviewList';
import { mapGetters } from 'vuex';
export default {
  name: 'CardDetail',
  data() {
    return {
      nightCount: 1,
      peopleCount: 1,
      dropdownOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      sortReviews: 'desc',
    };
  },
  components: {
    ReviewList,
    Slider,
    SliderItem,
  },
  props: {
    hotel: { type: Object, required: true },
  },
  computed: {
    ...mapGetters(['reviews']),
    hotelsReviews: {
      set(value) {
        return value;
      },
      get() {
        return this.reviews
          .filter(review => review.hotelId === this.hotel.hotelId)
          .sort(
            (review1, review2) => review2.reviewPoint - review1.reviewPoint,
          );
      },
    },
    price() {
      return (
        this.hotel.price.match(/\d+/)[0] * this.nightCount * this.peopleCount
      );
    },
  },
  methods: {
    handleSortReviews() {
      if (this.sortReviews === 'desc') {
        this.sortReviews = 'asc';
        this.hotelsReviews = this.hotelsReviews.sort(
          (review1, review2) => review1.reviewPoint - review2.reviewPoint,
        );
      } else if (this.sortReviews === 'asc') {
        this.sortReviews = 'desc';
        this.hotelsReviews = this.hotelsReviews.sort(
          (review1, review2) => review2.reviewPoint - review1.reviewPoint,
        );
      }
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
    height: 100%;
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
.reviews {
  width: 50%;
  margin-top: 20px;
}
.slider-item {
  display: flex;
  justify-content: center;
  background-color: #e1e1e1;
}
</style>
