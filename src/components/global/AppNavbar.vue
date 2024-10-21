<template>
  <div class="nav-bar">
    <v-app-bar>
      <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["emitter"], //inject by key of provide emitter
  methods: {
    openCart() {
      this.emitter.emit("toggleCart"); //make it global emit event can be called across the application
    },
  },
};
</script>
