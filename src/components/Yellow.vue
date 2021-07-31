<template>
    <div>
        <traffic-light :active="'yellow'" :timeLeft="this.timer.timeLeft"/>
    </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue'
import Timer from './Timer'
import { up, down } from '../constants'

export default {
    data: function(){
        return {
            timer: ""
        };
    },
    props: ['direction'],
    components:
    {
        'traffic-light': TrafficLight
    },
    beforeMount()
    {
        // create timer. On timer end change route
        this.timer = new Timer(this.$store.state.timeLeft, () => {
            if(this.$props.direction === up)
            {
                this.$router.push('/red');
            } else if (this.$props.direction === down)
            {
                this.$router.push('/green');
            }
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