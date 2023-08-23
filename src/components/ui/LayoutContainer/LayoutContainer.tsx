import React from "react";
import { Container } from "./LayoutContainer.style";

type LayoutContainerProps = {
  children: any
}

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <Container>{children}</Container>
  )
}