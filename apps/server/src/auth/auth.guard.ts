import { findUserById } from "../auth/auth.service";
import validateJwtToken from "./jwt/validate-jwt-token";

export function authGuard(req, res, next) {
  async function validate() {
    const accessToken = req.headers.authorization?.split(" ")[1];
    const decoded = validateJwtToken(accessToken) as {
      userId: string;
      role: string;
    };
    req.user = decoded;
    next();
  }
  return Promise.resolve(validate()).catch(next);
}
