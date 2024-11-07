<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center py-7">
        <div>
          <v-icon
            style="
              font-size: 76px;
              border: 1px solid green;
              border-radius: 50%;
              color: green;
              width: 100px;
              height: 100px;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          style="font-size: 30px; font-weight: bold; color: rgb(86, 86, 86)"
        >
          Order Placed Successfully
        </v-card-title>
        <v-card-text style="font-size: 17px; color: rgb(86, 86, 86)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis
          qui distinctio laudantium ab explicabo, reiciendis corporis, natus
          aliquam ullam quia doloremque facere! Cupiditate, voluptates iste!
          Possimus facere architecto nihil.
        </v-card-text>

        <v-card-actions class="mt-5 justify-center">
          <v-btn variant="elevated" color="primary" @click="resetData">
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { CartsModule } from "@/store/carts";
import { mapActions } from "pinia";

export default {
  mounted() {
    this.dialog = this.showDialog;
  },
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    showDialog: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("closeDialog");
        }, 200);
      }
    },
  },

  methods: {
    ...mapActions(CartsModule, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.replace({ name: "home" });
    },
  },
};
</script>
