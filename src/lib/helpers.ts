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
