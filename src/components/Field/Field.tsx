import React from "react";
import { TextField, Box, MenuItem } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { countries } from "../../constants/selectOptions";
import { useDispatch } from "react-redux/es";
import { IUser } from "../../store/user/types";
import { editBioProp } from "../../store/user/actions";

type IField = {
  definedProp: keyof IUser;
  min?: number;
  max?: number;
} & TextFieldProps;

const Field = ({
  label,
  defaultValue,
  type,
  max,
  min,
  select,
  definedProp,
}: IField) => {
  const [isEdit, setEdit] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit((state) => !state);
  };

  const handleBlur = (e: React.BaseSyntheticEvent) => {
    if (isEdit) setEdit(false);

    dispatch(
      editBioProp({
        [definedProp]: e.target.value,
      } as IUser)
    );
  };

  const handleNumberChange = (e: React.BaseSyntheticEvent) => {
    if (type === "number") {
      if (max && e.target.value > max) {
        e.target.value = max;
      }

      if (min && e.target.value < min) {
        e.target.value = min;
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 2,
      }}
    >
      <TextField
        fullWidth
        select={select}
        type={type}
        label={label}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        disabled={!isEdit}
        inputProps={{ min, max }}
        inputRef={(input) => input && input.focus()}
        onChange={handleNumberChange}
      >
        {select &&
          countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <Button variant="outlined" onClick={handleEdit}>
        {isEdit ? <DoneIcon /> : <EditIcon />}
      </Button>
    </Box>
  );
};

export default Field;
