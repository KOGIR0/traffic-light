<template>
    <div>
        <traffic-light :active="activeColor" :timeLeft="timer.timeLeft"/>
    </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue'
import Timer from './Timer'
import { up, down, yellowColor } from '../constants'
import { updateMixin } from './updateMixin'

export default {
    mixins: [updateMixin],
    props: ['direction'],
    components:
    {
        'traffic-light': TrafficLight
    },
    beforeMount()
    {
        console.log("Before mount " + this.$store.state.timeLeft);
        this.activeColor = yellowColor;
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
    }
}
</script>

<style>
</style>