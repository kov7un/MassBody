
function calc() {
  let m = +sumM.value
  let h = +sumH.value

  let i = sumM.value / (sumH.value * sumH.value)
  i = i * 100;
  i = Math.round(i);
  i = i / 100;



  if (i <= 16) {
    resultZ.innerHTML = ('Выраженный дефицит массы тела');
  } else if (i <= 18.5) {
    resultZ.innerHTML = ('Недостаточный (дефицит) массы тела');
  } else if (i <= 25) {
    resultZ.innerHTML = ('Норма')
  } else if (i <= 30) {
    resultZ.innerHTML = ('Избыточная Масса тела (предожирение)')
  } else if (i <= 35) {
    resultZ.innerHTML = ('Ожирение 1 ст')
  } else if (i <= 40) {
    resultZ.innerHTML = ('Ожирение 2 ст')
  } else if (i < 40) {
    resultZ.innerHTML = ('Ожирение 3 ст')
  } else {
    resultZ.innerHTML = ('Ожирение 3 ст')
  }

  resultPlace.innerHTML = i

}



// let m = +prompt('Масса тела в kg')

// console.log(`Масса тела ${m} massa`)

// let h = +prompt('Рост тела в m')

// console.log(`Рост тела ${h} heigh`)

// let i = m / (h * h);

// i = i * 100;
// i = Math.round(i);
// i = i / 100;

// console.log(`Индекс массы тела = ${i} кг/м²`)

// if (i <= 16) {
//   console.log('Выраженный дефицит массы тела');
// } else if (i <= 18.5) {
//   console.log('Недостаточный (дефицит) массы тела');
// } else if (i <= 25) {
//   console.log('Норма')
// } else if (i <= 30) {
//   console.log('Избыточная Масса тела (предожирение)')
// } else if (i <= 35) {
//   console.log('Ожирение 1 ст')
// } else if (i <= 40) {
//   console.log('Ожирение 2 ст')
// } else if (i < 40) {
//   console.log('Ожирение 3 ст')
// } else {
//   console.log('Ожирение 3 ст')
// }
// alert(i)




