import InfoAlert from "../components/InfoAlert";
import Subheading from "../components/Subheading";
import Paragraph from "../components/Paragraph";
import Page from "../components/Page";
import InternalLink from "../components/InternalLink";

const DataAnalysis = () => {
  return (
    <Page title="Data analysis" meta="Deep dive into the dataset">
      <InfoAlert title="Image generation">
        The images displayed in this section were generated against the
        Sentiment140 dataset using Python code. This Python code is available in
        Google Colab and can be accessed using the links in the{" "}
        <InternalLink to="/project-summary">project summary</InternalLink>.
      </InfoAlert>

      <Paragraph>
        The Sentiment140 dataset is balanced, containing 800,000 tweets each of
        positive and negative sentiments. In machine learning,{" "}
        <span className="font-semibold">
          having equally represented classes can be crucial
        </span>{" "}
        for model performance, ensuring the model doesn't get biased towards the
        more prevalent class.
      </Paragraph>

      <img
        className="mb-6"
        width="450px"
        height="auto"
        src={`${process.env.PUBLIC_URL}/images/sentiment_distribution.png`}
        alt="Bar Chart Showing the Distribution of Positive and Negative
          Sentiments"
      />

      <Subheading>Word Clouds</Subheading>

      <Paragraph>
        The word clouds highlight the most frequent words associated with
        negative and positive sentiments in the dataset.
      </Paragraph>

      <div className="flex flex-wrap w-full mb-6">
        <img
          className="w-full max-w-[375px]"
          src={`${process.env.PUBLIC_URL}/images/negative_word_cloud.png`}
          alt="Negative word cloud"
        />

        <img
          className="w-full max-w-[375px]"
          height="auto"
          src={`${process.env.PUBLIC_URL}/images/positive_word_cloud.png`}
          alt="Positive word cloud"
        />
      </div>

      <Paragraph>
        We can gain some insights from these word clouds. For example, 'love' is
        prominently seen in the positive sentiment word cloud, while it's
        missing from the negative one. On the other hand, 'hate' figures in the
        negative sentiment but is absent from the positive sentiment word cloud.
      </Paragraph>

      <Paragraph>
        <span className="font-semibold">
          Interestingly, many words such as 'today' appear in both positive and
          negative word clouds.
        </span>{" "}
        This emphasizes the importance of context in sentiment analysis. For
        instance, 'Today' in "Today is a good day" carries a positive sentiment,
        while "Today is a terrible day", is associated with a negative
        sentiment.
      </Paragraph>

      <Paragraph>
        <span className="font-semibold">
          This phenomenon underlines the importance of considering the entire
          context of sentences, rather than isolated words, for accurate
          sentiment analysis.
        </span>{" "}
        The proposed machine learning model will learn to consider this context
        when predicting sentiments.
      </Paragraph>
    </Page>
  );
};

export default DataAnalysis;
