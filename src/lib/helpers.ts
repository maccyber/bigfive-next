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
