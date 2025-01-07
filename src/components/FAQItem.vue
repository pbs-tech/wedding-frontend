<template>
    <slot name="faq-question">
        <h3>
            Question
        </h3>
    </slot>
    <slot name="faq-answer">
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
