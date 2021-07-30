<template>
    <div>
        <traffic-light :active="'yellow'" :timeLeft="this.timer.timeLeft"/>
    </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue';
import Timer from './Timer';

export default {
    data: function(){
        return {
            timer: new Timer(3)
        };
    },
    props: ['direction'],
    components:
    {
        'traffic-light': TrafficLight
    },
    updated()
    {
        if(this.$props)
        {
            if(this.$props.direction === 'up')
            {
                if(this.timer.timeLeft <= 0)
                    this.$router.push('/red');
            } else if (this.$props.direction === 'down')
            {
                if(this.timer.timeLeft <= 0)
                    this.$router.push('/green');
            }
        }
    }
}
</script>

<style>
</style>