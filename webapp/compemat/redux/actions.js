export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function getLogin(userData) {
    const payload = userData;
    return { type: LOGIN, payload };
}

export function getLogout() {
    return { type: LOGOUT };
}
  