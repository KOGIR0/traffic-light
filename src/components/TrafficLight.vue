<template>
    <div id="traffic-light">
        <circle-light :circleColor="'red'"
                    :isActive="active === 'red'"
                    :message="timeLeft"/>
        <circle-light :circleColor="'yellow'"
                    :isActive="active === 'yellow'"
                    :message="timeLeft"/>
        <circle-light :circleColor="this.$store.state.green"
                    :isActive="active === this.$store.state.green"
                    :message="timeLeft"/>
    </div>
</template>

<script>
import CircleLight from './CircleLight.vue'

export default {
    props: ['active', 'timeLeft'],
    components: {
        'circle-light': CircleLight
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