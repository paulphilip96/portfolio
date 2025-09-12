import { API_ROUTES, BASE_URL, STATUS_CODES } from "../Constants/API";
import type { HighScore, HighScorePayload, Rank } from "../Types/TypingTestTypes";
import type { GenericApiResponse } from "../Types/ApiTypes";


class TypingTestApi {
  static async getAllData(): Promise<GenericApiResponse<HighScore[]>> {
    try {
      const response = await fetch(BASE_URL + API_ROUTES.GET_ALL_DATA);
      const data = await response.json();
      return { data: data.data, statusCode: response.status };
    }
    catch(e) {
      console.log("Error - getAllData() - TypingTestApi.ts", e);
      return { statusCode: STATUS_CODES.GENERIC_ERROR }
    }
  }

  static async addScore(payload: HighScorePayload): Promise<GenericApiResponse> {
    try {
      const response = await fetch(BASE_URL + API_ROUTES.ADD_DATA, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: 'post',
        body: JSON.stringify(payload)
      });
      await response.json();
      return { statusCode: response.status };
    }
    catch(e) {
      console.log("Error - addScore() - TypingTestApi.ts", e);
      return { statusCode: STATUS_CODES.GENERIC_ERROR }
    }
  }

  static async getRank(): Promise<GenericApiResponse<Rank>> {
    try {
      const response = await fetch(BASE_URL + API_ROUTES.GET_RANK);
      const data = await response.json();
      return { data: data.data, statusCode: response.status };
    }
    catch(e) {
      console.log("Error - getRank() - TypingTestApi.ts", e);
      return { statusCode: STATUS_CODES.GENERIC_ERROR }
    }
  }
}

export default TypingTestApi;