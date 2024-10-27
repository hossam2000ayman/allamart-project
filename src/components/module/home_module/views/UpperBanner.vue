<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="content">
              <h3><span>Huge Saving </span> on UHD Television</h3>
              <p class="hint">Sale up to 70% off on selected items</p>
              <v-btn
                variant="outlined"
                class="px-11 py-2"
                style="border-radius: 30px; text-transform: none"
              >
                Shop Now
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  .parent {
    height: 390px;
    background-image: url(../../../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .content {
      color: white;
      padding: 40px 0px 0px 100px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: lightgreen;
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
