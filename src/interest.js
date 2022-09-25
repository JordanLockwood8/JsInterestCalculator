export class Interest{

    simpleInterest(principle, time, rate)
    {
        // console.log("Principle : " + principle);
        // console.log("Time : " + time);
        // console.log("Rate : " + rate);
    
        var amount = (principle * time * rate) / 100;
    
        // console.log("Simple Interest : $" + amount + "\n");

        return amount;
    }
    compoundInterest(principle, time, rate, n){
        // console.log("Principle : " + principle);
        // console.log("Time : " + time);
        // console.log("Rate : " + rate);
        //n= how many times interest is compounded per incrament of time
        // console.log("compound per year : " + n);

        const amount = principle * (Math.pow((1 + (rate / n)), (n * time)));
        const interest = amount - principle;
        // console.log ("Interest : $" + interest + "\n");
        return interest;

        
    }
}