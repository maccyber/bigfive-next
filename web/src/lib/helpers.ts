export const formatId = (id: string): string => {
  return id
    .replace(/^https?:\/\/.+\/result\//, '')
    .toLowerCase()
    .replaceAll(' ', '');
}

export const validId: (id: string) => boolean = (id: string) => /^[0-9a-fA-F]{24}$/.test(id)

export const formatAndValidateId = (id: string): boolean => {
  const formattedId = formatId(id);
  return validId(formattedId)
}

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export function formatTimer(seconds: number): string {
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

export const isDev: boolean = process.env.NEXT_PUBLIC_ENV === 'development'

const unescape = (str: string) => (str + '==='.slice((str.length + 3) % 4)).replace(/-/g, '+').replace(/_/g, '/')
const escape = (str: string) => str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')

export const base64url = {
    encode: (str: string) => escape(Buffer.from(str, 'utf8').toString('base64')),
    decode: (str: string) => JSON.parse(Buffer.from(unescape(str), 'base64').toString('utf8'))
}
