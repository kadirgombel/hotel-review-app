<template>
  <md-card :class="className" class="hotel-card" md-with-hover>
    <div @click="handleCardSelect">
      <md-card-media-cover class="md-solid md-text-scrim">
        <md-card-media md-ratio="16:9">
          <img class="image" :src="hotel.imageUrls[0]" alt="Skyscraper" />
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <div class="md-title">{{ hotel.name }}</div>
            <div class="md-subhead">
              {{ hotel.price }} / {{ $t('home.night') }}
            </div>
            <div class="md-subhead">
              {{ hotel.reviewCount }} {{ $t('home.reviews') }}
            </div>
            <div class="md-subhead star-section">
              <span>{{ hotel.averageReviewPoint }}</span>
              <md-icon class="star-icon">star</md-icon>
            </div>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </div>
  </md-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    hotel: Object,
    onClick: Function,
    selected: Boolean,
  },
  computed: {
    className() {
      return this.selected ? 'active' : 'passive';
    },
  },
  methods: {
    handleCardSelect: function() {
      this.$emit('onClick', this.hotel.hotelId);
    },
  },
};
</script>

<style scoped lang="scss">
.hotel-card {
  transition: all 0.15s ease-in;
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
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1.05) translateY(5px);
  }
}
.active {
  opacity: 1;
}

.passive {
  opacity: 0.5;
}
.star-section {
  display: flex;
  align-items: center;
}
.star-icon {
  /* backface-visibility: hidden; */
  font-size: 17px !important;
  margin: 0;
  margin-left: 2px;
  color: white !important;
}
</style>
