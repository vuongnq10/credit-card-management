export const maskString = (input: string): string => {
  const parts = input.trim().split(' ');
  if (parts.length !== 4) return input;
  return parts.map((part, i) => (i < 3 ? '****' : part)).join(' ');
};
