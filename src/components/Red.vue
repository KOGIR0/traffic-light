<template>
    <div>
        <traffic-light :active="'red'" :timeLeft="this.timer.timeLeft"></traffic-light>
    </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue'
import Timer from './Timer'

export default {
    data: function(){
        return {
            timer: new Timer(10)
        }
    },
    components:
    {
        'traffic-light': TrafficLight
    },
    updated()
    {
        if(this.timer.timeLeft <= 0)
            this.$router.push('/yellow');
    }
}
</script>

<style>
</style>