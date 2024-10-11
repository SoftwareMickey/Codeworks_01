import express from 'express';
import cors from 'cors';
import path from 'path';
import nodemailer from 'nodemailer'; 

const app = express();

app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  
    port: 587,  
    secure: false,  
    auth: {
        user: 'patrickkivuvo@gmail.com',  
        pass: 'cfwbfqiupyrpzriy',  
    },
});

app.post('/api/contacts', async (req, res) => {
    const { fullName, email, phoneNumber, services, message } = req.body;

    try {
        
        const mailOptions = {
            from: email,  
            to: 'patrickkivuvo@gmail.com',  
            subject: 'New Contact Form Submission',
            text: `
                Full Name: ${fullName}
                Email: ${email}
                Phone Number: ${phoneNumber}
                Services: ${services.join(', ')}
                Message: ${message}
            `,
        };

        
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Message was successfully emailed!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
