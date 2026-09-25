import React from 'react';
import { QuizSessionResult, UserProfile } from '../types';
import { Award, Trophy, RotateCcw, Calendar, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface ScoreHistoryProps {
  user: UserProfile;
  history: QuizSessionResult[];
  onTakeQuiz: () => void;
  onClearHistory: () => void;
}

export const ScoreHistory: React.FC<ScoreHistoryProps> = ({
  user,
  history,
  onTakeQuiz,
  onClearHistory,
}) => {
  const totalTaken = history.length;
  const bestScore = history.length > 0 ? Math.max(...history.map(h => h.percentage)) : 0;
  const avgScore = history.length > 0
    ? Math.round(history.reduce((acc, h) => acc + h.percentage, 0) / history.length)
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30 mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>Group One Amin • Scholar Progress</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            {user.name}’s Quiz History
          </h2>
          <p className="text-blue-200 text-xs sm:text-sm mt-1">
            Tracking your Matthew 6–10 quiz reviewer sessions and mastery.
          </p>
        </div>

        <button
          onClick={onTakeQuiz}
          className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <span>Take a Quiz Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Quizzes Completed
          </span>
          <span className="text-3xl font-extrabold font-heading text-blue-900">
            {totalTaken}
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Highest Score
          </span>
          <span className="text-3xl font-extrabold font-heading text-emerald-600">
            {bestScore}%
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Average Accuracy
          </span>
          <span className="text-3xl font-extrabold font-heading text-blue-600">
            {avgScore}%
          </span>
        </div>
      </div>

      {/* Session Records List */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
            Past Review Sessions
          </h3>
          {history.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Clear all quiz history for this device?')) {
                  onClearHistory();
                }
              }}
              className="text-xs text-slate-400 hover:text-red-600 transition-colors"
            >
              Clear Records
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="text-center py-10 text-slate-500">
            <Award className="w-12 h-12 text-slate-300 mx-auto mb-2" />
            <p className="font-semibold text-sm">No quizzes taken yet.</p>
            <p className="text-xs text-slate-400 mt-1">Start a practice session from the dashboard!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((record) => (
              <div
                key={record.id}
                className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-200 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-900 uppercase">
                      {record.quizType.replace('_', ' ')}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(record.completedAt).toLocaleDateString()} at{' '}
                      {new Date(record.completedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {record.score} out of {record.totalQuestions} questions answered correctly
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1.5 rounded-xl font-bold text-sm text-center ${
                    record.percentage >= 80
                      ? 'bg-emerald-100 text-emerald-800'
                      : record.percentage >= 60
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {record.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
