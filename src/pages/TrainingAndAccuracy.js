import ListItem from "../components/ListItem";
import Page from "../components/Page";
import Prism from "../vendor/prism";
import Paragraph from "../components/Paragraph";
import Subheading from "../components/Subheading";
import UnorderedList from "../components/UnorderedList";

import "../vendor/prism.css";
import { useEffect } from "react";
import ExternalLink from "../components/ExternalLink";
import InfoAlert from "../components/InfoAlert";
import InternalLink from "../components/InternalLink";

const TrainingAndAccuracy = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `history = model.fit(train_ds, 
    validation_data=val_ds,
    epochs=3,
    callbacks=[batch_metrics_callback, early_stopping])`;

  return (
    <Page
      title="Training and accuracy"
      meta="Unveiling the training process and tracking accuracy"
    >
      <Paragraph>
        The training process is a crucial step in machine learning models. It
        involves feeding the model with data and allowing it to learn from it.
        In this case, I split the dataset into training, validation, and test
        sets. The training set is used to train the model, the validation set is
        used to evaluate the model's performance during training, and the test
        set is used to assess the final performance of the trained model. This
        division ensures that the model is trained on a variety of examples and
        can generalize well to unseen data.
      </Paragraph>

      <InfoAlert title="The code">
        Only portions of the most relevant pieces of code are included on the
        site. A link to the entire code base that was written to develop and
        train the model is available in the{" "}
        <InternalLink to="/project-summary">project summary</InternalLink>.
      </InfoAlert>

      <Subheading>Training</Subheading>

      <Paragraph>
        After splitting up the dataset, 80% (1.28 million tweets) was allocated
        for training, 10% (160,000 tweets) for validation, and 10% (160,000
        tweets) for testing. This division ensures the model can be trained on a
        large amount of data while still having sufficient datasets for
        evaluating and testing its performance.
      </Paragraph>

      <div className="mb-6">
        <pre>
          <code className="language-py line-numbers">{code}</code>
        </pre>
      </div>

      <Paragraph>
        Here, `model.fit` is used function to train the model. The `train_ds`
        and `val_ds` are the training and validation datasets, respectively. The
        model is trained for 3 epochs, which means the model will go through the
        entire training dataset 3 times. During training, two additional
        features were used:
      </Paragraph>

      <UnorderedList>
        <ListItem>
          <span className="font-semibold">Batch Metrics Callback:</span> This
          callback is used to track training and validation loss and accuracy
          across batches. It helps to monitor the model's progress during
          training.
        </ListItem>
        <ListItem>
          <span className="font-semibold">Early Stopping:</span> The early
          stopping callback allows the training process to be stopped early if
          the model's performance on the validation set stops improving. It
          helps prevent overfitting, which occurs when the model becomes too
          specialized to the training data and performs poorly on unseen data.
        </ListItem>
      </UnorderedList>

      <Subheading>Progression</Subheading>

      <Paragraph>
        The graph below shows the progression of training and validation
        accuracy across batches:
      </Paragraph>

      <img
        className="mb-6"
        width="450px"
        height="auto"
        src="/images/training_accuracy.png"
        alt="Training accuracy"
      />

      <Paragraph>
        As the training progresses, the accuracy improves. At the beginning, the
        accuracy and loss start out around 50% since this is a binary
        classification. However, after being trained on approximately 125,000
        batches (equivalent to three epochs at 40,000 batches each), the
        accuracy reaches around 85% and the loss drops to about 35%. The slight
        jumps in accuracy and loss at the end of each epoch indicate that the
        model has completed one full pass over the training data and started a
        new epoch.
      </Paragraph>

      <Subheading>Accuracy</Subheading>

      <Paragraph>
        After the training process, the model achieved the following performance
        on the test set:
      </Paragraph>

      <img
        className="mb-6"
        width="450px"
        height="auto"
        src="/images/confusion_matrix.png"
        alt="Confusion matrix"
      />

      <Paragraph>
        The confusion matrix provides a detailed view of the model's
        predictions. It shows the number of true positive, true negative, false
        positive, and false negative predictions. Based on the confusion matrix,
        the overall accuracy of the model can be determined. The accuracy is
        calculated by summing up the true positive and true negative predictions
        and dividing it by the total number of predictions. In this case, the
        overall accuracy is calculated as:
      </Paragraph>

      <div className="mb-6">
        <pre>
          <code className="language-py">
            accuracy = (67844 + 64596) / (67844 + 64596 + 12156 + 15404) =
            0.82775
          </code>
        </pre>
      </div>

      <Subheading>Summary</Subheading>

      <Paragraph>
        The overall accuracy of the model against the test set is approximately{" "}
        <span className="font-semibold">~83%.</span> Considering that{" "}
        <ExternalLink to="https://www.lexalytics.com/blog/sentiment-accuracy-baseline-testing/">
          humans only agree on sentiment 80-85% of the time
        </ExternalLink>
        , this may be considered a good result. Even if the model had achieved
        100% accuracy, it is likely that humans would still disagree with it
        15-20% of the time.
      </Paragraph>

      <Paragraph>
        In the next section, I am proud to present an interactive demo where you
        can test the sentiment analysis model firsthand. Get ready to see the
        model in action!
      </Paragraph>
    </Page>
  );
};

export default TrainingAndAccuracy;
