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
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const verifyPair = (obj, shift, night) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
        if (arr[index][0] === shift && arr[index][1] === night) isEqual = true
    }
    return isEqual
  }

  console.log(verifyPair(lesson3, 'turno', 'noite'));