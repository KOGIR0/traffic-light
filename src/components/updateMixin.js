// Common data and update function for Yellow, Green and Red components
export const updateMixin = {
    data: function(){
        return {
            timer: "",
            activeColor: ''
        };
    },
    beforeDestroy()
    {
        this.$store.commit('setTimeLeft', this.timer.timeLeft);
    },
}