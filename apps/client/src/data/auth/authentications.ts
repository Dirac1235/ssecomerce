'use server';

import { authExpire } from '@app/client/constants/auth.config';
import { cookies } from 'next/headers';

export async function setAuthentication(accessToken) {
  const cookieStore = cookies();

  (await cookieStore).set({
    name: 'accessToken',
    value: accessToken,
    secure: process.env.NODE_ENV === 'production',
    expires: authExpire,
  });

  (await cookieStore).set({
    name: 'accessToken',
    value: accessToken,
    secure: process.env.NODE_ENV === 'production',
    expires: authExpire,
  });
}

export async function getAuthentication() {
  const cookieStore = cookies();
  return (await cookieStore).get('accessToken')?.value;
}

export async function deleteAuthentication() {
  const cookieStore = cookies();
  (await cookieStore).delete('accessToken');
}