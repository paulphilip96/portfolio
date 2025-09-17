import { API_ROUTES, BASE_URL, STATUS_CODES } from "../Constants/API";
import type { GenericApiResponse } from "../Types/ApiTypes";
import type { ContactPayload } from "../Types/ContactTypes";


class ContactApi {
  static async sendEmail(payload: ContactPayload): Promise<GenericApiResponse> {
    try {
      const response = await fetch(BASE_URL + API_ROUTES.SEND_EMAIL, {
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
      console.log("Error - sendEmail() - ContactApi.ts", e);
      return { statusCode: STATUS_CODES.GENERIC_ERROR }
    }
  }
}

export default ContactApi;