// Questionnaire Response Types

export type Grade = 'grade-6' | 'grade-7' | 'grade-8' | 'grade-9' | 'grade-10' | 'grade-11' | 'grade-12' | 'other';

export type CareerStage = 'one-main' | 'several' | 'general-interests' | 'not-started' | 'not-sure';

export type ExposureLevel = 'tried-myself' | 'observed' | 'researched' | 'indirect-knowledge' | 'very-little';

export type ConfidenceLevel = 1 | 2 | 3 | 4 | 5;

export type OpennessLevel = 1 | 2 | 3 | 4 | 5;

export interface CareerInterest {
  id: string;
  title: string;
}

export interface QuestionnaireResponse {
  // Metadata
  submissionId: string;
  submittedAt: string;

  // Question 1: Grade
  grade: Grade | null;

  // Question 2: Career Stage (determines branching)
  careerStage: CareerStage | null;

  // Branch A: Career Interest Questions (Q3-Q10)
  // Only populated if careerStage is 'one-main', 'several', or 'general-interests'
  currentCareerInterests: CareerInterest[];
  reasonsForInterest: string[]; // up to 3
  perceivedDailyWork: string;
  impressionSources: string[]; // multi-select
  exposureLevel: ExposureLevel | null;
  understandingConfidence: ConfidenceLevel | null;
  informationToVerify: string[]; // up to 3
  assumptionToTest: string;

  // Branch B: Exploration Questions (Q B1-B2)
  // Only populated if careerStage is 'not-started' or 'not-sure'
  explorationBarriers: string[]; // up to 3
  preferredExplorationSupport: string[]; // up to 3

  // Questions for All Students (Q11-Q14)
  opennessToExploration: OpennessLevel | null;
  preferredExperiences: string[]; // up to 3
  desiredEventOutcomes: string[]; // up to 2
  questionForProfessional: string;

  // Email Opt-in (Optional)
  marketingOptIn: boolean;
  email?: string;
  emailOwner?: 'student' | 'parent' | 'other';
}

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
}

export interface Question {
  id: string;
  type: 'single-select' | 'multi-select' | 'text' | 'textarea' | 'scale' | 'text-array';
  question: string;
  description?: string;
  helperText?: string;
  options?: QuestionOption[];
  maxSelections?: number;
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: { [key: number]: string };
  branching?: {
    field: keyof QuestionnaireResponse;
    values: unknown[];
  };
}
