import { contains_abnormality, contains_property } from "./module_verification.js"

//Generate the height
let generate_height = (human) => {

    if (contains_abnormality(human, 'dwarfism')) {

        return (generate_dwarfism_height());

    } else if (contains_abnormality(human, 'giantism')) {

        return (generate_giantism_height());

    }
    else if (contains_property(human, 'sex','Female')) {

        return (generate_female_height());

    }

    else {

        return (generate_normal_height());
    }

}



let generate_normal_height = () => {

    let height = Math.random() * (1.89 - 1.40) + 1.40

    height = height.toString().substring(0, 4)

    return (height)
}


let generate_dwarfism_height = () => {

    let height = Math.random() * (1.39 - 1) + 1

    height = height.toString().substring(0, 4)

    return (height)

}



let generate_female_height = () => {
    let CanBeVeryHeight = false

    let random = Math.floor(Math.random() * (101 - 1) + 1)

    if (random >= 1 && random <= 70) {

    } else {
        CanBeVeryHeight = true
    }


    if (CanBeVeryHeight == true) {

        let height = Math.random() * (1.89 - 1.40) + 1.40

        height = height.toString().substring(0, 4)

        return (height)

    } else {


        let height = Math.random() * (1.59 - 1.40) + 1.40

        height = height.toString().substring(0, 4)

        return (height)


    }



}


let generate_giantism_height = () => {

    let height = Math.random() * (2.40 - 1.89) + 1.89

    height = height.toString().substring(0, 4)

    return (height)

}


export { generate_height }