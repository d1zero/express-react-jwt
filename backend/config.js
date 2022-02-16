require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 8000,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    API_URL: process.env.API_URL,
    CLIENT_URL: process.env.CLIENT_URL,
};
