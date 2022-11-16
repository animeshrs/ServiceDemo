import React from "react";
import { Header } from "semantic-ui-react";

export interface FormHeaderProps {
  headerText: string;
}

const FormHeader = ({ headerText }: FormHeaderProps) => {
  return <Header as="h2">{headerText}</Header>;
};

export default FormHeader;
