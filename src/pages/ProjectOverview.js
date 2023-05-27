import InfoAlert from "../components/InfoAlert";
import InternalLink from "../components/InternalLink";
import Paragraph from "../components/Paragraph";
import Subheading from "../components/Subheading";
import Page from "../components/Page";

const ProjectOverview = () => {
  return (
    <Page
      title="Project overview"
      meta="Welcome to my Computer Science Capstone (C964) project for Western Governors University!"
    >
      <Paragraph>
        For the capstone, I was tasked with{" "}
        <span className="font-semibold">
          developing and presenting a machine learning application
        </span>{" "}
        that aims to solve a specific problem. As part of the project, I had the
        freedom to define the problem, propose a solution, and create a final
        product that showcased my skills and knowledge acquired during my
        Computer Science program.
      </Paragraph>

      <Paragraph>
        In the following sections, I will provide an overview of my project. The
        introduction will outline the problem and solution. The data exploration
        phase covers data sources, analysis, and preprocessing.
      </Paragraph>

      <Subheading>Interactive demo</Subheading>

      <Paragraph>
        Next, I will discuss the model development, including the model's
        architecture, training process, and performance. Additionally,{" "}
        <span className="font-semibold">
          I am excited to present an interactive demonstration of my project
        </span>
        , allowing you to experience its functionality.
      </Paragraph>

      <InfoAlert title="The demo">
        The interactive demo is presented after the project walkthrough,
        however, if you would like to skip to it straight away then please{" "}
        <InternalLink to="/interactive-demo">click here</InternalLink>.
      </InfoAlert>

      <Paragraph>
        Lastly, I will conclude with a summary of my project, highlighting key
        findings and accomplishments. Join me on this journey as I share the
        details and outcomes of my completed capstone project!
      </Paragraph>
    </Page>
  );
};

export default ProjectOverview;
