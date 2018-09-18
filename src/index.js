// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency < 0) return {};
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    coins = {};
    let temp = ~~ (currency / 50);
    if(temp > 0){
        coins.H = temp;
        currency -= temp * 50;
    }

    temp = ~~ (currency / 25);
    if(temp > 0){
        coins.Q = temp;
        currency -= temp * 25;
    }

    temp = ~~ (currency / 10);
    if(temp > 0){
        coins.D = temp;
        currency -= temp * 10;
    }

    temp = ~~ (currency / 5); 
    if(temp > 0){
        coins.N = temp;
        currency -= temp * 5;
    }
    if(currency>0){
        coins.P = currency;
    }
    return coins;

}
