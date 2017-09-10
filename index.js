/**
 * Created by Аня on 19.06.2017.
 */
function QuadraticEquation(a, b, c) {
    var x1, x2, discr = (b * b) - (4 * a * c);
    if (discr > 0) {
        x1 = (-b + Math.sqrt(discr)) / (2 * a);
        x2 = (-b - Math.sqrt(discr)) / (2 * a);
    }
    else if (discr < 0) {
        x1 = undefined;
    }
    else if (discr == 0) {
        x1 = x2 = -b / 2 * a;
    }
    return { x1: x1, x2: x2 };
}
console.log(QuadraticEquation(1, 5, 4));
//# sourceMappingURL=index.js.map