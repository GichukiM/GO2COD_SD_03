import { MailtrapClient } from "mailtrap";
import dotenv from 'dotenv';

dotenv.config();

console.log("Starting", process.env.MAILTRAP_TOKEN);


export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  endpoint: process.env.MAILTRAP_ENDPOINT,
},
{
  axios: {
    timout: 30000
  }
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "CGichukiM",
};