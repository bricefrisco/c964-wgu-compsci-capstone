import { useEffect } from "react";
import InfoAlert from "../components/InfoAlert";
import Prism from "../vendor/prism";
import Paragraph from "../components/Paragraph";
import Subheading from "../components/Subheading";
import ExternalLink from "../components/ExternalLink";

import "../vendor/prism.css";
import Page from "../components/Page";

const ModelArchitecture = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const architecture = `import tensorflow as tf

model = tf.keras.models.Sequential([
  tf.keras.layers.Embedding(vocab_size, 45, mask_zero=True, input_length=sequence_length),
  tf.keras.layers.LSTM(100),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(100, activation='relu'),
  tf.keras.layers.Dense(64, activation='relu'),
  tf.keras.layers.Dense(32, activation='relu'),
  tf.keras.layers.Dense(2)])
    
model.compile(loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
  optimizer=tf.keras.optimizers.Adam(learning_rate=0.0001),
  metrics=['accuracy'])`;

  const compilation = `model.compile(loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
  optimizer=tf.keras.optimizers.Adam(learning_rate=0.0001),
  metrics=['accuracy'])`;

  return (
    <Page
      title="Model architecture"
      meta="Unveiling the structure of the sentiment analysis model"
    >
      <Paragraph>
        The architecture of the model was designed with a specific goal in mind
        - efficiency. I wanted to create a lightweight model that is both{" "}
        <span className="font-semibold">
          computationally efficient and effective{" "}
        </span>
        at performing sentiment analysis on short texts. This would enable the
        model to be deployed in real-world applications where resources might be
        limited and response time is crucial, such as an online chat
        application.
      </Paragraph>

      <InfoAlert title="Tensorflow and Keras">
        <ExternalLink to="https://www.tensorflow.org/">TensorFlow</ExternalLink>{" "}
        is an open-source machine learning framework developed by Google. It is
        designed to provide a scalable and versatile platform for machine
        learning and is widely used in the field. Within TensorFlow,{" "}
        <ExternalLink to="https://keras.io/">Keras</ExternalLink> is a
        high-level API that provides tools for building and training neural
        networks with ease and efficiency.
      </InfoAlert>

      <Subheading>Model structure</Subheading>

      <Paragraph>
        The model is like a stack of building blocks, each with a different
        function. Let's go through each layer to understand what it does:
      </Paragraph>

      <div className="mb-6">
        <pre>
          <code className="language-py line-numbers">{architecture}</code>
        </pre>
      </div>

      <Paragraph>
        1. <span className="font-semibold">Embedding Layer:</span> This layer
        takes in the words that have been converted into numbers and transforms
        them into vectors, or lists of numbers, with a fixed size of 45. It
        helps us to manage the input data and consider the zero padding in the
        input sequences.
      </Paragraph>

      <Paragraph>
        2. <span className="font-semibold">LSTM Layer:</span> The Long
        Short-Term Memory layer is like a special type of brain cell that can
        remember information for longer periods of time. This layer uses 100
        units, which you can think of as 100 such brain cells working together.
      </Paragraph>

      <Paragraph>
        3. <span className="font-semibold">Dropout Layer:</span> This layer is
        like a control valve that randomly turns off some brain cells during
        training. This helps to prevent the model from relying too much on any
        one feature and thus overfitting. In this layer, the rate of dropout is
        0.2, meaning 20% of the brain cells will be "turned off" randomly during
        each update.
      </Paragraph>

      <Paragraph>
        4. <span className="font-semibold">Dense Layers:</span> These layers are
        the main building blocks of the model. They connect every neuron in one
        layer to every neuron in the next layer. I used three dense layers with
        100, 64, and 32 neurons respectively. They use 'relu' as their
        activation function which is a simple way to introduce non-linearity
        into the model.
      </Paragraph>

      <Paragraph>
        5. <span className="font-semibold">Final Dense Layer:</span> The final
        layer in the model has 2 neurons, which corresponds to the two
        sentiments being predicted. This layer doesn't have an activation
        function, meaning its output will be a straightforward combination of
        its input.
      </Paragraph>

      <Subheading>Compiling the model</Subheading>
      <Paragraph>
        Once the model structure is defined, the next step is to compile it. In
        the compilation step, the loss function, the optimizer, and the training
        metrics are defined.
      </Paragraph>

      <div className="mb-6">
        <pre>
          <code className="language-py line-numbers">{compilation}</code>
        </pre>
      </div>

      <Paragraph>
        1. <span className="font-semibold">Loss function:</span> I use the
        SparseCategoricalCrossentropy loss function. The purpose of a loss
        function in machine learning is to calculate how well the model did on
        its training data. Specifically, SparseCategoricalCrossentropy is used
        for multiclass classification problems. It calculates the cross-entropy
        loss between the labels and predictions. This loss function is
        particularly suitable here because the labels are integers.
      </Paragraph>

      <Paragraph>
        2. <span className="font-semibold">Optimizer:</span> The optimizer is
        the mechanism through which the model updates based on the data it sees
        and its loss function. I use Adam (Adaptive Moment Estimation)
        optimizer, which is an algorithm for first-order gradient-based
        optimization of stochastic objective functions. I've set a learning rate
        of 0.0001. The learning rate determines the speed at which the optimizer
        travels through the "loss landscape". A smaller learning rate means the
        optimizer takes smaller steps, which can lead to more precise findings,
        but can also slow down the training process.
      </Paragraph>

      <Paragraph>
        3. <span className="font-semibold">Metrics:</span> Metrics are used to
        monitor the training and testing steps. 'Accuracy' is a common metric
        for classification problems. It calculates how often predictions match
        labels.
      </Paragraph>

      <Subheading>Model relevance</Subheading>
      <Paragraph>
        The architecture of this model is tailored for text analysis tasks. The
        Embedding layer can handle the translation of words into numerical
        vectors, the LSTM layer is excellent at recognizing patterns over
        sequences of data, and the Dense layers can handle the final
        classification based on the features detected by the previous layers.
        The Dropout layer is added to prevent overfitting, ensuring the model
        generalizes well to unseen data. Lastly, I use
        SparseCategoricalCrossentropy as the loss function because this is a
        multiclass classification problem: categorizing texts into positive or
        negative sentiment.
      </Paragraph>
      <Paragraph>
        This lightweight yet effective structure is a great fit for sentiment
        analysis in an online chat application, where a balance between
        performance and computational efficiency is crucial.
      </Paragraph>
    </Page>
  );
};

export default ModelArchitecture;
