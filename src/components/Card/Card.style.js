import styled from "styled-components";
import { PRIMARY_BLUE, BLUE_08, GREY_12 } from "../../constants";

export const CardStyle = {
  Container: styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${GREY_12};
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      border: 1px solid ${PRIMARY_BLUE};
      background-color: ${BLUE_08};
    }
  `,
  CardsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  Title: styled.h1`
    font-size: 18px;
    color: ${PRIMARY_BLUE};
  `,
  IconContainer: styled.div`
    margin-bottom: 10px;
  `,
};
