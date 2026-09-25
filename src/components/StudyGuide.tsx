import React, { useState } from 'react';
import { COMPLETE_STUDY_GUIDE, StudyItem, MEMORY_VERSES } from '../data/quizData';
import { ChapterNumber } from '../types';
import { 
  Search, 
  BookOpen, 
  Eye, 
  EyeOff, 
  Award, 
  Filter, 
  ChevronRight, 
  Sparkles,
  Layers,
  Copy,
  Check
} from 'lucide-react';

interface StudyGuideProps {
  onStartQuizWithChapter?: (chapter: ChapterNumber | 'all') => void;
}

export const StudyGuide: React.FC<StudyGuideProps> = ({ onStartQuizWithChapter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<ChapterNumber | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [copiedVerse, setCopiedVerse] = useState<string | null>(null);

  const toggleReveal = (id: string) => {
    setRevealedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyText = (text: string, ref: string) => {
    navigator.clipboard.writeText(`${ref} - ${text}`);
    setCopiedVerse(ref);
    setTimeout(() => setCopiedVerse(null), 2000);
  };

  // Filtered study items
  const filteredItems = COMPLETE_STUDY_GUIDE.filter(item => {
    const matchesChapter = selectedChapter === 'all' || item.chapter === selectedChapter;
    const matchesCategory = categoryFilter === 'all' || item.highlightCategory === categoryFilter;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.verse.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesChapter && matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Introduction Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Group One Amin Scripture Repository</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Matthew Chapters 6 to 10 Study Guide
            </h2>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 max-w-2xl">
              Complete review sheets, questions, scripture answers, and memory verses from the official study material.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFlashcardMode(!flashcardMode)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all flex items-center gap-2 ${
                flashcardMode
                  ? 'bg-amber-500 text-amber-950 border-amber-300 shadow-md ring-2 ring-amber-400/40'
                  : 'bg-blue-800/80 hover:bg-blue-700 text-white border-blue-400/30'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{flashcardMode ? 'Flashcard Mode: ACTIVE' : 'Toggle Flashcards (Hide Answers)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 sm:p-6 mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-blue-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by topic, verse, or keyword (e.g. alms, fasting, leper, Peter)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Chapter Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {(['all', 6, 7, 8, 9, 10] as const).map((chap) => (
              <button
                key={chap}
                onClick={() => setSelectedChapter(chap)}
                className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedChapter === chap
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {chap === 'all' ? 'All Ch.' : `Ch. ${chap}`}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {['all', 'Command', 'Doctrine', 'Miracle', 'Disciples', 'Memory Verse'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                categoryFilter === cat
                  ? 'bg-blue-100 text-blue-900 border border-blue-300 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Categories' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Flashcard helper */}
      <div className="flex items-center justify-between mb-4 px-1">
        <span className="text-xs font-bold text-slate-600">
          Showing {filteredItems.length} review item{filteredItems.length === 1 ? '' : 's'}
        </span>
        {flashcardMode && (
          <span className="text-xs text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            Click on any card to reveal or hide the scripture answer
          </span>
        )}
      </div>

      {/* Study Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const isRevealed = !flashcardMode || revealedIds[item.id];

          return (
            <div
              key={item.id}
              onClick={() => flashcardMode && toggleReveal(item.id)}
              className={`bg-white rounded-2xl border p-5 transition-all shadow-sm flex flex-col justify-between ${
                flashcardMode ? 'cursor-pointer hover:border-blue-400 hover:shadow-md' : 'border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-xs">
                      Matthew {item.chapter}:{item.verse.replace('vs', '')}
                    </span>
                    {item.highlightCategory && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.highlightCategory === 'Memory Verse'
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : item.highlightCategory === 'Miracle'
                          ? 'bg-purple-100 text-purple-900'
                          : item.highlightCategory === 'Command'
                          ? 'bg-emerald-100 text-emerald-900'
                          : item.highlightCategory === 'Disciples'
                          ? 'bg-sky-100 text-sky-900'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.highlightCategory}
                      </span>
                    )}
                  </div>

                  {flashcardMode && (
                    <button
                      type="button"
                      className="text-xs text-blue-600 font-semibold flex items-center gap-1"
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Show Answer</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Question */}
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-snug">
                  {item.question}
                </h4>
              </div>

              {/* Answer Box */}
              <div className="mt-2 pt-3 border-t border-slate-100">
                {isRevealed ? (
                  <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs sm:text-sm font-semibold text-blue-950 leading-relaxed">
                    <span className="text-blue-600 font-bold mr-1">Answer:</span>
                    {item.answer}
                  </div>
                ) : (
                  <div className="p-4 bg-slate-100 border border-dashed border-slate-300 rounded-xl text-center text-xs font-semibold text-slate-400 flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span>Click to reveal answer</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">No review questions match your search</h3>
          <p className="text-xs text-slate-400 mt-1">Try clearing your filters or changing the search keyword.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedChapter('all');
              setCategoryFilter('all');
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
