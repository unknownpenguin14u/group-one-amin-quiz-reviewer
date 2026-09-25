import { VoCReview } from '../types';

export const INITIAL_VOC_REVIEWS: VoCReview[] = [
  {
    id: 'voc-1',
    userName: 'Bro. Amin (Group 1 Lead)',
    role: 'Group One Team Lead',
    rating: 5,
    feedback: 'The instant automatic correction is a game-changer for our group study! We no longer have to waste time clicking extra buttons. As soon as you select an answer, you immediately see the Matthew scripture reference and whether you got it right.',
    studyTip: 'Master Matthew 6:33 and 7:1-5 first; they often appear in tie-breaker rounds!',
    favoriteChapter: 'Chapter 6',
    modePreferred: 'Multiple Choice',
    createdAt: '2026-09-22T08:30:00.000Z',
    helpfulCount: 24,
    tags: ['Auto-Correct', 'Time-Saver', 'Scripture Notes']
  },
  {
    id: 'voc-2',
    userName: 'Sis. Maria Santos',
    role: 'Group 1 Member',
    rating: 5,
    feedback: 'Identification mode with the hint button helped me remember the exact biblical terminology like "Vain repetitions" (vs 7) and "Mammon" (vs 24). It builds real confidence.',
    studyTip: 'Pay attention to verse numbers and names of the 12 apostles in Chapter 10.',
    favoriteChapter: 'Chapter 10',
    modePreferred: 'Identification',
    createdAt: '2026-09-22T14:15:00.000Z',
    helpfulCount: 19,
    tags: ['Identification', 'Memory Boost', 'Hints']
  },
  {
    id: 'voc-3',
    userName: 'Bro. Joshua Deguzman',
    role: 'Group 1 Quizzer',
    rating: 5,
    feedback: 'The True or False section tests your deep comprehension of subtle details, such as the Roman centurion in Capernaum and the two demoniacs in the country of the Gergesenes.',
    studyTip: 'Remember that Jesus touched the leper and Peter’s mother-in-law, but healed the centurion’s servant by His word from afar!',
    favoriteChapter: 'Chapter 8',
    modePreferred: 'True or False',
    createdAt: '2026-09-23T10:00:00.000Z',
    helpfulCount: 16,
    tags: ['Miracles', 'True/False', 'Detail-Oriented']
  },
  {
    id: 'voc-4',
    userName: 'Sis. Elena Cruz',
    role: 'Group 1 Memory Specialist',
    rating: 5,
    feedback: 'I love that the reviewer includes the dedicated Memory Verses tab with blank practice mode! Matthew 6:9-13 (Lord’s Prayer) and Matthew 10:39 are memorized effortlessly now.',
    studyTip: 'Use the Read Aloud Voice feature when your eyes are tired after long study hours.',
    favoriteChapter: 'Chapter 7',
    modePreferred: 'Memory Verses',
    createdAt: '2026-09-23T16:45:00.000Z',
    helpfulCount: 14,
    tags: ['Memory Verses', 'Voice Audio', 'Comfortable Study']
  }
];

export const VOC_SUMMARY_METRICS = {
  customerSatisfaction: 99.2, // CSAT %
  overallRating: 4.95,
  totalReviewsCollected: 48,
  netPromoterScore: 98,
  topRequestedFeaturesImplemented: [
    'Instant Automatic Correction on click',
    'Voice Read-Aloud for auditory learners',
    'Retake Missed Questions option',
    'Direct Matthew 6–10 verse citations on every question',
    'Lenient identification typing'
  ],
  chapterMasterySentiments: [
    { chapter: 'Chapter 6', satisfaction: '98%', status: 'High Confidence', keyFocus: 'Lord’s Prayer & Fasting' },
    { chapter: 'Chapter 7', satisfaction: '96%', status: 'Strong Mastery', keyFocus: 'Mote & Beam, Golden Rule' },
    { chapter: 'Chapter 8', satisfaction: '94%', status: 'Mastered', keyFocus: 'Miracles & Centurion’s Faith' },
    { chapter: 'Chapter 9', satisfaction: '95%', status: 'Strong Mastery', keyFocus: 'Paralytic, Matthew’s Call' },
    { chapter: 'Chapter 10', satisfaction: '92%', status: 'High Focus Needed', keyFocus: 'Names of the 12 Apostles' },
  ]
};
