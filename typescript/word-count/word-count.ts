const sanitize = (phrase: string): string[] => {
  return phrase
    .trim()
    .toLowerCase()
    .split(/[,\s]+/);
};
class Words {
  count = function (phrase: string): Map<string, number> {
    const myMap = new Map<string, number>();
    const words = sanitize(phrase);
    words.forEach((word) => {
      const duplicate = myMap.get(word) ?? 0;
      myMap.set(word, duplicate + 1);
    });
    return myMap;
  };
}
export default Words;
