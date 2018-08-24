function deepEquals(obj1, obj2) {
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i) && obj2.hasOwnProperty(i)) {
            if (obj1[i] !== obj2[i]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}
