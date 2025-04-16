const CARD_IMAGES_4 = {
    'CORE PRINCIPLES': 'images/core-principles.jfif',
    'INFORMATION GATHERING': 'images/information-gathering.jfif',
    'INFORMATION ANALYSIS': 'images/information-analysis.jfif',
    'COMMUNICATION': 'images/communication.jfif',
    'SECURITY': 'images/security.jfif',
    'LOGISTICS': 'images/logistics.jfif',
    'ETHICS': 'images/ethics.jfif',
    'IMPLEMENTATION': 'images/implementation.jfif',
    'SURVIVAL STRATEGIES': 'images/survival-strategies.jfif',
    'COUNTERINTELLIGENCE': 'images/counterintelligence.jfif',
    'WEAPONS AND TACTICS': 'images/weapons-and-tactics.jfif',
    'LEGAL AND POLITICAL STRATEGIES': 'images/legal-and-political-strategies.jfif',
    'PSYCHOLOGICAL OPERATIONS (PsyOps)': 'images/psyops.jfif',
    'RESOURCE ACQUISITION': 'images/resource-acquisition.jfif',
    'FOOD SECURITY': 'images/food-security.jfif',
}

const CARD_DATA_4 = [
    // =================================
    // SECTION 1: CORE PRINCIPLES
    // =================================
    {
        "title": "CORE PRINCIPLES",
        "points": [
            "Fundamental values that guide a resilient and ethical intelligence network",
            "Foundation for all operations and decision-making",
            "These principles ensure integrity, security, and effectiveness"
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "CORE PRINCIPLES"
    },
    {
        "title": "Decentralization",
        "points": [
            "Avoid central command structures that can be easily compromised",
            "Distribute leadership and decision-making authority",
            "Create resilient networks that can withstand targeted attacks",
            "No single point of failure means greater operational security"
        ],
        "layout": "layout-split",
        "theme": "theme-blue",
        "category": "CORE PRINCIPLES"
    },
    {
        "title": "Encryption and Security",
        "points": [
            "Prioritize secure communication and data storage",
            "Implement end-to-end encryption for all sensitive exchanges",
            "Protect sources, methods, and personnel through technical safeguards",
            "Security is not an afterthought—it's foundational to all operations"
        ],
        "layout": "layout-boxed",
        "theme": "theme-blue",
        "category": "CORE PRINCIPLES"
    },
    {
        "title": "Community Trust",
        "points": [
            "Build a network based on trust and transparency",
            "Develop relationships that withstand pressure and uncertainty",
            "Create systems of accountability among members",
            "Cultivate reliability through consistent ethical behavior"
        ],
        "layout": "layout-split",
        "theme": "theme-blue",
        "category": "CORE PRINCIPLES"
    },
    {
        "title": "Ethical Guidelines",
        "points": [
            "Establish clear ethical boundaries to prevent abuse of power",
            "Maintain integrity even under challenging circumstances",
            "Hold all network members to consistent ethical standards",
            "Ensure operations align with values and protect human rights"
        ],
        "layout": "layout-boxed",
        "theme": "theme-blue",
        "category": "CORE PRINCIPLES"
    },
    {
        "title": "Redundancy",
        "points": [
            "Create multiple independent cells to prevent single points of failure",
            "Duplicate critical functions across different network segments",
            "Establish backup protocols for communication and operations",
            "Plan for continuity despite disruption or compromise"
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "CORE PRINCIPLES"
    },
    {
        "title": "Information Verification",
        "points": [
            "Implement processes to verify the accuracy of information",
            "Cross-check data from multiple independent sources",
            "Establish credibility standards for all intelligence",
            "Combat misinformation through rigorous fact-checking"
        ],
        "layout": "layout-split",
        "theme": "theme-blue",
        "category": "CORE PRINCIPLES"
    },

    // =================================
    // SECTION 2: INFORMATION GATHERING
    // =================================
    {
        "title": "INFORMATION GATHERING",
        "points": [
            "The eyes and ears of the intelligence network",
            "Focused on collecting accurate, relevant data from multiple sources",
            "Combines human observation with technical collection methods",
            "The foundation upon which all analysis and action depends"
        ],
        "layout": "layout-centered",
        "theme": "theme-green",
        "category": "INFORMATION GATHERING"
    },
    {
        "title": "Scout Duties",
        "points": [
            "Observe and document activities of the occupying forces",
            "Gather information on resource movements and troop deployments",
            "Collect data on the impact of occupation on civilian populations",
            "Monitor social media and local communication channels"
        ],
        "layout": "layout-boxed",
        "theme": "theme-green",
        "category": "INFORMATION GATHERING"
    },
    {
        "title": "Scout Decentralization",
        "points": [
            "Utilize distributed networks of observers in various communities",
            "Employ secure communication channels (encrypted messaging, dead drops)",
            "Use open-source intelligence (OSINT) techniques with public sources",
            "Maintain separation between collection cells for operational security"
        ],
        "layout": "layout-split",
        "theme": "theme-green",
        "category": "INFORMATION GATHERING"
    },
    {
        "title": "OSINT Collection",
        "points": [
            "Monitor publicly available information sources",
            "Track social media for patterns and anomalies",
            "Analyze news reports for inconsistencies or propaganda",
            "Document visual evidence through photographs and video"
        ],
        "layout": "layout-boxed",
        "theme": "theme-green",
        "category": "INFORMATION GATHERING"
    },
    {
        "title": "Field Observation",
        "points": [
            "Direct observation of physical activities and movements",
            "Document infrastructure changes and security measures",
            "Track patterns of enforcement and control",
            "Identify vulnerable points in occupying systems"
        ],
        "layout": "layout-split",
        "theme": "theme-green",
        "category": "INFORMATION GATHERING"
    },

    // =================================
    // SECTION 3: INFORMATION ANALYSIS
    // =================================
    {
        "title": "INFORMATION ANALYSIS",
        "points": [
            "Transforms raw data into actionable intelligence",
            "Identifies patterns, threats, and opportunities within collected information",
            "Combines technical analysis with human judgment",
            "Creates the foundation for informed decision-making"
        ],
        "layout": "layout-centered",
        "theme": "theme-purple",
        "category": "INFORMATION ANALYSIS"
    },
    {
        "title": "Analyst Duties",
        "points": [
            "Analyze gathered information to identify patterns and trends",
            "Create intelligence reports and assessments for decision-makers",
            "Verify accuracy of information from multiple sources",
            "Predict future actions of occupying forces"
        ],
        "layout": "layout-boxed",
        "theme": "theme-purple",
        "category": "INFORMATION ANALYSIS"
    },
    {
        "title": "Analyst Decentralization",
        "points": [
            "Form small, independent analysis cells with specialized expertise",
            "Use encrypted collaboration tools to share and analyze data",
            "Implement peer-review processes to ensure quality of analysis",
            "Distribute analytical capability across geographic areas"
        ],
        "layout": "layout-split",
        "theme": "theme-purple",
        "category": "INFORMATION ANALYSIS"
    },
    {
        "title": "Pattern Recognition",
        "points": [
            "Identify recurring behaviors and operational patterns",
            "Detect changes in tactics or resource allocation",
            "Recognize anomalies that may indicate new developments",
            "Map networks of influence and control"
        ],
        "layout": "layout-centered",
        "theme": "theme-purple",
        "category": "INFORMATION ANALYSIS"
    },
    {
        "title": "Assessment Creation",
        "points": [
            "Develop comprehensive reports on specific situations",
            "Provide strategic context for tactical information",
            "Include confidence levels for all assessments",
            "Offer multiple scenarios and potential outcomes"
        ],
        "layout": "layout-boxed",
        "theme": "theme-purple",
        "category": "INFORMATION ANALYSIS"
    },

    // =================================
    // SECTION 4: COMMUNICATION
    // =================================
    {
        "title": "COMMUNICATION",
        "points": [
            "Securely connects all elements of the intelligence network",
            "Ensures information reaches those who need it when they need it",
            "Balances security with operational effectiveness",
            "Creates resilient pathways for information flow"
        ],
        "layout": "layout-centered",
        "theme": "theme-sunset",
        "category": "COMMUNICATION"
    },
    {
        "title": "Messenger Duties",
        "points": [
            "Securely transmit intelligence reports to relevant parties",
            "Disseminate information to the public to raise awareness",
            "Maintain secure communication channels with other cells",
            "Create and distribute encrypted communications"
        ],
        "layout": "layout-boxed",
        "theme": "theme-sunset",
        "category": "COMMUNICATION"
    },
    {
        "title": "Communication Decentralization",
        "points": [
            "Use a network of trusted messengers with secure protocols",
            "Establish redundant communication channels to prevent disruptions",
            "Utilize steganography and other covert communication techniques",
            "Implement one-way communication methods where appropriate"
        ],
        "layout": "layout-split",
        "theme": "theme-sunset",
        "category": "COMMUNICATION"
    },
    {
        "title": "Public Messaging",
        "points": [
            "Craft clear, factual information for public distribution",
            "Counteract propaganda with verified information",
            "Build trust through accuracy and transparency",
            "Provide actionable guidance for community protection"
        ],
        "layout": "layout-centered",
        "theme": "theme-sunset",
        "category": "COMMUNICATION"
    },
    {
        "title": "Secure Transmission",
        "points": [
            "Employ encrypted digital communications",
            "Use analog methods when digital security is compromised",
            "Establish authentication protocols to verify message origins",
            "Create timing and routing systems to avoid pattern recognition"
        ],
        "layout": "layout-boxed",
        "theme": "theme-sunset",
        "category": "COMMUNICATION"
    },

    // =================================
    // SECTION 5: SECURITY
    // =================================
    {
        "title": "SECURITY",
        "points": [
            "Protects the network from infiltration and compromise",
            "Implements both technical and human security measures",
            "Creates protocols that balance security with operational needs",
            "Forms the defensive shield for all network activities"
        ],
        "layout": "layout-centered",
        "theme": "theme-dark",
        "category": "SECURITY"
    },
    {
        "title": "Guardian Duties",
        "points": [
            "Protect the network from infiltration and surveillance",
            "Identify and neutralize threats to network security",
            "Develop and implement security protocols and training",
            "Perform counterintelligence operations"
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "SECURITY"
    },
    {
        "title": "Security Decentralization",
        "points": [
            "Establish independent security cells with specialized expertise",
            "Implement strict security protocols and access controls",
            "Use advanced encryption and anonymization techniques",
            "Distribute security functions across different network elements"
        ],
        "layout": "layout-split",
        "theme": "theme-dark",
        "category": "SECURITY"
    },
    {
        "title": "Operational Security",
        "points": [
            "Compartmentalize information on a need-to-know basis",
            "Establish secure meeting protocols and locations",
            "Implement counter-surveillance measures",
            "Create emergency response procedures for security breaches"
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "SECURITY"
    },
    {
        "title": "Digital Security",
        "points": [
            "Employ end-to-end encryption for all communications",
            "Use secure operating systems and devices",
            "Implement regular security audits and updates",
            "Train all network members in digital hygiene practices"
        ],
        "layout": "layout-centered",
        "theme": "theme-dark",
        "category": "SECURITY"
    },

    // =================================
    // SECTION 6: LOGISTICS
    // =================================
    {
        "title": "LOGISTICS",
        "points": [
            "Provides the material support and resources for network operations",
            "Creates sustainable supply chains resistant to disruption",
            "Addresses the physical needs of network operations",
            "Ensures operational continuity through resource management"
        ],
        "layout": "layout-centered",
        "theme": "theme-red",
        "category": "LOGISTICS"
    },
    {
        "title": "Provider Duties",
        "points": [
            "Provide resources and support to network operations",
            "Maintain secure supply chains for equipment and materials",
            "Establish safe houses and meeting locations",
            "Ensure operational continuity through resource management"
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "LOGISTICS"
    },
    {
        "title": "Logistics Decentralization",
        "points": [
            "Establish decentralized supply chains with multiple providers",
            "Use secure payment and procurement methods",
            "Create redundant supply lines for critical resources",
            "Distribute storage locations across multiple sites"
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "LOGISTICS"
    },
    {
        "title": "Resource Management",
        "points": [
            "Inventory and track critical equipment and supplies",
            "Prioritize resource allocation based on operational needs",
            "Develop alternative sourcing methods during disruptions",
            "Maintain reserve capacity for emergency situations"
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "LOGISTICS"
    },
    {
        "title": "Infrastructure Support",
        "points": [
            "Maintain communication equipment and infrastructure",
            "Establish secure physical spaces for operations",
            "Create backup power and connectivity solutions",
            "Develop contingency plans for infrastructure loss"
        ],
        "layout": "layout-centered",
        "theme": "theme-red",
        "category": "LOGISTICS"
    },

    // =================================
    // SECTION 7: ETHICS
    // =================================
    {
        "title": "ETHICS",
        "points": [
            "Ensures operations adhere to moral principles and standards",
            "Prevents abuse of power and maintains network integrity",
            "Provides guidance for difficult operational decisions",
            "Builds trust both within the network and with the community"
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "ETHICS"
    },
    {
        "title": "Warden Duties",
        "points": [
            "Ensure all network activities adhere to ethical guidelines",
            "Investigate allegations of misconduct or abuse of power",
            "Provide guidance and training on ethical conduct",
            "Establish clear rules of engagement for operations"
        ],
        "layout": "layout-boxed",
        "theme": "theme-blue",
        "category": "ETHICS"
    },
    {
        "title": "Ethics Decentralization",
        "points": [
            "Create independent ethics committees with representatives from various cells",
            "Implement transparent processes for oversight and accountability",
            "Establish mechanisms for reporting and addressing ethical concerns",
            "Distribute ethical authority throughout the network"
        ],
        "layout": "layout-split",
        "theme": "theme-blue",
        "category": "ETHICS"
    },
    {
        "title": "Ethical Standards",
        "points": [
            "Respect for human rights and dignity in all operations",
            "Protection of civilian populations from harm",
            "Truth and accuracy in all information handling",
            "Proportional and justified responses to threats"
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "ETHICS"
    },
    {
        "title": "Accountability Systems",
        "points": [
            "Transparent review processes for operations",
            "Documentation of decision-making and justifications",
            "Clear consequences for ethical violations",
            "Regular ethical assessments of ongoing activities"
        ],
        "layout": "layout-boxed",
        "theme": "theme-blue",
        "category": "ETHICS"
    },

    // =================================
    // SECTION 8: IMPLEMENTATION
    // =================================
    {
        "title": "IMPLEMENTATION",
        "points": [
            "Practical application of network principles and structures",
            "Transforms theoretical framework into operational reality",
            "Addresses the challenges of building a resilient system",
            "Provides concrete methods for network development"
        ],
        "layout": "layout-centered",
        "theme": "theme-green",
        "category": "IMPLEMENTATION"
    },
    {
        "title": "Cellular Structure",
        "points": [
            "Organize the network into small, independent cells with specific roles",
            "Limit knowledge about other cells to prevent cascading compromise",
            "Establish protocols for inter-cell coordination",
            "Create cell structures that can function autonomously when needed"
        ],
        "layout": "layout-boxed",
        "theme": "theme-green",
        "category": "IMPLEMENTATION"
    },
    {
        "title": "Distributed Communication",
        "points": [
            "Use encrypted messaging apps and secure email",
            "Implement offline communication methods as backups",
            "Create protocols for authentication and verification",
            "Establish regular but unpredictable communication schedules"
        ],
        "layout": "layout-split",
        "theme": "theme-green",
        "category": "IMPLEMENTATION"
    },
    {
        "title": "Community Networks",
        "points": [
            "Build relationships with local communities for information and support",
            "Develop trust through consistent, ethical behavior",
            "Create mutual aid systems that strengthen community resilience",
            "Establish community early warning systems for threats"
        ],
        "layout": "layout-centered",
        "theme": "theme-green",
        "category": "IMPLEMENTATION"
    },
    {
        "title": "Training Programs",
        "points": [
            "Provide standardized training on security protocols",
            "Teach communication techniques and encryption usage",
            "Conduct ethical training and scenario exercises",
            "Develop specialized skills based on network roles"
        ],
        "layout": "layout-boxed",
        "theme": "theme-green",
        "category": "IMPLEMENTATION"
    },
    {
        "title": "Important Considerations",
        "points": [
            "The dangers of this type of work are extreme",
            "Misinformation can be very dangerous and counterproductive",
            "Operational security must be maintained at all times",
            "Ethical considerations must be at the forefront of all actions"
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "IMPLEMENTATION"
    },
    {
        "title": "Surviving a Fascist Regime",
        "points": [
            "Head-on resistance often ends badly—they’ve got the guns, the jails, and the will to use them.",
            "Survival means outlasting, adapting, and preserving what you can."
        ],
        "layout": "layout-centered",
        "theme": "theme-red",
        "category": "SURVIVAL STRATEGIES"
    },
    {
        "title": "Lay Low, Stay Smart",
        "points": [
            "Blend In: Don’t draw attention. Under oppressive regimes, overt defiance gets you noticed.",
            "Hoard Resources: Stockpile food, cash, and connections. Underground networks sustained survival during WWII-era shortages."
        ],
        "layout": "layout-split",
        "theme": "theme-dark",
        "category": "SURVIVAL STRATEGIES"
    },
    {
        "title": "Outlast the Crumble",
        "points": [
            "Patience is Power: Fascist regimes often collapse under corruption, overreach, or war.",
            "Watch for Chaos: Seize opportunities as the regime begins faltering—when economic ruin or internal strife sets in."
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "SURVIVAL STRATEGIES"
    },
    {
        "title": "Keep Hope, but Grounded",
        "points": [
            "Mental Armor: Hope isn’t just feel-good fluff—it shields you during dark times, as Viktor Frankl showed.",
            "Small Wins: Quiet acts, like hiding banned books or helping a neighbor, reinforce resilience without inciting attention."
        ],
        "layout": "layout-split",
        "theme": "theme-dark",
        "category": "SURVIVAL STRATEGIES"
    },
    {
        "title": "Build Quiet Networks",
        "points": [
            "Trust Over Triumph: Find reliable allies—family, friends, or discreet groups—and build underground support.",
            "Escape Plans: Always know your exits. Whether it’s fleeing a dangerous situation or planning a safe exit, discreet networks make the difference."
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "SURVIVAL STRATEGIES"
    },
    {
        "title": "Why This Works",
        "points": [
            "Fascism may command terror, but its inefficiency and internal contradictions hasten its downfall.",
            "Calculating resilience—enduring, adapting, and exploiting the cracks—wins out over flashy defiance."
        ],
        "layout": "layout-centered",
        "theme": "theme-red",
        "category": "SURVIVAL STRATEGIES"
    },
    {
        "title": "Survival Strategies",
        "points": [
            "Adapt and evolve to survive in a hostile environment.",
            "Learn from history and apply lessons to current situations.",
            "Maintain hope and resilience in the face of adversity.",
            "Focus on long-term survival rather than short-term resistance."
        ],
        "layout": "layout-centered",
        "theme": "theme-red",
        "category": "SURVIVAL STRATEGIES"
    },
    {
        "title": "Identifying Infiltrators",
        "points": [
            "Recognize common signs of infiltration (unusual behavior, inconsistent stories).",
            "Implement vetting processes for new members.",
            "Use counterintelligence techniques to detect double agents.",
            "Maintain strict compartmentalization of information."
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "COUNTERINTELLIGENCE"
    },
    {
        "title": "Counter-Propaganda",
        "points": [
            "Identify and expose false narratives spread by the occupying force.",
            "Disseminate accurate information through trusted channels.",
            "Use humor and satire to undermine enemy propaganda.",
            "Promote critical thinking to inoculate against misinformation."
        ],
        "layout": "layout-split",
        "theme": "theme-dark",
        "category": "COUNTERINTELLIGENCE"
    },
    {
        "title": "Disinformation Defense",
        "points": [
            "Verify all information before sharing it.",
            "Cross-reference data from multiple sources.",
            "Be wary of emotionally charged content.",
            "Train network members to recognize disinformation tactics."
        ],
        "layout": "layout-centered",
        "theme": "theme-dark",
        "category": "COUNTERINTELLIGENCE"
    },
    {
        "title": "Basic Self-Defense",
        "points": [
            "Learn basic self-defense techniques for personal protection.",
            "Focus on de-escalation and avoidance when possible.",
            "Know your physical limits and capabilities.",
            "Practice situational awareness to anticipate threats."
        ],
        "layout": "layout-boxed",
        "theme": "theme-dark",
        "category": "WEAPONS AND TACTICS"
    },
    {
        "title": "Improvised Tools",
        "points": [
            "Identify everyday objects that can be used for self-defense.",
            "Learn how to create simple tools from available materials.",
            "Prioritize non-lethal options whenever possible.",
            "Practice using improvised tools in realistic scenarios."
        ],
        "layout": "layout-split",
        "theme": "theme-dark",
        "category": "WEAPONS AND TACTICS"
    },
    {
        "title": "Understanding Legal Rights",
        "points": [
            "Know your rights under the existing legal system.",
            "Document all interactions with authorities.",
            "Seek legal counsel when possible.",
            "Share legal information with network members."
        ],
        "layout": "layout-boxed",
        "theme": "theme-blue",
        "category": "LEGAL AND POLITICAL STRATEGIES"
    },
    {
        "title": "Public Advocacy",
        "points": [
            "Identify opportunities to advocate for your cause.",
            "Craft clear and persuasive messages.",
            "Build alliances with sympathetic individuals and groups.",
            "Use peaceful and non-violent methods of protest."
        ],
        "layout": "layout-split",
        "theme": "theme-blue",
        "category": "LEGAL AND POLITICAL STRATEGIES"
    },
    {
        "title": "Political Analysis",
        "points": [
            "Analyze the power dynamics within the occupying regime.",
            "Identify key decision-makers and their motivations.",
            "Understand the regime's strengths and weaknesses.",
            "Predict future actions based on available information."
        ],
        "layout": "layout-centered",
        "theme": "theme-blue",
        "category": "LEGAL AND POLITICAL STRATEGIES"
    },
    {
        "title": "Leaflet Distribution",
        "points": [
            "Create leaflets with clear and concise messages.",
            "Distribute leaflets in strategic locations.",
            "Use covert methods to avoid detection.",
            "Ensure leaflets are factually accurate and ethically sound."
        ],
        "layout": "layout-boxed",
        "theme": "theme-sunset",
        "category": "PSYCHOLOGICAL OPERATIONS (PsyOps)"
    },
    {
        "title": "Understanding Propaganda",
        "points": [
            "Identify common propaganda techniques.",
            "Analyze the emotional appeals used in propaganda.",
            "Expose the hidden agendas behind propaganda messages.",
            "Promote critical thinking to resist propaganda's influence."
        ],
        "layout": "layout-split",
        "theme": "theme-sunset",
        "category": "PSYCHOLOGICAL OPERATIONS (PsyOps)"
    },
    {
        "title": "Bartering Skills",
        "points": [
            "Offer valuable goods and services.",
            "Negotiate fair trades effectively.",
            "Build trust with trading partners.",
            "Maintain a diverse, valuable inventory."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "RESOURCE ACQUISITION"
    },
    {
        "title": "Secure Trade",
        "points": [
            "Establish secure trading locations.",
            "Use trusted intermediaries.",
            "Implement security protocols.",
            "Keep trade discreet."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "RESOURCE ACQUISITION"
    },
    {
        "title": "Essential Resources",
        "points": [
            "Identify resources for survival and resistance.",
            "Map local sources: food, water, shelter.",
            "Develop foraging and management skills.",
            "Prioritize sustainable resource use."
        ],
        "layout": "layout-centered",
        "theme": "theme-red",
        "category": "RESOURCE ACQUISITION"
    },
    {
        "title": "Resource Management",
        "points": [
            "Track and manage resources effectively.",
            "Establish allocation protocols.",
            "Create shortage contingency plans.",
            "Adapt to changing circumstances."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "RESOURCE ACQUISITION"
    },
    {
        "title": "Community Resilience",
        "points": [
            "Build strong community relationships.",
            "Create mutual aid networks.",
            "Develop local food systems.",
            "Foster cooperation and support."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "RESOURCE ACQUISITION"
    },
    {
        "title": "Minimum Food Security",
        "points": [
            "Goal: Reliable supply of dried/non-perishable food for each person.",
            "Focus: Meeting basic nutritional needs in a crisis.",
        ],
        "layout": "layout-centered",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Fat Intake: Long-Term Food Storage",
        "points": [
            "Aim for 20-30% of daily calories from fat for adults; 30-40% for infants/toddlers; 25-35% for kids/teens.",
            "Vital for energy, hormone production, and nutrient absorption.",
            "Prioritize stable oils such as sunflower or coconut."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Protein Needs: Long-Term Food Storage",
        "points": [
            "Adults should target 10-35% of calories from protein; adjust to 5-20% for infants/toddlers and 10-30% for kids/teens.",
            "Crucial for muscle maintenance, immune health, and overall vitality.",
            "Legumes serve as a primary, cost-effective protein source."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Carbohydrate Needs: Long-Term Food Storage",
        "points": [
            "Aim for 40-65% of daily calories from carbohydrates for all age groups.",
            "Carbs supply essential energy.",
            "Key sources include rice, oats, and beans."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Basic Daily Rations",
        "points": [
            "Legumes: 1½ cups (300g) deliver 1050 calories and 60g protein.",
            "Oil: 4 tablespoons (56g) supply 480 calories and 56g fat.",
            "Rice: 1 cup (200g) contributes 730 calories and 14g protein.",
            "Salt: 1 teaspoon (6g) provides negligible calories and 2g sodium."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "1-Month Food Storage: Most Basic",
        "points": [
            "Store 1-2 liters of oil.",
            "Keep 20 lbs of beans, 15 lbs of rice, and ½ lb of salt on hand."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Water Storage",
        "points": [
            "Aim for 1 gallon of water per person daily.",
            "Store in food-grade containers and purify as needed (boiling, filtration, or chemicals).",
            "Rotate your water supply every 6-12 months."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Vitamin and Mineral Supplementation",
        "points": [
            "Consider a multivitamin to cover nutrient gaps.",
            "Emphasize vitamins C and D.",
            "Store supplements properly to maintain potency.",
            "Consult with healthcare professionals for tailored advice."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Addressing Food Boredom",
        "points": [
            "Stock a variety of spices and seasonings.",
            "Experiment with different cooking techniques.",
            "Trade food items to increase variety.",
            "Prioritize the nutritional benefits of your meals."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Pest Control",
        "points": [
            "Store food in airtight containers to deter pests.",
            "Utilize natural repellents such as bay leaves.",
            "Regularly inspect food supplies for signs of infestation.",
            "Keep storage areas clean and organized."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Safe Cooking Practices",
        "points": [
            "Ensure proper ventilation when cooking indoors.",
            "Exercise caution with alternative cooking methods (e.g., camp stoves).",
            "Practice thorough hygiene to prevent foodborne illness.",
            "Conserve fuel and other cooking resources."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Tools for Food Preparation",
        "points": [
            "Keep essential tools: a manual can opener, durable cooking pot, basic utensils (spoon, knife, etc.),",
            "and a reliable water filter."
        ],
        "layout": "layout-split",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },
    {
        "title": "Seed Saving",
        "points": [
            "Learn effective seed-saving techniques from your garden.",
            "Store seeds in a cool, dry, and dark place.",
            "Use saved seeds to cultivate your own food.",
            "Share surplus seeds with your community."
        ],
        "layout": "layout-boxed",
        "theme": "theme-red",
        "category": "FOOD SECURITY"
    },

]
