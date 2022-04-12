import { generate_height } from "./module_height.js";
import { generate_abnormalities } from "./module_abnormalities.js";
import { generate_body_type } from "./module_body_type.js";
import { generate_sex } from "./module_generate_sex.js";
import { generate_name } from "./module_names.js";
import { generate_skin } from "./module_skin.js";
import { generate_eyes_color } from "./module_eyes_color.js";
import { generate_hair } from "./module_generate_hair.js";

let generate = () => {
  let human = {
    name: "",
    height: "",
    hair_color: "",
    eyes_color: "",
    skin_color: "",
    body_type: "",
    sex: "",
  };

  //First we need to determinate if our human will have some abnormalities
  human.abnormalities = generate_abnormalities();

  // Then we gonna give it the others properties

  human.body_type = generate_body_type(human);
  human.sex = generate_sex();
  human.name = generate_name(human);
  human.height = generate_height(human);
  human.skin_color = generate_skin(human);
  // human.abnormalities.push(get_later_abnormalities_eyes(human))

  human.eyes_color = generate_eyes_color(human);
  let catch_hair_color_elements = generate_hair(human);

  human.hair_color = catch_hair_color_elements[0];
  human.abnormalities.push(catch_hair_color_elements[1]);

  // Then we gonna delete the abnormalities with ''
  human.abnormalities = human.abnormalities.filter((item) => item != "");

  return human;
};

export { generate };
