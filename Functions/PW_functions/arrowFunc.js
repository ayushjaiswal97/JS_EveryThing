// Arrow Function () =>
    let fnc = (x) => {
        return x*x;
    }
    let sqr = fnc(5);
    console.log(sqr);

    // One parameter, and a single return
    const square = (n) => n * n;
    let op = square(5);
    console.log(op);

    // Multiple parameter, and a single return expression
    const sumOftwoNum = (a, b) => a + b;
    let opt = sumOftwoNum(1,2);
    console.log(opt);

    // Multiple expression in function expression :-
    let sum = (x, y) => {
        console.log(`Adding ${x} and ${y}`);
        return x + y;
    }
    let res = sum(10,2);
    console.log(res);

    // Returning an object 
    const sumAndDifference = (a, b) => ({sum: a + b, difference: a - b});
    let result = sumAndDifference(10,5);
    console.log(result);


   