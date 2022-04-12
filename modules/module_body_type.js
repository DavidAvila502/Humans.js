import { contains_abnormality } from "./module_verification.js"


let generate_body_type = (human) => {



    if (contains_abnormality(human, 'dwarfism')) {
        return (generate_dwarfism_body_type())
    } else {
        return (generate_normal_body_type())
    }


}



let generate_normal_body_type = () => {
    let body_type = ''
    let random = Math.floor(Math.random() * (100 - 1) + 1)

    if (random >= 1 && random < 40) {

        body_type = 'Hectomorph'
    } else if (random >= 40 && random < 80) {

        body_type = 'Endomorph'
    } else {

        body_type = 'Mesomorph'

    }



    return (body_type)
}


let generate_dwarfism_body_type = () => {

    let body_type = ''
    let random = Math.floor(Math.random() * (100 - 1) + 1)

    if (random >= 1 && random <= 10) {

        body_type = 'Hectomorph'
    } else if (random > 10 && random <= 80) {

        body_type = 'Endomorph'
    } else {

        body_type = 'Mesomorph'

    }



    return (body_type)


}





export { generate_body_type }