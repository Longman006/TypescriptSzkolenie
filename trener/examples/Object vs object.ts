

function takeOnlyObjects1(obj: object) {
    // obj.????
}

// takeOnlyObjects1(null)
// takeOnlyObjects1(undefined)
// takeOnlyObjects1('')
// takeOnlyObjects1(123)
takeOnlyObjects1({})
takeOnlyObjects1([])
takeOnlyObjects1({ x: 123 })



function takeOnlyObjects2(obj: Object) {
    obj.isPrototypeOf
    obj.propertyIsEnumerable
    // obj....
}

// takeOnlyObjects2(null)
// takeOnlyObjects2(undefined)
takeOnlyObjects2('')
takeOnlyObjects2(123)
takeOnlyObjects2({})
takeOnlyObjects2([])
takeOnlyObjects2({ x: 123 })



function takeOnlyObjects3(obj: {}) {
    // obj.????
    obj.isPrototypeOf({})
    obj.propertyIsEnumerable('')
    // obj....
}

// takeOnlyObjects3(null)
// takeOnlyObjects3(undefined)
takeOnlyObjects3('')
takeOnlyObjects3(123)
takeOnlyObjects3({})
takeOnlyObjects3([])
takeOnlyObjects3({ x: 123 })



// --------

typeof [] == 'object'; // true

([]) instanceof Object; // Cat
([]) instanceof Array;  // Tiger
// Array extends Object