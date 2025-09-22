import { useState, type SetStateAction } from "react";
import { Button, Input, Modal } from "antd";

import type { ContactFormData } from "../../Types/ContactTypes";

import "./ContactModal.scss";
import { toast } from "react-toastify";
import ContactApi from "../../API/ContactApi";
import { transformContactFormData } from "../../Helpers/ContactHelpers";
import { STATUS_CODES } from "../../Constants/API";
import React from "react";


interface ContactModalI {
  show: boolean,
  setShow: React.Dispatch<SetStateAction<boolean>>
}

const ContactModal = ({ show, setShow }: ContactModalI) => {

  const { TextArea } = Input;

  const initialFormDataState = {
    name: "",
    email: "",
    message: ""
  }
  const [formData, setFormData] = useState<ContactFormData>(initialFormDataState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    if (!formData.email || !formData.name || !formData.message) {
      toast.info("Please complete all fields before submitting.");
      return;
    }

    const payload = transformContactFormData(formData);
    const response = await ContactApi.sendEmail(payload);
    if (response.statusCode !== STATUS_CODES.CREATED) toast.error("An error occured. Please try again later.");
    else{
      toast.success("Message sent!");
      setShow(false);
    }
  }

  return (
    <Modal
      title="Contact Me"
      open={show}
      onOk={handleSubmit}
      onCancel={() => setShow(false)}
        footer={[
          <React.Fragment>
             <Button 
                key="cancel" 
                onClick={() => setShow(false)}
                variant="outlined"
                color="cyan"
              >
              Cancel
            </Button>
            <Button
              key="confirm"
              type="primary"
              variant="solid"
              color="cyan"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </React.Fragment>
        ]}
      >
      <div className="ContactModal">
        <Input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          rows={8}
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>
    </Modal>
  )
}

export default ContactModal;