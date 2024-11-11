<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" alt="" />
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  .parent {
    position: relative;
    height: 390px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content {
      position: absolute;
      left: 40px;
      top: 20px;
      width: 600px;
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

//Media Queries
@media (max-width: 990px) {
  .banner {
    .parent {
      .content {
        h3 {
          font-size: 35px;
        }
        width: 500px;
        left: 0;
      }
    }
  }
}

@media (max-width: 767) {
  .banner {
    .parent {
      height: 320px;
      .content {
        padding-left: 20px;
        h3 {
          font-size: 30px;
        }
        width: 500px;
        left: 0;
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .content {
        padding-left: 20px;
        padding-top: 20px;
        h3 {
          font-size: 24px;
        }
        width: 80%;
        left: 0;
        .hint {
          font-size: 12px;
        }
      }
      button {
        height: 30px !important;
        width: 130px !important;
        font-size: 11px !important;
      }
    }
  }
}
</style>
