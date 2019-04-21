<template>
  <div>
    <h3 v-show="!show()"> Wish List Is Empty
      <font-awesome-icon icon="sad-tear"/>
    </h3>
    <table v-show="show()" class="table b-table table-responsive table-hover">
      <thead role="rowgroup" class>
      <tr role="row">
        <th role="columnheader" scope="col" aria-colindex="1" class>Destination Name</th>
        <th role="columnheader" scope="col" aria-colindex="2" class>Destination Details</th>
        <th role="columnheader" scope="col" aria-colindex="3" class>Checked</th>
        <th role="columnheader" scope="col" aria-colindex="4" class>Remove</th>
      </tr>
      </thead>
      <tbody role="rowgroup" class>

      <tr role="row" v-for="destination in getWishList" class>
        <td role="cell" aria-colindex="1" class>{{destination.name}}</td>
        <td role="cell" aria-colindex="2" class>{{destination.description}}</td>
        <td role="cell" aria-colindex="3" class><input type="checkbox" v-model="destination.checked"/></td>
        <td role="cell" aria-colindex="4" class>
          <b-button v-on:click="removeFromWishlist(destination)">Remove</b-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      getWishList() {
        return this.$store.getters.getWishlist;
      }
    },
    methods: {
      removeFromWishlist(destination) {
        this.$store.dispatch('removeFromWishlist', destination.name).then(function () {
          console.log('Removed');
        });
      },
      show() {
        let wishlist = this.$store.getters.getWishlist;
        if (wishlist === undefined || wishlist.length === 0)
          return false;
        return true;
      }
    }
  }
</script>

<style scoped>
  div {
    font-family: Courier New, serif;
    font-weight: bold;
    color: slategrey;
  }

  table.table {
    margin: 5vh auto;
    width: 50%;
    font-size: 1em;
    overflow-x: auto;
    overflow-y: auto;
    min-width: 300px;
  }

  td, th {
    width: 40%;
    text-align: center;
    overflow-y: auto;
    max-height: 200px;
  }

  h3 {
    position: absolute;
    top: 50%;
    width: 100%;
    margin: 0;
    -webkit-transform: translate(-50% -50%);
    -moz-transform: translate(-50% -50%);
    -ms-transform: translate(-50% -50%);
    -o-transform: translate(-50% -50%);
    transform: translate(-50% -50%);
    text-align: center;
  }
</style>
