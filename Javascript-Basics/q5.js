var ScopeDemo = ()=>{
    let a="Test scope for let";
    var b = "test scope for var";
    const c ="test scope for const";

    console.log(a);
    console.log(b);
    console.log(c);

    if(true) {
        var x = "inside block of var";
        let y = "inside block of let"
        const z = "inside block  of const"

        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log("outside block but inside function");
    console.log(x);
    console.log(y);
    console.log(z);
}

ScopeDemo()