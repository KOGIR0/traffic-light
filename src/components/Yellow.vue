<template>
    <div>
        <traffic-light :active="'yellow'"/>
        <div>{{this.timer.timeLeft}}</div>
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
    mounted()
    {
        if(this.$props)
        {
            console.log(this.$props.direction);
            if(this.$props.direction === 'up')
            {
                setTimeout(() => {
                    this.$router.push('/red');
                }, 3000);
            } else if (this.$props.direction === 'down')
            {
                setTimeout(() => {
                    this.$router.push('/green')
                }, 3000);
            }
        }
    }
}
</script>

<style>
</style>