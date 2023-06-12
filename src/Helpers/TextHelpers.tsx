export const removeSpaceCapitaliseStart = (string: string) => {
  const split = string.replaceAll("-", " ");
  return split.charAt(0).toUpperCase() + split.slice(1);
};
