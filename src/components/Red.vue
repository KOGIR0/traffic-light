<template>
    <div>
        <traffic-light :active="activeColor" :timeLeft="timer.timeLeft"></traffic-light>
    </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue'
import Timer from './Timer'
import { redColor } from '../constants'

export default {
    data: function(){
        return {
            timer: "",
            activeColor: redColor
        }
    },
    components:
    {
        'traffic-light': TrafficLight
    },
    beforeMount()
    {
        this.timer = new Timer(this.$store.state.timeLeft, () => {
            this.$router.push('/yellow');
        });
    },
    updated()
    {
        if(this.timer.timeLeft > 0)
        {
            this.$store.commit('setTimeLeft', this.timer.timeLeft);
        }
    }
}
</script>

<style>
</style>