export class Interest {

    simpleInterest(principle, time, rate) {
        
        var amount = (principle * time * rate) / 100;
        
        return amount;
    }
    
    compoundInterest(principle, time, rate, n) {
        
        const amount = principle * (Math.pow((1 + (rate / n)), (n * time)));
        const interest = amount - principle;
        
        return interest;
    }

}