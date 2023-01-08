import { useSelector } from "react-redux";
import { Wrapper } from "./CardList.styled";
import CardExample from "../Card/CardExample";
import { words } from "../../constants/wordsArray";
import { selectUser } from "../../store/user/selectors";

const Content = () => {
  const { numberOfDisplayedWords } = useSelector(selectUser);
  const slicedWords = words.slice(0, numberOfDisplayedWords);

  return (
    <Wrapper>
      {slicedWords.map((word) => (
        <CardExample
          key={word.id}
          id={word.id}
          motivation={word.motivation}
          word={word.word}
          example={word.example}
          translation={word.translation}
        />
      ))}
    </Wrapper>
  );
};

export default Content;
