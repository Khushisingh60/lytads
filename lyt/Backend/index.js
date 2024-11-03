require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());

// MySQL connection using environment variables
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mysql@#2003",
    database: "taxitop8",
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database..');
});

// OTP storage
const otpStore = {};

// Create a transport for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khushisingh0598@gmail.com',
        pass: 'feyx zrve ewvb gcap',
    },
});

// Endpoint to send OTP
app.post('/api/send-otp', async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        otpStore[email] = otp;
        console.log(`OTP sent to ${email}: ${otp}`);
        res.status(200).json({ message: 'OTP sent successfully!' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ message: 'Failed to send OTP. Please try again.' });
    }
});

// Endpoint to verify OTP
app.post('/api/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    if (!otpStore[email]) {
        console.log("No OTP found for this email.");
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (String(otpStore[email]) !== String(otp)) {
        console.log("OTP does not match.");
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    delete otpStore[email];
    console.log("OTP verified successfully for email:", email);
    res.status(200).json({ message: 'OTP verified successfully!' });
});

// Advertiser registration endpoint
app.post('/api/advertiser', (req, res) => {
    const { advertiser_email, advertiser_name, advertiser_contact_info, advertiser_company, advertiser_password } = req.body;

    if (!advertiser_email || !advertiser_name || !advertiser_contact_info || !advertiser_company || !advertiser_password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    

    bcrypt.hash(advertiser_password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        const query = 'INSERT INTO Advertiser (advertiser_email, advertiser_name, advertiser_contact_info, advertiser_company, password) VALUES (?, ?, ?, ?, ?)';
        
        db.query(query, [advertiser_email, advertiser_name, advertiser_contact_info, advertiser_company, hash], (err, result) => {
            if (err) {
                console.error('Error inserting advertiser:', err);
                return res.status(500).json({ error: err.message });
            }
            console.log(`Advertiser created with ID: ${result.insertId}`);
            res.status(201).json({ message: 'Advertiser created successfully', advertiserId: result.insertId });
        });
    });
});

// Advertiser Login
app.post('/api/login', (req, res) => {
    const { advertiser_contact_info, advertiser_password } = req.body;
    if (!advertiser_contact_info || !advertiser_password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'SELECT * FROM Advertiser WHERE advertiser_contact_info = ?';
    
    db.query(query, [advertiser_contact_info], (err, results) => {
        if (err) {
            console.error('Error fetching advertiser:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const advertiser = results[0];
        
        bcrypt.compare(advertiser_password, advertiser.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            res.status(200).json({ message: 'Login successful', advertiser });
        });
    });
});

// Driver Signup
app.post('/api/driver/signup', (req, res) => {
    const { driver_emailid, driver_name, driver_contact_info, driver_license_number, driver_password } = req.body;

    if (!driver_emailid || !driver_name || !driver_contact_info || !driver_license_number || !driver_password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    bcrypt.hash(driver_password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const query = 'INSERT INTO TaxiDrivers (driver_emailid, driver_name, driver_contact_info, driver_license_number, driver_password, driver_status) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [driver_emailid, driver_name, driver_contact_info, driver_license_number, hash, 'active'], (err, result) => {
            if (err) {
                console.error('Error creating driver:', err);
                return res.status(500).json({ message: 'Error creating driver', error: err });
            }
            console.log(`Driver created with ID: ${result.insertId}`);
            res.status(201).json({ message: 'Driver created successfully', driverId: result.insertId });
        });
    });
});

// Driver Login
app.post('/api/driver/login', (req, res) => {
    const { driver_contact_info, driver_password } = req.body;
    if (!driver_contact_info || !driver_password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'SELECT * FROM TaxiDrivers WHERE driver_contact_info = ?';
    
    db.query(query, [driver_contact_info], (err, results) => {
        if (err) {
            console.error('Error fetching driver:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const driver = results[0];
        
        bcrypt.compare(driver_password, driver.driver_password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            res.status(200).json({ message: 'Login successful', driver });
        });
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
