const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for (let i = 0; i < teachers.length; i++ ) {
    const teacherName = teachers [i];  
    const message = `${teacherName} è l'insegnante in posizione ${i}`;
    console.log(message);
}


// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers.at(3);
    console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

    teachers[5] = "Patrick";
    console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = "Luca";
    teachers.pop();
    console.log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

const firstTeacher = "Nathan";
    teachers.shift();
    console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
   
    teachers.push("Vanessa");
    console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
    
    teachers.unshift("Sarah");
    console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = true;

if (teachers.includes("Fabio")) {
    const isFabioPresent = true;  
    console.log(isFabioPresent);     
} else {
    const isFabioPresent = false;  
    console.log(isFabioPresent); 
}
   

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = -1;
    let index = teachers.indexOf("Lewis");
    console.log(index);
    
    
// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = "Sarah, Ed, Fabio, Phil, Carlo, Patrick, Vanessa";
    let string = teachers.join(", ");
    console.log(string);
// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = false;

    if (teachers.length === 0) {
        const isTeachersEmpty = true;
        console.log(isTeachersEmpty);
        
    } else {
        const isTeachersEmpty = false;
        console.log(isTeachersEmpty);
    }
    