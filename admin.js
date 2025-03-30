const adminPasswordsFromJS = {
  "BirSabahsizGece": {
    name: "Umut Y.",
    email: "katlawinery@gmail.com",
    showMembers: true,
    showSupport: true,
    showServer: true,
    showSponsor: true,
    showAdmins: true
  },
  "BirSabahAhmet": {
    name: "Ahmet K.",
    email: "ahmet.test@tempmail.com",
    showMembers: true,
    showSupport: true,
    showServer: true,
    showSponsor: true,
    showAdmins: true
  },
  "KeremBuA11e": {
    name: "Kerem K.",
    email: "kerem.test@tempmail.com",
    showMembers: false,
    showSupport: true,
    showServer: false,
    showSponsor: false,
    showAdmins: false
  },
  "QlnKqmsjS2e": {
    name: "Sefa B.",
    email: "sefa.test@tempmail.com",
    showMembers: false,
    showSupport: true,
    showServer: false,
    showSponsor: false,
    showAdmins: false
  }
};

const secretKey = "BOVoHcbkjgxXGJciihfGhoyfowvlhVjovjVhkhvahvkochOchigFfgi8yf8fyGKKCH";

function encryptPassword(password) {
  return CryptoJS.AES.encrypt(password, secretKey).toString();
}

function decryptPassword(encryptedPassword) {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}

const encryptedPasswords = {};
for (const password in adminPasswordsFromJS) {
  const encrypted = encryptPassword(password);
  encryptedPasswords[encrypted] = adminPasswordsFromJS[password];
}

localStorage.setItem("encryptedAdminData", JSON.stringify(encryptedPasswords));

const storedData = JSON.parse(localStorage.getItem("encryptedAdminData"));
console.log("Şifreli hali:", storedData);

const decryptedPasswords = {};
for (const encryptedPassword in storedData) {
  const decrypted = decryptPassword(encryptedPassword);
  decryptedPasswords[decrypted] = storedData[encryptedPassword];
}

console.log("Çözülmüş hali:", decryptedPasswords);
