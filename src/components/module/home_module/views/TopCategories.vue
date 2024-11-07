<template>
  <div class="top-categories">
    <div class="cyber-banner">
      <img src="@/assets/images/cyber-banner.webp" class="w-100" />
    </div>
    <div class="categories pt-13">
      <div class="title d-flex justify-center align-center px-5 mb-3">
        <h3
          class="text-center flex-grow-1"
          style="font-weight: 900; font-size: 20px"
        >
          Top Categories
        </h3>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="category in categories" :key="category.title">
            <v-card class="text-center py-3 px-2" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="image-parent"
                  style="
                    width: 100%;
                    height: 170px;
                    overflow: hidden;
                    border-radius: 50%;
                  "
                >
                  <img
                    v-bind="props"
                    :src="category.image"
                    :style="`height: 100%;width: 100%;cursor: pointer; transition: 0.4s all ease-in-out; scale: ${
                      isHovering ? 1.1 : 1
                    }`"
                  />
                </div>
              </v-hover>
              <v-card-text>{{ category.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "Laptops & Tablets",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "TVs",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
        },
        {
          title: "PCs",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "Audio & Video",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gaming",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Home Appliances",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consumables",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart Homes",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>
