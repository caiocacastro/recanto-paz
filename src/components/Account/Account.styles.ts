import {
  Box,
  IconButton,
  IconButtonProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  margin: 4px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

export const User = styled.span`
  display: inline-block;
  margin: 8px 4px 8px 8px;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 600px;
  background-color: #e2e2e2;
  border-radius: 4px;
  display: flex;
  outline: 0;
`;

export const ModalImageArea = styled.div`
  flex: 1.5;
  background-color: #0b0a0a12;
`;

export const ModalFieldArea = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled(IconButton)<IconButtonProps>`
  position: absolute !important;
  right: 0;
  top: 0;
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Login = styled.div`
  align-self: flex-end;
  margin-top: 24px;
`;

export const LogoTitle = styled.span`
  font-family: "Varela Round";
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LoginField = styled(TextField)<TextFieldProps>`
  margin-bottom: 8px !important;
`;
