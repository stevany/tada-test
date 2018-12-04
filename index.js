const countName = (name) => {
  var n = ''
  for(var i = 0; i<name.length; i++) {
      n += name + ' '
  }
  console.log('name: ' + n)
}

const daysInMonth = (m, y) => {
  var date = new Date(y, m, 0).getDate()
  console.log('input month & year: ' + m +','+ y + ' => ' + date)
  return date
}
const printNumber = () => {
  var n = ''
  for (var i = 1; i<=100; i++) {
  	if(i % 3 === 0 && i % 5 === 0){
  	  n += 'MaxGood'
  	} else if( i % 3 === 0) {
      n += ' Max'
  	} else if(i % 5 === 0) {
  	  n += 'Good'
  	} else {
  	  n +=  i 
  	}
  	n += ' '
  }
  console.log(n)
}
const anagrams =  (stringA, stringB) => {
  var isAnagram = cleanString(stringA) === cleanString(stringB)
  console.log('input string: ' + stringA+ ',' + stringB + ' => ' + isAnagram)
} 
const cleanString = (str) => {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   

countName('maria')
daysInMonth('2', '2018')
printNumber()
anagrams('close', 'secol')
