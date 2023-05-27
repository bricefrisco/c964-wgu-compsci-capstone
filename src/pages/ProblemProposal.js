import ListItem from "../components/ListItem";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import UnorderedList from "../components/UnorderedList";

const ProblemProposal = () => {
  return (
    <Page
      title="Problem proposal"
      meta="Defining the problem faced by PestFree Solutions"
    >
      <Paragraph>
        My case study revolves around a fictitious company called{" "}
        <span className="font-semibold">PestFree Solutions</span>. They have a
        burgeoning online presence and their primary mode of customer
        interaction is an online live chat application.
      </Paragraph>

      <Paragraph>
        While this chat application has provided a platform for immediate
        customer engagement, PestFree Solutions has realized an untapped
        potential in the wealth of data it collects. Specifically, the company
        has identified two main challenges:
      </Paragraph>

      <UnorderedList>
        <ListItem>
          <span className="font-semibold">
            Understanding Customer Concerns.
          </span>{" "}
          The company wishes to analyze the content of the chats to identify
          recurring problems or common issues that customers face. This
          information could guide the company in proactively addressing these
          concerns, resulting in improved customer service and potentially
          reducing the frequency of such issues.
        </ListItem>

        <ListItem>
          <span className="font-semibold">
            Evaluating Customer Service Performance.
          </span>{" "}
          The company is keen to understand the effectiveness of their customer
          service. They would like to measure customer satisfaction and identify
          areas of service that may need improvement.
        </ListItem>
      </UnorderedList>

      <Paragraph>
        However, manually analyzing each chat for this purpose is time-consuming
        and resource-intensive. PestFree Solutions requires a more efficient
        solution to process and extract valuable insights from the live chat
        interactions.
      </Paragraph>

      <Paragraph>
        In summary, PestFree Solutions seeks to leverage its existing data
        source—the live chat application—to better understand customer concerns
        and evaluate their customer service performance. The challenge lies in
        finding a scalable and efficient method to extract these insights from
        the chat data.
      </Paragraph>
    </Page>
  );
};

export default ProblemProposal;
