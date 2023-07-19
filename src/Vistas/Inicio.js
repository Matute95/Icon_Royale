import React from 'react';
import { useSpring } from 'react-spring';
import { ButtonWithAnimation, Container, Logo } from './componentes';

const Inicio = () => {
  const logoProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });

  return (
    <Container>
      <Logo style={logoProps} src="/logo.png" alt="Logo" />
      <ButtonWithAnimation buttonText="Empezar" destination="/Seleccion"/>
      <ButtonWithAnimation buttonText="Opciones" destination="/destino"/>
      <ButtonWithAnimation buttonText="Comprar" destination="/destino"/>
      <ButtonWithAnimation buttonText="Salir" destination="/destino"/>
    </Container>
  );
};

export default Inicio;