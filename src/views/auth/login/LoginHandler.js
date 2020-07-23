export const setCookie = (email) => {
    document.cookie = `email=${email}`;
};

export const isLogged = () => {
    const { cookie } = document;
    if (cookie) {
        const email = cookie.split('=');
        if (email && email.length && email[1]) {
            return true;
        }
    }
    return false;
};