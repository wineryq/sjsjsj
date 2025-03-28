const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// SMTP ayarları (çevre değişkenleri opsiyonel, yoksa sabit değerler kullanılır)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'unutulanbardak@gmail.com',
    pass: process.env.EMAIL_PASS || 'knib ssqo iwwe fuyx'
  },
  debug: true,
  logger: true
});

// SMTP bağlantı kontrolü (yerel test için, Vercel'de çalışmaz)
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP bağlantı hatası:', error.message);
  } else {
    console.log('SMTP bağlantısı başarılı!');
  }
});

// Kod deposu (in-memory, Vercel'de her istekte sıfırlanır)
const codeStore = {};

function storeCode(email, code) {
  codeStore[email] = {
    code,
    expires: Date.now() + 10 * 60 * 1000 // 10 dakika
  };
  console.log(`Kod saklandı: ${email} -> ${code}`);
}

function isCodeValid(email, code) {
  const stored = codeStore[email];
  if (!stored || stored.code !== code || Date.now() > stored.expires) {
    console.log(`Kod geçersiz: ${email} -> ${code}`);
    return false;
  }
  console.log(`Kod geçerli: ${email} -> ${code}`);
  return true;
}

// Giriş kodu gönderme
app.post('/send-login-code', async (req, res) => {
  console.log('POST /send-login-code isteği alındı:', req.body);
  const { email, loginCode } = req.body;

  if (!email || !loginCode) {
    console.log('Hata: E-posta veya giriş kodu eksik');
    return res.status(400).json({ error: 'E-posta ve giriş kodu gerekli!' });
  }

  const mailOptions = {
    from: '"MineHost Ekibi" <minehost@minehost.com.tr>',
    to: email,
    subject: 'MineHost Giriş Doğrulama Kodunuz',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://cdn.discordapp.com/attachments/1339594930879860747/1354129160406306897/minehost_cleaned.png?ex=67e4d34e&is=67e381ce&hm=fc67f49c42eefa0c096417d3d56922530a5ffbee987b59aa960bcada10a51414&" alt="MineHost Logo" style="max-width: 150px;">
        </div>
        <h2 style="color: #1a1a2e; text-align: center; font-size: 24px; margin-bottom: 20px;">Giriş Doğrulama Kodunuz</h2>
        <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          Merhaba sevgili MineHost kullanıcısı, <br><br>
          Hesabına giriş yapmak için aşağıdaki kodu kullanabilirsin. Hızlıca doğrulama işlemini tamamla ve MineHost’un eşsiz dünyasına geri dön!
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; background-color: #ffd700; color: #1a1a2e; font-size: 28px; font-weight: bold; padding: 15px 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            ${loginCode}
          </span>
        </div>
        <p style="color: #666; font-size: 14px; text-align: center; margin-bottom: 20px;">
          Bu kod 10 dakika içinde geçerliliğini yitirecektir. Lütfen zamanında kullan!
        </p>
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="https://www.minehost.com.tr/login" style="background: linear-gradient(90deg, #ffd700, #e6b800); color: #1a1a2e; text-decoration: none; padding: 12px 25px; border-radius: 25px; font-weight: bold; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            Giriş Yap
          </a>
        </div>
        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>MineHost Ekibi</p>
          <p>Bize her zaman <a href="mailto:destek@minehost.com.tr" style="color: #ffd700;">destek@minehost.com.tr</a> adresinden ulaşabilirsin.</p>
          <p>© 2025 MineHost. Tüm hakları saklıdır.</p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.response);
    storeCode(email, loginCode);
    res.status(200).json({ message: 'Doğrulama kodu gönderildi' });
  } catch (error) {
    console.error('E-posta gönderim hatası:', error.message);
    res.status(500).json({ error: 'E-posta gönderilemedi: ' + error.message });
  }
});

// Kod doğrulama
app.post('/verify-code', (req, res) => {
  console.log('POST /verify-code isteği alındı:', req.body);
  const { email, code, type } = req.body;

  if (!email || !code || !type) {
    console.log('Hata: E-posta, kod veya tür eksik');
    return res.status(400).json({ error: 'E-posta, kod ve tür gerekli!' });
  }

  if (isCodeValid(email, code)) {
    delete codeStore[email];
    res.status(200).json({ message: `${type} kodu doğrulandı!` });
  } else {
    res.status(400).json({ error: 'Geçersiz veya süresi dolmuş kod!' });
  }
});

// Şifre sıfırlama kodu gönderme
app.post('/send-reset-code', async (req, res) => {
  console.log('POST /send-reset-code isteği alındı:', req.body);
  const { email, resetCode } = req.body;

  if (!email || !resetCode) {
    console.log('Hata: E-posta veya reset kodu eksik');
    return res.status(400).json({ error: 'E-posta ve reset kodu gerekli!' });
  }

  const mailOptions = {
    from: '"MineHost Ekibi" <minehost@minehost.com.tr>',
    to: email,
    subject: 'MineHost Şifre Sıfırlama Kodunuz',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://cdn.discordapp.com/attachments/1339594930879860747/1354129160406306897/minehost_cleaned.png?ex=67e4d34e&is=67e381ce&hm=fc67f49c42eefa0c096417d3d56922530a5ffbee987b59aa960bcada10a51414&" alt="MineHost Logo" style="max-width: 150px;">
        </div>
        <h2 style="color: #1a1a2e; text-align: center; font-size: 24px; margin-bottom: 20px;">Şifre Sıfırlama Kodunuz</h2>
        <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          Merhaba sevgili MineHost kullanıcısı, <br><br>
          Şifreni sıfırlamak için aşağıdaki kodu kullanabilirsin. Hızlıca işlemini tamamla ve MineHost’un eşsiz dünyasına geri dön!
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; background-color: #ffd700; color: #1a1a2e; font-size: 28px; font-weight: bold; padding: 15px 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            ${resetCode}
          </span>
        </div>
        <p style="color: #666; font-size: 14px; text-align: center; margin-bottom: 20px;">
          Bu kod 10 dakika içinde geçerliliğini yitirecektir. Lütfen zamanında kullan!
        </p>
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="https://www.minehost.com.tr/reset-password" style="background: linear-gradient(90deg, #ffd700, #e6b800); color: #1a1a2e; text-decoration: none; padding: 12px 25px; border-radius: 25px; font-weight: bold; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            Şifremi Sıfırla
          </a>
        </div>
        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>MineHost Ekibi</p>
          <p>Bize her zaman <a href="mailto:destek@minehost.com.tr" style="color: #ffd700;">destek@minehost.com.tr</a> adresinden ulaşabilirsin.</p>
          <p>© 2025 MineHost. Tüm hakları saklıdır.</p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.response);
    storeCode(email, resetCode);
    res.status(200).json({ message: 'Doğrulama kodu gönderildi' });
  } catch (error) {
    console.error('E-posta gönderim hatası:', error.message);
    res.status(500).json({ error: 'E-posta gönderilemedi: ' + error.message });
  }
});

// Kayıt kodu gönderme
app.post('/send-register-code', async (req, res) => {
  console.log('POST /send-register-code isteği alındı:', req.body);
  const { email, registerCode } = req.body;

  if (!email || !registerCode) {
    console.log('Hata: E-posta veya kayıt kodu eksik');
    return res.status(400).json({ error: 'E-posta ve kayıt kodu gerekli!' });
  }

  const mailOptions = {
    from: '"MineHost Ekibi" <minehost@minehost.com.tr>',
    to: email,
    subject: 'MineHost Kayıt Doğrulama Kodunuz',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://cdn.discordapp.com/attachments/1339594930879860747/1354129160406306897/minehost_cleaned.png?ex=67e4d34e&is=67e381ce&hm=fc67f49c42eefa0c096417d3d56922530a5ffbee987b59aa960bcada10a51414&" alt="MineHost Logo" style="max-width: 150px;">
        </div>
        <h2 style="color: #1a1a2e; text-align: center; font-size: 24px; margin-bottom: 20px;">Kayıt Doğrulama Kodunuz</h2>
        <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          Merhaba sevgili MineHost kullanıcısı, <br><br>
          Hesabını oluşturmak için aşağıdaki kodu kullanabilirsin. Hızlıca doğrulama işlemini tamamla ve MineHost ailesine katıl!
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; background-color: #ffd700; color: #1a1a2e; font-size: 28px; font-weight: bold; padding: 15px 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            ${registerCode}
          </span>
        </div>
        <p style="color: #66
6; font-size: 14px; text-align: center; margin-bottom: 20px;">
          Bu kod 10 dakika içinde geçerliliğini yitirecektir. Lütfen zamanında kullan!
        </p>
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="https://www.minehost.com.tr/register" style="background: linear-gradient(90deg, #ffd700, #e6b800); color: #1a1a2e; text-decoration: none; padding: 12px 25px; border-radius: 25px; font-weight: bold; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            Kaydımı Tamamla
          </a>
        </div>
        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>MineHost Ekibi</p>
          <p>Bize her zaman <a href="mailto:destek@minehost.com.tr" style="color: #ffd700;">destek@minehost.com.tr</a> adresinden ulaşabilirsin.</p>
          <p>© 2025 MineHost. Tüm hakları saklıdır.</p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.response);
    storeCode(email, registerCode);
    res.status(200).json({ message: 'Doğrulama kodu gönderildi' });
  } catch (error) {
    console.error('E-posta gönderim hatası:', error.message);
    res.status(500).json({ error: 'E-posta gönderilemedi: ' + error.message });
  }
});

// Genel kod gönderme
app.post('/send-code', async (req, res) => {
  console.log('POST /send-code isteği alındı:', req.body);
  const { email } = req.body;

  if (!email) {
    console.log('Hata: E-posta eksik');
    return res.status(400).json({ error: 'E-posta gerekli!' });
  }

  const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(`Oluşturulan kod: ${generatedCode}`);

  const mailOptions = {
    from: '"MineHost Ekibi" <minehost@minehost.com.tr>',
    to: email,
    subject: 'MineHost Doğrulama Kodunuz',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://cdn.discordapp.com/attachments/1339594930879860747/1354129160406306897/minehost_cleaned.png?ex=67e4d34e&is=67e381ce&hm=fc67f49c42eefa0c096417d3d56922530a5ffbee987b59aa960bcada10a51414&" alt="MineHost Logo" style="max-width: 150px;">
        </div>
        <h2 style="color: #1a1a2e; text-align: center; font-size: 24px; margin-bottom: 20px;">Doğrulama Kodunuz</h2>
        <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          Merhaba sevgili MineHost kullanıcısı, <br><br>
          İşlemini tamamlamak için aşağıdaki kodu kullanabilirsin. Hızlıca doğrulama işlemini yap ve MineHost’un eşsiz dünyasına katıl!
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; background-color: #ffd700; color: #1a1a2e; font-size: 28px; font-weight: bold; padding: 15px 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            ${generatedCode}
          </span>
        </div>
        <p style="color: #666; font-size: 14px; text-align: center; margin-bottom: 20px;">
          Bu kod 10 dakika içinde geçerliliğini yitirecektir. Lütfen zamanında kullan!
        </p>
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="https://www.minehost.com.tr/verify" style="background: linear-gradient(90deg, #ffd700, #e6b800); color: #1a1a2e; text-decoration: none; padding: 12px 25px; border-radius: 25px; font-weight: bold; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            Doğrulamayı Tamamla
          </a>
        </div>
        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>MineHost Ekibi</p>
          <p>Bize her zaman <a href="mailto:destek@minehost.com.tr" style="color: #ffd700;">destek@minehost.com.tr</a> adresinden ulaşabilirsin.</p>
          <p>© 2025 MineHost. Tüm hakları saklıdır.</p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.response);
    storeCode(email, generatedCode);
    res.status(200).json({ message: 'Kod e-postanıza gönderildi', code: generatedCode });
  } catch (error) {
    console.error('Kod gönderim hatası:', error.message);
    res.status(500).json({ error: 'Kod gönderilemedi: ' + error.message });
  }
});

// Vercel için export
module.exports = app;