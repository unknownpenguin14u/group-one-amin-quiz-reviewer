import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { QuizSessionResult, QuizQuestion } from '../types';
import { 
  Award, 
  RotateCcw, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Trophy, 
  Sparkles,
  Share2,
  Calendar
} from 'lucide-react';

interface QuizResultsProps {
  result: QuizSessionResult;
  questions: QuizQuestion[];
  onRetakeQuiz: () => void;
  onRetakeMissed: () => void;
  onGoToStudy: () => void;
  onGoToDashboard: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  result,
  questions,
  onRetakeQuiz,
  onRetakeMissed,
  onGoToStudy,
  onGoToDashboard,
}) => {
  const { score, totalQuestions, percentage, missedQuestionIds, userName, groupName } = result;

  // Trigger celebration confetti for good scores
  useEffect(() => {
    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#f59e0b']
        });
      } catch (err) {
        console.error('Confetti error:', err);
      }
    }
  }, [percentage]);

  const getPerformanceBadge = () => {
    if (percentage === 100) return { title: 'Perfect Score! Scripture Champion', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    if (percentage >= 85) return { title: 'Excellent Mastery!', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (percentage >= 70) return { title: 'Good Performance!', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    return { title: 'Keep Practicing & Reviewing!', color: 'text-slate-700 bg-slate-100 border-slate-200' };
  };

  const badge = getPerformanceBadge();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Score Hero Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden mb-8">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 p-6 sm:p-10 text-white text-center relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30 mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>Group One Amin • Quiz Session Complete</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight mb-1 text-white">
            Congratulations, {userName}!
          </h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto">
            You completed the review session for Matthew Chapters 6–10.
          </p>

          {/* Circular Score Highlight */}
          <div className="my-6 inline-flex flex-col items-center justify-center p-6 rounded-full bg-blue-950/70 border-4 border-blue-400/40 w-36 h-36 sm:w-44 sm:h-44 shadow-2xl">
            <span className="text-3xl sm:text-5xl font-black font-heading text-white">
              {percentage}%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-200 mt-1">
              {score} of {totalQuestions} Correct
            </span>
          </div>

          <div className="max-w-xs mx-auto">
            <div className={`px-4 py-1.5 rounded-full text-xs font-bold border ${badge.color}`}>
              {badge.title}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {missedQuestionIds.length > 0 && (
              <button
                type="button"
                onClick={onRetakeMissed}
                className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Missed Questions ({missedQuestionIds.length})</span>
              </button>
            )}

            <button
              type="button"
              onClick={onRetakeQuiz}
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Full Quiz</span>
            </button>

            <button
              type="button"
              onClick={onGoToStudy}
              className="px-5 py-3 bg-white hover:bg-slate-100 text-blue-900 border border-blue-200 rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Open Study Guide</span>
            </button>

            <button
              type="button"
              onClick={onGoToDashboard}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <span>Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Question Review */}
      <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Detailed Question Review
            </h3>
            <p className="text-xs text-slate-500">
              Review answers, scripture verses, and explanations from Matthew 6–10
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 className="w-4 h-4" /> {score} Correct
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-rose-600">
              <XCircle className="w-4 h-4" /> {totalQuestions - score} Incorrect
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAnswer = result.answers.find(a => a.questionId === q.id);
            const isCorrect = userAnswer?.isCorrect;

            let correctText = '';
            if (q.type === 'multiple_choice') correctText = q.correctAnswer;
            else if (q.type === 'true_false') correctText = q.isTrue ? 'TRUE' : 'FALSE';
            else if (q.type === 'identification') correctText = q.primaryAnswer;

            let userText = '';
            if (userAnswer) {
              if (typeof userAnswer.userResponse === 'boolean') {
                userText = userAnswer.userResponse ? 'TRUE' : 'FALSE';
              } else {
                userText = userAnswer.userResponse || '(No answer)';
              }
            }

            return (
              <div
                key={q.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isCorrect
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : 'bg-rose-50/40 border-rose-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                      isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}>
                      #{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-blue-900 bg-blue-100/70 px-2 py-0.5 rounded">
                      {q.verse}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                      {q.type.replace('_', ' ')}
                    </span>
                  </div>

                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                      <XCircle className="w-3.5 h-3.5" /> Missed
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base font-semibold text-slate-900 mb-3">
                  {q.type === 'true_false' ? q.statement : q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500 block mb-0.5 font-medium">Your Answer:</span>
                    <span className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {userText}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500 block mb-0.5 font-medium">Correct Answer:</span>
                    <span className="font-bold text-emerald-700">
                      {correctText}
                    </span>
                  </div>
                </div>

                {(q.explanation || (q.type === 'true_false' && q.correctExplanation)) && (
                  <p className="text-xs text-slate-600 mt-2 italic bg-white/70 p-2.5 rounded-lg border border-slate-200/60">
                    <strong className="not-italic text-slate-700 font-semibold">Scripture note:</strong>{' '}
                    {q.explanation || (q.type === 'true_false' && q.correctExplanation)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
