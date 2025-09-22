import { API_ROUTES, BASE_URL, STATUS_CODES } from "../Constants/API";
import type { GenericApiResponse } from "../Types/ApiTypes";
import type { HolidayResponse } from "../Types/HolidayTypes";

class HolidayApi {
  static async getHolidays (countryCode: string): Promise<GenericApiResponse<HolidayResponse[]>> {
    try {
      const response = await fetch(`${BASE_URL}${API_ROUTES.HOLIDAYS}/${countryCode}`);
      const data = await response.json();
      return { data: data.data, statusCode: response.status };
    }
    catch(e) {
      console.log("Error - getAllData() - TypingTestApi.ts", e);
      return { statusCode: STATUS_CODES.GENERIC_ERROR }
    }
  }
}

export default HolidayApi;