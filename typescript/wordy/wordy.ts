export class WordProblem {
  question: string;
  constructor(question: string) {
    this.question = question;
  }

  doMath = (x: number, y: number, operation: string): number => {
    switch (operation) {
      case "plus":
        return x + y;
        break;
      case "minus":
        return x - y;
        break;
      case "divided":
        return x / y;
        break;
      case "multiplied":
        return x * y;
        break;
      default:
        return -111;
    }
  };

  applyOperations = (words: string[]): number => {
    const size = words.length;
    console.log(words);
    console.log("size", size);
    const out = this.doMath(+words[0], +words[2], words[1]);
    if (size === 0) {
      return 0;
    }
    if (size === 1) {
      return +words[0];
    }
    if (size === 3) return out;
    return this.doMath(out, this.applyOperations(words.slice(4)), words[3]);
  };

  // applyOperations = (words: any): number => {
  //   const size = words.length;
  //   console.log("size", size);
  //   if (size === 3) {
  //     console.log(
  //       this.doMath(+words[size - 3], +words[size - 1], words[size - 2])
  //     );
  //     return this.doMath(+words[size - 3], +words[size - 1], words[size - 2]);
  //   }
  //   if (size === 0) {
  //     return 0;
  //   }
  //   console.log(words);
  //   return this.doMath(
  //     words[0],
  //     this.applyOperations(words.slice(2)),
  //     words[1]
  //   );
  //   // while (size - 1 >= i) {
  //   //   let res: number | null;
  //   //   if (i === size - 1) {
  //   //     return this.doMath(+words[i - 2], +words[i], words[i - 1]);
  //   //   } else {
  //   //     i++;
  //   //     words?.shift();
  //   //     words?.shift();
  //   //     return this.applyOperations(words);
  //   //   }
  //   // }
  //   // return -1;
  // };
  answer = (): number => {
    const question = this.question;
    const result = question
      .replace("What is", "")
      .replace("?", "")
      .replace("to the", "")
      .replace("", "")
      .replace("by", "");
    console.log("Question after replace: ", result);
    const arr = result.split(" ");
    let i;
    const words = [];
    for (i in arr) {
      if (arr[i] === "") continue;
      else words.push(arr[i]);
    }
    console.log("Question parsed after split : words: ", words);

    const res = this.applyOperations(words);
    console.log("RESY", res);
    return res;
  };
}

export class ArgumentError {}
