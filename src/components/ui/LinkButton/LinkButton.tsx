import React from "react";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  linkText: string
  to: string
}

export const LinkButton = ({ linkText, to }: LinkButtonProps) => {
  return (
    <Link to={to}>{linkText}</Link>
  )
}