function create(n, m, func) {
    var mat = [];
    for (var i = 0; i < n; i++) {
        var row = []
        for (var j = 0; j < m; j++) {
            row.push(func(i, j));
        }
        mat.push(row);
    }
    return mat;
}

function show(mat) {
    mat.forEach(function (item) {
        console.log(item);
    });
}

var sum = function (i, j) {
    return (i + j);
}

var prod = function (i, j) {
    return (i * j);
}

var iseq = function (i, j) {
    return (i == j ? 1 : 0);
}

var something = function (i, j) {
    return (i*i/(j+1));
}

var crazy = function (i, j) {
    return (i > j ? 1 : (i < j ? 5 : 0));
}


m0 = create(5,5,sum);
m1 = create(5,5,prod);
m2 = create(5,5,iseq);
m3 = create(5,5,something);
m4 = create(5,5,crazy);

show(m0);
show(m1);
show(m2);
show(m3);
show(m4);