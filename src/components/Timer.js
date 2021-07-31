export default class Timer
{
    // timeLeft - time in seconds
    // endCallback - function to call on Timer end
    constructor(timeLeft, endCallback)
    {
        this.startTime = Date.now();
        this.timeLeft = timeLeft;

        this.timerId = setInterval(() => {
            this.timeLeft--;
            if(this.timeLeft <= 0)
            {
                if(endCallback && typeof endCallback === 'function')
                {
                    endCallback();
                }
                this.stopCountdown();
            }
        }, 1000);
    }

    stopCountdown()
    {
        clearInterval(this.timerId);
    }
}