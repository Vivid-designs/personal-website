import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
const config = require("@/tailwind.config");

interface EmailTemplateProps {
  name?: string;
  email?: string;
  message?: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <Tailwind config={config}>
    <h1>New message from lario@spencesa.co.za</h1>
    <p>Name:{name}</p>
    <p>Email:{email}</p>
    <p>Message:{message}</p>
  </Tailwind>
);

EmailTemplate.PreviewProps = {
  name: "Jan Braai",
  email: "Jan@braai.com",
  message: "Hello daar!.",
} as EmailTemplateProps;

export default EmailTemplate;
