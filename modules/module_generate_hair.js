import { contains_abnormality, contains_property } from "./module_verification.js"


let generate_hair = (human) => {

    return (get_hair(human));

}



let get_hair = (human) => {

    let random = Math.floor(Math.random() * (101 - 1) + 1)

    if (contains_abnormality(human, 'low melanin') && contains_property(human, 'eyes_color', 'Blue')) {

        if (random >= 1 && random < 20) {
            return (['Black', ''])
        } else if (random >= 20 && random < 30) {
            return (['Chestnut', ''])
        } else if (random >= 30 && random <= 70) {
            return (['Blond', { name: 'abnormal hair color' }])
        } else {
            return (['Redhead', { name: 'abnormal hair color' }])
        }


    } else if (contains_abnormality(human, 'low melanin') && contains_property(human, 'eyes_color', 'Green')) {

        if (random >= 1 && random < 20) {
            return (['Black',''])
        } else if (random >= 20 && random < 30) {
            return (['Chestnut',''])
        } else if (random >= 30 && random <= 70) {
            return (['Redhead', { name: 'abnormal hair color' }])
        } else {
            return (['Blond', { name: 'abnormal hair color' }])
        }
    } else {
        if (random >= 1 && random < 50) {
            return (['Black',''])
        } else if (random >= 50 && random < 85) {
            return (['Chestnut',''])
        } else if (random >= 85 && random <= 90) {
            return (['Redhead', { name: 'abnormal hair color' }])
        } else {
            return (['Blond', { name: 'abnormal hair color' }])
        }

    }

}


export { generate_hair }