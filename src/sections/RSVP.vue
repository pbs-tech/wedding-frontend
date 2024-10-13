<script setup lang="ts">
    import Button from "../components/Button.vue"; 
    import FormText from "../components/FormText.vue";
    import FormAreaText from "../components/FormAreaText.vue";
    import FormRSVPInput from "../components/FormRSVPInput.vue";
</script>
<template>
    <section class="overflow-hidden p-6 bg-inherit">
        <div class="container">
            <h2> RSVP </h2>
            <div class="content">
                <FormText label="Name"></FormText>
                <FormRSVPInput v-model="rsvp"></FormRSVPInput>
                <FormText label="+1 Name" v-if="rsvp==='yes'"></FormText>
                <FormAreaText label="Dietary Requirements" v-if="rsvp==='yes'"></FormAreaText>
                <FormText label="Request A Song" v-if="rsvp==='yes'"></FormText>

            </div>    
            <div class="flex px-12 justify-center">
                <Button label="Submit"/>
            </div>
        </div>
    </section>
</template>
  