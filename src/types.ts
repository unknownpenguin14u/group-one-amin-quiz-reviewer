export type QuestionType = 'multiple_choice' | 'true_false' | 'identification';

export type ChapterNumber = 6 | 7 | 8 | 9 | 10 | 'memory_verses';

export interface BaseQuestion {
  id: string;
  chapter: ChapterNumber;
  verse: string;
  question?: string;
  explanation?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple_choice';
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true_false';
  statement: string;
  isTrue: boolean;
  correctExplanation: string;
}

export interface IdentificationQuestion extends BaseQuestion {
  type: 'identification';
  question: string;
  acceptedAnswers: string[];
  primaryAnswer: string;
  hint?: string;
}

export type QuizQuestion = MultipleChoiceQuestion | TrueFalseQuestion | IdentificationQuestion;

export interface UserAnswer {
  questionId: string;
  userResponse: string | boolean;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

export interface QuizSessionResult {
  id: string;
  userName: string;
  groupName: string;
  quizType: QuestionType | 'mixed';
  chapterFilter: ChapterNumber | 'all';
  totalQuestions: number;
  score: number;
  percentage: number;
  completedAt: string;
  answers: UserAnswer[];
  missedQuestionIds: string[];
}

export interface QuizConfig {
  type: QuestionType | 'mixed';
  chapter: ChapterNumber | 'all';
  questionCount: number;
  instantFeedback: boolean;
  timedMode: boolean;
  timePerQuestion?: number; // seconds
}

export interface UserProfile {
  name: string;
  group: string;
  avatarSeed?: string;
  createdAt: string;
  highScore?: number;
  totalQuizzesTaken: number;
}

export interface VoCReview {
  id: string;
  userName: string;
  role: string;
  rating: number; // 1 to 5
  feedback: string;
  studyTip?: string;
  favoriteChapter: string;
  modePreferred: string;
  createdAt: string;
  helpfulCount: number;
  tags: string[];
}

export interface QuestionVoCFeedback {
  questionId: string;
  type: 'helpful' | 'tricky' | 'clear';
}

