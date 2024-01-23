const tokenKey = 'token';

export function setToken(tokenValue?: string) {
    if (!tokenValue) return;
    localStorage.setItem(tokenKey, tokenValue);
}

export function getToken(): string {
    return localStorage.getItem(tokenKey) || '';
}

export function removeToken() {
    localStorage.removeItem(tokenKey);
}

export function verifyToken(): boolean {
    return getToken().length > 0;
}

export function getAdmin(): string{
    return localStorage.getItem("admin") || ""

}

export function verifyAdmin(): boolean{
    return getAdmin().length === 4
}