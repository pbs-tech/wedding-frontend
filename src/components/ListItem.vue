<template>
    <li>
        <slot name="list-item-title">
            <h3>
                title
            </h3>
        </slot>
        <slot name="list-item-content">
            <p>
                content
            </p>
        </slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItem'
});
</script>
