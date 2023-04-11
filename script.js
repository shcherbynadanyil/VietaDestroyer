const solve = () => {
    const vietaSumSpan = document.getElementById("vieta_sum");
    const vietaProductSpan = document.getElementById("vieta_product");
    const rootsSpan = document.getElementById("roots");
    vietaSumSpan.innerHTML = "";
    vietaProductSpan.innerHTML = "";
    rootsSpan.innerHTML = "";
    const a = parseFloat(document.getElementById("member_a").value);
    if(isNaN(a)) {
        alert("INVALID 'a' MEMBER!");
        return;
    }
    if(a === 0) {
        alert("NOT A QUADRATIC EQUATION!");
        return;
    }
    const b = parseFloat(document.getElementById("member_b").value);
    if(isNaN(b)) {
        alert("INVALID 'b' MEMBER!");
        return;
    }
    const c = parseFloat(document.getElementById("member_c").value);
    if(isNaN(c)) {
        alert("INVALID 'c' MEMBER!");
        return;
    }
    const D = b * b - 4 * a * c;
    if(D < 0) {
        alert("NO ROOTS!");
        return;
    }
    const x1 = ( -b - Math.sqrt(D) ) / (2 * a);
    const x2 = ( -b + Math.sqrt(D) ) / (2 * a);
    vietaSumSpan.innerHTML = `x${'1'.sub()} + x${'2'.sub()} = ${- b / a};`;
    vietaProductSpan.innerHTML = `x${'1'.sub()} \u00D7 x${'2'.sub()} = ${c / a};`;
    rootsSpan.innerHTML = `x${'1'.sub()} = ${x1}; x${'2'.sub()} = ${x2}.`;
}

const update = () => {
    const vietaSumSpan = document.getElementById("vieta_sum");
    const vietaProductSpan = document.getElementById("vieta_product");
    const rootsSpan = document.getElementById("roots");
    vietaSumSpan.innerHTML = "";
    vietaProductSpan.innerHTML = "";
    rootsSpan.innerHTML = "";
    const a = parseFloat(document.getElementById("member_a").value);
    const b = parseFloat(document.getElementById("member_b").value);
    const c = parseFloat(document.getElementById("member_c").value);
    if(isNaN(a) || isNaN(b) || isNaN(c)) return;
    let equationString = "";
    if(a !== 0) {
        if(a < 0) equationString += "-";
        if(Math.abs(a) !== 1) equationString += Math.abs(a);
        equationString += `x${"2".sup()} `;
    }
    if(b !== 0) {
        if(b < 0) equationString += "- ";
        else if(a !== 0) equationString += "+ ";
        if(Math.abs(b) !== 1) equationString += Math.abs(b);
        equationString += "x ";
    }
    if(c !== 0) {
        if(c < 0) equationString += "- ";
        else if(a !== 0 || b !== 0) equationString += "+ ";
        equationString += Math.abs(c);
    }
    if(a !== 0 || b !== 0 || c !== 0) equationString += " = 0";
    document.getElementById("equation").innerHTML = equationString;
}

document.getElementById("solve").onclick = solve;
document.getElementById("member_a").onchange = update;
document.getElementById("member_b").onchange = update;
document.getElementById("member_c").onchange = update;
