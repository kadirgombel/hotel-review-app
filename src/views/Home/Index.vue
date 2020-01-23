<template>
  <div class="home">
    <h1 class="title">Hotels</h1>
    <div class="hotels">
      <card
        v-for="hotel in hotelsWithAddInfo"
        :key="hotel.id"
        :hotel="hotel"
        @onClick="handleCardClick"
        :selected="selectedHotelId && hotel.hotelId == selectedHotelId"
      ></card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '@/components/Card.vue';
export default {
  name: 'Home',
  data() {
    return {
      selectedHotelId: '',
    };
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters(['getHotels', 'getReviews']),
    hotelsWithAddInfo() {
      const hotels = this.getHotels;
      const reviews = this.getReviews;
      console.log(hotels);
      const mappedHotels = hotels.map(hotel => {
        const hotelReviews = reviews.filter(
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
</style>
