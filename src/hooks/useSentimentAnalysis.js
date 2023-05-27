import { useCallback, useState } from "react";
import Tokenizer from "../Tokenizer";
import * as tf from "@tensorflow/tfjs";

const useSentimentAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [tokenizer, setTokenizer] = useState(null);
  const [model, setModel] = useState(null);

  const loadTokenizer = async () => {
    const tokenizer = new Tokenizer();
    await tokenizer.load(`${process.env.PUBLIC_URL}/tokenizer/word_index.json`);
    console.log("Tokenizer loaded.");
    setTokenizer(tokenizer);
    return tokenizer;
  };

  const loadModel = async () => {
    const model = await tf.loadGraphModel(
      `${process.env.PUBLIC_URL}/model/model.json`
    );
    setModel(model);
    console.log("Model loaded.");
    return model;
  };

  const predict = useCallback(
    async (text) => {
      setLoading(tokenizer === null || model === null);
      const t = tokenizer === null ? await loadTokenizer() : tokenizer;
      const m = model === null ? await loadModel() : model;

      const { oov, sequence } = t.textToSequence(text);
      const paddedSequence = t.padSequences(sequence);
      const input = tf.tensor2d([paddedSequence]);
      const prediction = await m.predictAsync(input);

      const probabilities = prediction.softmax().arraySync();
      setLoading(false);

      const negative = probabilities[0][0];
      const positive = probabilities[0][1];

      return {
        text,
        sequence,
        oov,
        negative,
        positive,
        prediction: negative > positive ? "Negative" : "Positive",
      };
    },
    [tokenizer, model]
  );

  return { loading, predict };
};

export default useSentimentAnalysis;
