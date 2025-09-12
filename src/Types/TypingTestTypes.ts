export type HighScore = {
  name: string,
  score: number
};

export type Rank = HighScore & {
  rank: string
};

export type HighScorePayload = HighScore;