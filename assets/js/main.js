const calculate = () => {

    // Get base value from input
    let base = Number(document.getElementById("base").value);

    // Get height value from input
    let height = Number(document.getElementById("height").value);

    let triangleArea = Math.ceil(((1 / 2) * base * height));

    triangleArea = `The area of the triangle is: ${triangleArea}`;

    console.log(triangleArea);

    document.querySelector("#h4").innerHTML = triangleArea;

    return;
}

