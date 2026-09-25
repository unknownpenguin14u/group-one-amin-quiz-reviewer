import React, { useState } from 'react';
import { 
  CheckSquare, 
  HelpCircle, 
  FileText, 
  Sparkles, 
  BookOpen, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Play,
  RotateCcw,
  Zap,
  MessageSquareHeart
} from 'lucide-react';
import { UserProfile, QuestionType, ChapterNumber } from '../types';

interface DashboardProps {
  user: UserProfile;
  onStartQuiz: (type: QuestionType | 'mixed', chapter: ChapterNumber | 'all', count: number) => void;
  onOpenStudyGuide: () => void;
  onOpenMemoryVerses: () => void;
  onOpenVoC?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  user,
  onStartQuiz,
  onOpenStudyGuide,
  onOpenMemoryVerses,
  onOpenVoC,
}) => {
  const [selectedType, setSelectedType] = useState<QuestionType | 'mixed'>('multiple_choice');
  const [selectedChapter, setSelectedChapter] = useState<ChapterNumber | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);

  const modeOptions: {
    id: QuestionType | 'mixed';
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    badge: string;
  }[] = [
    {
      id: 'multiple_choice',
      title: 'Multiple Choice',
      description: 'Select the correct answer from 4 options with instant verse citations & explanations.',
      icon: <CheckSquare className="w-6 h-6 text-blue-600" />,
      color: 'border-blue-200 hover:border-blue-500 bg-blue-50/30',
      badge: 'Most Popular',
    },
    {
      id: 'true_false',
      title: 'True or False',
      description: 'Test your discernment on factual doctrinal statements from Matthew 6–10.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-200 hover:border-emerald-500 bg-emerald-50/30',
      badge: 'Rapid Fire',
    },
    {
      id: 'identification',
      title: 'Identification',
      description: 'Type the exact biblical name, phrase, or keyword with available hints & clues.',
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      color: 'border-indigo-200 hover:border-indigo-500 bg-indigo-50/30',
      badge: 'Deep Recall',
    },
    {
      id: 'mixed',
      title: 'Mixed Comprehensive Exam',
      description: 'Blended challenge incorporating Multiple Choice, True/False, and Identification.',
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      color: 'border-amber-200 hover:border-amber-500 bg-amber-50/30',
      badge: 'All-in-One',
    },
  ];

  const chapters: { id: ChapterNumber | 'all'; title: string; subtitle: string }[] = [
    { id: 'all', title: 'All Chapters (6–10)', subtitle: 'Complete Matthew Reviewer' },
    { id: 6, title: 'Chapter 6', subtitle: 'Alms, Lord’s Prayer, Fasting, Treasures' },
    { id: 7, title: 'Chapter 7', subtitle: 'Judging, Golden Rule, House on the Rock' },
    { id: 8, title: 'Chapter 8', subtitle: 'Leper, Centurion, Calming the Sea' },
    { id: 9, title: 'Chapter 9', subtitle: 'Paralytic, Matthew called, Healed Woman' },
    { id: 10, title: 'Chapter 10', subtitle: 'Twelve Apostles, Sheep Among Wolves' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Welcome Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 to-transparent pointer-events-none" />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/25 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-3">
            <span className="text-base">{user.avatarSeed || '📖'}</span>
            <span>Welcome Group One Amin</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Greetings, {user.name}! Ready to review?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mt-2 leading-relaxed">
            Welcome to the official <strong>Group One Amin Quiz Reviewer</strong> covering <span className="underline decoration-blue-400 font-semibold">Matthew Chapters 6 to 10</span>. Choose your review format below to begin testing your scriptural knowledge.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={() => onStartQuiz(selectedType, selectedChapter, questionCount)}
              id="btn-start-hero"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-950/40 flex items-center gap-2 transition-all group"
            >
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Launch Quiz Session</span>
            </button>

            <button
              onClick={onOpenStudyGuide}
              className="px-5 py-3 bg-blue-950/60 hover:bg-blue-950 text-blue-200 hover:text-white font-semibold rounded-xl text-sm border border-blue-400/30 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Browse Study Guide</span>
            </button>

            {onOpenVoC && (
              <button
                onClick={onOpenVoC}
                className="px-4 py-3 bg-indigo-950/70 hover:bg-indigo-950 text-pink-200 hover:text-white font-semibold rounded-xl text-sm border border-pink-400/30 transition-colors flex items-center gap-2"
              >
                <MessageSquareHeart className="w-4 h-4 text-pink-400" />
                <span>Voice of Customer</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Reviewer Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Mode & Chapter Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Select Reviewer Type */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <span>Select Reviewer Type</span>
              </h3>
              <span className="text-xs text-blue-700 font-semibold">Required</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {modeOptions.map((mode) => {
                const isSelected = selectedType === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setSelectedType(mode.id)}
                    className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/80 ring-2 ring-blue-600/30 shadow-sm'
                        : 'border-slate-200 hover:border-blue-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                          {mode.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                          {mode.badge}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{mode.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{mode.description}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-between text-xs">
                      <span className={`font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-400'}`}>
                        {isSelected ? '✓ Selected' : 'Click to select'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Chapter Scope */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                <span>Select Chapter Scope</span>
              </h3>
              <span className="text-xs text-slate-500">Matthew 6 to 10</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {chapters.map((chap) => {
                const isSelected = selectedChapter === chap.id;
                return (
                  <button
                    key={chap.id}
                    type="button"
                    onClick={() => setSelectedChapter(chap.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-600/20'
                        : 'border-slate-200 hover:border-blue-200 bg-white'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {chap.id === 'all' ? '★' : chap.id}
                    </span>
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm text-slate-900">{chap.title}</h5>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{chap.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Question Length */}
          <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                <span>Number of Questions</span>
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {[5, 10, 15, 25].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`py-3 px-2 rounded-xl border text-center font-bold text-xs sm:text-sm transition-all ${
                    questionCount === count
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {count} Questions
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Reviewer Summary & Launch Box */}
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 border border-blue-200 shadow-sm sticky top-24">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Review Session Setup</span>
            </div>

            <div className="space-y-3.5 mb-6 text-xs text-slate-700">
              <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                <span className="text-slate-500">Student:</span>
                <span className="font-bold text-blue-950">{user.name}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                <span className="text-slate-500">Group:</span>
                <span className="font-bold text-blue-950">Group One Amin</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                <span className="text-slate-500">Mode:</span>
                <span className="font-bold text-blue-700 capitalize">
                  {selectedType.replace('_', ' ')}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                <span className="text-slate-500">Scope:</span>
                <span className="font-bold text-blue-950">
                  {selectedChapter === 'all' ? 'All Matthew 6–10' : `Matthew Ch. ${selectedChapter}`}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                <span className="text-slate-500">Questions:</span>
                <span className="font-bold text-blue-950">{questionCount} items</span>
              </div>
            </div>

            <button
              type="button"
              id="btn-launch-quiz"
              onClick={() => onStartQuiz(selectedType, selectedChapter, questionCount)}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Review Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-4 pt-4 border-t border-blue-100 flex flex-col gap-2 text-center">
              <button
                type="button"
                onClick={onOpenMemoryVerses}
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center justify-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Review Key Memory Verses</span>
              </button>

              {onOpenVoC && (
                <button
                  type="button"
                  onClick={onOpenVoC}
                  className="text-xs text-slate-600 hover:text-blue-900 font-semibold inline-flex items-center justify-center gap-1.5"
                >
                  <MessageSquareHeart className="w-3.5 h-3.5 text-pink-500" />
                  <span>Voice of Customer Feedback Hub</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
