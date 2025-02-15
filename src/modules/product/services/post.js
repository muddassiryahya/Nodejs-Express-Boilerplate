import { addData } from "../db/index.js";
import nodemailer from 'nodemailer';

const sendEmail = () => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "m.m2442212@gmail.com",
            pass: "hpjc zhqe vjwi npcs",
        },
    });

    const mailOptions = {
        from: "m.m2442212@gmail.com",
        to: "muhammadyahyaadamjichara@gmail.com",
        subject: "Hello from Nodemailer",
        text: "This is a test email sent using Nodemailer.",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("Email sent: ", info.response);
        }
    });
}

const postData = async (data) => {
    sendEmail();
    return await addData(data);
}

export default postData;
