import React from "react";
import { Button } from "./AppButton.style";

type AppButtonProps = {
  buttonText: string
  isPrimary?: boolean
  isSecondary?: boolean
  type: "button" | "submit" | "reset" | undefined
}

export const AppButton = ({ buttonText, isPrimary, isSecondary, type}: AppButtonProps) => {
  return (
    <Button 
        isPrimary={isPrimary} 
        isSecondary={isSecondary}
        type={type}
      >
        {buttonText}
    </Button>
  )
}