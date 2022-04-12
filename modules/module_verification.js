
let contains_abnormality = (human, abnormality) => {
    let contains = false;

    human.abnormalities.forEach(item => {

        if (item.name === abnormality) {

            contains = true
        }

    });

    return (contains)
}

let contains_property = (human, property, value) => {
    let contains = false;


    if (human[property] === value) {

        contains = true

    }

    return (contains)

}

let probability_abnormality = () => {
    let lucky = false

    let random = Math.floor(Math.random() * (101 - 1) + 1);

    if (random >= 1 && random <= 10) {
        lucky = true
    }



    return lucky

}


// let probability_abnormality_eyes_color = (human) => {

//     let lucky = false

//     let random = Math.floor(Math.random() * (101 - 1) + 1);

//     if (contains_property(human, 'skin_color', 'Clear') && random >= 1 && random <= 50) {

//         lucky = true

//     } else if (contains_property(human, 'skin_color', 'Paper') && random >= 1 && random <= 75) {
//         lucky = true

//     } else if (random >= 1 && random <= 10) {

//         lucky = true

//     }

//     return (lucky)

// }



export { probability_abnormality, contains_abnormality, contains_property }