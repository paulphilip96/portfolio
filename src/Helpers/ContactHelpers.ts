import type { ContactFormData, ContactPayload } from "../Types/ContactTypes";


export const transformContactFormData = (data: ContactFormData): ContactPayload => {
  return {
    name: data.name,
    contact: data.email,
    message: data.message
  }
}