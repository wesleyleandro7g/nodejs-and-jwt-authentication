const jwt = require("../Config/jwt");

module.exports = {
  async Encode(req, res) {
    const { id, name, email } = req.body;

    const token = await jwt.sign(id);

    res.status(200).send({ auth: true, token: token });

    console.log(token);
  },

  async Decode(req, res) {
    const { token } = req.body;

    const key = await jwt.verify(token);

    if (!token)
      return res.status(500).send({ auth: false, message: "Token not found" });

    if (key === 1) {
      res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token!" });
    }

    res.send({ key });
  },
};
