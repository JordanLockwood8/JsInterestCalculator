export class Interest {

    simpleInterest(principle: number, time: number, rate: number) {
        
        var amount = (principle * time * rate) / 100;
        
        return amount;
    }
    
    compoundInterest(principle: number, time: number, rate: number, compounded: number) {
        
        const amount = principle * (Math.pow((1 + (rate / compounded)), (compounded * time)));
        const interest = amount - principle;
        
        return interest;
    }

}