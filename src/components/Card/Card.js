import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CardStyle as S } from "./Card.style";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import CameraIcon from "@material-ui/icons/Camera";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export const Card = ({ title = "", path = "", icon = "" }) => {
  const navigate = useNavigate();
  const goTo = () => path && navigate(path);

  const getIcon = useCallback(() => {
    const icons = {
      home: HomeIcon,
      store: StoreIcon,
      camera: CameraAltIcon,
      types: CameraIcon,
      inventory: ViewModuleIcon,
    };
    return icons[icon] || ViewModuleIcon;
  }, [icon]);

  const IconComponet = getIcon();

  return (
    <S.Container onClick={goTo}>
      <S.IconContainer>
        <IconComponet style={{ fontSize: 60 }} />
      </S.IconContainer>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export const CardsContainer = ({ children }) => {
  return <S.CardsContainer>{children}</S.CardsContainer>;
};
