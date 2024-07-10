function solution(sizes){
    const rotatedSizes = sizes.map(size => [Math.max(size[0], size[1]), Math.min(size[0], size[1])]);

    const maxWidth = Math.max(...rotatedSizes.map(size => size[0]));
    const maxHeight = Math.max(...rotatedSizes.map(size => size[1]));

    const wallestSize = maxWidth * maxHeight

    return wallestSize;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));