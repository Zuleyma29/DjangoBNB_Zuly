'use server';


import { cookies } from "next/headers";

export async function handleLogin(useId: string, accessToken: string, refreshToken:string){ 
    (await cookies()).set('session_userid', useId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, //One week
        path:'/'

    });
    
    (await cookies()).set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 60 minutes
        path:'/' 

    });

    (await cookies()).set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 60 minutes
        path:'/'

    });
}

export async function resetAuthCookies() {
    (await cookies()).set('session_user', '');
    (await cookies()).set('session_access_token', '');
    (await cookies()).set('session_refresh_token', '');
}

//
// Get data

export async function getUserId() {
    const userId = (await cookies()).get('session_userid')?.value
    return userId ? userId: null
    
}