<template>
  <div id="nav-bar">
    <img alt="Left image" title="yamsafer logo"
         src="https://cdn.yamsafer.com/TheShip/_next/static/images/YamsaferLogoEn-0c424fd844abc43df9b2066c8f11dbfb.png"
         width="100" height="50"/>
    <div id="links">
      <router-link exact to="/">Destinations</router-link>
      <router-link exact to="/wishlist">Wishlist</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #nav-bar {
    background-color: slategrey;
    text-align: center;
    width: 100%;
    height: 10vh;
    font-family: Courier New, serif;
    font-weight: bold;
    font-size: 90%;
  }

  a {
    height: 500vh;
    border-radius: 50px;
    padding: 2vh 2vw;
    text-decoration: none;
    color: white;
  }

  .router-link-active {
    background-color: white;
    color: slategrey;
  }

  #links {
    margin: 3vh auto;
    display: inline-block;
  }

  img {
    margin-top: 1vh;
    float: left;
    display: inline-block;
  }
</style>
