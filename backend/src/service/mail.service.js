const nodeMailer = require("nodemailer");
const config = require("../../config");

class MailService {
    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: config.SMTP_HOST,
            port: config.SMTP_PORT,
            secure: false,
            auth: {
                user: config.SMTP_USER,
                pass: config.SMTP_PASSWORD,
            },
        });
    }
    async sendActivationLink(to, link) {
        await this.transporter.sendMail({
            from: config.SMTP_USER,
            to,
            subject: "Активация аккаунта на " + config.CLIENT_URL,
            text: "",
            html: `
            <div><h1>Для активации перейдите по ссылке</h1><a href=${link}>${link}</a></div>`,
        });
    }
}

module.exports = new MailService();
