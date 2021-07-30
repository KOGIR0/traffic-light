export default class Timer
{
    // timeLeft - time in seconds
    constructor(timeLeft)
    {
        this.startTime = Date.now();
        this.timeLeft = timeLeft;

        this.timerId = setInterval(() => this.timeLeft--, 1000);
    }

    stopTimer()
    {
        clearInterval(this.timerId);
    }
}