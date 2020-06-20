import Cookie from "js-cookie"

export function getToken() {
    return Cookie.get('token')
}

export function deleteToken() {
    return Cookie.remove('token');
}

export function AuthHeader() {
    return {
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json',
        'Authorization':getToken()
    } 
}
