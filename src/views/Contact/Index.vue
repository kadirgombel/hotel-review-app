<template>
  <div class="contact-card">
    <form class="md-layout md-alignment-center" @submit.prevent="sendInfo">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Contact</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="hotelName">Hotel Name</label>
                <md-input
                  name="hotelName"
                  id="hotelName"
                  v-model="hotel.name"
                  :disabled="true"
                />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="email">Email</label>
                <md-input
                  name="email"
                  id="email"
                  v-model="hotel.email"
                  :disabled="true"
                />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="phone">Phone</label>
                <md-input
                  name="phone"
                  id="phone"
                  v-model="hotel.phone"
                  :disabled="true"
                />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="nightCount">Night</label>
                <md-input
                  name="nightCount"
                  id="nightCount"
                  v-model="nightCount"
                  :disabled="true"
                />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="peopleCount">Person</label>
                <md-input
                  name="peopleCount"
                  id="peopleCount"
                  v-model="peopleCount"
                  :disabled="true"
                />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="totalPrice">Total Price</label>
                <span class="md-prefix">$</span>
                <md-input
                  name="totalPrice"
                  id="totalPrice"
                  v-model="totalPrice"
                  :disabled="true"
                />
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary"
            >Contact with hotel</md-button
          >
        </md-card-actions>
      </md-card>

      <!--  <md-snackbar :md-active.sync="userSaved"
        >The user {{ lastUser }} was saved with success!</md-snackbar
      > -->
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Contact',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['hotels']),
    hotel() {
      return this.hotels.filter(
        hotel => hotel.hotelId == this.$route.params.id,
      )[0];
    },
    peopleCount() {
      return this.$route.params.peopleCount
        ? this.$route.params.peopleCount
        : 1;
    },
    nightCount() {
      return this.$route.params.nightCount ? this.$route.params.nightCount : 1;
    },
    totalPrice() {
      return (
        this.nightCount * this.peopleCount * this.hotel.price.match(/\d+/)[0]
      );
    },
  },
  methods: {
    sendInfo() {
      // Send revervation req to server here
      this.$swal(
        'Enjoy Your Holiday!',
        'Booking request sent to hotel.',
        'success',
      );
    },
  },
};
</script>

<style>
.contact-card {
  padding: 20px;
}
</style>
