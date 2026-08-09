export type CredentialItem = {
  label: string;
  /** Omit rather than guess. Empty values are never rendered. */
  value?: string;
  note?: string;
};

export type Credentials = {
  /**
   * Experience Modification Rate, e.g. "0.87". This is the single most
   * requested number on public and institutional prequalification forms.
   */
  emr?: string;
  /** Total recordable incident rate from the OSHA 300A summary. */
  trir?: string;
  bonding?: {
    /** Largest single project, e.g. "$5,000,000". */
    single?: string;
    /** Total program capacity, e.g. "$15,000,000". */
    aggregate?: string;
    surety?: string;
  };
  insurance?: {
    generalLiability?: string;
    autoLiability?: string;
    umbrella?: string;
    workersComp?: string;
  };
  licenses: CredentialItem[];
  certifications: CredentialItem[];
  associations: CredentialItem[];
};

/**
 * Verified facts only — these numbers get audited by the people reading them.
 *
 * Every section of /certifications renders only when its data is present, and
 * the page as a whole stays out of the search index until something real is
 * filled in here.
 */
export const credentials: Credentials = {
  licenses: [],
  certifications: [],
  associations: [],
};

function anyValue(group?: object) {
  return group ? Object.values(group).some(Boolean) : false;
}

export const hasPublishableCredentials =
  Boolean(credentials.emr) ||
  Boolean(credentials.trir) ||
  anyValue(credentials.bonding) ||
  anyValue(credentials.insurance) ||
  credentials.licenses.length > 0 ||
  credentials.certifications.length > 0 ||
  credentials.associations.length > 0;
