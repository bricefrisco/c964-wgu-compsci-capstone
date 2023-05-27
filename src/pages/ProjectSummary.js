import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import Subheading from "../components/Subheading";

const ProjectSummary = () => {
  return (
    <Page title="Project Summary" meta="Computer science capstone summary">
      <Paragraph>
        Throughout this Computer Science Capstone project, a machine learning
        solution for sentiment analysis has been developed to address the
        problem faced by PestFree Solutions, an online company seeking to gather
        further feedback from customer interactions via their online chat
        application.
      </Paragraph>

      <Subheading>Accomplishments</Subheading>

      <Paragraph>
        The machine learning model employed in this project has shown promising
        results in predicting sentiment in short sequences of text. By analyzing
        the sentiment within chat logs, recurring problems can be identified,
        and areas for improvement in customer service can be highlighted. The
        model achieved a solid accuracy on the test set, demonstrating its
        effectiveness in classifying sentiments.
      </Paragraph>

      <Paragraph>
        By automatically analyzing and classifying sentiments, businesses can
        gain valuable insights into customer experiences, proactively address
        concerns, and enhance overall customer satisfaction.
      </Paragraph>

      <Paragraph>
        Additionally, the lightweight architecture of the model, weighing in at
        just around 5MB, allows for seamless integration into applications
        without the need for a separate backend server or expense. The model can
        be embedded directly into the webpage, ensuring fast response times.
        This compact size and efficiency make it a practical solution for
        resource-constrained environments.
      </Paragraph>

      <Subheading>Conclusion</Subheading>

      <Paragraph>
        If you have not already, feel free to explore{" "}
        <InternalLink to="/interactive-demo">the interactive demo</InternalLink>{" "}
        and try it out firsthand!
      </Paragraph>

      <Paragraph>
        The source code that was written to build and train the model can be
        found on{" "}
        <ExternalLink to="https://www.google.com/todo">
          Google Colab
        </ExternalLink>
        . This website was build using ReactJS and TailwindCSS, the source code
        can be found on{" "}
        <ExternalLink to="https://www.github.com/TODO">Github</ExternalLink>
      </Paragraph>

      <Paragraph>
        Thank you for joining me on this journey through my Computer Science
        Capstone project!
      </Paragraph>
    </Page>
  );
};

export default ProjectSummary;
