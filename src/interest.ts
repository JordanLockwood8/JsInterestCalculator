export class Interest {

    simpleInterest( principle: number, time: number, rate: number) {
        
        var amount = (principle * time * rate) / 100;
        
        return amount;
    }
    
    compoundInterest(principle: number, time: number, rate: number, n: number) {
        
        const amount = principle * (Math.pow((1 + (rate / n)), (n * time)));
        const interest = amount - principle;
        
        return interest;
    }

}