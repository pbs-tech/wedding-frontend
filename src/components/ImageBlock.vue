<template>
  <div class="w-full p-4 lg:w-6/12">
    <div class="flex flex-wrap items-center justify-between -mx-3 sm:-mx-4">
      <!-- Swiper Container -->
      <div class="w-full px-3 sm:px-4">
        <div class="swiper-container">
          <swiper
            :space-between="50"
            :slides-per-view="1"
            loop                 
            :pagination="{ clickable: true }"
            navigation
            class="swiper-container"
          >
          <swiper-slide class="swiper-slide">
              <img
                src="../assets/about_c.png"
                alt="About C"
                class="image-cover-img"
              />
            </swiper-slide>
            <!-- Swiper Slide 1 -->
            <swiper-slide class="swiper-slide">
              <img
                src="../assets/about_a.png"
                alt="About A"
                class="image-cover-img"
              />
            </swiper-slide>

            <!-- Swiper Slide 2 -->
            <swiper-slide class="swiper-slide">
              <img
                src="../assets/about_b.png"
                alt="About B"
                class="image-cover-img"
              />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img
                src="../assets/about_d.png"
                alt=""
                class="image-cover-img"
              />
            </swiper-slide>

          <template v-slot:pagination>
            <swiper-pagination></swiper-pagination>
          </template>

          <template v-slot:navigation>
            <swiper-button-next></swiper-button-next>
            <swiper-button-prev></swiper-button-prev>
          </template>

          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import SwiperCore from 'swiper';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default defineComponent({
  name: 'ImageCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
      const onSwiper = (swiper: string) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
});
</script>
<style lang="css">
.swiper-button-next,
.swiper-button-prev {
  color: #f5c8c5;
}

.swiper-pagination-bullet {
  background-color: #f5c8c5
}
</style>
