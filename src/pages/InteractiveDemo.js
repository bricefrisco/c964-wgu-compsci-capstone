import { useState } from "react";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import HappyFace from "../components/icons/HappyFace";
import SadFace from "../components/icons/SadFace";
import useSentimentAnalysis from "../hooks/useSentimentAnalysis";
import { motion } from "framer-motion";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";

const InteractiveDemo = () => {
  const { loading, predict } = useSentimentAnalysis();
  const [prediction, setPrediction] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prediction = await predict(e.target[0].value);
    console.log(prediction);
    setPrediction(prediction);
  };

  return (
    <Page
      title="Interactive demo"
      meta="Try out the machine learning model for yourself"
    >
      <Paragraph>
        If you have not already, I encourage you to take a moment to familiarize
        yourself with the documentation provided throughout the previous pages
        to understand the context and functionality of the sentiment analysis
        model. It provides insights into the problem being solved, the data that
        was used, and the model architecture.
      </Paragraph>

      <Paragraph>
        Despite being trained on{" "}
        <span className="font-semibold">1.6 million tweets</span>, the model is
        remarkably lightweight, weighing in at just around{" "}
        <span className="font-semibold">5MB.</span> What's even more impressive
        is that{" "}
        <span className="font-semibold">
          {" "}
          the machine learning model is embedded directly into the web page
        </span>{" "}
        itself, eliminating the need for a separate back-end server. This means
        that the sentiment analysis is performed locally within the your
        browser, ensuring fast response times and maintaining privacy.
      </Paragraph>

      <form className="mb-6" onSubmit={handleSubmit}>
        <input
          required={true}
          min="5"
          max="280"
          type="text"
          placeholder="The weather looks great today!"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-3"
        >
          Analyze
        </button>
      </form>

      {!prediction && !loading && (
        <Paragraph>
          Try inputting some text in the field above to see the machine learning
          model in action!
        </Paragraph>
      )}

      {loading && (
        <div className="h-[325px] flex items-center place-content-center shadow-sm p-4 border border-gray-200 rounded mb-6">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">
            Loading model...
          </div>
        </div>
      )}

      {prediction && (
        <div className="shadow-sm p-4 border border-gray-200 rounded mb-6">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Input
          </div>
          <span className="text-xl font-bold text-gray-700 block mb-6">
            "{prediction.text}"
          </span>

          <div className="mb-6">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              Sequence
            </div>
            <span className="text-xl font-bold text-gray-700 block">
              [{prediction.sequence.join(", ")}]
            </span>
          </div>

          <div className="mb-6">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              Out of vocabulary (OOV) words
            </div>
            <span className="text-xl font-bold text-gray-700 block">
              {prediction.oov.length === 0 && "None"}
              {prediction.oov.length > 0 &&
                prediction.oov.map((word) => `"${word}"`).join(", ")}
            </span>
          </div>

          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Sentiment Prediction
          </div>
          <span className="text-xl font-bold text-gray-700 block">
            {prediction.prediction}
          </span>
          <div className="flex gap-0.5 my-4">
            <motion.div
              className="bg-red-500 h-4 rounded-md"
              initial={{ width: 0 }}
              animate={{ width: `${Math.round(prediction.negative * 100)}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="bg-green-500 h-4 rounded-md"
              initial={{ width: 0 }}
              animate={{ width: `${Math.round(prediction.positive * 100)}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="flex">
            <div className="mr-6">
              <div className="text-gray-500 mb-1">Negative</div>
              <div className="flex items-center">
                <SadFace className="w-6 h-6 text-red-600 mr-1" />
                <span className="font-semibold">
                  {Math.round(prediction.negative * 100)}%
                </span>
              </div>
            </div>
            <div>
              <div>
                <div className="text-gray-500 mb-1">Positive</div>
                <div className="flex items-center">
                  <HappyFace className="w-6 h-6 text-green-600 mr-1" />
                  <span className="font-semibold">
                    {Math.round(prediction.positive * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {prediction && (
        <>
          <Paragraph>Let's break down the results:</Paragraph>

          <UnorderedList>
            <ListItem>
              <span className="font-semibold">Sequence:</span> The sequence
              representation of the input text. Each word in the text is mapped
              to a corresponding number in the sequence based on its popularity
              in the dataset. A lower number corresponds to a more popular word,
              while a higher number represents a less popular word. The token
              "1" represents an out of vocabulary (OOV) word.
            </ListItem>

            <ListItem>
              <span className="font-semibold">Out of vocabulary words:</span>{" "}
              The tokenizer used for mapping words to numbers only stores the
              most popular 30,000 words. Any word not in this vocabulary is
              considered an OOV word and is represented as an OOV token in the
              sequence.
            </ListItem>

            <ListItem>
              <span className="font-semibold">Sentiment prediction:</span> The
              sentiment prediction for the input text. The app displays the
              probability distribution of the input being positive or negative.
            </ListItem>
          </UnorderedList>

          <Paragraph>
            By inputting text and observing the sentiment prediction, you got a
            glimpse into how the model can analyze and classify the sentiment of
            short texts, such as customer feedback in an online chat
            application.
          </Paragraph>

          <Paragraph>
            In the next section, an overall summary of the project is provided,
            highlighting key findings, accomplishments, and the significance of
            the machine learning solution. Let's delve into the details and
            outcomes of this completed capstone project!
          </Paragraph>
        </>
      )}
    </Page>
  );
};

export default InteractiveDemo;
