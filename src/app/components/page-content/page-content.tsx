import { Calculator } from "@/app/models/calculator";
import { Color } from "@/app/models/color";
import { Guess } from "@/app/models/guess";
import React, { useEffect, useState } from "react";
import { Row } from "../row/row";
import { Hint } from "../../models/hint";
import { SolutionHider } from "../solution-hider/solution-hider";
import { ColorBar } from "../color-bar/color-bar";
import styles from "./page-content.module.css";

export const PageContent: React.FC = (): React.ReactNode => {
  const calculator = new Calculator(4, false, false)
  const numberOfGuesses = 12;
  const [solution, setSolution] = useState<Color[]>([]);
  const [draggedColor, setDraggedColor] = useState<Color | undefined>(undefined);

  useEffect(() => {
    setSolution(calculator.generateSolution());
  }, [setSolution]);

  const initializeGuess = (): Color[] => {
    const newGuess: Color[] = [];

    for (let i = 0; i < calculator.numberOfPins; i++) {
      newGuess.push(Color.None);
    }

    return newGuess;
  }

  const [currentGuess, setCurrentGuess] = useState<Color[]>(initializeGuess());
  const [history, setHistory] = useState<Guess[]>([]);

  const pickColor = (index: number, color: Color): void => {
    const currentGuessColors = [...currentGuess];
    currentGuessColors[index] = color;
    setCurrentGuess(currentGuessColors);
  }

  const saveGuess = (): void => {
    const guess = calculator.guess(solution, currentGuess);

    setHistory([
      guess,
      ...history
    ]);

    setCurrentGuess(initializeGuess());
  }

  const renderBoard = (): React.ReactNode => {
    return (
      <div className={styles.board}>
        <SolutionHider />
        {renderSolution()}
        {renderGuesses()}
        <ColorBar onDragColorStart={setDraggedColor} />
      </div>
    );
  };

  const renderSolution = (): React.ReactNode => {
    return (
      <div className={styles.solution}>
        {renderPins(solution)}
      </div>
    );
  };

  const renderGuesses = (): React.ReactNode => {
    const guessRows: React.ReactNode[] = [];
    const emptyGuesses = numberOfGuesses - history.length - 1;

    for (let i = 0; i < emptyGuesses; i++) {
      guessRows.push(<div key={`${i}_guess`}>{renderPins()}</div>);
    }

    guessRows.push(
      <React.Fragment key="current_guess">
        <div key={"current_guess"}>{renderPins(currentGuess, [], true)}</div>
      </React.Fragment>
    );

    for (let i = 0; i < history.length; i++) {
      guessRows.push(<div key={`${i}_history`}>{renderPins(history[i].colors, history[i].hints)}</div>);
    }

    return (
      <div className={styles.guesses}>
        {guessRows}
      </div>
    );
  };

  const renderPins = (colors: Color[] = [], hints: Hint[] = [], current = false): React.ReactNode => {
    return <Row
      numberOfPins={calculator.numberOfPins}
      hints={hints}
      colors={colors}
      current={current}
      isValid={calculator.isValidGuess(currentGuess)}
      onColorSet={current ? pickColor : undefined}
      onGuess={saveGuess}
      draggedColor={current ? draggedColor : undefined} />
  };

  return (
    <div className={styles.pageContent}>
      {renderBoard()}
    </div>
  );
}