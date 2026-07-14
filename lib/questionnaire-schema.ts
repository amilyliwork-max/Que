import { Question } from './types';

export const questionnaireSchema: { [key: string]: Question } = {
  // Welcome screen is handled separately in UI

  // Q1: Grade
  grade: {
    id: 'grade',
    type: 'single-select',
    question: 'What grade are you currently in?',
    options: [
      { id: 'grade-6', label: 'Grade 6' },
      { id: 'grade-7', label: 'Grade 7' },
      { id: 'grade-8', label: 'Grade 8' },
      { id: 'grade-9', label: 'Grade 9' },
      { id: 'grade-10', label: 'Grade 10' },
      { id: 'grade-11', label: 'Grade 11' },
      { id: 'grade-12', label: 'Grade 12' },
      { id: 'other', label: 'Other' },
    ],
  },

  // Q2: Career Stage (determines branching)
  careerStage: {
    id: 'careerStage',
    type: 'single-select',
    question: 'Which statement best describes where you are right now?',
    options: [
      { id: 'one-main', label: 'I have one main career in mind.' },
      { id: 'several', label: 'I am considering several careers.' },
      { id: 'general-interests', label: 'I have some general interests, but no specific career in mind.' },
      { id: 'not-started', label: 'I have not started thinking about careers yet.' },
      { id: 'not-sure', label: 'I am not sure.' },
    ],
  },

  // BRANCH A: Questions for students with career interests

  // Q3: Current Interest
  currentCareerInterests: {
    id: 'currentCareerInterests',
    type: 'text-array',
    question: 'What career or type of work are you currently most interested in?',
    description: 'You can add up to 5 careers or fields.',
    helperText: 'Enter one career or field and click "Add another" to add more.',
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // Q4: Reasons for Interest
  reasonsForInterest: {
    id: 'reasonsForInterest',
    type: 'multi-select',
    question: 'What attracts you to this career or type of work?',
    maxSelections: 3,
    options: [
      { id: 'actual-tasks', label: 'The actual tasks or activities involved' },
      { id: 'help-people', label: 'The opportunity to help people' },
      { id: 'solve-problems', label: 'The opportunity to solve important problems' },
      { id: 'be-creative', label: 'The opportunity to be creative' },
      { id: 'subjects-skills', label: 'The subjects or skills involved' },
      { id: 'salary', label: 'The salary or financial stability' },
      { id: 'lifestyle', label: 'The lifestyle or work-life balance' },
      { id: 'status', label: 'The status or reputation of the career' },
      { id: 'lead', label: 'The opportunity to lead or influence others' },
      { id: 'someone-knows', label: 'Someone I know has this career' },
      { id: 'family-encouraged', label: 'My family or other people encouraged me to consider it' },
      { id: 'good-at', label: 'It seems connected to something I am already good at' },
      { id: 'not-sure', label: 'I am still not sure what attracts me to it' },
      { id: 'other', label: 'Other' },
    ],
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // Q5: Perceived Daily Work
  perceivedDailyWork: {
    id: 'perceivedDailyWork',
    type: 'textarea',
    question: 'What do you think someone in this career actually does during a typical workday?',
    helperText: 'It is okay to write "not sure." We are interested in your current impression.',
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // Q6: Impression Sources
  impressionSources: {
    id: 'impressionSources',
    type: 'multi-select',
    question: 'What has influenced your impression of this career?',
    options: [
      { id: 'class-subject', label: 'A class or school subject' },
      { id: 'school-project', label: 'A school project, club, or competition' },
      { id: 'hobby', label: 'A hobby or personal project' },
      { id: 'relationship', label: 'A family member, friend, teacher, or mentor' },
      { id: 'social-media', label: 'Social media' },
      { id: 'media', label: 'Movies, television, books, podcasts, or online videos' },
      { id: 'research', label: 'Research I have done myself' },
      { id: 'talking-professional', label: 'Talking with someone who works in the field' },
      { id: 'workplace-visit', label: 'Visiting a workplace' },
      { id: 'shadowing', label: 'Job shadowing, volunteering, or an internship' },
      { id: 'dont-know-much', label: 'I do not know very much about the career yet' },
      { id: 'other', label: 'Other' },
    ],
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // Q7: Exposure Level
  exposureLevel: {
    id: 'exposureLevel',
    type: 'single-select',
    question: 'How much direct experience have you had with this type of work?',
    options: [
      { id: 'tried-myself', label: 'I have tried similar tasks or activities myself.' },
      { id: 'observed', label: 'I have spoken with or observed someone doing this work.' },
      { id: 'researched', label: 'I have researched the career but have not experienced it directly.' },
      { id: 'indirect-knowledge', label: 'I mainly know about it through school, media, family, or friends.' },
      { id: 'very-little', label: 'I know very little about what the work is actually like.' },
    ],
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // Q8: Understanding Confidence
  understandingConfidence: {
    id: 'understandingConfidence',
    type: 'scale',
    question: 'How confident are you that you understand what this career is actually like?',
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      1: 'Not confident at all',
      2: 'Slightly confident',
      3: 'Somewhat confident',
      4: 'Very confident',
      5: 'Extremely confident',
    },
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // Q9: Information to Verify
  informationToVerify: {
    id: 'informationToVerify',
    type: 'multi-select',
    question: 'What would you most like to find out before deciding whether this career is right for you?',
    maxSelections: 3,
    options: [
      { id: 'daily-work', label: 'What people actually do each day' },
      { id: 'required-skills', label: 'What skills the work requires' },
      { id: 'education', label: 'What education or training is needed' },
      { id: 'what-enjoy', label: 'What people enjoy about the work' },
      { id: 'difficult', label: 'What is difficult or stressful about the work' },
      { id: 'salary-benefits', label: 'Salary and financial stability' },
      { id: 'work-hours', label: 'Work hours and lifestyle' },
      { id: 'growth', label: 'Opportunities for growth or career change' },
      { id: 'ai-tech', label: 'How AI or technology may change the work' },
      { id: 'match-fit', label: 'Whether the career matches my interests and strengths' },
      { id: 'other', label: 'Other' },
    ],
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // Q10: Assumption to Test
  assumptionToTest: {
    id: 'assumptionToTest',
    type: 'textarea',
    question: 'What is one assumption you have about this career that you would like to confirm or challenge?',
    helperText: 'This could be an assumption about the work, salary, education, lifestyle, required skills, or people in the field.',
    branching: {
      field: 'careerStage',
      values: ['one-main', 'several', 'general-interests'],
    },
  },

  // BRANCH B: Questions for students without career interests

  // Q B1: Exploration Barriers
  explorationBarriers: {
    id: 'explorationBarriers',
    type: 'multi-select',
    question: 'What makes it difficult to think about future careers?',
    maxSelections: 3,
    options: [
      { id: 'not-enough-info', label: 'I do not know enough about the careers that are available.' },
      { id: 'unsure-interests', label: 'I am not sure what I am interested in.' },
      { id: 'unsure-good-at', label: 'I am not sure what I am good at.' },
      { id: 'many-interests', label: 'I am interested in many different things.' },
      { id: 'far-away', label: 'Careers still feel too far away.' },
      { id: 'school-jobs-disconnect', label: 'I do not know how school subjects connect to real jobs.' },
      { id: 'pressure', label: 'I feel pressure to choose the "right" career.' },
      { id: 'limited-exposure', label: 'I have not had enough opportunities to explore different kinds of work.' },
      { id: 'other', label: 'Other' },
      { id: 'nothing', label: 'Nothing in particular' },
    ],
    branching: {
      field: 'careerStage',
      values: ['not-started', 'not-sure'],
    },
  },

  // Q B2: Preferred Exploration Support
  preferredExplorationSupport: {
    id: 'preferredExplorationSupport',
    type: 'multi-select',
    question: 'What would make career exploration feel more useful or interesting to you?',
    maxSelections: 3,
    options: [
      { id: 'discover-new', label: 'Discovering careers I have never heard of' },
      { id: 'see-work', label: 'Seeing what people actually do at work' },
      { id: 'try-task', label: 'Trying a real task or activity' },
      { id: 'meet-pros', label: 'Meeting professionals' },
      { id: 'connect-hobbies', label: 'Connecting careers to my hobbies or interests' },
      { id: 'school-to-jobs', label: 'Understanding how school subjects are used in real life' },
      { id: 'different-paths', label: 'Learning about different paths after high school' },
      { id: 'honest-stories', label: 'Hearing honest stories about mistakes and career changes' },
      { id: 'other', label: 'Other' },
    ],
    branching: {
      field: 'careerStage',
      values: ['not-started', 'not-sure'],
    },
  },

  // QUESTIONS FOR ALL STUDENTS

  // Q11: Openness to Exploration
  opennessToExploration: {
    id: 'opennessToExploration',
    type: 'scale',
    question: 'How open are you to exploring different types of careers?',
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      1: 'Not open at all',
      2: 'Slightly open',
      3: 'Somewhat open',
      4: 'Very open',
      5: 'Completely open',
    },
  },

  // Q12: Preferred Experiences
  preferredExperiences: {
    id: 'preferredExperiences',
    type: 'multi-select',
    question: 'Which experiences would help you understand careers better?',
    maxSelections: 3,
    options: [
      { id: 'hearing-workday', label: 'Hearing a professional describe a typical workday' },
      { id: 'asking-questions', label: 'Asking professionals questions' },
      { id: 'hands-on', label: 'Trying a hands-on activity or career simulation' },
      { id: 'watching-work', label: 'Watching someone complete a real work task' },
      { id: 'workplace-visit', label: 'Visiting a workplace' },
      { id: 'shadowing-internship', label: 'Participating in job shadowing, volunteering, or an internship' },
      { id: 'challenges', label: 'Hearing about professionals\' mistakes, challenges, or career changes' },
      { id: 'compare-careers', label: 'Comparing several careers that use similar skills' },
      { id: 'during-school', label: 'Learning what I can do while I am still in school' },
      { id: 'other', label: 'Other' },
    ],
  },

  // Q13: Desired Event Outcomes
  desiredEventOutcomes: {
    id: 'desiredEventOutcomes',
    type: 'multi-select',
    question: 'At the end of a career exploration event, what would you most like to leave with?',
    maxSelections: 2,
    options: [
      { id: 'better-understanding', label: 'A better understanding of a career I am already considering' },
      { id: 'new-options', label: 'New career options I had not considered before' },
      { id: 'understand-self', label: 'A clearer understanding of my interests and strengths' },
      { id: 'realistic-picture', label: 'A more realistic picture of what different jobs are like' },
      { id: 'next-steps', label: 'Specific next steps I can take' },
      { id: 'less-pressure', label: 'Less pressure to have my future completely figured out' },
      { id: 'mentor', label: 'A professional or mentor I can learn from' },
      { id: 'other', label: 'Other' },
    ],
  },

  // Q14: Student Question
  questionForProfessional: {
    id: 'questionForProfessional',
    type: 'textarea',
    question: 'What is one question you would most like to ask someone about their career?',
    helperText: 'This is optional, but it helps us understand what students want to know.',
  },

  // Email Opt-in (separate section, not a question in flow)
  email: {
    id: 'email',
    type: 'text',
    question: 'Email address',
  },
};
