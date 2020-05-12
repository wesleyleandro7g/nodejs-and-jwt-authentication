const jwt = require("jsonwebtoken");

module.exports = {
  async sign(payload) {
    const secret = "my-secret";

    const token = await jwt.sign({ payload }, secret, {
      expiresIn: 300, // expires in 5min
    });

    return token;
  },

  async verify(token) {
    const secret = "my-secret";

    const auth = await jwt.verify(token, secret, (err, decoded) => {
      if (err) return 1;

      return decoded;
    });

    return auth;
  },
};

// const secret = "my-custom-secret";

// const header = JSON.stringify({
//   alg: "HS256",
//   typ: "JWT",
// });

// const payload = JSON.stringify({
//   email: "aylan@boscarino.com",
//   password: "ya0gsqhy4wzvuvb4",
// });

// const base64Header = Buffer.from(header)
//   .toString("base64")
//   .replace(/=/g, "");
// const base64Payload = Buffer.from(payload)
//   .toString("base64")
//   .replace(/=/g, "");

// const data = base64Header + "." + base64Payload;

// const signature = crypto
//   .createHmac("sha256", secret)
//   .update(data)
//   .digest("base64");

// const signatureUrl = signature
//   .replace(/\+/g, "-")
//   .replace(/\//g, "_")
//   .replace(/=/g, "");

// console.log(signatureUrl);
