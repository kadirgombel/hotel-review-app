<template>
  <div class="home">
    <h1 class="title">{{ $t('home.title') }}</h1>
    <div class="locale-changer">
      <locale-changer></locale-changer>
    </div>

    <div class="hotels">
      <card
        v-for="hotel in hotelsWithAddInfo"
        :key="hotel.id"
        :hotel="hotel"
        @onClick="handleCardClick"
        :selected="selectedHotelId && hotel.hotelId == selectedHotelId"
      ></card>
    </div>
    <transition name="fade" mode="out-in">
      <card-detail
        :key="selectedHotel.hotelId"
        v-if="selectedHotel"
        :hotel="selectedHotel"
      ></card-detail>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '@/components/Card.vue';
import CardDetail from '@/components/CardDetail.vue';
import LocaleChanger from '@/components/LocaleChanger.vue';
export default {
  name: 'Home',
  data() {
    return {
      selectedHotelId: '',
    };
  },
  components: {
    Card,
    CardDetail,
    LocaleChanger,
  },
  computed: {
    ...mapGetters(['hotels', 'reviews']),
    hotelsWithAddInfo() {
      const mappedHotels = this.hotels.map(hotel => {
        const hotelReviews = this.reviews.filter(
          review => review.hotelId === hotel.hotelId,
        );

        let reviewPointSum = 0;
        let reviewCount = 0;

        hotelReviews.map(review => {
          reviewCount = reviewCount + 1;
          reviewPointSum += review.reviewPoint;
        });

        hotel.reviewCount = reviewCount;
        hotel.averageReviewPoint = (
          reviewPointSum / hotelReviews.length
        ).toFixed(2);

        return hotel;
      });
      return mappedHotels;
    },
    selectedHotel() {
      return this.hotels.filter(
        hotel => hotel.hotelId === this.selectedHotelId,
      )[0];
    },
  },
  methods: {
    handleCardClick(id) {
      this.selectedHotelId = id;
    },
  },
};
</script>

<style lang="scss">
.locale-changer {
  display: flex;
  justify-content: flex-end;
}
.home {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  font-size: 28px;
}
.hotels {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
}
.star-section {
  display: flex;
  align-items: center;
}
.star-icon {
  font-size: 5px;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1200px) {
  .md-card-media-cover .md-card-area {
    position: initial;
  }
}
</style>
