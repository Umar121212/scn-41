//@ts-nocheck
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "./LoginPage.scss";
import { Heading } from "../../typography/Heading";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import { LinkButton } from "../../components/ui/LinkButton/LinkButton";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";

// type FormInputs = {
//   TextInput: string

// }

export const LoginPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      userPhone: ''
    }
  })

  const onSubmit: SubmitHandler<any> = data => console.log(data);

  return (
    <LayoutContainer>
      <div className="LoginPage">
        <Heading type="h1" headingText="Авторизация" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller name="userPhone" control={control} render={({ field }) => 
            <AppInput 
              type="tel" 
              placeholder="Номер телефона" 
              isDisabled={false} 
              {...field}
            />
          }/>
          <AppInput type="password" placeholder="Пароль" isDisabled={false} />
          <AppButton type="submit" buttonText="Войти" isPrimary />
        </form>
        <LinkButton to='registration' linkText="Забыли пароль?" />
        <RegistrationInfo />
      </div>
    </LayoutContainer>
  );
};