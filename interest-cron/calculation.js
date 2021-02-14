module.exports.CalculateTotal=function(data) {
    console.log(data)
    if (data.length === 0)
        return;
    let sum = 0;
    data.forEach(element => {
        sum = sum + element;
    });
    return sum;
}
module.exports.CalculteDailyInterest=function(p, r, n, t) {
    var amt = p * (Math.pow((1 + (r / n)), (n * t)));
   // const amount=Math.round((amt + Number.EPSILON) * 100) / 100
    const amount=amt;
    var i = amount - p;
    const interest=Math.round((i + Number.EPSILON) * 100) / 100
    return interest;
}
module.exports.getbalance=function(row)
{
    console.log(obj)
    return 1
}