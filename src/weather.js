export class Weather {
    constructor(location, maxtemp, mintemp, precipprob){
        this.location = location;
        this.maxTempF = maxtemp;
        this.minTempF = mintemp;
        this.precipprob = precipprob;
        this.maxTempC = (maxtemp - 32) * (5 / 9);
        this.minTempC = (mintemp - 32) * (5 / 9);
    }
}