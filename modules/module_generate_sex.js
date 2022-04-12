//This module returns the sex of the human

let generate_sex = () => {

    let random = Math.floor(Math.random() * (100 - 1) + 1);

    if (random >= 1 && random <= 50) {

        return ('Female')
    } else {
        return ('Male')
    }



}

export { generate_sex }

