import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    destinations: [
      {
        name: 'Ibis Amman',
        imageUrl: 'https://images.yamsafer.me/aliens/6509/large/hotels/3000000/2740000/2733100/2733069/2733069_238.jpg',
        description: 'bis Amman is a great option if you want to stay at the center of Amman where you will be surrounded by the city’s business and diplomatic district and opposite of Amman Mall. It is close to Jordan University, the international stadium and the Queen Alia Airport is just a 30 minute drive away. Although the hotel is not luxurious, you have to give it a fair chance since it is a perfect choice for affordable and clean accommodation. If you want to explore the country, the hotel staff is very helpful in planning visits and excursions to Amman’s attractions, including a visit to the archaeological remains of the Citadel.',
        wishListed: false,
        checked: false
      },
      {
        name: 'Fairmont Amman',
        imageUrl: 'https://images.yamsafer.me/images/large/341860/120478228.jpg',
        description: 'bis Amman is a great option if you want to stay at the center of Amman where you will be surrounded by the city’s business and diplomatic district and opposite of Amman Mall. It is close to Jordan University, the international stadium and the Queen Alia Airport is just a 30 minute drive away. Although the hotel is not luxurious, you have to give it a fair chance since it is a perfect choice for affordable and clean accommodation. If you want to explore the country, the hotel staff is very helpful in planning visits and excursions to Amman’s attractions, including a visit to the archaeological remains of the Citadel.',
        wishListed: false,
        checked: false
      },
      {
        name: 'Intercontinental Amman',
        imageUrl: 'https://images.yamsafer.me/images/large/4186/521131_375_z.jpg',
        description: 'bis Amman is a great option if you want to stay at the center of Amman where you will be surrounded by the city’s business and diplomatic district and opposite of Amman Mall. It is close to Jordan University, the international stadium and the Queen Alia Airport is just a 30 minute drive away. Although the hotel is not luxurious, you have to give it a fair chance since it is a perfect choice for affordable and clean accommodation. If you want to explore the country, the hotel staff is very helpful in planning visits and excursions to Amman’s attractions, including a visit to the archaeological remains of the Citadel.',
        wishListed: false,
        checked: false
      },
      {
        name: 'Holiday Inn Amman',
        imageUrl: 'https://images.yamsafer.me/images/thumb/341424/81789446.jpg',
        description: 'bis Amman is a great option if you want to stay at the center of Amman where you will be surrounded by the city’s business and diplomatic district and opposite of Amman Mall. It is close to Jordan University, the international stadium and the Queen Alia Airport is just a 30 minute drive away. Although the hotel is not luxurious, you have to give it a fair chance since it is a perfect choice for affordable and clean accommodation. If you want to explore the country, the hotel staff is very helpful in planning visits and excursions to Amman’s attractions, including a visit to the archaeological remains of the Citadel.',
        wishListed: false,
        checked: false
      },
    ]
  },
  getters: {
    getAllDestinations: state => {
      return state.destinations;
    },
    getWishlist: state => {
      return state.destinations.filter((destination) => {
        return destination.wishListed === true;
      });
    }
  },
  mutations: {
    addToWishlist: (state, destinationName) => {
      let destination = state.destinations.find(function (destination) {
        return destination.name === destinationName;
      });
      destination.wishListed = true;
    },
    removeFromWishlist: (state, destinationName) => {
      let destination = state.destinations.find(function (destination) {
        return destination.name === destinationName;
      });
      destination.wishListed = false;
      destination.checked = false;
    }
  },
  actions: {
    addToWishlist: (context, destinationName) => {
      context.commit('addToWishlist', destinationName);
    },
    removeFromWishlist: (context, destinationName) => {
      context.commit('removeFromWishlist', destinationName);
    }
  }
})
