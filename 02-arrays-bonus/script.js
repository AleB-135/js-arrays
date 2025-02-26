const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
  console.log(teachers);
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers =  [];
  
  for (let i = teachers.length - 1; i >= 0; i--) {
    const curTeacher = teachers [i];
    reversedTeachers.push(curTeacher);
  }

  console.log(reversedTeachers);
  console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

/* 
ESECUZIONE:
Per ogni elemento dell'array, se la stringa è maggiore o uguale a 5, pusha il nuovo array.
*/

const longNames = [];

  for (let i = 0; i < teachers.length; i++) {
    const curTeacher = teachers [i];
    if (curTeacher.length >= 5) {
      longNames.push(curTeacher);
    }
  }

  console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

const edIndex = teachers.indexOf("Ed")
console.log(edIndex);
teachers.splice(edIndex, 1);
console.log(teachers);

