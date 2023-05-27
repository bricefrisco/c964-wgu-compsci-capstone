class Tokenizer {
  constructor() {
    this.word_index = {};
    this.filters = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\t\n';
  }

  async load(path) {
    const response = await fetch(path);
    this.word_index = await response.json();
  }

  textToSequence(text) {
    const words = this.cleanText(text)
      .split(" ")
      .filter((word) => word.length > 0);

    return {
      oov: words.filter((word) => !this.word_index[word]),
      sequence: words.map(
        (word) => this.word_index[word] || this.word_index["<OOV>"]
      ),
    };
  }

  cleanText(text) {
    text = text.toLowerCase();
    this.filters.split("").forEach((filter) => {
      text = text.replace(new RegExp("\\" + filter, "g"), "");
    });
    return text;
  }

  padSequences(
    sequence,
    maxlen = 35,
    padding = "post",
    truncating = "post",
    value = 0
  ) {
    if (sequence.length > maxlen) {
      return truncating === "post"
        ? sequence.slice(0, maxlen)
        : sequence.slice(-maxlen);
    }

    const pad = Array(maxlen - sequence.length).fill(value);
    return padding === "post" ? sequence.concat(pad) : pad.concat(sequence);
  }
}

export default Tokenizer;
