<template>
    <div>
        <traffic-light :active="this.$store.state.green" :timeLeft="this.timer.timeLeft"/>
    </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue'
import Timer from './Timer'

export default {
    data: function(){
        return {
            timer: new Timer(15)
        };
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