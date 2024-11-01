<template>
  <div class="footer">
    <v-footer :app="true" color="grey-lighten-4" absolute class="pt-14">
      <v-container class="px-0" fluid>
        <v-row>
          <v-col cols="3" v-for="(footer, i) in footers" :key="i">
            <v-card elevation="0" color="transparent">
              <v-card-title
                class="px-0"
                style="font-size: 14px; font-weight: 900"
              >
                {{ footer.title }}
              </v-card-title>
              <v-card-text
                class="pt-0 pb-3 px-0"
                style="color: rgb(0, 0, 0, 0.7)"
                v-for="category in categories"
                :key="category.title"
              >
                <router-link
                  :to="{
                    name: 'products-category',
                    params: { category: category.route, title: category.title },
                  }"
                  style="color: rgb(127, 127, 127); text-decoration: none"
                >
                  {{ category.title }}
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent" class="pt-2">
              <img
                src="@/assets/images/footer-logo.webp"
                @click="$router.replace({ name: 'home' })"
                style="cursor: pointer"
                alt=""
              />
              <v-card-text
                v-for="(contact, i) in contacts"
                :key="i"
                class="pt-0 pb-3 px-0 d-flex"
                style="color: rgba(0, 0, 0, 0.7); gap: 16px"
              >
                <span v-html="contact.icon"></span>
                <span class="pt-1"> {{ contact.label }} </span>
              </v-card-text>
            </v-card>
            <div class="socials d-flex mt-5" style="gap: 20px">
              <div v-for="(social, index) in socials" :key="index">
                <span
                  class="social d-flex align-center justify-center"
                  style="
                    width: 30px;
                    height: 30px;
                    background-color: #686868;
                    border-radius: 50%;
                  "
                  v-html="social"
                ></span>
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="img-parent text-center mt-11 mb-8">
              <img
                src="https://new-ella-demo.myshopify.com/cdn/shop/files/trust_551fa8e0-5f24-4fbc-bf22-74c01b859a01.png?v=1639984732"
                alt=""
              />
            </div>
          </v-col>
        </v-row>

        <v-row class="pt-7 bg-white">
          <v-col cols="6">
            <p style="color: rgb(127, 127, 127); font-size: 14px">
              &copy; {{ new Date().getFullYear() }} AllaMart Demo. All Rights
              Reserved. Powered By Hossam
            </p>
          </v-col>
          <v-col cols="6" class="text-end">
            <div class="master-cards d-flex justify-end" style="gap: 10px">
              <span
                v-for="(payment, index) in payments"
                :key="index"
                v-html="payment"
              ></span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { ProductsModule } from "@/store/products";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(ProductsModule, ["categories"]),
  },
  data() {
    return {
      footers: [
        {
          title: "SHOP",
        },
        {
          title: "FURTHER INFORMATION",
        },

        {
          title: "CUSTOMER SERVICE",
        },
      ],
      contacts: [
        {
          label: "685 Market Street, San Francisco, CA 94105, US",
          icon: this.$svg.location,
        },
        {
          label: "Call us at (415) 555-5555",
          icon: this.$svg.phone,
        },
        {
          label: "example@domain.com",
          icon: this.$svg.email,
        },
      ],
      socials: [
        this.$svg.facebook,
        this.$svg.instagram,
        this.$svg.pinterest,
        this.$svg.snap,
        this.$svg.twitter,
      ],
      payments: [
        this.$svg.visa,
        this.$svg.master_card,
        this.$svg.pay,
        this.$svg.discover,
        this.$svg.paypal,
        this.$svg.shop_pay,
      ],
    };
  },
};
</script>
