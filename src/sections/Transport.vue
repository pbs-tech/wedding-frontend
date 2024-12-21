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
                        <h3>Public Transport</h3>
                    </template>
                    <template v-slot:content>
                        <p>
                            The nearest train station from Newcastle is Riding Mill, which is a 5 minute taxi ride from the venue. 
                            There are also buses that run from Newcastle to Riding Mill.
                        </p>

                    </template>
                </TextBlock>
                <MapBlock>
                    <template v-slot:map>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d146596.60255408485!2d-1.9570991800592257!3d54.963069049161234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x487d857e0c6f64cd%3A0xbe252b072a76191!2sNewcastle%20upon%20Tyne!3m2!1d54.978252!2d-1.61778!4m5!1s0x487dc558a1b5b2e5%3A0x5650f8b88478b02f!2sRiding%20Mill%20NE44%206BF!3m2!1d54.94938!2d-1.9724949999999999!5e0!3m2!1sen!2suk!4v1734806447389!5m2!1sen!2suk" width="300" height="300" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </template>
                </MapBlock>

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