import { probability_abnormality } from "./module_verification.js";

let generate_abnormalities = () => {
  let abnormalities = [];

  abnormalities.push(get_abnormality(abnormalities_heigh));
  abnormalities.push(get_abnormality(pigment_abnormalities));
  abnormalities.push(get_abnormality(abnormalities_eyes, abnormalities));

  abnormalities = abnormalities.filter((item) => item != "");

  return abnormalities;
};

// The control of abnormalities functions
let get_abnormality = (name_function, ...manyParams) => {
  let get_abnormalities = "";

  if (probability_abnormality() === true) {
    if (manyParams != 0) {
      get_abnormalities = name_function(manyParams[0]);
    } else {
      get_abnormalities = name_function();
    }
  }

  return get_abnormalities;
};

//This function returns an abnormality's height
let abnormalities_heigh = () => {
  let abnormalities = ["dwarfism", "giantism"];
  let abnormalitie = "";

  let random = Math.floor(Math.random() * (abnormalities.length - 0) + 0);

  abnormalitie = abnormalities[random];

  if (abnormalitie == "dwarfism") {
    let demon = Math.floor(Math.random() * (101 - 1) + 1);

    if (demon >= 1 && demon <= 60) {
      return { name: "dwarfism" };
    } else {
      return "";
    }
  } else if (abnormalitie === "giantism") {
    let demon = Math.floor(Math.random() * (101 - 1) + 1);

    if (demon >= 1 && demon <= 60) {
      return { name: "giantism" };
    } else {
      return "";
    }
  }
};

//this function returns an anormality's eyes
let abnormalities_eyes = (array) => {
  let low_found = false;

  array.forEach((item) => {
    if (item.name === "low melanin") {
      low_found = true;
    }
  });

  let abnormalities = ["miopia", "clear eyes"];
  let abnormalitie = "";

  let random = Math.floor(Math.random() * (abnormalities.length - 0) + 0);

  abnormalitie = abnormalities[random];

  if (abnormalitie === "miopia") {
    let lucky = Math.floor(Math.random() * (101 - 1) + 1);

    if (lucky >= 1 && lucky <= 40) {
      return { name: "miopia" };
    } else {
      return "";
    }
  } else if (abnormalitie === "clear eyes") {
    let lucky = Math.floor(Math.random() * (101 - 1) + 1);

    if (low_found == true) {
      if (lucky >= 1 && lucky <= 90) {
        return { name: "clear eyes" };
      } else {
        return "";
      }
    } else {
      if (lucky >= 1 && lucky <= 10) {
        return { name: "clear eyes" };
      } else {
        return "";
      }
    }
  } else {
    return "";
  }
};

//Update for the low melanin which gonna reeplace the clear eyes function

let pigment_abnormalities = () => {
  let abnormalities = ["low melanin"];
  let abnormalitie = "";
  let random = Math.floor(Math.random() * (abnormalities.length - 0) + 0);

  abnormalitie = abnormalities[random];

  if (abnormalitie == "low melanin") {
    random = Math.floor(Math.random() * (101 - 1) + 1);

    if (random >= 1 && random <= 70) {
      return { name: "low melanin" };
    } else {
      return "";
    }
  } else {
    return "";
  }
};

export { generate_abnormalities };
