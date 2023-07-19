export const escondrijos = [' en un arbusto',' en un arbol hueco',' en una pequeña cueva',' debajo de una roca',' entre la maleza']
export const armas = ['pistola','cuchillo','granada','ballesta','bazuka','bate de metal','espada','hacha','machete','arco y flechas']
export const muertes = [' cosio a tiros a ',' acuchillo hasta la muerte a ',' revento con una granada a ',' mato de un tiro en el pecho a ',
  ' de un bazucazo a matado a ',' molio a batazos a ',' partio en dos con su espada a ',' le bolo la cabeza de un achazo a ',
  ' desmembro a machetazos a ',' mato de un tiro en la cabeza a ']

export function Personajes(){
    const categorias = {Anime:[
        {nombre: 'Deku', src: '/Anime/Deku.jpg', flag: false},
        {nombre: 'Goku', src: '/Anime/Goku.jpg', flag: false},
        {nombre: 'Luffy', src: '/Anime/Luffy.jpg', flag: false},
        {nombre: 'Naruto', src: '/Anime/Naruto.jpg', flag: false},
        {nombre: 'Ichigo', src: '/Anime/Ichigo.jpg', flag: false},
        {nombre: 'Asta', src: '/Anime/Asta.jpg', flag: false}
    ], Dibujo:[
        {nombre: 'Bob Esponja', src: '/Dibujo/Bob.jpg', flag: false},
        {nombre: 'Fry', src: '/Dibujo/Fry.jpg', flag: false},
        {nombre: 'Gumball', src: '/Dibujo/Gumball.jpg', flag: false},
        {nombre: 'Homero', src: '/Dibujo/Homero.jpg', flag: false}
    ]}
    return categorias
}

export function Datos(personajes) {
    const datos = personajes.map((personaje) => {
      return {
        ...personaje,
        salud: 100,
        equipo: 'sin equipo',
        botiquin: 0,
        arma: 'sus puños',
        lesion: 'ninguna',
        evento: '',
        interaccion: []
      };
    });
    return datos;
  }  