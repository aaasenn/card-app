import React from "react";
import {
  FormControl,
  FormControlLabel,
  Switch,
  FormLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import { IMarks, marks } from "../../constants/marksSlider";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux/es";
import { IUser } from "../../store/user/types";
import { editBioProp } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";


function valuetext(value: number) {
  return `${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark: IMarks) => mark.value === value) + 1;
}

export const SwitchComponent = () => {
  const {englishLevel, isDynamicDifficulty} = useSelector(selectUser)
  const dispatch = useDispatch();

  function handleSwitchChange(e: React.BaseSyntheticEvent) {
    dispatch(editBioProp({
      isDynamicDifficulty: e.target.checked
    } as IUser))
  }

  function handleSliderChange(e: Event | React.BaseSyntheticEvent, value: number | number[]) {
    dispatch(editBioProp({
      englishLevel: value
    } as IUser))
  }

  return (
    <FormControl sx={{ mt: 2 }} component={"fieldset"} variant={"standard"}>
      <FormLabel component={"legend"}>
        Включить динамический подбор слов в зависимости от вашего уровня
        Английского
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          onChange={handleSwitchChange}
          control={<Switch defaultChecked name="tumbler" />}
          label="Включить"
          sx={{ alignSelf: "center" }}
        />
      </FormGroup>
      <FormGroup sx={{ mt: 1 }}>
        <AnimatePresence>
          {isDynamicDifficulty && (
            <motion.div
              initial={{ y: 40, opacity: 0}}
              animate={{ y: 0, opacity: 1}}
              exit={{ y: -20, opacity: 0}}
            >
              <FormLabel>Выберите уровень</FormLabel>
              <Slider
                key={`slider-${englishLevel}`}
                aria-label="English values"
                defaultValue={englishLevel}
                onChangeCommitted={handleSliderChange}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={20}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </FormGroup>
    </FormControl>
  );
};
