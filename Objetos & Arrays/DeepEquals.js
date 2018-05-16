function objeto(um,dois) {
    this.um = um;
    this.dois = dois;
}
var str1 = new objeto("xesque", "dele");
var str2 = new objeto("xesque", "dele");

function deepEquals(obj1, obj2) {
    var prop1 = Object.keys(obj1);
    var prop2 = Object.keys(obj2);

    console.log(Object.keys(obj1));
    if (prop1.length == prop2.length) {
        for (var i=0, l = prop1.length; i < l; i++) {
            if (prop1[i] != prop2[i]) {
                break;
            }
            else
                continue;
        }
        if (i == l)
            console.log("Eles são iguais");
    }
}

deepEquals(str1, str2);
