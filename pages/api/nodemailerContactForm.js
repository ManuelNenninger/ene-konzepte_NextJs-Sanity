// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;
//     //console.log("Nachricht: ", name, email, message);

//     const transporter = nodemailer.createTransport({
//       // host: "smtp.goneo.de",
//       host: "smtp.gmail.com",
//       port: 465,
//       auth: {
//         user: "e-mail@",
//         pass: "kaqta7-dIskix-gytpiw",
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "recipient@example.com",
//       subject: `New message from ${name}`,
//       text: message,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ message: "Error sending email" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
