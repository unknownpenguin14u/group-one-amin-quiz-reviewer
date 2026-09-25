import { MultipleChoiceQuestion, TrueFalseQuestion, IdentificationQuestion, QuizQuestion } from '../types';

export const MULTIPLE_CHOICE_QUESTIONS: MultipleChoiceQuestion[] = [
  // --- MATTHEW CHAPTER 6 ---
  {
    id: 'mc-m6-1',
    chapter: 6,
    verse: 'Matthew 6:1',
    type: 'multiple_choice',
    question: 'What did Jesus warn His disciples not to do before men, to be seen of them?',
    options: ['Their alms', 'Their prayers', 'Their fasting', 'Their preaching'],
    correctAnswer: 'Their alms',
    explanation: 'Matthew 6:1 warns: "Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven."'
  },
  {
    id: 'mc-m6-2',
    chapter: 6,
    verse: 'Matthew 6:2',
    type: 'multiple_choice',
    question: 'What should a person NOT do when giving alms, as the hypocrites do in the synagogues and streets?',
    options: ['Sound a trumpet before him', 'Keep it secret', 'Pray silently', 'Wash their face'],
    correctAnswer: 'Sound a trumpet before him',
    explanation: 'Matthew 6:2: "Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do..."'
  },
  {
    id: 'mc-m6-3',
    chapter: 6,
    verse: 'Matthew 6:3',
    type: 'multiple_choice',
    question: 'When thou doest alms, what should thy left hand not know?',
    options: ['What thy right hand doeth', 'How much money was given', 'Who received the gift', 'The praise of men'],
    correctAnswer: 'What thy right hand doeth',
    explanation: 'Matthew 6:3: "But when thou doest alms, let not thy left hand know what thy right hand doeth."'
  },
  {
    id: 'mc-m6-4',
    chapter: 6,
    verse: 'Matthew 6:4',
    type: 'multiple_choice',
    question: 'How should thine alms be given so that thy Father which seeth in secret shall reward thee openly?',
    options: ['In secret', 'In the public square', 'With fanfare', 'Before the elders'],
    correctAnswer: 'In secret',
    explanation: 'Matthew 6:4: "That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly."'
  },
  {
    id: 'mc-m6-5',
    chapter: 6,
    verse: 'Matthew 6:5',
    type: 'multiple_choice',
    question: 'In what places did hypocrites love to pray so that they might be seen of men?',
    options: [
      'Standing in the synagogues and corners of the streets',
      'In private closets and chambers',
      'At the mountain top alone',
      'By the Jordan river'
    ],
    correctAnswer: 'Standing in the synagogues and corners of the streets',
    explanation: 'Matthew 6:5 states hypocrites love to pray standing in the synagogues and in the corners of the streets.'
  },
  {
    id: 'mc-m6-6',
    chapter: 6,
    verse: 'Matthew 6:6',
    type: 'multiple_choice',
    question: 'In what manner should a disciple pray according to Matthew 6:6?',
    options: [
      'Enter into thy closet, shut the door, and pray in secret',
      'Stand at the street corners with outstretched arms',
      'Recite memorized prayers fifty times loudly',
      'Gather crowds to demonstrate eloquence'
    ],
    correctAnswer: 'Enter into thy closet, shut the door, and pray in secret',
    explanation: 'Matthew 6:6: "when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret..."'
  },
  {
    id: 'mc-m6-7',
    chapter: 6,
    verse: 'Matthew 6:7',
    type: 'multiple_choice',
    question: 'Who did Jesus say use vain repetitions in prayer, thinking they shall be heard for their much speaking?',
    options: ['The heathen', 'The scribes', 'The apostles', 'The Levites'],
    correctAnswer: 'The heathen',
    explanation: 'Matthew 6:7: "use not vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking."'
  },
  {
    id: 'mc-m6-8',
    chapter: 6,
    verse: 'Matthew 6:13',
    type: 'multiple_choice',
    question: 'According to the conclusion of the Lord’s Prayer in Matthew 6:13, what belongs to God forever?',
    options: [
      'The kingdom, the power, and the glory',
      'The gold, silver, and precious stones',
      'The earth and its inhabitants',
      'The temple and its altars'
    ],
    correctAnswer: 'The kingdom, the power, and the glory',
    explanation: 'Matthew 6:13: "For thine is the kingdom, and the power, and the glory, for ever. Amen."'
  },
  {
    id: 'mc-m6-9',
    chapter: 6,
    verse: 'Matthew 6:17-18',
    type: 'multiple_choice',
    question: 'What did Jesus instruct His followers to do when they fast?',
    options: [
      'Anoint thine head and wash thy face',
      'Put on sackcloth and ashes',
      'Disfigure their faces to appear sad',
      'Announce the fast to the congregation'
    ],
    correctAnswer: 'Anoint thine head and wash thy face',
    explanation: 'Matthew 6:17: "But thou, when thou fastest, anoint thine head, and wash thy face; That thou appear not unto men to fast..."'
  },
  {
    id: 'mc-m6-10',
    chapter: 6,
    verse: 'Matthew 6:19-20',
    type: 'multiple_choice',
    question: 'Why should disciples lay up treasures in heaven rather than on earth?',
    options: [
      'Where neither moth nor rust doth corrupt, and where thieves do not break through nor steal',
      'Because earthly wealth is instantly multiplied',
      'Because heaven charges no taxes',
      'Because gold is lighter in heaven'
    ],
    correctAnswer: 'Where neither moth nor rust doth corrupt, and where thieves do not break through nor steal',
    explanation: 'Matthew 6:20: "But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal."'
  },
  {
    id: 'mc-m6-11',
    chapter: 6,
    verse: 'Matthew 6:22',
    type: 'multiple_choice',
    question: 'What is described as the light of the body?',
    options: ['The eye', 'The heart', 'The soul', 'The tongue'],
    correctAnswer: 'The eye',
    explanation: 'Matthew 6:22: "The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light."'
  },
  {
    id: 'mc-m6-12',
    chapter: 6,
    verse: 'Matthew 6:24',
    type: 'multiple_choice',
    question: 'What rival master does Jesus explicitly name that you cannot serve alongside God?',
    options: ['Mammon', 'Caesar', 'Baal', 'Pharaoh'],
    correctAnswer: 'Mammon',
    explanation: 'Matthew 6:24: "No man can serve two masters... Ye cannot serve God and mammon."'
  },
  {
    id: 'mc-m6-13',
    chapter: 6,
    verse: 'Matthew 6:28-29',
    type: 'multiple_choice',
    question: 'Which king, in all his glory, was not arrayed like one of the lilies of the field?',
    options: ['Solomon', 'David', 'Saul', 'Hezekiah'],
    correctAnswer: 'Solomon',
    explanation: 'Matthew 6:29: "And yet I say unto you, That even Solomon in all his glory was not arrayed like one of these."'
  },
  {
    id: 'mc-m6-14',
    chapter: 6,
    verse: 'Matthew 6:33',
    type: 'multiple_choice',
    question: 'According to Matthew 6:33, what should we seek first?',
    options: [
      'The kingdom of God and His righteousness',
      'Food, drink, and earthly clothing',
      'Honor from governors and kings',
      'Long life and great wealth'
    ],
    correctAnswer: 'The kingdom of God and His righteousness',
    explanation: 'Matthew 6:33: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."'
  },

  // --- MATTHEW CHAPTER 7 ---
  {
    id: 'mc-m7-1',
    chapter: 7,
    verse: 'Matthew 7:1-2',
    type: 'multiple_choice',
    question: 'Complete Jesus’ words: "Judge not, that ye be not ______."',
    options: ['Judged', 'Condemned', 'Shamed', 'Cast out'],
    correctAnswer: 'Judged',
    explanation: 'Matthew 7:1: "Judge not, that ye be not judged."'
  },
  {
    id: 'mc-m7-2',
    chapter: 7,
    verse: 'Matthew 7:5',
    type: 'multiple_choice',
    question: 'What did Jesus call a person who tries to pull the mote out of a brother’s eye while having a beam in their own eye?',
    options: ['Hypocrite', 'Gentile', 'Heathen', 'False prophet'],
    correctAnswer: 'Hypocrite',
    explanation: 'Matthew 7:5: "Thou hypocrite, first cast out the beam out of thine own eye; and then shalt thou see clearly to cast out the mote out of thy brother’s eye."'
  },
  {
    id: 'mc-m7-3',
    chapter: 7,
    verse: 'Matthew 7:6',
    type: 'multiple_choice',
    question: 'Jesus warned not to give that which is holy unto dogs, nor cast pearls before whom?',
    options: ['Swine', 'Wolves', 'Serpents', 'Lions'],
    correctAnswer: 'Swine',
    explanation: 'Matthew 7:6: "Give not that which is holy unto the dogs, neither cast ye your pearls before swine..."'
  },
  {
    id: 'mc-m7-4',
    chapter: 7,
    verse: 'Matthew 7:9-10',
    type: 'multiple_choice',
    question: 'If a son asks for bread, what will a father not give him? And if he asks for a fish?',
    options: ['Stone; serpent', 'Scorpion; thistle', 'Brier; thorn', 'Viper; ashes'],
    correctAnswer: 'Stone; serpent',
    explanation: 'Matthew 7:9-10: "Or what man is there of you, whom if his son ask bread, will he give him a stone? Or if he ask a fish, will he give him a serpent?"'
  },
  {
    id: 'mc-m7-5',
    chapter: 7,
    verse: 'Matthew 7:13-14',
    type: 'multiple_choice',
    question: 'Which gate and way leadeth unto life?',
    options: [
      'The strait gate and narrow way',
      'The wide gate and broad way',
      'The royal highway of kings',
      'The golden gate of the temple'
    ],
    correctAnswer: 'The strait gate and narrow way',
    explanation: 'Matthew 7:14: "Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it."'
  },
  {
    id: 'mc-m7-6',
    chapter: 7,
    verse: 'Matthew 7:15',
    type: 'multiple_choice',
    question: 'How do false prophets appear outwardly, and what are they inwardly?',
    options: [
      'In sheep’s clothing, but inwardly ravening wolves',
      'In priestly robes, but inwardly thieves',
      'In white garments, but inwardly serpents',
      'As angels of light, but inwardly roaring lions'
    ],
    correctAnswer: 'In sheep’s clothing, but inwardly ravening wolves',
    explanation: 'Matthew 7:15: "Beware of false prophets, which come to you in sheep’s clothing, but inwardly they are ravening wolves."'
  },
  {
    id: 'mc-m7-7',
    chapter: 7,
    verse: 'Matthew 7:21',
    type: 'multiple_choice',
    question: 'Who shall enter into the kingdom of heaven according to Matthew 7:21?',
    options: [
      'He that doeth the will of my Father which is in heaven',
      'Everyone that saith unto me, Lord, Lord',
      'Anyone who prophesies in Jesus’ name',
      'Those who build grand synagogues'
    ],
    correctAnswer: 'He that doeth the will of my Father which is in heaven',
    explanation: 'Matthew 7:21: "Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven."'
  },
  {
    id: 'mc-m7-8',
    chapter: 7,
    verse: 'Matthew 7:24',
    type: 'multiple_choice',
    question: 'Jesus compared a wise man who built his house upon a rock to whosoever:',
    options: [
      'Heareth His sayings and doeth them',
      'Heareth His sayings and doeth them not',
      'Donates large sums of gold to the altar',
      'Argues with the Pharisees in public'
    ],
    correctAnswer: 'Heareth His sayings and doeth them',
    explanation: 'Matthew 7:24: "Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock."'
  },
  {
    id: 'mc-m7-9',
    chapter: 7,
    verse: 'Matthew 7:28-29',
    type: 'multiple_choice',
    question: 'Why were the people astonished at Jesus’ doctrine when He finished these sayings?',
    options: [
      'He taught them as one having authority, and not as the scribes',
      'He used difficult philosophical terms',
      'He spoke in unknown tongues',
      'He quoted Greek historians'
    ],
    correctAnswer: 'He taught them as one having authority, and not as the scribes',
    explanation: 'Matthew 7:29: "For he taught them as one having authority, and not as the scribes."'
  },

  // --- MATTHEW CHAPTER 8 ---
  {
    id: 'mc-m8-1',
    chapter: 8,
    verse: 'Matthew 8:2-3',
    type: 'multiple_choice',
    question: 'What did Jesus do when a leper came worshipping Him saying, "Lord, if thou wilt, thou canst make me clean"?',
    options: [
      'Put forth His hand and touched him',
      'Sent him away to wash in Siloam',
      'Told his disciples to pray over him for seven days',
      'Turned away because of uncleanliness'
    ],
    correctAnswer: 'Put forth His hand and touched him',
    explanation: 'Matthew 8:3: "And Jesus put forth his hand, and touched him, saying, I will; be thou clean. And immediately his leprosy was cleansed."'
  },
  {
    id: 'mc-m8-2',
    chapter: 8,
    verse: 'Matthew 8:5-8',
    type: 'multiple_choice',
    question: 'What did the centurion in Capernaum request when Jesus offered to come and heal his sick servant?',
    options: [
      '"Speak the word only, and my servant shall be healed."',
      '"Bring a jar of olive oil to anoint him."',
      '"Come immediately before he breathes his last."',
      '"Send Peter and John to pray for him."'
    ],
    correctAnswer: '"Speak the word only, and my servant shall be healed."',
    explanation: 'Matthew 8:8: "The centurion answered and said, Lord, I am not worthy that thou shouldest come under my roof: but speak the word only, and my servant shall be healed."'
  },
  {
    id: 'mc-m8-3',
    chapter: 8,
    verse: 'Matthew 8:14-15',
    type: 'multiple_choice',
    question: 'Whom did Jesus find sick of a fever when He entered Peter’s house?',
    options: ['Peter’s wife’s mother', 'Peter’s brother Andrew', 'Peter’s daughter', 'Peter’s servant'],
    correctAnswer: 'Peter’s wife’s mother',
    explanation: 'Matthew 8:14: "And when Jesus was come into Peter’s house, he saw his wife’s mother laid, and sick of a fever."'
  },
  {
    id: 'mc-m8-4',
    chapter: 8,
    verse: 'Matthew 8:17',
    type: 'multiple_choice',
    question: 'Which Old Testament prophet was fulfilled by Jesus’ healings: "Himself took our infirmities, and bare our sicknesses"?',
    options: ['Esaias (Isaiah)', 'Jeremiah', 'Ezekiel', 'Daniel'],
    correctAnswer: 'Esaias (Isaiah)',
    explanation: 'Matthew 8:17: "That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses."'
  },
  {
    id: 'mc-m8-5',
    chapter: 8,
    verse: 'Matthew 8:20',
    type: 'multiple_choice',
    question: 'When a scribe offered to follow Jesus whithersoever He went, what did Jesus reply?',
    options: [
      '"Foxes have holes, and birds of the air have nests; but the Son of man hath not where to lay his head."',
      '"Sell all that thou hast and give to the poor."',
      '"No man putting his hand to the plough and looking back is fit."',
      '"First learn the law and commandments from the elders."'
    ],
    correctAnswer: '"Foxes have holes, and birds of the air have nests; but the Son of man hath not where to lay his head."',
    explanation: 'Matthew 8:20 explicitly records this answer of Jesus.'
  },
  {
    id: 'mc-m8-6',
    chapter: 8,
    verse: 'Matthew 8:24',
    type: 'multiple_choice',
    question: 'Where was Jesus when a great tempest arose on the sea and covered the ship with waves?',
    options: ['He was asleep', 'He was praying on the bow', 'He was rowing with Peter', 'He was teaching the crowd on shore'],
    correctAnswer: 'He was asleep',
    explanation: 'Matthew 8:24: "And, behold, there arose a great tempest in the sea, insomuch that the ship was covered with the waves: but he was asleep."'
  },
  {
    id: 'mc-m8-7',
    chapter: 8,
    verse: 'Matthew 8:28-32',
    type: 'multiple_choice',
    question: 'In the country of the Gergesenes, into what animals did the demons request permission to enter?',
    options: ['A herd of swine', 'A flock of sheep', 'A herd of camels', 'A pack of wild dogs'],
    correctAnswer: 'A herd of swine',
    explanation: 'Matthew 8:31: "So the devils besought him, saying, If thou cast us out, suffer us to go away into the herd of swine."'
  },

  // --- MATTHEW CHAPTER 9 ---
  {
    id: 'mc-m9-1',
    chapter: 9,
    verse: 'Matthew 9:2-3',
    type: 'multiple_choice',
    question: 'What did the scribes accuse Jesus of when He said to the paralytic, "Son, be of good cheer; thy sins be forgiven thee"?',
    options: ['Blasphemy', 'Treason', 'Hypocrisy', 'Rebellion'],
    correctAnswer: 'Blasphemy',
    explanation: 'Matthew 9:3: "And, behold, certain of the scribes said within themselves, This man blasphemeth."'
  },
  {
    id: 'mc-m9-2',
    chapter: 9,
    verse: 'Matthew 9:9',
    type: 'multiple_choice',
    question: 'Whom did Jesus see sitting at the receipt of custom and say unto him, "Follow me"?',
    options: ['Matthew', 'Zacchaeus', 'Peter', 'Nicodemus'],
    correctAnswer: 'Matthew',
    explanation: 'Matthew 9:9: "And as Jesus passed forth from thence, he saw a man, named Matthew, sitting at the receipt of custom: and he saith unto him, Follow me."'
  },
  {
    id: 'mc-m9-3',
    chapter: 9,
    verse: 'Matthew 9:12-13',
    type: 'multiple_choice',
    question: 'When the Pharisees asked why Jesus ate with publicans and sinners, how did Jesus reply?',
    options: [
      '"They that be whole need not a physician, but they that are sick... I am not come to call the righteous, but sinners to repentance."',
      '"The Sabbath was made for man and not man for the Sabbath."',
      '"Render unto Caesar what is Caesar’s."',
      '"Let him who is without sin cast the first stone."'
    ],
    correctAnswer: '"They that be whole need not a physician, but they that are sick... I am not come to call the righteous, but sinners to repentance."',
    explanation: 'Matthew 9:12-13.'
  },
  {
    id: 'mc-m9-4',
    chapter: 9,
    verse: 'Matthew 9:17',
    type: 'multiple_choice',
    question: 'What happens if people put new wine into old bottles (wineskins)?',
    options: [
      'The bottles break, the wine runneth out, and the bottles perish',
      'The wine ferments faster and tastes sweeter',
      'The bottles remain strong and both are preserved',
      'Nothing happens'
    ],
    correctAnswer: 'The bottles break, the wine runneth out, and the bottles perish',
    explanation: 'Matthew 9:17: "Neither do men put new wine into old bottles: else the bottles break, and the wine runneth out, and the bottles perish: but they put new wine into new bottles, and both are preserved."'
  },
  {
    id: 'mc-m9-5',
    chapter: 9,
    verse: 'Matthew 9:20',
    type: 'multiple_choice',
    question: 'How long had the woman suffered from an issue of blood before touching the hem of Jesus’ garment?',
    options: ['Twelve years', 'Seven years', 'Eighteen years', 'Ten years'],
    correctAnswer: 'Twelve years',
    explanation: 'Matthew 9:20: "And, behold, a woman, which was diseased with an issue of blood twelve years, came behind him, and touched the hem of his garment."'
  },
  {
    id: 'mc-m9-6',
    chapter: 9,
    verse: 'Matthew 9:27-28',
    type: 'multiple_choice',
    question: 'What did the two blind men cry out as they followed Jesus?',
    options: [
      '"Thou Son of David, have mercy on us."',
      '"Lord, give us sight to see thy glory."',
      '"Master, heal us according to the law."',
      '"Hosanna to the King of Israel."'
    ],
    correctAnswer: '"Thou Son of David, have mercy on us."',
    explanation: 'Matthew 9:27: "two blind men followed him, crying, and saying, Thou Son of David, have mercy on us."'
  },
  {
    id: 'mc-m9-7',
    chapter: 9,
    verse: 'Matthew 9:36',
    type: 'multiple_choice',
    question: 'Why was Jesus moved with compassion when He saw the multitudes in Matthew 9:36?',
    options: [
      'Because they fainted, and were scattered abroad, as sheep having no shepherd',
      'Because they had no money to purchase bread',
      'Because the Roman soldiers were oppressing them',
      'Because the sun was beating fiercely upon them'
    ],
    correctAnswer: 'Because they fainted, and were scattered abroad, as sheep having no shepherd',
    explanation: 'Matthew 9:36: "But when he saw the multitudes, he was moved with compassion on them, because they fainted, and were scattered abroad, as sheep having no shepherd."'
  },

  // --- MATTHEW CHAPTER 10 ---
  {
    id: 'mc-m10-1',
    chapter: 10,
    verse: 'Matthew 10:2',
    type: 'multiple_choice',
    question: 'Who is named first among the twelve apostles in Matthew 10:2?',
    options: ['Simon, who is called Peter', 'John the Beloved', 'Andrew', 'James son of Zebedee'],
    correctAnswer: 'Simon, who is called Peter',
    explanation: 'Matthew 10:2: "Now the names of the twelve apostles are these; The first, Simon, who is called Peter, and Andrew his brother..."'
  },
  {
    id: 'mc-m10-2',
    chapter: 10,
    verse: 'Matthew 10:3',
    type: 'multiple_choice',
    question: 'Who among the apostles had the surname Thaddaeus?',
    options: ['Lebbaeus', 'Bartholomew', 'James the less', 'Simon the Canaanite'],
    correctAnswer: 'Lebbaeus',
    explanation: 'Matthew 10:3: "...Lebbaeus, whose surname was Thaddaeus;"'
  },
  {
    id: 'mc-m10-3',
    chapter: 10,
    verse: 'Matthew 10:5-6',
    type: 'multiple_choice',
    question: 'To whom did Jesus send the twelve disciples instead of the Gentiles or Samaritans?',
    options: [
      'The lost sheep of the house of Israel',
      'The priests and elders in Jerusalem',
      'The rulers in Rome',
      'The scholars of Alexandria'
    ],
    correctAnswer: 'The lost sheep of the house of Israel',
    explanation: 'Matthew 10:6: "But go rather to the lost sheep of the house of Israel."'
  },
  {
    id: 'mc-m10-4',
    chapter: 10,
    verse: 'Matthew 10:9-10',
    type: 'multiple_choice',
    question: 'What were the disciples told NOT to provide in their purses for their journey?',
    options: [
      'Gold, silver, or brass',
      'Food and holy scriptures',
      'Walking staves and sandals',
      'Letters of recommendation'
    ],
    correctAnswer: 'Gold, silver, or brass',
    explanation: 'Matthew 10:9: "Provide neither gold, nor silver, nor brass in your purses."'
  },
  {
    id: 'mc-m10-5',
    chapter: 10,
    verse: 'Matthew 10:16',
    type: 'multiple_choice',
    question: 'Complete the verse: "Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise as _______, and harmless as _______."',
    options: [
      'Serpents; doves',
      'Lions; lambs',
      'Eagles; pigeons',
      'Foxes; sparrows'
    ],
    correctAnswer: 'Serpents; doves',
    explanation: 'Matthew 10:16: "Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise as serpents, and harmless as doves."'
  },
  {
    id: 'mc-m10-6',
    chapter: 10,
    verse: 'Matthew 10:29',
    type: 'multiple_choice',
    question: 'How many sparrows are sold for a farthing, yet not one falls to the ground without your Father?',
    options: ['Two', 'Five', 'Ten', 'Twelve'],
    correctAnswer: 'Two',
    explanation: 'Matthew 10:29: "Are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father."'
  },
  {
    id: 'mc-m10-7',
    chapter: 10,
    verse: 'Matthew 10:34',
    type: 'multiple_choice',
    question: 'Complete Jesus’ statement: "Think not that I am come to send peace on earth: I came not to send peace, but a ______."',
    options: ['Sword', 'Fire', 'Storm', 'Divider'],
    correctAnswer: 'Sword',
    explanation: 'Matthew 10:34: "Think not that I am come to send peace on earth: I came not to send peace, but a sword."'
  }
];

export const TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  // --- MATTHEW CHAPTER 6 ---
  {
    id: 'tf-m6-1',
    chapter: 6,
    verse: 'Matthew 6:1',
    type: 'true_false',
    statement: 'If people do their alms before men to be seen of them, they have no reward of their Father which is in heaven.',
    isTrue: true,
    correctExplanation: 'True. Matthew 6:1 affirms that doing good works to be seen of men forfeits heavenly reward.'
  },
  {
    id: 'tf-m6-2',
    chapter: 6,
    verse: 'Matthew 6:2',
    type: 'true_false',
    statement: 'Hypocrites sound trumpets in synagogues and streets so that they may give all glory to God alone.',
    isTrue: false,
    correctExplanation: 'False. They sound trumpets so that they may have glory of men, not God.'
  },
  {
    id: 'tf-m6-3',
    chapter: 6,
    verse: 'Matthew 6:7',
    type: 'true_false',
    statement: 'Jesus commanded disciples to use vain repetitions like the heathen who think they are heard for much speaking.',
    isTrue: false,
    correctExplanation: 'False. Jesus instructed: "use not vain repetitions, as the heathen do".'
  },
  {
    id: 'tf-m6-4',
    chapter: 6,
    verse: 'Matthew 6:15',
    type: 'true_false',
    statement: 'If we forgive not men their trespasses, neither will our heavenly Father forgive our trespasses.',
    isTrue: true,
    correctExplanation: 'True. Matthew 6:15 explicitly declares that withholding forgiveness prevents our Father from forgiving us.'
  },
  {
    id: 'tf-m6-5',
    chapter: 6,
    verse: 'Matthew 6:24',
    type: 'true_false',
    statement: 'A person can easily serve both God and Mammon equally with wholehearted devotion.',
    isTrue: false,
    correctExplanation: 'False. Jesus said: "No man can serve two masters... Ye cannot serve God and mammon."'
  },
  {
    id: 'tf-m6-6',
    chapter: 6,
    verse: 'Matthew 6:26',
    type: 'true_false',
    statement: 'The fowls of the air do not sow, reap, or gather into barns, yet the heavenly Father feedeth them.',
    isTrue: true,
    correctExplanation: 'True. Matthew 6:26 teaches God’s faithful provision over the birds of the air.'
  },
  {
    id: 'tf-m6-7',
    chapter: 6,
    verse: 'Matthew 6:34',
    type: 'true_false',
    statement: 'Disciples are commanded to worry intensely about tomorrow because tomorrow cannot take care of itself.',
    isTrue: false,
    correctExplanation: 'False. Jesus said: "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself."'
  },

  // --- MATTHEW CHAPTER 7 ---
  {
    id: 'tf-m7-1',
    chapter: 7,
    verse: 'Matthew 7:2',
    type: 'true_false',
    statement: 'With what judgment ye judge, ye shall be judged: and with what measure ye mete, it shall be measured to you again.',
    isTrue: true,
    correctExplanation: 'True. Matthew 7:2 sets forth this universal divine standard.'
  },
  {
    id: 'tf-m7-2',
    chapter: 7,
    verse: 'Matthew 7:8',
    type: 'true_false',
    statement: 'Every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.',
    isTrue: true,
    correctExplanation: 'True. Matthew 7:8 gives this steadfast promise.'
  },
  {
    id: 'tf-m7-3',
    chapter: 7,
    verse: 'Matthew 7:14',
    type: 'true_false',
    statement: 'The strait gate and narrow way that leadeth unto life is easily found by the vast majority of people.',
    isTrue: false,
    correctExplanation: 'False. Jesus declared: "few there be that find it."'
  },
  {
    id: 'tf-m7-4',
    chapter: 7,
    verse: 'Matthew 7:16',
    type: 'true_false',
    statement: 'Jesus said we will recognize false prophets by their eloquent words rather than their fruits.',
    isTrue: false,
    correctExplanation: 'False. Matthew 7:16 states: "Ye shall know them by their fruits."'
  },
  {
    id: 'tf-m7-5',
    chapter: 7,
    verse: 'Matthew 7:25',
    type: 'true_false',
    statement: 'The house built upon the rock fell when rains descended and floods beat upon it.',
    isTrue: false,
    correctExplanation: 'False. The house built upon the rock fell not, for it was founded upon a rock.'
  },

  // --- MATTHEW CHAPTER 8 ---
  {
    id: 'tf-m8-1',
    chapter: 8,
    verse: 'Matthew 8:3',
    type: 'true_false',
    statement: 'Immediately after Jesus put forth His hand and touched the leper, his leprosy was cleansed.',
    isTrue: true,
    correctExplanation: 'True. Matthew 8:3 confirms instantaneous healing upon Jesus’ touch.'
  },
  {
    id: 'tf-m8-2',
    chapter: 8,
    verse: 'Matthew 8:10',
    type: 'true_false',
    statement: 'Jesus found faith in Israel that was far greater than the Roman centurion’s faith.',
    isTrue: false,
    correctExplanation: 'False. Jesus marvelled and said: "I have not found so great faith, no, not in Israel."'
  },
  {
    id: 'tf-m8-3',
    chapter: 8,
    verse: 'Matthew 8:15',
    type: 'true_false',
    statement: 'When Jesus touched the hand of Peter’s wife’s mother, the fever left her, and she arose and ministered unto them.',
    isTrue: true,
    correctExplanation: 'True. Matthew 8:15.'
  },
  {
    id: 'tf-m8-4',
    chapter: 8,
    verse: 'Matthew 8:34',
    type: 'true_false',
    statement: 'After the herd of swine drowned, the whole city pleaded with Jesus to stay and become their king.',
    isTrue: false,
    correctExplanation: 'False. The whole city came out and besought Him that He would depart out of their coasts.'
  },

  // --- MATTHEW CHAPTER 9 ---
  {
    id: 'tf-m9-1',
    chapter: 9,
    verse: 'Matthew 9:6',
    type: 'true_false',
    statement: 'Jesus demonstrated that the Son of man hath power on earth to forgive sins by healing the paralytic.',
    isTrue: true,
    correctExplanation: 'True. Matthew 9:6.'
  },
  {
    id: 'tf-m9-2',
    chapter: 9,
    verse: 'Matthew 9:9',
    type: 'true_false',
    statement: 'Matthew refused Jesus’ call and remained collecting taxes at the custom receipt.',
    isTrue: false,
    correctExplanation: 'False. Matthew arose and immediately followed Jesus.'
  },
  {
    id: 'tf-m9-3',
    chapter: 9,
    verse: 'Matthew 9:25',
    type: 'true_false',
    statement: 'When Jesus took the ruler’s daughter by the hand, she arose from the dead.',
    isTrue: true,
    correctExplanation: 'True. Matthew 9:25.'
  },
  {
    id: 'tf-m9-4',
    chapter: 9,
    verse: 'Matthew 9:34',
    type: 'true_false',
    statement: 'The Pharisees praised Jesus, saying He cast out devils by the power of the Holy Spirit.',
    isTrue: false,
    correctExplanation: 'False. The Pharisees said: "He casteth out devils through the prince of the devils."'
  },

  // --- MATTHEW CHAPTER 10 ---
  {
    id: 'tf-m10-1',
    chapter: 10,
    verse: 'Matthew 10:1',
    type: 'true_false',
    statement: 'Jesus gave the twelve disciples power against unclean spirits, to cast them out, and to heal all manner of sickness.',
    isTrue: true,
    correctExplanation: 'True. Matthew 10:1.'
  },
  {
    id: 'tf-m10-2',
    chapter: 10,
    verse: 'Matthew 10:8',
    type: 'true_false',
    statement: 'Jesus commanded the disciples: "Freely ye have received, freely give."',
    isTrue: true,
    correctExplanation: 'True. Matthew 10:8.'
  },
  {
    id: 'tf-m10-3',
    chapter: 10,
    verse: 'Matthew 10:19-20',
    type: 'true_false',
    statement: 'When brought before rulers, disciples must prepare elaborate scripted speeches because the Spirit will remain silent.',
    isTrue: false,
    correctExplanation: 'False. Jesus said: "take no thought how or what ye shall speak... For it is not ye that speak, but the Spirit of your Father which speaketh in you."'
  },
  {
    id: 'tf-m10-4',
    chapter: 10,
    verse: 'Matthew 10:30',
    type: 'true_false',
    statement: 'According to Jesus, even the very hairs of your head are all numbered by the Father.',
    isTrue: true,
    correctExplanation: 'True. Matthew 10:30.'
  },
  {
    id: 'tf-m10-5',
    chapter: 10,
    verse: 'Matthew 10:42',
    type: 'true_false',
    statement: 'Whosoever gives even a cup of cold water only in the name of a disciple shall in no wise lose his reward.',
    isTrue: true,
    correctExplanation: 'True. Matthew 10:42.'
  }
];

export const IDENTIFICATION_QUESTIONS: IdentificationQuestion[] = [
  // --- MATTHEW CHAPTER 6 ---
  {
    id: 'id-m6-1',
    chapter: 6,
    verse: 'Matthew 6:7',
    type: 'identification',
    question: 'What practice did Jesus say the heathen use when praying, thinking they will be heard for their much speaking?',
    primaryAnswer: 'Vain repetitions',
    acceptedAnswers: ['vain repetitions', 'vain repetition', 'repetitions'],
    hint: 'Two words starting with V... R...'
  },
  {
    id: 'id-m6-2',
    chapter: 6,
    verse: 'Matthew 6:21',
    type: 'identification',
    question: 'Complete the principle: "For where your treasure is, there will your ______ be also."',
    primaryAnswer: 'Heart',
    acceptedAnswers: ['heart', 'your heart'],
    hint: 'An organ that symbolizes love, devotion, and desires.'
  },
  {
    id: 'id-m6-3',
    chapter: 6,
    verse: 'Matthew 6:22',
    type: 'identification',
    question: 'What is described in Matthew 6:22 as the "light of the body"?',
    primaryAnswer: 'The eye',
    acceptedAnswers: ['the eye', 'eye'],
    hint: 'The sensory organ used for vision.'
  },
  {
    id: 'id-m6-4',
    chapter: 6,
    verse: 'Matthew 6:24',
    type: 'identification',
    question: 'What word does Jesus use for wealth or material worldly riches which cannot be served alongside God?',
    primaryAnswer: 'Mammon',
    acceptedAnswers: ['mammon', 'mamon'],
    hint: 'Begins with M; rhymes with salmon.'
  },
  {
    id: 'id-m6-5',
    chapter: 6,
    verse: 'Matthew 6:28',
    type: 'identification',
    question: 'What flowers did Jesus tell His disciples to consider because they neither toil nor spin?',
    primaryAnswer: 'Lilies of the field',
    acceptedAnswers: ['lilies of the field', 'lilies', 'lily of the field', 'the lilies'],
    hint: 'White flowers growing wild in the field.'
  },

  // --- MATTHEW CHAPTER 7 ---
  {
    id: 'id-m7-1',
    chapter: 7,
    verse: 'Matthew 7:5',
    type: 'identification',
    question: 'What does Jesus call a person who tries to remove a speck/mote from a brother’s eye while ignoring the beam in their own eye?',
    primaryAnswer: 'Hypocrite',
    acceptedAnswers: ['hypocrite', 'a hypocrite'],
    hint: 'One who pretends to have moral virtues they do not practice.'
  },
  {
    id: 'id-m7-2',
    chapter: 7,
    verse: 'Matthew 7:12',
    type: 'identification',
    question: 'What famous ethical guideline is stated as: "Therefore all things whatsoever ye would that men should do to you, do ye even so to them"?',
    primaryAnswer: 'The Golden Rule',
    acceptedAnswers: ['golden rule', 'the golden rule'],
    hint: 'Named after a precious metal rule.'
  },
  {
    id: 'id-m7-3',
    chapter: 7,
    verse: 'Matthew 7:13',
    type: 'identification',
    question: 'What kind of gate did Jesus command disciples to enter in at, which leadeth unto life?',
    primaryAnswer: 'The strait gate',
    acceptedAnswers: ['strait gate', 'the strait gate', 'strait', 'straight gate'],
    hint: 'Narrow or tightly restricted entryway.'
  },
  {
    id: 'id-m7-4',
    chapter: 7,
    verse: 'Matthew 7:24',
    type: 'identification',
    question: 'Upon what solid foundation did the wise man build his house so that it fell not during rain, flood, and wind?',
    primaryAnswer: 'A rock',
    acceptedAnswers: ['rock', 'a rock', 'upon a rock', 'the rock'],
    hint: 'A hard solid stone foundation.'
  },
  {
    id: 'id-m7-5',
    chapter: 7,
    verse: 'Matthew 7:26',
    type: 'identification',
    question: 'Upon what unstable ground did the foolish man build his house which fell with a great fall?',
    primaryAnswer: 'Sand',
    acceptedAnswers: ['sand', 'the sand', 'upon the sand'],
    hint: 'Loose granular material found on beaches.'
  },

  // --- MATTHEW CHAPTER 8 ---
  {
    id: 'id-m8-1',
    chapter: 8,
    verse: 'Matthew 8:5',
    type: 'identification',
    question: 'In which city did the Roman centurion come to Jesus beseeching Him to heal his paralyzed servant?',
    primaryAnswer: 'Capernaum',
    acceptedAnswers: ['capernaum'],
    hint: 'A fishing town on the northern coast of the Sea of Galilee.'
  },
  {
    id: 'id-m8-2',
    chapter: 8,
    verse: 'Matthew 8:14',
    type: 'identification',
    question: 'Whose mother-in-law did Jesus heal of a burning fever by touching her hand?',
    primaryAnswer: 'Peter’s wife’s mother',
    acceptedAnswers: ['peter', "peter's mother in law", "peter's wife's mother", "simon peter", "peters wife mother"],
    hint: 'The disciple also known as Simon Peter.'
  },
  {
    id: 'id-m8-3',
    chapter: 8,
    verse: 'Matthew 8:28',
    type: 'identification',
    question: 'To which country did Jesus arrive when two demon-possessed men came out of the tombs to meet Him?',
    primaryAnswer: 'The country of the Gergesenes',
    acceptedAnswers: ['country of the gergesenes', 'gergesenes', 'gadarenes'],
    hint: 'Region on the eastern side of the Sea of Galilee.'
  },
  {
    id: 'id-m8-4',
    chapter: 8,
    verse: 'Matthew 8:16',
    type: 'identification',
    question: 'With what single instrument did Jesus cast out the unclean spirits when evening was come?',
    primaryAnswer: 'His word',
    acceptedAnswers: ['his word', 'word', 'with his word'],
    hint: 'Spoken verbal command.'
  },

  // --- MATTHEW CHAPTER 9 ---
  {
    id: 'id-m9-1',
    chapter: 9,
    verse: 'Matthew 9:9',
    type: 'identification',
    question: 'What occupation was Matthew engaged in before Jesus said unto him, "Follow me"?',
    primaryAnswer: 'Publican (Tax Collector)',
    acceptedAnswers: ['publican', 'tax collector', 'publicans', 'at receipt of custom'],
    hint: 'A collector of Roman revenues.'
  },
  {
    id: 'id-m9-2',
    chapter: 9,
    verse: 'Matthew 9:20',
    type: 'identification',
    question: 'What specific part of Jesus’ clothing did the woman with the issue of blood touch in faith to be made whole?',
    primaryAnswer: 'The hem of His garment',
    acceptedAnswers: ['hem', 'the hem', 'hem of his garment', 'hem of garment', 'border of his garment'],
    hint: 'The fringe or edge of Jesus’ outer robe.'
  },
  {
    id: 'id-m9-3',
    chapter: 9,
    verse: 'Matthew 9:27',
    type: 'identification',
    question: 'What messianic title did the two blind men use when crying out for mercy unto Jesus?',
    primaryAnswer: 'Thou Son of David',
    acceptedAnswers: ['son of david', 'thou son of david'],
    hint: 'Referencing lineage to Israel’s greatest royal king.'
  },
  {
    id: 'id-m9-4',
    chapter: 9,
    verse: 'Matthew 9:32-33',
    type: 'identification',
    question: 'What happened immediately to the dumb man possessed with a devil when the devil was cast out?',
    primaryAnswer: 'The dumb spake',
    acceptedAnswers: ['the dumb spake', 'he spoke', 'he spake', 'spake', 'the dumb spoke'],
    hint: 'He began to talk and speak.'
  },

  // --- MATTHEW CHAPTER 10 ---
  {
    id: 'id-m10-1',
    chapter: 10,
    verse: 'Matthew 10:4',
    type: 'identification',
    question: 'Which of the twelve disciples is recorded in Matthew 10:4 as the one who betrayed Jesus?',
    primaryAnswer: 'Judas Iscariot',
    acceptedAnswers: ['judas iscariot', 'judas'],
    hint: 'The treasurer who later betrayed his Lord.'
  },
  {
    id: 'id-m10-2',
    chapter: 10,
    verse: 'Matthew 10:2',
    type: 'identification',
    question: 'Who was the brother of Simon Peter among the twelve apostles?',
    primaryAnswer: 'Andrew',
    acceptedAnswers: ['andrew'],
    hint: 'First disciple who brought his brother to Christ.'
  },
  {
    id: 'id-m10-3',
    chapter: 10,
    verse: 'Matthew 10:2',
    type: 'identification',
    question: 'Who were the two brothers known as the sons of Zebedee?',
    primaryAnswer: 'James and John',
    acceptedAnswers: ['james and john', 'john and james'],
    hint: 'Two fishermen brothers called by Jesus.'
  },
  {
    id: 'id-m10-4',
    chapter: 10,
    verse: 'Matthew 10:25',
    type: 'identification',
    question: 'What title of demonic authority did the scribes and enemies call the master of the house?',
    primaryAnswer: 'Beelzebub',
    acceptedAnswers: ['beelzebub', 'beelzebul'],
    hint: 'Name often meaning lord of flies or ruler of demons.'
  },
  {
    id: 'id-m10-5',
    chapter: 10,
    verse: 'Matthew 10:31',
    type: 'identification',
    question: 'Complete the encouraging promise: "Fear ye not therefore, ye are of more value than many ______."',
    primaryAnswer: 'Sparrows',
    acceptedAnswers: ['sparrows', 'sparrow'],
    hint: 'Small, common birds.'
  }
];

export interface StudyItem {
  id: string;
  chapter: number;
  verse: string;
  question: string;
  answer: string;
  highlightCategory?: 'Doctrine' | 'Miracle' | 'Command' | 'Memory Verse' | 'Disciples';
}

export const COMPLETE_STUDY_GUIDE: StudyItem[] = [
  // --- CHAPTER 6 ---
  {
    id: 's-6-1',
    chapter: 6,
    verse: 'vs1',
    question: 'What did Jesus warn His disciples not to do before men, to be seen of them?',
    answer: 'Their alms',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-2',
    chapter: 6,
    verse: 'vs1',
    question: 'What happens if people give alms to be seen by men?',
    answer: 'They have no reward of their Father which is in heaven',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-3',
    chapter: 6,
    verse: 'vs2',
    question: 'What should a person not do when giving alms as the hypocrites do in the synagogues and in the streets?',
    answer: 'Not sound a trumpet before him',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-4',
    chapter: 6,
    verse: 'vs2',
    question: 'What was the reason of those hypocrites as they sound a trumpet in the synagogues and in the streets?',
    answer: 'That they may have glory of men',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-5',
    chapter: 6,
    verse: 'vs3',
    question: 'What should thy left hand not know when thou doest alms?',
    answer: 'What thy right hand doeth',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-6',
    chapter: 6,
    verse: 'vs4',
    question: 'How should thine alms be given, be seen with thy Father himself and reward thee openly?',
    answer: 'In secret',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-7',
    chapter: 6,
    verse: 'vs5',
    question: 'In what places did hypocrites love to pray?',
    answer: 'They love to pray standing in the synagogues; In the corners of the streets',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-8',
    chapter: 6,
    verse: 'vs5',
    question: 'Why did hypocrites love to pray in public?',
    answer: 'That they may be seen of men',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-9',
    chapter: 6,
    verse: 'vs5',
    question: 'What reward did Jesus say they have same as doing alms in public?',
    answer: 'They have their reward',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-10',
    chapter: 6,
    verse: 'vs6',
    question: 'In what manner should a person pray according to Matthew 6:6?',
    answer: 'Enter into thy closet and pray to the Father in secret',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-11',
    chapter: 6,
    verse: 'vs7',
    question: 'What should men not use when praying?',
    answer: 'Vain repetitions',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-12',
    chapter: 6,
    verse: 'vs7',
    question: 'Who are those does Jesus say use vain repetitions in praying?',
    answer: 'The heathen',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-13',
    chapter: 6,
    verse: 'vs7',
    question: 'Why should men not use vain repetitions as the heathen do in praying?',
    answer: 'Because they think that they shall be heard for their much speaking',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-14',
    chapter: 6,
    verse: 'vs8',
    question: 'What does the Father know before we ask Him?',
    answer: 'Things we have need of',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-15',
    chapter: 6,
    verse: 'vs9-13',
    question: 'Memory Verse: The Lord’s Prayer (Matthew 6:9-13)',
    answer: '“Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven. Give us this day our daily bread. And forgive us our debts, as we forgive our debtors. And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.”',
    highlightCategory: 'Memory Verse'
  },
  {
    id: 's-6-16',
    chapter: 6,
    verse: 'vs13',
    question: 'What belongs to God according to the ending of the prayer?',
    answer: 'The kingdom, the power, and the glory, forever.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-17',
    chapter: 6,
    verse: 'vs14',
    question: 'What happens if we forgive men their trespasses?',
    answer: 'Our heavenly Father will also forgive us',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-18',
    chapter: 6,
    verse: 'vs15',
    question: 'What happens if we do not forgive men their trespasses?',
    answer: 'Neither will our Father forgive our trespasses',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-19',
    chapter: 6,
    verse: 'vs16',
    question: 'What should men not be like when they fast?',
    answer: 'As the hypocrites, of a sad countenance',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-20',
    chapter: 6,
    verse: 'vs16',
    question: 'Why do hypocrites disfigure their faces as they fast?',
    answer: 'That they may appear unto men to fast',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-21',
    chapter: 6,
    verse: 'vs17-18',
    question: 'What should you do when thou fastest and why?',
    answer: 'Anoint thine head and wash thy face; that thou appear not unto men to fast, but unto thy Father in secret',
    highlightCategory: 'Command'
  },
  {
    id: 's-6-22',
    chapter: 6,
    verse: 'vs19',
    question: 'Why should we not lay up treasures on earth?',
    answer: 'Moth and rust corrupt, and thieves break through and steal',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-23',
    chapter: 6,
    verse: 'vs20',
    question: 'Why should treasures be laid up in heaven?',
    answer: 'Neither moth nor rust corrupts, and thieves do not break through nor steal',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-24',
    chapter: 6,
    verse: 'vs21',
    question: 'Memory Verse: Matthew 6:21',
    answer: '“For where your treasure is, there will your heart be also.”',
    highlightCategory: 'Memory Verse'
  },
  {
    id: 's-6-25',
    chapter: 6,
    verse: 'vs22-23',
    question: 'What is described as the light of the body, and what happens if the eye is single or evil?',
    answer: 'The eye. Single: whole body full of light. Evil: whole body full of darkness.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-26',
    chapter: 6,
    verse: 'vs24',
    question: 'How many masters can no man serve to, and what thing cannot be served alongside God?',
    answer: 'Two masters. Ye cannot serve God and Mammon.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-27',
    chapter: 6,
    verse: 'vs26',
    question: 'What creatures did Jesus tell disciples to consider who neither sow nor reap yet Father feeds them?',
    answer: 'The fowls of the air (“Are ye not much better than they?”)',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-28',
    chapter: 6,
    verse: 'vs28-29',
    question: 'What flowers did Jesus tell His disciples to consider, which even Solomon in all his glory was not arrayed like?',
    answer: 'The lilies of the field (they toil not, neither do they spin)',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-6-29',
    chapter: 6,
    verse: 'vs33',
    question: 'Memory Verse: Matthew 6:33',
    answer: '“But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.”',
    highlightCategory: 'Memory Verse'
  },
  {
    id: 's-6-30',
    chapter: 6,
    verse: 'vs34',
    question: 'Why should we not take thought for tomorrow?',
    answer: '“For the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.”',
    highlightCategory: 'Command'
  },

  // --- CHAPTER 7 ---
  {
    id: 's-7-1',
    chapter: 7,
    verse: 'vs1',
    question: 'Memory Verse: Matthew 7:1',
    answer: '“Judge not, that ye be not judged.”',
    highlightCategory: 'Memory Verse'
  },
  {
    id: 's-7-2',
    chapter: 7,
    verse: 'vs3-5',
    question: 'What did Jesus say concerning the mote and the beam, and what did He call the person?',
    answer: 'Cast out first the beam out of thine own eye before removing the mote from thy brother’s eye; Jesus called him “Hypocrite”.',
    highlightCategory: 'Command'
  },
  {
    id: 's-7-3',
    chapter: 7,
    verse: 'vs6',
    question: 'What did Jesus say should not be given unto dogs nor cast before swine?',
    answer: 'That which is holy; pearls (lest they trample them and rend you)',
    highlightCategory: 'Command'
  },
  {
    id: 's-7-4',
    chapter: 7,
    verse: 'vs7-8',
    question: 'Memory Verse: Matthew 7:7-8',
    answer: '“Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you: For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.”',
    highlightCategory: 'Memory Verse'
  },
  {
    id: 's-7-5',
    chapter: 7,
    verse: 'vs9-10',
    question: 'What will a father not give his son if he asks for bread and fish?',
    answer: 'Bread – stone; Fish – serpent',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-7-6',
    chapter: 7,
    verse: 'vs12',
    question: 'What is commonly known as the “Golden Rule” in Matthew 7:12?',
    answer: '“Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.”',
    highlightCategory: 'Command'
  },
  {
    id: 's-7-7',
    chapter: 7,
    verse: 'vs13-14',
    question: 'What are the three contrasts in Matthew 7:13–14?',
    answer: 'Strait gate vs. Wide gate; Narrow way vs. Broad way; Life vs. Destruction',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-7-8',
    chapter: 7,
    verse: 'vs15-16',
    question: 'From whom did Jesus warn disciples to beware, and how shall we know them?',
    answer: 'False prophets (outwardly in sheep’s clothing, inwardly ravening wolves). “Ye shall know them by their fruits.”',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-7-9',
    chapter: 7,
    verse: 'vs21',
    question: 'Who shall enter into the kingdom of heaven according to Matthew 7:21?',
    answer: '“He that doeth the will of my Father which is in heaven.” (Not everyone that says “Lord, Lord”)',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-7-10',
    chapter: 7,
    verse: 'vs24-27',
    question: 'What are the main contrasts between the wise man and the foolish man?',
    answer: 'Wise man heareth and doeth sayings, built upon rock, house fell not. Foolish man heareth and doeth not, built upon sand, house fell.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-7-11',
    chapter: 7,
    verse: 'vs28-29',
    question: 'Why were the people astonished at Jesus’ doctrine?',
    answer: 'He taught them as one having authority, and not as the scribes.',
    highlightCategory: 'Doctrine'
  },

  // --- CHAPTER 8 ---
  {
    id: 's-8-1',
    chapter: 8,
    verse: 'vs2-4',
    question: 'What did Jesus do when the leper said “Lord, if thou wilt, thou canst make me clean”?',
    answer: 'He put forth his hand, touched him, cleansed him, and told him: “See thou tell no man; go show thyself to the priest and offer the gift Moses commanded.”',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-8-2',
    chapter: 8,
    verse: 'vs5-13',
    question: 'How did the centurion describe his faith and what happened to his servant?',
    answer: '“Speak the word only, and my servant shall be healed.” Jesus marvelled at his great faith, and the servant was healed in the selfsame hour.',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-8-3',
    chapter: 8,
    verse: 'vs14-15',
    question: 'In whose house did Jesus enter and heal a sick woman of a fever?',
    answer: 'Peter’s house (he touched Peter’s wife’s mother’s hand, fever left her, and she arose and ministered).',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-8-4',
    chapter: 8,
    verse: 'vs16-17',
    question: 'Which prophet’s words were fulfilled when Jesus cast out spirits with His word and healed the sick?',
    answer: 'Esaias the prophet: “Himself took our infirmities, and bare our sicknesses.”',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-8-5',
    chapter: 8,
    verse: 'vs19-20',
    question: 'What did Jesus respond to the scribe who said “Master, I will follow thee whithersoever thou goest”?',
    answer: '“The foxes have holes, and the birds of the air have nests; but the Son of man hath not where to lay his head.”',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-8-6',
    chapter: 8,
    verse: 'vs23-27',
    question: 'What occurred during the storm on the sea while Jesus was asleep?',
    answer: 'Disciples cried “Lord, save us: we perish.” Jesus asked “Why are ye fearful, O ye of little faith?”, rebuked the winds and sea, and there was a great calm.',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-8-7',
    chapter: 8,
    verse: 'vs28-34',
    question: 'What occurred in the country of the Gergesenes with the two possessed men?',
    answer: 'Jesus allowed demons to go into a herd of swine; the whole herd rushed violently down a steep place into the sea and perished; the city besought Him to depart.',
    highlightCategory: 'Miracle'
  },

  // --- CHAPTER 9 ---
  {
    id: 's-9-1',
    chapter: 9,
    verse: 'vs2-8',
    question: 'What did Jesus say to the paralytic, and what power did He prove He has on earth?',
    answer: '“Son, be of good cheer; thy sins be forgiven thee.” He commanded him: “Arise, take up thy bed, and go unto thine house.” He proved power to forgive sins.',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-9-2',
    chapter: 9,
    verse: 'vs9',
    question: 'Whom did Jesus see at the receipt of custom and say “Follow me”?',
    answer: 'Matthew (he arose and followed Him).',
    highlightCategory: 'Disciples'
  },
  {
    id: 's-9-3',
    chapter: 9,
    verse: 'vs12-13',
    question: 'What did Jesus reply when Pharisees asked why He ate with publicans and sinners?',
    answer: '“They that be whole need not a physician, but they that are sick... I am not come to call the righteous, but sinners to repentance.”',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-9-4',
    chapter: 9,
    verse: 'vs16-17',
    question: 'Why should new wine be put into new bottles?',
    answer: 'New wine in old bottles breaks the bottles, wine runs out, and bottles perish; in new bottles both are preserved.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-9-5',
    chapter: 9,
    verse: 'vs20-22',
    question: 'What happened when the woman with an issue of blood for twelve years touched the hem of Jesus’ garment?',
    answer: 'Jesus said “Daughter, be of good comfort; thy faith hath made thee whole.” She was made whole from that hour.',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-9-6',
    chapter: 9,
    verse: 'vs23-25',
    question: 'What miracle did Jesus perform in the ruler’s house after being laughed to scorn?',
    answer: 'He put the crowd forth, took the dead maid by the hand, and she arose.',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-9-7',
    chapter: 9,
    verse: 'vs27-30',
    question: 'What did Jesus say to the two blind men who cried “Thou Son of David, have mercy on us”?',
    answer: '“According to your faith be it unto you.” And their eyes were opened.',
    highlightCategory: 'Miracle'
  },
  {
    id: 's-9-8',
    chapter: 9,
    verse: 'vs36',
    question: 'Why did Jesus have compassion on the multitudes in Matthew 9:36?',
    answer: 'Because they fainted, and were scattered abroad, as sheep having no shepherd.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-9-9',
    chapter: 9,
    verse: 'vs37-38',
    question: 'Memory Verse: Matthew 9:37-38',
    answer: '“The harvest truly is plenteous, but the labourers are few; Pray ye therefore the Lord of the harvest, that he will send forth labourers into his harvest.”',
    highlightCategory: 'Memory Verse'
  },

  // --- CHAPTER 10 ---
  {
    id: 's-10-1',
    chapter: 10,
    verse: 'vs1',
    question: 'What power did Jesus give unto His twelve disciples?',
    answer: 'Power against unclean spirits, to cast them out, and to heal all manner of sickness and all manner of disease.',
    highlightCategory: 'Disciples'
  },
  {
    id: 's-10-2',
    chapter: 10,
    verse: 'vs2-4',
    question: 'Who are the Twelve Apostles listed in Matthew 10:2-4?',
    answer: '1. Simon Peter, 2. Andrew, 3. James (son of Zebedee), 4. John, 5. Philip, 6. Bartholomew, 7. Thomas, 8. Matthew (publican), 9. James (son of Alphaeus), 10. Lebbaeus (surname Thaddaeus), 11. Simon the Canaanite, 12. Judas Iscariot.',
    highlightCategory: 'Disciples'
  },
  {
    id: 's-10-3',
    chapter: 10,
    verse: 'vs5-7',
    question: 'To whom were the disciples sent and what was their message?',
    answer: 'Sent to the lost sheep of the house of Israel; message: “The kingdom of heaven is at hand.”',
    highlightCategory: 'Command'
  },
  {
    id: 's-10-4',
    chapter: 10,
    verse: 'vs8',
    question: 'What four miraculous works are listed in Matthew 10:8?',
    answer: 'Heal the sick, cleanse the lepers, raise the dead, and cast out devils (“Freely ye have received, freely give”).',
    highlightCategory: 'Command'
  },
  {
    id: 's-10-5',
    chapter: 10,
    verse: 'vs9-10',
    question: 'What were the disciples told not to provide in their purses and journey?',
    answer: 'Neither gold, silver, brass, scrip, two coats, shoes, or staves: for the workman is worthy of his meat.',
    highlightCategory: 'Command'
  },
  {
    id: 's-10-6',
    chapter: 10,
    verse: 'vs14',
    question: 'What were disciples to do if a house or city would not receive them nor hear their words?',
    answer: 'Depart out of that house or city, and shake off the dust of their feet.',
    highlightCategory: 'Command'
  },
  {
    id: 's-10-7',
    chapter: 10,
    verse: 'vs16',
    question: 'What two animal characteristics did Jesus command His disciples to embody?',
    answer: '“Be ye therefore wise as serpents, and harmless as doves.”',
    highlightCategory: 'Command'
  },
  {
    id: 's-10-8',
    chapter: 10,
    verse: 'vs20',
    question: 'Who would speak through the disciples when delivered up to councils and governors?',
    answer: 'The Spirit of your Father which speaketh in you.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-10-9',
    chapter: 10,
    verse: 'vs22',
    question: 'Who did Jesus promise shall be saved in Matthew 10:22?',
    answer: '“He that endureth unto the end shall be saved.”',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-10-10',
    chapter: 10,
    verse: 'vs28',
    question: 'Whom should disciples not fear, and whom SHOULD they fear?',
    answer: 'Fear not them which kill the body but are not able to kill the soul; fear Him which is able to destroy both soul and body in hell.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-10-11',
    chapter: 10,
    verse: 'vs29-31',
    question: 'What does Jesus say about sparrows and the hairs of your head?',
    answer: 'Not one sparrow falls without the Father; hairs of your head are all numbered; ye are of more value than many sparrows.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-10-12',
    chapter: 10,
    verse: 'vs32-33',
    question: 'What will Jesus do for whosoever confesses Him before men, and whosoever denies Him?',
    answer: 'Confess: Jesus will confess him before His Father in heaven. Deny: Jesus will deny him before His Father in heaven.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-10-13',
    chapter: 10,
    verse: 'vs34',
    question: 'What did Jesus say He came to send on earth in Matthew 10:34?',
    answer: '“Think not that I am come to send peace on earth: I came not to send peace, but a sword.”',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-10-14',
    chapter: 10,
    verse: 'vs37-38',
    question: 'Who is not worthy of Jesus according to Matthew 10:37–38?',
    answer: 'He that loveth father or mother more than Jesus; he that loveth son or daughter more; and he that taketh not his cross and followeth after Jesus.',
    highlightCategory: 'Doctrine'
  },
  {
    id: 's-10-15',
    chapter: 10,
    verse: 'vs39',
    question: 'Memory Verse: Matthew 10:39',
    answer: '“He that findeth his life shall lose it: and he that loseth his life for my sake shall find it.”',
    highlightCategory: 'Memory Verse'
  },
  {
    id: 's-10-16',
    chapter: 10,
    verse: 'vs42',
    question: 'What will happen to whosoever gives a cup of cold water in the name of a disciple?',
    answer: '“He shall in no wise lose his reward.”',
    highlightCategory: 'Doctrine'
  }
];

export const MEMORY_VERSES = [
  {
    reference: 'Matthew 6:9-13',
    text: '“Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven. Give us this day our daily bread. And forgive us our debts, as we forgive our debtors. And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.”',
    context: 'The Model Prayer given by Jesus on the Mount'
  },
  {
    reference: 'Matthew 6:21',
    text: '“For where your treasure is, there will your heart be also.”',
    context: 'Laying up treasures in heaven'
  },
  {
    reference: 'Matthew 6:33',
    text: '“But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.”',
    context: 'Overcoming earthly worry and prioritizing God’s Kingdom'
  },
  {
    reference: 'Matthew 7:1',
    text: '“Judge not, that ye be not judged.”',
    context: 'Righteous judgment and the beam vs. mote'
  },
  {
    reference: 'Matthew 7:7-8',
    text: '“Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you: For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.”',
    context: 'Persistence and confidence in prayer to the heavenly Father'
  },
  {
    reference: 'Matthew 9:37-38',
    text: '“Then saith he unto his disciples, The harvest truly is plenteous, but the labourers are few; Pray ye therefore the Lord of the harvest, that he will send forth labourers into his harvest.”',
    context: 'Compassion for the multitudes and praying for harvest workers'
  },
  {
    reference: 'Matthew 10:39',
    text: '“He that findeth his life shall lose it: and he that loseth his life for my sake shall find it.”',
    context: 'True discipleship and taking up one’s cross'
  }
];

export function getQuestionsForQuiz(type: 'multiple_choice' | 'true_false' | 'identification' | 'mixed', chapter: number | 'all' | 'memory_verses'): QuizQuestion[] {
  let pool: QuizQuestion[] = [];

  if (type === 'multiple_choice') {
    pool = [...MULTIPLE_CHOICE_QUESTIONS];
  } else if (type === 'true_false') {
    pool = [...TRUE_FALSE_QUESTIONS];
  } else if (type === 'identification') {
    pool = [...IDENTIFICATION_QUESTIONS];
  } else {
    // mixed
    pool = [...MULTIPLE_CHOICE_QUESTIONS, ...TRUE_FALSE_QUESTIONS, ...IDENTIFICATION_QUESTIONS];
  }

  if (chapter !== 'all') {
    pool = pool.filter(q => q.chapter === chapter);
  }

  // Shuffle pool using Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
