const NETWORK_A = {
    networkName: 'MAGA Network',
    description: 'A map of intelligence nodes with their connections',
    nodes: [
        {
            id: 'nodeB15',
            name: 'Jared Kushner',
            role: 'Investor and Political Advisor',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Jared_Kushner',
                notes: `Jared Kushner is an American investor, real estate developer, and senior advisor to Donald Trump during his presidency. He is married to Ivanka Trump.`
            }
        },
        {
            id: 'nodeB5',
            name: 'Paul Manafort',
            role: 'Political Consultant',
            details: {
                affiliation: 'Trump Campaign, Black Manafort & Stone',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Paul_Manafort',
                notes: `Paul Manafort is a former lobbyist and political consultant who chaired the Trump presidential campaign in 2016. He has connections to Roger Stone and has lobbied on behalf of foreign leaders, including pro-Russian figures.`
            }
        },
        {
            id: 'nodeB11',
            name: 'Bayrock Group',
            role: 'Real Estate Development Firm',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Bayrock_Group',
                notes: `Bayrock Group is a private real estate investment and development firm specializing in luxury residential, commercial, and mixed-use projects. It was founded by Tevfik Arif and has been involved in projects such as Trump SoHo and Trump International Hotel & Tower in Fort Lauderdale.`
            }
        },
        {
            id: 'nodeB1',
            name: 'Roger Stone',
            role: 'Political Strategist',
            details: {
                affiliation: 'Trump Campaign, Republican Party',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Roger_Stone',
                locations: [
                    {
                        city: 'Fort Lauderdale',
                        state: 'Florida',
                        country: 'USA',
                        lat: 26.1224,
                        lon: -80.1373
                    }
                ],
                notes: 'Roger Stone is a political strategist and lobbyist known for his involvement in Republican campaigns and his association with Donald Trump.'
            }
        },
        {
            id: 'nodeB19',
            name: 'Paul Erickson',
            role: 'Republican Political Operative',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Paul_Erickson',
                notes: `Paul Erickson is a Republican political operative who was romantically involved with Maria Butina. He helped her gain access to U.S. political circles and facilitated her connections with the NRA.`
            }
        },
        {
            id: 'nodeB20',
            name: 'Patrick M. Byrne',
            role: 'Businessman and Conspiracy Theorist',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Patrick_M._Byrne',
                notes: `Patrick M. Byrne is the former CEO of Overstock.com and a known Trump conspiracy theorist. He was romantically involved with Maria Butina and claimed the FBI encouraged him to pursue her, a claim denied by retired FBI officials.`
            }
        },
        {
            id: 'nodeB18',
            name: 'National Rifle Association (NRA)',
            role: 'Gun Rights Advocacy Group',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/National_Rifle_Association',
                notes: `The NRA is a U.S.-based gun rights advocacy group. Maria Butina and Alexander Torshin sought to use the NRA as a channel to build relationships with influential U.S. political figures.`
            }
        },
        {
            id: 'node20',
            name: 'Gerald Ford',
            role: 'Former U.S. President',
            details: {
                status: 'deceased',
                link: 'https://en.wikipedia.org/wiki/Gerald_Ford',
                notes: 'Gerald Ford was the 38th President of the United States, serving from 1974 to 1977. Paul Manafort advised his 1976 presidential campaign.'
            }
        },
        {
            id: 'node21',
            name: 'Ronald Reagan',
            role: 'Former U.S. President',
            details: {
                status: 'deceased',
                link: 'https://en.wikipedia.org/wiki/Ronald_Reagan',
                notes: 'Ronald Reagan was the 40th President of the United States, serving from 1981 to 1989. Paul Manafort advised his 1980 and 1984 presidential campaigns.'
            }
        },
        {
            id: 'node22',
            name: 'George H. W. Bush',
            role: 'Former U.S. President',
            details: {
                status: 'deceased',
                link: 'https://en.wikipedia.org/wiki/George_H._W._Bush',
                notes: 'George H. W. Bush was the 41st President of the United States, serving from 1989 to 1993. Paul Manafort advised his 1988 presidential campaign.'
            }
        },
        {
            id: 'node23',
            name: 'Bob Dole',
            role: 'Former U.S. Senator and Presidential Candidate',
            details: {
                status: 'deceased',
                link: 'https://en.wikipedia.org/wiki/Bob_Dole',
                notes: 'Bob Dole was a U.S. Senator and the Republican presidential candidate in 1996. Paul Manafort advised his campaign.'
            }
        },
        {
            id: 'node1',
            name: 'Elon Musk',
            role: 'Messenger',
            details: {
                affiliation: 'SpaceX, Tesla, America PAC',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Elon_Musk',
                locations: [
                    {
                        city: 'Austin',
                        state: 'Texas',
                        country: 'USA',
                        lat: 30.2672,
                        lon: -97.7431
                    },
                    {
                        city: 'Hawthorne',
                        state: 'California',
                        country: 'USA',
                        lat: 33.9164,
                        lon: -118.3526
                    }
                ],
                financials: {
                    netWorth: '$250 billion',
                    primarySource: 'Tesla, SpaceX',
                    campaignContributions: '$50 million (to The America PAC)'
                }
            }
        },
        {
            id: 'node2',
            name: 'Peter Thiel',
            role: 'Messenger',
            details: {
                affiliation: 'Palantir, Polymarket, America PAC',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Peter_Thiel',
            }
        },
        {
            id: 'node3',
            name: 'NATO',
            role: 'Security Organization',
            details: {
                affiliation: 'NATO',
                status: 'active',
                notes: 'NATO is considering invoking Article 5 in accordance with the Cyber policy, and no, it’s not because we “don’t like Elon." It’s because Elon very quietly and rapidly built a low-orbit Direct-to-Cell constellation, in which 265 satellites were in place and operational just two weeks prior to the Nov 5 election. These low-orbit satellites effectively place the equivalent of a hacker’s “Stingray” device in every voting precinct in America.',
                link: 'https://en.wikipedia.org/wiki/NATO'
            }
        },
        {
            id: 'node4',
            name: 'Leonard Leo',
            role: 'Financier',
            details: {
                affiliation: 'Unknown',
                status: 'active',
                notes: ' Far-right predatory billionaire',
                link: 'https://en.wikipedia.org/wiki/Leonard_Leo'
            }
        },
        {
            id: 'node5',
            name: 'Tripp Lite',
            role: 'Election Security Supplier',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Tripp_Lite',
                notes: `Tripp Lite is an election security supplier that was formerly owned by Barre Seid. It was donated to Marble Freedom Trust before being sold to Eaton Corp. in 2021.`,
                technical: {
                    products: ['Power protection devices', 'Uninterruptible power supplies (UPS)', 'Surge protectors'],
                    applications: ['Election machine infrastructure', 'Data center power management'],
                    notableTechnologies: ['SmartPro UPS systems', 'PowerAlert software']
                }
            }
        },
        {
            id: 'node6',
            name: 'Eaton Corp.',
            role: 'Tech & Security Partner',
            details: {
                involvement: 'Business and election systems',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Eaton_Corporation',
                notes: `Eaton Corp. is a technology and security partner that acquired Tripp Lite from Marble Freedom Trust in 2021.`,
                locations: [
                    {
                        city: 'Dublin',
                        state: '',
                        country: 'Ireland',
                        lat: 53.3498,
                        lon: -6.2603
                    },
                    {
                        city: 'Cleveland',
                        state: 'Ohio',
                        country: 'USA',
                        lat: 41.4993,
                        lon: -81.6944
                    }
                ],
                financials: {
                    companyValuation: '$20 billion',
                    recentAcquisition: 'Tripp Lite ($1.65 billion in 2021)'
                },
                technical: {
                    products: ['Electrical components', 'Power management systems'],
                    applications: ['Industrial automation', 'Election systems security'],
                    notableTechnologies: ['Brightlayer digital platform', 'Cybersecure power systems']
                }
            }
        },
        {
            id: 'node7',
            name: 'Polymarket',
            role: 'Market Predictor',
            details: {
                involvement: 'Election predictions',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Polymarket',
            }
        },
        {
            id: 'node8',
            name: 'Donald Trump',
            role: 'Political Figure',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Donald_Trump',
                notes: `Trump acknowledged Musk’s expertise during his campaign, highlighting a possible alliance. Trump is the single largest contributor to the America PAC, which was created by Elon Musk to support his 2024 presidential campaign. The PAC's primary purpose is to finance canvassing operations, with Musk contributing 91% of declared contributions as of December 2024.
                
                Trump has also been known to have private conversations with Musk, as reported by Murdoch’s WSJ.
                
                Additionally, Trump has been in contact with Putin, which raises concerns about the implications of these connections on national security and election integrity.
                
                The PAC's activities and the involvement of figures like Musk and Thiel have sparked debates about the influence of money in politics and the potential for foreign interference in elections.`
            }
        },
        {
            id: 'node10',
            name: 'Rupert Murdoch',
            role: 'Media Mogul',
            details: {
                status: 'active',
                affiliation: 'News Corp, Fox News, Wall Street Journal',
                link: 'https://en.wikipedia.org/wiki/Rupert_Murdoch',
                notes: `Murdoch's coverage brought Musk’s interactions with Putin to light, suggesting deeper connections. His media empire has played a significant role in shaping public perception and political narratives, particularly regarding the 2024 presidential election and the influence of technology on politics. Murdoch's reporting has raised questions about the implications of these connections on national security and election integrity.`
            }
        },
        {
            id: 'node11',
            name: 'Palantir',
            role: 'Data Analytics',
            details: {
                ownedBy: 'Peter Thiel',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Palantir_Technologies',
                notes: `Palantir is a data analytics company co-founded by Peter Thiel. It has been involved in various projects, including election forecasting and security operations.`,
                technical: {
                    products: ['Palantir Foundry', 'Palantir Gotham'],
                    applications: ['Data integration', 'Intelligence analysis', 'Election security'],
                    notableTechnologies: ['AI-driven analytics', 'Secure data pipelines']
                }
            }
        },
        {
            id: 'node12',
            name: 'Barre Seid',
            role: 'Businessman',
            details: {
                from: 'Chicago',
                note: 'Former owner of Tripp Lite; donated the company to Marble Freedom Trust.',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Barre_Seid',
                notes: `Barre Seid is a businessman from Chicago who was the former owner of Tripp Lite. He donated the company to Marble Freedom Trust before it was sold to Eaton Corp. in 2021. His involvement in the election security landscape has raised questions about the influence of money in politics and the potential for conflicts of interest, particularly in relation to his connections with Leonard Leo and other far-right figures. Seid's actions have implications for election integrity and the role of private interests in shaping public policy.`
            }
        },
        {
            id: 'node13',
            name: 'The America PAC',
            role: 'Super PAC',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/The_America_PAC',
                notes: `The America PAC is a super PAC created by Elon Musk with backing from prominent tech businessmen to support Donald Trump\'s 2024 presidential campaign. Its primary purpose is to finance canvassing operations.`,
                financials: {
                    totalContributions: '$55 million',
                    primaryDonor: 'Elon Musk',
                    MuskContributionPercentage: '91%'
                }
            }
        },
        {
            id: 'node14',
            name: 'SpaceX',
            role: 'Aerospace Company',
            details: {
                notes: 'SpaceX rapidly built a low-orbit Direct-to-Cell constellation, operational just two weeks prior to the Nov 5 election.',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/SpaceX',
                locations: [
                    {
                        city: 'Hawthorne',
                        state: 'California',
                        country: 'USA',
                        lat: 33.9164,
                        lon: -118.3526
                    },
                    {
                        city: 'Boca Chica',
                        state: 'Texas',
                        country: 'USA',
                        lat: 25.9972,
                        lon: -97.1566
                    }
                ],
                technical: {
                    products: ['Falcon rockets', 'Starship spacecraft', 'Starlink satellites'],
                    applications: ['Satellite internet', 'Space exploration', 'Government payload launches'],
                    notableTechnologies: ['Reusable rocket technology', 'Low-latency satellite internet']
                }
            }
        },
        {
            id: 'node15',
            name: 'Dominion Voting Systems',
            role: 'Election Technology Supplier',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Dominion_Voting_Systems',
            }
        },
        {
            id: 'node16',
            name: 'United States Intelligence Community (IC)',
            role: 'Intelligence Organization',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/United_States_Intelligence_Community',
                notes: `The United States Intelligence Community collaborates with NATO on intelligence sharing and security operations. This collaboration raises concerns about the implications of foreign influence on U.S. elections and national security. The nature of their discussions and the potential impact on geopolitical dynamics remain subjects of speculation and scrutiny.`
            }
        },
        {
            id: 'node17',
            name: 'United States Department of Defense (DoD)',
            role: 'Executive Department',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/United_States_Department_of_Defense',
            }
        },
        {
            id: 'node18',
            name: 'Tesla, Inc.',
            role: 'Automotive and Clean Energy Company',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Tesla,_Inc.',
                locations: [
                    {
                        city: 'Austin',
                        state: 'Texas',
                        country: 'USA',
                        lat: 30.2672,
                        lon: -97.7431
                    },
                    {
                        city: 'Fremont',
                        state: 'California',
                        country: 'USA',
                        lat: 37.5483,
                        lon: -121.9886
                    }
                ],
                financials: {
                    companyValuation: '$800 billion',
                    revenue2024: '$81.5 billion',
                    netIncome2024: '$12.6 billion'
                }
            }
        },
        {
            id: 'node19',
            name: 'Twitter',
            role: 'Social Media Platform',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Twitter',
                notes: 'Twitter is a social media platform acquired by Elon Musk in 2022. The acquisition raised concerns about the implications for free speech, content moderation, and the potential influence of powerful individuals on public discourse.'
            }
        },
        {
            id: 'node24',
            name: 'Ivanka Trump',
            role: 'Businesswoman and Political Advisor',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Ivanka_Trump',
                notes: `Ivanka Trump is an American businesswoman and former senior advisor to her father, Donald Trump, during his presidency. She is married to Jared Kushner and has been involved in various business and political activities.`
            }
        }

    ],
    connections: [
        {
            source: 'node1',
            target: 'node2',
            relationship: 'collaboration',
            date: '',
            details: {
                strength: 'high',
                type: 'business',
                notes: `One week after Musk created his “America PAC” for Trump, Eaton Corp. announced a partnership with Palantir, a company associated with Peter Thiel.`
            }
        },
        {
            source: 'node1',
            target: 'node3',
            relationship: 'triggered concern',
            date: '',
            details: {
                notes: 'NATO considered invoking Article 5 due to Musk’s rapid deployment of a low-orbit Direct-to-Cell satellite constellation.'
            }
        },
        {
            source: 'node4',
            target: 'node5',
            relationship: 'transaction',
            date: '',
            details: {
                notes: 'Following Barre Seid’s transfer of Tripp Lite, Leonard Leo took control of the company.'
            }
        },
        {
            source: 'node5',
            target: 'node6',
            relationship: 'acquisition',
            date: '2021',
            details: {
                notes: 'Leonard Leo eventually sold Tripp Lite to Eaton Corp. in 2021.'
            }
        },
        {
            source: 'node2',
            target: 'node7',
            relationship: 'ownership stake',
            date: '',
            details: {
                notes: 'Peter Thiel holds an ownership interest in Polymarket, renowned for its election forecasts. Polymarket had eerily accurate predictions of a Trump victory, and was raided shortly after the Nov 5 election.'
            }
        },
        {
            source: 'node1',
            target: 'node9',
            relationship: 'private contact',
            date: '',
            details: {
                notes: 'Musk maintained over two years of private contact with Putin, as later reported by Murdoch’s WSJ.'
            }
        },
        {
            source: 'node1',
            target: 'node10',
            relationship: 'media leak',
            date: '',
            details: {
                notes: 'Rupert Murdoch’s coverage brought Musk’s interactions with Putin to light, suggesting deeper connections.'
            }
        },
        {
            source: 'node8',
            target: 'node1',
            relationship: 'political endorsement',
            date: '',
            details: {
                notes: 'Trump acknowledged Musk’s expertise during his campaign, highlighting a possible alliance.'
            }
        },
        {
            source: 'node2',
            target: 'node11',
            relationship: 'ownership',
            date: '',
            details: {
                notes: 'Peter Thiel owns Palantir.'
            }
        },
        {
            source: 'node6',
            target: 'node11',
            relationship: 'partnership',
            date: 'July 2024',
            details: {
                notes: 'One week after Musk created his “America PAC” for Trump, Eaton Corp. announced a partnership with Palantir. The Eaton/Palantir partnership focused on secure erasure of digital footprints on Eaton devices, and on AI management of large datasets - such as large quantities of ballot images.'
            }
        },
        {
            source: 'node12',
            target: 'node5',
            relationship: 'ownership transfer',
            date: '',
            details: {
                notes: 'Barre Seid, former owner of Tripp Lite, donated the company to Marble Freedom Trust before it was sold to Eaton Corp. in 2021.'
            }
        },
        {
            source: 'node1',
            target: 'node13',
            relationship: 'created',
            date: 'July 2024',
            details: {
                notes: 'Elon Musk is the primary donor and creator of The America PAC, financing canvassing operations for Trump\'s 2024 presidential campaign with 91% of the declared contributions.'
            }
        },
        {
            source: 'node1',
            target: 'node14',
            relationship: 'launched constellation',
            date: '',
            details: {
                notes: 'Rapidly built a low-orbit Direct-to-Cell constellation, in which 265 satellites were in place and operational just two weeks prior to the Nov 5 election.'
            }
        },
        {
            source: 'node15',
            target: 'node5', // Example connection to Tripp Lite
            relationship: 'technology provider',
            date: '',
            details: {
                notes: 'Dominion Voting Systems provides election technology solutions, including voting machines and tabulators.'
            }
        },
        {
            source: 'node16', // United States Intelligence Community (IC)
            target: 'node11', // Palintir
            relationship: 'collaboration',
            date: '',
            details: {
                notes: 'The United States Intelligence Community collaborates with NATO on intelligence sharing and security operations.'
            }
        },
        {
            source: 'node16', // United States Intelligence Community (IC)
            target: 'node3', //NATO
            relationship: 'collaboration',
            date: '',
            details: {
                notes: 'The United States Intelligence Community collaborates with NATO on intelligence sharing and security operations.'
            }
        },
        {
            source: 'node17', // United States Department of Defense (DoD)
            target: 'node16', // United States Intelligence Community (IC)
            relationship: 'collaboration',
            date: '',
            details: {
                notes: ''
            }
        },
        {
            source: 'node17', // United States Department of Defense (DoD)
            target: 'node11', // United States Intelligence Community (IC)
            relationship: 'collaboration',
            date: '',
            details: {
                notes: ''
            }
        },
        {
            source: 'node17', // United States Department of Defense (DoD)
            target: 'node3', // United States Intelligence Community (IC)
            relationship: 'collaboration',
            date: '',
            details: {
                notes: ''
            }
        },
        {
            source: 'node14', // SpaceX
            target: 'node17', // United States Department of Defense (DoD)
            relationship: 'contractual relationship',
            date: '',
            details: {
                notes: 'SpaceX provides launch services to the DoD, including the launch of classified satellites and other payloads. SpaceX has about $22 billion in government contracts, with $15 billion derived from NASA.'
            }
        },
        {
            source: 'node1', // Elon Musk
            target: 'node18', // Tesla, Inc.
            relationship: 'founder and CEO',
            date: '',
            details: {
                notes: 'Elon Musk is the founder and CEO of Tesla, Inc., which focuses on electric vehicles and clean energy solutions.'
            }
        },
        {
            source: 'node6', // Eaton Corp.
            target: 'node18', // Tesla, Inc.
            relationship: 'partnership',
            date: 'September 2024',
            details: {
                notes: 'In September 2024, Eaton Corp. announced another partnership, this time with Trump’s single largest campaign contributor, Elon Musk (via Tesla), further dirtying the election waters, and providing a convenient cover for their correspondence and monetary connections.'
            }
        },
        {
            source: 'node8', // Tesla, Inc.
            target: 'node9', // Elon Musk
            relationship: 'private',
            date: '',
            details: {
                notes: 'They talk all of the time.'
            }
        },
        // add a node connecting thiel to america pac
        {
            source: 'node2', // Peter Thiel
            target: 'node13', // The America PAC
            relationship: 'support',
            date: '',
            details: {
                notes: 'Peter Thiel is co-founder of The America PAC, which was created by Elon Musk.'
            }
        },
        {
            source: 'node1', // Elon Musk
            target: 'node19', // Twitter
            relationship: 'acquired',
            date: '2022',
            details: {
                notes: 'Elon Musk acquired Twitter in 2022, raising concerns about free speech, content moderation, and the influence of powerful individuals on public discourse.'
            }
        },
        {
            source: 'nodeB14', // Wendi Deng Murdoch
            target: 'node10', // Rupert Murdoch
            relationship: 'former spouse',
            date: '1999-2013',
            details: {
                notes: 'Wendi Deng Murdoch was married to Rupert Murdoch from 1999 to 2013. She played a significant role in his media empire during their marriage.'
            }
        },

        // Connection: Wendi Deng Murdoch to Ivanka Trump
        {
            source: 'nodeB14', // Wendi Deng Murdoch
            target: 'node24', // Ivanka Trump
            relationship: 'friend',
            date: '',
            details: {
                notes: 'Wendi Deng Murdoch is known to be a friend of Ivanka Trump and Jared Kushner, often attending social events together.'
            }
        },
        // Connection: Ivanka Trump to Donald Trump
        {
            source: 'node24', // Ivanka Trump
            target: 'node8', // Donald Trump
            relationship: 'daughter',
            date: '',
            details: {
                notes: 'Ivanka Trump is the daughter of Donald Trump and served as a senior advisor during his presidency.'
            }
        },

        // Connection: Ivanka Trump to Wendi Deng Murdoch
        {
            source: 'node24', // Ivanka Trump
            target: 'nodeB14', // Wendi Deng Murdoch
            relationship: 'friend',
            date: '',
            details: {
                notes: 'Ivanka Trump is known to be a friend of Wendi Deng Murdoch, often attending social events together.'
            }
        },

        // Connection: Ivanka Trump to Jared Kushner
        {
            source: 'node24', // Ivanka Trump
            target: 'nodeB15', // Jared Kushner
            relationship: 'spouse',
            date: '',
            details: {
                notes: 'Ivanka Trump is married to Jared Kushner, an investor and former senior advisor to Donald Trump.'
            }
        }
    ]
};