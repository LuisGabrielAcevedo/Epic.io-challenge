import React from "react";
import { SecondaryBarStyle as S } from "./SecondaryBar.style";

export const SecondaryBar = ({ title = "" }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
