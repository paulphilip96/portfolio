import React, { useState, useRef, useEffect } from "react";
import { Button, Input } from "antd";
import { toast } from "react-toastify";
import * as randomWords from "random-words";

import { STATUS_CODES } from "../../Constants/API";
import type { HighScore } from "../../Types/TypingTestTypes";
import TypingTestApi from "../../API/TypingTestAPI";
import HighScoresTable from "./Components/HighScoresTable/HighScoresTable";

import "./TypingTest.scss";


const TypingTest = () => {
  
  // Typing test states
  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [typedInput, setTypedInput] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);
  const [correctWords, setCorrectWords] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  // Data source states
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<HighScore[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getDataSource();
  }, [])

  const getDataSource = async (): Promise<void> => {
    setLoading(true);
    const response = await TypingTestApi.getAllData();

    if (response.statusCode !== STATUS_CODES.OK) toast.error("There was an error retrieving the high scores.");
    else if ((response.statusCode === STATUS_CODES.OK) && response.data) setDataSource(response.data);
    setLoading(false);
  }
  
  const startTest = () => {
    const words = randomWords.generate(25) as string[]; 

    setWords(words);
    setStarted(true);
    setCurrentWordIndex(0);
    setTypedInput("");
    setStartTime(null);
    setEndTime(null);
    setCompleted(false);
    setCorrectWords(0);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) setStartTime(Date.now());
    setTypedInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault(); // prevent space/enter in input box

      // Check if typed word is correct
      if (typedInput.trim() === words[currentWordIndex]) {
        setCorrectWords(prev => prev + 1);
      }

      const nextIndex = currentWordIndex + 1;
      if (nextIndex >= words.length) {
        setEndTime(Date.now());
        setCompleted(true);
      } 
      else {
        setCurrentWordIndex(nextIndex);
        setTypedInput(""); // clear input for next word
      }
    }
  };

  const calculateWPM = (): number => {
    if (!startTime || !endTime) return 0;
    const minutes = (endTime - startTime) / 1000 / 60;
    return Math.round(correctWords / minutes);
  };

  const calculateAccuracy = (): number => Math.round((correctWords / words.length) * 100);

  const onSaveClick = async (): Promise<void> => {
    if (!userName) {
      toast.info("Please enter a name.")
      return;
    }
    else {
      const payload = { name: userName, score: calculateWPM() };
      const response = await TypingTestApi.addScore(payload);
      if(response.statusCode === STATUS_CODES.CONFLICT) toast.error("Name already exists. Please pick a different name.");
      else if (response.statusCode !== STATUS_CODES.CREATED) toast.error("There was an error saving the high score.");
      else {
        toast.success("High score saved successfully.");
        await getDataSource();
      }
    }
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUserName(e.target.value);

  return (
    <div className="TypingTest">
      {/* High Scores Table */}
      <h2 className="alt-header">High Scores</h2>
      <HighScoresTable dataSource={dataSource} loading={loading} />

      {/* Typing Test */}
      {!started ? (
        <div className="TypingTest__PreTestBlock">
          <h2>Test Yourself</h2>
          <Button variant="outlined" color="gold" onClick={startTest}>Start Test</Button>
        </div>
      ) : (
        <React.Fragment>
          <div className="TypingTest__RandomWords">
            {words.map((word, idx) => (
              <div key={idx} className={`word ${idx === currentWordIndex ? "active" : ""}`}>{word}</div>
            ))}
          </div>

          {!completed ? (
            <input
              placeholder="Start Typing!"
              ref={inputRef}
              type="text"
              value={typedInput}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <div className="TypingTest__CompletedBlock">
              <div className="TypingTest__CompletedBlock__Wrapper">
                <div>Test complete! WPM: {calculateWPM()} | Accuracy: {calculateAccuracy()}%</div>
                <Button variant="outlined" color="gold" onClick={startTest}>Restart Test</Button>
              </div>
              <div className="TypingTest__CompletedBlock__Wrapper">
                <Input 
                  placeholder="Enter Name" 
                  value={userName} 
                  onChange={handleUserNameChange}
                />
                <Button variant="solid" color="gold" onClick={onSaveClick}>Save High Score</Button>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default TypingTest;
