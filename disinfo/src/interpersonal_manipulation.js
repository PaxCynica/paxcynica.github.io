const CARD_IMAGES_6 = {
    "SUPERIORITY COMPLEX": "images/superiority-complex.jfif",
    "COGNITIVE BIAS": "images/cognitive-bias.jfif",
    "TRANSACTIONAL ANALYSIS": "images/transactional-analysis.jfif",
    "NARCISSISM": "images/narcissism.jfif",
    "DEFENSE MECHANISMS": "images/defense-mechanisms.jfif",
    "CODEPENDENCY": "images/codependency.jfif",

};

const CARD_DATA_6 = [
    {
        "title": "The Superiority Dynamic",
        "points": [
            "Person A criticizes Person B's action (X) as flawed or stupid.",
            "Person A attributes B's action to inherent flaws (e.g., incompetence).",
            "Person A then performs a similar action but frames it positively.",
            "Person A justifies their own action as smart, strategic, or necessary."
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "SUPERIORITY COMPLEX"
    },
    {
        "title": "Cognitive Biases at Play",
        "points": [
            "Fundamental Attribution Error: Attributing others' negative behavior to their character, not situation.",
            "Self-Serving Bias: Attributing own success to internal factors, failures to external; viewing own actions favorably.",
            "These biases explain the double standard in judging similar actions."
        ],
        "layout": "layout-split",
        "theme": "theme-green",
        "category": "COGNITIVE BIAS"
    },
    {
        "title": "Transactional Analysis: Discounting",
        "points": [
            "Person A discounts the reality of Person B's situation and actions.",
            "Simultaneously, Person A discounts the negative aspects of their own similar actions.",
            "Refusal to acknowledge reality that doesn't fit their narrative."
        ],
        "layout": "layout-boxed",
        "theme": "theme-purple",
        "category": "TRANSACTIONAL ANALYSIS"
    },
    {
        "title": "Transactional Analysis: Psychological Games",
        "points": [
            "The dynamic can be a 'game' to achieve a psychological 'payoff'.",
            "Payoff is often feeling superior, avoiding self-awareness, or manipulation.",
            "Likely game: Maintaining a 'One-Up' position ('I'm OK, You're Not OK').",
            "Serves to avoid intimacy and maintain predictable dysfunctional patterns."
        ],
        "layout": "layout-split",
        "theme": "theme-sunset",
        "category": "TRANSACTIONAL ANALYSIS"
    },
    {
        "title": "Transactional Analysis: Ego States",
        "points": [
            "Person A might operate from a Critical Parent ego state when judging others.",
            "They may shift to a Justifying Child or seemingly rational Adult state for their own behavior."
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "TRANSACTIONAL ANALYSIS"
    },
    {
        "title": "Narcissistic Traits: Superiority & Empathy",
        "points": [
            "Framing own actions as superior reinforces grandiosity.",
            "Demonstrates a lack of empathy or perspective-taking regarding others' situations.",
            "Difficulty seeing own behavior objectively."
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "NARCISSISM"
    },
    {
        "title": "Narcissistic Traits: Deflection & Vulnerability",
        "points": [
            "Criticizing others deflects attention from one's own flaws or mistakes.",
            "Acts as a defense mechanism to protect a fragile ego.",
            "Vulnerable narcissists may use this subtly to maintain a sense of being special or wronged."
        ],
        "layout": "layout-split",
        "theme": "theme-dark",
        "category": "NARCISSISM"
    },
    {
        "title": "Defense Mechanisms: Rationalization & Projection",
        "points": [
            "Rationalization: Creating logical-sounding (but often false) excuses for own behavior.",
            "Projection: Unconsciously attributing one's own negative judgments or motives onto others."
        ],
        "layout": "layout-centered",
        "theme": "theme-green",
        "category": "DEFENSE MECHANISMS"
    },
    {
        "title": "Defense Mechanisms: Denial",
        "points": [
            "Denial involves refusing to acknowledge the similarity between one's own actions and the criticized actions of others.",
            "Also involves denying the negative aspects or implications of one's own behavior."
        ],
        "layout": "layout-boxed",
        "theme": "theme-green",
        "category": "DEFENSE MECHANISMS"
    },
    {
        "title": "Codependency Intersection (Minor Role)",
        "points": [
            "While less central than ego defense, codependency might intersect.",
            "Could be used to feel needed, gain control, or seek validation by appearing competent.",
            "However, the core 'game' is primarily about establishing superiority."
        ],
        "layout": "layout-split",
        "theme": "theme-purple",
        "category": "CODEPENDENCY"
    },
    {
        "title": "Simple Analogy: The Car Purchase",
        "points": [
            "Person complains neighbor was 'stupid' for buying an expensive car they can't afford.",
            "Calls neighbor irresponsible.",
            "Later, the same person justifies their own large loan for a luxury item as 'savvy' or 'necessary'."
        ],
        "layout": "layout-centered",
        "theme": "theme-sunset",
        "category": "SUPERIORITY COMPLEX"
    },
    {
        "title": "Summary: Roots of the Behavior",
        "points": [
            "Cognitive Biases (Self-serving bias, Fundamental attribution error).",
            "Psychological Games (Seeking superiority payoff, avoiding self-awareness).",
            "Narcissistic Traits (Need for superiority, deflection).",
            "Defense Mechanisms (Rationalization, projection, denial)."
        ],
        "layout": "layout-boxed",
        "theme": "theme-blue",
        "category": "SUPERIORITY COMPLEX"
    }
];

const CARD_IMAGES_7 = {
    "MANAGING THE CONVERSATION": "images/managing-conversations.jfif",
    "SETTING BOUNDARIES": "images/managing-conversations.jfif",
    "SUBTLE GUIDANCE": "images/managing-conversations.jfif",
    "INTERNAL MANAGEMENT": "images/managing-conversations.jfif",
    "EFFECTIVE LISTENING": "images/managing-conversations.jfif" // Added for contrast/context
};

const CARD_DATA_7 = [
    {
        "title": "Handling Unsolicited Advice",
        "points": [
            "Challenge: Other person tells/advises without asking questions first.",
            "Difficulty in modeling desired behavior if it's not reciprocated.",
            "Goal: Manage the interaction respectfully, guide vs. confront."
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "MANAGING THE CONVERSATION"
    },
    {
        "title": "Tactic: Create a Pause & Redirect",
        "points": [
            "Use brief non-committal interjections early (Oh, Hmm, Okay).",
            "Creates space for your response before they fully launch.",
            "Acknowledge their input briefly, then pivot to your need.",
            "Phrase: 'Thanks for that thought. Right now, I'm focused on [X].'"
        ],
        "layout": "layout-split",
        "theme": "theme-green",
        "category": "MANAGING THE CONVERSATION"
    },
    {
        "title": "Tactic: State Your Current Need",
        "points": [
            "If they jump to advice when you were just sharing/venting.",
            "Gently clarify what you *were* looking for (or not looking for).",
            "Phrase: 'I appreciate you thinking of solutions! I was just looking to vent.'"
        ],
        "layout": "layout-boxed",
        "theme": "theme-purple",
        "category": "SETTING BOUNDARIES"
    },
    {
        "title": "Tactic: Ask Clarifying Qs (Subtle Modeling)",
        "points": [
            "Respond to their telling with a question about *their* understanding or timing.",
            "Highlights they may lack full context before advising.",
            "Phrase: 'What makes you say that *right now*, given [details]?'"
        ],
        "layout": "layout-split",
        "theme": "theme-sunset",
        "category": "SUBTLE GUIDANCE"
    },
    {
        "title": "Tactic: Subtle Modeling (Question in Response)",
        "points": [
            "Since they don't ask first, model by asking a question *after* their telling.",
            "Pull them into a more interactive mode.",
            "Phrase: 'How do you see that advice applying in *my* specific situation?'"
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "SUBTLE GUIDANCE"
    },
    {
        "title": "Tactic: Direct Boundaries (Use with Care)",
        "points": [
            "For persistent patterns in suitable relationships.",
            "Gently but clearly state your preference.",
            "Phrase: 'Sometimes when I share, I just need listening first before solutions.'"
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "SETTING BOUNDARIES"
    },
    {
        "title": "Managing Your Own Reaction",
        "points": [
            "It's frustrating when your style isn't mirrored.",
            "Practice patience; habits are ingrained.",
            "Focus on managing *this* interaction, not changing their personality.",
            "Recognize their behavior isn't necessarily malicious."
        ],
        "layout": "layout-split",
        "theme": "theme-green",
        "category": "INTERNAL MANAGEMENT"
    }
];