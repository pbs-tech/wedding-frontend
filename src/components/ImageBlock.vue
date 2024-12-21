<template>
  <div class="block-container">
    <div class="img-container">
      <div class="w-full px-3 sm:px-4">
        <div class="swiper-container">
          <swiper
            :space-between="50"
            :slides-per-view="1"
            loop
            :pagination="{ clickable: true }"
            navigation
            :autoplay="{ delay: 5000 }"
            class="swiper-container"
          >
            <swiper-slide
              v-for="(image, index) in images"
              :key="index"
              class="swiper-slide">
              <img
                :src="image.src"
                :alt="image.alt"
                class="image-cover-img"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default defineComponent({
  name: 'ImageBlock',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array as PropType<Array<{ src: string; alt: string }>>,
      required: true,
      validator(value: Array<{ src: string; alt: string }>) {
        return value.every((image) => image.src && typeof image.src === 'string' && typeof image.alt === 'string');
      }
    },
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
  background-color: #f5c8c5;
}
.swiper-pagination {
  opacity: 0;
}
</style>
