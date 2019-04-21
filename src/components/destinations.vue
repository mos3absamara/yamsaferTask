<template>
  <div>
    <h1>Destinations</h1>
    <div id="hotels">
      <b-card
        v-on:click="addToWishlist(destination)" :key="destination.name"
        v-for="destination in getDestinations"
        v-bind:title="destination.name"
        v-bind:img-src="destination.imageUrl"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2 my-card">
        <img v-show="destination.wishListed" src="http://clipart-library.com/image_gallery/19689.png"
             width="20"
             height="20">
        <b-card-text>
          {{destination.description}}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      getDestinations() {
        return this.$store.getters.getAllDestinations;
      }
    },
    methods: {
      addToWishlist(destination) {
        this.$store.dispatch('addToWishlist', destination.name);
      }
    }
  }
</script>

<style scoped>
  #hotels {
    width: 70%;
    margin: 5vh auto;
    display: flex;
    flex-wrap: wrap;
    font-family: Courier New, serif;
    font-weight: bold;
  }

  h1 {
    margin: 5vh auto;
    width: fit-content;
  }

  .card-text {
    height: 10vh;
    min-height: 30px;
    overflow-y: auto;
  }

  .card-img-top {
    height: 300px;
  }

  .my-card {
    max-width: 500px;
    flex-basis: 500px;
    flex-grow: 1;
    margin: 0 1vw;
    -webkit-box-shadow: 9px 10px 10px -8px rgba(0, 0, 0, 1);
    -moz-box-shadow: 9px 10px 10px -8px rgba(0, 0, 0, 1);
    box-shadow: 9px 10px 10px -8px rgba(0, 0, 0, 1);
    overflow-y: auto;
  }
</style>
