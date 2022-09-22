import styled from "styled-components";
import { GREY_12, PRIMARY_BLUE } from "src/constants";

export const SecondaryBarStyle = {
  Container: styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${GREY_12};
    padding: 0 24px;
    background-color: white;
  `,
  Title: styled.h1`
    font-size: 18px;
    color: ${PRIMARY_BLUE};
  `,
};
