import { armas, escondrijos } from "../Data"

var alianza=0
var p={}
var d=[]
const eventos1 = [escapar(), cantar(), suicidarse(), arma(), patrocinado()]
const eventos2 = [matar(), trampa(), enfermedad(), animales(), medicina(), veneno()]
const eventos3 = [aliarse(), caza(), explorar(), pezca(), esconderse(), pasar()]

export function batalla(prota, accion, demas){ 
  d=demas.sort(function() { return Math.random() - 0.5 })
  const mostrar = []
  if(prota!=''){
    p=prota
    mostrar.push(p)
  }
  while (d.length) {
    mostrar.push(p)
    p = d.pop()
    /*const rnd = Math.random()
    if(p.salud===0){
      p.evento=p.nombre+' ha muerto por '+p.lesion
    }else if (rnd<=0.25){ //25%
      eventos1[Math.floor(Math.random()*eventos1.length)]
    }else if(rnd<=0.6){ //35%
      eventos2[Math.floor(Math.random()*eventos2.length)]
    }else{ //40%
      eventos3[Math.floor(Math.random()*eventos3.length)]
    }*/
  }
  return mostrar
}

export function escapar(){
  if(Math.random()>0.3){
    p.evento=p.nombre+' intento escapar de la isla y ha muerto en el intento'
  }else{
    p.evento='De alguna forma '+p.nombre+ ' consiguio escapar de la isla'
  }
  p.salud=0
}

export function aliarse(){/*
  if(d.length) {
    p.evento = p.nombre + ' intento buscar aliados pero nadie le hizo caso'
  }else {
    const rnd=d.pop()
    if (Math.random()<=0.5) { //50%
      if(p.equipo === 'sin equipo'){
        if (rnd.equipo === 'sin equipo') {
          alianza++
          rnd.equipo = alianza.toString()
          p.equipo = alianza.toString()
          p.evento = p.nombre+' ha formado equipo con '+rnd.nombre+' ahora son el equipo '+alianza.toString()
        } else {
          p.equipo = rnd.equipo;
          p.evento = p.nombre+' ha sido reclutado por '+rnd.nombre+', ahora forma parte del equipo '+p.equipo
        }
      }else{
        if(p.equipo === 'sin equipo'){
          if (rnd.equipo === 'sin equipo') {
            rnd.equipo = p.equipo
            p.evento = p.nombre+' ha reclutado a '+rnd.nombre+' para el equipo '+p.equipo
          } else {
            p.equipo = rnd.equipo
            p.evento = p.nombre+' y '+rnd.nombre+' han convencido a sus equipos de formar una alianza, ahora son el equipo '+p.equipo
          }
      }
    }
    }else {
      p.evento = p.nombre+' intento aliarse con '+rnd.nombre+' pero '+rnd.nombre+' le ha matado'
      p.salud = 0
    }
    p.interaccion.push(rnd)
  }*/return
}

export function matar(){
  if(d.length) {
    p.evento=p.nombre+' ha conseguido matar a todos y ha ganado el juego... o eso pensaba pero todo fue sueño'
  }else{
    /*const rnd=d.pop()
    if (p.arma != 'sus puños') {
      let nombre=rnd.nombre
      let arr=[rnd]
      arr[0].salud=0
      if(p.arma==='bazuka' || p.arma==='granada'){
        arr.push(d.pop())
        arr[1].salud=0
        nombre=arr[0].nombre+' y '+arr[1].nombre
        if(d.length>1){
        arr.push(d.pop())
        arr[2].salud=0
        nombre=arr[0].nombre+', '+arr[1].nombre+' y '+arr[2].nombre
        }
      }
      //p.evento = p.nombre + muertes[armas.indexOf(p.arma)] + nombre
      p.interaccion = arr
    } else {
      if (Math.random()<=0.3) { //30%
        p.evento = p.nombre + ' mato a puñetazos a' + rnd.nombre
        rnd.salud = 0
      } else { //70%
        p.evento = p.nombre+' intento matar a '+rnd.nombre+' pero no lo ha conseguido\n'
        //rnd.arma!='sus puños' ?
        //p.evento+=rnd.nombre + muertes[armas.indexOf(p.arma)] + p.nombre :
        p.evento+=rnd.nombre + ' golpeo hasta la muerte a ' + p.nombre
        p.salud = 0
      }
      p.interaccion.push(rnd)
    }*/
    return
  }
}

export function trampa(auxiliar){/*
  if(auxiliar.isEmpty) {//auxiliar no es parametro
    p.evento=p.nombre+' ha puesto trampas en el bosque y consiguio algo de carne';
  }else{
    const rnd=d.pop()
    if (Math.random()<=0.4 || rnd.lesion !== 'ninguna') { //40%
      p.evento = p.nombre+' le ha puesto una trampa a '+rnd.nombre+' y ha conseguido matarle'
      rnd.salud = 0
    } else { // 60%
      p.evento = p.nombre+' le ha puesto una trampa a '+rnd.nombre +' pero no consiguio matarle\n'+ 
      rnd.nombre +' tiene heridas abiertas'
      rnd.lesion = 'hemorragia'
    }
    p.interaccion.push(rnd)
  }*/return
}
//implementar variable suministros, cazar da 3 de comida y pezcar 2, se puede morir de anemia
export function caza(){
  if(Math.random()<=0.4){ //40%
    p.arma=armas[Math.floor(Math.random()*armas.length)]
    p.evento=p.nombre+' salio a recolectar comida y se ha encontrado 1 '+p.arma+escondrijos[Math.floor(Math.random()*escondrijos.length)]
  }else if(Math.random()<=0.8){ // 40%
    p.lesion='hemorragia'
    p.evento=p.nombre+' salio a recolectar comida pero fue ataco por animales salvajes\n'+p.nombre+' tiene heridas abiertas'
  }else{ // 20%
    p.evento=p.nombre+' salio a recolectar comida y conseguido algo de fruta'
  }
}

export function explorar(){
  if(Math.random()<=0.2){ // 20%
    p.arma=armas[Math.floor(Math.random()*armas.length)]
    p.evento=p.nombre+' salio a explorar el bosque y ha encontrado 1 '+p.arma+escondrijos[Math.floor(Math.random()*escondrijos.length)]
  }else if(Math.random()<=0.5){ // 30%
    p.botiquin++
    p.evento=p.nombre+' salio a explorar el bosque y ha encontrado hiervas medicinales'
    if(p.lesion!='ninguna'){
      p.evento+='\n las ha usado para tratar su '+p.lesion
      p.lesion='ninguna'
      p.botiquin--
    }
  }else if(Math.random()<=0.8){ // 30%
    p.lesion='hemorragia'
    p.evento=p.nombre+' salio a explorar el bosque y fue atacado por animales salvajes\n'+p.nombre+' tiene heridas abiertas'
  }else{ // 20%
    p.evento=p.nombre+' salio a explorar el bosque pero no ha encontrado nada'
  }
}

export function pezca(){
  if(Math.random()<=0.5){
    p.botiquin++;
    p.evento=p.nombre+' fue de pezca y ha encontrado hiervas medicinales en la orilla'
    if(p.lesion!='ninguna'){
      p.evento+='\n ha usado la medicina para tratar su '+p.lesion
      p.lesion='ninguna'
      p.botiquin--
    }
  }else if(Math.random()<=0.75){
    p.lesion='envenenamiento'
    p.evento=p.nombre+' ha pizado un animal ponzoñoso en el rio y le ha mordido\n'+p.nombre+' ha sido envenenado'
  }else{
    p.evento=p.nombre+' ha conseguido atrapar algunos peces'
  }
}

export function cantar(){
  if(alianza>0){
    p.equipo=alianza
    p.evento=p.nombre+' se puso a cantar y ha conmovido los corazones del equipo '+alianza.toString()+'\n'
    +p.nombre+'ahora forma parte del equipo '+alianza.toString()
  }
  p.evento=p.nombre+' se ha puesto a cantar pero nadie le ha oido'
}

export function esconderse(){
  p.evento=p.nombre+' se ha escondido'+escondrijos[Math.floor(Math.random()*escondrijos.length)]+' y no ha salido en todo el dia'
}

function suicidarse(){
  p.salud=0
  p.evento=p.nombre+' no pudo soportar la situacion y se ha suicidado'
}

function arma(){
  p.arma=armas[Math.floor(Math.random()*armas.length)]
  p.evento=p.nombre+' se ha encontrado 1 '+p.arma+escondrijos[Math.floor(Math.random()*escondrijos.length)]
}

function veneno(){
  if(p.botiquin>1){
    p.evento=p.nombre+' ha sido mordido por un animal pozoñoso y ha usado la medicina que tenia para tratar el veneno'
    p.botiquin--
    p.evento+='\n medicinas -1'
  }
  p.evento=p.nombre+' ha sido mordido por un animal pozoñoso \n'+' necesita medicina para tratar el veneno'
  p.lesion='envenenamiento'
}

function medicina(){
  p.botiquin++
  p.evento=p.nombre+' ha encontrado algo de medicina'+escondrijos[Math.floor(Math.random()*escondrijos.length)]
  if(p.lesion!='ninguna'){
    p.evento+='\n la ha usado para tratar su '+p.lesion
    p.lesion='ninguna'
    p.botiquin--
  }
}

function animales(){
  if(p.botiquin>1){
    p.evento=p.nombre+' fue atacado por animales salvajes y uso las hiervas medicinales que tenia para tratar las heridas'
    p.botiquin--
    p.evento+='\n medicinas -1'
  }
  p.evento=p.nombre+' ha sido atacado por animales salvajes\n'+' necesita medicina para tratar sus heridas'
  p.lesion='hemorragia'
}

function pasar(){
  const cc=[' se paso todo el dia hablando con una roca',' aprovecho el dia para ejercitarse',' ha llorado todo el dia',
  ' se paso el dia viendo la batalla entre unas hormigas y una mantis',' ha pasado el dia jugando con los animales del bosque']
  p.evento=p.nombre+cc[Math.floor(Math.random()*cc.length)]
}

function enfermedad(){
  p.evento=p.nombre+' comio algo en mal estado y tiene una fuerte diarrea'
  p.lesion='disenteria'
}

function patrocinado(){
  p.arma=armas[Math.floor(Math.random()*armas.length)]
  p.evento=p.nombre+' ha comprado el juego y ha recibido 1 '+p.arma+' autografiada por el creador del juego'
}