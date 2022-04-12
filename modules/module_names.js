
let male_names = [
  'Hugo', 'Mateo', 'Martín', 'Lucas', 'Leo', 'Daniel',
  'Alejandro', 'Manuel', 'Pablo', 'Álvaro', 'Adrián', 'Enzo',
  'Mario', 'Diego', 'David', 'Oliver', 'Marcos', 'Thiago',
  'Marco', 'Álex', 'Javier', 'Izan', 'Bruno', 'Miguel',
  'Antonio', 'Gonzalo', 'Liam', 'Gael', 'Marc', 'Carlos',
  'Juan', 'Ángel', 'Dylan', 'Nicolás', 'José', 'Sergio',
  'Gabriel', 'Luca', 'Jorge', 'Darío', 'Íker', 'Samuel',
  'Eric', 'Adam', 'Héctor', 'Francisco', 'Rodrigo', 'Jesús',
  'Erik', 'Amir', 'Jaime', 'Ian', 'Rubén', 'Aarón',
  'Iván', 'Pau', 'Víctor', 'Guillermo', 'Luis', 'Mohamed',
  'Pedro', 'Julen', 'Unai', 'Rafael', 'Santiago', 'Saúl',
  'Alberto', 'Noah', 'Aitor', 'Joel', 'Nil', 'Jan',
  'Pol', 'Raúl', 'Matías', 'Martí', 'Fernando', 'Andrés',
  'Rayan', 'Alonso', 'Ismael', 'Asier', 'Biel', 'Ander',
  'Aleix', 'Axel', 'Alan', 'Ignacio', 'Fabio', 'Neizan',
  'Jon', 'Teo', 'Isaac', 'Arnau', 'Luka', 'Max',
  'Imran', 'Youssef', 'Anas', 'Elías'
]


let female_names = [
  'Lucía', 'Sofía', 'Martina', 'María', 'Julia', 'Paula',
  'Valeria', 'Emma', 'Daniela', 'Carla', 'Alba', 'Noa',
  'Alma', 'Sara', 'Carmen', 'Vega', 'Lara', 'Mia',
  'Valentina', 'Olivia', 'Claudia', 'Jimena', 'Lola', 'Chloe',
  'Aitana', 'Abril', 'Ana', 'Laia', 'Triana', 'Candela',
  'Alejandra', 'Elena', 'Vera', 'Manuela', 'Adriana', 'Inés',
  'Marta', 'Carlota', 'Irene', 'Victoria', 'Blanca', 'Marina',
  'Laura', 'Rocío', 'Alicia', 'Clara', 'Nora', 'Lia',
  'Ariadna', 'Zoe', 'Amira', 'Gala', 'Celia', 'Leire',
  'Eva', 'Ángela', 'Andrea', 'África', 'Luna', 'Ainhoa',
  'Ainara', 'India', 'Nerea', 'Ona', 'Elsa', 'Isabel',
  'Leyre', 'Gabriela', 'Aina', 'Cayetana', 'Iria', 'Jana',
  'Mar', 'Cloe', 'Lina', 'Julieta', 'Adara', 'Naia',
  'Iris', 'Nour', 'Mara', 'Helena', 'Yasmín', 'Natalia',
  'Arlet', 'Diana', 'Aroa', 'Amaia', 'Cristina', 'Nahia',
  'Isabella', 'Malak', 'Elia', 'Carolina', 'Berta', 'Fátima',
  'Nuria', 'Azahara', 'Macarena', 'Aurora'
]


let generate_name = (human) => {

  let random
  let name = ''
  if (human.sex === 'Male') {

    random = Math.floor(Math.random() * (male_names.length-1 - 0) + 0)
    name = male_names[random]
  } else if (human.sex === "Female") {

    random = Math.floor(Math.random() * (female_names.length-1 - 0) + 0)
    name = female_names[random]
  }

  return (name);
}

export { generate_name }