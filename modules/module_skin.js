import { contains_abnormality } from "./module_verification.js"

let generate_skin = (human) => {

    return (get_skin(human))


}


let get_skin = (human) => {

    // let skin = ['Bean', 'Brown', 'Coffe', 'Neutral', 'Clear', 'Paper']

    let random = Math.floor(Math.random() * (101 - 1) + 1);

    if (contains_abnormality(human, 'low melanin')) {

        if (random >= 1 && random <= 70) {
            return ('Clear');
        } else {
            return ('Paper')
        }
    } else {

        if (random >= 1 && random < 10) { return ('Bean') }
        else if (random >= 10 && random < 40) { return ('Brown') }
        else if (random >= 40 && random < 60) { return ('Coffe') }
        else { return ('Neutral') }

    }




}

export { generate_skin }