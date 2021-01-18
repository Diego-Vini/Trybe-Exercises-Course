// //Exemplos de formas diferentes de escrever a mesma função
// //1º
// //Variavel que recebe um array contendo objetos
// const students = [
//     { name: 'Maria', note: 70, approved: '' },
//     { name: 'José', note: 56, approved: '' },
//     { name: 'Roberto', note: 90, approved: '' },
//     { name: 'Ana', note: 81, approved: '' }
//   ];
//   //Função que recebe um parametro (o array), acessa o objeto note faz uma comparação
//   //e atualiza a informação de aprovado dentro do objeto 
//   function verifyNote (student){
//     if (student.note >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
//   //Estrutura de repetição que acessa cada elemento do array, e chama a função
//   //verifyNote
//   let i;
//   for (i = 0; i < students.length; i += 1) {
//     verifyNote(students[i]);
//   }
  
//   console.log(students);
// //   => [
// //       { name: 'Maria', note: 70, approved: 'Aprovado' },
// //       { name: 'José', note: 56, approved: 'Recuperação' },
// //       { name: 'Roberto', note: 90, approved: 'Aprovado' },
// //       { name: 'Ana', note: 81, approved: 'Aprovado' }
// //     ]

// //2º Usando forEach 

// const students = [
//     { name: 'Maria', note: 70, approved: '' },
//     { name: 'José', note: 56, approved: '' },
//     { name: 'Roberto', note: 90, approved: '' },
//     { name: 'Ana', note: 81, approved: '' }
//   ];
  
//   function verifyNote (student){
//     if (student.note >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
  
//   students.forEach(verifyNote);
  
//   console.log(students);
// //   => [
// //       { name: 'Maria', note: 70, approved: 'Aprovado' },
// //       { name: 'José', note: 56, approved: 'Recuperação' },
// //       { name: 'Roberto', note: 90, approved: 'Aprovado' },
// //       { name: 'Ana', note: 81, approved: 'Aprovado' }
// //     ]

//Mais exemplos

const emailListInData = [
    "roberta@email.com",
    "paulo@email.com",
    "anaroberta@email.com",
    "fabiano@email.com"
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  }

//   emailListInData.forEach((item) => {
//       showEmailList(item)
//   })

  
  for (let i = 0; i < emailListInData.length; i += 1) {
    showEmailList(emailListInData[i]);
  }
  
  // Use o método forEach chamando a callback showEmailList para apresentar os emails.