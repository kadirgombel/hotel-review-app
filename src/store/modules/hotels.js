export default {
  state: {
    hotels: [
      {
        hotelId: 1,
        name: 'Stratosphere Las Vegas',
        price: '200$',
        email: 'stratospherehotel-nevada@booking.com',
        phone: '+1 702-380-7777',
        imageUrls: [
          'https://pix6.agoda.net/hotelImages/271/271631/271631_13012422360010158331.jpg?s=1024x768',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Stratosphere_Las_Vegas_3.jpg/1200px-Stratosphere_Las_Vegas_3.jpg',
          'https://passiontravel.files.wordpress.com/2012/01/stratosphere-las-vegas.jpg?w=1200',
        ],
      },
      {
        hotelId: 2,
        name: 'Velario Hotel',
        price: '180$',
        email: 'velariohotel-nevada@booking.com',
        phone: '+1 702-380-8888',
        imageUrls: [
          'https://i.travelapi.com/hotels/10000000/9630000/9625900/9625820/b458d411_z.jpg',
          'https://images.trvl-media.com/hotels/10000000/9630000/9625900/9625820/55fdff75_z.jpg',
          'https://q-ec.bstatic.com/images/hotel/840x460/867/86745519.jpg',
        ],
      },
      {
        hotelId: 3,
        name: 'Disneyland Hotel',
        price: '320$',
        email: 'disneylandhotel-nevada@booking.com',
        phone: '+1 702-380-9999',
        imageUrls: [
          'https://i.ytimg.com/vi/WFvmE1ixEUI/maxresdefault.jpg',
          'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1488917406/disneyland-hotel-paris-france-DISNEYPARIS0307.jpg?itok=tDf4KhNy',
          'https://www.disneyholidays.co.uk/disneyland-paris/images/social/hotels/disneyland-hotel.jpg',
        ],
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
