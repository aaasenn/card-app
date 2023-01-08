import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";
import { Wrapper } from "./Card.styled";
import { IWord } from "../../constants/wordsArray";


const CardExample = ({ motivation, word, example, translation, id }: IWord) => {
  const [isFrontSide, setSide] = React.useState<boolean>(true);

  const handleClick = () => {
    setSide((p) => !p);
  };

  return (
    <div>
      <AnimatePresence>
        {isFrontSide && (
          <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Wrapper>
              <div className="card-title">{motivation}</div>
              <div className="card-word">{word}</div>
              <div className="card-example">{example}</div>
              <div className="card-actions">
                <Button onClick={handleClick} variant={"outlined"}>
                  Learn more
                </Button>
              </div>
            </Wrapper>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isFrontSide && (
          <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ type: "spring", duration: 1 }}
            onClick={handleClick}
          >
            <Wrapper>{translation}</Wrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardExample;
