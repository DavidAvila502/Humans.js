import { contains_abnormality } from "./module_verification.js"

let generate_eyes_color = (human) => {


    if (contains_abnormality(human, 'clear eyes')) {

        return (get_eyes('clear eyes'));

    } else {

        return (get_eyes('normal eyes'));
    }



}

let get_eyes = (...manyArgs) => {

    // let array_eyes = ['Black','Gray','Brown','Blue','Green']

    let random = Math.floor(Math.random() * (101 - 1) + 1);

    if (manyArgs[0] == 'clear eyes') {
        if (random >= 1 && random <= 70) {
            return ('Blue')
        } else {
            return ('Green')
        }

    } else {
        if (random >= 1 && random <= 40) { return ('Black') }
        else if (random >= 40 && random < 70) { return ('Gray') }
        else if (random >= 70 && random <= 100) { return ('Brown') }
    }


}

export { generate_eyes_color }