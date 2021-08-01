<template>
    <div id="traffic-light">
        <circle-light :circleColor="this.red"
                    :isActive="this.isActive(this.red)"
                    :isBlink="this.isBlink(this.red)"
                    :message="timeLeft"/>
        <circle-light :circleColor="this.yellow"
                    :isActive="this.isActive(this.yellow)"
                    :isBlink="this.isBlink(this.yellow)"
                    :message="timeLeft"/>
        <circle-light :circleColor="this.green"
                    :isActive="this.isActive(this.green)"
                    :isBlink="this.isBlink(this.green)"
                    :message="timeLeft"/>
    </div>
</template>

<script>
import CircleLight from './CircleLight.vue'

export default {
    data: function()
    {
        return {
            red: 'red',
            yellow: 'yellow',
            green: this.$store.state.green
        }
    },
    props: ['active', 'timeLeft'],
    components: {
        'circle-light': CircleLight
    },
    methods: {
        isActive(activeValue)
        {
            return this.$props.active === activeValue;
        },
        isBlink(activeValue)
        {
            return this.$props.timeLeft <= 3 && this.isActive(activeValue);
        }
    }
}
</script>

<style>
#traffic-light
{
    display: flex;
    flex-direction: column;
    background-color: gray;
    border-radius: 5px;
    width: 65px;
    margin: 0 auto 0 auto;
    border: 1px solid black;
}
</style>