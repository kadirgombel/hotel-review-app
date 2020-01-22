<template>
  <div class="home">
    <h1 class="title">Hotels</h1>
    <div class="hotels">
      <md-card
        v-for="hotel in hotelsWithAddInfo"
        :key="hotel.id"
        class="hotel-card"
        md-with-hover
      >
        <md-card-media-cover class="md-solid md-text-scrim">
          <md-card-media md-ratio="16:9">
            <img class="image" :src="hotel.imageUrl" alt="Skyscraper" />
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <div class="md-title">{{ hotel.name }}</div>
              <div class="md-subhead">{{ hotel.price }} for 1 night</div>
              <div class="md-subhead">{{ hotel.reviewCount }} reviews</div>
              <div class="md-subhead star-section">
                <span>{{ hotel.averageReviewPoint }}</span
                ><md-icon class="star-icon">star</md-icon>
              </div>
            </md-card-header>

            <!--  <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions> -->
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {};
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
  methods: {},
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
