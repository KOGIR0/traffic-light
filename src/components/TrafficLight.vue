<template>
    <div id="traffic-light">
        <div class="border">
            <div id="red" :class="[active == 'red' ? 'active' : 'unactive']"></div>
        </div>
        <div class="border">
            <div id="yellow" :class="[active == 'yellow' ? 'active' : 'unactive']"></div>
        </div>
        <div class="border">
            <div id="green" :class="[active == 'green' ? 'active' : 'unactive']"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['active']
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

#red
{
    background-color: red;
}

#yellow
{
    background-color: yellow;
}

#green
{
    background-color: green;
}

#red, #yellow, #green
{
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

.border
{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid black;
    border-top: 5px solid black;
    margin: 5px;
}

.unactive
{
    opacity: 0.5;
}

.active
{
    opacity: 1;
}

#red.active
{
    box-shadow: 0 0 55px 10px red;
}

#yellow.active
{
    box-shadow: 0 0 55px 10px yellow;
}

#green.active
{
    box-shadow: 0 0 55px 10px green;
}
</style>