import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller, Control } from "react-hook-form";
import { LoginValues } from "../../types/rhf";

interface IPasswordField {
  control: Control<LoginValues, any>;
  name: keyof LoginValues;
}

const PasswordField = ({ control, name }: IPasswordField) => {
  const [showPass, setShowPass] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPass((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <OutlinedInput
            id="outlined-adornment-password"
            {...field}
            type={showPass ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        )}
      />
    </FormControl>
  );
};

export default PasswordField;
