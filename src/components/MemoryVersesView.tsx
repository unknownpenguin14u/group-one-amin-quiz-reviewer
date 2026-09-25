import React, { useState, useEffect } from 'react';
import { MEMORY_VERSES } from '../data/quizData';
import { Award, BookOpen, Copy, Check, Eye, EyeOff, Sparkles, RefreshCw, Volume2, VolumeX } from 'lucide-react';
import { playVoiceAudio, stopVoiceAudio } from '../utils/speechVoice';

export const MemoryVersesView: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [blankMode, setBlankMode] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      stopVoiceAudio();
    };
  }, []);

  const handleCopy = (verse: typeof MEMORY_VERSES[0], index: number) => {
    navigator.clipboard.writeText(`${verse.reference}: ${verse.text}`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSpeakVerse = (verse: typeof MEMORY_VERSES[0], index: number) => {
    if (speakingIndex === index) {
      stopVoiceAudio();
      setSpeakingIndex(null);
      return;
    }

    setSpeakingIndex(index);
    playVoiceAudio(`${verse.reference}. ${verse.text}`, () => {
      setSpeakingIndex(null);
    });
  };

  // Helper to blank out certain words for practice
  const getMaskedVerse = (text: string) => {
    const words = text.split(' ');
    return words.map((w, i) => {
      // mask every 3rd word if length > 3
      if (i % 3 === 1 && w.length > 3) {
        return '_______';
      }
      return w;
    }).join(' ');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold border border-amber-300/30 mb-2">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Group One Amin Scripture Memorization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Key Memory Verses
          </h2>
          <p className="text-blue-200 text-xs sm:text-sm mt-1 max-w-xl">
            Memorize these vital scripture passages highlighted in the Matthew 6–10 reviewer.
          </p>
        </div>

        <button
          onClick={() => setBlankMode(!blankMode)}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all flex items-center gap-2 ${
            blankMode
              ? 'bg-amber-500 text-amber-950 border-amber-300 ring-2 ring-amber-400/40 shadow-md'
              : 'bg-blue-800/80 hover:bg-blue-700 text-white border-blue-400/30'
          }`}
        >
          {blankMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{blankMode ? 'Blank Practice Mode: ON' : 'Practice Blanks Mode'}</span>
        </button>
      </div>

      {/* Memory Verses Cards */}
      <div className="space-y-5">
        {MEMORY_VERSES.map((v, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-600 to-indigo-600" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 font-extrabold text-sm flex items-center justify-center">
                  #{idx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-blue-950">
                  {v.reference}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {v.context}
                </span>

                <button
                  type="button"
                  onClick={() => handleSpeakVerse(v, idx)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    speakingIndex === idx
                      ? 'bg-amber-100 border-amber-300 text-amber-900 animate-pulse ring-2 ring-amber-400/40'
                      : 'border-slate-200 text-slate-500 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                  title={speakingIndex === idx ? 'Stop Voice Recitation' : 'Listen with Voice'}
                >
                  {speakingIndex === idx ? (
                    <VolumeX className="w-4 h-4 text-amber-700" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-blue-600" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(v, idx)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                  title="Copy verse"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-blue-50/50 rounded-xl border border-blue-100/80">
              <blockquote className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed font-serif italic">
                {blankMode ? getMaskedVerse(v.text) : v.text}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
