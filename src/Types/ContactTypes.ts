export type ContactFormData = {
  name: string,
  email: string,
  message: string
}

export type ContactPayload = Omit<ContactFormData, "email"> & {
  contact: string
}
