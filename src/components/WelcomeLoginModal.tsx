import React, { useState } from 'react';
import { BookOpen, User, ArrowRight, ShieldCheck, CheckCircle2, Bookmark, HelpCircle } from 'lucide-react';
import { UserProfile } from '../types';

interface WelcomeLoginModalProps {
  onLogin: (profile: UserProfile) => void;
  initialName?: string;
  isSwitching?: boolean;
  onCancel?: () => void;
}

const AVATAR_OPTIONS = ['📖', '🕊️', '👑', '🛡️', '⚡', '🌟', '✝️', '📜'];

export const WelcomeLoginModal: React.FC<WelcomeLoginModalProps> = ({
  onLogin,
  initialName = '',
  isSwitching = false,
  onCancel
}) => {
  const [name, setName] = useState(initialName);
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Please enter your name to continue.');
      return;
    }

    const profile: UserProfile = {
      name: trimmed,
      group: 'Group One Amin',
      avatarSeed: selectedAvatar,
      createdAt: new Date().toISOString(),
      totalQuizzesTaken: 0,
      highScore: 0,
    };

    onLogin(profile);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-blue-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Blue Header with Group One Amin Welcome Banner */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 p-6 sm:p-8 text-white relative">
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Group One Amin</span>
          </div>

          <div className="w-12 h-12 rounded-xl bg-blue-600/80 border border-blue-400/40 flex items-center justify-center mb-4 text-white shadow-md">
            <BookOpen className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Welcome, Group One Amin!
          </h2>
          <p className="text-blue-200 text-sm mt-2 leading-relaxed">
            Professional Bible Quiz Reviewer for <strong className="text-white">Matthew Chapters 6–10</strong>. Test your mastery with Multiple Choice, True or False, and Identification exercises.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="login-name-input" className="block text-xs font-bold tracking-wider uppercase text-blue-900 mb-2">
                Your Name / Reviewer Handle <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-500">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="login-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g., Brother Joshua / Sister Maria"
                  maxLength={40}
                  autoFocus
                  className="w-full pl-11 pr-4 py-3 bg-blue-50/50 border border-blue-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-base font-medium"
                />
              </div>
              {error && <p className="text-xs text-red-600 mt-1.5 font-medium">{error}</p>}
            </div>

            {/* Avatar badge picker */}
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-blue-900 mb-2">
                Select Your Icon
              </label>
              <div className="grid grid-cols-8 gap-1.5 sm:gap-2">
                {AVATAR_OPTIONS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setSelectedAvatar(emoji)}
                    className={`h-11 rounded-lg text-lg flex items-center justify-center transition-all ${
                      selectedAvatar === emoji
                        ? 'bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-2 scale-105 shadow-sm'
                        : 'bg-slate-100 hover:bg-blue-50 text-slate-700'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick feature callouts */}
            <div className="bg-blue-50 rounded-xl p-3.5 border border-blue-100 text-xs text-blue-900 space-y-1.5">
              <div className="font-semibold text-blue-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                What’s inside this reviewer:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-1 pt-1 text-[11px] text-blue-800">
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Multiple Choice
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> True or False
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Identification
                </li>
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-2">
              {isSwitching && onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-3 border border-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                id="btn-login-submit"
                className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Enter Quiz Reviewer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
