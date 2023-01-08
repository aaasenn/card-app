import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, Resolver } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import PasswordField from "../../PasswordField/PasswordField";
import { Wrapper } from "./LoginPage.styled";
import { LoginValues } from "../../../types/rhf";
import { loginSchema } from "../../../schema";

const LoginPage = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState, setError } = useForm<LoginValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  const { errors, isValid } = formState;

  const onSubmit = (values: LoginValues) => {
    if (values.username === "admin" && values.password === "admin") {
      localStorage.setItem("authToken", "1111");
      navigate("/");
    } else {
      setError("username", {
        type: "custom",
        message: "Нет такого пользователя",
      });
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">Введите данные для входа</div>
        <div className="username">
          <Controller
            name={"username"}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Логин"
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            )}
          />
        </div>
        <div className="password">
          <PasswordField control={control} name={"password"} />
        </div>
        <div className="actions">
          <Button disabled={!isValid} variant="contained" type="submit">
            login
          </Button>
          <Button color="secondary">Cancel</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
