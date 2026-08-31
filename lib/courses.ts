export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  content: string;
  quiz: QuizQuestion[];
  /** Optional French translation of content, for bilingual courses. */
  contentFr?: string;
  /** Optional French translation of the quiz, for bilingual courses. */
  quizFr?: QuizQuestion[];
  /** Marks this chapter as a timed, scored final exam rather than a regular lesson. */
  isFinalExam?: boolean;
  /** If set, the exam is countdown-timed for this many minutes and auto-submits at zero. */
  examDurationMinutes?: number;
  /** Minimum percentage of correct answers required to pass this chapter's quiz. Defaults to 100 (must get every question right) when omitted, preserving existing course behavior. */
  passingScorePercent?: number;
}

export interface Course {
  titleFr?: string;
  subtitleFr?: string;
  descriptionFr?: string;
  id: string;
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  color: string;
  icon: string;
  chapters: Chapter[];
  /**
   * "public" (default when omitted) courses appear on the homepage and in every
   * student's dashboard. "admin" courses are personal courses that only appear in
   * the Admin Dashboard and are only accessible to the admin account.
   */
  visibility?: "public" | "admin";
  /** Display-only label noting which external certification a course prepares for, if any. Never implies official affiliation. */
  certTrack?: string;
  /** Which language(s) the course content is available in. */
  language?: "bilingual" | "fr" | "en";
}

export const COURSES: Course[] = [
  {
    id: "course-1",
    slug: "led-by-gods-power",
    order: 1,
    titleFr: "Conduit par la Puissance de Dieu",
    subtitleFr: "Les yeux et les oreilles de l'Église",
    descriptionFr: "Un cours sur les manifestations de révélation du Saint-Esprit : parole de connaissance, parole de sagesse, et discernement des esprits.",
    title: "Led by God's Power",
    subtitle: "The eyes and ears of the Church",
    description:
      "A course on the revelation manifestations of holy spirit: word of knowledge, word of wisdom, and discerning of spirits.",
    longDescription:
      "This course covers revelation manifestations — word of knowledge, word of wisdom, and discerning of spirits. You will learn how divine revelation operates, how to receive it, and how to walk in it with compassion and purpose.",
    color: "#1a1a18",
    icon: "eye",
    chapters: [
      {
        id: "c1-1",
        title: "Why Are We Here?",
        duration: "57 min",
        content: `<h2>Why Are We Here?</h2>
<p>Being led by God's power should be the goal of every believer. Growth in the operation of revelation manifestations is accelerated when we move with compassion toward others.</p>
<p>We must ask ourselves: do we want to help? If yes, our lives will never be the same again.</p>
<h3>Introduction</h3>
<p>This course is the third of four series on God's Power, by Christian Family Fellowship Ministry. The four series are:</p>
<ul>
<li><strong>Living in God's Power</strong> — foundational truths and speaking in tongues</li>
<li><strong>Growing in God's Power</strong> — the Body of Christ and worship manifestations</li>
<li><strong>Led by God's Power</strong> — revelation manifestations (this course)</li>
<li><strong>Administering God's Power</strong> — impartation, faith, miracles, and gifts of healings</li>
</ul>
<h3>The Foundation: 1 Corinthians 2:5</h3>
<blockquote>"That your faith should not stand in the wisdom of men, but in the power of God."</blockquote>
<p>The wisdom and philosophies of men should not be the foundation of your faith. Our faith should be grounded in God's power. Living in God's Power lays a foundational knowledge of God's Word for those who desire to learn and walk in His power.</p>
<h3>Our Goal</h3>
<p>The goal of this ministry is to equip believers to walk in the simplicity of operating the manifestations of holy spirit — the power of God. These teaching resources are designed as tools to help believers who want to believe, to better know their heavenly Father.</p>`,
        quiz: [
          {
            question: "What should be the goal of every believer according to this lesson?",
            options: [
              "To accumulate biblical knowledge",
              "To be led by God's power",
              "To become a minister",
              "To understand church history",
            ],
            correct: 1,
            explanation:
              "The lesson clearly states: 'Being led by God's power should be the goal of every believer.' Review the 'Why Are We Here?' section for more context.",
          },
          {
            question: "What accelerates growth in revelation manifestations?",
            options: [
              "Spending more time in study",
              "Attending more church services",
              "Moving with compassion toward others",
              "Memorizing scripture",
            ],
            correct: 2,
            explanation:
              "Growth in revelation manifestations is accelerated when we move with compassion toward others. The heart attitude of wanting to help others is key.",
          },
          {
            question: "Which course covers speaking in tongues as its culmination?",
            options: [
              "Led by God's Power",
              "Administering God's Power",
              "Living in God's Power",
              "Growing in God's Power",
            ],
            correct: 2,
            explanation:
              "'Living in God's Power' is the foundational series that presents the fundamental truths of God's Word and leads to speaking in tongues.",
          },
        ],
      },
      {
        id: "c1-2",
        title: "Revelation Manifestations",
        duration: "51 min",
        content: `<h2>The Revelation Manifestations</h2>
<p>There are nine manifestations of holy spirit listed in 1 Corinthians 12. Three of them are revelation manifestations — they reveal something:</p>
<ul>
<li><strong>Word of Knowledge</strong> — a supernatural revelation of facts about a person, place, or event</li>
<li><strong>Word of Wisdom</strong> — a supernatural revelation of God's will and plan for the future</li>
<li><strong>Discerning of Spirits</strong> — a supernatural ability to perceive the source and nature of spiritual activity</li>
</ul>
<h3>Word of Knowledge</h3>
<p>A word of knowledge is a supernatural fragment of God's knowledge concerning a specific person, place, or thing — given to a believer by the spirit of God. It relates to something in the past or present, not the future.</p>
<p>Examples in Scripture: Jesus knew Nathanael was under the fig tree (John 1:48). Jesus knew the Samaritan woman's history (John 4:18). Peter knew that Ananias had lied (Acts 5:3).</p>
<h3>Word of Wisdom</h3>
<p>A word of wisdom is a supernatural revelation from God concerning His future purposes and plans. It always relates to future events or divine direction.</p>
<p>Examples: Agabus predicted the famine (Acts 11:28). Paul knew he would stand before Caesar (Acts 27:23-24).</p>
<h3>Discerning of Spirits</h3>
<p>Discerning of spirits is the supernatural ability to determine the source of spiritual manifestations — whether they come from God, the adversary, or the human spirit.</p>
<p>This is not natural discernment or intuition — it is a spiritual gift that operates by holy spirit.</p>`,
        quiz: [
          {
            question: "How many total manifestations of holy spirit are listed in 1 Corinthians 12?",
            options: ["Three", "Seven", "Nine", "Twelve"],
            correct: 2,
            explanation:
              "There are nine manifestations of holy spirit listed in 1 Corinthians 12. Of these, three are revelation manifestations.",
          },
          {
            question: "A word of knowledge relates to:",
            options: [
              "Future plans of God",
              "Past or present facts about a person, place, or thing",
              "The nature of spiritual beings",
              "God's eternal purposes",
            ],
            correct: 1,
            explanation:
              "A word of knowledge is a supernatural fragment of God's knowledge about something in the past or present — not the future.",
          },
          {
            question: "Which manifestation allows a believer to determine the source of spiritual activity?",
            options: [
              "Word of Wisdom",
              "Word of Knowledge",
              "Discerning of Spirits",
              "Prophecy",
            ],
            correct: 2,
            explanation:
              "Discerning of spirits is the supernatural ability to determine whether spiritual manifestations come from God, the adversary, or the human spirit.",
          },
        ],
      },
      {
        id: "c1-3",
        title: "How Is Revelation Received?",
        duration: "54 min",
        content: `<h2>How Is Revelation Received?</h2>
<p>Revelation from God comes through various channels. Understanding how it is received helps us to be open and ready when God moves through us.</p>
<h3>Channels of Revelation</h3>
<ul>
<li><strong>Visions</strong> — seeing in the spirit: open visions, closed visions (in the mind), trances</li>
<li><strong>Dreams</strong> — God speaks through dreams (Numbers 12:6)</li>
<li><strong>A still small voice</strong> — an impression, an inner knowing (1 Kings 19:12)</li>
<li><strong>An audible voice</strong> — rare, but recorded in Scripture</li>
<li><strong>Through angels</strong> — God's messengers can carry revelation</li>
</ul>
<h3>Key Principles</h3>
<p><strong>1. Revelation is spiritually discerned.</strong> You cannot receive spiritual revelation through your five senses alone. It comes through the spirit within you (1 Corinthians 2:14).</p>
<p><strong>2. It always aligns with Scripture.</strong> Any revelation that contradicts the written Word of God is not from God. The Bible is the standard and judge of all revelation.</p>
<p><strong>3. Compassion opens the door.</strong> Moving toward people with a heart of compassion creates an atmosphere for revelation to flow. Jesus was moved with compassion before many of His miracles.</p>
<h3>Practical Steps</h3>
<p>Be still and pray in the spirit. As you yield your spirit to God, pay attention to impressions, images, or thoughts that arise that you did not generate yourself. Speak what you receive in faith — God honors the step of faith.</p>`,
        quiz: [
          {
            question: "Which of the following is NOT listed as a channel through which revelation is received?",
            options: [
              "Dreams",
              "Visions",
              "Reading a theological book",
              "A still small voice",
            ],
            correct: 2,
            explanation:
              "Revelation is received through spiritual channels: visions, dreams, a still small voice, an audible voice, and through angels — not through human intellectual effort alone.",
          },
          {
            question: "How do we test whether a revelation is from God?",
            options: [
              "It must feel emotionally powerful",
              "It must align with the written Word of God",
              "It must be confirmed by three witnesses",
              "It must predict the future accurately",
            ],
            correct: 1,
            explanation:
              "Any revelation must align with Scripture. The Bible is the standard and judge of all revelation — anything contradicting God's Word is not from Him.",
          },
          {
            question: "What attitude opens the door for revelation to flow?",
            options: [
              "Intense fasting",
              "Theological study",
              "Compassion toward others",
              "Silence and meditation",
            ],
            correct: 2,
            explanation:
              "Compassion opens the door. Jesus was moved with compassion before many miracles. When we genuinely care about helping others, we create an atmosphere for revelation.",
          },
        ],
      },
      {
        id: "c1-4",
        title: "Learning Examples",
        duration: "59 min",
        content: `<h2>Learning Examples from Scripture</h2>
<p>The best way to understand revelation manifestations is to study them in operation throughout Scripture. God's Word gives us living examples that teach us how these gifts work.</p>
<h3>Jesus and the Woman at the Well (John 4)</h3>
<p>Jesus received a word of knowledge about the Samaritan woman's five husbands. Notice how He received it: He was engaged with her in conversation, moved with compassion, and the revelation came naturally in that context. The result was an entire village coming to know God.</p>
<h3>Peter and Cornelius (Acts 10)</h3>
<p>Peter received a vision — a trance — that opened his understanding to take the Gospel to the Gentiles. The revelation came while he was praying. It was symbolic and required interpretation through Scripture and the Holy Spirit's guidance.</p>
<h3>Agabus and the Famine (Acts 11:27-28)</h3>
<p>Agabus received a word of wisdom — a prophetic revelation about a future famine. The church responded practically, organizing relief for believers in Judea. Revelation always has a purpose: to bring help, direction, or deliverance.</p>
<h3>Key Observations</h3>
<ul>
<li>Revelation typically comes when we are focused on others, not on ourselves</li>
<li>The context is usually ministry, prayer, or service</li>
<li>The purpose is always edification, exhortation, or comfort (1 Cor 14:3)</li>
<li>It requires faith to act on what has been received</li>
</ul>`,
        quiz: [
          {
            question: "In the story of Jesus and the woman at the well, what type of manifestation did Jesus operate?",
            options: [
              "Word of Wisdom",
              "Discerning of Spirits",
              "Word of Knowledge",
              "Prophecy",
            ],
            correct: 2,
            explanation:
              "Jesus demonstrated a word of knowledge — He knew facts about the woman's past (her five husbands) that He had not been told through natural means.",
          },
          {
            question: "What was the purpose of the revelation Agabus received about the famine?",
            options: [
              "To warn people to store food for themselves",
              "To demonstrate his prophetic gift",
              "To enable the church to prepare relief for believers in Judea",
              "To judge the Roman government",
            ],
            correct: 2,
            explanation:
              "Agabus received the revelation so the church could organize relief for believers in Judea. Revelation always has a practical, loving purpose.",
          },
          {
            question: "According to 1 Corinthians 14:3, what are the three purposes of prophetic revelation?",
            options: [
              "Teaching, rebuking, correcting",
              "Edification, exhortation, comfort",
              "Healing, deliverance, salvation",
              "Knowledge, wisdom, understanding",
            ],
            correct: 1,
            explanation:
              "1 Corinthians 14:3 states that prophecy speaks to edification, exhortation, and comfort. All revelation manifestations serve these constructive purposes.",
          },
        ],
      },
      {
        id: "c1-5",
        title: "There Is More to Do",
        duration: "65 min",
        content: `<h2>There Is More to Do</h2>
<p>The revelation manifestations are not reserved for a spiritual elite — they are available to every believer. God wants all of His children to operate in His power.</p>
<h3>Every Believer's Inheritance</h3>
<p>Joel 2:28 promises: "Your sons and daughters shall prophesy, your old men shall dream dreams, your young men shall see visions." This promise is for all flesh — every believer has access to revelation from God.</p>
<h3>The Role of Desire</h3>
<p>1 Corinthians 14:1 says: "Pursue love, and desire spiritual gifts." Desiring these gifts is not selfish — it is obedient. God wants us to want what He has provided. The greater our desire to help others, the more He can work through us.</p>
<h3>Overcoming Hesitation</h3>
<p>Many believers hesitate because they fear making mistakes. But God is gracious — He honors the sincere effort of faith. It is better to step out in love and miss the mark occasionally than to never step out at all.</p>
<p>Principles for stepping out:</p>
<ul>
<li>Always share revelation humbly: "I believe I have something to share..."</li>
<li>Keep it edifying — never shame, manipulate, or control</li>
<li>Submit to mature leadership</li>
<li>Learn from every experience</li>
</ul>
<h3>The Great Commission Context</h3>
<p>Mark 16:17-18 shows that signs and wonders were meant to accompany the preaching of the Gospel. Revelation manifestations are not separate from evangelism — they are powerful tools for reaching the lost.</p>`,
        quiz: [
          {
            question: "Who does Joel 2:28 say will prophesy and dream dreams?",
            options: [
              "Only ordained ministers",
              "Only those with special calling",
              "Sons and daughters — all believers",
              "Only elders of the church",
            ],
            correct: 2,
            explanation:
              "Joel 2:28 promises that 'your sons and daughters shall prophesy.' This includes all believers — the gifts are not limited to a spiritual elite.",
          },
          {
            question: "What does 1 Corinthians 14:1 instruct believers to do regarding spiritual gifts?",
            options: [
              "Wait for them to be given sovereignly",
              "Desire them earnestly",
              "Be cautious about them",
              "Only use them in private",
            ],
            correct: 1,
            explanation:
              "1 Corinthians 14:1 says to 'pursue love, and desire spiritual gifts.' Desiring these gifts is obedient, not selfish.",
          },
          {
            question: "How should revelation be shared humbly?",
            options: [
              "With absolute certainty and authority",
              "By saying 'thus says the Lord' definitively",
              "By saying 'I believe I have something to share'",
              "Only in writing, never verbally",
            ],
            correct: 2,
            explanation:
              "Sharing revelation humbly with phrasing like 'I believe I have something to share' honors both God and the people we serve, while avoiding manipulation or control.",
          },
        ],
      },
      {
        id: "c1-6",
        title: "The Eyes and Ears of the Church",
        duration: "54 min",
        content: `<h2>The Eyes and Ears of the Church</h2>
<p>The revelation manifestations — word of knowledge, word of wisdom, and discerning of spirits — function as the spiritual senses of the Body of Christ. Just as the natural body has eyes and ears to perceive the physical world, the church has been given spiritual senses to perceive the spiritual realm.</p>
<h3>The Body of Christ Analogy</h3>
<p>1 Corinthians 12 describes the church as a body with many members. Each member has a role. Those operating in revelation gifts function as the spiritual eyes and ears — perceiving what the Head (Christ) wants communicated to the Body.</p>
<h3>Word of Knowledge: The Eye</h3>
<p>Like eyes, word of knowledge gives the church the ability to see — to perceive facts about situations, people, or conditions that would otherwise be hidden. This sight enables targeted ministry and prevents the church from being deceived.</p>
<h3>Word of Wisdom: Strategic Vision</h3>
<p>Like far-seeing vision, word of wisdom gives the church strategic insight into God's future plans. It helps the body navigate decisions, avoid traps, and walk in God's perfect will.</p>
<h3>Discerning of Spirits: Spiritual Hearing</h3>
<p>Like ears attuned to spiritual frequency, discerning of spirits allows the church to identify the source of spiritual influences — protecting the body from deception and empowering it to minister deliverance.</p>
<h3>Unity of Purpose</h3>
<p>These three manifestations work together. A believer may receive a word of knowledge about a person's need, wisdom about how to minister to them, and discerning of spirits to identify any spiritual opposition — all in one encounter. The goal is always the same: to bring God's love and power to bear in a person's life.</p>`,
        quiz: [
          {
            question: "What role do revelation manifestations play in the Body of Christ?",
            options: [
              "They demonstrate the superiority of certain believers",
              "They function as the spiritual eyes and ears of the church",
              "They replace the need for Scripture",
              "They are only needed in crisis situations",
            ],
            correct: 1,
            explanation:
              "Revelation manifestations function as the spiritual senses of the Body of Christ — they perceive what the Head (Christ) wants communicated to the Body.",
          },
          {
            question: "Which manifestation is compared to strategic far-seeing vision?",
            options: [
              "Word of Knowledge",
              "Discerning of Spirits",
              "Prophecy",
              "Word of Wisdom",
            ],
            correct: 3,
            explanation:
              "Word of wisdom is compared to strategic far-seeing vision — it gives insight into God's future plans, helping the church navigate decisions and walk in God's will.",
          },
          {
            question: "Can multiple revelation manifestations operate in a single encounter?",
            options: [
              "No, only one gift at a time",
              "Yes, they can work together in one situation",
              "Only in exceptional circumstances",
              "Only for apostles and prophets",
            ],
            correct: 1,
            explanation:
              "Yes — a believer may receive a word of knowledge, wisdom, and discerning of spirits all in one encounter. They work together to bring God's love and power to a person's life.",
          },
        ],
      },
      {
        id: "c1-7",
        title: "The Story of Joseph",
        duration: "52 min",
        content: `<h2>The Story of Joseph: A Master Class in Revelation</h2>
<p>Joseph's life is one of the richest examples of revelation manifestations operating over an extended period. His story in Genesis 37-50 shows how God's power can operate through a yielded life.</p>
<h3>Joseph's Dreams (Genesis 37)</h3>
<p>Joseph received word of wisdom through dreams — revelation about God's future purposes for his family and nation. Notice that revelation came before the circumstances that would fulfill it. Faith always operates before the evidence arrives.</p>
<h3>Interpreting Dreams in Prison (Genesis 40)</h3>
<p>Joseph operated in word of knowledge as he interpreted the dreams of Pharaoh's butler and baker. He stated clearly: "Do not interpretations belong to God? Tell me your dreams." He gave the glory to God, not to personal insight or skill.</p>
<h3>Pharaoh's Dreams (Genesis 41)</h3>
<p>Joseph interpreted Pharaoh's dreams with a word of wisdom — revealing God's plan for seven years of plenty followed by seven years of famine. He then provided practical wisdom for how Egypt should respond.</p>
<h3>Key Lessons</h3>
<ul>
<li><strong>Revelation serves others.</strong> Joseph used revelation to help others, not to advance himself — though God ultimately elevated him.</li>
<li><strong>Give God the glory.</strong> Joseph consistently directed people to God as the source of interpretation.</li>
<li><strong>Revelation requires waiting.</strong> Years passed between Joseph's first dreams and their fulfillment. Faithfulness in the waiting period is essential.</li>
<li><strong>Character matters.</strong> Joseph's integrity in adversity prepared him to be trusted with greater revelation and responsibility.</li>
</ul>`,
        quiz: [
          {
            question: "What type of manifestation did Joseph operate when interpreting Pharaoh's dreams?",
            options: [
              "Word of Knowledge about the past",
              "Word of Wisdom about future events",
              "Discerning of Spirits",
              "Gift of Faith",
            ],
            correct: 1,
            explanation:
              "Interpreting Pharaoh's dreams was a word of wisdom — it revealed God's future plan for seven years of plenty and seven years of famine.",
          },
          {
            question: "To whom did Joseph give credit for dream interpretation?",
            options: [
              "His own spiritual training",
              "The priests of Egypt",
              "God",
              "His father Jacob",
            ],
            correct: 2,
            explanation:
              "Joseph said 'Do not interpretations belong to God?' — he consistently gave glory to God as the source, not to himself.",
          },
          {
            question: "What does Joseph's life teach us about the relationship between revelation and character?",
            options: [
              "Revelation bypasses the need for character development",
              "Only morally perfect people can receive revelation",
              "Character developed in adversity prepares us for greater revelation and responsibility",
              "Revelation comes automatically with faith",
            ],
            correct: 2,
            explanation:
              "Joseph's integrity throughout adversity (slavery, false accusation, prison) prepared him to be trusted with greater revelation and ultimately with great responsibility.",
          },
        ],
      },
      {
        id: "c1-8",
        title: "More Biblical Illustrations",
        duration: "51 min",
        content: `<h2>More Biblical Illustrations of Revelation Manifestations</h2>
<p>Scripture is full of examples of God working through revelation manifestations. Each account teaches us something about how these gifts operate in practice.</p>
<h3>Elijah and the Still Small Voice (1 Kings 19)</h3>
<p>After his great victory over the prophets of Baal, Elijah fell into despair. God did not speak to him in the wind, earthquake, or fire — but in a still small voice. This teaches us that revelation often comes quietly, not dramatically.</p>
<h3>Elisha and the King of Syria (2 Kings 6)</h3>
<p>The king of Syria was frustrated because every time he planned a military maneuver, Israel seemed to know in advance. When told it was Elisha, the king said, "He tells the king of Israel the words you speak in your bedroom." Elisha was operating in word of knowledge — receiving supernatural information about the enemy's plans.</p>
<h3>Ananias and Paul (Acts 9)</h3>
<p>God gave Ananias a word of knowledge and a word of wisdom together. He knew who Saul was (past — word of knowledge) and what God was going to do through him (future — word of wisdom). Despite his initial resistance, Ananias obeyed and ministered to the man who would become the Apostle Paul.</p>
<h3>Philip and the Ethiopian (Acts 8)</h3>
<p>The Holy Spirit directed Philip specifically: "Go near and join yourself to this chariot." This is word of wisdom in action — divine guidance in the moment. Philip obeyed without hesitation, and an Ethiopian official came to faith and was baptized.</p>`,
        quiz: [
          {
            question: "How did God speak to Elijah after his victory over the prophets of Baal?",
            options: [
              "In a mighty wind",
              "In an earthquake",
              "In fire",
              "In a still small voice",
            ],
            correct: 3,
            explanation:
              "God spoke to Elijah in a still small voice — teaching us that revelation often comes quietly, not in dramatic displays of power.",
          },
          {
            question: "What enabled Elisha to know the king of Syria's military plans?",
            options: [
              "A network of spies",
              "Natural intelligence gathering",
              "Word of knowledge — supernatural information about the enemy's plans",
              "Prophecy from other prophets",
            ],
            correct: 2,
            explanation:
              "Elisha was operating in word of knowledge — he supernaturally received the king of Syria's military plans, even those spoken in private.",
          },
          {
            question: "What directive did the Holy Spirit give Philip regarding the Ethiopian official?",
            options: [
              "Wait by the road",
              "Go near and join yourself to this chariot",
              "Preach to the crowd",
              "Pray for healing",
            ],
            correct: 1,
            explanation:
              "The Holy Spirit gave Philip specific, moment-by-moment guidance: 'Go near and join yourself to this chariot.' This is word of wisdom as divine direction.",
          },
        ],
      },
      {
        id: "c1-9",
        title: "10 Useful Habits",
        duration: "57 min",
        content: `<h2>10 Useful Habits for Revelation Manifestations</h2>
<p>Walking consistently in revelation manifestations requires developing spiritual habits — disciplines that keep us sensitive, available, and obedient to the Spirit of God.</p>
<h3>The 10 Habits</h3>
<ol>
<li><strong>Pray in the spirit daily.</strong> Speaking in tongues builds your spiritual sensitivity and keeps your spirit attuned to God (1 Corinthians 14:4).</li>
<li><strong>Study the Word consistently.</strong> The more you know God's Word, the more clearly you can recognize when revelation aligns with Scripture.</li>
<li><strong>Cultivate compassion.</strong> Make it a habit to ask: "What does this person need? How can I help?" Compassion creates the atmosphere for revelation.</li>
<li><strong>Practice listening.</strong> Set aside time to be still and listen. Revelation often comes in moments of quiet attentiveness.</li>
<li><strong>Act on small impressions.</strong> Start stepping out in faith on the small things. Faithfulness in small revelation builds capacity for greater things.</li>
<li><strong>Journal your experiences.</strong> Record what you receive and what happens when you act on it. This builds faith and helps you recognize patterns.</li>
<li><strong>Share humbly.</strong> Always offer revelation with humility. "I believe I have something" rather than "Thus says the Lord."</li>
<li><strong>Submit to leadership.</strong> Keep your revelation life under the covering of mature, accountable leadership.</li>
<li><strong>Debrief after ministry.</strong> Review what happened. What worked? What missed the mark? Learn and grow.</li>
<li><strong>Stay in love.</strong> 1 Corinthians 13 reminds us that all gifts must operate from love. Keep love as the motive and the measure.</li>
</ol>`,
        quiz: [
          {
            question: "According to 1 Corinthians 14:4, what does speaking in tongues build?",
            options: [
              "Your natural intelligence",
              "Your spiritual sensitivity (it edifies yourself)",
              "Your reputation in the church",
              "Your understanding of Scripture",
            ],
            correct: 1,
            explanation:
              "1 Corinthians 14:4 says 'he who speaks in a tongue edifies himself' — praying in the spirit builds up your own spirit and keeps you spiritually sensitive.",
          },
          {
            question: "Why is journaling recommended as a habit for revelation?",
            options: [
              "To prove your gifts to others",
              "Because God requires written records",
              "To build faith and recognize patterns over time",
              "To share testimonies on social media",
            ],
            correct: 2,
            explanation:
              "Journaling records what you receive and what happens when you act on it. Over time this builds faith and helps you recognize how revelation comes to you personally.",
          },
          {
            question: "What does 1 Corinthians 13 emphasize as the foundation for all spiritual gifts?",
            options: [
              "Doctrinal accuracy",
              "Church authority",
              "Love",
              "Experience",
            ],
            correct: 2,
            explanation:
              "1 Corinthians 13 is the 'love chapter' placed between the chapters on gifts (12 and 14). All gifts must operate from love — it is the motive and the measure.",
          },
        ],
      },
      {
        id: "c1-10",
        title: "Habits (Continued)",
        duration: "57 min",
        content: `<h2>Habits for Revelation — Continued</h2>
<p>This session deepens our understanding of developing consistent spiritual habits for walking in revelation.</p>
<h3>Developing Sensitivity</h3>
<p>Sensitivity to the Spirit is developed over time through consistent practice. Like a musician developing an ear for pitch, the believer who consistently practices spiritual disciplines develops increasing sensitivity to spiritual impressions.</p>
<h3>The Importance of Community</h3>
<p>We are not designed to operate in isolation. Revelation manifestations flourish in a community of believers who are:</p>
<ul>
<li>Praying together regularly</li>
<li>Accountable to one another</li>
<li>Committed to biblical truth as the standard</li>
<li>Loving and non-competitive</li>
</ul>
<h3>Dealing with Mistakes</h3>
<p>Every person who operates in revelation will sometimes miss the mark. This is not failure — it is the learning process. The important thing is to:</p>
<ul>
<li>Acknowledge mistakes honestly</li>
<li>Learn from them without shame</li>
<li>Continue stepping out in faith</li>
<li>Never use mistakes as an excuse to stop</li>
</ul>
<h3>Building a Revelation Culture</h3>
<p>Healthy churches create space for believers to grow in revelation manifestations by providing training, oversight, and regular opportunities to practice in a safe environment. If your church does not currently have this, you can begin by meeting with a few like-minded believers to pray, study, and practice together.</p>`,
        quiz: [
          {
            question: "How is spiritual sensitivity developed?",
            options: [
              "It is given instantly at salvation",
              "Through consistent practice of spiritual disciplines over time",
              "Only through fasting for extended periods",
              "By attending seminary",
            ],
            correct: 1,
            explanation:
              "Like a musician developing an ear for pitch, spiritual sensitivity develops over time through consistent practice — it is not automatic but cultivated.",
          },
          {
            question: "What should you do when you make a mistake in revelation?",
            options: [
              "Stop operating in gifts entirely",
              "Blame others for misinterpreting your words",
              "Acknowledge it honestly, learn, and continue in faith",
              "Seek only private revelation from now on",
            ],
            correct: 2,
            explanation:
              "Mistakes are part of the learning process. Acknowledge them honestly without shame, learn from them, and continue stepping out in faith.",
          },
          {
            question: "What characterizes a healthy community for revelation manifestations?",
            options: [
              "Competitive spirits who push each other to excel",
              "No accountability or oversight",
              "Mutual prayer, accountability, love, and biblical standards",
              "A single leader who controls all revelation",
            ],
            correct: 2,
            explanation:
              "Revelation flourishes in community that prays together, is accountable to one another, holds the Bible as the standard, and is characterized by love — not competition.",
          },
        ],
      },
      {
        id: "c1-11",
        title: "Samuel and Saul",
        duration: "66 min",
        content: `<h2>Samuel and Saul: Lessons in Revelation and Obedience</h2>
<p>The relationship between Samuel and Saul offers profound lessons about revelation, obedience, and the consequences of rejecting God's voice.</p>
<h3>Samuel: The Prophet Who Heard God</h3>
<p>Samuel is one of Scripture's great examples of a person who walked in consistent revelation. From his youth — "The Lord was with Samuel and let none of his words fall to the ground" (1 Samuel 3:19) — to his mature ministry, Samuel demonstrated what it means to be a reliable conduit for God's revelation.</p>
<h3>The Anointing of Saul (1 Samuel 9-10)</h3>
<p>Before Saul arrived, God gave Samuel a word of knowledge: "Tomorrow about this time I will send you a man from the land of Benjamin" (1 Samuel 9:16). Samuel received specific, verifiable information in advance. When Saul arrived, Samuel moved in response to that revelation with confidence and clarity.</p>
<h3>Saul's Disobedience</h3>
<p>Saul's downfall was his failure to obey clear revelation. When commanded to completely destroy the Amalekites, he compromised — saving livestock and the king. Samuel delivered this devastating message: "Because you have rejected the word of the Lord, he has also rejected you from being king" (1 Samuel 15:23).</p>
<h3>The Lesson</h3>
<p>Revelation is not merely information — it is a call to obedience. Receiving divine communication carries the responsibility of acting on it faithfully. Partial obedience is disobedience.</p>`,
        quiz: [
          {
            question: "What does 1 Samuel 3:19 say about Samuel's prophetic words?",
            options: [
              "They were sometimes wrong",
              "None of his words fell to the ground",
              "Only his words about Israel came true",
              "They required interpretation",
            ],
            correct: 1,
            explanation:
              "1 Samuel 3:19 says 'The Lord was with Samuel and let none of his words fall to the ground' — a testimony to consistent, reliable revelation.",
          },
          {
            question: "What specific word of knowledge did God give Samuel before Saul arrived?",
            options: [
              "That a tall man would come seeking donkeys",
              "That tomorrow about this time He would send a man from Benjamin",
              "That the first man to enter the gate was Israel's king",
              "That a young man would arrive on a white donkey",
            ],
            correct: 1,
            explanation:
              "God told Samuel specifically: 'Tomorrow about this time I will send you a man from the land of Benjamin' — this is precise, verifiable word of knowledge.",
          },
          {
            question: "What was the consequence of Saul's partial obedience?",
            options: [
              "He lost one battle but remained king",
              "He was required to make an additional sacrifice",
              "He was rejected as king because he rejected God's word",
              "His family line was reduced to one son",
            ],
            correct: 2,
            explanation:
              "Samuel declared: 'Because you have rejected the word of the Lord, He has also rejected you from being king.' Partial obedience is disobedience — revelation demands full response.",
          },
        ],
      },
      {
        id: "c1-12",
        title: "Nehemiah",
        duration: "53 min",
        content: `<h2>Nehemiah: Revelation, Prayer, and Leadership</h2>
<p>Nehemiah's story demonstrates how revelation through prayer leads to decisive, faith-filled action. His journey from cupbearer to rebuilder of Jerusalem's walls is a masterclass in spiritual leadership guided by divine wisdom.</p>
<h3>Revelation Through Mourning and Prayer</h3>
<p>When Nehemiah heard of Jerusalem's broken walls, he didn't immediately act. He mourned, fasted, and prayed for days (Nehemiah 1:4). In that extended season of prayer, God was forming a plan and giving Nehemiah revelation about his role in the solution.</p>
<h3>The Moment of Divine Opportunity</h3>
<p>When the king noticed Nehemiah's sadness and asked what he needed, Nehemiah "prayed to the God of heaven" (Nehemiah 2:4) — a split-second arrow prayer — before answering. This is revelation in real time: a moment of spiritual alignment that enabled Nehemiah to speak with confidence and precision.</p>
<h3>Strategic Reconnaissance (Nehemiah 2:11-16)</h3>
<p>Before sharing his plan with others, Nehemiah surveyed the walls at night. He combined divine revelation with practical investigation — a model for Spirit-led leadership that is both spiritually informed and practically wise.</p>
<h3>Overcoming Opposition</h3>
<p>Throughout the rebuilding, Nehemiah faced mockery, threats, and internal discouragement. His consistent response was prayer — turning to God for revelation about how to respond. The discerning of spirits operated as he identified genuine threats from false alarms.</p>`,
        quiz: [
          {
            question: "How long did Nehemiah mourn and pray before taking action?",
            options: [
              "One day",
              "Three days",
              "Several days (multiple days of fasting and prayer)",
              "A full month",
            ],
            correct: 2,
            explanation:
              "Nehemiah 1:4 says he 'sat down and wept, and mourned for some days' — an extended season of prayer where God was forming the plan and Nehemiah's heart.",
          },
          {
            question: "What did Nehemiah do in the split second before answering the king's question?",
            options: [
              "He quoted Scripture aloud",
              "He prayed silently to God",
              "He consulted his notes",
              "He asked for more time to think",
            ],
            correct: 1,
            explanation:
              "Nehemiah 2:4 says he 'prayed to the God of heaven' before answering the king — a real-time arrow prayer that connected him to divine wisdom in the moment.",
          },
          {
            question: "What does Nehemiah's night survey of the walls demonstrate about Spirit-led leadership?",
            options: [
              "That secrecy is always essential",
              "That prayer replaces the need for investigation",
              "That spiritual revelation should be combined with practical investigation",
              "That leaders should act alone without consulting others",
            ],
            correct: 2,
            explanation:
              "Nehemiah combined divine revelation with practical investigation — a model showing that Spirit-led leadership is both spiritually informed and practically wise.",
          },
        ],
      },
      {
        id: "c1-13",
        title: "The Two Kingdoms",
        duration: "45 min",
        content: `<h2>The Two Kingdoms</h2>
<p>Understanding the reality of two spiritual kingdoms — God's kingdom of light and the adversary's kingdom of darkness — is essential for operating effectively in revelation manifestations.</p>
<h3>The Kingdom of Light (Colossians 1:13)</h3>
<p>"He has delivered us from the domain of darkness and transferred us to the kingdom of his beloved Son." Every born-again believer has been relocated — spiritually — from one kingdom to another. This is foundational to understanding revelation manifestations.</p>
<h3>The Kingdom of Darkness</h3>
<p>The adversary operates a counterfeit spiritual system designed to deceive, oppress, and destroy. This is why discerning of spirits is so vital — not every spiritual manifestation is from God. We must be able to distinguish light from darkness.</p>
<h3>Our Authority</h3>
<p>Believers do not engage the enemy as equals fighting a close battle — we operate from a position of victory. Colossians 2:15 states that Christ "disarmed the rulers and authorities and put them to open shame, by triumphing over them in him." Revelation manifestations are instruments of enforcing that victory.</p>
<h3>Practical Implications</h3>
<ul>
<li>When discerning of spirits reveals darkness, the response is not fear but authority</li>
<li>Word of knowledge can expose the enemy's tactics before they succeed</li>
<li>Word of wisdom gives strategy for overcoming in specific situations</li>
<li>All three revelation manifestations together give comprehensive spiritual intelligence</li>
</ul>`,
        quiz: [
          {
            question: "According to Colossians 1:13, what has God done for believers regarding the two kingdoms?",
            options: [
              "Given us equal footing with both kingdoms",
              "Delivered us from darkness and transferred us to Christ's kingdom",
              "Warned us to avoid the kingdom of darkness",
              "Promised future transfer at the resurrection",
            ],
            correct: 1,
            explanation:
              "Colossians 1:13 says God 'has delivered us from the domain of darkness and transferred us to the kingdom of his beloved Son' — past tense, already accomplished.",
          },
          {
            question: "Why is discerning of spirits especially vital in the context of two kingdoms?",
            options: [
              "Because all spiritual experiences are valid",
              "Because not every spiritual manifestation is from God — we must distinguish light from darkness",
              "Because Christians can lose their salvation through deception",
              "Because demons are more powerful than angels",
            ],
            correct: 1,
            explanation:
              "The adversary operates a counterfeit spiritual system. Discerning of spirits allows us to distinguish God's genuine manifestations from counterfeits — protecting the church from deception.",
          },
          {
            question: "According to Colossians 2:15, from what position do believers engage spiritual darkness?",
            options: [
              "A position of ongoing warfare with uncertain outcome",
              "A position of victory — Christ has already disarmed and triumphed over darkness",
              "A position of defensive protection only",
              "A position that varies based on the believer's spiritual maturity",
            ],
            correct: 1,
            explanation:
              "Colossians 2:15 says Christ 'disarmed the rulers and authorities and put them to open shame, by triumphing over them.' Believers enforce an already-won victory.",
          },
        ],
      },
      {
        id: "c1-14",
        title: "Two Kingdoms (Continued)",
        duration: "57 min",
        content: `<h2>Two Kingdoms — Continued</h2>
<p>This session deepens our understanding of operating in revelation manifestations within the context of spiritual warfare.</p>
<h3>Walking in Kingdom Authority</h3>
<p>Luke 10:19 records Jesus' words: "I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you." This authority is delegated to every believer — not earned but received as part of our inheritance in Christ.</p>
<h3>The Armor of God (Ephesians 6)</h3>
<p>The whole armor of God is designed for standing firm. Notice that revelation is embedded in the armor:</p>
<ul>
<li>The belt of truth — knowing what is true vs. deceptive</li>
<li>The shield of faith — responding to revelation with trust</li>
<li>The sword of the Spirit — the Word of God, which often comes through revelation</li>
</ul>
<h3>Maintaining Kingdom Perspective</h3>
<p>The temptation in spiritual warfare is to become focused on the enemy rather than on Christ. Revelation manifestations are not primarily given to expose the enemy — they are given to advance the kingdom of light, to bring healing, freedom, and the knowledge of God to people.</p>
<h3>Prayer Strategies</h3>
<p>Revelation manifestations often come in the context of strategic prayer. As we intercede for people, places, and situations, God grants us insight into what is happening spiritually and how to pray effectively. This is the ultimate use of the "eyes and ears of the church."</p>`,
        quiz: [
          {
            question: "What does Luke 10:19 say about the authority given to believers?",
            options: [
              "Authority over natural disasters only",
              "Authority over all the power of the enemy, with nothing able to harm them",
              "Authority that must be earned through spiritual maturity",
              "Authority limited to preaching and teaching",
            ],
            correct: 1,
            explanation:
              "Luke 10:19: 'I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you.' This is comprehensive, delegated authority.",
          },
          {
            question: "What is the primary purpose of revelation manifestations in spiritual warfare?",
            options: [
              "To expose and condemn the enemy",
              "To demonstrate believers' spiritual power",
              "To advance the kingdom of light — bringing healing, freedom, and knowledge of God",
              "To protect believers from all suffering",
            ],
            correct: 2,
            explanation:
              "Revelation manifestations are given primarily to advance God's kingdom — to bring healing, freedom, and knowledge of God to people. The focus is on Christ, not the enemy.",
          },
          {
            question: "Which element of the Armor of God involves knowing truth from deception?",
            options: [
              "The breastplate of righteousness",
              "The belt of truth",
              "The helmet of salvation",
              "The shoes of the gospel",
            ],
            correct: 1,
            explanation:
              "The belt of truth holds the armor together and represents knowing what is true versus deceptive — directly connected to the operation of revelation manifestations.",
          },
        ],
      },
      {
        id: "c1-15",
        title: "The Man from the Gerasenes",
        duration: "57 min",
        content: `<h2>The Man from the Country of the Gerasenes</h2>
<p>Mark 5:1-20 records one of the most dramatic deliverance encounters in the Gospels — the healing of the demonized man who lived among the tombs. This account is a masterclass in all three revelation manifestations working together.</p>
<h3>The Encounter</h3>
<p>When Jesus crossed the Sea of Galilee, a man possessed by many demons ran to meet him. Notice that Jesus did not fear this man — He moved toward him with authority. This is the posture of someone who knows their kingdom identity.</p>
<h3>Discerning of Spirits in Action</h3>
<p>Jesus immediately perceived the spiritual reality of the situation. He commanded the unclean spirit to come out. When the spirits identified themselves as "Legion," Jesus had full spiritual intelligence about the scope of the oppression.</p>
<h3>Word of Knowledge and Wisdom</h3>
<p>Jesus knew exactly what needed to happen and how to proceed. He granted the spirits' request to go into the pigs — a strategic move that accomplished full deliverance for the man. This is word of wisdom: divine strategy in the moment.</p>
<h3>The Aftermath</h3>
<p>The man was found "clothed and in his right mind" — fully restored. He became one of the first missionaries to the Gentile region of Decapolis, telling everyone what Jesus had done for him. One encounter with revelation manifestations, properly operated, can transform a life and ignite a revival.</p>`,
        quiz: [
          {
            question: "What does Jesus' approach toward the demonized man demonstrate?",
            options: [
              "That only trained exorcists should engage with spiritual darkness",
              "That caution and retreat are the best approach to darkness",
              "That kingdom authority produces confidence, not fear, when approaching darkness",
              "That prayer and fasting must precede all deliverance",
            ],
            correct: 2,
            explanation:
              "Jesus moved toward the man without fear — demonstrating that kingdom identity and authority produce confidence, not terror, when engaging spiritual darkness.",
          },
          {
            question: "What was the man's condition after his deliverance?",
            options: [
              "He was still disturbed but manageable",
              "Clothed and in his right mind — fully restored",
              "Healed physically but still mentally affected",
              "Delivered but needing months of recovery",
            ],
            correct: 1,
            explanation:
              "Mark 5:15 says the man was found 'clothed and in his right mind' — complete, immediate restoration. God's deliverance is thorough.",
          },
          {
            question: "What role did the man from the Gerasenes take on after his deliverance?",
            options: [
              "He joined the twelve disciples",
              "He became one of Jesus' closest followers",
              "He became an early missionary to the Decapolis region",
              "He returned to a quiet life in his community",
            ],
            correct: 2,
            explanation:
              "Jesus told the man to go home and tell what God had done. He became a missionary to the Decapolis, telling everyone — demonstrating that transformed lives are the greatest testimony.",
          },
        ],
      },
      {
        id: "c1-16",
        title: "Balaam and Balak",
        duration: "61 min",
        content: `<h2>Balaam and Balak: When Revelation Meets Compromise</h2>
<p>Numbers 22-24 tells the story of Balaam — a man who had genuine prophetic ability but allowed his gifts to be corrupted by the love of money and the desire for human approval.</p>
<h3>The Setup</h3>
<p>Balak, king of Moab, hired Balaam to curse Israel. God initially told Balaam not to go. But after Balak sent more prestigious messengers with promises of great reward, Balaam went anyway — seeking a different answer from God.</p>
<h3>The Talking Donkey</h3>
<p>The famous episode of the speaking donkey reveals something profound: Balaam's spiritual sensitivity was so compromised by his covetousness that his donkey saw the angel of the Lord before he did. The servant discerned what the master missed.</p>
<h3>God's Sovereignty Over Revelation</h3>
<p>God so sovereignly controlled Balaam's mouth that every time he opened his mouth to curse Israel, blessings came out instead. God can protect His purposes even when flawed messengers try to corrupt them.</p>
<h3>The Warning</h3>
<p>2 Peter 2:15 and Jude 11 reference "the way of Balaam" as a warning — using spiritual gifts for financial gain and personal advancement. This corrupts the gift and destroys the vessel. Revelation manifestations must flow from love and purity, not from covetousness.</p>`,
        quiz: [
          {
            question: "What compromised Balaam's spiritual sensitivity?",
            options: [
              "Lack of biblical training",
              "Covetousness — the love of money and desire for reward",
              "Being from a non-Israelite background",
              "Not fasting before prophesying",
            ],
            correct: 1,
            explanation:
              "Balaam's covetousness — seeking financial reward and human honor — so compromised his sensitivity that his donkey perceived the angel before he did. Love of money corrupts revelation gifts.",
          },
          {
            question: "What happened when Balaam tried to curse Israel?",
            options: [
              "His curses had partial effect",
              "God struck him dumb so he could not speak",
              "Blessings came out of his mouth instead of curses",
              "He refused and returned home without speaking",
            ],
            correct: 2,
            explanation:
              "God so controlled Balaam's mouth that every attempt to curse Israel produced blessings instead — demonstrating God's sovereignty over revelation and His protection of His purposes.",
          },
          {
            question: "What is 'the way of Balaam' as referenced in 2 Peter and Jude?",
            options: [
              "The path of genuine prophetic ministry",
              "Using spiritual gifts for financial gain and personal advancement",
              "Refusing to prophesy under pressure",
              "Seeking multiple confirmations before speaking",
            ],
            correct: 1,
            explanation:
              "2 Peter 2:15 and Jude 11 use 'the way of Balaam' as a warning against using spiritual gifts for financial gain and personal advancement — a corruption that destroys both the gift and the person.",
          },
        ],
      },
      {
        id: "c1-17",
        title: "Does God Change His Mind?",
        duration: "26 min",
        content: `<h2>Does God Change His Mind?</h2>
<p>This session addresses a question that often arises when studying revelation manifestations: if God gives a revelation, can it change? And does God respond differently based on our prayers and choices?</p>
<h3>The Nature of God's Revelation</h3>
<p>Numbers 23:19 states: "God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?" God's character is unchanging — His Word is absolutely reliable.</p>
<h3>Conditional Prophecy</h3>
<p>However, some prophetic revelation is conditional — it calls for a human response. Jonah 3 is the clearest example: Jonah proclaimed that Nineveh would be destroyed in 40 days. The people repented, and God relented from the disaster. Was God inconsistent? No — the purpose of the warning was to produce repentance.</p>
<h3>Hezekiah's Additional Years (Isaiah 38)</h3>
<p>Isaiah told Hezekiah he would die. Hezekiah prayed, and God gave him 15 more years. This was not God contradicting Himself — prayer is part of the system God designed. He invites us to participate in what He is doing through intercession.</p>
<h3>The Principle</h3>
<p>Revelation from God is always perfect — it always achieves its purpose. Sometimes that purpose is warning (to prevent the outcome). Sometimes it is declaration (to guarantee the outcome). Wisdom discerns which is which, and prayer is always the appropriate response.</p>`,
        quiz: [
          {
            question: "What does Numbers 23:19 affirm about God?",
            options: [
              "God changes His mind based on human prayer",
              "God is not a man — He does not lie or change His mind",
              "God's plans are unknown until they unfold",
              "God responds differently to different people",
            ],
            correct: 1,
            explanation:
              "Numbers 23:19: 'God is not man, that he should lie, or a son of man, that he should change his mind.' God's character and commitments are absolutely reliable.",
          },
          {
            question: "Why did God relent from destroying Nineveh after Jonah's prophecy?",
            options: [
              "Because Jonah's prophecy was wrong",
              "Because God decided to be more merciful than He originally planned",
              "Because the people repented — the warning's conditional purpose was fulfilled",
              "Because 40 days had not yet passed",
            ],
            correct: 2,
            explanation:
              "The warning to Nineveh was conditional — its purpose was to produce repentance. When the people repented, God's goal was achieved. The prophecy worked exactly as intended.",
          },
          {
            question: "What does Hezekiah's additional 15 years demonstrate about prayer and revelation?",
            options: [
              "That God makes mistakes that prayer can correct",
              "That prayer is part of the system God designed — He invites us to participate through intercession",
              "That strong enough faith always overrides God's declared purposes",
              "That prophets are not always reliable",
            ],
            correct: 1,
            explanation:
              "Hezekiah's story shows that prayer is part of God's design — He invites human participation through intercession. This is not God being inconsistent; it is how He designed the relationship to work.",
          },
        ],
      },
      {
        id: "c1-18",
        title: "Equipped by God",
        duration: "59 min",
        content: `<h2>Equipped by God — Course Conclusion</h2>
<p>As we conclude this course, we return to its central premise: God has equipped every believer to operate in revelation manifestations. You are not disqualified by your past, your education, or your feelings of inadequacy — you are equipped by God's Spirit within you.</p>
<h3>2 Timothy 3:16-17</h3>
<blockquote>"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work."</blockquote>
<p>The Word equips. Revelation manifestations are the practical outworking of that equipped life — the Word made alive and active through the Spirit.</p>
<h3>2 Corinthians 3:5-6</h3>
<blockquote>"Not that we are sufficient in ourselves to claim anything as coming from us, but our sufficiency is from God, who has made us sufficient to be ministers of a new covenant."</blockquote>
<p>Your sufficiency is not in yourself — it is in God. This is both humbling and liberating. You don't have to manufacture spiritual power; you participate in the power God provides.</p>
<h3>Your Next Steps</h3>
<ol>
<li>Apply the 10 habits consistently</li>
<li>Begin stepping out in your local community</li>
<li>Find accountability partners who share this commitment</li>
<li>Continue your study — consider the next course in this series</li>
<li>Keep love as your central motivation</li>
</ol>
<p>The revelation manifestations are not achievements to be displayed — they are tools of service. Use them to love God's people well, and you will never regret it.</p>`,
        quiz: [
          {
            question: "According to 2 Corinthians 3:5-6, where does a believer's sufficiency for ministry come from?",
            options: [
              "From personal training and education",
              "From years of ministry experience",
              "From God — our sufficiency is from Him",
              "From the church's ordination and recognition",
            ],
            correct: 2,
            explanation:
              "'Our sufficiency is from God, who has made us sufficient' — the ability to minister in revelation comes from God, not from ourselves. This is both humbling and liberating.",
          },
          {
            question: "What is the central motivation for using revelation manifestations?",
            options: [
              "To demonstrate spiritual maturity to others",
              "To build a public ministry",
              "Love — to serve God's people and advance His kingdom",
              "To fulfill spiritual discipline requirements",
            ],
            correct: 2,
            explanation:
              "The course concludes with this reminder: 'The revelation manifestations are not achievements to be displayed — they are tools of service.' Love is the central motivation.",
          },
          {
            question: "Which course comes next in this series after 'Led by God's Power'?",
            options: [
              "Living in God's Power",
              "Growing in God's Power",
              "Administering God's Power",
              "Walking in God's Power",
            ],
            correct: 2,
            explanation:
              "'Administering God's Power' is the fourth and final course in the series, covering impartation, faith, miracles, and gifts of healings.",
          },
        ],
      },
    ],
  },
  {
    id: "course-2",
    slug: "growing-in-gods-power",
    order: 2,
    titleFr: "Grandir dans la Puissance de Dieu",
    subtitleFr: "Le Corps de Christ et les manifestations d'adoration",
    descriptionFr: "Un cours intermédiaire sur le Corps de Christ, la part du croyant en lui, et les manifestations d'adoration du Saint-Esprit.",
    title: "Growing in God's Power",
    subtitle: "The Body of Christ and worship manifestations",
    description:
      "An intermediate course on the Body of Christ, the Christian believer's part in it, and the worship manifestations of holy spirit.",
    longDescription:
      "This intermediate course takes believers deeper into the Body of Christ. You will learn about your specific role in the Body, and be equipped to operate in the worship manifestations: prophecy and interpretation of tongues.",
    color: "#1a1a18",
    icon: "users",
    chapters: [
      { id: "c2-1", title: "Introduction & Qualifications", duration: "45 min", content: `<h2>Introduction and Qualifications for This Course</h2><p>This course is designed for believers who are at an intermediate level in their spiritual growth. You have received foundational teachings, have begun to grow in God's Word, and are ready to go deeper.</p><h3>Colossians 1:3-12</h3><p>Paul's prayer for the Colossians describes the posture of a growing believer: bearing fruit, increasing in the knowledge of God, strengthened with all power, and giving thanks. This is the spirit in which we approach this course.</p><h3>Where We Are Coming From</h3><p>You have already learned: the trustworthiness of the Word, how to believe God and receive His promises, what it means to be born again, how to claim what comes with new birth, and how to speak in tongues. Now we go deeper — learning how to apply these truths more practically in the Body of Christ.</p><h3>The Great Mystery</h3><p>The central theme of this course is the Great Mystery of Colossians 1:27: "Christ in you, the hope of glory." Understanding what it means to have Christ IN you, and what that makes available to you and through you, is the foundation for everything that follows.</p>`, quiz: [{ question: "What is the 'Great Mystery' referenced in Colossians 1:27?", options: ["The mystery of salvation", "Christ in you, the hope of glory", "The mystery of the church's future", "The hidden wisdom of God"], correct: 1, explanation: "Colossians 1:27 reveals 'Christ in you, the hope of glory' as the great mystery — the indwelling presence of Christ is the foundation of everything in this course." }, { question: "This course is designed for believers at what level?", options: ["Brand new believers", "Mature ministers only", "Intermediate level — those who have received foundational teachings", "Seminary students"], correct: 2, explanation: "This intermediate course builds on foundational teachings. Students should already be grounded in basic Biblical truths before taking this course." }, { question: "Which of the following is a prerequisite knowledge for this course?", options: ["Understanding church history", "Speaking in tongues", "Knowledge of Hebrew and Greek", "Pastoral ministry experience"], correct: 1, explanation: "Speaking in tongues is listed as one of the prerequisites — students have already applied foundational truths and experienced this manifestation." }] },
      { id: "c2-2", title: "The Body of Christ — Who Are We?", duration: "50 min", content: `<h2>The Body of Christ — Who Are We?</h2><p>1 Corinthians 12 introduces the metaphor of the church as a body. This is not merely a poetic image — it is a precise spiritual reality with practical implications for how we function together.</p><h3>One Body, Many Members</h3><p>Just as a physical body has many different parts — each with a specific function — the Body of Christ is composed of many believers, each with a specific role and set of abilities. No member is more important than another; all are necessary.</p><h3>Your Place in the Body</h3><p>Every believer has a specific place in the Body of Christ. This place is not self-assigned — it is given by God. Discovering and embracing your function in the Body is one of the most important journeys of spiritual growth.</p><h3>The Implications</h3><ul><li>You are needed — the Body is incomplete without your participation</li><li>Your gifts benefit others, not just yourself</li><li>Isolation from the Body diminishes your effectiveness</li><li>Humility is required — no single member can meet every need</li></ul>`, quiz: [{ question: "In 1 Corinthians 12, what does Paul use as a metaphor for the church?", options: ["A building with many rooms", "An army with different ranks", "A body with many members", "A family with many children"], correct: 2, explanation: "Paul uses the human body with its many interdependent members as the metaphor for the church — a precise spiritual reality, not just poetic imagery." }, { question: "Who assigns each believer their specific place and function in the Body of Christ?", options: ["Church leadership", "The believer themselves", "God", "Spiritual elders"], correct: 2, explanation: "Your place in the Body is not self-assigned — it is given by God. Discovering it requires prayer, community, and time." }, { question: "What happens when a believer isolates themselves from the Body of Christ?", options: ["Their personal faith grows stronger", "Their effectiveness is diminished", "They receive more direct revelation", "Nothing significant changes"], correct: 1, explanation: "Isolation from the Body diminishes effectiveness. We are designed for interdependence — the gifts God placed in us are meant to benefit others, and we need what others carry too." }] },
      { id: "c2-3", title: "The Worship Manifestations", duration: "52 min", content: `<h2>The Worship Manifestations</h2><p>Among the nine manifestations of holy spirit, three are specifically called worship manifestations:</p><ul><li><strong>Speaking in tongues</strong> — the believer speaks to God in a language given by the Spirit</li><li><strong>Interpretation of tongues</strong> — the supernatural rendering in the known language of a message spoken in tongues</li><li><strong>Prophecy</strong> — speaking forth a message from God in the known language</li></ul><h3>Why "Worship" Manifestations?</h3><p>These manifestations are expressions of the spirit within us reaching toward God and being expressed through us to edify the Body. They are acts of worship — the spirit within responding to the Spirit of God.</p><h3>1 Corinthians 14</h3><p>Paul's entire chapter 14 is dedicated to ordering and understanding these three manifestations in the assembly. The goal is always edification — the building up of the Body.</p><h3>The Priority of Prophecy</h3><p>Paul says "I would rather you prophesy" (1 Cor 14:5) because prophecy directly edifies the assembly without requiring interpretation. This does not mean tongues is inferior — Paul prays in tongues more than all (1 Cor 14:18).</p>`, quiz: [{ question: "Which three manifestations are called 'worship manifestations'?", options: ["Word of knowledge, word of wisdom, discerning of spirits", "Faith, miracles, gifts of healings", "Tongues, interpretation of tongues, prophecy", "Apostle, prophet, teacher"], correct: 2, explanation: "The worship manifestations are speaking in tongues, interpretation of tongues, and prophecy — they express the spirit within us toward God and edify the Body." }, { question: "What is the overarching purpose of the worship manifestations in 1 Corinthians 14?", options: ["To demonstrate spiritual gifts", "To edify the Body — building it up", "To authenticate the speaker's ministry", "To convert unbelievers"], correct: 1, explanation: "Paul's entire focus in 1 Corinthians 14 is on edification — the building up of the Body. Every use of the manifestations should serve this purpose." }, { question: "Why does Paul say he would rather believers prophesy than speak in tongues in the assembly?", options: ["Because tongues is a lesser gift", "Because prophecy directly edifies the assembly without requiring interpretation", "Because tongues is only for private prayer", "Because prophecy is more spiritually mature"], correct: 1, explanation: "Prophecy edifies the assembly directly in the known language. Tongues in the assembly requires interpretation to edify others. The goal is always the edification of everyone present." }] },
      { id: "c2-4", title: "Prophecy — Understanding and Practice", duration: "55 min", content: `<h2>Prophecy — Understanding and Practice</h2><p>Prophecy is one of the most misunderstood and misapplied gifts in the church today. This session provides clear Biblical grounding for what prophecy is, what it is not, and how it should be practiced.</p><h3>What Prophecy Is</h3><p>1 Corinthians 14:3 defines the purpose of prophecy clearly: "The one who prophesies speaks to people for their upbuilding and encouragement and consolation." Prophecy edifies, exhorts, and comforts. It is always positive in its ultimate effect — even when it contains correction.</p><h3>What Prophecy Is Not</h3><ul><li>It is not foretelling the future (that is word of wisdom)</li><li>It is not a revelation of secret sins (that is word of knowledge)</li><li>It is not an instruction for major life decisions — that requires multiple confirmations</li><li>It is never manipulative, controlling, or shaming</li></ul><h3>Practical Protocol</h3><p>When you believe you have a prophetic word:<ol><li>Pray in the spirit and confirm the impression</li><li>Write it down to ensure clarity</li><li>Share it humbly with appropriate leadership present</li><li>Allow it to be weighed (1 Corinthians 14:29)</li><li>Receive feedback with grace</li></ol></p>`, quiz: [{ question: "According to 1 Corinthians 14:3, what are the three purposes of prophecy?", options: ["Healing, deliverance, salvation", "Upbuilding, encouragement, and consolation", "Teaching, rebuking, correcting", "Revelation, wisdom, knowledge"], correct: 1, explanation: "1 Corinthians 14:3 says prophecy speaks for 'upbuilding and encouragement and consolation' — always serving these constructive, loving purposes." }, { question: "Which manifestation involves foretelling future events?", options: ["Prophecy", "Word of Knowledge", "Word of Wisdom", "Discerning of Spirits"], correct: 2, explanation: "Foretelling the future is specifically the word of wisdom, not prophecy. New Testament prophecy primarily speaks to present edification, exhortation, and comfort." }, { question: "What should happen to prophetic words before they are fully accepted?", options: ["They should be immediately acted upon", "They should be kept private until completely fulfilled", "They should be weighed by the Body (1 Corinthians 14:29)", "They should only be given to the senior pastor"], correct: 2, explanation: "1 Corinthians 14:29 says 'let the others weigh what is said.' Prophetic words are to be tested and weighed by the Body — no single person's word is beyond accountability." }] },
      { id: "c2-5", title: "Interpretation of Tongues", duration: "48 min", content: `<h2>Interpretation of Tongues</h2><p>Interpretation of tongues is the supernatural rendering into the known language of a message spoken in tongues. Together, tongues and interpretation are equivalent to prophecy in their edifying effect (1 Corinthians 14:5).</p><h3>How It Works</h3><p>When someone speaks in tongues in the assembly, God provides through another believer (or sometimes the same person) the ability to render that message into the understood language of those present. This is not translation — it is supernatural interpretation.</p><h3>Key Principles</h3><ul><li><strong>God provides the interpretation.</strong> You do not figure it out logically — it comes as revelation.</li><li><strong>Begin to speak.</strong> Like tongues itself, interpretation often requires the step of faith — beginning to speak in response to an inner impression before you have the full message.</li><li><strong>The length may differ.</strong> A long message in tongues may have a short interpretation, and vice versa — God communicates the meaning, not a word-for-word translation.</li></ul><h3>Paul's Instruction (1 Corinthians 14:13)</h3><p>"Therefore, one who speaks in a tongue should pray that he may interpret." Believers who regularly speak in tongues are encouraged to also pray for the gift of interpretation, so that messages in tongues can be of benefit to the whole assembly.</p>`, quiz: [{ question: "What is the supernatural ability to render a tongues message into the known language called?", options: ["Translation", "Interpretation of tongues", "Prophecy", "Word of knowledge"], correct: 1, explanation: "Interpretation of tongues is the supernatural rendering of a tongues message into the known language — it is not natural translation but a manifestation of holy spirit." }, { question: "According to 1 Corinthians 14:5, what is the combined effect of tongues plus interpretation?", options: ["Greater than prophecy", "Equivalent to prophecy in edifying the assembly", "Less effective than prophecy", "Only effective for individual edification"], correct: 1, explanation: "1 Corinthians 14:5 says that one who prophesies is greater than one who speaks in tongues 'unless someone interprets, so that the church may be built up' — tongues plus interpretation equals prophecy in effect." }, { question: "What step of faith does interpretation often require?", options: ["Three days of fasting first", "A vision confirming the interpretation", "Beginning to speak before you have the complete message", "Waiting for complete silence in the room"], correct: 2, explanation: "Like tongues, interpretation often requires beginning to speak in response to an inner impression — before you have the full message. God provides the rest as you step out in faith." }] },
      { id: "c2-6", title: "Functioning in the Body", duration: "60 min", content: `<h2>Functioning Effectively in the Body of Christ</h2><p>Understanding the Body of Christ intellectually is only the beginning. This session addresses the practical question: how do we actually function well together as members of Christ's Body?</p><h3>Finding Your Function</h3><p>Your function in the Body is discovered through:<ul><li>Prayer and time in God's Word</li><li>Serving in various capacities and noticing where you bear fruit</li><li>Receiving input from mature believers who observe your life</li><li>Paying attention to the desires God places in your heart (Psalm 37:4)</li></ul></p><h3>The Principle of Complementarity</h3><p>Members of the Body are designed to complement, not compete with one another. When you understand your function, you can celebrate others' different functions without jealousy or comparison. The eye doesn't wish it were a hand — each part rejoices in what it is designed to do.</p><h3>Developing Your Function</h3><p>Natural gifts and spiritual gifts both require development. A person with musical ability still needs to practice. A person with a spiritual gift still needs to cultivate it through use, study, and accountability. Don't wait until your gift is "perfect" to begin using it — develop it through use.</p>`, quiz: [{ question: "According to Psalm 37:4, how does God guide believers toward their function in the Body?", options: ["Through audible voices and visions only", "Through church leadership exclusively", "By placing specific desires in their hearts", "Through elimination of all other options"], correct: 2, explanation: "Psalm 37:4 says 'Delight yourself in the Lord, and he will give you the desires of your heart.' As we grow in God, He places the desires that align with our function within us." }, { question: "How are members of the Body designed to relate to one another?", options: ["Competitively — the strongest serve the whole", "In a hierarchy with some members more important", "Complementarily — different functions that together form a complete whole", "Identically — all doing the same things"], correct: 2, explanation: "Members are designed to complement, not compete. Like parts of a physical body, different functions work together to accomplish what no single member could alone." }, { question: "When should believers begin using their spiritual gifts?", options: ["Only after theological training", "Only after ordination", "During development, not waiting until the gift is 'perfect'", "Only in private, never in the assembly"], correct: 2, explanation: "Gifts develop through use. Don't wait for perfection — begin using what God has given you, and it will develop through practice, feedback, and accountability." }] },
      { id: "c2-7", title: "Love — The Greatest Context", duration: "45 min", content: `<h2>Love — The Greatest Context for All Manifestations</h2><p>1 Corinthians 13 stands between the two great chapters on gifts (12 and 14) for a reason. Love is not a separate topic from spiritual gifts — it is the context without which gifts are meaningless.</p><h3>1 Corinthians 13:1-3</h3><p>Paul lists the most impressive spiritual abilities imaginable — speaking in all tongues, prophetic knowledge, mountain-moving faith, sacrificial generosity — and declares that without love, all of it amounts to nothing. The gifts without love are noise and emptiness.</p><h3>What Love Looks Like</h3><p>Verses 4-7 describe love not as a feeling but as a set of behaviors: patient, kind, not envious, not boastful, not arrogant, not rude, not self-seeking, not irritable, not resentful, not rejoicing in wrongdoing, but rejoicing in truth — bearing, believing, hoping, enduring all things.</p><h3>Love Never Fails</h3><p>Verse 8: "Love never fails. As for prophecies, they will pass away; as for tongues, they will cease; as for knowledge, it will pass away." Spiritual manifestations are tools for this age. Love is eternal. When this age ends, love remains. This gives us our hierarchy of values — love above all manifestations.</p>`, quiz: [{ question: "Why is 1 Corinthians 13 placed between chapters 12 and 14 (which are both about spiritual gifts)?", options: ["As a digression from the main topic", "Because love is the context without which gifts are meaningless", "To show that love and gifts are unrelated", "Because it was written at a different time and inserted later"], correct: 1, explanation: "The placement is intentional — love is not separate from spiritual gifts but the essential context for them. Without love, even the most impressive gifts amount to nothing." }, { question: "According to 1 Corinthians 13:8, what ultimately distinguishes love from spiritual manifestations?", options: ["Love is more powerful in spiritual warfare", "Love never fails and is eternal; manifestations are for this age", "Love is available to everyone while gifts are selective", "Love can be developed while gifts are given"], correct: 1, explanation: "'Love never fails.' Prophecies will pass away, tongues will cease, knowledge will pass away — but love is eternal. This establishes love as the highest value above all manifestations." }, { question: "How does 1 Corinthians 13:4-7 define love?", options: ["As a strong emotional feeling toward God and others", "As a set of observable behaviors — patient, kind, not envious, etc.", "As prioritizing spiritual gifts above personal needs", "As agreeing with other believers on all matters"], correct: 1, explanation: "1 Corinthians 13:4-7 defines love through a list of behaviors — not feelings. Love is patient, kind, not envious, not boastful, etc. It is active and observable, not merely emotional." }] },
      { id: "c2-8", title: "Practical Sessions for Manifestations", duration: "55 min", content: `<h2>Practical Sessions for Manifestations</h2><p>This session provides practical guidance for creating and participating in environments where worship manifestations can be exercised safely and effectively.</p><h3>Principles for Participatory Sessions</h3><ol><li><strong>Free will — we exercise and He energizes.</strong> God does not override our will — we choose to step out, and He provides the ability.</li><li><strong>Love is the motivation.</strong> We practice these manifestations because we love God and others, not to demonstrate spiritual status.</li><li><strong>God is faithful.</strong> When you are ready to speak in tongues or give an interpretation, you will always have the first word. Speak it, and God provides the rest.</li><li><strong>We are a family.</strong> Everyone in the room is supporting you in prayer as you step out. There is no condemnation for sincere efforts.</li><li><strong>Speak rapidly.</strong> Don't overthink or pause excessively. The Spirit flows as we yield.</li><li><strong>Keep it measured.</strong> Don't go on for extended periods on your first attempts — build confidence gradually.</li><li><strong>The message will be complete.</strong> Interpretation and prophecy will always be a complete thought — trust that God will complete what He began through you.</li></ol>`, quiz: [{ question: "In a practice session for worship manifestations, who provides the spiritual ability?", options: ["The group leader", "The most experienced believer present", "God — we exercise and He energizes", "The person's own spiritual maturity"], correct: 2, explanation: "The principle is 'we exercise and He energizes' — believers make the choice to step out, and God provides the ability. It is a partnership, not a solo performance." }, { question: "What does 'God is faithful' mean practically when giving an interpretation or prophecy?", options: ["You will always feel ready before speaking", "When you are ready to speak, the first word will always be there — speak it and God provides the rest", "God will always confirm your word with a sign", "You will never make a mistake if your heart is right"], correct: 1, explanation: "Faithfulness means that when you take the step of faith to speak, God guarantees the first word will be available. You speak it, and He provides what follows — it is a cooperative act of faith." }, { question: "Why are believers encouraged to keep messages brief on their first attempts?", options: ["Because the Spirit only operates briefly", "To allow more people to participate", "To build confidence gradually rather than overwhelming themselves", "Because long messages are less spiritual"], correct: 2, explanation: "First attempts should be kept measured to build confidence gradually. As you grow in experience and trust, the length and complexity of messages will naturally develop." }] },
      { id: "c2-9", title: "The Body of Christ — Depth Study", duration: "58 min", content: `<h2>The Body of Christ — A Depth Study</h2><p>This session goes deeper into the theological and practical dimensions of the Body of Christ, drawing from Ephesians 4 and Colossians 1.</p><h3>Ephesians 4:11-16 — The Equipping Ministries</h3><p>God gave the church apostles, prophets, evangelists, pastors, and teachers — not to do all the ministry themselves, but to equip every member for ministry. The goal: "the body builds itself up in love" (Eph 4:16). Every believer is a minister.</p><h3>The Head and the Body</h3><p>Colossians 1:18 identifies Christ as "the head of the body, the church." The head directs; the body responds. Revelation manifestations are one of the primary means by which Christ communicates His will to His Body in real time.</p><h3>Growing into Fullness</h3><p>Ephesians 4:13 speaks of coming "to the measure of the stature of the fullness of Christ." This is corporate fullness — the whole Body together expressing the fullness of Christ, not any single individual. We need each other to express Christ fully.</p>`, quiz: [{ question: "According to Ephesians 4:11-12, what is the purpose of apostles, prophets, evangelists, pastors, and teachers?", options: ["To do all the ministry on behalf of believers", "To equip every member to do the work of ministry", "To govern the organizational structure of churches", "To write authoritative theological documents"], correct: 1, explanation: "Ephesians 4:12 says these gifts are given 'to equip the saints for the work of ministry' — every believer is a minister, and these five roles serve to equip them." }, { question: "How does Christ communicate His will to His Body in real time?", options: ["Only through Scripture already written", "Only through senior leadership", "Through revelation manifestations among other means", "Only through internal conviction"], correct: 2, explanation: "As Head of the Body, Christ directs — and revelation manifestations are one of the primary ways He communicates His will in real time to the corporate Body." }, { question: "What does Ephesians 4:13 mean by 'the measure of the stature of the fullness of Christ'?", options: ["Individual believers achieving personal perfection", "The corporate Body together expressing Christ's fullness", "The senior leadership team operating in all gifts", "The completion of the canon of Scripture"], correct: 1, explanation: "This is corporate fullness — the whole Body together expressing Christ fully. No single individual can express the fullness of Christ; we need each other to do so together." }] },
      { id: "c2-10", title: "Manifestations in the Assembly", duration: "52 min", content: `<h2>Worship Manifestations in the Assembly</h2><p>1 Corinthians 14 gives detailed practical instruction for how worship manifestations should operate when the church gathers. This session works through Paul's guidelines.</p><h3>Order and Edification (14:26)</h3><p>"When you come together, each one has a hymn, a lesson, a revelation, a tongue, or an interpretation. Let all things be done for building up." The gatherings of the early church were participatory — many members contributing, all for the purpose of edification.</p><h3>The Rule of Two or Three (14:27)</h3><p>When tongues and interpretation are exercised in the assembly, Paul limits it to two or three messages, each interpreted. This prevents excess and ensures order without quenching the Spirit.</p><h3>Weighing Prophecy (14:29)</h3><p>"Let two or three prophets speak, and let the others weigh what is said." Prophetic words are to be tested — this is not a sign of distrust but of wisdom. Even genuine gifts need the accountability of the community.</p><h3>Decency and Order (14:40)</h3><p>"All things should be done decently and in order." God is not the author of confusion. Genuine manifestations of the Spirit will always be compatible with a spirit of peace and order. Chaos is not a sign of the Spirit's presence.</p>`, quiz: [{ question: "According to 1 Corinthians 14:26, what was the nature of early church gatherings?", options: ["One person teaching while others listened", "Participatory — each one contributing for the building up of all", "Silent prayer with occasional readings", "Primarily musical worship without speaking gifts"], correct: 1, explanation: "1 Corinthians 14:26 shows gatherings where each one came with something to contribute — hymn, lesson, revelation, tongue, interpretation. Participatory, not passive." }, { question: "What is the 'rule of two or three' in 1 Corinthians 14:27?", options: ["Only mature believers can speak in the assembly", "Tongues and interpretation are limited to two or three messages per gathering, each interpreted", "At least three people must confirm a word before it is shared", "Three languages maximum can be spoken in any gathering"], correct: 1, explanation: "Paul limits tongues-plus-interpretation to two or three messages per gathering. This ensures order without quenching the Spirit — a wise, practical guideline." }, { question: "What does 1 Corinthians 14:40 establish as the standard for all worship manifestations?", options: ["Spontaneity and freedom from all structure", "Decency and order — God is not the author of confusion", "Silence and reverence above all expression", "Authority of the senior leader over all contributions"], correct: 1, explanation: "'All things should be done decently and in order' — genuine manifestations of the Spirit are compatible with peace and order. Chaos is not a sign of the Spirit's presence." }] },
      { id: "c2-11", title: "Christ — The Great Mystery Revealed", duration: "60 min", content: `<h2>Christ in You — The Great Mystery Revealed</h2><p>We return in this session to the central theme of the course: the mystery of Christ in you (Colossians 1:27). Understanding this truth at a deeper level transforms how we see ourselves and how we function in the Body.</p><h3>What "Christ in You" Means</h3><p>When you were born again, Christ — through His Spirit — came to dwell within you. This is not metaphorical. The same power that raised Jesus from the dead is resident within every believer (Ephesians 1:19-20). You carry resurrection power.</p><h3>Romans 8:11</h3><p>"If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you." The indwelling Spirit is not a passive presence — it is life-giving power available to you right now.</p><h3>Implications for the Worship Manifestations</h3><p>When you speak in tongues, give an interpretation, or prophesy — it is the Spirit within you expressing itself through your voice. You are the vessel; God is the source. This removes both pride (you are not the source) and fear (you are not performing alone).</p>`, quiz: [{ question: "According to Ephesians 1:19-20, what power is available to every believer?", options: ["The power of positive thinking", "The same power that raised Jesus from the dead", "A portion of God's power suitable to our faith level", "The power of Scripture memorization"], correct: 1, explanation: "Ephesians 1:19-20 says the power available to believers is the same power that raised Christ from the dead — resurrection power. This is not ordinary power." }, { question: "According to Romans 8:11, what does the indwelling Spirit do?", options: ["Provides passive comfort only", "Gives life to mortal bodies — it is life-giving, not passive", "Communicates only through Scripture", "Is only fully active after death"], correct: 1, explanation: "Romans 8:11 says the indwelling Spirit 'will also give life to your mortal bodies' — an active, life-giving presence, not merely a passive comfort." }, { question: "Understanding 'Christ in you' removes both pride and fear because:", options: ["It makes believers feel more worthy", "God is the source — believers are vessels, not performing alone", "It guarantees all manifestations will be perfect", "It means mistakes are impossible"], correct: 1, explanation: "When you understand you are the vessel and God is the source, pride is removed (you are not the source of the power) and fear is removed (you are not performing alone — God is with you)." }] },
      { id: "c2-12", title: "The Body in the World", duration: "48 min", content: `<h2>The Body of Christ in the World</h2><p>The Body of Christ does not exist for itself — it exists for the world. This session addresses the outward dimension of everything we have studied.</p><h3>John 17:18</h3><p>Jesus prayed: "As you sent me into the world, so I have sent them into the world." The mission of the church is an extension of the mission of Jesus — to reveal the Father, bring healing, and reconcile people to God.</p><h3>Worship Manifestations in Evangelism</h3><p>The worship manifestations are powerful evangelistic tools. 1 Corinthians 14:24-25 describes an unbeliever entering a gathering where prophecy is operating: "he is convicted by all, he is called to account by all, the secrets of his heart are disclosed, and so, falling on his face, he will worship God and declare that God is really among you."</p><h3>A Lifestyle, Not Just Meetings</h3><p>The manifestations are not reserved for church services. They can flow in everyday conversations, workplace encounters, family interactions. As we become more sensitive to the Spirit in all of life, the manifestations become a natural expression of the Christ within us — everywhere we go.</p>`, quiz: [{ question: "According to John 17:18, what is the relationship between Jesus' mission and the church's mission?", options: ["They are completely different missions", "The church's mission is purely internal — caring for believers", "The church's mission extends Jesus' mission — both are sent into the world", "The church's mission ends at the church building doors"], correct: 2, explanation: "Jesus said 'as you sent me, so I have sent them' — the church's mission is a direct extension of Jesus' mission to reveal the Father and reconcile people to God." }, { question: "According to 1 Corinthians 14:24-25, what can happen when an unbeliever encounters prophecy in operation?", options: ["They are offended and leave", "They are confirmed in unbelief", "Their heart secrets are disclosed, they fall before God, and declare God is present", "Nothing significant — only believers are affected"], correct: 2, explanation: "1 Corinthians 14:24-25 describes an unbeliever being convicted by prophecy — the secrets of their heart disclosed — leading them to worship God and declare His presence. Manifestations are evangelistic." }, { question: "Are worship manifestations limited to formal church services?", options: ["Yes — they require the proper church setting", "No — they can flow in everyday life, workplaces, and family settings", "Only prophecy can operate outside church; tongues requires a formal setting", "They are less powerful outside of dedicated prayer meetings"], correct: 1, explanation: "As we become sensitive to the Spirit in all of life, manifestations become a natural expression of Christ within us — in everyday conversations, workplaces, and family interactions." }] },
    ],
  },
  {
    id: "course-3",
    slug: "administering-gods-power",
    order: 3,
    titleFr: "Administrer la Puissance de Dieu",
    subtitleFr: "Foi, miracles, guérisons et transmission",
    descriptionFr: "Un cours avancé sur les manifestations de transmission : foi spéciale, opérations de miracles, et dons de guérisons — apporter la délivrance au peuple de Dieu.",
    title: "Administering God's Power",
    subtitle: "Faith, miracles, healing, and impartation",
    description:
      "An advanced course on the manifestations of impartation: faith, miracles, and gifts of healings — bringing God's deliverance to His people.",
    longDescription:
      "This advanced course completes the series. You will learn how to administer the power manifestations: special faith, working of miracles, and gifts of healings. The ministry of Jesus was one of grace and deliverance — so must ours be.",
    color: "#1a1a18",
    icon: "zap",
    chapters: [
      { id: "c3-1", title: "Administering God's Power — Introduction", duration: "69 min", content: `<h2>Administering God's Power</h2><p>Welcome to the fourth and final course in the series on God's Power. In this course we will study the "power manifestations" — also called the impartation manifestations:</p><ul><li><strong>Special Faith</strong> — a supernatural surge of faith given for a specific purpose</li><li><strong>Working of Miracles</strong> — a supernatural intervention that supersedes natural law</li><li><strong>Gifts of Healings</strong> — supernatural healings that operate through believers</li></ul><p>The ministry of Jesus Christ was a ministry of grace and deliverance. Our ministry should be the same. This course will teach you HOW to manifest the same power Jesus displayed.</p><h3>The Foundation</h3><p>Are you ready to follow in His footsteps? John 14:12: "Truly, truly, I say to you, whoever believes in me will also do the works that I do; and greater works than these will he do, because I am going to the Father."</p><h3>The Application of Revelation</h3><p>In previous courses we studied the revelation manifestations (word of knowledge, word of wisdom, discerning of spirits). In this course we see how revelation is applied through the power manifestations. Revelation identifies what needs to be done — the power manifestations accomplish it.</p>`, quiz: [{ question: "Which three manifestations are covered in this course?", options: ["Word of knowledge, prophecy, tongues", "Special faith, working of miracles, gifts of healings", "Discerning of spirits, word of wisdom, word of knowledge", "Apostle, prophet, teacher"], correct: 1, explanation: "This course covers the three power/impartation manifestations: special faith, working of miracles, and gifts of healings — the culmination of the four-course series." }, { question: "What does John 14:12 promise to believers who believe in Jesus?", options: ["That they will understand all Scripture", "That they will be protected from all harm", "That they will do the works Jesus did, and even greater works", "That they will never face hardship"], correct: 2, explanation: "John 14:12 contains one of the most stunning promises in Scripture: 'Whoever believes in me will also do the works that I do; and greater works than these will he do.' This applies to all believers." }, { question: "How do the revelation manifestations relate to the power manifestations?", options: ["They are completely separate operations", "Revelation identifies what needs to be done; power manifestations accomplish it", "Power manifestations replace the need for revelation", "They never operate together"], correct: 1, explanation: "Revelation and power manifestations work in concert. Revelation (word of knowledge, wisdom, discerning) identifies the need and God's will — then power manifestations (faith, miracles, healing) accomplish it." }] },
      { id: "c3-2", title: "Impartation Manifestations", duration: "54 min", content: `<h2>The Impartation Manifestations</h2><p>The three power manifestations — special faith, working of miracles, and gifts of healings — are called "impartation" manifestations because they impart something tangible from God's realm into the physical realm.</p><h3>Special Faith</h3><p>Special faith is distinct from saving faith or general faith in God. It is a supernatural surge of faith given by the Spirit for a specific situation — a divine certainty that something specific will happen. Jesus spoke to the fig tree (Mark 11) and the storm (Mark 4) with this kind of faith — absolute certainty of the outcome.</p><h3>Working of Miracles</h3><p>A miracle is a supernatural act of power that supersedes or sets aside natural law. The parting of the Red Sea, the feeding of the 5,000, walking on water, raising the dead — these are miracles. They demonstrate that God's power is superior to all natural law.</p><h3>Gifts of Healings</h3><p>Note the plural: "gifts of healings" (1 Corinthians 12:9). There are multiple healing gifts — one person may see consistent results in one area (e.g., back conditions) while another sees results in a different area. Gifts of healings channel God's healing power through believers to the sick.</p>`, quiz: [{ question: "What makes 'special faith' different from ordinary saving faith?", options: ["It is stronger and more permanent", "It is a supernatural surge given for a specific situation — a divine certainty about a specific outcome", "It is only available to those with great spiritual maturity", "It replaces the need for prayer"], correct: 1, explanation: "Special faith is distinct — it is a supernatural surge given by the Spirit for a specific situation, providing divine certainty that something specific will happen. It is beyond general faith in God." }, { question: "Why is it significant that 1 Corinthians 12 says 'gifts of healings' (plural)?", options: ["Because healings must be done in groups", "Because multiple prayers are always required", "Because there are multiple healing gifts — different believers may see consistent results in different areas", "Because only three types of illness can be healed"], correct: 2, explanation: "The plural 'gifts of healings' indicates that healing gifts are varied — one person may consistently see results in certain conditions while another sees different results. God distributes these diversely." }, { question: "What is the defining characteristic of a working of miracles?", options: ["It involves healing of the physical body", "It supersedes or sets aside natural law", "It is always accompanied by thunder and lightning", "It must be witnessed by a large crowd"], correct: 1, explanation: "A miracle supersedes or sets aside natural law — it demonstrates that God's power operates above and beyond the natural order. Parting seas, walking on water, raising the dead all fall in this category." }] },
      { id: "c3-3", title: "Manifestations Work Together", duration: "76 min", content: `<h2>Manifestations Working Together</h2><p>The nine manifestations of holy spirit do not operate in isolation — they work together in integrated ways. This session explores how they function as a unified expression of God's power.</p><h3>A Complete Package</h3><p>Think of a ministry encounter with a sick person:<ul><li><strong>Word of knowledge</strong> reveals the specific condition</li><li><strong>Discerning of spirits</strong> identifies if there is a spiritual root</li><li><strong>Word of wisdom</strong> gives direction for how to minister</li><li><strong>Special faith</strong> arises for the specific healing</li><li><strong>Gift of healing</strong> channels the healing power to the person</li><li><strong>Prophecy</strong> may encourage and confirm the healing</li></ul>All nine are available; what is needed in each moment flows according to the Spirit's direction.</p><h3>Jesus as the Model</h3><p>Jesus operated in all nine manifestations. Study the Gospels and you will see every manifestation in operation through His life. He is our standard and model — not our substitute. We are to do what He did.</p>`, quiz: [{ question: "In a complete healing encounter, which revelation manifestation might identify the specific condition?", options: ["Special faith", "Gifts of healings", "Word of knowledge", "Working of miracles"], correct: 2, explanation: "Word of knowledge reveals specific facts — including specific physical conditions or their root causes. It is often the first step in a targeted healing ministry." }, { question: "What is the significance of Jesus operating in all nine manifestations?", options: ["It shows these gifts ended with His generation", "He is our model and standard — we are to do what He did, not merely admire it", "Only those with Jesus' level of anointing can operate all nine", "It demonstrates that the gifts should only be used in formal ministry contexts"], correct: 1, explanation: "Jesus operating in all nine manifestations establishes Him as our standard and model — not our substitute. We are commissioned to do the works He did (John 14:12)." }, { question: "How do manifestations generally flow in a ministry encounter?", options: ["According to a fixed, predetermined order", "Only one at a time, never together", "According to the Spirit's direction in the moment, with all nine available", "According to the leader's choice before the meeting begins"], correct: 2, explanation: "All nine manifestations are available in every encounter. What flows in any given moment is according to the Spirit's direction — this requires sensitivity, not a formula." }] },
      { id: "c3-4", title: "Working Together with God", duration: "78 min", content: `<h2>Working Together with God</h2><p>2 Corinthians 6:1 says we are "workers together with God." This session explores the profound partnership between God and His people in the administration of His power.</p><h3>God's Role and Our Role</h3><p>Understanding the divine-human partnership prevents two errors:<ul><li><strong>Passivity</strong>: "God will do it if He wants to" — abdication of human responsibility</li><li><strong>Self-reliance</strong>: "I must make this happen" — taking on what only God can do</li></ul>The partnership is: we believe, we speak, we act — God confirms, God heals, God does the miracle. We are the vessels; He is the source.</p><h3>Mark 16:20</h3><p>"And they went out and preached everywhere, while the Lord worked with them and confirmed the message by accompanying signs." Notice the order: they preached (human action) → the Lord worked with them (divine confirmation). Both parts are essential.</p><h3>Practical Application</h3><p>This means we must show up. We must speak. We must pray for the sick. We must step out in faith. God does not typically do what we are assigned to do. But when we do our part, He does what only He can do — and the result is transformation.</p>`, quiz: [{ question: "What are the two errors that misunderstanding the divine-human partnership can lead to?", options: ["Pride and shame", "Passivity (abdication) and self-reliance (taking on what only God can do)", "Overconfidence and underconfidence", "Legalism and lawlessness"], correct: 1, explanation: "Misunderstanding partnership produces either passivity ('God will do it without my involvement') or self-reliance ('I must make this happen'). Both miss the biblical model of cooperation." }, { question: "According to Mark 16:20, what is the correct order of events in the divine-human partnership?", options: ["God acts first, then believers respond", "Believers receive a sign first, then preach", "Believers preach (human action), then the Lord confirms with signs (divine action)", "God and believers act simultaneously with equal initiative"], correct: 2, explanation: "Mark 16:20 shows disciples preaching first — then the Lord working with them and confirming with signs. Human action comes first; divine confirmation follows. We must show up and act." }, { question: "What does 'we are the vessels; He is the source' mean practically?", options: ["We have no active role — God uses us passively", "We provide the faith and skill; God provides the opportunity", "We take the steps of belief, speech, and action; God provides the power and results", "We earn God's power through faithful service"], correct: 2, explanation: "As vessels, we believe, speak, and act — doing our part. As source, God provides the power and produces the results. Both roles are real and necessary." }] },
      { id: "c3-5", title: "The Believers' Hall of Glory", duration: "77 min", content: `<h2>The Believers' Hall of Glory</h2><p>Hebrews 11 — often called the "Hall of Faith" — is a testimony to ordinary people who accomplished extraordinary things through faith. This session draws lessons from their lives for operating in the power manifestations today.</p><h3>The Pattern of Faith</h3><p>Every person in Hebrews 11 shares a common pattern:<ol><li>They received a word from God (revelation)</li><li>They believed the word and acted on it (faith)</li><li>They experienced God's confirmation and power</li></ol>This is the same pattern for power manifestations today.</p><h3>Key Examples</h3><ul><li><strong>Noah</strong> — built the ark by faith, a massive act of obedience to revelation, resulting in salvation</li><li><strong>Abraham</strong> — left his homeland, offered Isaac, against all natural evidence believed God</li><li><strong>Moses</strong> — chose to identify with God's people rather than Egypt's treasures, performing signs and wonders</li><li><strong>Rahab</strong> — an outsider who received and acted on revelation, becoming part of God's story</li></ul><h3>Hebrews 11:6</h3><p>"And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him." Faith is not optional — it is the essential substance of the life that pleases God.</p>`, quiz: [{ question: "What is the common three-step pattern shared by every person in Hebrews 11?", options: ["Repentance, baptism, and service", "Revelation, faith-action, and God's confirmation/power", "Prayer, fasting, and obedience", "Study, teaching, and discipleship"], correct: 1, explanation: "Every person in Hebrews 11 received revelation (a word from God), believed and acted on it (faith), and then experienced God's confirmation. This is the pattern for all power manifestations." }, { question: "What does Hebrews 11:6 say is impossible without faith?", options: ["Working miracles", "Understanding Scripture", "Pleasing God", "Operating in spiritual gifts"], correct: 2, explanation: "Hebrews 11:6: 'Without faith it is impossible to please him.' Faith is not optional — it is the essential substance of the life that pleases and partners with God." }, { question: "What lesson does Rahab's inclusion in Hebrews 11 teach us?", options: ["Only those with Israelite heritage can be used by God", "Social status and background do not disqualify anyone from being part of God's story", "Women cannot operate in faith manifestations", "Faith is only possible after a lifetime of spiritual discipline"], correct: 1, explanation: "Rahab — a Gentile woman with a problematic background — received revelation, acted on it, and became part of God's story. No one is disqualified by their past or background from faith that pleases God." }] },
      { id: "c3-6", title: "Releasing Your Faith", duration: "59 min", content: `<h2>Releasing Your Faith</h2><p>Faith that is not released accomplishes nothing. This session addresses the practical question: how do we release the faith within us to see God's power manifest?</p><h3>Mark 11:23-24</h3><p>"Truly, I say to you, whoever says to this mountain, 'Be taken up and thrown into the sea,' and does not doubt in his heart, but believes that what he says will come to pass, it will be done for him. Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours."</p><p>Faith is released through speaking. We speak to the situation, to the mountain, in alignment with God's Word and His revealed will.</p><h3>The Role of the Mouth</h3><p>Romans 10:10: "For with the heart one believes and is justified, and with the mouth one confesses and is saved." Faith in the heart is released through confession with the mouth. This is not mind power or positive thinking — it is the alignment of the inner person with God's truth, expressed outwardly in speech and action.</p><h3>Ministering Healing Through Faith</h3><p>Practical steps for releasing faith for healing:<ol><li>Ask if the person wants to be healed (Jesus often asked)</li><li>Ask what is needed (a simple question opens the door to revelation)</li><li>Lay hands on (if appropriate) — the point of contact for faith</li><li>Speak the healing in Jesus' name — address the condition directly</li><li>Ask the person to check if they notice any change</li><li>Give God the glory for any change, no matter how small</li></ol></p>`, quiz: [{ question: "According to Mark 11:23-24, how is faith primarily released?", options: ["Through extended fasting", "Through speaking to the situation or mountain", "Through group agreement prayer only", "Through silent meditation and inner conviction"], correct: 1, explanation: "Jesus said to 'say to this mountain' — faith is released through speaking, in alignment with God's Word, to the situation that needs to change." }, { question: "What does Romans 10:10 teach about the relationship between heart belief and mouth confession?", options: ["Heart belief alone is sufficient; mouth confession is optional", "Mouth confession is performative and not spiritually significant", "Heart belief is justified by God; mouth confession releases and makes salvation effective", "They operate completely independently"], correct: 2, explanation: "Romans 10:10 shows a two-part process: 'with the heart one believes... and with the mouth one confesses.' Both are necessary — inner belief is released and completed through outward confession." }, { question: "When ministering healing, why might you ask the person 'what is needed'?", options: ["Because you must diagnose before praying", "Because God cannot heal without knowing the condition", "Because the question opens the door to revelation and helps focus faith on the specific need", "Because you should only pray for what people explicitly request"], correct: 2, explanation: "Asking what is needed opens the door to revelation (you may receive specific insight) and focuses the faith-prayer on the actual specific need, following Jesus' own example (e.g., 'what do you want me to do for you?')." }] },
      { id: "c3-7", title: "The Miracles of Joshua", duration: "66 min", content: `<h2>The Miracles of Joshua</h2><p>Joshua is one of Scripture's greatest examples of a leader who administered God's power in cooperation with divine revelation. His campaigns in Canaan were marked by consistent supernatural intervention.</p><h3>The Jordan Crossing (Joshua 3)</h3><p>God told Joshua in advance what He would do. Joshua told the priests what to do. The priests obeyed — they stepped into the Jordan River before it parted. The miracle happened as they stepped in, not before. This is the pattern of faith and power working together: obedience to revelation, then the miracle.</p><h3>Jericho (Joshua 6)</h3><p>The instructions for taking Jericho made no military sense — march around the city, blow trumpets, shout. This was a word of wisdom (how God would accomplish the victory) received by faith and obeyed completely. The walls fell when the people obeyed the specific revelation.</p><h3>The Sun Standing Still (Joshua 10)</h3><p>Joshua asked God to hold the sun in place during a battle. "There has been no day like it before or since, when the Lord heeded the voice of a man, for the Lord fought for Israel" (Joshua 10:14). Special faith, combined with boldness of prayer, resulted in one of the greatest miracles in history.</p>`, quiz: [{ question: "What did the priests have to do before the Jordan River parted?", options: ["Pray for seven days at the riverbank", "Step into the river — the miracle came as they obeyed", "Build an altar and sacrifice", "Wait for God to part the river and then cross"], correct: 1, explanation: "The priests stepped into the Jordan River first — then it parted. The miracle required the step of faith first. This is always the pattern: obedience to revelation precedes the miracle." }, { question: "Why is Jericho's conquest a good example of word of wisdom in action?", options: ["Because it used the most sophisticated military strategy of the era", "Because God gave a specific unconventional plan that only He could have devised", "Because it showed that prayer alone can replace military action", "Because it proved that obedience to the Law always brings victory"], correct: 1, explanation: "God's instructions for Jericho made no military sense — marching, trumpets, shouting. This unconventional plan came as revelation (word of wisdom), and its exact obedience produced the miraculous result." }, { question: "What does Joshua 10:14 say was unique about the day the sun stood still?", options: ["It was the first miracle in Joshua's ministry", "It was the largest battle in Israelite history", "There had been no day like it — before or since — when God heeded the voice of a man", "It was the only miracle that involved all of Israel"], correct: 2, explanation: "Joshua 10:14 calls it uniquely unprecedented: 'There has been no day like it before or since, when the Lord heeded the voice of a man.' Boldness in prayer, backed by revelation, releases extraordinary miracles." }] },
      { id: "c3-8", title: "The Miracles of Jesus", duration: "49 min", content: `<h2>The Miracles of Jesus</h2><p>Jesus performed more miracles than any single account can contain (John 21:25). Studying His miracles gives us our clearest picture of how the power manifestations operate.</p><h3>Jesus' Method</h3><p>Jesus' miracles were not random — each one was an expression of the Father's will, confirmed by revelation. John 5:19-20: "The Son can do nothing of his own accord, but only what he sees the Father doing. For whatever the Father does, that the Son does likewise." Jesus operated from revelation, then acted with authority.</p><h3>Types of Miracles</h3><ul><li><strong>Healing miracles</strong>: the blind, lame, lepers, dead raised — gifts of healings and working of miracles</li><li><strong>Nature miracles</strong>: calming the storm, walking on water, multiplying bread — working of miracles</li><li><strong>Deliverance miracles</strong>: casting out demons — discerning of spirits and special faith</li></ul><h3>Matthew 8:16-17</h3><p>"That evening they brought to him many who were oppressed by demons, and he cast out the spirits with a word and healed all who were sick. This was to fulfill what was spoken by the prophet Isaiah: 'He took our illnesses and bore our diseases.'" Jesus healed all — not some. His ministry set the standard.</p>`, quiz: [{ question: "According to John 5:19-20, what was the basis for Jesus' miraculous works?", options: ["His divine nature operating independently of the Father", "His own spiritual authority earned through fasting and prayer", "Revelation — doing only what He saw the Father doing", "Random acts of mercy according to immediate compassion"], correct: 2, explanation: "John 5:19-20 reveals that Jesus operated from revelation — He did what He saw the Father doing. His miracles were not random but the precise expression of the Father's revealed will." }, { question: "According to Matthew 8:16-17, how many of the sick did Jesus heal that evening?", options: ["Those with enough faith", "The most seriously ill", "All who were sick", "Those who asked specifically"], correct: 2, explanation: "Matthew 8:16-17 says Jesus 'healed all who were sick' — not some, not the most faith-filled, but all. This is the standard His ministry sets." }, { question: "Casting out demons is an example of which manifestations working together?", options: ["Gifts of healings and prophecy", "Discerning of spirits and special faith", "Word of knowledge and working of miracles", "Tongues and interpretation"], correct: 1, explanation: "Deliverance involves discerning of spirits (identifying the spiritual opposition) and special faith (the supernatural certainty that the demon must go). They work together in deliverance ministry." }] },
      { id: "c3-9", title: "Signs, Miracles, and Wonders", duration: "69 min", content: `<h2>Signs, Miracles, and Wonders</h2><p>Scripture uses three distinct terms — signs, miracles, and wonders — to describe supernatural works of God. Understanding the distinctions enriches our understanding of the power manifestations.</p><h3>Signs (semeion)</h3><p>A sign points to something beyond itself. The miracles of Jesus were signs — they pointed to who He was (the Son of God) and to the kingdom He was establishing. When we minister in the power manifestations, the results are signs — they point people to God, not to us.</p><h3>Miracles (dunamis)</h3><p>Dunamis means power — mighty works of power. This is the word from which we get "dynamite." The working of miracles is an explosive, dynamic release of God's power that produces visible, tangible results that cannot be explained by natural means.</p><h3>Wonders (teras)</h3><p>Wonders cause people to stop and be amazed — they arrest attention and create an atmosphere of reverence and awe. Not every sign and miracle produces a wonder response, but when people encounter the genuine power of God, wonder is often the natural human response.</p><h3>Acts 2:22</h3><p>"Men of Israel, hear these words: Jesus of Nazareth, a man attested to you by God with mighty works and wonders and signs that God did through him in your midst." Jesus was authenticated by all three — signs, wonders, and mighty works. We continue His ministry.</p>`, quiz: [{ question: "What does the Greek word 'dunamis' (miracles) mean?", options: ["Gentle power", "Mighty power or power-works", "Healing ability", "Spiritual authority"], correct: 1, explanation: "Dunamis means mighty power — it is the root of 'dynamite.' The working of miracles is an explosive, dynamic release of God's power that produces tangible, inexplicable results." }, { question: "What is the defining purpose of a 'sign' (semeion)?", options: ["To destroy the enemy's power", "To heal physical conditions", "To point beyond itself to God and His kingdom", "To prove the minister's credentials"], correct: 2, explanation: "A sign points to something beyond itself. Miraculous signs point to God — to who He is and the kingdom He is establishing. They direct attention to God, not to the vessel He works through." }, { question: "According to Acts 2:22, how was Jesus attested by God?", options: ["By His perfect teaching and moral life alone", "Through mighty works, wonders, and signs done through Him", "Through the testimony of John the Baptist", "Through the audible voice of the Father alone"], correct: 1, explanation: "Acts 2:22 says Jesus was 'attested by God with mighty works and wonders and signs.' The supernatural works authenticated His identity and mission — and we continue that same authenticated ministry." }] },
      { id: "c3-10", title: "Casting Out Evil Spirits", duration: "78 min", content: `<h2>Casting Out Evil Spirits</h2><p>Deliverance from evil spirits was a central part of Jesus' ministry and the ministry of the early church. This session provides Biblical grounding for understanding and ministering deliverance.</p><h3>The Biblical Reality</h3><p>Scripture presents evil spirits as real, personal beings with the ability to oppress, afflict, and in extreme cases, control human beings. They are not metaphors for psychological conditions — though psychological manifestations may accompany their activity.</p><h3>The Believer's Authority</h3><p>Luke 10:19 — Jesus gave believers "authority to tread on serpents and scorpions, and over all the power of the enemy." This authority was not reserved for the twelve apostles — the 70 disciples exercised it (Luke 10:17), and the early church exercised it (Acts 16:18, Acts 19:12).</p><h3>The Process</h3><ol><li>Identify — discerning of spirits reveals the presence and nature of evil spirits</li><li>Address — speak directly to the spirit, not the person</li><li>Command — in Jesus' name, command the spirit to leave</li><li>Fill — pray for the Holy Spirit to fill the person fully (Matthew 12:43-45)</li></ol><h3>Maintaining the Deliverance</h3><p>Matthew 12:43-45 warns that a delivered person who does not fill their life with God's Word and Spirit risks repossession. Follow-up and discipleship are essential parts of deliverance ministry.</p>`, quiz: [{ question: "How does Scripture present evil spirits — as metaphors or as real beings?", options: ["Metaphors for psychological or social conditions", "Real personal beings with ability to oppress and afflict", "Ancient superstitions without modern relevance", "Only relevant in non-Western cultural contexts"], correct: 1, explanation: "Scripture consistently presents evil spirits as real, personal beings — not metaphors. Jesus addressed them directly, they responded, and their departure produced observable results." }, { question: "What authority does Luke 10:19 grant to believers?", options: ["Authority over weather and natural disasters", "Authority reserved for ordained ministers only", "Authority over all the power of the enemy — over serpents, scorpions, and all enemy power", "Authority to forgive sins on God's behalf"], correct: 2, explanation: "Luke 10:19 gives all believers — not just apostles — authority 'over all the power of the enemy.' This comprehensive authority is the basis for deliverance ministry." }, { question: "Why is follow-up and discipleship essential after deliverance?", options: ["Because deliverance is only temporary without it", "Because Matthew 12:43-45 warns that an unfilled, undiscipled life risks repossession", "Because the church must document all deliverances", "Because only trained counselors can maintain deliverances"], correct: 1, explanation: "Matthew 12:43-45 warns that a delivered person who does not fill their life with God's Word and Spirit may experience repossession. Follow-up and discipleship are essential, not optional." }] },
      { id: "c3-11", title: "Accounts of Deliverances", duration: "60 min", content: `<h2>Accounts of Deliverances from Scripture</h2><p>This session examines key deliverance accounts in the New Testament to draw practical lessons for ministry today.</p><h3>The Epileptic Boy (Mark 9:14-29)</h3><p>The disciples had tried and failed to cast out the spirit from the boy. Jesus addressed the spirit directly, and commanded it to leave and never return. The disciples asked why they couldn't do it. Jesus' answer: "This kind cannot be driven out by anything but prayer" (and in some manuscripts, fasting). Some situations require deepened spiritual preparation.</p><h3>The Slave Girl at Philippi (Acts 16:16-18)</h3><p>A slave girl with a spirit of divination followed Paul for many days. Paul "became greatly annoyed" — the Spirit within him was grieved. He turned and commanded the spirit to come out in Jesus' name — and it came out immediately. Authority spoken in the name of Jesus brings immediate results.</p><h3>The Sons of Sceva (Acts 19:13-16)</h3><p>Seven sons of Sceva tried to cast out demons using Jesus' name as a formula, without the relationship and authority that comes through genuine faith. The demon said, "Jesus I know, and Paul I know, but who are you?" and overpowered them. This is a stark warning: deliverance ministry requires genuine faith and genuine relationship with Jesus — not formulas.</p>`, quiz: [{ question: "What did Jesus say was required for the kind of spirit that afflicted the epileptic boy?", options: ["Louder commands", "More experienced ministers", "Prayer (and fasting in some manuscripts) — deeper spiritual preparation", "A larger group of believers present"], correct: 2, explanation: "Jesus said 'This kind cannot be driven out by anything but prayer' — some situations require deeper spiritual preparation. Not all deliverance is the same; some requires more intensive prayer." }, { question: "What warning does the story of the sons of Sceva provide?", options: ["That only Jews can cast out demons", "That deliverance requires formulas passed down through apostolic succession", "That using Jesus' name as a formula without genuine faith and relationship produces dangerous results", "That Paul had a unique authority no other believers share"], correct: 2, explanation: "The sons of Sceva used Jesus' name as a formula without genuine relationship and authority. The demon's response shows that deliverance requires real faith and real relationship with Jesus — not borrowed authority or ritual." }, { question: "Why did Paul respond to the girl at Philippi after 'many days' rather than immediately?", options: ["Because he needed to determine if she was genuinely oppressed", "Because the Spirit within him was grieved and finally moved him to act", "Because Silas had not yet agreed to the deliverance", "Because deliverance requires extended observation"], correct: 1, explanation: "Paul became 'greatly annoyed' — the word suggests the Spirit within him was grieved. He acted when the Spirit prompted him, not on a human timeline. Ministry of power flows from the Spirit's initiation." }] },
      { id: "c3-12", title: "More Accounts of Deliverances", duration: "68 min", content: `<h2>More Accounts of Deliverances — Additional Study</h2><p>This session continues examining deliverance ministry through additional New Testament accounts and practical principles.</p><h3>Paul at Ephesus (Acts 19:11-12)</h3><p>"And God was doing extraordinary miracles by the hands of Paul, so that even handkerchiefs or aprons that had touched his skin were carried to the sick, and their diseases left them and the evil spirits came out of them." God used even physical points of contact to channel His healing and deliverance power. The faith of the people receiving these objects was key.</p><h3>Peter's Shadow (Acts 5:15)</h3><p>People brought the sick into the streets so that Peter's shadow might fall on them. This was not magic — it was extraordinary faith in a person through whom God was consistently working. God can honor the faith of people in remarkable ways.</p><h3>Principles Drawn</h3><ul><li><strong>God is creative.</strong> He uses different means in different situations — there is no single formula.</li><li><strong>Consistency builds faith.</strong> When people see consistent results through a person, faith increases to receive.</li><li><strong>The name of Jesus is the constant.</strong> Methods may vary; the authority of Jesus' name never changes.</li><li><strong>God wants people free.</strong> Every account of deliverance shows God's desire to bring freedom to the captive.</li></ul>`, quiz: [{ question: "What does Acts 19:11-12 say about the handkerchiefs and aprons from Paul?", options: ["They were sold as holy relics", "When carried to the sick, diseases left and evil spirits came out", "They only helped those with strong personal faith", "They were effective because Paul had prayed over each one individually"], correct: 1, explanation: "Acts 19:12 says these items 'carried to the sick' resulted in diseases leaving and evil spirits coming out. God used physical points of contact to channel His power — creative, non-formulaic ministry." }, { question: "What does the account of Peter's shadow (Acts 5:15) demonstrate?", options: ["That Peter had magical powers in his shadow", "That God can honor extraordinary faith through creative means of contact", "That only apostles can minister in this way", "That shadows have spiritual significance in healing"], correct: 1, explanation: "Peter's shadow was not magic — it was a point of contact for the extraordinary faith of people who had seen consistent results through Peter's ministry. God honored that faith creatively." }, { question: "What is the one constant across all the varied methods of healing and deliverance in Acts?", options: ["The method of laying on of hands", "The presence of multiple apostles", "The authority and name of Jesus", "Extended prayer before each encounter"], correct: 2, explanation: "Methods in Acts vary widely — shadows, handkerchiefs, spoken commands, laying on of hands. The constant is the name and authority of Jesus. Methods change; His authority does not." }] },
      { id: "c3-13", title: "Foundations of Healing", duration: "62 min", content: `<h2>Foundations of Healing</h2><p>This session lays the theological foundations that undergird a consistent healing ministry. Understanding WHY God heals is as important as understanding HOW He heals.</p><h3>Is It Always God's Will to Heal?</h3><p>Matthew 8:2-3: A leper said to Jesus, "Lord, if you are willing, you can make me clean." Jesus replied, "I am willing; be clean." This single exchange reveals Jesus' willingness to heal. Jesus said, "If you have seen me, you have seen the Father" (John 14:9). Jesus healed all who came to Him — this is God's character revealed.</p><h3>Isaiah 53:4-5 and Matthew 8:17</h3><p>Isaiah prophesied: "He took our infirmities and bore our diseases." Matthew explicitly applies this to Jesus' healing ministry. Healing is embedded in the atonement — not an optional extra but a provision of what Christ accomplished.</p><h3>3 John 2</h3><p>"Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul." God's desire is comprehensive wholeness — spirit, soul, and body. Healing is not reluctantly granted when begged — it is God's expressed desire for His people.</p>`, quiz: [{ question: "When the leper asked 'if you are willing,' how did Jesus respond?", options: ["'It depends on your faith'", "'I am willing; be clean'", "'Pray for three days first'", "'This is not the right time'"], correct: 1, explanation: "Jesus said 'I am willing; be clean' — His instant, unqualified willingness establishes God's character toward the sick. He never turned anyone away who came seeking healing." }, { question: "According to Matthew 8:17, what did Jesus' healing ministry fulfill?", options: ["A random act of mercy", "Isaiah's prophecy that He took our infirmities and bore our diseases", "The Mosaic purification laws", "A sign only for the Jewish nation"], correct: 1, explanation: "Matthew 8:17 explicitly quotes Isaiah 53:4-5 in connection with Jesus' healing ministry — healing is a fulfillment of Isaiah's prophecy and embedded in the atonement." }, { question: "What does 3 John 2 reveal about God's desire for believers?", options: ["Primarily spiritual growth, with physical health secondary", "Comprehensive wholeness — good health as much as soul wellbeing", "That health is a reward for faithfulness", "That physical health is separate from spiritual matters"], correct: 1, explanation: "3 John 2: 'I pray that you may be in good health, as it goes well with your soul.' God desires comprehensive wholeness — spirit, soul, and body — not just spiritual blessing." }] },
      { id: "c3-14", title: "Healing Realities", duration: "45 min", content: `<h2>Healing Realities</h2><p>This session addresses the practical realities of healing ministry — including the reality that not everyone is healed every time, and how to navigate that honestly.</p><h3>The Reality of Faith's Development</h3><p>Healing ministry grows through experience. Not every first attempt produces results. This does not mean God doesn't want to heal — it may mean that faith and sensitivity need development. Jesus' disciples didn't succeed every time either (Mark 9).</p><h3>Why Some Are Not Healed</h3><p>This is a sensitive question requiring humility. Possible factors include:<ul><li>Insufficient faith on the part of the ministers or the person</li><li>An underlying spiritual issue that needs to be addressed first</li><li>God's timing — some healings are progressive</li><li>The mystery of God's sovereignty — not everything is fully explained this side of eternity</li></ul>What we do NOT do: blame the sick person. Jesus never blamed the sick for not being healed.</p><h3>The Non-Negotiable</h3><p>Despite the mysteries, our responsibility is clear: pray for the sick. Jesus commanded it. James 5:14-15 instructs it. The outcome belongs to God; the obedience belongs to us. Pray, then trust.</p>`, quiz: [{ question: "What does this lesson say we should NOT do when someone is not healed?", options: ["Continue praying", "Ask about spiritual factors", "Blame the sick person", "Follow up with the person later"], correct: 2, explanation: "Jesus never blamed the sick for not being healed. Blaming the person adds spiritual burden to physical suffering and is not the model Jesus demonstrated." }, { question: "What do we know with certainty is our responsibility, regardless of the outcome?", options: ["Guaranteeing healing for every person we pray for", "Praying for the sick — the outcome belongs to God, obedience belongs to us", "Only praying for those with demonstrated strong faith", "Explaining why God did not heal in specific cases"], correct: 1, explanation: "James 5:14-15 and Jesus' commands make our responsibility clear: pray for the sick. The outcome belongs to God. Our obedience is to pray; results are in His hands." }, { question: "What does the fact that Jesus' disciples didn't always succeed in healing teach us?", options: ["That healing gifts are unreliable", "That healing is beyond ordinary believers", "That healing ministry grows through experience — not every attempt produces immediate results", "That only Jesus could truly heal"], correct: 2, explanation: "Even Jesus' disciples experienced failure (Mark 9). This shows that healing ministry develops through experience. Failure is part of the learning process, not proof that God doesn't want to heal." }] },
      { id: "c3-15", title: "Healing Accounts — Part 1", duration: "60 min", content: `<h2>Healing Accounts — Part 1</h2><p>This session examines specific healing accounts from Acts to draw practical lessons for healing ministry today.</p><h3>Peter and John at the Beautiful Gate (Acts 3)</h3><p>A man lame from birth begged at the temple gate daily. Peter said, "I have no silver and gold, but what I do have I give to you. In the name of Jesus Christ of Nazareth, rise up and walk!" The man was immediately healed — leaping and praising God. Notice: Peter offered what he had, not an apology for what he lacked.</p><h3>Aeneas (Acts 9:32-35)</h3><p>Peter came to Lydda and found a man named Aeneas who had been bedridden for eight years. Peter said, "Aeneas, Jesus Christ heals you; rise and make your bed." He rose immediately. Notice: Peter attributed the healing to Jesus, not to himself.</p><h3>Tabitha/Dorcas (Acts 9:36-43)</h3><p>Tabitha had died. Peter cleared the room, knelt and prayed, then said "Tabitha, arise." She opened her eyes and sat up. A raising from the dead — the ultimate healing miracle. Notice: Peter prayed first, then acted with authority. Prayer and command, not one or the other.</p>`, quiz: [{ question: "What did Peter offer the lame man at the Beautiful Gate instead of money?", options: ["A prayer for blessing", "What he did have — healing in the name of Jesus Christ", "Advice to seek physicians", "A place in the church community"], correct: 1, explanation: "Peter said 'What I do have I give to you' — healing in Jesus' name. He offered what God had placed in him, not an apology for what he lacked. This is the right approach: give what you have." }, { question: "When Peter healed Aeneas, how did he attribute the healing?", options: ["To his own apostolic authority", "To the prayers of the whole church", "To Jesus Christ — 'Jesus Christ heals you'", "To Aeneas's personal faith"], correct: 2, explanation: "Peter said 'Jesus Christ heals you' — giving all credit to Jesus, not to himself. This is the pattern: always direct glory and credit to Jesus, the true source of healing." }, { question: "In the raising of Tabitha, what did Peter do before commanding her to arise?", options: ["Fasted for three days", "Gathered the whole church to pray", "Cleared the room and knelt to pray privately", "Waited for a word of knowledge before acting"], correct: 2, explanation: "Peter cleared the room and knelt to pray — private prayer before public command. This shows that visible authority in healing is grounded in private communion with God." }] },
      { id: "c3-16", title: "Healing Accounts — Part 2", duration: "72 min", content: `<h2>Healing Accounts — Part 2</h2><p>This session continues examining healing accounts, focusing on what they teach us about the gifts of healings in consistent ministry.</p><h3>Paul and Eutychus (Acts 20:9-12)</h3><p>Eutychus fell from a third-floor window and died. Paul went down, embraced him, and said "Do not be alarmed, for his life is in him." The young man was restored. Notice the calm, assured authority — no panic, no lengthy formula.</p><h3>Paul's Own Healing Ministry (Acts 28:7-9)</h3><p>On the island of Malta after the shipwreck, Paul prayed for the chief official's father, who had fever and dysentery. He healed him by laying on hands and praying. When the island heard, all the sick came and were healed. One act of obedient healing opens the door for many more.</p><h3>Building Consistency</h3><p>Paul's healing ministry was consistent over time — not occasional or unpredictable. This consistency came from:<ul><li>Constant sensitivity to the Spirit</li><li>Regular prayer and walking in the Word</li><li>Willingness to step out regardless of setting or circumstance</li><li>Faith that grew with each confirmed result</li></ul></p>`, quiz: [{ question: "What was notable about Paul's response when Eutychus died from the fall?", options: ["He prayed loudly for the crowd to hear", "He showed calm, assured authority — no panic", "He waited three days as Jesus had", "He asked others to pray with him"], correct: 1, explanation: "Paul's response was calm and assured — 'Do not be alarmed, for his life is in him.' This confidence comes from operating in faith, not from forcing an emotional response or following a formula." }, { question: "What happened at Malta after Paul healed the chief official's father?", options: ["The islanders tried to worship Paul as a god", "Nothing — one healing was sufficient", "All the sick on the island came and were healed", "The Roman soldiers took Paul away"], correct: 2, explanation: "Acts 28:9 says 'the rest of the people on the island who had diseases also came and were cured.' One act of obedient healing opened the door for many — a beautiful picture of how healing ministry can multiply." }, { question: "What was the foundation of Paul's consistent healing ministry over time?", options: ["A permanent healing gift that required no cultivation", "Constant sensitivity to the Spirit, prayer, the Word, willingness to step out, and growing faith", "A unique apostolic office not available to ordinary believers", "A specific technique for each type of illness"], correct: 1, explanation: "Paul's consistency came from constant spiritual cultivation — sensitivity, prayer, Word, willingness, and faith that grew with each result. Consistent healing ministry is built over time, not granted instantly." }] },
      { id: "c3-17", title: "Healing Accounts — Part 3", duration: "71 min", content: `<h2>Healing Accounts — Part 3</h2><p>This final accounts session draws together the threads of everything we have studied about healing and miracle ministry.</p><h3>The Sick at Capernaum (Matthew 8:16)</h3><p>"That evening they brought to him many who were oppressed by demons, and he cast out the spirits with a word and healed all who were sick." All. Not some, not the most deserving. All. This is the standard of Jesus' ministry — and therefore our standard.</p><h3>The Woman with the Issue of Blood (Mark 5:25-34)</h3><p>This woman reached through a crowd to touch the hem of Jesus' garment and was immediately healed. "Daughter, your faith has made you well." Her persistence, her faith-action, and her refusal to be deterred by obstacles are an example for all who need healing.</p><h3>The Blind Man at Bethsaida (Mark 8:22-26)</h3><p>Jesus healed this man in stages — first partial sight, then full sight after a second touch. This is one of very few staged healings in the Gospels. It shows that healing can be progressive — partial results should not be rejected but prayed through to completion.</p><h3>The Synthesis</h3><p>Every healing account teaches us something different about how God heals — through immediate command, through touch, through persistence, through stages, through prayer. God does not use one method. What is constant is His willingness, His love, and His power.</p>`, quiz: [{ question: "What persistent action did the woman with the issue of blood take to receive healing?", options: ["She waited for Jesus to notice her", "She asked the disciples to intercede for her", "She reached through the crowd and touched the hem of Jesus' garment", "She shouted loudly to get Jesus' attention"], correct: 2, explanation: "The woman fought through the crowd and reached to touch Jesus' garment — persistent, active, courageous faith that refused to be deterred by obstacles. Jesus said 'your faith has made you well.'" }, { question: "The blind man at Bethsaida received healing in stages. What does this teach us?", options: ["His faith was too small for complete healing", "Staged healings show God is sometimes unwilling to fully heal", "Healing can be progressive — partial results should be prayed through to completion", "Bethsaida was a spiritually weak region"], correct: 2, explanation: "The staged healing shows that God sometimes works progressively. Partial results are not failure — they are the beginning. Continue to pray through to complete healing rather than accepting partial results as final." }, { question: "What is constant across all the varied healing accounts in this course?", options: ["A specific method that always works", "The location (always in the synagogue or temple)", "God's willingness, love, and power", "The presence of multiple witnesses"], correct: 2, explanation: "Methods vary enormously across healing accounts — command, touch, stages, persistence. What is constant in every account is God's willingness, His love for the person, and His power to heal." }] },
      { id: "c3-18", title: "First Two Keys to Healing (Sangat Bains)", duration: "68 min", content: `<h2>First Two Keys to Healing</h2><p>This session introduces practical keys to healing ministry, drawn from a scriptural study of how healing operates.</p><h3>Key 1: Know That God Wants to Heal</h3><p>The foundation of effective healing ministry is absolute confidence in God's will to heal. Doubt about whether God wants to heal in a given situation undermines faith. Matthew 8:3 — "I am willing" — is God's declared will. We minister from that certainty.</p><p>James 1:6-7 warns: "Let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea that is driven and tossed by the wind. For that person must not suppose that he will receive anything from the Lord." Unwavering faith in God's willingness is foundational.</p><h3>Key 2: Know Your Authority in Christ</h3><p>Healing is not begging God to do something He is reluctant to do — it is administering what Christ already provided. Colossians 2:10: "You have been filled in him, who is the head of all rule and authority." Luke 10:19: "I have given you authority... over all the power of the enemy."</p><p>Practical application: Minister healing from a position of authority, not of desperate petition. Speak to the body, to the condition, to the enemy — in the name and authority of Jesus Christ.</p>`, quiz: [{ question: "What does Matthew 8:3 establish as the foundation for healing ministry?", options: ["That healing depends entirely on the sick person's faith", "God's declared will — 'I am willing' — providing a certainty to minister from", "That healing requires special gifting not available to all believers", "That healing is only guaranteed for born-again believers"], correct: 1, explanation: "'I am willing' is God's foundational declaration of will toward healing. Effective healing ministry is built on this certainty — we don't wonder if He wants to; we know He does." }, { question: "According to James 1:6-7, what undermines receiving from God?", options: ["Lack of fasting", "Not knowing specific healing Scriptures", "Doubting — being like a wave tossed by wind", "Having prayed for others without results"], correct: 2, explanation: "James 1:6-7 says the doubter 'must not suppose that he will receive anything from the Lord.' Doubt about God's willingness to heal undermines the very faith needed to see results." }, { question: "What is the correct posture for ministering healing, according to this session?", options: ["Desperate petition — begging God to act", "Uncertainty — 'if it be your will'", "Authority — administering what Christ already provided, speaking to conditions in His name", "Passivity — letting God act without our involvement"], correct: 2, explanation: "Healing is administering what Christ already accomplished — not begging a reluctant God. We speak to conditions with authority in Jesus' name, from the position of Colossians 2:10 and Luke 10:19." }] },
      { id: "c3-19", title: "Three Additional Keys to Healing", duration: "75 min", content: `<h2>Three Additional Keys to Healing — Course Conclusion</h2><p>This final session completes our study with three more practical keys to effective healing ministry, and brings the entire four-course series to its culmination.</p><h3>Key 3: Remove Every Hindrance</h3><p>Mark 11:25-26 connects unforgiveness with hindered prayer. Harbored sin, unconfessed offenses, and broken relationships can hinder healing ministry. Before ministering, take time to ensure your heart is clean — and sometimes invite the person receiving ministry to do the same.</p><h3>Key 4: Speak the Word</h3><p>Psalm 107:20: "He sent out his word and healed them." God heals through His Word. Praying healing Scriptures over the sick, speaking promises of healing directly, and declaring what God has said creates an atmosphere of faith in which healing flourishes.</p><h3>Key 5: Persist Until Complete</h3><p>Luke 18:1-8 — the parable of the persistent widow — teaches that persistence in prayer and faith is rewarded. Not every healing is immediate. When partial results come, continue. When no results come, continue. The outcome is in God's hands; persistence is in ours.</p><h3>Completing the Series</h3><p>You have now completed the full series on God's Power: Living, Growing, Led by, and Administering His Power. The goal was never merely to acquire information — it was to equip you to walk in the simplicity of the operation of the manifestations of holy spirit: the power of God, for the benefit of others, to the glory of God. Go and walk in it.</p>`, quiz: [{ question: "According to Mark 11:25-26, what can hinder healing prayer?", options: ["Lack of theological training", "Not being ordained", "Unforgiveness and harbored offenses", "Ministering in public rather than private"], correct: 2, explanation: "Mark 11:25-26 directly connects unforgiveness with hindered prayer. Keeping our hearts clean of offense and unforgiveness maintains the clear channel for God's power to flow." }, { question: "What does Psalm 107:20 say about the role of God's Word in healing?", options: ["His Word primarily explains why illness exists", "He sent out His Word and healed them — God heals through His Word", "The Word only heals emotional wounds", "Speaking the Word is less effective than silent prayer"], correct: 1, explanation: "Psalm 107:20: 'He sent out his word and healed them.' God heals through His Word. Praying, declaring, and speaking healing Scripture creates an atmosphere of faith in which healing operates." }, { question: "What does Luke 18:1-8 teach about healing ministry when results are not immediate?", options: ["Accept the situation and stop praying", "Seek medical explanations for the lack of healing", "Persist until complete — the parable of the persistent widow teaches persistence is rewarded", "Conclude that healing is not God's will in that case"], correct: 2, explanation: "The parable of the persistent widow (Luke 18:1-8) teaches persistence in prayer. When results don't come immediately, continue. When partial results come, continue until complete. Persistence is our responsibility; timing is God's." }] },
    ],
  },
  {
    id: "course-psm1",
    slug: "psm1-scrum-master-prep",
    order: 4,
    visibility: "admin",
    certTrack: "Scrum.org PSM I — Prep (unofficial)",
    language: "en",
    title: "Professional Scrum Master I — Prep",
    subtitle: "A complete, guide-based course with a timed practice assessment",
    description:
      "A thorough personal prep course for the PSM I assessment, built chapter-by-chapter around every section of the official Scrum Guide (2020): theory, values, the Scrum Team, all five events, all three artifacts and their commitments — plus a long, timed, scenario-based final exam scored against an 85% passing threshold. Independent, unofficial exam prep — not affiliated with Scrum.org.",
    longDescription:
      "This course is organized to mirror the structure of the Scrum Guide (Schwaber & Sutherland, November 2020) section by section, so nothing important is skipped: what Scrum is and why it's deliberately incomplete; the empirical pillars and the five Scrum values; the Scrum Team and its three accountabilities (Developers, Product Owner, Scrum Master); the Sprint and all four inspect-and-adapt events inside it; and the three artifacts with their commitments (Product Goal, Sprint Goal, Definition of Done). Every lesson chapter ends with a short mastery quiz you must pass at 100% to move on. The course closes with a long, timed final exam — 40 scenario-based questions, a 60-minute countdown, and an 85% passing score, matching the rigor (though not the exact question bank) of the real assessment. Note: this is independent self-study material written for this platform. It is not produced, endorsed, or licensed by Scrum.org, and completing it does not grant the official PSM I credential — only Scrum.org's own proctored assessment, taken on their platform, can do that.",
    color: "#0a3d62",
    icon: "target",
    chapters: [
      {
        id: "psm1-1",
        title: "What Scrum Is — Definition and Purpose",
        duration: "25 min",
        content: `<h2>What Scrum Is — Definition and Purpose</h2>
<p>Scrum is a lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems. It was developed in the early 1990s by Ken Schwaber and Jeff Sutherland, who first presented it publicly at the OOPSLA conference in 1995, and it has been refined continuously since.</p>
<h3>The Simple Loop at the Center of Scrum</h3>
<p>At its core, Scrum sets up a small, repeating cycle:</p>
<ol>
<li>A Product Owner orders the work for a complex problem into a Product Backlog.</li>
<li>The Scrum Team turns a selection of that work into a usable Increment during a Sprint.</li>
<li>The Scrum Team and its stakeholders inspect the result and adapt for the next Sprint.</li>
<li>Repeat.</li>
</ol>
<h3>Scrum Is Deliberately Incomplete</h3>
<p>Scrum only defines the minimum set of roles, events, and artifacts needed to make empirical process control work. It does not tell you how to estimate, which engineering practices to use, or how to design your architecture — those choices are left to the people doing the work, who bring their own techniques, methods, and practices into the framework. Scrum wraps around existing practices, or renders some of them unnecessary, and it makes the real effectiveness of current ways of working visible so that improvements can be identified.</p>
<h3>Not a Methodology, Not a Silver Bullet</h3>
<p>Because Scrum is a framework rather than a full methodology, changing its core design, skipping elements, or not following its rules tends to hide the very problems Scrum is meant to surface — which limits its benefits and can make it ineffective. Scrum itself doesn't guarantee success; it guarantees visibility into whether what you're doing is working.</p>`,
        quiz: [
          { question: "Which best completes the loop Scrum sets up at its core?", options: ["Plan everything up front, then execute without changes", "Order the work, build an Increment in a Sprint, inspect and adapt, repeat", "Assign tasks to individuals and track hours", "Write full documentation before any development starts"], correct: 1, explanation: "Scrum's core loop is: order the work into a Product Backlog, turn a selection into an Increment during a Sprint, inspect and adapt, and repeat." },
          { question: "Why is Scrum described as 'purposefully incomplete'?", options: ["Because it is still being finished by Scrum.org", "Because it deliberately leaves practices like estimation and engineering techniques to the people doing the work", "Because only certified practitioners may complete it", "Because it lacks a definition of roles"], correct: 1, explanation: "Scrum defines only the minimum structure needed for empirical process control, leaving specific practices and techniques to the team." },
          { question: "What tends to happen when teams change Scrum's core design or skip elements?", options: ["Nothing — Scrum is fully customizable with no trade-offs", "It hides the very problems Scrum is designed to surface, limiting its benefits", "It always improves delivery speed", "It automatically becomes a different certified framework"], correct: 1, explanation: "Modifying the core framework or leaving out elements tends to cover up problems rather than solve them." },
        ],
      },
      {
        id: "psm1-2",
        title: "Scrum Theory — Empiricism, Lean Thinking, and the Three Pillars",
        duration: "30 min",
        content: `<h2>Scrum Theory — Empiricism, Lean Thinking, and the Three Pillars</h2>
<p>Scrum is founded on two ideas: <strong>empiricism</strong> and <strong>lean thinking</strong>. Empiricism holds that knowledge comes from experience, and that decisions should be based on what has actually been observed — not on upfront prediction. Lean thinking is about reducing waste and focusing effort on what's essential. Together, they lead Scrum to use an iterative, incremental approach: build a bit, learn from it, adjust, and build the next bit — which optimizes predictability and helps control risk in complex, uncertain work.</p>
<h3>The Three Pillars</h3>
<p>Empiricism in Scrum rests on three supporting pillars, and they build on each other in order:</p>
<ul>
<li><strong>Transparency</strong> — the process and the work must be visible both to the people doing it and to the people receiving it. Important decisions in Scrum are based on the perceived state of its three artifacts; if an artifact isn't genuinely transparent, decisions made from it can end up diminishing value and increasing risk.</li>
<li><strong>Inspection</strong> — the artifacts and progress toward agreed goals must be inspected frequently and carefully enough to catch undesirable variances or problems early. Scrum's five events exist largely to create a regular cadence for this inspection.</li>
<li><strong>Adaptation</strong> — when inspection shows that something has drifted outside acceptable limits, or that the resulting product isn't acceptable, the process or the materials being produced must be adjusted — and as soon as possible, to limit further drift.</li>
</ul>
<p>These pillars form a chain: transparency is what makes inspection meaningful (inspecting something that isn't visible is misleading and a waste of time), and inspection is what makes adaptation possible (inspecting without ever adapting is pointless). Adaptation itself becomes much harder when the people involved aren't empowered or self-managing — which is exactly why Scrum Teams are expected to be both.</p>`,
        quiz: [
          { question: "What two ideas is Scrum theory founded on?", options: ["Waterfall sequencing and fixed contracts", "Empiricism and lean thinking", "Six Sigma and critical path analysis", "Command-and-control management and detailed upfront specs"], correct: 1, explanation: "Scrum is founded on empiricism (decisions based on observed experience) and lean thinking (reducing waste, focusing on essentials)." },
          { question: "Put the three pillars in the order in which each one enables the next.", options: ["Adaptation → Inspection → Transparency", "Inspection → Adaptation → Transparency", "Transparency → Inspection → Adaptation", "Transparency → Adaptation → Inspection"], correct: 2, explanation: "Transparency enables meaningful inspection, and inspection enables useful adaptation — in that order." },
          { question: "Why does inspection without adaptation add little value?", options: ["Because inspection is only a formality in Scrum", "Because catching a problem without ever adjusting course wastes the information gained", "Because inspection is banned once adaptation begins", "Because adaptation must always happen before inspection"], correct: 1, explanation: "Inspecting the work only pays off if the team is willing and able to adapt based on what's found." },
        ],
      },
      {
        id: "psm1-3",
        title: "The Five Scrum Values",
        duration: "20 min",
        content: `<h2>The Five Scrum Values</h2>
<p>Successful use of Scrum depends less on following its mechanics correctly and more on the people involved becoming genuinely proficient in five values: <strong>Commitment, Focus, Openness, Respect,</strong> and <strong>Courage</strong>.</p>
<ul>
<li><strong>Commitment</strong> — the Scrum Team commits to achieving its goals and to supporting one another along the way.</li>
<li><strong>Focus</strong> — everyone's primary attention is on the work of the current Sprint, making the best possible progress toward the Scrum Team's goals.</li>
<li><strong>Openness</strong> — the Scrum Team and its stakeholders stay open about the work itself and about the challenges they're facing.</li>
<li><strong>Respect</strong> — team members respect one another as capable, independent people, and are respected the same way by the people they work with.</li>
<li><strong>Courage</strong> — team members have the courage to do the right thing and to take on tough problems rather than avoid them.</li>
</ul>
<h3>Why the Values Matter More Than the Mechanics</h3>
<p>These values give direction to how the Scrum Team works, acts, and behaves. Every decision made and every step taken while using Scrum should reinforce these values — never quietly undermine them. Team members learn and grow into these values gradually, through actually working with the Scrum events and artifacts, not by memorizing a definition. When the values genuinely take hold, the three empirical pillars — transparency, inspection, and adaptation — come alive, because people are willing to be honest about problems (openness), take ownership of fixing them (commitment, courage), and trust each other enough to act on what's found (respect) — all of which builds trust over time.</p>`,
        quiz: [
          { question: "Which five values does successful use of Scrum depend on?", options: ["Speed, Accuracy, Cost, Scope, Time", "Commitment, Focus, Openness, Respect, Courage", "Planning, Execution, Monitoring, Control, Closure", "Discipline, Hierarchy, Documentation, Process, Compliance"], correct: 1, explanation: "The five Scrum values are Commitment, Focus, Openness, Respect, and Courage." },
          { question: "Which value most directly supports being honest about problems and challenges as they arise?", options: ["Focus", "Openness", "Respect", "Commitment"], correct: 1, explanation: "Openness is about the Scrum Team and stakeholders being transparent about the work and the difficulties they encounter." },
          { question: "According to this chapter, how do the Scrum values relate to the three empirical pillars?", options: ["They are unrelated concepts from different frameworks", "Living the values is what makes transparency, inspection, and adaptation actually work in practice", "The values replace the need for the three pillars", "The pillars must be mastered before the values can be introduced"], correct: 1, explanation: "The values give people the honesty, ownership, and trust needed for transparency, inspection, and adaptation to function in real teams." },
        ],
      },
      {
        id: "psm1-4",
        title: "The Scrum Team — Structure, Size, and Shared Accountability",
        duration: "30 min",
        content: `<h2>The Scrum Team — Structure, Size, and Shared Accountability</h2>
<p>The fundamental unit of Scrum is a small team of people called a Scrum Team, made up of one Scrum Master, one Product Owner, and Developers. There are no sub-teams or hierarchies within it — it's a single cohesive unit of professionals focused on one objective at a time: the Product Goal.</p>
<h3>Cross-Functional and Self-Managing</h3>
<p>Scrum Teams are <strong>cross-functional</strong>, meaning the members collectively hold all the skills necessary to create value each Sprint. They are also <strong>self-managing</strong>, meaning the team decides internally who does what, when, and how — without being directed by anyone outside the team.</p>
<h3>Size</h3>
<p>A Scrum Team is kept small enough to stay nimble, yet large enough to get meaningful work done within a Sprint — typically 10 or fewer people. Smaller teams tend to communicate better and be more productive. When a Scrum Team grows too large, the usual recommendation is to reorganize into multiple cohesive Scrum Teams working on the same product, sharing the same Product Goal, Product Backlog, and Product Owner — rather than trying to scale a single oversized team.</p>
<h3>Scope of Responsibility</h3>
<p>The Scrum Team is responsible for all product-related activities: stakeholder collaboration, verification, maintenance, operations, experimentation, research and development — essentially anything the product needs. The organization structures and empowers the team to manage its own work, and working at a sustainable pace within Sprints helps the team stay focused and consistent over time.</p>
<h3>One Shared Accountability</h3>
<p>The entire Scrum Team — not just the Scrum Master or the Product Owner — is accountable for creating a valuable, useful Increment every single Sprint. Within that shared accountability, Scrum names three specific accountabilities: the Developers, the Product Owner, and the Scrum Master, each covered in depth in the next three chapters.</p>`,
        quiz: [
          { question: "What are the three accountabilities that make up a Scrum Team?", options: ["Manager, Analyst, Tester", "Scrum Master, Product Owner, Developers", "Team Lead, Architect, QA Lead", "Sponsor, Coach, Facilitator"], correct: 1, explanation: "A Scrum Team consists of one Scrum Master, one Product Owner, and Developers — no sub-teams or hierarchies." },
          { question: "What does it mean for a Scrum Team to be 'self-managing'?", options: ["It reports to no one in the organization", "It decides internally who does what, when, and how, without external direction", "It sets its own budget independently of the organization", "It has no Product Owner"], correct: 1, explanation: "Self-managing means the team makes its own decisions about who does what work, when, and how — internally." },
          { question: "What is the recommended approach when a Scrum Team grows too large?", options: ["Add a project manager to coordinate the larger team", "Reorganize into multiple cohesive Scrum Teams sharing the same Product Goal, Backlog, and Product Owner", "Extend the Sprint length to compensate", "Split the Product Backlog into unrelated backlogs per sub-team"], correct: 1, explanation: "Rather than scale a single large team, Scrum recommends splitting into multiple cohesive teams that still share the same Product Goal, Product Backlog, and Product Owner." },
        ],
      },
      {
        id: "psm1-5",
        title: "Developers",
        duration: "20 min",
        content: `<h2>Developers</h2>
<p>Developers are the people in the Scrum Team who are committed to creating any aspect of a usable Increment each Sprint. Their specific skills are often broad and vary a lot depending on the domain of work — but regardless of domain, Developers are always accountable for four things:</p>
<ul>
<li>Creating a plan for the Sprint — the Sprint Backlog.</li>
<li>Instilling quality by holding to a shared Definition of Done.</li>
<li>Adapting their plan every day toward the Sprint Goal.</li>
<li>Holding each other accountable as professionals.</li>
</ul>
<h3>No One Tells Developers How</h3>
<p>A key idea running through the Scrum Guide is that no one outside the Developers tells them how to turn Product Backlog items into Increments of value. The Product Owner decides <em>what</em> is needed and in what order; the Developers decide <em>how</em> to build it. This is what makes the team genuinely self-managing rather than self-managing in name only.</p>
<h3>Developers Participate Beyond "Coding"</h3>
<p>Because Scrum's use has spread well beyond software, "Developers" doesn't mean only programmers — it's a simplifying term for whoever is doing the work of turning Backlog items into a usable Increment, whether that's researchers, analysts, scientists, designers, or engineers. If you get value from Scrum by doing this kind of work, you're included under this accountability.</p>`,
        quiz: [
          { question: "Which of these is NOT one of the four things Developers are always accountable for?", options: ["Creating the Sprint Backlog", "Instilling quality via a Definition of Done", "Setting the organization's overall budget", "Holding each other accountable as professionals"], correct: 2, explanation: "Developers are accountable for the Sprint Backlog, quality via the Definition of Done, adapting daily toward the Sprint Goal, and mutual professional accountability — not for organizational budgeting." },
          { question: "Who decides HOW Product Backlog items get turned into an Increment?", options: ["The Product Owner", "The Scrum Master", "The Developers, with no one else directing them", "The stakeholders, by majority vote"], correct: 2, explanation: "The Developers alone decide how to do the work; the Product Owner decides what and in what order." },
          { question: "Why does the Scrum Guide use the word 'Developers' broadly?", options: ["To restrict Scrum to software programmers only", "To simplify language while including anyone doing the work of creating the Increment — researchers, analysts, designers, etc.", "Because only certified developers may join a Scrum Team", "Because the term is a legal requirement of the framework"], correct: 1, explanation: "\"Developers\" is used as a simplifying term, not an exclusionary one — it covers anyone doing the work of building the Increment." },
        ],
      },
      {
        id: "psm1-6",
        title: "The Product Owner",
        duration: "25 min",
        content: `<h2>The Product Owner</h2>
<p>The Product Owner is accountable for maximizing the value of the product resulting from the Scrum Team's work — though exactly how that's done can vary a great deal across organizations, teams, and individuals.</p>
<h3>Product Backlog Management</h3>
<p>The Product Owner is accountable for effective Product Backlog management, which includes:</p>
<ul>
<li>Developing and clearly communicating the Product Goal.</li>
<li>Creating and clearly communicating Product Backlog items.</li>
<li>Ordering Product Backlog items by priority.</li>
<li>Making sure the Product Backlog stays transparent, visible, and understood by everyone who needs it.</li>
</ul>
<p>The Product Owner can do this work personally or delegate parts of it to others — but either way, the accountability itself always stays with the Product Owner.</p>
<h3>One Person, Not a Committee</h3>
<p>The Product Owner is a single person, not a committee. They may represent the needs of many stakeholders inside the Product Backlog, but anyone who wants to change the Backlog's priorities has to do so by convincing the Product Owner — not by going around them.</p>
<h3>Authority Requires Organizational Respect</h3>
<p>For a Product Owner to be effective, the whole organization has to respect their decisions. Those decisions become visible through the content and ordering of the Product Backlog, and through the inspectable Increment shown at each Sprint Review — which is where the real consequences of prioritization choices become concrete.</p>`,
        quiz: [
          { question: "What is the Product Owner ultimately accountable for?", options: ["Writing all the code personally", "Maximizing the value of the product resulting from the Scrum Team's work", "Running the Daily Scrum", "Approving the Definition of Done on behalf of the Developers"], correct: 1, explanation: "The Product Owner is accountable for maximizing product value — not for doing all the work personally." },
          { question: "Can the Product Owner delegate Product Backlog work to others?", options: ["No, it must always be done personally", "Yes, but the accountability for the outcome still remains with the Product Owner", "Yes, and accountability transfers fully to whoever does the work", "No, only the Scrum Master may assist"], correct: 1, explanation: "The Product Owner may delegate the work, but remains accountable regardless of who actually performs it." },
          { question: "How should someone go about changing the priority of a Product Backlog item?", options: ["Escalate directly to the Scrum Master", "Convince the Product Owner, since the Backlog is not a committee decision", "Vote among the Developers", "Change it directly during the Daily Scrum"], correct: 1, explanation: "Since the Product Owner is one person (not a committee), influencing the Backlog means convincing that person." },
        ],
      },
      {
        id: "psm1-7",
        title: "The Scrum Master — Servant Leadership",
        duration: "30 min",
        content: `<h2>The Scrum Master — Servant Leadership</h2>
<p>The Scrum Master is accountable for establishing Scrum as it's defined in the Scrum Guide. They do this primarily by helping everyone — inside the Scrum Team and across the wider organization — understand Scrum theory and practice. The Scrum Master is also accountable for the Scrum Team's overall effectiveness, which they pursue by enabling the team to keep improving its practices, always within the boundaries of the Scrum framework.</p>
<p>Scrum Masters are described as true leaders who <em>serve</em> — both the Scrum Team and the larger organization. This service happens on three levels.</p>
<h3>Serving the Scrum Team</h3>
<ul>
<li>Coaching team members in self-management and cross-functionality.</li>
<li>Helping the team focus on creating high-value Increments that meet the Definition of Done.</li>
<li>Causing the removal of impediments to the team's progress.</li>
<li>Ensuring all Scrum events happen, stay positive and productive, and are kept within their time-box.</li>
</ul>
<h3>Serving the Product Owner</h3>
<ul>
<li>Helping find techniques for effective Product Goal definition and Backlog management.</li>
<li>Helping the team understand the need for clear, concise Backlog items.</li>
<li>Helping establish empirical product planning in a complex environment.</li>
<li>Facilitating stakeholder collaboration when requested or needed.</li>
</ul>
<h3>Serving the Organization</h3>
<ul>
<li>Leading, training, and coaching the wider organization's Scrum adoption.</li>
<li>Planning and advising on Scrum implementations across the organization.</li>
<li>Helping employees and stakeholders understand and apply an empirical approach to complex work.</li>
<li>Removing barriers between stakeholders and Scrum Teams.</li>
</ul>
<h3>What the Scrum Master Is Not</h3>
<p>The Scrum Master has no authority over the Developers' technical decisions and doesn't assign tasks or manage people in the traditional sense — the role leads through service, coaching, and removing obstacles, not through command.</p>`,
        quiz: [
          { question: "What is the Scrum Master primarily accountable for?", options: ["Assigning daily tasks to Developers", "Establishing Scrum as defined in the Scrum Guide and the Scrum Team's effectiveness", "Writing the Product Backlog", "Approving the Increment before release"], correct: 1, explanation: "The Scrum Master is accountable for establishing Scrum correctly and for the team's overall effectiveness — achieved through coaching and enabling, not direct control." },
          { question: "At how many levels does the Scrum Master serve, according to this chapter?", options: ["One — only the Developers", "Two — the team and the Product Owner", "Three — the Scrum Team, the Product Owner, and the organization", "Four — including external stakeholders separately"], correct: 2, explanation: "The Scrum Master serves the Scrum Team, the Product Owner, and the wider organization, each in distinct ways." },
          { question: "Which of these is true of the Scrum Master role?", options: ["They have direct authority to assign work to Developers", "They lead through service and coaching, not command", "They own the Product Backlog", "They are optional in a proper Scrum implementation"], correct: 1, explanation: "The Scrum Master is a servant-leader — they remove impediments and coach, but have no authority over how Developers do their work." },
        ],
      },
      {
        id: "psm1-8",
        title: "Scrum Events — The Sprint",
        duration: "30 min",
        content: `<h2>Scrum Events — The Sprint</h2>
<p>Scrum has five events in total, and the Sprint is the container for the other four. Each event is a formal, scheduled opportunity to inspect and adapt one or more Scrum artifacts — and skipping any of them as prescribed means losing that opportunity. Events exist to create regularity and to reduce the need for extra meetings that Scrum doesn't define. Ideally, they're all held at the same time and place each cycle, to keep things simple.</p>
<h3>Sprints Are the Heartbeat of Scrum</h3>
<p>A Sprint is where ideas actually turn into value. Sprints are fixed-length, one month or less, to create a consistent cadence — and a new Sprint begins immediately once the previous one ends. All the other work needed to reach the Product Goal — Sprint Planning, Daily Scrums, the Sprint Review, and the Sprint Retrospective — happens inside Sprints.</p>
<h3>Rules That Hold During a Sprint</h3>
<ul>
<li>No changes are made that would put the Sprint Goal in danger.</li>
<li>Quality does not decrease, even under pressure.</li>
<li>The Product Backlog is refined as needed, as an ongoing activity.</li>
<li>Scope can be clarified and renegotiated with the Product Owner as the team learns more — without endangering the Sprint Goal itself.</li>
</ul>
<h3>Why One Month or Less?</h3>
<p>Shorter Sprints keep risk contained to a smaller window of cost and effort, and generate more learning cycles overall. If a Sprint's horizon stretches too long, the Sprint Goal risks becoming invalid, complexity tends to rise, and risk increases. Teams can use forecasting techniques like burn-downs or burn-ups to visualize progress, but these are supplements to empiricism, not a replacement for it — in complex work, you can only make forward-looking decisions based on what has actually already happened.</p>
<h3>Cancelling a Sprint</h3>
<p>A Sprint can be cancelled if its Sprint Goal becomes obsolete — but only the Product Owner has the authority to make that call.</p>`,
        quiz: [
          { question: "What is the maximum length of a Sprint?", options: ["Two weeks", "One month", "Three months", "There is no maximum, only a minimum of one week"], correct: 1, explanation: "Sprints are fixed-length events of one month or less, to create a consistent cadence." },
          { question: "Who has the authority to cancel a Sprint?", options: ["Any Developer, by majority vote", "The Scrum Master", "Only the Product Owner", "The organization's senior management"], correct: 2, explanation: "Only the Product Owner has the authority to cancel a Sprint, typically because the Sprint Goal has become obsolete." },
          { question: "During a Sprint, what is explicitly allowed to happen as more is learned?", options: ["The Sprint Goal may be replaced entirely at any time", "Quality standards may be relaxed to hit the deadline", "Scope may be clarified and renegotiated with the Product Owner without endangering the Sprint Goal", "The Sprint length may be extended to fit more work"], correct: 2, explanation: "Scope can be clarified and renegotiated with the Product Owner as understanding improves, as long as the Sprint Goal itself isn't put at risk." },
        ],
      },
      {
        id: "psm1-9",
        title: "Sprint Planning",
        duration: "30 min",
        content: `<h2>Sprint Planning</h2>
<p>Sprint Planning kicks off the Sprint by laying out the work to be done. It's a collaborative effort of the whole Scrum Team, and it's organized around three topics.</p>
<h3>Topic One: Why Is This Sprint Valuable?</h3>
<p>The Product Owner proposes how the product could grow in value and utility during the coming Sprint. The whole Scrum Team then works together to craft a Sprint Goal — a single objective that explains to stakeholders why this Sprint matters. The Sprint Goal must be finalized before Sprint Planning ends.</p>
<h3>Topic Two: What Can Be Done This Sprint?</h3>
<p>Through discussion with the Product Owner, the Developers select the Product Backlog items to bring into the Sprint. The team may refine these items along the way, which builds shared understanding and confidence. Forecasting exactly how much can be completed is genuinely hard — but the more the Developers know about their own past performance, upcoming capacity, and Definition of Done, the more confident their forecast can be.</p>
<h3>Topic Three: How Will the Chosen Work Get Done?</h3>
<p>For each selected item, the Developers plan the work needed to produce an Increment that meets the Definition of Done — usually by breaking items down into smaller pieces of a day or less. Crucially, how this gets done is entirely up to the Developers; no one outside the team dictates it.</p>
<h3>The Result: The Sprint Backlog</h3>
<p>Together, the Sprint Goal (why), the selected Backlog items (what), and the delivery plan (how) make up the Sprint Backlog.</p>
<h3>Time-Box</h3>
<p>Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint — shorter Sprints usually need proportionally less time.</p>`,
        quiz: [
          { question: "What are the three topics addressed during Sprint Planning?", options: ["Budget, Schedule, Risk", "Why is this Sprint valuable? What can be Done? How will it get done?", "Scope, Time, Cost", "Roles, Rituals, Reports"], correct: 1, explanation: "Sprint Planning covers why the Sprint is valuable (Sprint Goal), what can be Done (selected items), and how the work will get done (the plan)." },
          { question: "What must be finalized before Sprint Planning ends?", options: ["The full year's roadmap", "The Sprint Goal", "Every task's exact hour estimate", "The next Sprint's Product Backlog order"], correct: 1, explanation: "The Sprint Goal must be finalized prior to the end of Sprint Planning." },
          { question: "What is the maximum time-box for Sprint Planning in a one-month Sprint?", options: ["Four hours", "Eight hours", "Fifteen minutes", "Three hours"], correct: 1, explanation: "Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint." },
        ],
      },
      {
        id: "psm1-10",
        title: "The Daily Scrum",
        duration: "20 min",
        content: `<h2>The Daily Scrum</h2>
<p>The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as needed, adjusting the upcoming planned work. It's a 15-minute event for the Developers, held at the same time and place every working day of the Sprint to keep things simple.</p>
<h3>Who Attends, and How</h3>
<p>The Daily Scrum is for the Developers. If the Product Owner or Scrum Master are actively doing hands-on work in the Sprint Backlog, they take part as Developers for that purpose — not in their other accountability. Developers are free to choose whatever structure and technique they like, as long as the event stays focused on progress toward the Sprint Goal and results in an actionable plan for the next day's work. This structure creates focus and strengthens self-management.</p>
<h3>What It Achieves</h3>
<p>Daily Scrums improve communication, surface impediments quickly, promote fast decision-making, and — because of all that — reduce the need for other meetings altogether. Importantly, the Daily Scrum isn't the only moment Developers are allowed to adapt their plan; they often have more detailed conversations throughout the day whenever re-planning the rest of the Sprint's work is needed.</p>`,
        quiz: [
          { question: "How long is the Daily Scrum time-boxed to?", options: ["5 minutes", "15 minutes", "30 minutes", "1 hour"], correct: 1, explanation: "The Daily Scrum is a 15-minute event for the Developers." },
          { question: "If the Scrum Master is actively working on Sprint Backlog items, in what capacity do they participate in the Daily Scrum?", options: ["As an observer only, with no speaking role", "As a Developer, for that work", "They may not participate at all", "As the meeting's facilitator with veto power"], correct: 1, explanation: "If the Product Owner or Scrum Master are doing hands-on Sprint Backlog work, they participate as Developers." },
          { question: "Is the Daily Scrum the only time Developers may adapt their plan?", options: ["Yes, all re-planning must wait for the next Daily Scrum", "No — Developers often meet throughout the day for more detailed re-planning as needed", "No, but re-planning may only happen during Sprint Review", "Yes, this is a strict Scrum rule with no exceptions"], correct: 1, explanation: "The Daily Scrum is a formal checkpoint, but Developers can and often do adapt their plan throughout the day as needed." },
        ],
      },
      {
        id: "psm1-11",
        title: "The Sprint Review and the Sprint Retrospective",
        duration: "30 min",
        content: `<h2>The Sprint Review and the Sprint Retrospective</h2>
<h3>Sprint Review — Inspecting the Product</h3>
<p>The Sprint Review's purpose is to inspect the outcome of the Sprint and determine what to adapt going forward. The Scrum Team presents the results of its work to key stakeholders, and progress toward the Product Goal is discussed together. It's meant to be a genuine working session, not a one-way presentation: the Scrum Team and stakeholders review what was accomplished and what has changed in their environment, then collaborate on what to do next, adjusting the Product Backlog to reflect new opportunities. The Sprint Review is the second-to-last event of the Sprint and is time-boxed to a maximum of four hours for a one-month Sprint.</p>
<h3>Sprint Retrospective — Inspecting the Team's Own Way of Working</h3>
<p>The Sprint Retrospective's purpose is to plan ways to increase quality and effectiveness. The Scrum Team looks back at how the last Sprint went with regard to individuals, interactions, processes, tools, and its Definition of Done — the exact elements inspected can vary by domain. The team discusses what went well, what problems came up, and how (or whether) those problems were resolved, tracing any faulty assumptions back to their source. From this, the team identifies the most helpful changes to improve effectiveness, addressing the highest-impact ones as soon as possible — sometimes even adding them directly to the next Sprint's Backlog. The Sprint Retrospective concludes the Sprint, and is time-boxed to a maximum of three hours for a one-month Sprint.</p>
<h3>Why Both Matter</h3>
<p>Together, these two events close the inspect-and-adapt loop for a Sprint: the Review inspects the <em>product</em> and adjusts the plan for the product, while the Retrospective inspects the <em>team's process</em> and adjusts how the team works. Skipping either one means losing a distinct kind of feedback.</p>`,
        quiz: [
          { question: "What does the Sprint Review primarily inspect?", options: ["The team's internal working relationships", "The outcome of the Sprint, with stakeholders, to determine future adaptations", "Each Developer's individual performance", "The organization's annual budget"], correct: 1, explanation: "The Sprint Review inspects the Sprint's outcome with key stakeholders and adapts the Product Backlog as needed." },
          { question: "What is the maximum time-box for the Sprint Retrospective in a one-month Sprint?", options: ["One hour", "Two hours", "Three hours", "Four hours"], correct: 2, explanation: "The Sprint Retrospective is time-boxed to a maximum of three hours for a one-month Sprint." },
          { question: "What is the key difference in focus between the Sprint Review and the Sprint Retrospective?", options: ["There is no difference — they cover identical ground", "The Review inspects the product with stakeholders; the Retrospective inspects the team's own process", "The Review is optional while the Retrospective is mandatory", "The Retrospective happens before the Sprint starts"], correct: 1, explanation: "The Sprint Review inspects the product/outcome with stakeholders; the Sprint Retrospective inspects the team's internal process and effectiveness." },
        ],
      },
      {
        id: "psm1-12",
        title: "Scrum Artifacts (1) — Product Backlog and Sprint Backlog",
        duration: "30 min",
        content: `<h2>Scrum Artifacts (1) — Product Backlog and Sprint Backlog</h2>
<p>Scrum's artifacts represent work or value, and each one is designed to maximize the transparency of key information — so that everyone inspecting it has the same basis for adapting. Each artifact carries a specific <strong>commitment</strong>: a target that gives the artifact focus and lets progress be measured against it.</p>
<h3>Product Backlog → Commitment: the Product Goal</h3>
<p>The Product Backlog is an emergent, ordered list of everything needed to improve the product — the single source of work the Scrum Team draws from. Items become "ready" for a Sprint once the Scrum Team judges they can be Done within one Sprint, usually after refinement — the ongoing activity of breaking items down and adding detail such as description, order, and size.</p>
<p>The Product Backlog's commitment is the <strong>Product Goal</strong>: a description of a future state of the product that the Scrum Team can plan against. It's the long-term objective for the team — they fulfill (or deliberately abandon) one Product Goal before taking on the next. A product itself is simply a vehicle for delivering value; it has a clear boundary, known stakeholders, and well-defined users or customers, and it might be a service, a physical product, or something more abstract.</p>
<h3>Sprint Backlog → Commitment: the Sprint Goal</h3>
<p>The Sprint Backlog is made up of the Sprint Goal (why), the Product Backlog items selected for the Sprint (what), and an actionable delivery plan (how). It's a plan by and for the Developers — a highly visible, real-time picture of what they intend to accomplish, updated continuously as they learn more during the Sprint, with enough detail to support inspection at the Daily Scrum.</p>
<p>Its commitment is the <strong>Sprint Goal</strong> — the single objective for the Sprint. While it's a commitment made by the Developers, it still leaves room for flexibility in exactly what work is needed to achieve it, and it creates coherence: it pulls the whole team toward one shared aim rather than scattering effort across separate initiatives. The Sprint Goal is set during Sprint Planning and then guides the Developers throughout the Sprint; if reality diverges from the plan, they negotiate scope with the Product Owner — without compromising the Sprint Goal itself.</p>`,
        quiz: [
          { question: "What commitment is attached to the Product Backlog?", options: ["The Sprint Goal", "The Definition of Done", "The Product Goal", "The Increment"], correct: 2, explanation: "The Product Goal is the commitment for the Product Backlog — the long-term target the Scrum Team plans against." },
          { question: "Who creates the Sprint Backlog's actionable plan?", options: ["The Product Owner alone", "The Scrum Master", "Stakeholders", "The Developers, for themselves"], correct: 3, explanation: "The Sprint Backlog is a plan by and for the Developers, updated as they learn more during the Sprint." },
          { question: "If work turns out to be harder than expected mid-Sprint, what is the correct response?", options: ["Extend the Sprint length", "Silently drop quality standards", "Negotiate scope with the Product Owner without endangering the Sprint Goal", "Cancel the Sprint immediately"], correct: 2, explanation: "The Sprint Goal provides flexibility on exact scope — Developers renegotiate scope with the Product Owner rather than compromising the goal or quality." },
        ],
      },
      {
        id: "psm1-13",
        title: "Scrum Artifacts (2) — Increment, Definition of Done, and Immutability",
        duration: "30 min",
        content: `<h2>Scrum Artifacts (2) — Increment, Definition of Done, and Immutability</h2>
<h3>Increment → Commitment: the Definition of Done</h3>
<p>An Increment is a concrete stepping stone toward the Product Goal. Each new Increment is additive to every prior one and thoroughly verified, so that all Increments genuinely work together — and to provide real value, an Increment must be usable. Multiple Increments can be created within a single Sprint, and the sum of them is presented at the Sprint Review; importantly, an Increment can also be delivered to stakeholders before the Sprint even ends — the Sprint Review is never meant to be treated as a gate that blocks releasing value.</p>
<p>Work only counts as part of an Increment once it meets the <strong>Definition of Done</strong> — a formal description of the state an Increment must be in to meet the required quality measures for the product. The moment a Product Backlog item meets the Definition of Done, an Increment is born. This shared definition is what creates transparency: everyone has the same understanding of what "finished" actually means. If an item doesn't meet the Definition of Done, it cannot be released or even shown at the Sprint Review — it simply returns to the Product Backlog for future consideration.</p>
<p>If the organization already has a standard Definition of Done, every Scrum Team must follow it at minimum. If there's no organizational standard, the Scrum Team creates one appropriate to the product themselves — and if multiple Scrum Teams are working on the same product, they must agree on and follow one shared Definition of Done together.</p>
<h3>Scrum Is Immutable — and Free</h3>
<p>The Scrum Guide's closing note makes a strong claim: the Scrum framework as defined is immutable. You can choose to implement only parts of it, but the result of doing so is not Scrum — Scrum only exists, and only functions well as a container for other techniques and practices, when used in its entirety. Scrum itself is offered free of charge in the Guide, for anyone to use.</p>`,
        quiz: [
          { question: "What commitment is attached to the Increment?", options: ["The Product Goal", "The Sprint Goal", "The Definition of Done", "The Sprint Backlog"], correct: 2, explanation: "The Increment's commitment is the Definition of Done — the quality bar it must meet to count as an Increment." },
          { question: "What happens to a Product Backlog item that does not meet the Definition of Done?", options: ["It is released anyway with a warning label", "It is shown at the Sprint Review as 'in progress'", "It returns to the Product Backlog for future consideration", "It is automatically marked complete at the Sprint boundary"], correct: 2, explanation: "An item that doesn't meet the Definition of Done cannot be released or presented as done — it goes back to the Product Backlog." },
          { question: "According to the Scrum Guide's End Note, what happens if you implement only parts of Scrum?", options: ["It is still considered full Scrum as long as events are kept", "The result is not Scrum, since the framework is meant to be used in its entirety", "It becomes a certified 'Scrum-lite' variant", "There is no effect, since Scrum has no fixed core"], correct: 1, explanation: "The Scrum Guide states that Scrum's framework is immutable — using only parts of it produces something other than Scrum." },
        ],
      },
      {
        id: "psm1-final-exam",
        title: "Final Exam — PSM I Practice Assessment",
        duration: "60 min",
        isFinalExam: true,
        examDurationMinutes: 60,
        passingScorePercent: 85,
        content: `<h2>Final Exam — PSM I Practice Assessment</h2>
<p>A long, timed practice assessment covering every chapter of this course — Scrum theory, values, the Scrum Team and its accountabilities, all five events, and all three artifacts with their commitments. It's styled after the format of the official PSM I assessment: scenario and definition-based multiple-choice questions, a strict 60-minute time limit, and an <strong>85% passing score</strong>. Your score is shown immediately, with the ability to review anything you missed.</p>
<p style="padding:12px;background:#fff3cd;border:1px solid #ffe69c;border-radius:8px;font-size:14px;">
<strong>Important:</strong> this is independent practice material created for this platform, based on general Scrum knowledge. It is not the official Scrum.org assessment, doesn't reuse Scrum.org's real question bank, and passing it does not grant the official PSM I credential. Only Scrum.org's own proctored exam, taken directly on their platform, can issue that certification.
</p>`,
        quiz: [
          { question: "Scrum is founded on which two ideas?", options: ["Waterfall sequencing and Six Sigma", "Empiricism and lean thinking", "Critical path method and PERT", "Command-and-control and detailed specification"], correct: 1, explanation: "Scrum is founded on empiricism and lean thinking." },
          { question: "Put the three pillars of empiricism in the order each enables the next.", options: ["Inspection, Transparency, Adaptation", "Transparency, Inspection, Adaptation", "Adaptation, Transparency, Inspection", "Transparency, Adaptation, Inspection"], correct: 1, explanation: "Transparency enables inspection, and inspection enables adaptation." },
          { question: "Which of these is one of the five Scrum values?", options: ["Efficiency", "Courage", "Profitability", "Hierarchy"], correct: 1, explanation: "The five Scrum values are Commitment, Focus, Openness, Respect, and Courage." },
          { question: "How many people typically make up a Scrum Team, per the Scrum Guide's general guidance?", options: ["Exactly 5", "Typically 10 or fewer", "Always exactly 7, plus or minus 2", "There is no guidance on size"], correct: 1, explanation: "Scrum Teams are typically 10 or fewer people, small enough to remain nimble." },
          { question: "Who is accountable for maximizing the value of the product?", options: ["The Scrum Master", "The Developers", "The Product Owner", "The stakeholders as a group"], correct: 2, explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the Scrum Team's work." },
          { question: "Who decides HOW selected Product Backlog items will be turned into an Increment?", options: ["The Product Owner", "The Scrum Master", "The Developers alone", "The organization's PMO"], correct: 2, explanation: "The Developers decide how to do the work; no one outside the team dictates their approach." },
          { question: "How does the Scrum Master primarily serve the Scrum Team?", options: ["By assigning tasks to Developers", "By coaching, removing impediments, and facilitating events", "By writing the Product Backlog", "By approving the Sprint Backlog before work begins"], correct: 1, explanation: "The Scrum Master serves through coaching, impediment removal, and facilitation — not by directing the work." },
          { question: "Is the Scrum Master a project manager with authority over the Developers' work choices?", options: ["Yes, with full authority to assign tasks", "No — the Scrum Master is a servant-leader with no such authority", "Yes, but only during Sprint Planning", "No, the Scrum Master has no role during the Sprint at all"], correct: 1, explanation: "The Scrum Master leads through service, not authority. The team is self-managing." },
          { question: "What is the maximum length of a Sprint?", options: ["Two weeks always", "One month", "Three months", "There is no maximum"], correct: 1, explanation: "Sprints are one month or less to keep a consistent, risk-limiting cadence." },
          { question: "Who alone has the authority to cancel a Sprint?", options: ["Any Developer", "The Scrum Master", "The Product Owner", "External stakeholders"], correct: 2, explanation: "Only the Product Owner can cancel a Sprint, typically when the Sprint Goal becomes obsolete." },
          { question: "What happens to incomplete Product Backlog items at the end of a Sprint?", options: ["They automatically extend the Sprint", "They return to the Product Backlog and are reassessed for future Sprints", "They are discarded permanently", "They are marked Done regardless of the Definition of Done"], correct: 1, explanation: "Incomplete items return to the Product Backlog for future consideration; Sprints are not extended to finish them." },
          { question: "During the Sprint, can the Sprint Goal be changed at the Product Owner's whim?", options: ["Yes, at any time for any reason", "No — scope may be clarified/renegotiated as more is learned, but without endangering the Sprint Goal itself", "Yes, but only by the Scrum Master", "No, and scope can never be discussed once the Sprint starts"], correct: 1, explanation: "The Sprint Goal provides focus; scope can be clarified, but changes that would endanger the Sprint Goal are avoided." },
          { question: "What are the three topics of Sprint Planning, in order?", options: ["What, How, Why", "Why is this Sprint valuable? What can be Done? How will it get done?", "Budget, Scope, Schedule", "Backlog, Sprint, Retrospective"], correct: 1, explanation: "Sprint Planning addresses why the Sprint is valuable, what can be Done, and how the chosen work will get done." },
          { question: "What is the maximum time-box for Sprint Planning in a one-month Sprint?", options: ["Four hours", "Eight hours", "Fifteen minutes", "Three hours"], correct: 1, explanation: "Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint." },
          { question: "How long is the Daily Scrum, and who is it for?", options: ["30 minutes, for the whole organization", "15 minutes, for the Developers", "One hour, for the Product Owner only", "5 minutes, for the Scrum Master only"], correct: 1, explanation: "The Daily Scrum is a 15-minute event for the Developers to inspect progress and adapt the Sprint Backlog." },
          { question: "If the Product Owner is doing hands-on Sprint Backlog work, how do they participate in the Daily Scrum?", options: ["They may not participate", "As a Developer, for that work", "As the meeting chair with final say", "Only by written report beforehand"], correct: 1, explanation: "Anyone doing hands-on Sprint Backlog work, including the Product Owner or Scrum Master, participates as a Developer in the Daily Scrum." },
          { question: "What is the primary purpose of the Sprint Review?", options: ["To assign story points for the next Sprint", "To inspect the outcome of the Sprint with stakeholders and determine future adaptations", "To evaluate individual Developer performance", "To finalize the Definition of Done for the first time"], correct: 1, explanation: "The Sprint Review inspects the Sprint's outcome with stakeholders and adapts the Product Backlog if needed." },
          { question: "What is the maximum time-box for the Sprint Review in a one-month Sprint?", options: ["One hour", "Two hours", "Four hours", "Eight hours"], correct: 2, explanation: "The Sprint Review is time-boxed to a maximum of four hours for a one-month Sprint." },
          { question: "What is the primary purpose of the Sprint Retrospective?", options: ["To demo the Increment to stakeholders", "To plan the next Sprint's Backlog items from scratch", "To inspect how the Sprint went and plan ways to increase quality and effectiveness", "To re-estimate the entire Product Backlog"], correct: 2, explanation: "The Sprint Retrospective is where the Scrum Team inspects itself and plans concrete improvements." },
          { question: "What is the maximum time-box for the Sprint Retrospective in a one-month Sprint?", options: ["One hour", "Two hours", "Three hours", "Four hours"], correct: 2, explanation: "The Sprint Retrospective is time-boxed to a maximum of three hours for a one-month Sprint." },
          { question: "How often should Product Backlog refinement happen?", options: ["Only once, at project kickoff", "It is an ongoing activity, not a one-time event", "Only during the Sprint Retrospective", "Never — it is fixed after creation"], correct: 1, explanation: "Refinement is an ongoing activity of breaking down and adding detail to Product Backlog items over time." },
          { question: "What is the commitment associated with the Product Backlog?", options: ["Sprint Goal", "Definition of Done", "Product Goal", "Increment"], correct: 2, explanation: "The Product Goal is the long-term target the Scrum Team plans against, carried by the Product Backlog." },
          { question: "Who owns and creates the Sprint Backlog's delivery plan?", options: ["The Product Owner alone", "The Scrum Master", "Stakeholders as a group", "The Developers, for themselves"], correct: 3, explanation: "The Sprint Backlog is a plan by and for the Developers." },
          { question: "What is the commitment associated with the Increment?", options: ["The Sprint Goal", "The Product Goal", "The Definition of Done", "The Sprint Backlog"], correct: 2, explanation: "The Definition of Done is the quality commitment attached to the Increment." },
          { question: "When is a Product Backlog item considered 'Done'?", options: ["When the Developers feel it is finished", "When it conforms to the team's Definition of Done", "When the Sprint ends, regardless of state", "When the Product Owner likes the visual design"], correct: 1, explanation: "An item is only Done once it conforms to the agreed Definition of Done." },
          { question: "If the organization already has a standard Definition of Done, what must Scrum Teams do?", options: ["Ignore it and create their own", "Follow it as a minimum standard", "Only apply it to the first Sprint", "Apply it only if the Product Owner agrees"], correct: 1, explanation: "If an organizational standard Definition of Done exists, all Scrum Teams must follow it as a minimum." },
          { question: "Can an Increment be released to stakeholders before the Sprint ends?", options: ["No, only at the Sprint Review", "Yes — the Sprint Review is never meant to be a gate blocking the release of value", "No, releases are forbidden mid-Sprint under any circumstance", "Only if the Scrum Master personally approves each release"], correct: 1, explanation: "An Increment may be delivered to stakeholders before the Sprint ends; the Sprint Review should not be treated as a release gate." },
          { question: "According to the Scrum Guide's End Note, is the Scrum framework itself changeable?", options: ["Yes, freely, and it remains 'Scrum' regardless", "No — it is described as immutable; implementing only parts of it means the result is not Scrum", "Only Scrum Masters may modify it", "Only the Product Owner may modify it"], correct: 1, explanation: "The Scrum Guide states the framework is immutable — using only parts of it is not Scrum." },
          { question: "What best describes a self-managing Scrum Team?", options: ["A team managed entirely by the Scrum Master", "A team that decides internally who does what, when, and how", "A team without a Product Owner", "A team that reports daily to a project manager"], correct: 1, explanation: "Self-managing teams choose who does what, when, and how — internally, without outside direction." },
          { question: "Which practices does Scrum itself define in detail?", options: ["Estimation techniques and specific engineering practices", "Only the minimum roles, events, and artifacts needed for empirical process control", "Detailed HR policies for team members", "Exact software tools every team must use"], correct: 1, explanation: "Scrum deliberately leaves specific practices, techniques, and tools to the people using it." },
          { question: "What happens to transparency if an artifact is not genuinely visible to those who need it?", options: ["Nothing — Scrum events compensate automatically", "Decisions made from it can diminish value and increase risk", "It only affects the Scrum Master's own understanding", "It has no impact as long as the Increment ships on time"], correct: 1, explanation: "Low transparency in an artifact leads to decisions based on a false picture, which can diminish value and increase risk." },
          { question: "What is required for adaptation to actually happen effectively?", options: ["A dedicated change-management department", "People who are empowered and self-managing", "A quarterly steering committee review", "Formal sign-off from every stakeholder"], correct: 1, explanation: "Adaptation becomes much harder when people involved are not empowered or self-managing." },
          { question: "What does the Sprint Goal provide to the Scrum Team during the Sprint?", options: ["A rigid, unchangeable task list", "Coherence and focus, while leaving flexibility in exact scope", "A guaranteed deadline extension if missed", "Permission to skip the Daily Scrum"], correct: 1, explanation: "The Sprint Goal creates coherence and focus for the team while allowing flexibility in the exact work needed to achieve it." },
          { question: "Which accountability is responsible for ordering the Product Backlog?", options: ["The Developers", "The Scrum Master", "The Product Owner", "Whichever stakeholder shouts loudest"], correct: 2, explanation: "Ordering Product Backlog items is one of the Product Owner's core accountabilities." },
          { question: "What is one way the Scrum Master serves the organization (not just the team)?", options: ["Approving the annual company budget", "Leading, training, and coaching the organization's Scrum adoption", "Hiring and firing Developers", "Negotiating vendor contracts"], correct: 1, explanation: "At the organizational level, the Scrum Master leads, trains, and coaches broader Scrum adoption." },
          { question: "Which of the following is an example of the value of 'Courage' in practice?", options: ["Avoiding difficult conversations to keep the peace", "Taking on a tough technical problem and being honest about a mistake", "Following every instruction from management without question", "Working overtime silently instead of raising a concern"], correct: 1, explanation: "Courage means having the nerve to do the right thing and tackle hard problems — not avoiding them." },
          { question: "What is the relationship between a product and the Product Goal?", options: ["They are the same thing", "The Product Goal describes a future state of the product the team plans toward", "The Product Goal is set once and never changes for the life of the product", "The Product Goal is owned by the Scrum Master"], correct: 1, explanation: "The Product Goal is a target future state of the product, living inside the Product Backlog, that the Scrum Team plans against." },
          { question: "According to Scrum theory, what should forward-looking decisions in complex work be based on?", options: ["Detailed long-range forecasts made at project start", "What has already happened, observed through inspection", "Industry benchmarks alone", "Gut instinct of senior leadership"], correct: 1, explanation: "In complex environments, only what has already happened can reliably inform forward-looking decisions — this is empiricism in practice." },
          { question: "What is one consequence of the Scrum Team being cross-functional?", options: ["Every member must know how to do every task equally well", "The team collectively holds all the skills needed to create value each Sprint", "The team no longer needs a Product Owner", "The team can skip the Definition of Done"], correct: 1, explanation: "Cross-functional means the team collectively has all necessary skills — not that every individual is equally skilled at everything." },
        ],
      },
    ],
  },
  {
    id: "course-icp-fun",
    slug: "icp-fun-agile-fundamentals",
    order: 5,
    visibility: "admin",
    certTrack: "ICAgile ICP-FUN — Prep (unofficial)",
    language: "bilingual",
    titleFr: "Fondamentaux Agiles (ICP-FUN) — Préparation",
    subtitleFr: "L'état d'esprit agile, le Manifeste, et les cadres courants",
    descriptionFr:
      "Cours personnel bilingue couvrant les fondamentaux évalués dans le parcours ICAgile ICP-FUN : Manifeste Agile, valeurs et principes, rôles et cadences, Scrum, Kanban et XP, livraison itérative et incrémentale, et un examen final chronométré. Préparation indépendante — non affiliée à ICAgile.",
    title: "Agile Fundamentals (ICP-FUN) — Prep",
    subtitle: "The agile mindset, the Manifesto, and common frameworks",
    description:
      "Bilingual personal course covering the fundamentals assessed in the ICAgile ICP-FUN track: the Agile Manifesto, values and principles, roles and cadences, Scrum, Kanban and XP, iterative and incremental delivery, and a timed final exam. Independent prep — not affiliated with ICAgile.",
    longDescription:
      "This course covers the foundations of agile thinking as addressed in a typical ICP-FUN track: the history and the Agile Manifesto, its 4 values and 12 principles, common roles and cadences, an overview of Scrum, Kanban, and XP, and the principle of iterative and incremental delivery. Every chapter ends with a mastery quiz, and the course closes with a timed final exam with an 80% passing threshold. Note: this is independent self-study content. It is not produced, endorsed, or issued by ICAgile, and passing it does not grant the official ICP-FUN badge — only a course taken with an ICAgile-accredited trainer can issue that certification.",
    color: "#2d6a4f",
    icon: "compass",
    chapters: [
      {
        id: "icpfun-1",
        title: "Where Agility Comes From — Context and History",
        duration: "35 min",
        content: `<h2>Where Agility Comes From — Context and History</h2>
<p>In the 1990s, many software teams found that sequential, heavily-documented approaches (waterfall-style) tended to deliver late, over budget, and with products that no longer matched the real need by the time they shipped. Several lightweight movements emerged in response: Scrum, XP (Extreme Programming), DSDM, Crystal, FDD, and others.</p>
<h3>The Agile Manifesto (2001)</h3>
<p>In February 2001, seventeen practitioners met in Utah and wrote the <em>Manifesto for Agile Software Development</em>. This short document formalized a set of values and principles shared across these different lightweight approaches, without forcing everyone onto a single method.</p>
<h3>A Shift in Posture, Not Just Method</h3>
<p>Agility isn't primarily a set of practices (daily stand-ups, iterations, a Kanban board) — it's primarily a shift in posture: accepting uncertainty, learning through short cycles, and continuously adjusting based on real feedback rather than the initial plan. Practices are tools in service of that posture, not an end in themselves.</p>`,
        contentFr: `<h2>D'où vient l'agilité — contexte et historique</h2>
<p>Dans les années 1990, de nombreuses équipes de développement logiciel constataient que les approches séquentielles et fortement documentées (type cascade) livraient souvent tard, hors budget, et avec des produits qui ne répondaient plus au besoin réel une fois livrés. Plusieurs mouvements légers sont nés en réaction : Scrum, XP (Extreme Programming), DSDM, Crystal, FDD, et d'autres.</p>
<h3>Le Manifeste Agile (2001)</h3>
<p>En février 2001, dix-sept praticiens se sont réunis dans l'Utah et ont rédigé le <em>Manifeste pour le développement Agile de logiciels</em>. Ce court texte a formalisé un ensemble de valeurs et de principes partagés par ces différentes approches légères, sans imposer une méthode unique.</p>
<h3>Un changement de posture, pas seulement de méthode</h3>
<p>L'agilité n'est pas d'abord un ensemble de pratiques (daily stand-up, itérations, tableau Kanban) — c'est d'abord un changement de posture : accepter l'incertitude, apprendre par cycles courts, et ajuster continuellement en fonction du retour réel plutôt que du plan initial. Les pratiques sont des outils au service de cette posture, pas une fin en soi.</p>`,
        quiz: [
          { question: "In what year was the Agile Manifesto written?", options: ["1995", "2001", "2008", "2010"], correct: 1, explanation: "The Agile Manifesto was written in February 2001 by seventeen practitioners meeting in Utah." },
          { question: "What problem were agile approaches trying to solve?", options: ["A lack of computing tools", "Late deliveries and products that no longer matched the real need", "Projects being too cheap", "A lack of contractual documentation"], correct: 1, explanation: "Sequential approaches often delivered late, over budget, with products disconnected from the real need at delivery time." },
          { question: "Agility is primarily:", options: ["A fixed set of mandatory practices", "A shift in posture toward uncertainty and continuous learning", "A mandatory certification for developers", "A single method replacing all others"], correct: 1, explanation: "Agility is primarily a posture — practices (stand-ups, iterations, etc.) are tools in service of that posture." },
        ],
        quizFr: [
          { question: "En quelle année le Manifeste Agile a-t-il été rédigé ?", options: ["1995", "2001", "2008", "2010"], correct: 1, explanation: "Le Manifeste Agile a été rédigé en février 2001 par dix-sept praticiens réunis dans l'Utah." },
          { question: "Quel problème les approches agiles cherchaient-elles à résoudre ?", options: ["Le manque d'outils informatiques", "Les livraisons tardives et les produits ne répondant plus au besoin réel", "Le coût trop faible des projets", "L'absence de documentation contractuelle"], correct: 1, explanation: "Les approches séquentielles livraient souvent tard, hors budget, avec des produits déconnectés du besoin réel au moment de la livraison." },
          { question: "L'agilité est avant tout :", options: ["Un ensemble fixe de pratiques obligatoires", "Un changement de posture face à l'incertitude et à l'apprentissage continu", "Une certification obligatoire pour les développeurs", "Une méthode unique remplaçant toutes les autres"], correct: 1, explanation: "L'agilité est d'abord une posture — les pratiques (stand-up, itérations, etc.) sont des outils au service de cette posture." },
        ],
      },
      {
        id: "icpfun-2",
        title: "The 4 Values and 12 Principles of the Manifesto",
        duration: "40 min",
        content: `<h2>The 4 Values and 12 Principles of the Manifesto</h2>
<h3>The Four Values</h3>
<ul>
<li>Individuals and interactions <strong>over</strong> processes and tools</li>
<li>Working software <strong>over</strong> comprehensive documentation</li>
<li>Customer collaboration <strong>over</strong> contract negotiation</li>
<li>Responding to change <strong>over</strong> following a plan</li>
</ul>
<p>The Manifesto is explicit that the items on the right still have value — but the items on the left are valued more.</p>
<h3>Key Principles (Selection)</h3>
<ul>
<li>The highest priority is satisfying the customer through early and continuous delivery of value.</li>
<li>Welcome changing requirements, even late in the effort.</li>
<li>Deliver working software frequently, with a preference for shorter timescales.</li>
<li>Business people and developers must work together daily.</li>
<li>Build projects around motivated people, giving them the environment and support they need, and trusting them.</li>
<li>Simplicity — the art of maximizing the amount of work not done — is essential.</li>
<li>At regular intervals, the team reflects on how to become more effective, then adjusts its behavior.</li>
</ul>`,
        contentFr: `<h2>Les 4 valeurs et les 12 principes du Manifeste</h2>
<h3>Les quatre valeurs</h3>
<ul>
<li>Les individus et leurs interactions <strong>plus que</strong> les processus et les outils</li>
<li>Un logiciel fonctionnel <strong>plus que</strong> une documentation exhaustive</li>
<li>La collaboration avec les clients <strong>plus que</strong> la négociation contractuelle</li>
<li>L'adaptation au changement <strong>plus que</strong> le suivi d'un plan</li>
</ul>
<p>Le Manifeste précise que les éléments de droite gardent de la valeur — mais ceux de gauche sont valorisés davantage.</p>
<h3>Principes clés (sélection)</h3>
<ul>
<li>La plus haute priorité est de satisfaire le client par des livraisons précoces et continues de valeur.</li>
<li>Accueillir favorablement les changements de besoins, même tard dans le projet.</li>
<li>Livrer fréquemment un logiciel fonctionnel, de préférence avec une préférence pour les cycles courts.</li>
<li>Les personnes métier et les développeurs doivent collaborer quotidiennement.</li>
<li>Construire des projets autour de personnes motivées, en leur donnant l'environnement et le soutien nécessaires, et en leur faisant confiance.</li>
<li>La simplicité — l'art de maximiser la quantité de travail non fait — est essentielle.</li>
<li>À intervalles réguliers, l'équipe réfléchit aux moyens de devenir plus efficace, puis ajuste son comportement.</li>
</ul>`,
        quiz: [
          { question: "According to the Manifesto, what is valued more than following a plan?", options: ["Strict budget adherence", "Responding to change", "Comprehensive documentation", "Contract negotiation"], correct: 1, explanation: "One of the four values is: \"Responding to change over following a plan.\"" },
          { question: "Does the Manifesto claim the items on the right (process, documentation, contracts, plan) have no value at all?", options: ["Yes, they are useless", "No, they still have value, but the items on the left are valued more", "Yes, they must be eliminated entirely", "The Manifesto doesn't address this"], correct: 1, explanation: "The Manifesto explicitly states the right-hand items retain value, even though priority goes to the left-hand items." },
          { question: "What does the principle of simplicity mean according to the Manifesto?", options: ["Using as few tools as possible", "The art of maximizing the amount of work not done", "Reducing the size of the team", "Avoiding all documentation"], correct: 1, explanation: "Simplicity is defined in the Manifesto as 'the art of maximizing the amount of work not done.'" },
        ],
        quizFr: [
          { question: "Selon le Manifeste, que valorise-t-on davantage que le suivi d'un plan ?", options: ["Le respect strict du budget", "L'adaptation au changement", "La documentation exhaustive", "La négociation contractuelle"], correct: 1, explanation: "L'une des quatre valeurs est : 'L'adaptation au changement plus que le suivi d'un plan.'" },
          { question: "Le Manifeste affirme-t-il que les éléments de droite (processus, documentation, contrats, plan) n'ont aucune valeur ?", options: ["Oui, ils sont inutiles", "Non, ils gardent de la valeur, mais les éléments de gauche sont valorisés davantage", "Oui, ils doivent être supprimés systématiquement", "Le Manifeste ne mentionne pas cette nuance"], correct: 1, explanation: "Le Manifeste précise explicitement que les éléments de droite gardent de la valeur, même si la priorité va aux éléments de gauche." },
          { question: "Que signifie le principe de simplicité selon le Manifeste ?", options: ["Utiliser le moins d'outils possible", "L'art de maximiser la quantité de travail non fait", "Réduire la taille de l'équipe", "Éviter toute documentation"], correct: 1, explanation: "La simplicité est définie dans le Manifeste comme 'l'art de maximiser la quantité de travail non fait'." },
        ],
      },
      {
        id: "icpfun-3",
        title: "Overview of Scrum",
        duration: "35 min",
        content: `<h2>Overview of Scrum</h2>
<p>Scrum is the most widely used agile framework. It organizes work into Sprints — short, regular cycles (often 1 to 4 weeks) — with three roles (Product Owner, Scrum Master, Developers), five events (the Sprint, Planning, Daily Scrum, Review, Retrospective), and three artifacts (Product Backlog, Sprint Backlog, Increment).</p>
<h3>The Central Idea</h3>
<p>Rather than planning everything in detail upfront, Scrum organizes a short learning cycle: plan a small slice of value, build it, inspect it with stakeholders, then adjust. This empirical cycle catches wrong turns quickly instead of discovering them at the very end of a project.</p>
<h3>What Scrum Doesn't Dictate</h3>
<p>Scrum doesn't say how to estimate, how to design the architecture, or which tools to use — those technical and practical decisions belong to the team. Scrum provides the minimal structure; everything else is the team's responsibility.</p>`,
        contentFr: `<h2>Vue d'ensemble de Scrum</h2>
<p>Scrum est le cadre agile le plus utilisé. Il organise le travail en Sprints — des cycles courts et réguliers (souvent 1 à 4 semaines) — avec trois rôles (Product Owner, Scrum Master, Développeurs), cinq événements (Sprint, Planification, Daily Scrum, Revue, Rétrospective) et trois artefacts (Product Backlog, Sprint Backlog, Incrément).</p>
<h3>L'idée centrale</h3>
<p>Plutôt que de tout planifier à l'avance dans le détail, Scrum organise un cycle court d'apprentissage : planifier un petit morceau de valeur, le construire, l'inspecter avec les parties prenantes, puis ajuster. Ce cycle empirique permet de détecter rapidement les erreurs de direction plutôt que de les découvrir en fin de projet.</p>
<h3>Ce que Scrum ne dicte pas</h3>
<p>Scrum ne dit pas comment estimer, comment concevoir l'architecture, ou quels outils utiliser — ces décisions techniques et pratiques reviennent à l'équipe. Scrum fournit la structure minimale ; le reste est de la responsabilité de l'équipe.</p>`,
        quiz: [
          { question: "How many roles (accountabilities) does Scrum define?", options: ["1", "2", "3", "5"], correct: 2, explanation: "Scrum defines three accountabilities: Product Owner, Scrum Master, and Developers." },
          { question: "What is the main goal of Scrum's short cycle?", options: ["To eliminate meetings entirely", "To enable fast learning and frequent adaptation", "To eliminate all planning", "To guarantee a fixed plan for the whole project"], correct: 1, explanation: "The short cycle allows frequent inspection of the work and quick adaptation — the heart of the empirical approach." },
          { question: "What does the Scrum framework NOT dictate?", options: ["The number of roles", "Which estimation or architecture techniques to use", "The existence of a Sprint", "The existence of a Product Backlog"], correct: 1, explanation: "Scrum leaves technical decisions (estimation, architecture, tools) to the team's responsibility." },
        ],
        quizFr: [
          { question: "Combien de rôles (accountabilities) définit Scrum ?", options: ["1", "2", "3", "5"], correct: 2, explanation: "Scrum définit trois rôles : Product Owner, Scrum Master, et Développeurs." },
          { question: "Quel est l'objectif principal du cycle court en Scrum ?", options: ["Réduire le nombre de réunions à zéro", "Permettre un apprentissage rapide et une adaptation fréquente", "Éliminer toute planification", "Garantir un plan figé sur toute la durée du projet"], correct: 1, explanation: "Le cycle court permet d'inspecter fréquemment le travail et de s'adapter rapidement — c'est le cœur de l'approche empirique." },
          { question: "Que ne dicte PAS le cadre Scrum ?", options: ["Le nombre de rôles", "Les techniques d'estimation ou d'architecture à utiliser", "L'existence d'un Sprint", "L'existence d'un Product Backlog"], correct: 1, explanation: "Scrum laisse les décisions techniques (estimation, architecture, outils) à la responsabilité de l'équipe." },
        ],
      },
      {
        id: "icpfun-4",
        title: "Overview of Kanban and Extreme Programming (XP)",
        duration: "38 min",
        content: `<h2>Overview of Kanban and Extreme Programming (XP)</h2>
<h3>Kanban</h3>
<p>Kanban is a flow-management method rather than a framework built around fixed iterations. Its key principles include: visualizing the work (often via a column-based board), limiting work in progress (WIP), managing flow, making policies explicit, building feedback loops, and improving collectively through experimentation. Kanban can be introduced gradually onto an existing process, without necessarily changing existing roles.</p>
<h3>Extreme Programming (XP)</h3>
<p>XP focuses on the technical engineering practices that support agility: pair programming, test-driven development (TDD), continuous integration, refactoring, simple design, and a sustainable pace. XP shares the Manifesto's values but places particular emphasis on technical quality as the condition for being able to change direction quickly.</p>
<h3>Complementary, Not Competing</h3>
<p>Many teams combine elements: Scrum's event structure, Kanban's flow visualization, and XP's engineering practices. There's no obligation to apply a single "pure" framework — what matters is fit with the team's own context.</p>`,
        contentFr: `<h2>Vue d'ensemble de Kanban et d'Extreme Programming (XP)</h2>
<h3>Kanban</h3>
<p>Kanban est une méthode de gestion de flux, plutôt qu'un cadre basé sur des itérations fixes. Ses principes clés incluent : visualiser le travail (souvent via un tableau à colonnes), limiter le travail en cours (WIP), gérer le flux, rendre les politiques explicites, mettre en place des boucles de rétroaction, et améliorer collectivement en expérimentant. Kanban peut être introduit progressivement sur un processus existant, sans nécessairement changer les rôles en place.</p>
<h3>Extreme Programming (XP)</h3>
<p>XP se concentre sur les pratiques techniques d'ingénierie logicielle au service de l'agilité : programmation en binôme (pair programming), développement piloté par les tests (TDD), intégration continue, refactoring, conception simple, et rythme soutenable. XP partage les valeurs du Manifeste mais insiste particulièrement sur la qualité technique comme condition de la capacité à changer rapidement de direction.</p>
<h3>Complémentarité, pas opposition</h3>
<p>De nombreuses équipes combinent des éléments : la structure d'événements de Scrum, la visualisation du flux de Kanban, et les pratiques d'ingénierie de XP. Il n'y a pas d'obligation d'appliquer un seul cadre « pur » — l'important reste l'adéquation avec le contexte de l'équipe.</p>`,
        quiz: [
          { question: "What is a central principle of Kanban?", options: ["Mandatory two-week Sprints", "Limiting work in progress (WIP)", "The complete absence of a visual board", "Replacing the Product Owner"], correct: 1, explanation: "Limiting work in progress (WIP) is one of Kanban's central principles, along with visualizing flow." },
          { question: "Which practice is typically associated with XP (Extreme Programming)?", options: ["The Kanban board", "Test-driven development (TDD)", "The Sprint Retrospective", "The Sprint Backlog"], correct: 1, explanation: "TDD, pair programming, and continuous integration are engineering practices characteristic of XP." },
          { question: "Can elements of Scrum, Kanban, and XP be combined within the same team?", options: ["No, these approaches are strictly incompatible", "Yes, many teams combine elements depending on their context", "Only if an external consultant authorizes it", "No, this always violates the Agile Manifesto"], correct: 1, explanation: "These approaches aren't mutually exclusive; many teams combine complementary elements." },
        ],
        quizFr: [
          { question: "Quel est un principe central de Kanban ?", options: ["Des Sprints obligatoires de deux semaines", "Limiter le travail en cours (WIP)", "L'absence totale de tableau visuel", "Le remplacement du Product Owner"], correct: 1, explanation: "Limiter le travail en cours (WIP) est l'un des principes centraux de Kanban, avec la visualisation du flux." },
          { question: "Quelle pratique est typiquement associée à XP (Extreme Programming) ?", options: ["Le tableau Kanban", "Le développement piloté par les tests (TDD)", "La rétrospective de Sprint", "Le Sprint Backlog"], correct: 1, explanation: "TDD, le pair programming et l'intégration continue sont des pratiques techniques caractéristiques d'XP." },
          { question: "Peut-on combiner des éléments de Scrum, Kanban et XP au sein d'une même équipe ?", options: ["Non, ce sont des approches strictement incompatibles", "Oui, de nombreuses équipes combinent des éléments selon leur contexte", "Seulement si un consultant externe l'autorise", "Non, cela viole toujours le Manifeste Agile"], correct: 1, explanation: "Ces approches ne s'excluent pas mutuellement ; beaucoup d'équipes combinent des éléments complémentaires." },
        ],
      },
      {
        id: "icpfun-5",
        title: "Delivering Value Iteratively and Incrementally",
        duration: "30 min",
        content: `<h2>Delivering Value Iteratively and Incrementally</h2>
<p>Two ideas sit underneath almost every agile framework: <strong>iterative</strong> and <strong>incremental</strong> delivery. They're related but distinct, and worth telling apart clearly.</p>
<h3>Incremental: Building Piece by Piece</h3>
<p>An incremental approach delivers a product in usable pieces over time — each piece adds to what came before, so the product grows feature by feature. Think of building a house room by room, each one fully finished before moving to the next.</p>
<h3>Iterative: Refining Through Repeated Passes</h3>
<p>An iterative approach delivers something rough for the whole scope early, then improves it in repeated passes based on feedback. Think of sculpting: a rough shape emerges first, then details are refined pass after pass.</p>
<h3>Agile Frameworks Combine Both</h3>
<p>Scrum, for example, is both: each Sprint produces an Increment (incremental), and the product itself evolves iteratively as feedback from each Sprint Review reshapes what comes next. This combination is what allows early, frequent delivery of real value instead of one large delivery at the very end — reducing risk, because problems and misunderstandings surface early, while there's still time and budget to correct course.</p>
<h3>Why This Matters for the Certification</h3>
<p>Being able to distinguish "iterative" from "incremental" — and to explain why combining both reduces risk compared to a single big-bang delivery — is a foundational, frequently tested agile fundamental.</p>`,
        contentFr: `<h2>Livrer la valeur de façon itérative et incrémentale</h2>
<p>Deux idées se trouvent à la base de presque tous les cadres agiles : la livraison <strong>incrémentale</strong> et la livraison <strong>itérative</strong>. Elles sont liées mais distinctes, et il vaut la peine de bien les différencier.</p>
<h3>Incrémental : construire morceau par morceau</h3>
<p>Une approche incrémentale livre un produit par morceaux utilisables au fil du temps — chaque morceau s'ajoute à ce qui précède, si bien que le produit grandit fonctionnalité par fonctionnalité. C'est comme construire une maison pièce par pièce, chacune entièrement terminée avant de passer à la suivante.</p>
<h3>Itératif : affiner par passages successifs</h3>
<p>Une approche itérative livre d'abord une version grossière de l'ensemble du périmètre, puis l'améliore par passages successifs à partir des retours reçus. C'est comme sculpter : une forme grossière apparaît d'abord, puis les détails sont affinés passage après passage.</p>
<h3>Les cadres agiles combinent les deux</h3>
<p>Scrum, par exemple, combine les deux approches : chaque Sprint produit un Incrément (aspect incrémental), et le produit lui-même évolue de façon itérative à mesure que les retours de chaque Revue de Sprint façonnent la suite. Cette combinaison permet une livraison précoce et fréquente de valeur réelle, plutôt qu'une seule grande livraison à la toute fin — ce qui réduit le risque, car les problèmes et malentendus apparaissent tôt, pendant qu'il reste encore du temps et du budget pour corriger le tir.</p>
<h3>Pourquoi c'est important pour la certification</h3>
<p>Savoir distinguer « itératif » d'« incrémental » — et expliquer pourquoi combiner les deux réduit le risque par rapport à une livraison unique en fin de projet — est un fondamental agile de base, fréquemment évalué.</p>`,
        quiz: [
          { question: "What best describes an incremental approach?", options: ["Delivering a rough version of the whole scope, then refining it repeatedly", "Building a product in usable pieces that add up over time", "Delivering only at the very end of the project", "Skipping feedback entirely"], correct: 1, explanation: "Incremental delivery builds the product piece by piece, each piece adding to what came before." },
          { question: "What best describes an iterative approach?", options: ["Building one feature completely before starting the next", "Delivering a rough version of the whole scope early, then refining it through repeated passes", "Delivering the full, finished product only once", "Ignoring stakeholder feedback until the end"], correct: 1, explanation: "Iterative delivery starts with something rough covering the whole scope, then refines it pass after pass based on feedback." },
          { question: "Why does combining iterative and incremental delivery reduce risk?", options: ["It removes the need for any planning", "Problems and misunderstandings surface early, while there is still time and budget to correct course", "It guarantees the product will never change", "It eliminates the need for stakeholder feedback"], correct: 1, explanation: "Frequent, early delivery of real value surfaces problems while there's still room to adjust, unlike one big delivery at the end." },
        ],
        quizFr: [
          { question: "Qu'est-ce qui décrit le mieux une approche incrémentale ?", options: ["Livrer une version grossière de tout le périmètre, puis l'affiner à répétition", "Construire un produit par morceaux utilisables qui s'additionnent au fil du temps", "Livrer uniquement à la toute fin du projet", "Ignorer complètement les retours"], correct: 1, explanation: "La livraison incrémentale construit le produit morceau par morceau, chaque morceau s'ajoutant à ce qui précède." },
          { question: "Qu'est-ce qui décrit le mieux une approche itérative ?", options: ["Terminer complètement une fonctionnalité avant de commencer la suivante", "Livrer tôt une version grossière de tout le périmètre, puis l'affiner par passages successifs", "Livrer le produit final complet une seule fois", "Ignorer les retours des parties prenantes jusqu'à la fin"], correct: 1, explanation: "La livraison itérative part d'une version grossière de l'ensemble, puis l'affine passage après passage à partir des retours." },
          { question: "Pourquoi combiner livraison itérative et incrémentale réduit-il le risque ?", options: ["Cela supprime le besoin de toute planification", "Les problèmes et malentendus apparaissent tôt, pendant qu'il reste du temps et du budget pour corriger le tir", "Cela garantit que le produit ne changera jamais", "Cela élimine le besoin de retours des parties prenantes"], correct: 1, explanation: "Une livraison fréquente et précoce de valeur réelle fait apparaître les problèmes tôt, contrairement à une seule grande livraison finale." },
        ],
      },
      {
        id: "icpfun-final-exam",
        title: "Final Exam — ICP-FUN Practice Assessment",
        duration: "50 min",
        isFinalExam: true,
        examDurationMinutes: 50,
        passingScorePercent: 80,
        content: `<h2>Final Exam — ICP-FUN Practice Assessment</h2>
<p>A timed exam covering the whole course, with an <strong>80%</strong> passing threshold. Your score is shown immediately.</p>
<p style="padding:12px;background:#fff3cd;border:1px solid #ffe69c;border-radius:8px;font-size:14px;">
<strong>Important:</strong> this content is independent practice material created for this platform. It is neither issued nor endorsed by ICAgile. The official ICP-FUN badge can only be earned by taking a course delivered by an ICAgile-accredited trainer.
</p>`,
        contentFr: `<h2>Examen final — Évaluation ICP-FUN d'entraînement</h2>
<p>Examen chronométré couvrant l'ensemble du cours, avec un seuil de réussite de <strong>80 %</strong>. Le score s'affiche immédiatement.</p>
<p style="padding:12px;background:#fff3cd;border:1px solid #ffe69c;border-radius:8px;font-size:14px;">
<strong>Important :</strong> ce contenu est un entraînement indépendant créé pour cette plateforme. Il n'est ni délivré ni approuvé par ICAgile. Le badge officiel ICP-FUN ne peut être obtenu qu'en suivant un cours dispensé par un formateur accrédité ICAgile.
</p>`,
        quiz: [
          { question: "The Agile Manifesto was written by:", options: ["A single person, in 1990", "Seventeen practitioners, in 2001", "An international standards committee", "Scrum.org"], correct: 1, explanation: "Seventeen practitioners wrote the Agile Manifesto in February 2001." },
          { question: "Which of these matches one of the Manifesto's four values?", options: ["Processes over individuals", "Comprehensive documentation over working software", "Responding to change over following a plan", "Contract negotiation over customer collaboration"], correct: 2, explanation: "This is one of the four official values of the Agile Manifesto." },
          { question: "Which agile framework emphasizes limiting work in progress and visualizing flow?", options: ["Scrum", "Kanban", "XP", "PRINCE2"], correct: 1, explanation: "Kanban focuses on flow management, with visualization and WIP limits." },
          { question: "How many events does the Scrum framework define?", options: ["3", "4", "5", "7"], correct: 2, explanation: "Scrum defines five events: the Sprint, Planning, Daily Scrum, Review, and Retrospective." },
          { question: "Which technical practice is typical of Extreme Programming?", options: ["Pair programming", "The Kanban board", "The Sprint Goal", "The Product Backlog"], correct: 0, explanation: "Pair programming is a practice characteristic of XP." },
          { question: "One of the twelve agile principles concerns delivery frequency. Which one?", options: ["Deliver only once, at the very end of the project", "Deliver working software frequently, with a preference for shorter timescales", "Deliver only on customer demand", "Deliver only after complete documentation"], correct: 1, explanation: "The Manifesto recommends frequent delivery, with a preference for shorter cycles." },
          { question: "What is the main criticism of sequential (waterfall-style) approaches that motivated the agile movement?", options: ["They were too fast", "They often delivered late, over budget, with products disconnected from the real need", "They produced no documentation at all", "They were too poorly documented"], correct: 1, explanation: "Waterfall approaches often delivered late, with a product that no longer matched the need by delivery time." },
          { question: "In Kanban, what does 'limiting WIP' mean?", options: ["Limiting the number of team members", "Limiting the amount of work in progress at the same time", "Limiting the project budget", "Limiting meeting length"], correct: 1, explanation: "WIP means 'Work In Progress' — limiting work in progress improves flow and reduces multitasking." },
          { question: "What best distinguishes an incremental approach from an iterative one?", options: ["There is no real difference between them", "Incremental builds piece by piece; iterative refines the whole scope through repeated passes", "Incremental only applies to Kanban; iterative only applies to Scrum", "Incremental means no feedback is used at all"], correct: 1, explanation: "Incremental delivery adds usable pieces over time; iterative delivery starts rough and refines through repeated passes." },
          { question: "Why does combining iterative and incremental delivery reduce project risk?", options: ["It removes the need for any stakeholder involvement", "It surfaces problems and misunderstandings early, while there's still time to correct course", "It guarantees a fixed, unchangeable scope", "It eliminates the need for a Product Backlog"], correct: 1, explanation: "Frequent early delivery of real value surfaces issues while there's still room to adjust, unlike a single big delivery at project end." },
        ],
        quizFr: [
          { question: "Le Manifeste Agile a été rédigé par :", options: ["Une seule personne, en 1990", "Dix-sept praticiens, en 2001", "Un comité international de normalisation", "Scrum.org"], correct: 1, explanation: "Dix-sept praticiens ont rédigé le Manifeste Agile en février 2001." },
          { question: "Laquelle de ces affirmations correspond aux quatre valeurs du Manifeste ?", options: ["Les processus plus que les individus", "La documentation exhaustive plus que le logiciel fonctionnel", "L'adaptation au changement plus que le suivi d'un plan", "La négociation contractuelle plus que la collaboration client"], correct: 2, explanation: "C'est l'une des quatre valeurs officielles du Manifeste Agile." },
          { question: "Quel cadre agile met l'accent sur la limitation du travail en cours et la visualisation du flux ?", options: ["Scrum", "Kanban", "XP", "PRINCE2"], correct: 1, explanation: "Kanban se concentre sur la gestion du flux, avec la visualisation du travail et la limitation du WIP." },
          { question: "Combien d'événements Scrum définit le cadre ?", options: ["3", "4", "5", "7"], correct: 2, explanation: "Scrum définit cinq événements : le Sprint, la Planification, le Daily Scrum, la Revue et la Rétrospective." },
          { question: "Quelle pratique technique est typique d'Extreme Programming ?", options: ["Le pair programming", "Le tableau Kanban", "Le Sprint Goal", "Le Product Backlog"], correct: 0, explanation: "Le pair programming (programmation en binôme) est une pratique caractéristique d'XP." },
          { question: "Un des douze principes agiles concerne la fréquence de livraison. Lequel ?", options: ["Livrer une seule fois, à la toute fin du projet", "Livrer fréquemment un logiciel fonctionnel, avec une préférence pour les cycles courts", "Livrer uniquement sur demande du client", "Livrer seulement après documentation complète"], correct: 1, explanation: "Le Manifeste recommande de livrer fréquemment, avec une préférence pour des cycles plus courts." },
          { question: "Quel est le principal reproche fait aux approches séquentielles (type cascade) qui a motivé le mouvement agile ?", options: ["Elles étaient trop rapides", "Elles livraient souvent tard, hors budget, avec des produits déconnectés du besoin réel", "Elles ne produisaient aucune documentation", "Elles étaient trop peu documentées"], correct: 1, explanation: "Les approches cascade livraient souvent en retard, avec un produit qui ne correspondait plus au besoin au moment de la livraison." },
          { question: "Dans Kanban, que signifie 'limiter le WIP' ?", options: ["Limiter le nombre de membres de l'équipe", "Limiter la quantité de travail en cours simultanément", "Limiter le budget du projet", "Limiter la durée des réunions"], correct: 1, explanation: "WIP signifie 'Work In Progress' — limiter le travail en cours améliore le flux et réduit le multitâche." },
          { question: "Qu'est-ce qui distingue le mieux une approche incrémentale d'une approche itérative ?", options: ["Il n'y a pas vraiment de différence entre elles", "L'incrémental construit morceau par morceau ; l'itératif affine l'ensemble du périmètre par passages successifs", "L'incrémental ne s'applique qu'à Kanban ; l'itératif qu'à Scrum", "L'incrémental signifie qu'aucun retour n'est utilisé"], correct: 1, explanation: "La livraison incrémentale ajoute des morceaux utilisables au fil du temps ; la livraison itérative part d'une version grossière et l'affine par passages successifs." },
          { question: "Pourquoi combiner livraison itérative et incrémentale réduit-il le risque du projet ?", options: ["Cela supprime le besoin d'impliquer les parties prenantes", "Cela fait apparaître les problèmes et malentendus tôt, pendant qu'il reste du temps pour corriger le tir", "Cela garantit un périmètre fixe et immuable", "Cela élimine le besoin d'un Product Backlog"], correct: 1, explanation: "Une livraison fréquente et précoce de valeur réelle fait apparaître les problèmes tôt, contrairement à une seule grande livraison en fin de projet." },
        ],
      },
    ],
  },
  {
    id: "course-icp-cat",
    slug: "icp-cat-coaching-transitions-agiles",
    order: 6,
    visibility: "admin",
    certTrack: "ICAgile ICP-CAT — Prep (unofficial)",
    language: "bilingual",
    titleFr: "Coacher les Transitions Agiles (ICP-CAT) — Préparation",
    subtitleFr: "Diagnostiquer, concevoir, accompagner et mesurer une transformation organisationnelle",
    descriptionFr:
      "Cours personnel bilingue avancé couvrant les compétences visées par le parcours ICAgile ICP-CAT : diagnostic organisationnel, conception d'une stratégie de transition, gestion du changement et des résistances, mesure d'impact et pérennisation. Comprend un examen final chronométré. Préparation indépendante — non affiliée à ICAgile. Ce parcours est normalement participatif et expérientiel ; ce cours en propose une version d'auto-formation rigoureuse.",
    title: "Coaching Agile Transitions (ICP-CAT) — Prep",
    subtitle: "Diagnosing, designing, guiding, and measuring an organizational transformation",
    description:
      "Advanced bilingual personal course on the competencies targeted by the ICAgile ICP-CAT track: organizational diagnosis, transition strategy design, change and resistance management, and measuring/sustaining impact. Independent prep — not affiliated with ICAgile.",
    longDescription:
      "This advanced course covers the role of an agile transformation coach at the organizational level: understanding organizational systems, diagnosing the current state, co-designing a transition strategy with sponsors, guiding change and resistance, and measuring and sustaining impact over time. Every chapter ends with a mastery quiz, and the course closes with a timed final exam with an 80% passing threshold. Note: ICAgile's official ICP-CAT track is a participatory program delivered by accredited trainers, assessed largely on real-world practice — not on a written exam alone. This course is a personal study aid; it is not produced, endorsed, or issued by ICAgile, and passing it does not grant the official ICP-CAT badge.",
    color: "#6a4c93",
    icon: "compass",
    chapters: [
      {
        id: "icpcat-1",
        title: "The Organizational System — Understanding Before Acting",
        duration: "45 min",
        content: `<h2>The Organizational System — Understanding Before Acting</h2>
<p>An agile transformation is never just about changing one team's practices — it touches structure, culture, measurement systems, incentives, and leadership style across an entire organization. Before proposing any plan, a transformation coach seeks to understand the whole system first.</p>
<h3>Seeing the System, Not Just the Symptoms</h3>
<p>A slow team isn't necessarily the problem itself — it may be a symptom of a rigid annual funding cycle, a siloed structure, or individual performance metrics that discourage collaboration. The coach looks for systemic causes before proposing local fixes.</p>
<h3>Organizational Levers</h3>
<ul>
<li><strong>Structure</strong> — how teams and departments are organized (silos vs. value-stream-aligned teams)</li>
<li><strong>Culture</strong> — shared beliefs and behaviors, often invisible but highly influential</li>
<li><strong>Measures and incentives</strong> — what gets measured and rewarded strongly shapes behavior</li>
<li><strong>Leadership</strong> — the governance and decision-making style in place</li>
</ul>
<h3>The Sponsor's Role</h3>
<p>A lasting transformation needs an engaged executive sponsor, capable of removing organizational obstacles the team alone cannot move — budget, structure, HR policy. The coach partners with this sponsor without replacing their role.</p>`,
        contentFr: `<h2>Le système organisationnel : comprendre avant d'agir</h2>
<p>Une transformation agile ne se limite pas à changer les pratiques d'une équipe : elle touche la structure, la culture, les systèmes de mesure, les incitations, et le style de leadership de toute une organisation. Avant de proposer un plan, un coach de transformation cherche à comprendre le système dans son ensemble.</p>
<h3>Voir le système, pas seulement les symptômes</h3>
<p>Une équipe lente n'est pas nécessairement le problème — elle peut être le symptôme d'un système de financement annuel rigide, d'une structure en silos, ou d'indicateurs de performance individuels qui découragent la collaboration. Le coach cherche les causes systémiques avant de proposer des solutions locales.</p>
<h3>Les leviers organisationnels</h3>
<ul>
<li><strong>Structure</strong> — comment les équipes et départements sont organisés (silos vs équipes de flux de valeur)</li>
<li><strong>Culture</strong> — les croyances et comportements partagés, souvent invisibles mais très influents</li>
<li><strong>Mesures et incitations</strong> — ce qui est mesuré et récompensé oriente fortement les comportements</li>
<li><strong>Leadership</strong> — le style de gouvernance et de prise de décision</li>
</ul>
<h3>Le rôle du sponsor</h3>
<p>Une transformation durable nécessite un sponsor exécutif engagé, capable de lever les obstacles organisationnels que l'équipe seule ne peut pas déplacer (budget, structure, politiques RH). Le coach travaille en partenariat avec ce sponsor, sans se substituer à lui.</p>`,
        quiz: [
          { question: "From a systemic perspective, a slow team is:", options: ["Always due to a lack of individual skill", "Potentially a symptom of a larger organizational problem", "Always solved by adding more members", "Unrelated to organizational structure"], correct: 1, explanation: "A transformation coach looks for systemic causes (funding, silos, incentives) before proposing a local fix." },
          { question: "Which of these is NOT cited as an organizational lever in this chapter?", options: ["Structure", "Culture", "Measures and incentives", "The weather"], correct: 3, explanation: "The levers cited are structure, culture, measures/incentives, and leadership." },
          { question: "Why is an engaged executive sponsor important in a transformation?", options: ["Because they must approve every team's every task", "Because they can remove organizational obstacles beyond the reach of teams alone", "Because it's legally required", "Because they replace the coach's role"], correct: 1, explanation: "The sponsor acts on levers (budget, structure, HR) that teams alone don't control." },
        ],
        quizFr: [
          { question: "Selon une approche systémique, une équipe lente est :", options: ["Toujours due à un manque de compétence individuelle", "Potentiellement le symptôme d'un problème organisationnel plus large", "Toujours résolue en ajoutant plus de membres", "Sans lien avec la structure organisationnelle"], correct: 1, explanation: "Le coach de transformation cherche les causes systémiques (financement, silos, incitations) avant de proposer une solution locale." },
          { question: "Lequel de ces éléments n'est PAS cité comme un levier organisationnel dans ce chapitre ?", options: ["La structure", "La culture", "Les mesures et incitations", "La météo"], correct: 3, explanation: "Les leviers cités sont la structure, la culture, les mesures/incitations et le leadership." },
          { question: "Pourquoi un sponsor exécutif engagé est-il important dans une transformation ?", options: ["Parce qu'il doit approuver chaque tâche de chaque équipe", "Parce qu'il peut lever des obstacles organisationnels hors de portée des équipes seules", "Parce que la loi l'exige", "Parce qu'il remplace le rôle du coach"], correct: 1, explanation: "Le sponsor peut agir sur le budget, la structure et les politiques RH — des leviers que les équipes seules ne contrôlent pas." },
        ],
      },
      {
        id: "icpcat-2",
        title: "Diagnosing the Current State",
        duration: "42 min",
        content: `<h2>Diagnosing the Current State</h2>
<p>Before designing a transition strategy, the coach runs a structured diagnosis of the organization: interviews with stakeholders at different levels, observation of actual working practices, analysis of existing value streams, and a review of current metrics (lead time, quality, team satisfaction).</p>
<h3>Common Diagnostic Tools</h3>
<ul>
<li><strong>Value stream mapping</strong> — visualizing the journey from an idea to value delivered to the customer</li>
<li><strong>Interviews and surveys</strong> — gathering perceptions at every level (leadership, middle management, teams)</li>
<li><strong>Analysis of existing metrics</strong> — delivery lead times, defect rates, employee engagement</li>
<li><strong>Organizational maturity models</strong> — used carefully, as a starting point for discussion rather than a final verdict</li>
</ul>
<h3>Avoiding an Imposed Diagnosis</h3>
<p>A good diagnosis involves the people affected rather than being imposed on them from outside. A diagnosis co-built with teams and managers increases buy-in for what follows, while a purely top-down diagnosis often triggers resistance.</p>`,
        contentFr: `<h2>Diagnostiquer l'état actuel</h2>
<p>Avant de concevoir une stratégie de transition, le coach mène un diagnostic structuré de l'organisation : entretiens avec les parties prenantes à différents niveaux, observation des pratiques de travail réelles, analyse des flux de valeur existants, et étude des indicateurs actuels (délais, qualité, satisfaction des équipes).</p>
<h3>Outils de diagnostic courants</h3>
<ul>
<li><strong>Cartographie de flux de valeur</strong> — visualiser le parcours d'une idée jusqu'à la valeur livrée au client</li>
<li><strong>Entretiens et sondages</strong> — recueillir les perceptions à tous les niveaux (direction, management intermédiaire, équipes)</li>
<li><strong>Analyse des métriques existantes</strong> — délais de livraison, taux de défauts, engagement des employés</li>
<li><strong>Modèles de maturité organisationnelle</strong> — utilisés avec prudence, comme point de départ de discussion plutôt que comme verdict définitif</li>
</ul>
<h3>Éviter le diagnostic imposé</h3>
<p>Un bon diagnostic implique les personnes concernées plutôt que de leur être imposé de l'extérieur. Un diagnostic co-construit avec les équipes et les managers augmente l'adhésion à la suite du processus, alors qu'un diagnostic purement descendant (top-down) provoque souvent des résistances.</p>`,
        quiz: [
          { question: "Which tool visualizes the journey from an idea to delivered value?", options: ["A personal Kanban board", "Value stream mapping", "The Sprint Backlog", "An HR org chart"], correct: 1, explanation: "Value stream mapping visualizes the full journey of value from idea to delivery." },
          { question: "Why involve teams in the diagnosis rather than imposing it?", options: ["It doesn't matter either way", "It increases buy-in and reduces resistance", "It's a legal requirement", "It always speeds up the project timeline"], correct: 1, explanation: "A co-built diagnosis increases buy-in; a purely top-down diagnosis often triggers resistance." },
          { question: "How should organizational maturity models be used?", options: ["As a definitive, unquestionable verdict", "Carefully, as a starting point for discussion", "They should never be used", "Only by leadership, without sharing with teams"], correct: 1, explanation: "Maturity models are useful as a discussion starting point, not as a final judgment on a team or organization." },
        ],
        quizFr: [
          { question: "Quel outil permet de visualiser le parcours d'une idée jusqu'à la valeur livrée ?", options: ["Le tableau Kanban personnel", "La cartographie de flux de valeur", "Le Sprint Backlog", "L'organigramme RH"], correct: 1, explanation: "La cartographie de flux de valeur (value stream mapping) visualise l'ensemble du parcours de la valeur." },
          { question: "Pourquoi impliquer les équipes dans le diagnostic plutôt que de l'imposer ?", options: ["Cela n'a aucune importance", "Cela augmente l'adhésion et réduit les résistances", "C'est une obligation légale", "Cela accélère toujours le calendrier du projet"], correct: 1, explanation: "Un diagnostic co-construit augmente l'adhésion ; un diagnostic purement top-down provoque souvent des résistances." },
          { question: "Comment les modèles de maturité organisationnelle doivent-ils être utilisés ?", options: ["Comme un verdict définitif et intangible", "Avec prudence, comme point de départ de discussion", "Ils ne doivent jamais être utilisés", "Uniquement par la direction, sans partage avec les équipes"], correct: 1, explanation: "Les modèles de maturité sont utiles comme point de départ de discussion, pas comme jugement définitif sur une équipe ou une organisation." },
        ],
      },
      {
        id: "icpcat-3",
        title: "Designing a Transition Strategy",
        duration: "45 min",
        content: `<h2>Designing a Transition Strategy</h2>
<p>A transition strategy translates the diagnosis into a realistic, sequenced action plan, adapted to context — there is no universal transformation plan that applies as-is to every organization.</p>
<h3>Design Principles</h3>
<ul>
<li><strong>Start small, learn, expand</strong> — targeted pilots allow learning before scaling up</li>
<li><strong>Sequence by value and feasibility</strong> — prioritize high-impact changes with manageable resistance</li>
<li><strong>Align structure and incentives</strong> — a change in practices without a matching change in structure or incentives is unlikely to hold over time</li>
<li><strong>Build in checkpoints</strong> — regular inspection milestones that let the strategy itself be adjusted, in an empirical spirit</li>
</ul>
<h3>The Copy-Paste Trap</h3>
<p>Reproducing another organization's model as-is (even a well-known one) without adapting it to context is a common mistake. The transition strategy must be co-designed with local stakeholders, not fully imported from outside.</p>`,
        contentFr: `<h2>Concevoir une stratégie de transition</h2>
<p>Une stratégie de transition traduit le diagnostic en un plan d'action réaliste, séquencé, et adapté au contexte — il n'existe pas de plan de transformation universel applicable tel quel à toute organisation.</p>
<h3>Principes de conception</h3>
<ul>
<li><strong>Commencer petit, apprendre, étendre</strong> — des pilotes ciblés permettent d'apprendre avant une extension à grande échelle</li>
<li><strong>Séquencer selon la valeur et la faisabilité</strong> — prioriser les changements à fort impact et à résistance gérable</li>
<li><strong>Aligner la structure et les incitations</strong> — un changement de pratiques sans changement structurel ou d'incitations a peu de chances de tenir dans la durée</li>
<li><strong>Prévoir des points de contrôle</strong> — des jalons d'inspection réguliers permettant d'ajuster la stratégie elle-même, dans un esprit empirique</li>
</ul>
<h3>Le piège du copier-coller</h3>
<p>Reproduire tel quel le modèle d'une autre organisation (même reconnue) sans l'adapter au contexte propre est une erreur fréquente. La stratégie de transition doit être co-conçue avec les parties prenantes locales, pas importée intégralement de l'extérieur.</p>`,
        quiz: [
          { question: "What approach is recommended for starting a transformation?", options: ["Deploy immediately across the whole organization", "Start small with targeted pilots, learn, then expand", "Wait for unanimous employee agreement before any change", "Fully copy another company's model"], correct: 1, explanation: "Starting with targeted pilots allows learning before scaling up, in an empirical spirit." },
          { question: "Why is a change in practices without structural change unlikely to hold?", options: ["Employees forget it quickly", "The existing structure and incentives keep pushing toward old behaviors", "It's forbidden by law", "It isn't true — structure doesn't matter"], correct: 1, explanation: "Without aligning structure and incentives, old behaviors are reinforced despite the visible change in practices." },
          { question: "What is the main risk of 'copy-pasting' an external transformation model?", options: ["It's always cheaper", "It ignores the organization's own context, reducing its chances of success", "It's forbidden by ICAgile", "It always speeds up results"], correct: 1, explanation: "An imported model that isn't adapted ignores context-specific culture, constraints, and history, limiting its chances of success." },
        ],
        quizFr: [
          { question: "Quelle approche est recommandée pour démarrer une transformation ?", options: ["Déployer immédiatement à toute l'organisation", "Commencer petit avec des pilotes ciblés, apprendre, puis étendre", "Attendre l'accord unanime de tous les employés avant tout changement", "Copier intégralement le modèle d'une autre entreprise"], correct: 1, explanation: "Commencer par des pilotes ciblés permet d'apprendre avant une extension à grande échelle, dans un esprit empirique." },
          { question: "Pourquoi un changement de pratiques sans changement structurel a-t-il peu de chances de tenir ?", options: ["Parce que les employés l'oublient rapidement", "Parce que la structure et les incitations existantes continuent de pousser vers les anciens comportements", "Parce que la loi l'interdit", "Ce n'est pas vrai, la structure n'a pas d'importance"], correct: 1, explanation: "Sans alignement de la structure et des incitations, les anciens comportements sont renforcés malgré le changement de pratiques affiché." },
          { question: "Quel est le principal risque du 'copier-coller' d'un modèle de transformation externe ?", options: ["Il est toujours moins cher", "Il ignore le contexte propre de l'organisation, ce qui réduit ses chances de succès", "Il est interdit par ICAgile", "Il accélère toujours les résultats"], correct: 1, explanation: "Un modèle importé sans adaptation ignore le contexte spécifique de l'organisation — culture, contraintes, historique — ce qui limite ses chances de succès." },
        ],
      },
      {
        id: "icpcat-4",
        title: "Guiding Change and Resistance",
        duration: "40 min",
        content: `<h2>Guiding Change and Resistance</h2>
<p>Resistance to change is a normal human reaction, not an obstacle to be crushed by force. A transformation coach seeks to understand the sources of resistance and respond with empathy and clarity rather than authority.</p>
<h3>Common Sources of Resistance</h3>
<ul>
<li>Perceived loss of status, control, or valued skills</li>
<li>Lack of clarity about the "why" behind the change</li>
<li>Past negative experiences with other change initiatives</li>
<li>Existing incentives that still reward the old behavior</li>
</ul>
<h3>Strategies for Guiding Change</h3>
<ul>
<li><strong>Communicate the why</strong>, repeatedly and through multiple channels</li>
<li><strong>Involve the people affected</strong> in designing the changes that concern them</li>
<li><strong>Celebrate small wins</strong> to build confidence progressively</li>
<li><strong>Stay present and available</strong> to hear concerns without dismissing them</li>
</ul>
<h3>What the Coach Avoids</h3>
<p>The coach avoids imposing change through hierarchical pressure, minimizing concerns that are raised, or promising unrealistic results just to obtain surface-level buy-in.</p>`,
        contentFr: `<h2>Accompagner le changement et les résistances</h2>
<p>La résistance au changement est une réaction humaine normale, pas un obstacle à éliminer par la force. Un coach de transformation cherche à comprendre les sources de résistance et à y répondre avec empathie et clarté plutôt qu'avec autorité.</p>
<h3>Sources courantes de résistance</h3>
<ul>
<li>Perte perçue de statut, de contrôle, ou de compétences valorisées</li>
<li>Manque de clarté sur le "pourquoi" du changement</li>
<li>Expériences négatives passées avec d'autres initiatives de changement</li>
<li>Incitations existantes qui récompensent encore l'ancien comportement</li>
</ul>
<h3>Stratégies d'accompagnement</h3>
<ul>
<li><strong>Communiquer le pourquoi</strong>, de façon répétée et à travers plusieurs canaux</li>
<li><strong>Impliquer les personnes concernées</strong> dans la conception des changements qui les affectent</li>
<li><strong>Célébrer les petites victoires</strong> pour construire la confiance progressivement</li>
<li><strong>Rester présent et disponible</strong> pour écouter les préoccupations sans les balayer</li>
</ul>
<h3>Ce que le coach évite</h3>
<p>Le coach évite d'imposer le changement par la contrainte hiérarchique, de minimiser les préoccupations exprimées, ou de promettre des résultats irréalistes pour obtenir une adhésion de façade.</p>`,
        quiz: [
          { question: "How does this chapter describe resistance to change?", options: ["As an obstacle to be crushed by force", "As a normal human reaction to understand and guide", "As a sign of employee incompetence", "As something to systematically ignore"], correct: 1, explanation: "Resistance is presented as a normal human reaction, to be understood with empathy rather than fought with authority." },
          { question: "Which of these strategies is recommended for guiding change?", options: ["Imposing change through hierarchical pressure", "Communicating the why repeatedly and involving the people affected", "Minimizing concerns raised by teams", "Promising unrealistic results for quick buy-in"], correct: 1, explanation: "Communicating the why and involving affected people are recommended; the other three options are explicitly discouraged." },
          { question: "Which is a common source of resistance mentioned in this chapter?", options: ["Excessive confidence in the change", "Perceived loss of status, control, or valued skills", "Too much communication from leadership", "Too much clarity about the objectives"], correct: 1, explanation: "Perceived loss of status, control, or valued skills is a frequent source of resistance to change." },
        ],
        quizFr: [
          { question: "Comment ce chapitre décrit-il la résistance au changement ?", options: ["Comme un obstacle à éliminer par la force", "Comme une réaction humaine normale à comprendre et accompagner", "Comme un signe d'incompétence des employés", "Comme quelque chose à ignorer systématiquement"], correct: 1, explanation: "La résistance est présentée comme une réaction humaine normale, à comprendre avec empathie plutôt qu'à combattre par l'autorité." },
          { question: "Laquelle de ces stratégies est recommandée pour accompagner le changement ?", options: ["Imposer le changement par la contrainte hiérarchique", "Communiquer le pourquoi de façon répétée et impliquer les personnes concernées", "Minimiser les préoccupations exprimées par les équipes", "Promettre des résultats irréalistes pour obtenir une adhésion rapide"], correct: 1, explanation: "Communiquer le pourquoi et impliquer les personnes concernées sont des stratégies recommandées ; les trois autres options sont explicitement déconseillées." },
          { question: "Quelle est une source courante de résistance mentionnée dans ce chapitre ?", options: ["Un excès de confiance dans le changement", "La perte perçue de statut, de contrôle ou de compétences valorisées", "Un excès de communication de la direction", "Une trop grande clarté sur les objectifs"], correct: 1, explanation: "La perte perçue de statut, de contrôle ou de compétences valorisées est une source fréquente de résistance au changement." },
        ],
      },
      {
        id: "icpcat-5",
        title: "Measuring Impact and Sustaining the Transformation",
        duration: "38 min",
        content: `<h2>Measuring Impact and Sustaining the Transformation</h2>
<p>A transformation that isn't measured tends to drift, and one that isn't actively sustained tends to quietly revert once the coach or the initial energy moves on. This chapter covers the closing loop: proving impact, and making change stick.</p>
<h3>Choosing Meaningful Metrics</h3>
<p>Good transformation metrics connect to outcomes, not just activity. Useful categories include:</p>
<ul>
<li><strong>Flow metrics</strong> — lead time, cycle time, throughput: how fast value actually moves end to end</li>
<li><strong>Quality metrics</strong> — defect rates, rework, incident frequency</li>
<li><strong>People metrics</strong> — engagement, psychological safety, retention</li>
<li><strong>Business outcome metrics</strong> — customer satisfaction, revenue impact, time-to-market</li>
</ul>
<p>A coach is cautious about vanity metrics (e.g., "number of Scrum Teams created") that show activity without proving real improvement, and avoids using metrics to rank or punish individual teams — which quickly produces gaming of the numbers instead of genuine improvement.</p>
<h3>Sustaining the Change</h3>
<ul>
<li><strong>Build internal capability</strong> — train internal coaches and champions so the organization doesn't stay permanently dependent on external help.</li>
<li><strong>Embed new habits into routines</strong> — retrospectives, reviews, and planning cadences that continue on their own once the coach steps back.</li>
<li><strong>Revisit incentives and structure periodically</strong> — old incentive systems can silently creep back in and undo earlier structural changes.</li>
<li><strong>Plan the coach's own exit</strong> from day one, so the organization isn't left stranded when engagement ends.</li>
</ul>`,
        contentFr: `<h2>Mesurer l'impact et pérenniser la transformation</h2>
<p>Une transformation qui n'est pas mesurée a tendance à dériver, et une transformation qui n'est pas activement entretenue a tendance à s'effacer discrètement une fois que le coach ou l'énergie initiale s'en va. Ce chapitre couvre la dernière boucle : prouver l'impact, et faire en sorte que le changement tienne dans la durée.</p>
<h3>Choisir des indicateurs pertinents</h3>
<p>Les bons indicateurs de transformation sont liés aux résultats, pas seulement à l'activité. Catégories utiles :</p>
<ul>
<li><strong>Indicateurs de flux</strong> — délai de livraison, temps de cycle, débit : la vitesse réelle à laquelle la valeur circule de bout en bout</li>
<li><strong>Indicateurs de qualité</strong> — taux de défauts, retouches, fréquence d'incidents</li>
<li><strong>Indicateurs humains</strong> — engagement, sécurité psychologique, rétention</li>
<li><strong>Indicateurs de résultats métier</strong> — satisfaction client, impact sur le revenu, délai de mise sur le marché</li>
</ul>
<p>Un coach se méfie des indicateurs de vanité (par exemple « nombre d'équipes Scrum créées ») qui montrent de l'activité sans prouver une réelle amélioration, et évite d'utiliser les indicateurs pour classer ou sanctionner des équipes individuelles — ce qui produit rapidement une manipulation des chiffres plutôt qu'une réelle amélioration.</p>
<h3>Pérenniser le changement</h3>
<ul>
<li><strong>Développer la capacité interne</strong> — former des coachs et relais internes pour que l'organisation ne reste pas durablement dépendante d'une aide externe.</li>
<li><strong>Ancrer les nouvelles habitudes dans les routines</strong> — rétrospectives, revues et cadences de planification qui se poursuivent d'elles-mêmes une fois le coach retiré.</li>
<li><strong>Revoir périodiquement les incitations et la structure</strong> — d'anciens systèmes d'incitation peuvent revenir discrètement et annuler des changements structurels antérieurs.</li>
<li><strong>Planifier dès le premier jour le retrait du coach</strong>, pour que l'organisation ne se retrouve pas démunie une fois la mission terminée.</li>
</ul>`,
        quiz: [
          { question: "What distinguishes a good transformation metric from a vanity metric?", options: ["Vanity metrics are always more precise", "A good metric connects to real outcomes, not just activity", "Vanity metrics are illegal to use", "There is no meaningful difference"], correct: 1, explanation: "Good metrics tie to outcomes (flow, quality, people, business results); vanity metrics show activity without proving improvement." },
          { question: "Why should a coach avoid using metrics to rank or punish individual teams?", options: ["It's against ICAgile's trademark policy", "It quickly leads to gaming the numbers instead of genuine improvement", "It makes reporting too slow", "It has no real downside"], correct: 1, explanation: "Using metrics punitively encourages teams to manipulate the numbers rather than genuinely improve." },
          { question: "Why should a coach plan their own exit from day one?", options: ["To reduce their own workload immediately", "So the organization isn't left stranded and dependent once the engagement ends", "Because ICAgile requires a fixed contract length", "Because sponsors always request it explicitly"], correct: 1, explanation: "Planning the exit and building internal capability ensures the change survives after the coach leaves." },
        ],
        quizFr: [
          { question: "Qu'est-ce qui distingue un bon indicateur de transformation d'un indicateur de vanité ?", options: ["Les indicateurs de vanité sont toujours plus précis", "Un bon indicateur est lié à de vrais résultats, pas seulement à l'activité", "Les indicateurs de vanité sont illégaux", "Il n'y a pas de différence significative"], correct: 1, explanation: "Les bons indicateurs sont liés aux résultats (flux, qualité, humain, résultats métier) ; les indicateurs de vanité montrent de l'activité sans prouver d'amélioration." },
          { question: "Pourquoi un coach devrait-il éviter d'utiliser les indicateurs pour classer ou sanctionner des équipes individuelles ?", options: ["C'est contraire à la politique de marque d'ICAgile", "Cela mène rapidement à une manipulation des chiffres plutôt qu'à une réelle amélioration", "Cela ralentit trop les rapports", "Cela n'a aucun inconvénient réel"], correct: 1, explanation: "Utiliser les indicateurs de façon punitive encourage les équipes à manipuler les chiffres plutôt qu'à réellement s'améliorer." },
          { question: "Pourquoi un coach devrait-il planifier son propre retrait dès le premier jour ?", options: ["Pour réduire immédiatement sa charge de travail", "Pour que l'organisation ne se retrouve pas démunie et dépendante une fois la mission terminée", "Parce qu'ICAgile exige une durée de contrat fixe", "Parce que les sponsors le demandent toujours explicitement"], correct: 1, explanation: "Planifier le retrait et développer la capacité interne garantit que le changement survit après le départ du coach." },
        ],
      },
      {
        id: "icpcat-final-exam",
        title: "Final Exam — ICP-CAT Practice Assessment",
        duration: "55 min",
        isFinalExam: true,
        examDurationMinutes: 55,
        passingScorePercent: 80,
        content: `<h2>Final Exam — ICP-CAT Practice Assessment</h2>
<p>A timed exam covering the whole course, with an <strong>80%</strong> passing threshold.</p>
<p style="padding:12px;background:#fff3cd;border:1px solid #ffe69c;border-radius:8px;font-size:14px;">
<strong>Important:</strong> ICAgile's official ICP-CAT track is built on a participatory, experiential program delivered by accredited trainers, assessed largely on real-world practice — not solely on a written exam. This exam is independent personal practice, not issued or endorsed by ICAgile, and passing it does not grant the official ICP-CAT badge.
</p>`,
        contentFr: `<h2>Examen final — Évaluation ICP-CAT d'entraînement</h2>
<p>Examen chronométré couvrant l'ensemble du cours, avec un seuil de réussite de <strong>80 %</strong>.</p>
<p style="padding:12px;background:#fff3cd;border:1px solid #ffe69c;border-radius:8px;font-size:14px;">
<strong>Important :</strong> le parcours officiel ICP-CAT d'ICAgile repose sur un programme participatif et expérientiel dispensé par des formateurs accrédités, évalué en grande partie sur la pratique en situation réelle — pas uniquement sur un examen écrit. Cet examen est un entraînement personnel indépendant, non délivré ni approuvé par ICAgile, et sa réussite n'accorde pas le badge officiel ICP-CAT.
</p>`,
        quiz: [
          { question: "A lasting agile transformation primarily touches:", options: ["Only one team's practices", "The organization's structure, culture, measures, and leadership", "Only the software tools used", "Only the IT budget"], correct: 1, explanation: "A lasting transformation touches the whole organizational system, not just one isolated team's practices." },
          { question: "What is the executive sponsor's main role in a transformation?", options: ["Approving every team's every task", "Removing organizational obstacles beyond the reach of teams alone", "Replacing the transformation coach", "Writing the Product Backlog"], correct: 1, explanation: "The sponsor acts on levers (budget, structure, HR) that teams alone cannot move." },
          { question: "Which tool is used to visualize the value journey in an organizational diagnosis?", options: ["Value stream mapping", "The annual financial dashboard", "The hierarchical org chart", "The individual training plan"], correct: 0, explanation: "Value stream mapping is the diagnostic tool mentioned for visualizing the value journey." },
          { question: "Which deployment approach is recommended for a transformation?", options: ["Immediate large-scale deployment", "Targeted pilots, learning, then progressive expansion", "Waiting for unanimity before any change", "Fully copying an external model"], correct: 1, explanation: "Starting small with targeted pilots, learning, then expanding is the recommended approach in an empirical mindset." },
          { question: "Why should resistance to change be understood rather than fought?", options: ["Because it's illegal to resist", "Because it's a normal human reaction often revealing legitimate concerns", "Because it doesn't really exist", "Because fighting it is always faster"], correct: 1, explanation: "Resistance often reveals legitimate concerns (loss of status, lack of clarity, past negative experiences) that are better understood than ignored." },
          { question: "What is the risk of a practice change unaccompanied by structural and incentive change?", options: ["Nothing, it always works", "It's unlikely to last, as old incentives reinforce old behaviors", "It's immediately forbidden by leadership", "It artificially speeds up results"], correct: 1, explanation: "Without structural and incentive alignment, a change in practices is unlikely to hold over time." },
          { question: "Which type of diagnosis best increases team buy-in?", options: ["A purely top-down diagnosis imposed by leadership", "A diagnosis co-built with the people affected at every level", "A diagnosis run with no interviews at all", "A diagnosis kept confidential by the coach alone"], correct: 1, explanation: "A diagnosis co-built with teams and managers increases buy-in, unlike a purely top-down one." },
          { question: "What distinguishes a good transformation metric from a vanity metric?", options: ["Vanity metrics are always more precise", "A good metric ties to real outcomes, not just visible activity", "Vanity metrics are illegal", "There's no real difference"], correct: 1, explanation: "Good metrics connect to real outcomes (flow, quality, people, business results); vanity metrics only show activity." },
          { question: "Why should a coach plan their own exit from the start of an engagement?", options: ["To reduce billed hours", "So the organization can sustain the change without becoming permanently dependent", "Because it's contractually mandatory everywhere", "Because sponsors always insist on it"], correct: 1, explanation: "Planning the exit and building internal capability from day one ensures the transformation survives after the coach leaves." },
          { question: "Why does using metrics to punish individual teams tend to backfire?", options: ["It has no real effect either way", "It encourages teams to game the numbers instead of genuinely improving", "It's against copyright law", "It makes reporting more accurate"], correct: 1, explanation: "Punitive use of metrics incentivizes manipulating the numbers rather than real improvement." },
        ],
        quizFr: [
          { question: "Une transformation agile durable touche principalement :", options: ["Uniquement les pratiques d'une seule équipe", "La structure, la culture, les mesures et le leadership de l'organisation", "Uniquement les outils logiciels utilisés", "Uniquement le budget informatique"], correct: 1, explanation: "Une transformation durable touche l'ensemble du système organisationnel, pas seulement les pratiques d'une équipe isolée." },
          { question: "Quel est le rôle principal du sponsor exécutif dans une transformation ?", options: ["Approuver chaque tâche de chaque équipe", "Lever les obstacles organisationnels hors de portée des équipes seules", "Remplacer le coach de transformation", "Rédiger le Product Backlog"], correct: 1, explanation: "Le sponsor agit sur des leviers (budget, structure, RH) que les équipes seules ne peuvent pas déplacer." },
          { question: "Quel outil est utilisé pour visualiser le parcours de la valeur dans un diagnostic organisationnel ?", options: ["La cartographie de flux de valeur", "Le tableau de bord financier annuel", "L'organigramme hiérarchique", "Le plan de formation individuel"], correct: 0, explanation: "La cartographie de flux de valeur (value stream mapping) est l'outil de diagnostic mentionné pour visualiser le parcours de la valeur." },
          { question: "Quelle approche de déploiement est recommandée pour une transformation ?", options: ["Déploiement immédiat à grande échelle", "Pilotes ciblés, apprentissage, puis extension progressive", "Attendre l'unanimité avant tout changement", "Copier intégralement un modèle externe"], correct: 1, explanation: "Commencer petit avec des pilotes ciblés, apprendre, puis étendre est l'approche recommandée dans une logique empirique." },
          { question: "Pourquoi la résistance au changement doit-elle être comprise plutôt que combattue ?", options: ["Parce qu'elle est illégale", "Parce qu'elle est une réaction humaine normale révélant souvent des préoccupations légitimes", "Parce qu'elle n'existe pas réellement", "Parce que la combattre est toujours plus rapide"], correct: 1, explanation: "La résistance révèle souvent des préoccupations légitimes (perte de statut, manque de clarté, expériences passées négatives) qu'il vaut mieux comprendre qu'ignorer." },
          { question: "Que risque un changement de pratiques non accompagné d'un changement de structure et d'incitations ?", options: ["Rien, cela fonctionne toujours", "De ne pas tenir dans la durée, les anciennes incitations renforçant les anciens comportements", "D'être immédiatement interdit par la direction", "D'accélérer artificiellement les résultats"], correct: 1, explanation: "Sans alignement structurel et incitatif, le changement de pratiques a peu de chances de perdurer." },
          { question: "Quel type de diagnostic augmente le mieux l'adhésion des équipes ?", options: ["Un diagnostic purement descendant imposé par la direction", "Un diagnostic co-construit avec les personnes concernées à tous les niveaux", "Un diagnostic réalisé sans aucun entretien", "Un diagnostic gardé confidentiel par le coach seul"], correct: 1, explanation: "Un diagnostic co-construit avec les équipes et managers augmente l'adhésion, contrairement à un diagnostic purement top-down." },
          { question: "Qu'est-ce qui distingue un bon indicateur de transformation d'un indicateur de vanité ?", options: ["Les indicateurs de vanité sont toujours plus précis", "Un bon indicateur est lié à de vrais résultats, pas seulement à l'activité visible", "Les indicateurs de vanité sont illégaux", "Il n'y a pas de différence réelle"], correct: 1, explanation: "Les bons indicateurs sont liés à de vrais résultats (flux, qualité, humain, résultats métier) ; les indicateurs de vanité ne montrent que de l'activité." },
          { question: "Pourquoi un coach devrait-il planifier son retrait dès le début d'une mission ?", options: ["Pour réduire les heures facturées", "Pour que l'organisation puisse pérenniser le changement sans devenir durablement dépendante", "Parce que c'est contractuellement obligatoire partout", "Parce que les sponsors l'exigent toujours"], correct: 1, explanation: "Planifier le retrait et développer la capacité interne dès le premier jour garantit que la transformation survit après le départ du coach." },
          { question: "Pourquoi utiliser les indicateurs pour sanctionner des équipes individuelles a-t-il tendance à se retourner contre l'objectif visé ?", options: ["Cela n'a aucun effet réel", "Cela encourage les équipes à manipuler les chiffres plutôt qu'à réellement s'améliorer", "C'est contraire au droit d'auteur", "Cela rend les rapports plus précis"], correct: 1, explanation: "Un usage punitif des indicateurs incite à manipuler les chiffres plutôt qu'à progresser réellement." },
        ],
      },
    ],
  },
];

/** Courses shown on the public homepage and in every student's dashboard. */
export const PUBLIC_COURSES: Course[] = COURSES.filter((c) => c.visibility !== "admin");

/** Personal courses visible only in the Admin Dashboard, accessible only to the admin account. */
export const ADMIN_ONLY_COURSES: Course[] = COURSES.filter((c) => c.visibility === "admin");

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getCourseById(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}
