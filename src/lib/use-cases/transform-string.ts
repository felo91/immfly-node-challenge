export const transforVowelToUppercase = (string: string) => {
  return string?.replace(/[aeiou]/g, (vowel) => vowel.toUpperCase());
};
export const reverseString = (string: string) => {
  return string?.split("").reverse().join("");
};

export const transformString = (string: string) => {
  const reversedString = reverseString(string);
  const result = transforVowelToUppercase(reversedString);
  return result;
};

export const transformStringLikeArrayIntoArray = (string: string) => {
  return string
    ?.split("")
    .filter((char) => char != "[" && char != "]" && char != "'" && char != " " && char != '"')
    .join("")
    .split(",")
    .filter(Boolean);
};

export default { transformString, reverseString, transforVowelToUppercase, transformStringLikeArrayIntoArray };
