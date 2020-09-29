export default class Words {
  count(userWords: string) {
    const words = userWords.toLocaleLowerCase().trim().replace(/\s\s+/g, ' ').split(/\s/);
    let frq: any = {};
    words.forEach((w) => {
      if (frq.hasOwnProperty(w)) frq[w]++;
      else frq[w] = 1;
    });
    const map = new Map(Object.entries(frq));
    return map;
  }
}
