export default {
  state: {
    hotels: [
      {
        hotelId: 1,
        name: 'Stratosphere Las Vegas',
        price: '200$',
        email: 'stratospherehotel-nevada@booking.com',
        phone: '+1 702-380-7777',
        imageUrl:
          'https://pix6.agoda.net/hotelImages/271/271631/271631_13012422360010158331.jpg?s=1024x768',
      },
      {
        hotelId: 2,
        name: 'Velario Hotel',
        price: '180$',
        email: 'velariohotel-nevada@booking.com',
        phone: '+1 702-380-8888',
        imageUrl:
          'https://i.travelapi.com/hotels/10000000/9630000/9625900/9625820/b458d411_z.jpg',
      },
      {
        hotelId: 3,
        name: 'Disneyland Hotel',
        price: '320$',
        email: 'disneylandhotel-nevada@booking.com',
        phone: '+1 702-380-9999',
        imageUrl: 'https://i.ytimg.com/vi/WFvmE1ixEUI/maxresdefault.jpg',
      },
    ],
  },
  mutations: {
    increment(state) {
      // `state` is the local module state
      state.count++;
    },
  },

  getters: {
    hotels: state => state.hotels,
  },
};
