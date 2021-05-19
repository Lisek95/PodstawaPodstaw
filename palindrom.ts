  
function palindrom(str: string) // funkcja palindrom 
{
  if (str.split('').reverse().join('') === str) // jeżeli str jest takie samo to prawda jeśli nie to fałsz
  {
      console.log(`${str} = palindrom`); // prawda = palindrom
  }
  else
  {
      console.log(`${str} ≠ palindrom`); // fałsz ≠ palindrom
  }
}
const test1: string = 'kbk'; // słowo
const test2: string = 'Czołg'; // słowo

palindrom(test1); // wyświetla wynik
palindrom(test2); // wyświetla wynik