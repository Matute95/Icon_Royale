import React from "react";
import { useSpring } from "react-spring";
import { Datos, Personajes } from "../Data";
import { BottomBar, Button, CategoryContainer, CategoryDrawer, CategoryTittle, CharacterImage, CharacterItem, CharacterName, IslaImage, ModalContainer, TopBar } from "./componentes";
import { useNavigate } from "react-router-dom";

const Seleccion = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(true);
  const [categoria, setCategoria] = React.useState([]);
  const [prota, setProta] = React.useState({});
  const [isla, setIsla] = React.useState(false);
  const [participantes, setParticipantes] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(20);
  const [num, setNum] = React.useState("109");
  const [cate, setCate] = React.useState("");
  const [datos, setDatos] = React.useState(Personajes())
  const categorias = ['Anime','Dibujo','Influencer','Famoso','Mi carpeta']
  const islas = [{nombre:'Isla Boscosa', src:'/Isla/bosque.jpg'},{nombre:'Isla Volcanica', src:'/Isla/volcan.jpg'},{nombre:'Isla Invernal', src:'/Isla/invierno.jpg'}]
  
  const navigate = useNavigate()

  const coModal = () => setShowModal(!showModal);
  const coDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const modalProps = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0)" : "translateY(100%)",
  });

  const drawerProps = useSpring({
    left: isDrawerOpen ? "0" : "-200px",
  });

  const getColumns = () => {
    if (window.innerWidth <= 768) {
      return 3;
    } else {
      return 6;
    }
  };

  const columns = getColumns();

  const toggleCharacter = (character) => {
    setParticipantes((prevParticipantes) => {
      const isSelected = prevParticipantes.some((p) => p.nombre === character.nombre);
      if (isSelected) {
        return prevParticipantes.filter((p) => p.nombre !== character.nombre);
      } else {
        return [...prevParticipantes, character];
      }
    });
  
    setCategoria((prevCategoria) =>
      prevCategoria.map((prevCharacter) =>
        prevCharacter.nombre === character.nombre
          ? { ...prevCharacter, flag: !prevCharacter.flag }
          : prevCharacter
      )
    );
  };
  
  const handleCategoryChange = (newCategory) => {
    if (categoria.length !== 0) {
      setDatos((prevDatos) => ({
        ...prevDatos,
        [cate]: categoria,
      }));
    }
    setCate(newCategory)
    setCategoria(datos[newCategory]);
  };
  
  const random = () => {
    const cantidad = parseInt(sliderValue, 10);
    const personajesDisponibles = datos[cate].filter(
      (personaje) => !participantes.some((p) => p.nombre === personaje.nombre)
    );
    if (personajesDisponibles.length < cantidad) {
      alert("No hay suficientes personajes disponibles para la cantidad seleccionada.");
      return;
    }
    const personajesAleatorios = [];
    while (personajesAleatorios.length < cantidad) {
      const randomIndex = Math.floor(Math.random() * personajesDisponibles.length);
      const personajeAleatorio = personajesDisponibles[randomIndex];
      personajesAleatorios.push(personajeAleatorio);
      personajesDisponibles.splice(randomIndex, 1);
    }
    setParticipantes((prevParticipantes) => [...prevParticipantes, ...personajesAleatorios]);
    setCategoria((prevCategoria) =>
      prevCategoria.map((prevCharacter) =>
        personajesAleatorios.some((p) => p.nombre === prevCharacter.nombre)
          ? { ...prevCharacter, flag: true }
          : prevCharacter
      )
    );
    coModal();
  };
  return (
    <>
      <TopBar>{num==="109"?"Seleccionar Personajes":num==="100"?"Seleccionar Protagonista":"Seleccionar Mapa"}</TopBar>
      <CategoryDrawer
        isOpen={isDrawerOpen}
        style={drawerProps}
        onClick={coDrawer}
      >
        <CategoryTittle num={num}>
          Categorías
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            {isDrawerOpen ? "◄" : "►"}
          </strong>
        </CategoryTittle>
        {categorias.map((cat) => (
          <Button key={cat} onClick={() => { handleCategoryChange(cat); coDrawer(); }}>
            {cat}
          </Button>
        ))}
      </CategoryDrawer>
      <div>
        {num==="99"?
        <CategoryContainer>
          {islas.map((character) => (
            <CharacterItem key={character.nombre} columns={1}>
              <IslaImage
                src={character.src}
                alt={`Personaje ${character.nombre}`}
                selected={character.nombre==='Isla Boscosa'&&isla}
                onClick={()=>{character.nombre==='Isla Boscosa'&&setIsla(!isla)}}
                style={{
                  width: columns === 3 ? "100%" : "30%",
                  margin: columns === 3 ? "0 auto" : "0 35%",
                }}
              />
              <CharacterName>{character.nombre}</CharacterName>
            </CharacterItem>
          ))}
        </CategoryContainer>:
        <CategoryContainer>
          {categoria.map((character) => (
            <CharacterItem key={character.nombre} columns={columns}>
              <CharacterImage
                src={character.src}
                alt={`Personaje ${character.nombre}`}
                selected={num==="109"?character.flag:character===prota}
                onClick={() => {num==="109"?toggleCharacter(character):prota!==character?setProta(character):setProta({})}}
              />
              <CharacterName>{character.nombre}</CharacterName>
            </CharacterItem>
          ))}
        </CategoryContainer>
        }
      </div>
      <ModalContainer
        style={modalProps}
        isOpen={showModal}
        onRequestClose={coModal}
      >
        <div>
          <p>Cantidad: {sliderValue}</p>
          <input
            type="range"
            min={1}
            max={50}
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <Button onClick={coModal}>Cancelar</Button>
          <Button onClick={random}>Aceptar</Button>
        </div>
      </ModalContainer>
        {num==="109"?
          <BottomBar>
            <Button style={{ width: "50%", height: "100%" }} onClick={coModal}>
              Random
            </Button>
            <Button style={{ width: "50%", height: "100%" }} onClick={()=>{
              if (participantes.length<3){
                alert("Debe seleccionar almenos 10 participantes.")}
              else{
                setNum("100")
                setDatos((prevDatos) => ({...prevDatos,[cate]: categoria}))
                setCategoria(participantes)}}}>
              Siguiente
            </Button>
          </BottomBar>:num==="100"?
          <BottomBar>
          <Button style={{ width: "50%", height: "100%" }} onClick={()=>{setNum("109"); setCategoria([]); coDrawer();}}>
            Atras
          </Button>
          <Button style={{ width: "50%", height: "100%" }} onClick={()=>setNum("99")}>
            Siguiente
          </Button>
          </BottomBar>:
          <BottomBar>
          <Button style={{ width: "50%", height: "100%" }} onClick={()=>{setNum("100")}}>
            Atras
          </Button>
          <Button style={{ width: "50%", height: "100%" }} onClick={()=>{
            if (!isla) {
              alert("Debe seleccionar un mapa.");
            } else {
              participantes.filter((p) => p.nombre !== prota.nombre)
              participantes.push(prota)
              const demas = Datos(participantes)
              const pro = demas.pop()
              navigate("/Desicion", {
                state: { prota: pro, participantes: demas, dia:1 },
              });
            }
          }}>
            Comenzar
          </Button>
          </BottomBar>
        }
    </>
  );
};

export default Seleccion;