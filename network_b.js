const NETWORK_B = {
    networkName: 'Alternate Network',
    description: 'A map of intelligence nodes with their connections',
    nodes: [
        {
            id: 'node9',
            name: 'Vladimir Putin',
            role: 'Political Leader',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Vladimir_Putin',
                notes: `Musk maintained over two years of private contact with Putin, as later reported by Murdoch’s WSJ. This connection raises concerns about the implications of foreign influence on U.S. elections and national security.`
            }
        },

        {
            id: 'nodeB2',
            name: 'Felix Sater',
            role: 'Businessman',
            details: {
                affiliation: 'Bayrock Group, Trump Organization',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Felix_Sater',
                locations: [
                    {
                        city: 'New York City',
                        state: 'New York',
                        country: 'USA',
                        lat: 40.7128,
                        lon: -74.0060
                    }
                ],
                notes: 'Felix Sater is a businessman and former managing director of Bayrock Group, known for his connections to the Trump Organization and his involvement in real estate projects.'
            }
        },
        {
            id: 'nodeB3',
            name: 'Artem Klyushin',
            role: 'PR Manager',
            details: {
                affiliation: 'Advertising Agency',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Artem_Klyushin',
                locations: [
                    {
                        city: 'Moscow',
                        state: '',
                        country: 'Russia',
                        lat: 55.7558,
                        lon: 37.6173
                    }
                ],
                notes: `Artem Klyushin is a PR manager known for his acquaintance with Donald Trump. In June 2013, he attended a private dinner in Las Vegas with Trump and Araz Agalarov to discuss the Miss Universe contest held in Moscow later that year.`
            }
        },
        {
            id: 'nodeB4',
            name: 'Araz Agalarov',
            role: 'Business Tycoon',
            details: {
                affiliation: 'Crocus Group',
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Araz_Agalarov',
                locations: [
                    {
                        city: 'Moscow',
                        state: '',
                        country: 'Russia',
                        lat: 55.7558,
                        lon: 37.6173
                    }
                ],
                notes: `Araz Agalarov is a Russian billionaire and business tycoon who collaborated with Donald Trump on the Miss Universe contest in Moscow in 2013.`
            }
        },

        {
            id: 'nodeB6',
            name: 'Viktor Yanukovych',
            role: 'Former President of Ukraine',
            details: {
                status: 'inactive',
                link: 'https://en.wikipedia.org/wiki/Viktor_Yanukovych',
                notes: 'Viktor Yanukovych was the President of Ukraine from 2010 to 2014. Paul Manafort worked as his political consultant, helping him win the 2010 presidential election.'
            }
        },
        {
            id: 'nodeB7',
            name: 'Ferdinand Marcos',
            role: 'Former Dictator of the Philippines',
            details: {
                status: 'deceased',
                link: 'https://en.wikipedia.org/wiki/Ferdinand_Marcos',
                notes: 'Ferdinand Marcos was the President and dictator of the Philippines from 1965 to 1986. Paul Manafort lobbied on his behalf during the 1980s.'
            }
        },
        {
            id: 'nodeB8',
            name: 'Mobutu Sese Seko',
            role: 'Former Dictator of Zaire',
            details: {
                status: 'deceased',
                link: 'https://en.wikipedia.org/wiki/Mobutu_Sese_Seko',
                notes: 'Mobutu Sese Seko was the President and dictator of Zaire (now the Democratic Republic of Congo) from 1965 to 1997. Paul Manafort lobbied on his behalf during the 1980s.'
            }
        },
        {
            id: 'nodeB9',
            name: 'Jonas Savimbi',
            role: 'Angolan Guerrilla Leader',
            details: {
                status: 'deceased',
                link: 'https://en.wikipedia.org/wiki/Jonas_Savimbi',
                notes: 'Jonas Savimbi was the leader of the UNITA rebel group in Angola. Paul Manafort lobbied on his behalf during the 1980s.'
            }
        },
        {
            id: 'nodeB10',
            name: 'Rick Gates',
            role: 'Business Associate',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Rick_Gates',
                notes: 'Rick Gates was a business associate of Paul Manafort. They were indicted together in 2017 for charges related to their consulting work for the pro-Russian government of Viktor Yanukovych in Ukraine.'
            }
        },

        {
            id: 'nodeB12',
            name: 'Tevfik Arif',
            role: 'Founder of Bayrock Group',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Tevfik_Arif',
                notes: `Tevfik Arif is a former Soviet official from Kazakhstan and the founder of Bayrock Group. He has been involved in various real estate projects, including partnerships with Donald Trump.`
            }
        },
        {
            id: 'nodeB13',
            name: 'Oleg Deripaska',
            role: 'Russian Oligarch',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Oleg_Deripaska',
                notes: `Oleg Deripaska is a Russian oligarch and industrialist with close ties to Vladimir Putin. He is the founder of Basic Element, a Russian industrial group, and has been linked to Paul Manafort through business dealings and lobbying efforts.`
            }
        },
        {
            id: 'nodeB14',
            name: 'Wendi Deng Murdoch',
            role: 'Businesswoman and Media Executive',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Wendi_Deng_Murdoch',
                notes: `Wendi Deng Murdoch is a Chinese-American businesswoman and media executive. She was married to Rupert Murdoch and has been linked to influential figures, including Vladimir Putin and Jared Kushner.`
            }
        },

        {
            id: 'nodeB16',
            name: 'Maria Butina',
            role: 'Russian Activist and Politician',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Maria_Butina',
                notes: `Maria Butina is a Russian activist and politician who was convicted in the United States for acting as an unregistered foreign agent. She has been linked to efforts to influence U.S. politics and has connections to the National Rifle Association (NRA) and Russian officials.`
            }
        },
        {
            id: 'nodeB17',
            name: 'Alexander Torshin',
            role: 'Russian Official',
            details: {
                status: 'active',
                link: 'https://en.wikipedia.org/wiki/Alexander_Torshin',
                notes: `Alexander Torshin is a Russian official and former deputy governor of the Central Bank of Russia. He worked with Maria Butina to establish connections with U.S. political organizations, including the NRA.`
            }
        },


    ],
    connections: [
        {
            source: 'nodeB1', // Roger Stone
            target: 'node8', // Trump
            relationship: 'advisor',
            date: '2020',
            details: {
                notes: 'Roger Stone served as an advisor to this individual during the 2020 campaign.'
            }
        },
        {
            source: 'nodeB2', // Felix Sater
            target: 'node8', // Trump
            relationship: 'business associate',
            date: '2000s',
            details: {
                notes: 'Felix Sater worked with the Trump Organization on real estate projects, including the Trump SoHo development.'
            }
        },
        {
            source: 'nodeB2', // Felix Sater
            target: 'nodeB1', // Roger Stone
            relationship: 'acquaintance',
            date: '',
            details: {
                notes: 'Felix Sater and Roger Stone are known to have connections through their mutual associations with Donald Trump.'
            }
        },
        {
            source: 'nodeB3', // Artem Klyushin
            target: 'node8', // Trump
            relationship: 'acquaintance',
            date: '2013',
            details: {
                image: 'images/trump_artem.webp',
                notes: 'Artem Klyushin attended a private dinner with Donald Trump in Las Vegas in June 2013 to discuss the Miss Universe contest.'
            }
        },
        {
            source: 'nodeB3', // Artem Klyushin
            target: 'nodeB2', // Felix Sater
            relationship: 'business connection',
            date: '',
            details: {
                notes: 'Artem Klyushin and Felix Sater are connected through their mutual associations with Donald Trump and Russian business circles.'
            }
        },
        {
            source: 'nodeB3', // Artem Klyushin
            target: 'nodeB4', // Araz Agalarov
            relationship: 'collaborator',
            date: '2013',
            details: {
                notes: 'Artem Klyushin collaborated with Araz Agalarov on the Miss Universe contest in Moscow in 2013.'
            }
        },
        {
            source: 'nodeB4', // Araz Agalarov
            target: 'node8', // Trump
            relationship: 'business partner',
            date: '2013',
            details: {
                notes: 'Araz Agalarov partnered with Donald Trump on the Miss Universe contest in Moscow in 2013.'
            }
        },
        {
            source: 'node9', // Vladimir Putin
            target: 'node1', // Elon Musk
            relationship: 'private contact',
            date: '2018-2020',
            details: {
                notes: 'Elon Musk maintained private contact with Vladimir Putin over two years, raising concerns about foreign influence.'
            }
        },
        {
            source: 'nodeB5', // Paul Manafort
            target: 'nodeB1', // Roger Stone
            relationship: 'business partner',
            date: '1980s',
            details: {
                notes: 'Paul Manafort co-founded the lobbying firm Black, Manafort & Stone with Roger Stone.'
            }
        },
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node9', // Vladimir Putin
            relationship: 'lobbyist',
            date: '2010s',
            details: {
                notes: 'Paul Manafort lobbied on behalf of pro-Russian leaders, including Viktor Yanukovych, who had close ties to Vladimir Putin.'
            }
        },
        {
            source: 'nodeB5', // Paul Manafort
            target: 'nodeB6', // Viktor Yanukovych (new node)
            relationship: 'political consultant',
            date: '2010s',
            details: {
                notes: 'Paul Manafort worked as a political consultant for Viktor Yanukovych, the former President of Ukraine, helping him win the 2010 presidential election.'
            }
        },

        // New connection: Paul Manafort to Ferdinand Marcos
        {
            source: 'nodeB5', // Paul Manafort
            target: 'nodeB7', // Ferdinand Marcos (new node)
            relationship: 'lobbyist',
            date: '1980s',
            details: {
                notes: 'Paul Manafort lobbied on behalf of Ferdinand Marcos, the former dictator of the Philippines, during the 1980s.'
            }
        },

        // New connection: Paul Manafort to Mobutu Sese Seko
        {
            source: 'nodeB5', // Paul Manafort
            target: 'nodeB8', // Mobutu Sese Seko (new node)
            relationship: 'lobbyist',
            date: '1980s',
            details: {
                notes: 'Paul Manafort lobbied on behalf of Mobutu Sese Seko, the former dictator of Zaire, during the 1980s.'
            }
        },

        // New connection: Paul Manafort to Jonas Savimbi
        {
            source: 'nodeB5', // Paul Manafort
            target: 'nodeB9', // Jonas Savimbi (new node)
            relationship: 'lobbyist',
            date: '1980s',
            details: {
                notes: 'Paul Manafort lobbied on behalf of Jonas Savimbi, the Angolan guerrilla leader, during the 1980s.'
            }
        },

        // New connection: Paul Manafort to Rick Gates
        {
            source: 'nodeB5', // Paul Manafort
            target: 'nodeB10', // Rick Gates (new node)
            relationship: 'business associate',
            date: '2010s',
            details: {
                notes: 'Paul Manafort and Rick Gates were indicted together in 2017 for charges related to their consulting work for the pro-Russian government of Viktor Yanukovych in Ukraine.'
            }
        },

        // New connection: Paul Manafort to Donald Trump
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node8', // Donald Trump
            relationship: 'campaign chairman',
            date: '2016',
            details: {
                notes: 'Paul Manafort served as the campaign chairman for Donald Trump from June to August 2016.'
            }
        },
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node20', // Gerald Ford (new node in NETWORK_B)
            relationship: 'advisor',
            date: '1976',
            details: {
                notes: 'Paul Manafort served as an advisor to Gerald Ford during his 1976 presidential campaign.'
            }
        },

        // New connection: Paul Manafort to Ronald Reagan
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node21', // Ronald Reagan (new node in NETWORK_B)
            relationship: 'advisor',
            date: '1980, 1984',
            details: {
                notes: 'Paul Manafort served as an advisor to Ronald Reagan during his 1980 and 1984 presidential campaigns.'
            }
        },

        // New connection: Paul Manafort to George H. W. Bush
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node22', // George H. W. Bush (new node in NETWORK_B)
            relationship: 'advisor',
            date: '1988',
            details: {
                notes: 'Paul Manafort served as an advisor to George H. W. Bush during his 1988 presidential campaign.'
            }
        },

        // New connection: Paul Manafort to Bob Dole
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node23', // Bob Dole (new node in NETWORK_B)
            relationship: 'advisor',
            date: '1996',
            details: {
                notes: 'Paul Manafort served as an advisor to Bob Dole during his 1996 presidential campaign.'
            }
        },
        // Connection: Paul Manafort to Bayrock Group
        {
            source: 'nodeB5', // Paul Manafort
            target: 'nodeB11', // Bayrock Group
            relationship: 'business connection',
            date: '2000s',
            details: {
                notes: 'Paul Manafort had indirect business connections with Bayrock Group through shared real estate projects and lobbying efforts.'
            }
        },

        // Connection: Bayrock Group to Donald Trump
        {
            source: 'nodeB11', // Bayrock Group
            target: 'node8', // Donald Trump
            relationship: 'business partner',
            date: '2000s',
            details: {
                notes: 'Bayrock Group partnered with Donald Trump on projects such as Trump SoHo and Trump International Hotel & Tower in Fort Lauderdale.'
            }
        },

        // Connection: Bayrock Group to Tevfik Arif
        {
            source: 'nodeB11', // Bayrock Group
            target: 'nodeB12', // Tevfik Arif
            relationship: 'founded by',
            date: '2001',
            details: {
                notes: 'Tevfik Arif founded Bayrock Group in 2001 and led its real estate development projects.'
            }
        },

        // Connection: Bayrock Group to Felix Sater
        {
            source: 'nodeB11', // Bayrock Group
            target: 'nodeB2', // Felix Sater
            relationship: 'employed',
            date: '2003-2008',
            details: {
                notes: 'Felix Sater served as the managing director of Bayrock Group from 2003 to 2008.'
            }
        },

        // Connection: Felix Sater to Donald Trump
        {
            source: 'nodeB2', // Felix Sater
            target: 'node8', // Donald Trump
            relationship: 'business associate',
            date: '2000s',
            details: {
                notes: 'Felix Sater worked with Donald Trump on real estate projects, including Trump SoHo and Trump International Hotel & Tower in Fort Lauderdale.'
            }
        },

        // Connection: Paul Manafort to Gerald Ford
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node20', // Gerald Ford
            relationship: 'advisor',
            date: '1976',
            details: {
                notes: 'Paul Manafort served as an advisor to Gerald Ford during his 1976 presidential campaign.'
            }
        },

        // Connection: Paul Manafort to Ronald Reagan
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node21', // Ronald Reagan
            relationship: 'advisor',
            date: '1980, 1984',
            details: {
                notes: 'Paul Manafort served as an advisor to Ronald Reagan during his 1980 and 1984 presidential campaigns.'
            }
        },

        // Connection: Paul Manafort to George H. W. Bush
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node22', // George H. W. Bush
            relationship: 'advisor',
            date: '1988',
            details: {
                notes: 'Paul Manafort served as an advisor to George H. W. Bush during his 1988 presidential campaign.'
            }
        },

        // Connection: Paul Manafort to Bob Dole
        {
            source: 'nodeB5', // Paul Manafort
            target: 'node23', // Bob Dole
            relationship: 'advisor',
            date: '1996',
            details: {
                notes: 'Paul Manafort served as an advisor to Bob Dole during his 1996 presidential campaign.'
            }
        },
        {
            source: 'nodeB12', // Tevfik Arif
            target: 'node8', // Donald Trump
            relationship: 'collaborators',
            date: 'September 19, 2007',
            details: {
                image: 'images/trump_tevfikarif.jpg',
                notes: 'Eric Trump, Tevfik Arif, Donald Trump Jr., Ivanka Trump, Donald Trump, Tamir Sapir, Alex Sapir, and Julius Schwarz attended the Trump Soho launch on September 19, 2007, in New York City.'
            }
        },
        {
            source: 'nodeB13', // Oleg Deripaska
            target: 'node9', // Vladimir Putin
            relationship: 'ally',
            date: '',
            details: {
                notes: 'Oleg Deripaska is a Russian oligarch with close ties to Vladimir Putin. He has been a key figure in Russian industrial and political circles.'
            }
        },

        // Connection: Oleg Deripaska to Paul Manafort
        {
            source: 'nodeB13', // Oleg Deripaska
            target: 'nodeB5', // Paul Manafort
            relationship: 'business associate',
            date: '2000s',
            details: {
                notes: 'Paul Manafort worked with Oleg Deripaska on lobbying efforts and business dealings, including a $10 million annual contract to promote Russian interests in the United States.'
            }
        },

        // Connection: Oleg Deripaska to Donald Trump
        {
            source: 'nodeB13', // Oleg Deripaska
            target: 'node8', // Donald Trump
            relationship: 'indirect connection',
            date: '',
            details: {
                notes: 'Oleg Deripaska has indirect ties to Donald Trump through Paul Manafort and other intermediaries.'
            }
        },
        // Connection: Wendi Deng Murdoch to Rupert Murdoch
        {
            source: 'nodeB14', // Wendi Deng Murdoch
            target: 'node10', // Rupert Murdoch
            relationship: 'former spouse',
            date: '1999-2013',
            details: {
                notes: 'Wendi Deng Murdoch was married to Rupert Murdoch from 1999 to 2013. She played a significant role in his media empire during their marriage.'
            }
        },

        // Connection: Wendi Deng Murdoch to Vladimir Putin
        {
            source: 'nodeB14', // Wendi Deng Murdoch
            target: 'node9', // Vladimir Putin
            relationship: 'alleged acquaintance',
            date: '',
            details: {
                notes: 'Wendi Deng Murdoch has been rumored to have close ties to Vladimir Putin, though the nature of their relationship remains speculative.'
            }
        },

        // Connection: Wendi Deng Murdoch to Jared Kushner
        {
            source: 'nodeB14', // Wendi Deng Murdoch
            target: 'nodeB15', // Jared Kushner (new node)
            relationship: 'friend',
            date: '',
            details: {
                notes: 'Wendi Deng Murdoch is known to be a friend of Jared Kushner and Ivanka Trump, often attending social events together.'
            }
        },
        // Connection: Maria Butina to Alexander Torshin
        {
            source: 'nodeB16', // Maria Butina
            target: 'nodeB17', // Alexander Torshin (new node)
            relationship: 'associate',
            date: '',
            details: {
                notes: 'Maria Butina worked closely with Alexander Torshin, a Russian official and former deputy governor of the Central Bank of Russia, to build connections with U.S. political organizations.'
            }
        },

        // Connection: Maria Butina to NRA
        {
            source: 'nodeB16', // Maria Butina
            target: 'nodeB18', // NRA (new node)
            relationship: 'liaison',
            date: '',
            details: {
                notes: 'Maria Butina established ties with the National Rifle Association (NRA) as part of her efforts to influence U.S. politics.'
            }
        },

        // Connection: Maria Butina to Paul Erickson
        {
            source: 'nodeB16', // Maria Butina
            target: 'nodeB19', // Paul Erickson
            relationship: 'romantic partner',
            date: '2011-2016',
            details: {
                notes: `Maria Butina lived with and maintained an intimate relationship with Paul Erickson, a Republican political operative. During Trump's 2016 campaign, Erickson attempted to develop a back-channel between the NRA and the Russian government. Erickson was later jailed for fraud unrelated to Butina and pardoned by Trump in his last week in office.`
            }
        },
        {
            source: 'nodeB16', // Maria Butina
            target: 'node8', // Donald Trump
            relationship: 'indirect connection',
            date: '2015-2016',
            details: {
                notes: `In June 2015, Maria Butina published an article urging better relations between the U.S. and Russia, just before Trump announced his candidacy. She attended FreedomFest in 2015, where she asked Trump about ending U.S. sanctions against Russia. After the 2016 election, Butina hosted a birthday party attended by Trump campaign aides.`
            }
        },
        {
            source: 'nodeB16', // Maria Butina
            target: 'nodeB20', // Patrick M. Byrne (new node)
            relationship: 'romantic partner',
            date: '2016-2019',
            details: {
                notes: `Maria Butina was in a relationship with Patrick M. Byrne, the CEO of Overstock.com and a Trump conspiracy theorist. Byrne claimed the FBI encouraged him to pursue Butina, a claim denied by retired FBI officials.`
            }
        },

    ]
};