import InfoAlert from "../components/InfoAlert";
import Paragraph from "../components/Paragraph";
import ExternalLink from "../components/ExternalLink";
import Subheading from "../components/Subheading";
import Page from "../components/Page";

const DataPreprocessing = () => {
  return (
    <Page
      title="Data preprocessing"
      meta="Understanding the steps taken to preprocess the dataset"
    >
      <Paragraph>
        It's worth noting that{" "}
        <span className="font-semibold">
          the Sentiment140 dataset has already undergone some preprocessing.
        </span>{" "}
        The authors stripped out emoticons from the training data. This was done
        because they considered emoticons as noisy labels, as they don't
        perfectly define the sentiment of a tweet. For example, consider the
        tweet: "@BATMANNN :( i love chutney......." - without the emoticon, this
        tweet might generally be considered positive.
      </Paragraph>

      <Paragraph>
        Despite this initial preprocessing,{" "}
        <span className="font-semibold">
          the sentiment analysis model requires further preparation of data to
          function correctly.
        </span>{" "}
        I've made use of the Keras preprocessing classes Tokenizer and Sequence
        to transform the text data into a suitable format for the model. These
        classes streamline the process of converting raw text into an input for
        the model.
      </Paragraph>

      <InfoAlert title="Open-source preprocessors">
        For data preprocessing, I use the open-sourced{" "}
        <ExternalLink to="https://www.tensorflow.org/api_docs/python/tf/keras/preprocessing/text/Tokenizer">
          Tokenizer
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink to="https://www.tensorflow.org/api_docs/python/tf/keras/preprocessing/sequence">
          Sequence
        </ExternalLink>{" "}
        classes from the{" "}
        <ExternalLink to="https://www.tensorflow.org/api_docs/python/tf/keras/preprocessing">
          tensorflow.keras.preprocessing
        </ExternalLink>{" "}
        module.
      </InfoAlert>

      <Subheading>Tokenizer</Subheading>

      <Paragraph>
        The Tokenizer class from Keras transforms the text data into sequences
        of integers. I have defined the vocabulary size as 30,000, this means
        that{" "}
        <span className="font-semibold">
          the model will only consider the 30,000 most common words in the
          dataset.
        </span>{" "}
        Any words outside of these will be classified as an Out-Of-Vocabulary
        (OOV) token. This balance was chosen to ensure that the model remains
        computationally efficient, while still being able to understand a wide
        range of language used within the tweets.
      </Paragraph>

      <Paragraph>
        <span className="font-semibold">I've kept some punctuation </span>
        such as periods, exclamation points, question marks, and the @ symbol.
        These punctuation marks often carry sentiment information in the context
        of tweets. For example, an exclamation point could indicate excitement
        or intensity, while a question mark might suggest confusion or doubt.
        The @ symbol is used to tag other users in tweets, and I wouldn't want
        to remove that and mistake it for a word. By retaining these punctuation
        marks, I aimed to capture more nuanced sentiment information from the
        tweets.
      </Paragraph>

      <Subheading>Padding and truncating</Subheading>

      <Paragraph>
        After the tweets have been transformed into sequences, I then pad these
        sequences to ensure that they all have a consistent shape. This is done
        using the pad_sequences method from Keras. This step is necessary
        because{" "}
        <span className="font-semibold">
          the model requires all input data to have the same shape.
        </span>{" "}
        I've chosen a fixed shape of 35 tokens per sequence for the model.
      </Paragraph>

      <Paragraph>
        This means that each input sequence will be a uniform length of 35
        tokens. If a tweet is
        <span className="font-semibold">
          {" "}
          shorter than 35 tokens, it will be padded{" "}
        </span>
        with zeros until it reaches the correct length. On the other hand, if a
        tweet is{" "}
        <span className="font-semibold">
          longer than 35 tokens, it will be truncated.{" "}
        </span>
        This uniformity is crucial for the machine learning model to process the
        data.
      </Paragraph>

      <Paragraph>
        Although 35 may seem like a small number, it's important to remember
        that tweets were originally limited to 140 characters. Assuming that{" "}
        <a
          href="https://www.researchgate.net/figure/Average-word-length-in-the-English-language-Different-colours-indicate-the-results-for_fig1_230764201"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-600 font-medium hover:underline"
        >
          the average word is 5 characters long
        </a>
        , this means that the longest tweets at the time the dataset was
        collected should be about 28 words. Thus,{" "}
        <span className="font-semibold">
          35 tokens should be sufficient to capture the vast majority of tweets.
        </span>
      </Paragraph>

      <Paragraph>
        These preprocessing steps ensure that the data is in the appropriate
        format to be fed into the sentiment analysis model, which uses Sparse
        Categorical Crossentropy as a loss function. We'll discuss more about
        the model in the next section.
      </Paragraph>
    </Page>
  );
};

export default DataPreprocessing;
