<script setup lang="ts">
    import FAQItem from "../components/FAQItem.vue";
    const faqs = [
        {
            question: "What is the dress code?",
            answer: "<p> We’re excited to celebrate with you in style! <p/> <p> Our dress code is Black Tie Formal, which calls for a sophisticated and elegant look. For those wearing suits, this is a tuxedo with a bow tie, while those opting for a dress are encouraged to choose floor-length or elegant cocktail options. Think timeless and refined — bold colours, luxurious fabrics, and polished details. We can't wait to see everyone dressed to the nines! </p> <p> P.S. It goes without saying but please do not wear white, ivory, black or very light coloured dresses x </p>"
        },
        {
            question: "Do you have a gift registry?",
            answer: "<p> As we already live together, we’re not doing a traditional gift registry. If you would like to give us a gift, we would be grateful for a contribution towards our honeymoon. </p>"
        },
        {
            question: "Can we take our own photos?",
            answer: "<p> We ask that you please refrain from taking photos during the ceremony, speeches and first dance as we’ve hired a photographer and videographer to capture these special moments. </p>"
        },
        {
            question: "Can I bring a plus one?",
            answer: "<p> Our wedding is an intimate gathering and we have carefully chosen to invite  our closest family and friends. Please only RSVP for those who are listed on the invitation. </p>"
        }
    ]
</script>


<template>
    <section>
        <div class="container" id="faqs">
            <h2> FAQs </h2>
            <div class="content">
                <div v-for="(item) in faqs">
                    <FAQItem>
                        <template v-slot:faq-question>
                                <h3> {{ item.question }} </h3>
                        </template>
                        <template v-slot:faq-answer>
                               <div v-html="item.answer"></div>
                        </template>
                    </FAQItem>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FAQs'
});
</script>
