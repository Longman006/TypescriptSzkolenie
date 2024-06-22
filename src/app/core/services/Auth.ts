'use client'

export function login() {
    window
        .fetch("/api/token")
        .then((res) => res.json())
        .then((resp: any) => {
            const data = resp // TokenSchema.parse(resp);
            return data.access_token;
        })
        .then((token) => {
            window.token = token;
        });
}


// Extend global window
declare global {
    interface Window {
        token: string
    }
}