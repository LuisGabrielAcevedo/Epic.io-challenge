import React from "react";
import { SecondaryBar } from "../SecondaryBar/SecondaryBar";
import { ContentLayoutStyle as S } from "./ContentLayout.style";

export const ContentLayout = ({ title = "", children }) => {
  return (
    <S.Container>
      <SecondaryBar {...{ title }} />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
