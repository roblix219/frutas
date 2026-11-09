const frutas = []; 

for (let m = 0; m < 7; m++) {
    let entrada = prompt("Ingrese una fruta:");
    // 2. Add the input to the array
    frutas.push(entrada); 
}

// 3. Access the 'frutas' array outside the loop
console.log("Lista de frutas:", frutas);
// 4. Sort the array (note: sort() modifies the original array)
console.log("Frutas ordenadas: " + frutas.sort().join(", "));