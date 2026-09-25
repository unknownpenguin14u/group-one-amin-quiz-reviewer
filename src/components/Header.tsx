import React from 'react';
import { BookOpen, Award, User, RefreshCw, Sparkles, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile | null;
  activeTab: 'quiz' | 'study' | 'memory' | 'history' | 'voc';
  onTabChange: (tab: 'quiz' | 'study' | 'memory' | 'history' | 'voc') => void;
  onChangeUser: () => void;
  inQuiz?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  activeTab,
  onTabChange,
  onChangeUser,
  inQuiz = false,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg border-b border-blue-700/50">
      {/* Top Banner introducing Group One Amin */}
      <div className="bg-blue-950/80 px-4 py-1.5 text-xs text-blue-200 border-b border-blue-800/40 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              Group One Amin
            </span>
            <span className="hidden sm:inline text-blue-300">
              • Official Matthew 6–10 Comprehensive Bible Quiz Reviewer
            </span>
          </div>

          <div className="flex items-center gap-3">
            {user && (
              <span className="text-blue-200 text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden md:inline">Logged in as:</span>
                <strong className="text-white font-medium">{user.name}</strong>
              </span>
            )}
            <button
              onClick={onChangeUser}
              className="text-[11px] text-blue-300 hover:text-white underline underline-offset-2 flex items-center gap-1 transition-colors"
              title="Change User Name"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Switch User</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('quiz')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-950/30 border border-blue-400/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold font-heading tracking-tight text-white leading-none">
                  Quiz Reviewer
                </h1>
                <span className="bg-blue-600/60 text-blue-100 text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-400/30">
                  MATTHEW 6–10
                </span>
              </div>
              <p className="text-xs text-blue-200/90 hidden sm:block mt-0.5">
                Group One Amin • Knowledge & Scripture Mastery
              </p>
            </div>
          </div>

          {/* Navigation Tabs (disabled during active quiz to prevent accidental departure) */}
          {!inQuiz && (
            <nav className="flex items-center gap-1 sm:gap-2">
              <button
                id="nav-tab-quiz"
                onClick={() => onTabChange('quiz')}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'quiz'
                    ? 'bg-blue-700/80 text-white shadow-inner border border-blue-400/30'
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span>Practice Quiz</span>
              </button>

              <button
                id="nav-tab-study"
                onClick={() => onTabChange('study')}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'study'
                    ? 'bg-blue-700/80 text-white shadow-inner border border-blue-400/30'
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4 text-blue-300" />
                <span>Study Guide</span>
              </button>

              <button
                id="nav-tab-memory"
                onClick={() => onTabChange('memory')}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'memory'
                    ? 'bg-blue-700/80 text-white shadow-inner border border-blue-400/30'
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span className="hidden md:inline">Memory</span> Verses
              </button>

              <button
                id="nav-tab-history"
                onClick={() => onTabChange('history')}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'history'
                    ? 'bg-blue-700/80 text-white shadow-inner border border-blue-400/30'
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <User className="w-4 h-4 text-blue-300" />
                <span>Scores</span>
              </button>

              <button
                id="nav-tab-voc"
                onClick={() => onTabChange('voc')}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'voc'
                    ? 'bg-blue-700/80 text-white shadow-inner border border-blue-400/30'
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <MessageSquareHeart className="w-4 h-4 text-pink-300" />
                <span className="hidden lg:inline">Voice of Customer</span>
                <span className="lg:hidden">VoC</span>
              </button>
            </nav>
          )}

          {inQuiz && (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30 animate-pulse">
                Quiz in Progress
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
