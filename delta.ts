const tablica: number[] = [1,2,3,2,4,6];  /// dodaje tablice
const delta = (tablica[1]*tablica[1]) - (4*tablica[0]*tablica[2]);    /// jedno do kwadratu - to razy to drugie
console.log("Delta =: " + delta);   /// wynik

if (delta > 0) /// jeżeli delta większa od 0
{
    const x1 = (-tablica[1] - Math.sqrt(delta)) / (2 * tablica[0])
    const x2 = (-tablica[1] + Math.sqrt(delta)) / (2 * tablica[0])
    console.log("x1 = " + x1)
    console.log("x2 = " + x2)
}

if (delta === 0) /// jeżeli delta = 0
{
    const x0 = -tablica[1] / 2 * tablica[0];
    console.log("Delta ma jedno miejsce zerowe: " + x0)
}

if (delta < 0)   /// jeżeli delta mniejsza od 0
{
    console.log("delta nie ma miejsc zerowych);
}
