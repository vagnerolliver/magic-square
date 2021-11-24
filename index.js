// Length of array
let n = s[0].length
let newArr = []
// iterate through matrix, add each element to newArr
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        newArr.push(s[i][j])
    }
}
// print all corner numbers (index: 0,2,6,8) (values: 2–8,4–6,8–2,6–4)
// candidate pairs
// (1,9)(9,1)
// (3,7)(7,3)
// (2,8)(8,2)
// (4,6)(6,4)
let changes = []
let result = 0
for (let i = 0; i < newArr.length; i++) {
    // Iterate towards the center of matrix
    // so we evaluate both ends at the same
    // arr[0]   - arr[8]
    // arr[2]   - arr[6]
    // if pair value is changed, record that it was changed
    // 4 9 2
    // 3 5 7
    // 8 1 5
    // NOTE: Work on writing a dynamic code block to make changes in matrix as opposed to hardcoding if statements
    switch (i) {
        case 0: {
            if (newArr[i] == 8) {
                let beforeChange = newArr[8]
                newArr[8] = 2
                changes.push(Math.abs(beforeChange  - newArr[8]))
            }
            if (newArr[i] == 2) {
                let beforeChange = newArr[8]
                newArr[8] = 8
                changes.push(Math.abs(beforeChange  - newArr[8]))
            }
            if (newArr[i] == 4) {
                let beforeChange = newArr[8]
                newArr[8] = 6
                changes.push(Math.abs(beforeChange  - newArr[8]))
            }
            if (newArr[i] == 6) {
                let beforeChange = newArr[8]
                newArr[8] = 4
                changes.push(Math.abs(beforeChange  - newArr[8]))
            }
        }
        break;
    case 1:
        if (newArr[i] == 1) {
            let beforeChange = newArr[7]
            newArr[7] = 9
            changes.push(Math.abs(beforeChange  - newArr[7]))
        }
        if (newArr[i] == 9) {
            let beforeChange = newArr[7]
            newArr[7] = 1
            changes.push(Math.abs(beforeChange  - newArr[7]))
        }
        if (newArr[i] == 3) {
            let beforeChange = newArr[7]
            newArr[7] = 7
            changes.push(Math.abs(beforeChange  - newArr[7]))
        }
        if (newArr[i] == 7) {
            let beforeChange = newArr[7]
            newArr[7] = 3
            changes.push(Math.abs(beforeChange  - newArr[7]))
        }
        break;
    case 2: {
        if (newArr[i] == 8) {
            let beforeChange = newArr[6]
            newArr[6] = 2
            changes.push(Math.abs(beforeChange  - newArr[6]))
        }
        if (newArr[i] == 2) {
            let beforeChange = newArr[6]
            newArr[6] = 8
            changes.push(Math.abs(beforeChange  - newArr[6]))
        }
        if (newArr[i] == 4) {
            let beforeChange = newArr[6]
            newArr[6] = 6
            changes.push(Math.abs(beforeChange  - newArr[6]))
        }
        if (newArr[i] == 6) {
            let beforeChange = newArr[6]
            newArr[6] = 4
            changes.push(Math.abs(beforeChange  - newArr[6]))
        }
    }
    break;
    case 3: {
        if (newArr[i] == 1) {
            let beforeChange = newArr[5]
            newArr[5] = 9
            changes.push(Math.abs(beforeChange  - newArr[5]))
        }
        if (newArr[i] == 9) {
            let beforeChange = newArr[5]
            newArr[5] = 1
            changes.push(Math.abs(beforeChange  - newArr[5]))
        }
        if (newArr[i] == 3) {
            let beforeChange = newArr[5]
            newArr[5] = 7
            changes.push(Math.abs(beforeChange  - newArr[5]))
        }
        if (newArr[i] == 7) {
            let beforeChange = newArr[5]
            newArr[5] = 3
            changes.push(Math.abs(beforeChange  - newArr[5]))
        }
        break;
    }
    case 4: {
        let beforeChange = newArr[i]
        newArr[i] = 5
        changes.push(Math.abs(beforeChange  - newArr[i]))
        break;
    }
    case 5: {
        if (newArr[i] == 1) {
            let beforeChange = newArr[3]
            newArr[3] = 9
            changes.push(Math.abs(beforeChange  - newArr[3]))
        }
        if (newArr[i] == 9) {
            let beforeChange = newArr[3]
            newArr[3] = 1
            changes.push(Math.abs(beforeChange  - newArr[3]))
        }
        if (newArr[i] == 3) {
            let beforeChange = newArr[3]
            newArr[3] = 7
            changes.push(Math.abs(beforeChange  - newArr[3]))
        }
        if (newArr[i] == 7) {
            let beforeChange = newArr[3]
            newArr[3] = 3
            changes.push(Math.abs(beforeChange  - newArr[3]))
        }
        break;
    }
    case 6: {
        if (newArr[i] == 8) {
            let beforeChange = newArr[2]
            newArr[2] = 2
            changes.push(Math.abs(beforeChange  - newArr[2]))
        }
        if (newArr[i] == 2) {
            let beforeChange = newArr[2]
            newArr[2] = 8
            changes.push(Math.abs(beforeChange  - newArr[2]))
        }
        if (newArr[i] == 4) {
            let beforeChange = newArr[2]
            newArr[2] = 6
            changes.push(Math.abs(beforeChange  - newArr[2]))
        }
        if (newArr[i] == 6) {
            let beforeChange = newArr[2]
            newArr[2] = 4
            changes.push(Math.abs(beforeChange  - newArr[2]))
        }
    }
    break;
    case 7:
        if (newArr[i] == 1) {
            let beforeChange = newArr[1]
            newArr[1] = 9
            changes.push(Math.abs(beforeChange  - newArr[1]))
        }
        if (newArr[i] == 9) {
            let beforeChange = newArr[1]
            newArr[1] = 1
            changes.push(Math.abs(beforeChange  - newArr[1]))
        }
        if (newArr[i] == 3) {
            let beforeChange = newArr[1]
            newArr[1] = 7
            changes.push(Math.abs(beforeChange  - newArr[1]))
        }
        if (newArr[i] == 7) {
            let beforeChange = newArr[1]
            newArr[1] = 3
            changes.push(Math.abs(beforeChange  - newArr[1]))
        }
        break;
    case 8: {
        if (newArr[i] == 8) {
            let beforeChange = newArr[0]
            newArr[0] = 2
            changes.push(Math.abs(beforeChange  - newArr[0]))
        }
        if (newArr[i] == 2) {
            let beforeChange = newArr[0]
            newArr[0] = 8
            changes.push(Math.abs(beforeChange  - newArr[0]))
        }
        if (newArr[i] == 4) {
            let beforeChange = newArr[0]
            newArr[0] = 6
            changes.push(Math.abs(beforeChange  - newArr[0]))
        }
        if (newArr[i] == 6) {
            let beforeChange = newArr[0]
            newArr[0] = 4
            changes.push(Math.abs(beforeChange  - newArr[0]))
        }
    }
    break;
    default:
    }
    result = changes.reduce((acc, cur) => {
        return acc + cur
    })
    console.log(newArr)
}

console.log("Result: ", result)
return result
