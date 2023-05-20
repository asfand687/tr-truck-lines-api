export const POST = async (request) => {
  const { fullName, phoneNumber, emailAddress, truckAndEquipmentType } = await request.json();
  let nodemailer = require('nodemailer')
  // Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});
  try {
    // Send the email using the Nodemailer transporter
    const info = await transporter.sendMail({
      from: "asfandyar687@gmail.com",
      to: "asfandyar687@gmail.com",
      subject: 'New Contact Form From TR Truck Lines',
      html: `
        <h2>
            Received Contact Form From TR Truck Lines
        </h2>
        <p>Here are the additional details:</p>
        <ul>
            <li>
                Full Name: ${fullName}
            </li>
            <li>
                Phone Number: ${phoneNumber}
            </li>
            <li>
                Email Address: ${emailAddress}
            </li>
            <li>
                Truck and Equipment Type: ${truckAndEquipmentType}
            </li>
        </ul>
      `
    });

    // Log the email message
    console.log(`Message sent: ${info.messageId}`);

    // Send a success response
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 })
  } catch (error) {
      return new Response("Failed to send email", { status: 500 })
  }
} 
