import React, { useState } from 'react';
import { VoCReview, UserProfile } from '../types';
import { INITIAL_VOC_REVIEWS, VOC_SUMMARY_METRICS } from '../data/vocData';
import { 
  MessageSquareHeart, 
  Star, 
  ThumbsUp, 
  Send, 
  Award, 
  CheckCircle2, 
  Lightbulb, 
  TrendingUp, 
  Volume2, 
  Sparkles,
  Users,
  Filter
} from 'lucide-react';

interface VoiceOfCustomerViewProps {
  user: UserProfile | null;
  reviews: VoCReview[];
  onAddReview: (review: VoCReview) => void;
  onLikeReview: (id: string) => void;
}

export const VoiceOfCustomerView: React.FC<VoiceOfCustomerViewProps> = ({
  user,
  reviews,
  onAddReview,
  onLikeReview,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [showForm, setShowForm] = useState(false);
  
  // New review form states
  const [name, setName] = useState(user?.name || '');
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [studyTip, setStudyTip] = useState('');
  const [favoriteChapter, setFavoriteChapter] = useState('Chapter 6');
  const [modePreferred, setModePreferred] = useState('Multiple Choice');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const allTags = ['All', 'Auto-Correct', 'Identification', 'True/False', 'Memory Verses', 'Hints', 'Voice Audio'];

  const filteredReviews = reviews.filter(rev => {
    if (selectedTag === 'All') return true;
    return rev.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase());
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    const newRev: VoCReview = {
      id: 'voc-' + Date.now(),
      userName: name.trim() || 'Group 1 Member',
      role: 'Group One Learner',
      rating,
      feedback: feedback.trim(),
      studyTip: studyTip.trim() || undefined,
      favoriteChapter,
      modePreferred,
      createdAt: new Date().toISOString(),
      helpfulCount: 1,
      tags: [modePreferred, favoriteChapter]
    };

    onAddReview(newRev);
    setFeedback('');
    setStudyTip('');
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/25 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-3">
              <MessageSquareHeart className="w-3.5 h-3.5 text-pink-400" />
              <span>Voice of Customer (VoC) • Group One Amin</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Learner Voice & Study Feedback
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed">
              Real feedback and study tips from <strong>Group One Amin</strong> members. See how member feedback shaped our <strong>instant automatic correction</strong>, voice read-aloud, and identification drills!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-5 py-3 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquareHeart className="w-4 h-4" />
              <span>{showForm ? 'Close Feedback Form' : 'Share Your Voice / Study Tip'}</span>
            </button>
          </div>
        </div>

        {/* VoC Key Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-blue-800/60">
          <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-400/20">
            <span className="text-[11px] text-blue-300 block font-medium">Customer Satisfaction</span>
            <span className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              {VOC_SUMMARY_METRICS.customerSatisfaction}%
            </span>
          </div>

          <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-400/20">
            <span className="text-[11px] text-blue-300 block font-medium">Overall VoC Rating</span>
            <span className="text-xl sm:text-2xl font-extrabold text-amber-300 font-heading flex items-center gap-1">
              ★ {VOC_SUMMARY_METRICS.overallRating} <span className="text-xs text-blue-200">/ 5</span>
            </span>
          </div>

          <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-400/20">
            <span className="text-[11px] text-blue-300 block font-medium">Net Promoter Score</span>
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-heading">
              +{VOC_SUMMARY_METRICS.netPromoterScore}
            </span>
          </div>

          <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-400/20">
            <span className="text-[11px] text-blue-300 block font-medium">Auto-Correct Speed</span>
            <span className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              Instant ⚡
            </span>
          </div>
        </div>
      </div>

      {/* "You Asked, We Built" VoC Highlights */}
      <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>How Your Voice Shaped This Reviewer:</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
            <strong className="text-blue-950 block font-bold mb-1">⚡ Automatic Correction</strong>
            <p className="text-blue-800">Learners requested eliminating extra clicks. Answers now validate automatically upon selection!</p>
          </div>
          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
            <strong className="text-blue-950 block font-bold mb-1">🔊 Voice of Question (Read Aloud)</strong>
            <p className="text-blue-800">Added Text-to-Speech audio so group members can listen to scripture questions out loud.</p>
          </div>
          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
            <strong className="text-blue-950 block font-bold mb-1">🔄 Retake Missed Only</strong>
            <p className="text-blue-800">Fast review loop to master mistakes until 100% perfection is achieved on Matthew 6–10.</p>
          </div>
        </div>
      </div>

      {/* Submission Form Modal / Drawer */}
      {showForm && (
        <div className="bg-white rounded-2xl border-2 border-blue-300 p-6 sm:p-8 shadow-lg mb-8 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
            <h3 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
              <MessageSquareHeart className="w-5 h-5 text-blue-600" />
              <span>Voice of Customer: Share Your Experience & Study Tip</span>
            </h3>
            <button
              onClick={() => setShowForm(false)}
              className="text-xs text-slate-400 hover:text-slate-600 font-semibold"
            >
              Cancel
            </button>
          </div>

          {submittedMessage ? (
            <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl text-center text-emerald-900">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-bold text-base">Thank you for sharing your voice!</h4>
              <p className="text-xs text-emerald-800 mt-1">Your review and study tip have been added to the Group One Amin board.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Bro. Amin"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Rating (1 to 5 Stars)
                  </label>
                  <div className="flex items-center gap-1 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 text-2xl transition-transform hover:scale-110"
                      >
                        <span className={star <= rating ? 'text-amber-400' : 'text-slate-200'}>
                          ★
                        </span>
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-600 ml-2">({rating} of 5 Stars)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Preferred Reviewer Mode
                  </label>
                  <select
                    value={modePreferred}
                    onChange={(e) => setModePreferred(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="True or False">True or False</option>
                    <option value="Identification">Identification</option>
                    <option value="Memory Verses">Memory Verses</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Favorite Matthew Chapter
                  </label>
                  <select
                    value={favoriteChapter}
                    onChange={(e) => setFavoriteChapter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="Chapter 6">Chapter 6 (Alms, Lord's Prayer, Fasting)</option>
                    <option value="Chapter 7">Chapter 7 (Judging, Rock & Sand)</option>
                    <option value="Chapter 8">Chapter 8 (Leper, Centurion, Sea)</option>
                    <option value="Chapter 9">Chapter 9 (Paralytic, Matthew, Compassion)</option>
                    <option value="Chapter 10">Chapter 10 (Twelve Apostles, Wolves)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Your Voice / Feedback on this Reviewer <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="How did the automatic correction, flashcards, or practice modes help you review Matthew 6–10?"
                  rows={3}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Study Tip for Group One Amin Teammates (Optional)
                </label>
                <input
                  type="text"
                  value={studyTip}
                  onChange={(e) => setStudyTip(e.target.value)}
                  placeholder="e.g., Note which miracles took place in Peter’s house vs Capernaum"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Voice of Customer</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Chapter Sentiment Breakdown */}
      <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm mb-8">
        <h3 className="text-base font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span>Chapter Mastery Sentiment (What Group One Amin is Saying)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {VOC_SUMMARY_METRICS.chapterMasterySentiments.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-blue-900">{item.chapter}</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  {item.satisfaction}
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-600">{item.status}</p>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">Focus: {item.keyFocus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Filter Tags */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-blue-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <span className="text-xs font-medium text-slate-500 shrink-0">
          {filteredReviews.length} Voice reviews
        </span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl border border-blue-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center">
                      {rev.userName.charAt(0)}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{rev.userName}</h4>
                      <p className="text-[11px] text-blue-700 font-medium">{rev.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-amber-400 text-sm">
                  {'★'.repeat(rev.rating)}
                  {'☆'.repeat(5 - rev.rating)}
                </div>
              </div>

              {/* Feedback Quote */}
              <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 italic">
                “{rev.feedback}”
              </blockquote>

              {/* Study Tip if provided */}
              {rev.studyTip && (
                <div className="p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 mb-3 flex items-start gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Study Tip:</strong> {rev.studyTip}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex flex-wrap gap-1">
                {rev.tags.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-800 font-medium">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onLikeReview(rev.id)}
                className="flex items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-slate-50"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span className="font-bold text-xs">{rev.helpfulCount}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
