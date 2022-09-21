import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

export const CameraFormStyle = {
  Footer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  CancelButton: styled(Button)`
    margin-right: 8px;
  `,
  FormControl: styled(FormControl)`
    margin-bottom: 20px;
  `,
};
