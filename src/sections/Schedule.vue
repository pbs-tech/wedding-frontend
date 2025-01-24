<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from "../stores";
import ListItem from "../components/ListItem.vue";
let scheduleItems = ref<{ time: string; event: string; comment?: string;}[]>([]);
const dayScheduleItems = [
    {
        event: 'Arrival',
        time: '13:00',
        comment: '(Please arrive at <b> 13:00 </b> latest)'
    },
    {
        time: '13:30',
        event: 'Ceremony',
    },
    {
        time: '14:00',
        event: 'Drinks',
    },
    {
        time: '15:30',
        event: 'Dinner',
    }
];

const eveningScheduleItems = [
    {
        time: '18:30',
        event: 'Evening start',
    },
    {
        time: '19:00',
        event: 'First dance',
    },
    {
        time: '20:30',
        event: 'Pizza',
    },
    {
        time: '00:00',
        event: 'Farewell',
    },
];

const authStore = useAuthStore();
const isDayGuest = authStore.isDayGuest();

if (isDayGuest) {
    scheduleItems = ref(dayScheduleItems.concat(eveningScheduleItems));
} else {
    scheduleItems = ref(eveningScheduleItems);
}

</script>

<template>
    <section>
        <div class="container" id="schedule">
            <h2> Schedule </h2>
            <div class="content">
                <ol class="schedule">
                    <ListItem v-for="(item) in scheduleItems" :key="item.time" class="list-item">
                        <template v-slot:list-item-title>
                            <div class="schedule-time" id="time">
                                {{ item.time }}
                            </div>
                        </template>
                        <template v-slot:list-item-content>
                            <div class="schedule-event" id="event">
                                {{ item.event }}
                            </div>
                            <div v-html="item.comment" class="schedule-comment" id="comment"></div>
                        </template>
                    </ListItem>
                </ol>
            </div>
        </div>
    </section>
</template>
