const tablica: number[] = [1,2,3,2,4,6];
const delta = (tablica[1]*tablica[1]) - (4*tablica[0]*tablica[2]);
console.log("Delta wynosi: " + delta);

if (delta === 0)
{
    const x0 = -tablica[1] / 2 * tablica[0];
    console.log("Delta ma jedno miejsce zerowe: " + x0)
}

if (delta > 0)
{
    const x1 = (-tablica[1] - Math.sqrt(delta)) / (2 * tablica[0])
    const x2 = (-tablica[1] + Math.sqrt(delta)) / (2 * tablica[0])
    console.log("x1 = " + x1)
    console.log("x2 = " + x2)
}

if (delta < 0)
{
    console.log("brak miejsc zerowych");
}