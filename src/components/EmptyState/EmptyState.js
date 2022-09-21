import React from "react";
import { EmptyStateStyle as S } from "./EmptyState.style";

export const EmptyState = ({ data = [], text = "" }) => {
  return !data.length && <S.Container>{text}</S.Container>;
};
