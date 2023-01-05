// 1. Créez un tableau dont la valeur est les planètes du système solaire.
let planets = [{nom_planet: 'Mercure',nombre_lune: 1},{nom_planet: 'Vénus',nombre_lune: 2},{nom_planet: 'Terre',nombre_lune: 3},{nom_planet: 'Mars',nombre_lune: 4,},{nom_planet: 'Ceres',nombre_lune: 10}, {nom_planet: 'Jupiter',nombre_lune: 3,}, {nom_planet: 'Saturne',nombre_lune: 7}, {nom_planet: 'Uranus',nombre_lune: 4}, {nom_planet: 'Neptune',nombre_lune: 4}, {nom_planet: 'Pluton',nombre_lune: 8}, {nom_planet: 'Charon',nombre_lune: 14}]
// 2. Pour chaque planète du tableau, créez un <div>fichier using createElement. Cette div doit avoir une classe nommée "planet".
// 3. Chaque planète doit avoir une couleur de fond différente. ( Astuce : vous pouvez ajouter une nouvelle classe à chaque planète - chaque classe contenant une couleur de fond différente).
planets.forEach(planet => {
    let Div = document.createElement('div')
    Div.classList.add('planet')
    Div.textContent = planet.nom_planet
    Div.style.backgroundColor = Div.style.backgroundColor = 'rgb(' + [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)].join(', ') + ')'
    // 4. Finally append each div to the <section> in the HTML (presented below)
    document.querySelector('section').appendChild(Div)
    // 5. Bonus: Do the same process to create the nombre_lune. 
    if (planet.nombre_lune >= 1) {
        let lune_D = document.createElement('div')
        lune_D.classList.add('lune')
        lune_D.textContent = planet.nombre_lune > 1 ? planet.nombre_lune.toString() : ''
        Div.appendChild(lune_D)
    }
})