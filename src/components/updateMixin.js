
export const updateMixin = {
    data: function(){
        return {
            timer: "",
            activeColor: ''
        };
    },
    updated()
    {
        if(this.timer.timeLeft > 0)
        {
            this.$store.commit('setTimeLeft', this.timer.timeLeft);
        }
    }
}