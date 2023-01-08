import { Wrapper } from "./Profile.styled";
import Field from "../Field/Field";
import { GenderRadio } from "../GenderRadio/GenderRadio";
import { SwitchComponent } from "../SwitchComponents/SwitchComponent";
import { useSelector } from "react-redux/es/exports";
import {
  selectUser,
} from "../../store/user/selectors";

const ProfileContent = () => {
  const { name, surname, dateOfBirth, prefferebleEnglish, numberOfDisplayedWords} = useSelector(selectUser);

  return (
    <Wrapper>
      <div className="profile_bio">
        <Field label={"Name"} definedProp={"name"} defaultValue={name} />
        <Field
          label={"Surname"}
          definedProp={"surname"}
          defaultValue={surname}
        />
        <Field
          label={"Число отображаемых на странице слов от 1 до 10"}
          type={"number"}
          min={1}
          max={10}
          definedProp={"numberOfDisplayedWords"}
          defaultValue={numberOfDisplayedWords}
        />
        <Field
          label="Дата рождения"
          definedProp={"dateOfBirth"}
          defaultValue={dateOfBirth}
          type={"date"}
        />
        <Field
          select
          definedProp={"prefferebleEnglish"}
          label={"Выберите англйиский"}
          defaultValue={prefferebleEnglish}
        />
        <GenderRadio />
        <SwitchComponent />
      </div>
    </Wrapper>
  );
};

export default ProfileContent;
