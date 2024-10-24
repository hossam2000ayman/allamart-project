<template>
  <div class="nav-bar">
    <v-app-bar color="#161880" class="pt-3" height="fit-content">
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <img src="@/assets/images/logo.png" />
          </v-col>
          <v-col cols="5">
            <div class="position-relative" style="width: 90%">
              <input
                type="search"
                placeholder="Search the store"
                name="navSearch"
                id="navSearch"
                style="width: 100%; border-radius: 30px; outline: none"
                class="py-3 px-5 bg-white"
              />
              <span v-html="$svg.search"></span>
            </div>
          </v-col>
          <v-col cols="4" class="pa-5">
            <div
              class="parent text-white d-flex justify-lg-space-between align-center"
            >
              <div class="avaliable">
                <span>Avaliable 24/7 at </span>
                <br />
                <strong>(090) 123-4567</strong>
              </div>
              <div
                class="options"
                v-for="(option, index) in options"
                :key="index"
              >
                <div
                  class="d-flex flex-column align-center"
                  style="cursor: pointer"
                  @click="option.action"
                >
                  <v-badge
                    location="right top"
                    :content="option.content"
                    color="blue"
                    offset-x="-15"
                  ></v-badge>
                  <span
                    style="width: 28px; fill: orange"
                    v-html="option.svg"
                  ></span>
                  <span class="text-orange-lighten-3 text-body-1">
                    {{ option.name }}
                  </span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="5">
            <ul
              class="links d-flex text-white justify-space-between"
              style="list-style: none"
            >
              <div v-for="(link, index) in links" :key="index">
                <li>{{ link }}</li>
              </div>
            </ul>
          </v-col>
          <v-col cols="2"></v-col>

          <v-col cols="5" class="d-flex justify-end" style="gap: 35px">
            <div class="help d-flex align-center text-white" style="gap: 5px">
              <v-icon color="#0A6CDC" size="35">mdi-face-agent</v-icon>
              <span>Help</span>
            </div>

            <div
              class="lang d-flex align-center text-white"
              style="gap: 10px; cursor: pointer"
              id="language-btn"
            >
              <span v-html="selectedLang[0].icon"></span>
              <span
                >{{ selectedLang[0].name }} /
                {{ selectedLang[0].currency }}</span
              >
              <v-icon>mdi-chevron-down</v-icon>
              <v-menu activator="#language-btn">
                <v-list v-model:selected="selectedLang">
                  <v-list-item
                    v-for="(lang, index) in langs"
                    :key="index"
                    :value="lang"
                  >
                    <v-list-item-title
                      class="d-flex align-center"
                      style="gap: 10px"
                    >
                      <span v-html="lang.icon"></span>

                      {{ lang.name }} / {{ lang.currency }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "Wish Lists",
          svg: this.$svg.heart,
          action: this.showWishLists,
          content: "1",
        },
        {
          name: "Sign In",
          svg: this.$svg.account,
          action: this.signIn,
          content: "3",
        },
        {
          name: "Cart",
          svg: this.$svg.cart,
          action: this.openCart,
          content: "2",
        },
      ],
      links: [
        "Theme Demo",
        "Shop",
        "Product",
        "New In",
        "Must Have",
        "Collections",
      ],
      langs: [
        {
          icon: this.$svg.en_lang,
          name: "EN",
          currency: "USD",
        },
        {
          icon: this.$svg.de_lang,
          name: "DE",
          currency: "EUR",
        },
      ],
      selectedLang: [
        {
          icon: this.$svg.en_lang,
          name: "EN",
          currency: "USD",
        },
      ],
    };
  },
  inject: ["emitter"], //inject by key of provide emitter
  methods: {
    openCart() {
      this.emitter.emit("toggleCart"); //fire event and will be listen in next step
      console.log("toggleCart emit");
    },
    showWishLists() {
      console.log("showWishLists invoked");
    },
    signIn() {
      console.log("signIn invoked");
    },
  },
};
</script>
