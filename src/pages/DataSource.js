import ExternalLink from "../components/ExternalLink";
import InfoAlert from "../components/InfoAlert";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import Subheading from "../components/Subheading";

const DataSource = () => {
  return (
    <Page
      title="Data source"
      meta="Introducing the dataset for training the machine learning model"
    >
      <Paragraph>
        The dataset that forms the backbone of my sentiment analysis solution is{" "}
        <ExternalLink to="http://help.sentiment140.com/for-students">
          sourced from Sentiment140
        </ExternalLink>
        . It is a widely recognized dataset in the field of Sentiment Analysis
        and Natural Language Processing.
      </Paragraph>

      <InfoAlert title="Sentiment140">
        The machine learning model for this project utilizes a dataset created
        by the team at Sentiment140. Their work in sentiment analysis, described
        in their paper, "
        <ExternalLink to="https://cs.stanford.edu/people/alecmgo/papers/TwitterDistantSupervision09.pdf">
          Twitter Sentiment Classification using Distant Supervision
        </ExternalLink>
        ", has provided valuable resources for students and researchers.
      </InfoAlert>

      <Subheading>About the data</Subheading>

      <Paragraph>
        The Sentiment140 dataset,{" "}
        <span className="font-semibold">comprised of 1.6 million tweets</span>,
        was gathered using Twitter's public APIs. It is labeled with{" "}
        <span className="font-semibold">positive or negative sentiments</span>,
        using a clever technique known as distant supervision. This technique
        assumes that tweets with positive emoticons express positive sentiments,
        and those with negative emoticons express negative sentiments, enabling
        an automated labeling process.
      </Paragraph>

      <Paragraph>
        The dataset thus provides a broad and realistic representation of human
        sentiments, with a variety of emotions expressed in the tweets.
      </Paragraph>

      <Subheading>Data relevance</Subheading>

      <Paragraph>
        The Sentiment140 dataset aligns perfectly with the challenges faced by
        PestFree Solutions. PestFree seeks to distinguish between positive and
        negative customer sentiments from their live chat platform, mirroring
        the binary sentiment classification in the dataset.
      </Paragraph>

      <Paragraph>
        Given its depth and diversity, the Sentiment140 dataset serves as a
        robust training platform for a machine learning model geared at
        extracting insights from similar online communication data, like the
        live chat application at PestFree Solutions.
      </Paragraph>

      <Paragraph>
        In subsequent sections, we'll delve into the model development process
        with this dataset, detailing data preprocessing and model architecture.
      </Paragraph>
    </Page>
  );
};

export default DataSource;
