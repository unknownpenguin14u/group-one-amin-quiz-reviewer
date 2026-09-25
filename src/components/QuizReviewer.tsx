import React, { useState, useEffect, useRef } from 'react';
import { 
  QuizQuestion, 
  MultipleChoiceQuestion, 
  TrueFalseQuestion, 
  IdentificationQuestion,
  UserAnswer,
  QuizSessionResult 
} from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  AlertCircle, 
  Lightbulb, 
  BookOpen, 
  LogOut,
  Zap,
  Clock,
  Volume2,
  VolumeX,
  ThumbsUp,
  MessageSquareQuote
} from 'lucide-react';
import { playVoiceAudio, stopVoiceAudio } from '../utils/speechVoice';

interface QuizReviewerProps {
  questions: QuizQuestion[];
  quizTypeTitle: string;
  chapterLabel: string;
  userName: string;
  onFinishQuiz: (result: QuizSessionResult) => void;
  onExitQuiz: () => void;
  instantFeedback?: boolean;
}

export const QuizReviewer: React.FC<QuizReviewerProps> = ({
  questions,
  quizTypeTitle,
  chapterLabel,
  userName,
  onFinishQuiz,
  onExitQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  
  // State for current question submission
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedBool, setSelectedBool] = useState<boolean | null>(null);
  const [typedInput, setTypedInput] = useState('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [revealedAnswer, setRevealedAnswer] = useState(false);
  
  // Auto-advance configuration
  const [autoAdvanceEnabled, setAutoAdvanceEnabled] = useState(true);
  const [countdown, setCountdown] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Voice Speech Synthesis & Question VoC Feedback states
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [ratedQuestions, setRatedQuestions] = useState<Record<string, 'helpful' | 'tricky'>>({});

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  // Clear any running timer
  const clearAutoAdvance = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCountdown(null);
  };

  const handleReadAloud = () => {
    if (isSpeaking) {
      stopVoiceAudio();
      setIsSpeaking(false);
      return;
    }

    let speechText = '';
    if (currentQ.type === 'true_false') {
      speechText = `True or False: ${currentQ.statement}`;
    } else if (currentQ.type === 'multiple_choice') {
      speechText = `${currentQ.question}. Options: ${currentQ.options.map((opt, i) => `Option ${String.fromCharCode(65 + i)}, ${opt}`).join('. ')}`;
    } else {
      speechText = `Identification: ${currentQ.question}`;
    }

    setIsSpeaking(true);
    playVoiceAudio(speechText, () => setIsSpeaking(false));
  };

  // Reset state when moving to next question
  useEffect(() => {
    clearAutoAdvance();
    stopVoiceAudio();
    setIsSpeaking(false);
    setSelectedOption(null);
    setSelectedBool(null);
    setTypedInput('');
    setIsAnswerSubmitted(false);
    setShowHint(false);
    setRevealedAnswer(false);
  }, [currentIndex]);

  // Clean up timer and audio on unmount
  useEffect(() => {
    return () => {
      clearAutoAdvance();
      stopVoiceAudio();
    };
  }, []);

  if (!currentQ) {
    return <div>No questions available.</div>;
  }

  // Scoring verification
  const evaluateAnswer = (val: string | boolean): boolean => {
    if (currentQ.type === 'multiple_choice' && typeof val === 'string') {
      return val.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();
    }
    if (currentQ.type === 'true_false' && typeof val === 'boolean') {
      return val === currentQ.isTrue;
    }
    if (currentQ.type === 'identification' && typeof val === 'string') {
      const normalizedInput = val.trim().toLowerCase().replace(/['"“”.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      return currentQ.acceptedAnswers.some(ans => {
        const normAns = ans.trim().toLowerCase().replace(/['"“”.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        return normalizedInput === normAns || (normalizedInput.length > 3 && normAns.includes(normalizedInput));
      });
    }
    return false;
  };

  // Trigger immediate automatic correction
  const handleAutomaticCorrect = (val: string | boolean) => {
    if (isAnswerSubmitted) return;

    const isCorrect = evaluateAnswer(val);

    const newAnswer: UserAnswer = {
      questionId: currentQ.id,
      userResponse: val,
      isCorrect,
    };

    setAnswers(prev => [...prev, newAnswer]);
    setIsAnswerSubmitted(true);

    // If auto-advance is enabled, start countdown
    if (autoAdvanceEnabled) {
      // 3-second countdown
      const initialSeconds = isCorrect ? 2 : 3.5;
      setCountdown(initialSeconds);
      
      let remaining = initialSeconds;
      timerRef.current = setInterval(() => {
        remaining -= 0.5;
        if (remaining <= 0) {
          clearAutoAdvance();
          handleNextQuestion();
        } else {
          setCountdown(Math.ceil(remaining));
        }
      }, 500);
    }
  };

  const handleNextQuestion = () => {
    clearAutoAdvance();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finalize Quiz
      const currentScore = answers.filter(a => a.isCorrect).length;
      const percentage = Math.round((currentScore / questions.length) * 100);
      const missedIds = answers.filter(a => !a.isCorrect).map(a => a.questionId);

      const result: QuizSessionResult = {
        id: 'session-' + Date.now(),
        userName,
        groupName: 'Group One Amin',
        quizType: currentQ.type,
        chapterFilter: 'all',
        totalQuestions: questions.length,
        score: currentScore,
        percentage,
        completedAt: new Date().toISOString(),
        answers,
        missedQuestionIds: missedIds,
      };

      onFinishQuiz(result);
    }
  };

  const currentScoreCount = answers.filter(a => a.isCorrect).length;
  const currentAnswerRecord = answers.find(a => a.questionId === currentQ.id);
  const isCurrentCorrect = currentAnswerRecord?.isCorrect;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
      {/* Top Bar with Exit, Auto-correct Badge, and Progress */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 sm:p-5 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to exit this quiz session?')) {
                  clearAutoAdvance();
                  onExitQuiz();
                }
              }}
              className="text-slate-500 hover:text-red-600 transition-colors p-1.5 rounded-lg hover:bg-slate-100 text-xs font-semibold flex items-center gap-1"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Exit</span>
            </button>
            <span className="text-slate-300">|</span>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-800 rounded-md font-bold text-xs border border-blue-200">
              {quizTypeTitle}
            </span>
            <span className="text-slate-500 text-xs hidden md:inline">
              • {chapterLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Auto Correct Indicator & Toggle */}
            <button
              type="button"
              onClick={() => setAutoAdvanceEnabled(!autoAdvanceEnabled)}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border ${
                autoAdvanceEnabled
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-slate-100 text-slate-600 border-slate-300'
              }`}
              title="Click to toggle auto-advance to next question"
            >
              <Zap className={`w-3.5 h-3.5 ${autoAdvanceEnabled ? 'text-emerald-600 fill-current' : 'text-slate-400'}`} />
              <span>Auto-advance: {autoAdvanceEnabled ? 'ON' : 'OFF'}</span>
            </button>

            <span className="text-xs font-bold text-slate-700 hidden sm:inline">
              Q {currentIndex + 1} / {questions.length}
            </span>
            <div className="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-sm">
              Score: {currentScoreCount} / {answers.length}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-700/80 border border-blue-400/40 flex items-center justify-center text-xs font-bold">
              #{currentIndex + 1}
            </span>
            <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
              {currentQ.type === 'multiple_choice' && 'Multiple Choice • Click to Answer'}
              {currentQ.type === 'true_false' && 'True or False • Click to Answer'}
              {currentQ.type === 'identification' && 'Identification • Type Answer'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-blue-950/60 px-2.5 py-1 rounded-full text-blue-200 text-xs border border-blue-400/20">
            <BookOpen className="w-3.5 h-3.5 text-blue-300" />
            <span className="font-semibold">{currentQ.verse}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-3 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed font-heading flex-1">
              {currentQ.type === 'true_false' ? currentQ.statement : currentQ.question}
            </h3>
            <button
              type="button"
              onClick={handleReadAloud}
              title={isSpeaking ? 'Stop Voice' : 'Read Question Aloud (Voice)'}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl border transition-all flex items-center gap-1.5 shrink-0 text-xs font-bold ${
                isSpeaking
                  ? 'bg-amber-100 border-amber-300 text-amber-900 animate-pulse ring-2 ring-amber-400/40'
                  : 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 shadow-2xs'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4 text-amber-700" /> : <Volume2 className="w-4 h-4 text-blue-600" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Stop Audio' : 'Read Aloud'}</span>
            </button>
          </div>

          {/* 1. MULTIPLE CHOICE INTERFACE (AUTOMATIC ON CLICK) */}
          {currentQ.type === 'multiple_choice' && (
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrectAnswer = option.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();

                let style = 'bg-slate-50 hover:bg-blue-50/80 hover:border-blue-300 border-slate-200 text-slate-800 cursor-pointer hover:shadow-xs';

                if (isAnswerSubmitted) {
                  if (isCorrectAnswer) {
                    style = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30 font-semibold shadow-xs';
                  } else if (isSelected && !isCorrectAnswer) {
                    style = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/30';
                  } else {
                    style = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60 cursor-default';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswerSubmitted}
                    onClick={() => {
                      if (!isAnswerSubmitted) {
                        setSelectedOption(option);
                        handleAutomaticCorrect(option);
                      }
                    }}
                    className={`w-full p-4 rounded-xl border text-left font-medium text-sm sm:text-base flex items-start gap-3 transition-all ${style}`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      isAnswerSubmitted
                        ? isCorrectAnswer
                          ? 'bg-emerald-600 text-white'
                          : isSelected
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-200 text-slate-500'
                        : 'bg-slate-200/90 text-slate-700'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 pt-0.5">{option}</span>
                    {isAnswerSubmitted && isCorrectAnswer && (
                      <span className="flex items-center gap-1 text-emerald-700 text-xs font-bold shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Correct
                      </span>
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                      <span className="flex items-center gap-1 text-rose-700 text-xs font-bold shrink-0 mt-0.5">
                        <XCircle className="w-5 h-5 text-rose-600" /> Your Answer
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* 2. TRUE OR FALSE INTERFACE (AUTOMATIC ON CLICK) */}
          {currentQ.type === 'true_false' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* True Option */}
              <button
                type="button"
                disabled={isAnswerSubmitted}
                onClick={() => {
                  if (!isAnswerSubmitted) {
                    setSelectedBool(true);
                    handleAutomaticCorrect(true);
                  }
                }}
                className={`p-6 rounded-2xl border text-center font-bold text-lg transition-all flex flex-col items-center justify-center gap-2 ${
                  isAnswerSubmitted
                    ? currentQ.isTrue
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30'
                      : selectedBool === true
                      ? 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/30'
                      : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                    : 'bg-slate-50 hover:bg-blue-50/70 hover:border-blue-400 border-slate-200 text-slate-800 cursor-pointer shadow-xs'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isAnswerSubmitted
                    ? currentQ.isTrue
                      ? 'bg-emerald-600 text-white'
                      : selectedBool === true
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-200 text-slate-400'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span>TRUE</span>
                <span className="text-xs font-normal text-slate-500">
                  {isAnswerSubmitted && currentQ.isTrue ? '✓ Correct Answer' : 'Statement is scripturally accurate'}
                </span>
              </button>

              {/* False Option */}
              <button
                type="button"
                disabled={isAnswerSubmitted}
                onClick={() => {
                  if (!isAnswerSubmitted) {
                    setSelectedBool(false);
                    handleAutomaticCorrect(false);
                  }
                }}
                className={`p-6 rounded-2xl border text-center font-bold text-lg transition-all flex flex-col items-center justify-center gap-2 ${
                  isAnswerSubmitted
                    ? !currentQ.isTrue
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30'
                      : selectedBool === false
                      ? 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/30'
                      : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                    : 'bg-slate-50 hover:bg-blue-50/70 hover:border-blue-400 border-slate-200 text-slate-800 cursor-pointer shadow-xs'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isAnswerSubmitted
                    ? !currentQ.isTrue
                      ? 'bg-emerald-600 text-white'
                      : selectedBool === false
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-200 text-slate-400'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  <XCircle className="w-6 h-6" />
                </div>
                <span>FALSE</span>
                <span className="text-xs font-normal text-slate-500">
                  {isAnswerSubmitted && !currentQ.isTrue ? '✓ Correct Answer' : 'Statement is inaccurate or altered'}
                </span>
              </button>
            </div>
          )}

          {/* 3. IDENTIFICATION INTERFACE */}
          {currentQ.type === 'identification' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Type Your Answer / Identification:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    disabled={isAnswerSubmitted}
                    value={typedInput}
                    onChange={(e) => setTypedInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isAnswerSubmitted && typedInput.trim()) {
                        handleAutomaticCorrect(typedInput);
                      }
                    }}
                    placeholder="Type the word or name (Press Enter to auto-correct)..."
                    className="flex-1 px-4 py-3 bg-blue-50/40 border border-blue-200 rounded-xl text-slate-800 placeholder-slate-400 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-slate-100 disabled:text-slate-600"
                    autoFocus
                  />
                  {!isAnswerSubmitted && (
                    <button
                      type="button"
                      onClick={() => handleAutomaticCorrect(typedInput)}
                      disabled={!typedInput.trim()}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold rounded-xl text-sm transition-colors shrink-0 flex items-center gap-1.5"
                    >
                      <span>Submit</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Hints & Help */}
              {!isAnswerSubmitted && (
                <div className="flex items-center gap-3 pt-2">
                  {currentQ.hint && (
                    <button
                      type="button"
                      onClick={() => setShowHint(!showHint)}
                      className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1.5 p-1 rounded transition-colors"
                    >
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setRevealedAnswer(true);
                      setTypedInput(currentQ.primaryAnswer);
                      setIsAnswerSubmitted(true);
                      setAnswers(prev => [
                        ...prev,
                        { questionId: currentQ.id, userResponse: '(Revealed)', isCorrect: false }
                      ]);
                      if (autoAdvanceEnabled) {
                        setCountdown(3);
                        timerRef.current = setTimeout(() => {
                          handleNextQuestion();
                        }, 3000);
                      }
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1 p-1"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>I don't know (Reveal Answer)</span>
                  </button>
                </div>
              )}

              {showHint && currentQ.hint && !isAnswerSubmitted && (
                <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs text-amber-900 flex items-start gap-2 animate-in fade-in duration-200">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Hint:</strong> {currentQ.hint}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* AUTOMATIC SCRIPTURE FEEDBACK (Appears immediately after answering) */}
          {isAnswerSubmitted && (
            <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {isCurrentCorrect ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 flex items-start gap-3 text-emerald-950 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-emerald-900">Correct! Excellent!</h4>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                        +1 Point
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      <strong>{currentQ.verse}:</strong> {currentQ.explanation || (currentQ.type === 'true_false' ? currentQ.correctExplanation : '')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-rose-50 border border-rose-300 rounded-xl p-4 flex items-start gap-3 text-rose-950 shadow-xs">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-rose-900">
                      {revealedAnswer ? 'Answer Revealed' : 'Incorrect'}
                    </h4>
                    <div className="text-xs text-rose-900 mt-1">
                      <strong>Correct Answer:</strong>{' '}
                      <span className="font-bold text-rose-950 underline underline-offset-2">
                        {currentQ.type === 'multiple_choice' && currentQ.correctAnswer}
                        {currentQ.type === 'true_false' && (currentQ.isTrue ? 'TRUE' : 'FALSE')}
                        {currentQ.type === 'identification' && currentQ.primaryAnswer}
                      </span>
                    </div>
                    {(currentQ.explanation || (currentQ.type === 'true_false' && currentQ.correctExplanation)) && (
                      <p className="text-xs text-rose-800 mt-1.5 leading-relaxed">
                        <strong>Scripture Note:</strong> {currentQ.explanation || (currentQ.type === 'true_false' && currentQ.correctExplanation)}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Voice of Customer Question Evaluation */}
              <div className="mt-3.5 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <MessageSquareQuote className="w-4 h-4 text-blue-600" />
                  <span>Voice of Customer: How was this question?</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setRatedQuestions(prev => ({ ...prev, [currentQ.id]: 'helpful' }))}
                    className={`px-3 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      ratedQuestions[currentQ.id] === 'helpful'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{ratedQuestions[currentQ.id] === 'helpful' ? 'Marked Helpful ✓' : 'Clear & Helpful'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRatedQuestions(prev => ({ ...prev, [currentQ.id]: 'tricky' }))}
                    className={`px-3 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      ratedQuestions[currentQ.id] === 'tricky'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{ratedQuestions[currentQ.id] === 'tricky' ? 'Marked Tricky ✓' : 'Tricky Question'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer / Next Question Action */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Group One Amin:</span>
            <strong className="text-blue-900 font-bold">{userName}</strong>
          </div>

          <div className="flex items-center gap-3">
            {/* If answering in progress */}
            {!isAnswerSubmitted ? (
              <span className="text-xs text-slate-400 italic">
                {currentQ.type === 'identification' ? 'Press Enter or click Submit to answer' : 'Choose an answer above to auto-correct'}
              </span>
            ) : (
              <button
                type="button"
                id="btn-next-question"
                onClick={handleNextQuestion}
                className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-blue-900/20 transition-all flex items-center gap-2 group"
              >
                <span>
                  {countdown !== null ? `Next Question (${countdown}s)` : (currentIndex < questions.length - 1 ? 'Next Question' : 'View Results')}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
