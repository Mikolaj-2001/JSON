let pracownicyLista = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

pracownicyLista.pracownicy.forEach((pracownik,index) => {
    console.log(`Imię pracownika: ${pracownik.firstName} z nazwiskiem: ${pracownik.lastName} mający indeks: ${index}`)
});