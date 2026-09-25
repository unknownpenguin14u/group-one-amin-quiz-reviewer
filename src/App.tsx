import React, { useState, useEffect } from 'react';
import { UserProfile, QuizQuestion, QuizSessionResult, QuestionType, ChapterNumber, VoCReview } from './types';
import { getQuestionsForQuiz } from './data/quizData';
import { INITIAL_VOC_REVIEWS } from './data/vocData';
import { Header } from './components/Header';
import { WelcomeLoginModal } from './components/WelcomeLoginModal';
import { Dashboard } from './components/Dashboard';
import { QuizReviewer } from './components/QuizReviewer';
import { QuizResults } from './components/QuizResults';
import { StudyGuide } from './components/StudyGuide';
import { MemoryVersesView } from './components/MemoryVersesView';
import { ScoreHistory } from './components/ScoreHistory';
import { VoiceOfCustomerView } from './components/VoiceOfCustomerView';

const STORAGE_USER_KEY = 'group_one_amin_user_profile';
const STORAGE_HISTORY_KEY = 'group_one_amin_quiz_history';
const STORAGE_VOC_KEY = 'group_one_amin_voc_reviews';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isSwitchingUser, setIsSwitchingUser] = useState(false);
  const [activeTab, setActiveTab] = useState<'quiz' | 'study' | 'memory' | 'history' | 'voc'>('quiz');

  // Active quiz session states
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[] | null>(null);
  const [currentQuizTypeTitle, setCurrentQuizTypeTitle] = useState('');
  const [currentChapterLabel, setCurrentChapterLabel] = useState('');
  const [lastCompletedResult, setLastCompletedResult] = useState<QuizSessionResult | null>(null);

  // Past history
  const [history, setHistory] = useState<QuizSessionResult[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_HISTORY_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Voice of Customer (VoC) Reviews
  const [vocReviews, setVocReviews] = useState<VoCReview[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_VOC_KEY);
      return saved ? JSON.parse(saved) : INITIAL_VOC_REVIEWS;
    } catch {
      return INITIAL_VOC_REVIEWS;
    }
  });

  // Persist user, history, and VoC changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(STORAGE_VOC_KEY, JSON.stringify(vocReviews));
  }, [vocReviews]);

  const handleLogin = (profile: UserProfile) => {
    setUser(profile);
    setIsSwitchingUser(false);
  };

  const handleStartQuiz = (
    type: QuestionType | 'mixed',
    chapter: ChapterNumber | 'all',
    count: number
  ) => {
    const questions = getQuestionsForQuiz(type, chapter);
    const sliced = questions.slice(0, count);

    let typeTitle = 'Multiple Choice';
    if (type === 'true_false') typeTitle = 'True or False';
    else if (type === 'identification') typeTitle = 'Identification';
    else if (type === 'mixed') typeTitle = 'Mixed Comprehensive';

    const chapLabel = chapter === 'all' ? 'Matthew 6–10' : `Matthew Chapter ${chapter}`;

    setActiveQuestions(sliced);
    setCurrentQuizTypeTitle(typeTitle);
    setCurrentChapterLabel(chapLabel);
    setLastCompletedResult(null);
  };

  const handleFinishQuiz = (result: QuizSessionResult) => {
    setLastCompletedResult(result);
    setHistory((prev) => [result, ...prev]);

    // Update user stats
    if (user) {
      const newTotal = (user.totalQuizzesTaken || 0) + 1;
      const newHighScore = Math.max(user.highScore || 0, result.percentage);
      setUser({
        ...user,
        totalQuizzesTaken: newTotal,
        highScore: newHighScore,
      });
    }
  };

  const handleRetakeMissed = () => {
    if (!lastCompletedResult || !activeQuestions) return;
    const missedSet = new Set(lastCompletedResult.missedQuestionIds);
    const missedOnly = activeQuestions.filter((q) => missedSet.has(q.id));

    if (missedOnly.length > 0) {
      setActiveQuestions(missedOnly);
      setCurrentQuizTypeTitle(currentQuizTypeTitle + ' (Missed Questions Review)');
      setLastCompletedResult(null);
    }
  };

  const handleRetakeFullQuiz = () => {
    if (activeQuestions) {
      // Reshuffle current questions
      const reshuffled = [...activeQuestions].sort(() => Math.random() - 0.5);
      setActiveQuestions(reshuffled);
      setLastCompletedResult(null);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_HISTORY_KEY);
  };

  const handleAddReview = (newReview: VoCReview) => {
    setVocReviews((prev) => [newReview, ...prev]);
  };

  const handleLikeReview = (id: string) => {
    setVocReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Top Header Navigation */}
      <Header
        user={user}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setActiveQuestions(null);
          setLastCompletedResult(null);
        }}
        onChangeUser={() => setIsSwitchingUser(true)}
        inQuiz={Boolean(activeQuestions && !lastCompletedResult)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* If user not logged in or switching */}
        {(!user || isSwitchingUser) && (
          <WelcomeLoginModal
            onLogin={handleLogin}
            initialName={user?.name || ''}
            isSwitching={isSwitchingUser}
            onCancel={() => setIsSwitchingUser(false)}
          />
        )}

        {/* When active questions exist and not finished -> Show Interactive Quiz Reviewer */}
        {activeQuestions && !lastCompletedResult && user && (
          <QuizReviewer
            questions={activeQuestions}
            quizTypeTitle={currentQuizTypeTitle}
            chapterLabel={currentChapterLabel}
            userName={user.name}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={() => {
              setActiveQuestions(null);
              setLastCompletedResult(null);
            }}
          />
        )}

        {/* When quiz completed -> Show Detailed Results Screen */}
        {lastCompletedResult && activeQuestions && (
          <QuizResults
            result={lastCompletedResult}
            questions={activeQuestions}
            onRetakeQuiz={handleRetakeFullQuiz}
            onRetakeMissed={handleRetakeMissed}
            onGoToStudy={() => {
              setActiveQuestions(null);
              setLastCompletedResult(null);
              setActiveTab('study');
            }}
            onGoToDashboard={() => {
              setActiveQuestions(null);
              setLastCompletedResult(null);
              setActiveTab('quiz');
            }}
          />
        )}

        {/* Normal Tab Views (when not inside active quiz session) */}
        {!activeQuestions && (
          <>
            {activeTab === 'quiz' && user && (
              <Dashboard
                user={user}
                onStartQuiz={handleStartQuiz}
                onOpenStudyGuide={() => setActiveTab('study')}
                onOpenMemoryVerses={() => setActiveTab('memory')}
                onOpenVoC={() => setActiveTab('voc')}
              />
            )}

            {activeTab === 'study' && (
              <StudyGuide
                onStartQuizWithChapter={(chap) => {
                  setActiveTab('quiz');
                  handleStartQuiz('multiple_choice', chap, 15);
                }}
              />
            )}

            {activeTab === 'memory' && <MemoryVersesView />}

            {activeTab === 'history' && user && (
              <ScoreHistory
                user={user}
                history={history}
                onTakeQuiz={() => setActiveTab('quiz')}
                onClearHistory={handleClearHistory}
              />
            )}

            {activeTab === 'voc' && (
              <VoiceOfCustomerView
                user={user}
                reviews={vocReviews}
                onAddReview={handleAddReview}
                onLikeReview={handleLikeReview}
              />
            )}
          </>
        )}
      </main>

      {/* Blue Footer */}
      <footer className="bg-blue-950 text-blue-300 py-6 border-t border-blue-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 text-center sm:flex sm:items-center sm:justify-between">
          <p className="font-medium">
            Group One Amin • Bible Quiz Reviewer (Matthew Chapters 6 to 10)
          </p>
          <p className="mt-2 sm:mt-0 text-blue-400">
            Dedicated for study, recitation, scripture mastery, and learner feedback.
          </p>
        </div>
      </footer>
    </div>
  );
}
