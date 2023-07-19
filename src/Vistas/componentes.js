import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Button = styled(animated.button)`
  background-color: #FF530D;
  color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid white;
`;

export const Logo = styled(animated.img)`
  width: 200px;
  height: auto;
`;

export const TopBar = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #ff530d;
  color: white;
  font-size: 24px;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: bold;
`;

export const CategoryDrawer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-200px")};
  width: 200px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  transition: left 0.1s ease;
  display: flex;
  flex-direction: column;
`;

export const CategoryTittle = styled.div`
  width: ${({ num }) => num + "%"};
  margin: 10px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0);
  font-size: 26px;
  cursor: pointer;
  height: 50px;
  text-align: center;
  font-weight: bold;
`;

export const CategoryContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CharacterItem = styled.div`
  width: calc(100% / ${({ columns }) => columns} - 10px);
  margin: 5px;
`;

export const IslaImage = styled.img`
  height: 2.8cm;
  border: ${({ selected }) => (selected ? "5px solid blue" : "none")};
`;

export const CharacterImage = styled.img`
  width: 2.8cm;
  height: 2.8cm;
  border: ${({ selected }) => (selected ? "5px solid blue" : "none")};
  cursor: pointer;
`;

export const CharacterName = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  z-index: 2;
`;

export const ModalContainer = styled(animated.div)`
  position: absolute;
  top: 65%;
  left: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

 export const ButtonWithAnimation = ({ buttonText, destination }) => {
    const [isPressed, setPressed] = useState(false);
    const navigate = useNavigate();
  
    const buttonProps = useSpring({
      scale: isPressed ? 0.95 : 1,
      config: { tension: 300, friction: 20 },
    });
  
    const handleButtonPress = () => {
      setPressed(true);
      const audio = new Audio('/boton.mp3');
      audio.play();
    };
  
    const handleButtonRelease = () => {
      setPressed(false);
    if (destination) {
        navigate(destination);
    }
    };
  
    return (
      <Button
        style={{ ...buttonProps, transform: buttonProps.scale.to((s) => `scale(${s})`) }}
        onMouseDown={handleButtonPress}
        onMouseUp={handleButtonRelease}
      >
        {buttonText}
      </Button>
    );
  };
  