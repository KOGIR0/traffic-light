<template>
    <div id="traffic-light">
        <circle-light :circleColor="red"
                    :isActive="isActive(red)"
                    :isBlink="isBlink(red)"
                    :message="timeLeft"/>
        <circle-light :circleColor="yellow"
                    :isActive="isActive(yellow)"
                    :isBlink="isBlink(yellow)"
                    :message="timeLeft"/>
        <circle-light :circleColor="green"
                    :isActive="isActive(green)"
                    :isBlink="isBlink(green)"
                    :message="timeLeft"/>
    </div>
</template>

<script>
import CircleLight from './CircleLight.vue'
import { redColor, greenColor, yellowColor, blinkStartTime } from '../constants'

export default {
    data: function()
    {
        return {
            red: redColor,
            yellow: yellowColor,
            green: greenColor
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
            return this.$props.timeLeft <= blinkStartTime && this.isActive(activeValue);
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