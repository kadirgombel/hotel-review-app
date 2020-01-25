<template>
  <div class="home">
    <h1 class="title">Hotels</h1>
    <locale-changer></locale-changer>
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
        hotelReviews.map(review => {
          hotel.reviewCount ? hotel.reviewCount++ : (hotel.reviewCount = 1);
          reviewPointSum += review.reviewPoint;
        });

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
  mounted() {
    console.log('home mounted ', this.getHotels);
  },
};
</script>

<style lang="scss">
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
  margin-top: 20px;
}
.hotel-card {
  justify-content: space-between;
  width: 30%;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__image {
    height: 720px;
  }
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
</style>
