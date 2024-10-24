<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum
        aliquid maxime minus possimus iusto delectus eos accusantium esse
        corporis consequuntur, doloribus voluptatibus ad alias doloremque cum.
        Est, optio quae?
      </p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["emitter"], //inject by key of provide emitter
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    //listen on global event called "toggleCart" and apply anonymous function
    this.emitter.on("toggleCart", () => {
      this.drawer = true;
      console.log("toggleCart fire (on)");
    });
  },
};
</script>
