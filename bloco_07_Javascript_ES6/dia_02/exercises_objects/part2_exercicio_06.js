

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

  const totStudants = (obj) => {
    // const students = obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes
    // + obj.lesson3.numeroEstudantes
    let studants = 0;
    const array = Object.keys(obj)
    for (let index = 0; index < array.length; index += 1) {
        studants += obj[array[index]].numeroEstudantes
    }
    
    return studants
  }

  console.log(totStudants(allLessons))
  