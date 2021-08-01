<template>
    <div class="border">
        <div class="light"
            :class="{ active: isActive, unactive: !isActive,
                    blink: isBlink }"
            :style="[isActive ?
                    { backgroundColor: circleColor, boxShadow: `0 0 55px 10px ${circleColor}` } :
                    { backgroundColor: circleColor }]"
            >
        {{ isActive ? message : null }}
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'message',
        'circleColor',
        'isActive',
        'isBlink'
    ],
    data: function()
    {
        return {
            blinkStartTime: 3
        };
    }
}
</script>

<style>
.border
{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid black;
    border-top: 7px solid black;
    margin: 5px;
}

.light
{
    width: 100%;
    height: 100%;
    border-radius: 100%;

    color: black;
    line-height: 50px;
    font-size: 32px;
}

.unactive
{
    opacity: 0.5;
}

.active
{
    opacity: 1;
}

.blink
{
    animation: blink 0.7s infinite ease-in-out;
}

@keyframes blink {
    from {opacity: 0.5;}
    50% {opacity: 1}
    to {opacity: 0.5;}
}
</style>