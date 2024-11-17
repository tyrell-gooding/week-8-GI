function shareSlices(slices, people) {
    let result = 0;
    result = slices / people;
    return `each person gets ${result} slices of pizza; from our ${slices} slice pizza`
}

console.log(shareSlices(8, 3));