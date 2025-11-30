import jwt from "jsonwebtoken";

export default function generateJwtToken(user: any) {
  const payload = { userId: user.id, role: user.role };
  const secretKey = process.env.JWT_SECRETE_KEY || "default_secret";

  const accessToken = jwt.sign(payload, secretKey, {
    expiresIn: (process.env.JWT_ACCESS_LIFETIME ??
      "1d") as jwt.SignOptions["expiresIn"],
  });

  return accessToken;
}
