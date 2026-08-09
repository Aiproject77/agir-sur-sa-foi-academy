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
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getCourseById(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}
