<script setup lang="ts">
    import TextBlock from "../components/TextBlock.vue";
    import MapBlock from "../components/MapBlock.vue";

</script>

<template>
    <section>
        <div class="container" id="transport">
            <h2> Transport </h2>
            <div class="content">
                <TextBlock class="text-block">
                    <template v-slot:title>
                        <h3>Driving</h3>
                    </template>
                    <template v-slot:content>
                        <p>
                            Cars can be left at the venue overnight.
                            Healey Barn kindly asks that if you leave your car it is picked up by 10am the next morning.
                        </p>
                    </template>
                </TextBlock>
                <MapBlock/>
                <TextBlock class="text-block">
                    <template v-slot:title>
                        <h3>Taxis</h3>
                    </template>
                    <template v-slot:content>
                        <p>
                            We encourage you to pre-book your taxi prior to evening using a local taxi company at the links or numbers below:
                        </p>
                            <ul class="taxi-list">
                                <li>
                                    <a class="taxi-link" href="https://hexham.ecocabs.com">Hexham Eco Cabs</a> <br/> 01434 600600
                                </li>
                                <li>
                                    <a class="taxi-link" href="https://www.executive-taxis.co.uk">Executive Taxis </a> <br/> 01434 605601
                                </li>
                            </ul>
                    </template>
                </TextBlock>
            </div>
        </div>
    </section>
</template>
