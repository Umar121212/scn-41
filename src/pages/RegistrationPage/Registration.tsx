import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Heading } from "../../typography/Heading";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import { LinkButton } from "../../components/ui/LinkButton/LinkButton";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";
import { Paragraph } from '../../typography/Paragraph'

export const RegistrationPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      userName: ''
    }
  })

  const onSubmit: SubmitHandler<any> = data => console.log(data);

    return (
      <LayoutContainer>
        <div className="LoginPage">
          <Heading type="h1" headingText="Регистрация" />
          <form onSubmit={handleSubmit(onSubmit)} >
            <Controller name="userName" control={control} render={({ field }) => 
            <AppInput 
              type="text" 
              placeholder="Имя и Фамилия" 
              isDisabled={false} 
              {...field} 
              />       
            }/>
            
            <AppInput type="tel" placeholder="Номер телефона" isDisabled={false} />
            <AppInput type="password" placeholder="Пароль" isDisabled={false} />
            <AppButton type="submit" buttonText="Войти" isPrimary />
          </form>
          <LinkButton to='/' linkText="Зарегестрироваться" />
          {/* <Paragraph text="Уже зарегестрировались?" /> */}
        </div>
      </LayoutContainer>
    );
  };