<template>
  <app-layout>
    <!-- make the router view act as "<slot>" inside the app layout -->
    <router-view />
    <QuickView />
    <v-snackbar
      v-model="snakbar"
      location="left bottom"
      max-width="300"
      timeout="3000"
    >
      {{ message }} has been added to your cart successfully !
      <template v-slot:actions>
        <v-icon @click="snakbar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>

<script>
import AppLayout from "./components/global/AppLayout.vue";
import QuickView from "./components/global/QuickView.vue";

export default {
  inject: ["emitter"],
  data() {
    return {
      snakbar: false,
      message: "",
    };
  },
  components: {
    AppLayout,
    QuickView,
  },
  mounted() {
    this.emitter.on("showSnackbarMessage", (data) => {
      this.message = data;
      this.snakbar = true;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-rating__wrapper {
  margin-right: 5px;
}

// to hide arrows of increment and decrement on input of type number
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
