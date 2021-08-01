<template>
    <div>
        <traffic-light :active="activeColor" :timeLeft="timer.timeLeft"></traffic-light>
    </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue'
import Timer from './Timer'
import { redColor } from '../constants'
import { updateMixin } from './updateMixin'

export default {
    mixins: [updateMixin],
    components:
    {
        'traffic-light': TrafficLight
    },
    beforeMount()
    {
        this.activeColor = redColor;
        this.timer = new Timer(this.$store.state.timeLeft, () => {
            this.$router.push('/yellow');
        });
    }
}
</script>

<style>
</style>