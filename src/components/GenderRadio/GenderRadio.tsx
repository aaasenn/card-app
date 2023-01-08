import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux/es";
import { IUser } from "../../store/user/types";
import { editBioProp } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export const GenderRadio = () => {
  const { sex } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleChange = (e: React.BaseSyntheticEvent) => {
    dispatch(editBioProp({
      sex: e.target.value
    } as IUser))
  }

  return (
    <FormControl fullWidth>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={sex}
        name="radio-buttons-group"
        sx={{alignSelf: 'center'}}
        onChange={handleChange}
      >
        <FormControlLabel value='f' control={<Radio />} label="Female" />
        <FormControlLabel value="m" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};
