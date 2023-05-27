import ProjectOverview from "./ProjectOverview";
import ProblemProposal from "./ProblemProposal";
import MachineLearningSolution from "./MachineLearningSolution";
import DataSource from "./DataSource";
import DataAnalysis from "./DataAnalysis";
import DataPreprocessing from "./DataPreprocessing";
import ModelArchitecture from "./ModelArchitecture";
import TrainingAndAccuracy from "./TrainingAndAccuracy";
import InteractiveDemo from "./InteractiveDemo";
import ProjectSummary from "./ProjectSummary";

export const categories = [
  "Introduction",
  "Data exploration",
  "Model development",
  "Conclusion",
];

const pages = [
  {
    title: "Project overview",
    path: "/",
    component: ProjectOverview,
  },
  {
    title: "Problem proposal",
    path: "/problem-proposal",
    category: categories[0],
    component: ProblemProposal,
  },
  {
    title: "Machine learning solution",
    path: "/machine-learning-solution",
    component: MachineLearningSolution,
    category: categories[0],
  },
  {
    title: "Source",
    path: "/data-source",
    component: DataSource,
    category: categories[1],
  },
  {
    title: "Analysis",
    path: "/data-analysis",
    component: DataAnalysis,
    category: categories[1],
  },
  {
    title: "Preprocessing",
    path: "/data-preprocessing",
    component: DataPreprocessing,
    category: categories[1],
  },
  {
    title: "Architecture",
    path: "/model-architecture",
    component: ModelArchitecture,
    category: categories[2],
  },
  {
    title: "Training and accuracy",
    path: "/training-and-accuracy",
    component: TrainingAndAccuracy,
    category: categories[2],
  },
  {
    title: "Interactive demo",
    path: "/interactive-demo",
    component: InteractiveDemo,
    category: categories[2],
  },
  {
    title: "Project summary",
    path: "/project-summary",
    component: ProjectSummary,
    category: categories[3],
  },
];

export default pages;
