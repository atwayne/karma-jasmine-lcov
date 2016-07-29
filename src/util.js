function dummyAdd(first, second) {
    if (isNaN(first)||isNaN(second)) {
        throw 'not a number';
    }
    return first + second;
}