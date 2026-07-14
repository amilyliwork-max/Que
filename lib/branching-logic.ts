import { QuestionnaireResponse, CareerStage } from './types';

/**
 * Determines if a question should be shown based on the current response state
 * Returns true if question should be displayed, false if it should be skipped
 */
export function shouldShowQuestion(
  questionId: string,
  responses: Partial<QuestionnaireResponse>
): boolean {
  const careerStage = responses.careerStage as CareerStage | undefined;

  // Branch A questions (for students with career interests)
  const branchAQuestions = [
    'currentCareerInterests',
    'reasonsForInterest',
    'perceivedDailyWork',
    'impressionSources',
    'exposureLevel',
    'understandingConfidence',
    'informationToVerify',
    'assumptionToTest',
  ];

  // Branch B questions (for students without career interests)
  const branchBQuestions = [
    'explorationBarriers',
    'preferredExplorationSupport',
  ];

  // Questions for all students
  const universalQuestions = [
    'opennessToExploration',
    'preferredExperiences',
    'desiredEventOutcomes',
    'questionForProfessional',
  ];

  // Check if we're in Branch A
  if (branchAQuestions.includes(questionId)) {
    return careerStage === 'one-main' || careerStage === 'several' || careerStage === 'general-interests';
  }

  // Check if we're in Branch B
  if (branchBQuestions.includes(questionId)) {
    return careerStage === 'not-started' || careerStage === 'not-sure';
  }

  // Universal questions are always shown
  if (universalQuestions.includes(questionId)) {
    return true;
  }

  // Questions asked at the start (before branching)
  if (questionId === 'grade' || questionId === 'careerStage') {
    return true;
  }

  return false;
}

/**
 * Get the complete ordered list of questions that should be shown
 * based on the current responses
 */
export function getQuestionSequence(responses: Partial<QuestionnaireResponse>): string[] {
  const sequence: string[] = [];

  // Start
  sequence.push('grade');
  sequence.push('careerStage');

  // Branch based on careerStage
  const careerStage = responses.careerStage as CareerStage | undefined;

  if (careerStage === 'one-main' || careerStage === 'several' || careerStage === 'general-interests') {
    // Branch A
    sequence.push('currentCareerInterests');
    sequence.push('reasonsForInterest');
    sequence.push('perceivedDailyWork');
    sequence.push('impressionSources');
    sequence.push('exposureLevel');
    sequence.push('understandingConfidence');
    sequence.push('informationToVerify');
    sequence.push('assumptionToTest');
  } else if (careerStage === 'not-started' || careerStage === 'not-sure') {
    // Branch B
    sequence.push('explorationBarriers');
    sequence.push('preferredExplorationSupport');
  }

  // Universal questions
  sequence.push('opennessToExploration');
  sequence.push('preferredExperiences');
  sequence.push('desiredEventOutcomes');
  sequence.push('questionForProfessional');

  return sequence;
}

/**
 * Calculate progress percentage
 */
export function calculateProgress(currentIndex: number, totalQuestions: number): number {
  if (totalQuestions === 0) return 0;
  return Math.round(((currentIndex + 1) / totalQuestions) * 100);
}

/**
 * Validate if all required questions have been answered
 */
export function isQuestionnaireComplete(responses: Partial<QuestionnaireResponse>): boolean {
  const sequence = getQuestionSequence(responses);

  for (const questionId of sequence) {
    const value = (responses as Record<string, unknown>)[questionId];

    // Check if answer is missing or empty
    if (
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'string' && value.trim() === '')
    ) {
      // Some fields are optional
      const optionalFields = ['assumptionToTest', 'questionForProfessional'];
      if (!optionalFields.includes(questionId)) {
        return false;
      }
    }
  }

  return true;
}
