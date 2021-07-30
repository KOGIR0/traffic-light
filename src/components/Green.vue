<template>
    <div>
        <traffic-light :active="'green'"/>
        <div>{{this.timer.timeLeft}}</div>
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
    props: ['direction'],
    components:
    {
        'traffic-light': TrafficLight
    },
    mounted()
    {
        setTimeout(() => {
            this.$router.push('/yellow')
        }, 15000);
    }
}
</script>

<style>
</style>