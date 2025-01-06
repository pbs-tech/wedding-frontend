<template>
    <slot v-slot:faq-question>
        <h3>
            Question
        </h3>
    </slot>
    <slot v-slot:faq-answer>
        <p>
            Answer
        </p>
    </slot>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FAQItem'
});
</script>
