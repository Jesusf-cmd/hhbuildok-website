/**
 * Configurable data for ProjectEngineeringVisualization.
 * Illustrations stay conceptual — never scale drawings of real facilities.
 */

export type EngineeringQuantity = {
  id: string;
  label: string;
  value: string;
  /** Optional unit restatement for screen readers. */
  srValue?: string;
};

export type ProjectEngineeringVisualizationConfig = {
  /** Used for aria and heading. */
  projectTitle: string;
  location: string;
  statusLabel: string;
  eyebrow?: string;
  /** Short owner-confirmed narrative (e.g. material upgrade). */
  highlight?: {
    label: string;
    body: string;
  };
  quantitiesHeading?: string;
  quantitiesNote?: string;
  quantities: EngineeringQuantity[];
  disclaimer?: string;
  /** Named illustration pack — keep conceptual, non-scale. */
  illustration: "tuttle-paving-concept";
};

export const DEFAULT_VISUALIZATION_DISCLAIMER =
  "Project visualization — not for construction";

export const tuttleFireStationVisualization: ProjectEngineeringVisualizationConfig =
  {
    projectTitle: "Tuttle Fire Station No. 2",
    location: "Tuttle, Oklahoma",
    statusLabel: "Nearing completion",
    eyebrow: "Engineering Visualization",
    highlight: {
      label: "Owner-confirmed upgrade",
      body: "The originally specified asphalt parking lot was upgraded to 6-inch concrete paving.",
    },
    quantitiesHeading: "Plan quantities",
    quantitiesNote:
      "Figures below are plan quantities from the project documents, not verified as-built measurements.",
    quantities: [
      {
        id: "lot-6in",
        label: "6-inch concrete parking lot",
        value: "3,753 SF",
        srValue: "3,753 square feet",
      },
      {
        id: "paving-8in",
        label: "8-inch concrete paving",
        value: "3,780 SF",
        srValue: "3,780 square feet",
      },
      {
        id: "sidewalk",
        label: "Concrete sidewalk",
        value: "468 SF",
        srValue: "468 square feet",
      },
      {
        id: "curb",
        label: "Curb and gutter",
        value: "132 LF",
        srValue: "132 linear feet",
      },
      {
        id: "total",
        label: "Total concrete paving and sidewalk",
        value: "8,001 SF",
        srValue: "8,001 square feet",
      },
    ],
    disclaimer: DEFAULT_VISUALIZATION_DISCLAIMER,
    illustration: "tuttle-paving-concept",
  };
