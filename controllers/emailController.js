const nodemailer = require("nodemailer");

exports.sendMail = async (req, res) => {
  const { name, email, phone, working, course } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false, 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
  //     tls: {
  //   ciphers: "SSLv3",
  //   rejectUnauthorized: false
  // }
    });

    await transporter.sendMail({
      from: `"Maang Prep Academy" <${process.env.MAIL_USER}>`,
      to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL2, process.env.RECEIVER_TEST],
      subject: "🔥 New Lead Alert — Someone Filled Your Website Form!",

html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f7f7;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px;">

      <h2 style="color: #333; margin-bottom: 10px;">📩 New Lead Received</h2>
      <p style="margin-bottom: 20px; font-size: 15px;">A new lead just submitted your website form. Here are the details:</p>

      <div style="padding: 15px; background: #fafafa; border-radius: 8px; border: 1px solid #ddd;">
        <p style="margin: 8px 0;"><b>Name:</b> ${name}</p>
        <p style="margin: 8px 0;"><b>Email:</b> ${email}</p>
        <p style="margin: 8px 0;"><b>Phone:</b> ${phone}</p>
        <p style="margin: 8px 0;"><b>Working Professional:</b> ${working}</p>
        <p style="margin: 8px 0;"><b>Course of Interest:</b> ${course}</p>
      </div>

      <p style="margin-top: 25px; font-size: 14px; color: #555;">
        🚀 <b>Tip:</b> Respond as soon as possible to increase conversion chances!
      </p>

      <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
        Maang Prep Academy — Lead Notification System
      </p>

    </div>
  </div>`
    });

    res.status(200).json({ success: true, message: "Form submitted successfully!" });

  } catch (error) {
    console.log("MAIL ERROR:", error);
    res.status(500).json({ success: false, message: "Mail failed", error: error.message });
  }
};
