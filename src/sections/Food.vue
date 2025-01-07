<script setup lang="ts">
import ListItem from "../components/ListItem.vue";
    const menu = [
        {
            course: "Canapés",
            dish: "Honey roasted sausages with spicy ketchup",
            vegan_dish: "Roasted tomato and red pepper bruschetta",
        },
        {
            course: "Main",
            dish: "Rotisserie chicken with burnt lemon and herb butter, duck fat roast potatoes with garlic and rosemary and mixed greens",
            vegan_dish: "Roast butternut squash with pesto and vegan ricotta, roast potatoes cooked in olive oil and Mixed greens",
        },
        {
            course: "Dessert",
            dish: "Chocolate brownie with vanilla mascarpone cream",
            vegan_dish: "Roasted pineapple with spiced caramel and honeycomb ice cream",
        }
    ]
</script>
<template>
    <section>
        <div class="container" id="food">
            <h2> Food </h2>
            <div>
                <ol class="food-menu">
                    <ListItem
                    v-for="(item) in menu"
                    :key="item.course"
                    class="list-item">
                        <template v-slot:list-item-title>
                            <div class="food-course" id="course">
                                {{ item.course }}
                            </div>
                        </template>
                        <template v-slot:list-item-content>
                            <div class="food-dish" id="dish">
                                {{ item.dish }}
                            </div>
                            <span id="plant-based-label"> Plant-based option: </span>
                            <div class="food-dish" id="vegan-dish">
                                {{ item.vegan_dish }}
                            </div>
                        </template>
                    </ListItem>
                </ol>
                <div id="food-notes">
                    <p>
                        Let us know any allergies or dietary requirements and we will pass this on to the venue.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
