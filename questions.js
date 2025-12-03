const questionData = {
    "Emotional": [
        {
            id: "e1",
            text: "Your colleague takes credit for your work in a meeting. What do you do?",
            weight: 2.0, // High importance
            options: [
                { text: "Interrupt them immediately and shout that they are lying.", weight: 0.1 },
                { text: "Stay silent but hold a grudge forever.", weight: 0.3 },
                { text: "Wait for the meeting to end, then address it privately with them.", weight: 0.8 },
                { text: "Calmly provide specific details during the meeting that prove your contribution without being aggressive.", weight: 1.0 }
            ]
        },
        {
            id: "e2",
            text: "You fail an important exam/project. Your immediate reaction is:",
            weight: 1.5,
            options: [
                { text: "Blame the teacher/boss for being unfair.", weight: 0.2 },
                { text: "Give up entirely.", weight: 0.0 },
                { text: "Analyze what went wrong and create a study plan.", weight: 1.0 },
                { text: "Feel bad for a while, then move on.", weight: 0.7 }
            ]
        },
        {
            id: "e3",
            text: "You are stuck in heavy traffic and will be 20 minutes late to a movie with friends.",
            weight: 1.2,
            options: [
                { text: "Honk aggressively and curse the other drivers.", weight: 0.0 },
                { text: "Text your friends immediately to let them know, then listen to a podcast.", weight: 1.0 },
                { text: "Stress out the entire time and arrive in a bad mood.", weight: 0.3 },
                { text: "Drive dangerously fast to try and make up time.", weight: 0.1 }
            ]
        },
        {
            id: "e4",
            text: "A partner or close friend gives you constructive criticism about a habit you have.",
            weight: 1.8,
            options: [
                { text: "Immediately list their flaws to defend yourself.", weight: 0.1 },
                { text: "Listen quietly, thank them, and reflect on it later.", weight: 1.0 },
                { text: "Shut down and give them the silent treatment.", weight: 0.2 },
                { text: "Joke about it to deflect the seriousness.", weight: 0.6 }
            ]
        },
        {
            id: "e5",
            text: "You see an ex-partner posting happy photos with someone new on social media.",
            weight: 1.5,
            options: [
                { text: "Stalk the new person's profile to find flaws.", weight: 0.1 },
                { text: "Feel a pinch of sadness, but wish them well internally and scroll past.", weight: 1.0 },
                { text: "Post a fake 'happy' photo of yourself immediately to compete.", weight: 0.2 },
                { text: "Block them impulsively out of anger.", weight: 0.5 }
            ]
        },
        {
            id: "e6",
            text: "You worked hard on a meal, but your family/guests didn't seem to enjoy it much.",
            weight: 1.1,
            options: [
                { text: "Vow never to cook for them again.", weight: 0.2 },
                { text: "Ask for feedback for next time and don't take it personally.", weight: 1.0 },
                { text: "Make passive-aggressive comments while doing the dishes.", weight: 0.3 },
                { text: "Feel disappointed but laugh it off; taste is subjective.", weight: 0.9 }
            ]
        },
        {
            id: "e7",
            text: "You make a mistake that causes a minor inconvenience to a stranger (e.g., bump into them).",
            weight: 1.0,
            options: [
                { text: "Pretend it didn't happen and walk away.", weight: 0.1 },
                { text: "Glare at them as if it was their fault.", weight: 0.0 },
                { text: "Offer a sincere, quick apology and move on.", weight: 1.0 },
                { text: "Over-apologize profusely for 5 minutes.", weight: 0.6 }
            ]
        },
        {
            id: "e8",
            text: "You are explaining a complex idea, and the listener clearly isn't understanding.",
            weight: 1.3,
            options: [
                { text: "Sigh loudly and say, 'Never mind, it's too complicated for you.'", weight: 0.1 },
                { text: "Pause, ask what part is confusing, and try a different analogy.", weight: 1.0 },
                { text: "Keep repeating the exact same sentence louder.", weight: 0.2 },
                { text: "Feel stupid and stop talking.", weight: 0.3 }
            ]
        },
        {
            id: "e9",
            text: "You wake up feeling irritable for no specific reason.",
            weight: 1.4,
            options: [
                { text: "Snap at everyone you see throughout the day.", weight: 0.1 },
                { text: "Acknowledge the mood, take it easy, and warn others you need space.", weight: 1.0 },
                { text: "Post a passive-aggressive status online.", weight: 0.2 },
                { text: "Force yourself to be fake-happy until you explode.", weight: 0.4 }
            ]
        },
        {
            id: "e10",
            text: "Your partner or roommate forgets to do a chore they promised to do.",
            weight: 1.2,
            options: [
                { text: "Do it yourself but slam doors while doing it.", weight: 0.2 },
                { text: "Leave a nasty note on the fridge.", weight: 0.1 },
                { text: "Remind them calmly and ask when they plan to do it.", weight: 1.0 },
                { text: "Assume they don't respect you.", weight: 0.3 }
            ]
        },
        {
            id: "e11",
            text: "You are waiting in a long line and someone cuts in front of you.",
            weight: 1.5,
            options: [
                { text: "Shove them out of the way.", weight: 0.0 },
                { text: "Seethe in silence but ruin your own day with anger.", weight: 0.3 },
                { text: "Politely but firmly inform them the line starts back there.", weight: 1.0 },
                { text: "Loudly mock them to the person behind you.", weight: 0.4 }
            ]
        },
        {
            id: "e12",
            text: "You achieve a major personal goal, but your best friend doesn't seem excited for you.",
            weight: 1.7,
            options: [
                { text: "Accuse them of being jealous.", weight: 0.2 },
                { text: "Celebrate with others who are supportive and talk to the friend later.", weight: 1.0 },
                { text: "Decide the achievement wasn't a big deal after all.", weight: 0.3 },
                { text: "Cut them out of your life immediately.", weight: 0.1 }
            ]
        },
        {
            id: "e13",
            text: "You accidentally break a sentimental item belonging to someone else.",
            weight: 1.9,
            options: [
                { text: "Hide the pieces and hope they don't notice.", weight: 0.0 },
                { text: "Blame the cat/dog/wind.", weight: 0.1 },
                { text: "Confess immediately, apologize sincerely, and offer to repair/replace it.", weight: 1.0 },
                { text: "Cry so much that they have to comfort *you* instead.", weight: 0.4 }
            ]
        },
        {
            id: "e14",
            text: "You see a notification that your ex is getting married.",
            weight: 1.6,
            options: [
                { text: "Drunkenly text them 'Congrats'.", weight: 0.1 },
                { text: "Feel the emotion, process it, then put the phone away.", weight: 1.0 },
                { text: "Trash talk them to mutual friends.", weight: 0.2 },
                { text: "Compare your life timeline to theirs obsessively.", weight: 0.3 }
            ]
        },
        {
            id: "e15",
            text: "Someone criticizes your taste in music/movies.",
            weight: 1.0,
            options: [
                { text: "Get defensive and insult their taste.", weight: 0.2 },
                { text: "Shrug and say, 'I like what I like.'", weight: 1.0 },
                { text: "Feel embarrassed and stop sharing what you like.", weight: 0.3 },
                { text: "Try to intellectually prove why your taste is superior.", weight: 0.4 }
            ]
        },
        {
            id: "e16",
            text: "You are extremely tired, but a friend calls needing emotional support.",
            weight: 1.6,
            options: [
                { text: "Ignore the call.", weight: 0.3 },
                { text: "Answer but sound annoyed the whole time.", weight: 0.2 },
                { text: "Communicate that you are exhausted but can talk for 10 mins or tomorrow.", weight: 1.0 },
                { text: "Sacrifice your sleep and resent them for it later.", weight: 0.5 }
            ]
        },
        {
            id: "e17",
            text: "You receive a gift you genuinely dislike.",
            weight: 1.3,
            options: [
                { text: "Make a disgusted face immediately.", weight: 0.0 },
                { text: "Say thank you for the gesture and be polite.", weight: 1.0 },
                { text: "Ask for the receipt immediately.", weight: 0.4 },
                { text: "Re-gift it to them next year.", weight: 0.1 }
            ]
        },
        {
            id: "e18",
            text: "You are having a debate and realize halfway through that you are actually wrong.",
            weight: 1.9,
            options: [
                { text: "Keep arguing just to save face.", weight: 0.1 },
                { text: "Admit it immediately: 'Actually, you're right, I hadn't thought of that.'", weight: 1.0 },
                { text: "Change the subject to something else.", weight: 0.3 },
                { text: "Get angry and say 'Whatever, it doesn't matter.'", weight: 0.0 }
            ]
        },
        {
            id: "e19",
            text: "You feel overwhelmed by a messy house.",
            weight: 1.2,
            options: [
                { text: "Scream at your family/roommates.", weight: 0.1 },
                { text: "Set a timer for 15 minutes and clean what you can, accepting it won't be perfect.", weight: 1.0 },
                { text: "Go to bed and ignore it for 3 days.", weight: 0.2 },
                { text: "Clean it all until 3 AM and be exhausted the next day.", weight: 0.4 }
            ]
        },
        {
            id: "e20",
            text: "Someone gives you a genuine compliment.",
            weight: 1.0,
            options: [
                { text: "Deflect it: 'Oh this? It's old and ugly.'", weight: 0.4 },
                { text: "Smile and say 'Thank you, I appreciate that.'", weight: 1.0 },
                { text: "Assume they want something from you.", weight: 0.2 },
                { text: "Start bragging about how great you are.", weight: 0.1 }
            ]
        },
        {
            id: "e21",
            text: "You are stuck in a slow line at the grocery store.",
            weight: 1.1,
            options: [
                { text: "Sigh loudly so the cashier hears you.", weight: 0.1 },
                { text: "Use the time to check emails or relax.", weight: 1.0 },
                { text: "Leave your cart and storm out.", weight: 0.0 },
                { text: "Glare at the person paying with coins.", weight: 0.2 }
            ]
        },
        {
            id: "e22",
            text: "A project you are passionate about fails to gain traction.",
            weight: 1.6,
            options: [
                { text: "Delete everything and pretend it never happened.", weight: 0.2 },
                { text: "Analyze the data, pivot, and try again.", weight: 1.0 },
                { text: "Blame the audience for having 'bad taste'.", weight: 0.1 },
                { text: "Feel sad for a day, then start a new project.", weight: 0.8 }
            ]
        },
        {
            id: "e23",
            text: "You are trying to sleep, but your neighbor is playing loud music.",
            weight: 1.4,
            options: [
                { text: "Bang on the wall and scream.", weight: 0.1 },
                { text: "Go over and politely ask them to turn it down.", weight: 1.0 },
                { text: "Call the police immediately without warning.", weight: 0.3 },
                { text: "Lie awake stewing in anger all night.", weight: 0.2 }
            ]
        },
        {
            id: "e24",
            text: "You see a photo of yourself where you think you look 'ugly'.",
            weight: 1.2,
            options: [
                { text: "Demand the person delete it immediately.", weight: 0.2 },
                { text: "Accept that angles happen and it doesn't define your worth.", weight: 1.0 },
                { text: "Spend an hour editing it to look different.", weight: 0.3 },
                { text: " refuse to be in photos ever again.", weight: 0.1 }
            ]
        },
        {
            id: "e25",
            text: "A family member gives you advice you didn't ask for.",
            weight: 1.5,
            options: [
                { text: "Snap: 'Mind your own business.'", weight: 0.1 },
                { text: "Listen politely, say thanks, and then do what you want anyway.", weight: 1.0 },
                { text: "Argue with them for an hour.", weight: 0.3 },
                { text: "Do what they say just to please them.", weight: 0.2 }
            ]
        },
        {
            id: "e26",
            text: "You are stuck in a conversation with someone who is bragging excessively.",
            weight: 1.1,
            options: [
                { text: "Roll your eyes visibly.", weight: 0.1 },
                { text: "Let them have their moment and politely excuse yourself when possible.", weight: 1.0 },
                { text: "Start bragging about yourself to compete.", weight: 0.2 },
                { text: "Call them a liar.", weight: 0.0 }
            ]
        },
        {
            id: "e27",
            text: "You feel jealous of a friend's success.",
            weight: 1.8,
            options: [
                { text: "Distance yourself from them.", weight: 0.2 },
                { text: "Acknowledge the jealousy internally, but congratulate them sincerely.", weight: 1.0 },
                { text: "Make a backhanded compliment ('Must be nice to have rich parents').", weight: 0.1 },
                { text: "Cry about how unfair life is.", weight: 0.3 }
            ]
        },
        {
            id: "e28",
            text: "You notice your partner or close friend is in a bad mood and being quiet.",
            weight: 1.4,
            options: [
                { text: "Ask 'What is your problem?' aggressively.", weight: 0.1 },
                { text: "Give them space but let them know you are there if they want to talk.", weight: 1.0 },
                { text: "Make it about you: 'Are you mad at me?'", weight: 0.3 },
                { text: "Ignore them and turn up the TV volume.", weight: 0.2 }
            ]
        },
        {
            id: "e29",
            text: "You promised yourself you would exercise today, but you feel lazy.",
            weight: 1.3,
            options: [
                { text: "Skip it and feel guilty all night.", weight: 0.2 },
                { text: "Compromise: Do a light 15-minute workout instead of the full hour.", weight: 1.0 },
                { text: "Give up on your fitness goals entirely.", weight: 0.1 },
                { text: "Lie to others that you went to the gym.", weight: 0.0 }
            ]
        },
        {
            id: "e30",
            text: "You see a group of friends hanging out without you on Instagram.",
            weight: 1.6,
            options: [
                { text: "Send a passive-aggressive text to the group chat.", weight: 0.1 },
                { text: "Remind yourself you don't need to be at every event to be valued.", weight: 1.0 },
                { text: "Cry and delete your social media accounts.", weight: 0.2 },
                { text: "Post a fake story to look like you are having more fun.", weight: 0.3 }
            ]
        },
        {
            id: "e31",
            text: "You are corrected by someone younger or less experienced than you.",
            weight: 1.5,
            options: [
                { text: "Dismiss them: 'You don't have the experience I do.'", weight: 0.2 },
                { text: "Evaluate the correction objectively; if they are right, thank them.", weight: 1.0 },
                { text: "Feel humiliated and argue the point.", weight: 0.3 },
                { text: "Laugh at them condescendingly.", weight: 0.0 }
            ]
        },
        {
            id: "e32",
            text: "Your internet goes down while you are relaxing/gaming.",
            weight: 1.1,
            options: [
                { text: "Scream at the router.", weight: 0.1 },
                { text: "Read a book or do an offline activity while waiting.", weight: 1.0 },
                { text: "Call the ISP and yell at the support agent.", weight: 0.2 },
                { text: "Stare at the screen refreshing for 30 minutes.", weight: 0.3 }
            ]
        },
        {
            id: "e33",
            text: "You accidentally embarrass yourself in public (e.g., trip, spill drink).",
            weight: 1.1,
            options: [
                { text: "Run away and hide.", weight: 0.1 },
                { text: "Laugh at yourself and clean up.", weight: 1.0 },
                { text: "Blame the floor/cup loudly.", weight: 0.2 },
                { text: "Replay the moment in your head for 10 years.", weight: 0.3 }
            ]
        },
        {
            id: "e34",
            text: "You are dealing with a recurring annoyance (e.g., a loud chewer).",
            weight: 1.3,
            options: [
                { text: "Glare at them constantly.", weight: 0.2 },
                { text: "Politely ask if they can chew softer or put on headphones yourself.", weight: 1.0 },
                { text: "Mimic them to mock them.", weight: 0.0 },
                { text: "Snap and yell 'Stop it!'", weight: 0.1 }
            ]
        },
        {
            id: "e35",
            text: "You feel excluded from an inside joke.",
            weight: 1.5,
            options: [
                { text: "Force a fake laugh while feeling insecure.", weight: 0.3 },
                { text: "Ask with a smile: 'What's the story there?'", weight: 1.0 },
                { text: "Get angry and say 'You guys are rude.'", weight: 0.2 },
                { text: "Leave the group immediately.", weight: 0.1 }
            ]
        },
        {
            id: "e36",
            text: "You look back at a mistake you made 5 years ago.",
            weight: 1.8,
            options: [
                { text: "Beat yourself up about it endlessly.", weight: 0.2 },
                { text: "Acknowledge the growth: 'I wouldn't do that today because I learned.'", weight: 1.0 },
                { text: "Deny it ever happened.", weight: 0.1 },
                { text: "Blame others for making you do it.", weight: 0.3 }
            ]
        },
        {
            id: "e37",
            text: "Someone cancels plans you secretly didn't want to go to anyway.",
            weight: 1.0,
            options: [
                { text: "Pretend to be angry to make them feel guilty.", weight: 0.1 },
                { text: "Feel relieved and send a kind 'No worries!' text.", weight: 1.0 },
                { text: "Ghost them.", weight: 0.2 },
                { text: "Tell them you already made other plans (lie).", weight: 0.4 }
            ]
        },
        {
            id: "e38",
            text: "You are stuck in a conversation with someone who holds opposite political views.",
            weight: 1.6,
            options: [
                { text: "Insult their intelligence.", weight: 0.1 },
                { text: "Listen respectfully, state your view calmly if asked, or change the subject.", weight: 1.0 },
                { text: "Scream over them so they can't speak.", weight: 0.0 },
                { text: "Pretend to agree with them just to make them stop.", weight: 0.4 }
            ]
        },
        {
            id: "e39",
            text: "You feel extremely unmotivated to do your daily routine.",
            weight: 1.2,
            options: [
                { text: "Stay in bed all day and hate yourself.", weight: 0.2 },
                { text: "Identify one small task to complete to build momentum.", weight: 1.0 },
                { text: "Wait for 'inspiration' that never comes.", weight: 0.3 },
                { text: "Blame the weather for your laziness.", weight: 0.4 }
            ]
        },
        {
            id: "e40",
            text: "You send a risky text message and see the 'read' receipt but no reply.",
            weight: 1.5,
            options: [
                { text: "Send '???' every 5 minutes.", weight: 0.1 },
                { text: "Put the phone away and do something else; they will reply when they can.", weight: 1.0 },
                { text: "Assume they hate you and block them preemptively.", weight: 0.2 },
                { text: "Text them 'Fine, ignore me.'", weight: 0.0 }
            ]
        },
        {
            id: "e41",
            text: "You accidentally break a glass in a restaurant.",
            weight: 1.1,
            options: [
                { text: "Kick the pieces under the table.", weight: 0.0 },
                { text: "Apologize to the staff and help clean up if safe.", weight: 1.0 },
                { text: "Blame the waiter for putting it too close to the edge.", weight: 0.2 },
                { text: "Run out of the restaurant.", weight: 0.1 }
            ]
        },
        {
            id: "e42",
            text: "You win a game or competition against a friend.",
            weight: 1.3,
            options: [
                { text: "Rub it in their face endlessly.", weight: 0.1 },
                { text: "Say 'Good game' and acknowledge their effort.", weight: 1.0 },
                { text: "Act surprised, like 'I didn't even try'.", weight: 0.3 },
                { text: "Refuse to play them again to keep your winning streak.", weight: 0.2 }
            ]
        },
        {
            id: "e43",
            text: "You order food at a restaurant and the waiter brings the completely wrong dish.",
            weight: 1.2,
            options: [
                { text: "Scream 'This isn't what I ordered!'", weight: 0.1 },
                { text: "Politely flag the waiter and ask for a correction.", weight: 1.0 },
                { text: "Eat it in silence while fuming.", weight: 0.3 },
                { text: "Refuse to pay for anything.", weight: 0.2 }
            ]
        },
        {
            id: "e44",
            text: "You feel like you are 'behind' in life compared to your peers.",
            weight: 1.7,
            options: [
                { text: "Panic and make rash decisions to catch up.", weight: 0.2 },
                { text: "Remind yourself everyone's timeline is different and focus on your goals.", weight: 1.0 },
                { text: "Resent your successful friends.", weight: 0.1 },
                { text: "Lie about your achievements.", weight: 0.0 }
            ]
        },
        {
            id: "e45",
            text: "Your partner/roommate is chewing loudly, and it annoys you.",
            weight: 1.0,
            options: [
                { text: "Smack the food out of their hand.", weight: 0.0 },
                { text: "Put on headphones or politely ask if they can chew softer.", weight: 1.0 },
                { text: "Mimic them aggressively.", weight: 0.1 },
                { text: "Stare at them with hatred.", weight: 0.2 }
            ]
        },
        {
            id: "e46",
            text: "You receive news that a rival has failed at something.",
            weight: 1.5,
            options: [
                { text: "Celebrate their failure publicly.", weight: 0.1 },
                { text: "Feel indifferent; focus on your own path.", weight: 1.0 },
                { text: "Send them a sarcastic condolence message.", weight: 0.0 },
                { text: "Stalk their social media to see how sad they are.", weight: 0.3 }
            ]
        },
        {
            id: "e47",
            text: "You are ghosted after a few dates.",
            weight: 1.6,
            options: [
                { text: "Send 50 angry texts.", weight: 0.1 },
                { text: "Accept it as their loss/lack of compatibility and move on.", weight: 1.0 },
                { text: "Analyze every text you sent to find 'the mistake'.", weight: 0.3 },
                { text: "Show up at their house.", weight: 0.0 }
            ]
        },
        {
            id: "e48",
            text: "You are explaining something and someone interrupts to correct you.",
            weight: 1.3,
            options: [
                { text: "Snap: 'Let me finish!'", weight: 0.2 },
                { text: "Pause, acknowledge the correction, and continue smoothly.", weight: 1.0 },
                { text: "Stop talking and pout.", weight: 0.1 },
                { text: "Argue about the correction for 10 minutes.", weight: 0.3 }
            ]
        },
        {
            id: "e49",
            text: "You feel lonely on a Friday night.",
            weight: 1.5,
            options: [
                { text: "Text an ex.", weight: 0.1 },
                { text: "Enjoy your own company (movie, hobby, self-care).", weight: 1.0 },
                { text: "Scroll social media and feel jealous of others.", weight: 0.2 },
                { text: "Drink alone to forget.", weight: 0.0 }
            ]
        },
        {
            id: "e50",
            text: "You achieve a small win, but nobody notices.",
            weight: 1.1,
            options: [
                { text: "Feel like it doesn't matter since no one saw it.", weight: 0.2 },
                { text: "Validate yourself: 'I did good work today.'", weight: 1.0 },
                { text: "Fish for compliments aggressively.", weight: 0.1 },
                { text: "Stop trying.", weight: 0.0 }
            ]
        }
        // ... Add 100+ items here
    ],
    "Financial": [
        {
            id: "f1",
            text: "You receive a sudden bonus of $5,000. What is your first move?",
            weight: 1.8,
            options: [
                { text: "Book a luxury vacation immediately.", weight: 0.2 },
                { text: "Buy gifts for friends to show off.", weight: 0.1 },
                { text: "Put it into a high-yield savings or investment account.", weight: 1.0 },
                { text: "Pay off high-interest debt.", weight: 1.0 }
            ]
        },
        {
            id: "f2",
            text: "Your phone works fine, but the newest model just launched with a better camera.",
            weight: 1.4,
            options: [
                { text: "Buy it on credit immediately.", weight: 0.1 },
                { text: "Stick with your current phone until it actually breaks or becomes slow.", weight: 1.0 },
                { text: "Buy it only if you have the spare cash specifically saved for luxuries.", weight: 0.9 },
                { text: "Feel depressed that you can't have it.", weight: 0.4 }
            ]
        },
        {
            id: "f3",
            text: "A close friend asks to borrow a significant amount of money for a 'sure-fire' business idea.",
            weight: 2.0,
            options: [
                { text: "Lend it immediately because you are afraid to say no.", weight: 0.3 },
                { text: "Politely decline, saying you value the friendship too much to mix it with debt.", weight: 1.0 },
                { text: "Lend it, but only an amount you are willing to lose as a gift.", weight: 0.9 },
                { text: "Make up a lie about being broke.", weight: 0.5 }
            ]
        },
        {
            id: "f4",
            text: "You get a credit card bill that is higher than you expected.",
            weight: 1.7,
            options: [
                { text: "Pay the minimum amount and ignore the rest.", weight: 0.2 },
                { text: "Review every transaction to understand your spending, then pay it off.", weight: 1.0 },
                { text: "Panic and cut up the card without a plan.", weight: 0.4 },
                { text: "Borrow money from parents/friends to cover it.", weight: 0.3 }
            ]
        },
        {
            id: "f5",
            text: "You want to go on a trip, but you haven't saved enough for your emergency fund yet.",
            weight: 1.6,
            options: [
                { text: "Go on the trip; life is short.", weight: 0.4 },
                { text: "Postpone the trip until the emergency fund is fully funded.", weight: 1.0 },
                { text: "Compromise: Take a much cheaper, local trip and save the rest.", weight: 0.9 },
                { text: "Put the trip on a credit card.", weight: 0.1 }
            ]
        },
        {
            id: "f6",
            text: "You find a $50 bill on the floor of a busy grocery store.",
            weight: 1.3,
            options: [
                { text: "Pocket it immediately.", weight: 0.2 },
                { text: "Look around to see if anyone is searching, if not, turn it in to lost & found.", weight: 1.0 },
                { text: "Keep it but donate it to charity later.", weight: 0.7 },
                { text: "Leave it there.", weight: 0.5 }
            ]
        },
        {
            id: "f7",
            text: "Your favorite clothing brand announces a 50% off sale.",
            weight: 1.3,
            options: [
                { text: "Buy things you don't need just because they are cheap.", weight: 0.2 },
                { text: "Check your list of 'needs' and only buy if items match.", weight: 1.0 },
                { text: "Spend your rent money.", weight: 0.0 },
                { text: "Browse for 3 hours and buy nothing but feel anxious.", weight: 0.5 }
            ]
        },
        {
            id: "f8",
            text: "You get a raise at work.",
            weight: 1.8,
            options: [
                { text: "Immediately move to a more expensive apartment.", weight: 0.3 },
                { text: "Increase your savings/investments rate by the same percentage.", weight: 1.0 },
                { text: "Buy a new car to celebrate.", weight: 0.2 },
                { text: "Tell everyone how much you make.", weight: 0.1 }
            ]
        },
        {
            id: "f9",
            text: "You subscribed to a service 6 months ago that you rarely use ($15/mo).",
            weight: 1.2,
            options: [
                { text: "Keep paying because canceling is a hassle.", weight: 0.2 },
                { text: "Cancel it immediately.", weight: 1.0 },
                { text: "Promise yourself you'll watch it 'someday'.", weight: 0.4 },
                { text: "Complain about being broke but keep the sub.", weight: 0.1 }
            ]
        },
        {
            id: "f10",
            text: "Your friends want to go to an expensive restaurant for a birthday.",
            weight: 1.5,
            options: [
                { text: "Go and order water, feeling miserable.", weight: 0.3 },
                { text: "Go, spend money you don't have, and stress later.", weight: 0.2 },
                { text: "Suggest a pre-drink or dessert meetup instead to save money.", weight: 1.0 },
                { text: "Don't show up.", weight: 0.1 }
            ]
        },
        {
            id: "f11",
            text: "The stock market crashes and your investments drop by 20%.",
            weight: 1.9,
            options: [
                { text: "Panic sell everything to 'save' what's left.", weight: 0.1 },
                { text: "Hold (or buy more) knowing the market fluctuates.", weight: 1.0 },
                { text: "Check the app every 5 minutes and hyperventilate.", weight: 0.3 },
                { text: "Blame the government on Facebook.", weight: 0.4 }
            ]
        },
        {
            id: "f12",
            text: "You need a new laptop for work/study. It costs $1000.",
            weight: 1.6,
            options: [
                { text: "Buy the $2500 model because it looks cooler.", weight: 0.2 },
                { text: "Research the specs you actually need and buy the best value option.", weight: 1.0 },
                { text: "Buy the cheapest one possible even if it's too slow to work.", weight: 0.4 },
                { text: "Finance it over 5 years with high interest.", weight: 0.1 }
            ]
        },
        {
            id: "f13",
            text: "You borrow a car from a friend and scratch it slightly.",
            weight: 1.8,
            options: [
                { text: "Return it at night so they don't see.", weight: 0.0 },
                { text: "Tell them immediately and offer to pay for the repair.", weight: 1.0 },
                { text: "Hope they think they did it themselves.", weight: 0.1 },
                { text: "Say 'it was like that when I got it'.", weight: 0.0 }
            ]
        },
        {
            id: "f14",
            text: "You have $10,000 in savings. A 'guru' promises to turn it into $50,000 in a month.",
            weight: 2.0,
            options: [
                { text: "Invest it all immediately.", weight: 0.0 },
                { text: "Recognize it as a scam and ignore it.", weight: 1.0 },
                { text: "Invest half just in case it's real.", weight: 0.3 },
                { text: "Ask your friends if they want to join too.", weight: 0.1 }
            ]
        },
        {
            id: "f15",
            text: "You are grocery shopping while hungry.",
            weight: 1.1,
            options: [
                { text: "Stick to your list regardless.", weight: 1.0 },
                { text: "Buy 5 bags of chips and random snacks.", weight: 0.3 },
                { text: "Order takeout as soon as you get home instead of cooking.", weight: 0.2 },
                { text: "Buy expensive ready-meals.", weight: 0.5 }
            ]
        },
        {
            id: "f16",
            text: "Your tax refund arrives.",
            weight: 1.4,
            options: [
                { text: "Treat it as 'free money' and blow it all in a weekend.", weight: 0.2 },
                { text: "Allocate it towards savings, debt, or planned expenses.", weight: 1.0 },
                { text: "Loan it to a friend who is bad with money.", weight: 0.3 },
                { text: "Leave it in your checking account and slowly eat it away.", weight: 0.6 }
            ]
        },
        {
            id: "f17",
            text: "Your car needs an unexpected $800 repair.",
            weight: 1.9,
            options: [
                { text: "Pay using your Emergency Fund.", weight: 1.0 },
                { text: "Put it on a credit card and pay minimums.", weight: 0.3 },
                { text: "Panic and sell the car for cheap.", weight: 0.1 },
                { text: "Ask your parents to pay it.", weight: 0.4 }
            ]
        },
        {
            id: "f18",
            text: "You are offered a store credit card for 15% off your purchase.",
            weight: 1.4,
            options: [
                { text: "Sign up immediately for the discount.", weight: 0.2 },
                { text: "Decline; the credit hit isn't worth saving $10.", weight: 1.0 },
                { text: "Sign up, use it, and forget to pay the bill.", weight: 0.0 },
                { text: "Ask if you can use a friend's employee discount instead.", weight: 0.5 }
            ]
        },
        {
            id: "f19",
            text: "You want to buy a house in 5 years.",
            weight: 1.7,
            options: [
                { text: "Hope the market crashes.", weight: 0.2 },
                { text: "Set up an automatic monthly transfer to a down-payment fund.", weight: 1.0 },
                { text: "Buy lottery tickets.", weight: 0.0 },
                { text: "assume you'll never afford it and buy a new car instead.", weight: 0.3 }
            ]
        },
        {
            id: "f20",
            text: "You check your bank account and see a subscription charge you forgot.",
            weight: 1.2,
            options: [
                { text: "Cancel it immediately and ask support for a refund.", weight: 1.0 },
                { text: "Get angry but do nothing.", weight: 0.2 },
                { text: "Close your bank account.", weight: 0.1 },
                { text: "Tell yourself you'll cancel it next month.", weight: 0.3 }
            ]
        },
        {
            id: "f21",
            text: "You are splitting a bill and realize you ordered much more than everyone else.",
            weight: 1.5,
            options: [
                { text: "Stay quiet and split it evenly.", weight: 0.2 },
                { text: "Offer to pay a larger share or cover your own items + tax/tip.", weight: 1.0 },
                { text: "Calculate it to the exact penny and refuse to tip.", weight: 0.3 },
                { text: "Claim you didn't like the food so you shouldn't pay.", weight: 0.0 }
            ]
        },
        {
            id: "f22",
            text: "You want to buy a new car, but the monthly payment is 30% of your income.",
            weight: 1.8,
            options: [
                { text: "Do it; you need to look successful.", weight: 0.1 },
                { text: "Look for a cheaper car or save for a larger down payment.", weight: 1.0 },
                { text: "Cut your food budget to zero to afford the car.", weight: 0.2 },
                { text: "Get a loan with a 7-year term to lower the payment.", weight: 0.3 }
            ]
        },
        {
            id: "f23",
            text: "A 'Buy Now, Pay Later' option is available for a pair of shoes.",
            weight: 1.3,
            options: [
                { text: "Use it instantly; it feels like free money.", weight: 0.1 },
                { text: "Only buy the shoes if you can pay the full cash price today.", weight: 1.0 },
                { text: "Buy three pairs since you don't have to pay yet.", weight: 0.0 },
                { text: "Use it but stress about the upcoming payments.", weight: 0.4 }
            ]
        },
        {
            id: "f24",
            text: "Your utilities bill is higher in the winter.",
            weight: 1.1,
            options: [
                { text: "Complain but change nothing.", weight: 0.2 },
                { text: "Budget for seasonal fluctuation (averaging costs).", weight: 1.0 },
                { text: "Refuse to turn on the heat and freeze.", weight: 0.3 },
                { text: "Pay it late.", weight: 0.1 }
            ]
        },
        {
            id: "f25",
            text: "You are invited to 3 weddings in one summer (travel + gifts).",
            weight: 1.6,
            options: [
                { text: "Go to all and go into debt.", weight: 0.2 },
                { text: "Prioritize the closest friends and politely decline the others.", weight: 1.0 },
                { text: "Go but don't give any gifts.", weight: 0.3 },
                { text: "Ask the couple to cover your hotel.", weight: 0.0 }
            ]
        },
        {
            id: "f26",
            text: "You get a huge tax bill you didn't expect.",
            weight: 1.9,
            options: [
                { text: "Ignore it and hope the IRS forgets.", weight: 0.0 },
                { text: "Contact them immediately to set up a payment plan.", weight: 1.0 },
                { text: "Panic and borrow from a loan shark.", weight: 0.1 },
                { text: "Cry and pay nothing.", weight: 0.2 }
            ]
        },
        {
            id: "f27",
            text: "You receive a small unexpected bonus of $200.",
            weight: 1.3,
            options: [
                { text: "Go out for an expensive dinner immediately.", weight: 0.3 },
                { text: "Add it to your 'Rainy Day' fund.", weight: 1.0 },
                { text: "Buy lottery tickets.", weight: 0.0 },
                { text: "Buy a gadget you don't need.", weight: 0.2 }
            ]
        },
        {
            id: "f28",
            text: "Your friends suggest splitting the dinner bill evenly, but they drank alcohol and you didn't.",
            weight: 1.5,
            options: [
                { text: "Pay it silently but resent them forever.", weight: 0.3 },
                { text: "Politely suggest: 'Since I didn't drink, mind if I just pay for my meal?'", weight: 1.0 },
                { text: "Make a scene and call them thieves.", weight: 0.1 },
                { text: "Refuse to pay anything.", weight: 0.0 }
            ]
        },
        {
            id: "f29",
            text: "You really want a specific item, but it is currently double the normal price.",
            weight: 1.4,
            options: [
                { text: "Buy it anyway because you are impatient.", weight: 0.2 },
                { text: "Wait for the price to normalize or a sale.", weight: 1.0 },
                { text: "Buy a cheap knock-off that breaks in a week.", weight: 0.3 },
                { text: "Complain about inflation on social media but buy it.", weight: 0.4 }
            ]
        },
        {
            id: "f30",
            text: "A subscription service increases its price by $5/month.",
            weight: 1.2,
            options: [
                { text: "Evaluate if you still get value from it; if not, cancel.", weight: 1.0 },
                { text: "Keep paying without noticing.", weight: 0.3 },
                { text: "Cancel it in a rage, then resubscribe next week.", weight: 0.2 },
                { text: "Write a 1-star review but keep paying.", weight: 0.4 }
            ]
        },
        {
            id: "f31",
            text: "You are saving for a house, but your current car looks 'old' compared to your peers.",
            weight: 1.7,
            options: [
                { text: "Buy a new car to fit in.", weight: 0.2 },
                { text: "Keep the old car and focus on the appreciating asset (the house).", weight: 1.0 },
                { text: "Lease a luxury car you can't afford.", weight: 0.1 },
                { text: "Park your car blocks away so no one sees it.", weight: 0.3 }
            ]
        },
        {
            id: "f32",
            text: "You are too tired to cook, but ordering delivery costs $40.",
            weight: 1.3,
            options: [
                { text: "Order it and complain about being broke later.", weight: 0.2 },
                { text: "Make a quick, simple meal (eggs/toast) to save money.", weight: 1.0 },
                { text: "Order it and hide the receipt.", weight: 0.1 },
                { text: "Go to sleep hungry.", weight: 0.3 }
            ]
        },
        {
            id: "f33",
            text: "A gym membership you never use costs $30/month.",
            weight: 1.5,
            options: [
                { text: "Keep it 'just in case' for another year.", weight: 0.2 },
                { text: "Cancel it immediately and find free home workouts.", weight: 1.0 },
                { text: "Feel guilty every time you see the charge but do nothing.", weight: 0.3 },
                { text: "Claim fraud at the bank.", weight: 0.0 }
            ]
        },
        {
            id: "f34",
            text: "All your friends are investing in a volatile 'meme' coin.",
            weight: 1.8,
            options: [
                { text: "FOMO in with your rent money.", weight: 0.0 },
                { text: "Stick to your long-term strategy and ignore the hype.", weight: 1.0 },
                { text: "Criticize them constantly for being stupid.", weight: 0.2 },
                { text: "Put in $50 just for fun (gambling money).", weight: 0.8 }
            ]
        },
        {
            id: "f35",
            text: "You receive a medical bill for $100 you think is unfair.",
            weight: 1.6,
            options: [
                { text: "Throw it in the trash.", weight: 0.0 },
                { text: "Call the provider to ask for an itemized bill and review it.", weight: 1.0 },
                { text: "Pay it immediately without checking.", weight: 0.4 },
                { text: "Post about the healthcare system online but pay nothing.", weight: 0.2 }
            ]
        },
        {
            id: "f36",
            text: "A partner asks to borrow money but hasn't paid back the last loan.",
            weight: 1.9,
            options: [
                { text: "Lend it again to avoid a fight.", weight: 0.2 },
                { text: "Say no firmly: 'We need to clear the previous loan first.'", weight: 1.0 },
                { text: "Scream at them about money.", weight: 0.1 },
                { text: "Lie and say you have no money.", weight: 0.4 }
            ]
        },
        {
            id: "f37",
            text: "A salesperson is pressuring you to buy a warranty you don't need.",
            weight: 1.4,
            options: [
                { text: "Buy it just to make them stop talking.", weight: 0.2 },
                { text: "Firmly and politely repeat 'No, thank you'.", weight: 1.0 },
                { text: "Get angry and storm out.", weight: 0.3 },
                { text: "Lie and say you have no money.", weight: 0.4 }
            ]
        },
        {
            id: "f38",
            text: "You realize you spend $150 a month on coffee/snacks.",
            weight: 1.2,
            options: [
                { text: "Decide that 'I deserve this' and ignore the cost.", weight: 0.4 },
                { text: "Buy a coffee maker/snacks in bulk to reduce the cost by 80%.", weight: 1.0 },
                { text: "Stop eating entirely.", weight: 0.0 },
                { text: "Complain you can't afford rent.", weight: 0.2 }
            ]
        },
        {
            id: "f39",
            text: "Your car lease is ending.",
            weight: 1.6,
            options: [
                { text: "Lease a brand new, more expensive car immediately.", weight: 0.2 },
                { text: "Calculate if buying out the lease or buying a used car is cheaper long-term.", weight: 1.0 },
                { text: "Wait until the last day and panic.", weight: 0.3 },
                { text: "Go car-less without checking public transport options.", weight: 0.1 }
            ]
        },
        {
            id: "f40",
            text: "A friend invites you to join a 'business opportunity' that requires an upfront fee (MLM).",
            weight: 1.8,
            options: [
                { text: "Join immediately hoping to get rich.", weight: 0.1 },
                { text: "Research the company, recognize the pyramid structure, and decline.", weight: 1.0 },
                { text: "Join because you feel bad saying no.", weight: 0.2 },
                { text: "Insult your friend for being scammed.", weight: 0.3 }
            ]
        },
        {
            id: "f41",
            text: "You have a $2000 balance on a credit card with 20% interest.",
            weight: 1.9,
            options: [
                { text: "Continue using the card for daily purchases.", weight: 0.0 },
                { text: "Stop using the card and pay as much as possible to clear it.", weight: 1.0 },
                { text: "Pay the minimum ($25) and forget about it.", weight: 0.2 },
                { text: "Open a new card to ignore the old one.", weight: 0.1 }
            ]
        },
        {
            id: "f42",
            text: "You are at a checkout and the cashier asks if you want to donate $5 to charity.",
            weight: 1.1,
            options: [
                { text: "Say 'No' without guilt if it's not in your budget.", weight: 1.0 },
                { text: "Say 'Yes' just to not look cheap, then regret it.", weight: 0.3 },
                { text: "Lecture the cashier about corporate tax write-offs.", weight: 0.2 },
                { text: "Pretend you didn't hear them.", weight: 0.4 }
            ]
        },
        {
            id: "f43",
            text: "You get a huge craving for takeout lunch every day at work.",
            weight: 1.4,
            options: [
                { text: "Buy it daily ($250/month).", weight: 0.2 },
                { text: "Meal prep or bring leftovers 4 days a week, buy once.", weight: 1.0 },
                { text: "Beg coworkers for their food.", weight: 0.0 },
                { text: "Skip lunch and be unproductive.", weight: 0.1 }
            ]
        },
        {
            id: "f44",
            text: "Your laptop breaks and you have no savings.",
            weight: 1.9,
            options: [
                { text: "Put a new MacBook Pro on a high-interest credit card.", weight: 0.2 },
                { text: "Buy a cheap used refurbished laptop to get by.", weight: 1.0 },
                { text: "Steal one.", weight: 0.0 },
                { text: "Cry and stop working.", weight: 0.1 }
            ]
        },
        {
            id: "f45",
            text: "A friend keeps 'forgetting' their wallet when you go out.",
            weight: 1.5,
            options: [
                { text: "Pay for them every time.", weight: 0.2 },
                { text: "Say: 'I got you last time, you get this one or we can split.'", weight: 1.0 },
                { text: "Dine and dash.", weight: 0.0 },
                { text: "Stop hanging out without explanation.", weight: 0.4 }
            ]
        },
        {
            id: "f46",
            text: "You see an influencer promoting a 'get rich quick' crypto scheme.",
            weight: 1.7,
            options: [
                { text: "Invest immediately.", weight: 0.1 },
                { text: "Recognize it as high-risk/scam and scroll past.", weight: 1.0 },
                { text: "DM them asking for money.", weight: 0.0 },
                { text: "Share it with your grandma.", weight: 0.1 }
            ]
        },
        {
            id: "f47",
            text: "You want to impress a date.",
            weight: 1.4,
            options: [
                { text: "Order the most expensive wine to show off.", weight: 0.2 },
                { text: "Plan a thoughtful date that fits your budget comfortably.", weight: 1.0 },
                { text: "Lie about your income.", weight: 0.0 },
                { text: "Put the whole date on a credit card you can't pay.", weight: 0.1 }
            ]
        },
        {
            id: "f48",
            text: "You find a subscription on your statement you forgot to cancel (charged $50).",
            weight: 1.2,
            options: [
                { text: "Cancel it immediately and set a calendar reminder for others.", weight: 1.0 },
                { text: "Scream at the bank teller.", weight: 0.1 },
                { text: "Ignore it; $50 isn't that much.", weight: 0.3 },
                { text: "Keep it because you might use it 'someday'.", weight: 0.2 }
            ]
        },
        {
            id: "f49",
            text: "Your rent increases by 10%.",
            weight: 1.8,
            options: [
                { text: "Refuse to pay.", weight: 0.0 },
                { text: "Review your budget to accommodate it or look for a cheaper place.", weight: 1.0 },
                { text: "Borrow money from friends for rent.", weight: 0.2 },
                { text: "Complain but cut nothing from your spending.", weight: 0.3 }
            ]
        },
        {
            id: "f50",
            text: "You receive an inheritance of $10,000.",
            weight: 2.0,
            options: [
                { text: "Blow it all on a luxury vacation.", weight: 0.2 },
                { text: "Pay off debt first, then invest/save the rest.", weight: 1.0 },
                { text: "Quit your job immediately.", weight: 0.0 },
                { text: "Loan it all to a friend with a 'business idea'.", weight: 0.1 }
            ]
        }
        // ... Add 100+ items here
    ],
    "Social": [
        {
            id: "s1",
            text: "A friend cancels plans at the last minute.",
            weight: 1.0,
            options: [
                { text: "Block their number.", weight: 0.0 },
                { text: "Ask if they are okay and reschedule.", weight: 1.0 },
                { text: "Guilt trip them.", weight: 0.3 }
            ]
        },
        {
            id: "s2",
            text: "A friend tells you a secret about another friend that shocks you.",
            weight: 1.7,
            options: [
                { text: "Immediately call the other friend to tell them.", weight: 0.2 },
                { text: "Keep the confidence strictly; it's not your story to tell.", weight: 1.0 },
                { text: "Tell your partner/spouse because 'they don't count'.", weight: 0.6 },
                { text: "Post a vague status about it on social media.", weight: 0.0 }
            ]
        },
        {
            id: "s3",
            text: "You are at a dinner party and someone starts a heated political argument.",
            weight: 1.3,
            options: [
                { text: "Join in aggressively to prove them wrong.", weight: 0.2 },
                { text: "Politely steer the conversation to a neutral topic.", weight: 1.0 },
                { text: "Sit in awkward silence.", weight: 0.5 },
                { text: "Leave the room dramatically.", weight: 0.3 }
            ]
        },
        {
            id: "s4",
            text: "You haven't heard from a good friend in two months.",
            weight: 1.1,
            options: [
                { text: "Assume they hate you and delete their number.", weight: 0.1 },
                { text: "Send a message: 'Hey! Thinking of you, hope you're okay.'", weight: 1.0 },
                { text: "Wait for them to text first; it's a power game.", weight: 0.2 },
                { text: "Stalk their social media to see if they are ignoring you.", weight: 0.4 }
            ]
        },
        {
            id: "s5",
            text: "A friend arrives 30 minutes late to dinner without texting.",
            weight: 1.2,
            options: [
                { text: "Give them the cold shoulder for the whole meal.", weight: 0.3 },
                { text: "Calmly express that you were worried and value your time.", weight: 1.0 },
                { text: "Make a joke about it but secretly resent them.", weight: 0.6 },
                { text: "Leave before they arrive.", weight: 0.2 }
            ]
        },
        {
            id: "s6",
            text: "You are invited to a wedding you cannot afford to attend.",
            weight: 1.5,
            options: [
                { text: "Go anyway and go into debt.", weight: 0.2 },
                { text: "RSVP 'No' with a polite reason and send a thoughtful card/gift.", weight: 1.0 },
                { text: "Ghost the invitation.", weight: 0.0 },
                { text: "Ask the bride/groom to pay for your travel.", weight: 0.1 }
            ]
        },
        {
            id: "s7",
            text: "You are at a party where you don't know anyone.",
            weight: 1.2,
            options: [
                { text: "Sit in the corner on your phone.", weight: 0.3 },
                { text: "Drink too much to mask the anxiety.", weight: 0.1 },
                { text: "Introduce yourself to one person/group.", weight: 1.0 },
                { text: "Leave after 5 minutes.", weight: 0.4 }
            ]
        },
        {
            id: "s8",
            text: "A friend keeps cancelling plans on you.",
            weight: 1.4,
            options: [
                { text: "Ghost them forever.", weight: 0.2 },
                { text: "Ask them if everything is okay in their life right now.", weight: 1.0 },
                { text: "Continue making plans they will cancel.", weight: 0.5 },
                { text: "Attack them on social media.", weight: 0.1 }
            ]
        },
        {
            id: "s9",
            text: "You forgot a close friend's birthday.",
            weight: 1.5,
            options: [
                { text: "Pretend you didn't forget and say the gift is in the mail.", weight: 0.2 },
                { text: "Apologize sincerely and make it up to them.", weight: 1.0 },
                { text: "Avoid them for a week.", weight: 0.1 },
                { text: "Say 'Birthdays are stupid anyway'.", weight: 0.0 }
            ]
        },
        {
            id: "s10",
            text: "Someone you dislike is invited to the group dinner.",
            weight: 1.3,
            options: [
                { text: "Refuse to go.", weight: 0.3 },
                { text: "Go and be cordial, focusing on others.", weight: 1.0 },
                { text: "Make snide remarks at them all night.", weight: 0.1 },
                { text: "Try to turn the group against them.", weight: 0.0 }
            ]
        },
        {
            id: "s11",
            text: "A friend gets a haircut you think looks bad.",
            weight: 1.0,
            options: [
                { text: "Laugh in their face.", weight: 0.0 },
                { text: "Tell them they look great (white lie to protect feelings).", weight: 1.0 },
                { text: "Tell them exactly why it's ugly.", weight: 0.2 },
                { text: "Ask 'Who did that to you?'", weight: 0.3 }
            ]
        },
        {
            id: "s12",
            text: "You are the 'third wheel' with a couple who are being affectionate.",
            weight: 1.1,
            options: [
                { text: "Make sarcastic comments about them getting a room.", weight: 0.3 },
                { text: "Happily check your phone or enjoy the scenery; give them space.", weight: 1.0 },
                { text: "Sulk and demand to go home.", weight: 0.1 },
                { text: "Try to make them jealous.", weight: 0.0 }
            ]
        },
        {
            id: "s13",
            text: "A friend asks you to help them move house on your only day off.",
            weight: 1.5,
            options: [
                { text: "Say yes but complain the whole time.", weight: 0.3 },
                { text: "Lie and say you are sick.", weight: 0.2 },
                { text: "Honest decline: 'I need to recharge this weekend, but I can help another time.'", weight: 1.0 },
                { text: "Ghost their text.", weight: 0.0 }
            ]
        },
        {
            id: "s14",
            text: "You realize you have been dominating the conversation for 20 minutes.",
            weight: 1.4,
            options: [
                { text: "Keep talking; it's a great story.", weight: 0.1 },
                { text: "Stop, apologize, and ask: 'But enough about me, how is your [project] going?'", weight: 1.0 },
                { text: "Feel awkward and go completely silent.", weight: 0.4 },
                { text: "Ask a question but interrupt their answer.", weight: 0.3 }
            ]
        },
        {
            id: "s15",
            text: "A friend owes you $20 but seems to have forgotten.",
            weight: 1.2,
            options: [
                { text: "Let it go if the friendship is worth more than $20.", weight: 0.9 },
                { text: "Send a casual reminder: 'Hey, do you have Venmo for that lunch?'", weight: 1.0 },
                { text: "Steal something of theirs worth $20.", weight: 0.0 },
                { text: "Talk behind their back about how cheap they are.", weight: 0.2 }
            ]
        },
        {
            id: "s16",
            text: "You meet someone important who forgets your name instantly.",
            weight: 1.3,
            options: [
                { text: "Get offended and walk away.", weight: 0.2 },
                { text: "Smile and re-introduce yourself warmly.", weight: 1.0 },
                { text: "Make a snarky comment: 'Wow, short memory?'", weight: 0.1 },
                { text: "Feel like you are unmemorable.", weight: 0.4 }
            ]
        },
        {
            id: "s17",
            text: "A friend keeps asking for advice but never follows it.",
            weight: 1.4,
            options: [
                { text: "Scream 'I told you so!' when they fail.", weight: 0.1 },
                { text: "Stop giving advice and just listen/empathize instead.", weight: 1.0 },
                { text: "Cut them off completely.", weight: 0.2 },
                { text: "Give them bad advice on purpose.", weight: 0.0 }
            ]
        },
        {
            id: "s18",
            text: "You hear a nasty rumor about yourself.",
            weight: 1.6,
            options: [
                { text: "Launch a counter-investigation to find the source.", weight: 0.2 },
                { text: "Ignore it; those who matter know the truth.", weight: 1.0 },
                { text: "Post a rant on social media denying it.", weight: 0.1 },
                { text: "Confront everyone you know aggressively.", weight: 0.1 }
            ]
        },
        {
            id: "s19",
            text: "You accidentally insult someone's outfit.",
            weight: 1.2,
            options: [
                { text: "Double down and say you were joking.", weight: 0.2 },
                { text: "Apologize immediately and sincerely without making excuses.", weight: 1.0 },
                { text: "Avoid them for the rest of the night.", weight: 0.3 },
                { text: "Say 'I'm just being honest.'", weight: 0.1 }
            ]
        },
        {
            id: "s20",
            text: "Your friend brings a partner you really dislike to the group hang.",
            weight: 1.5,
            options: [
                { text: "Be rude to the partner.", weight: 0.1 },
                { text: "Be polite and civil for your friend's sake.", weight: 1.0 },
                { text: "Pull your friend aside immediately to complain.", weight: 0.2 },
                { text: "Leave the event early.", weight: 0.4 }
            ]
        },
        {
            id: "s21",
            text: "You are hosting a dinner and a guest reveals a dietary restriction last minute.",
            weight: 1.3,
            options: [
                { text: "Tell them to starve.", weight: 0.0 },
                { text: "Whip up a simple alternative or order something for them without fuss.", weight: 1.0 },
                { text: "Make a big scene about how inconvenient it is.", weight: 0.2 },
                { text: "Serve them the food anyway and don't tell them.", weight: 0.0 }
            ]
        },
        {
            id: "s22",
            text: "A friend posts a political opinion you strongly disagree with.",
            weight: 1.4,
            options: [
                { text: "Start a comment war on their post.", weight: 0.2 },
                { text: "Scroll past; you don't need to debate everything.", weight: 1.0 },
                { text: "Unfriend them immediately.", weight: 0.3 },
                { text: "Screenshot it and mock them in a group chat.", weight: 0.1 }
            ]
        },
        {
            id: "s23",
            text: "You run into an acquaintance whose name you have completely forgotten.",
            weight: 1.1,
            options: [
                { text: "Avoid eye contact and run away.", weight: 0.2 },
                { text: "Honesty: 'I am so sorry, my mind went blank, remind me your name?'", weight: 1.0 },
                { text: "Call them 'Buddy' or 'Pal' the whole time to hide it.", weight: 0.5 },
                { text: "Guess a random name.", weight: 0.1 }
            ]
        },
        {
            id: "s24",
            text: "You are invited to a bachelor/bachelorette party that costs $1,500.",
            weight: 1.6,
            options: [
                { text: "Go and complain about the cost the whole time.", weight: 0.2 },
                { text: "Decline politely stating budget constraints.", weight: 1.0 },
                { text: "Ghost the organizer.", weight: 0.0 },
                { text: "Ask the bride/groom to pay for you.", weight: 0.1 }
            ]
        },
        {
            id: "s25",
            text: "A friend cancels on you last minute for a valid reason (e.g., sick child).",
            weight: 1.3,
            options: [
                { text: "Guilt trip them: 'I was really looking forward to this.'", weight: 0.3 },
                { text: "Empathize: 'No worries, hope they feel better! We can reschedule.'", weight: 1.0 },
                { text: "Ignore their text for 2 days.", weight: 0.2 },
                { text: "Say 'It's fine' but mark it as a strike against them.", weight: 0.4 }
            ]
        },
        {
            id: "s26",
            text: "You are the only single person at a dinner party of couples.",
            weight: 1.2,
            options: [
                { text: "Drink too much to cope.", weight: 0.2 },
                { text: "Engage in conversation and enjoy the food/company regardless.", weight: 1.0 },
                { text: "Make self-deprecating jokes all night.", weight: 0.4 },
                { text: "Leave early without saying goodbye.", weight: 0.1 }
            ]
        },
        {
            id: "s27",
            text: "You are added to a chaotic group chat you don't care about.",
            weight: 1.1,
            options: [
                { text: "Leave immediately without a word.", weight: 0.4 },
                { text: "Mute notifications and check it occasionally.", weight: 1.0 },
                { text: "Ask everyone to shut up.", weight: 0.1 },
                { text: "Spam the group with memes.", weight: 0.2 }
            ]
        },
        {
            id: "s28",
            text: "A guest stays at your house much longer than invited.",
            weight: 1.4,
            options: [
                { text: "Yawn loudly until they leave.", weight: 0.3 },
                { text: "Politely say: 'It's been great, but I need to wind down now.'", weight: 1.0 },
                { text: "Hide in your bedroom.", weight: 0.2 },
                { text: "Start cleaning around them aggressively.", weight: 0.4 }
            ]
        },
        {
            id: "s29",
            text: "You promised to attend an event but now feel socially drained.",
            weight: 1.5,
            options: [
                { text: "Ghost them.", weight: 0.1 },
                { text: "Go for a short time to show support, then leave early.", weight: 1.0 },
                { text: "Lie and say you have a family emergency.", weight: 0.3 },
                { text: "Go and be miserable/rude to everyone.", weight: 0.2 }
            ]
        },
        {
            id: "s30",
            text: "You see a close friend hanging out with someone you dislike.",
            weight: 1.6,
            options: [
                { text: "Demand they choose between you and them.", weight: 0.1 },
                { text: "Accept that your friend can have other friends.", weight: 1.0 },
                { text: "Stalk their location.", weight: 0.2 },
                { text: "Comment 'snake' on their photo.", weight: 0.0 }
            ]
        },
        {
            id: "s31",
            text: "Someone mispronounces your name.",
            weight: 1.2,
            options: [
                { text: "Ignore it and resent them.", weight: 0.3 },
                { text: "Gently correct them: 'It's actually pronounced X.'", weight: 1.0 },
                { text: "Get angry and refuse to answer.", weight: 0.1 },
                { text: "Make fun of their name.", weight: 0.0 }
            ]
        },
        {
            id: "s32",
            text: "You mistakenly call someone by the wrong name.",
            weight: 1.2,
            options: [
                { text: "Pretend it didn't happen and keep talking.", weight: 0.2 },
                { text: "Correct yourself immediately and apologize briefly.", weight: 1.0 },
                { text: "Argue that you are right and they are wrong.", weight: 0.0 },
                { text: "Freeze and walk away.", weight: 0.3 }
            ]
        },
        {
            id: "s33",
            text: "A friend gives you a gift that you really dislike.",
            weight: 1.4,
            options: [
                { text: "Tell them 'I hate this'.", weight: 0.1 },
                { text: "Thank them warmly for the thought and gesture.", weight: 1.0 },
                { text: "Ask for the receipt immediately.", weight: 0.3 },
                { text: "Throw it away in front of them.", weight: 0.0 }
            ]
        },
        {
            id: "s34",
            text: "You are stuck talking to someone who won't let you leave the conversation.",
            weight: 1.3,
            options: [
                { text: "Look at your watch aggressively.", weight: 0.3 },
                { text: "Politely interrupt: 'I've loved catching up, but I actually have to run now.'", weight: 1.0 },
                { text: "Just walk away while they are speaking.", weight: 0.1 },
                { text: "Stand there suffering for another hour.", weight: 0.2 }
            ]
        },
        {
            id: "s35",
            text: "Your friend cancels on you to hang out with a romantic partner.",
            weight: 1.5,
            options: [
                { text: "Make them choose: 'It's them or me.'", weight: 0.1 },
                { text: "Understand the 'honeymoon phase' but request advanced notice next time.", weight: 1.0 },
                { text: "Subtweet them.", weight: 0.2 },
                { text: "Show up at their date.", weight: 0.0 }
            ]
        },
        {
            id: "s36",
            text: "You see someone with food stuck in their teeth.",
            weight: 1.1,
            options: [
                { text: "Stare at their teeth until they notice.", weight: 0.3 },
                { text: "Discreetly signal them or tell them quietly.", weight: 1.0 },
                { text: "Laugh and point it out to everyone.", weight: 0.0 },
                { text: "Say nothing and let them be embarrassed later.", weight: 0.2 }
            ]
        },
        {
            id: "s37",
            text: "A friend starts dating your ex-partner.",
            weight: 1.9,
            options: [
                { text: "Burn their house down.", weight: 0.0 },
                { text: "Set boundaries: 'I need space from you both right now.'", weight: 1.0 },
                { text: "Pretend to be fine but plot revenge.", weight: 0.2 },
                { text: "Force them to break up.", weight: 0.1 }
            ]
        },
        {
            id: "s38",
            text: "You are at a dinner where everyone is speaking a language you don't know well.",
            weight: 1.3,
            options: [
                { text: "Demand they speak English.", weight: 0.2 },
                { text: "Try to pick up words, smile, and wait for a chance to engage.", weight: 1.0 },
                { text: "Play games on your phone visibly.", weight: 0.3 },
                { text: "Leave angrily.", weight: 0.1 }
            ]
        },
        {
            id: "s39",
            text: "A friend reveals they voted for a politician you dislike.",
            weight: 1.5,
            options: [
                { text: "End the friendship immediately.", weight: 0.2 },
                { text: "Agree to disagree and focus on shared values, or discuss calmly.", weight: 1.0 },
                { text: "Call them names.", weight: 0.0 },
                { text: "Try to 'educate' them condescendingly.", weight: 0.3 }
            ]
        },
        {
            id: "s40",
            text: "You accidentally spill a drink on a stranger at a bar.",
            weight: 1.1,
            options: [
                { text: "Run away.", weight: 0.0 },
                { text: "Apologize profusely and offer to buy them a drink/napkins.", weight: 1.0 },
                { text: "Blame them for standing there.", weight: 0.1 },
                { text: "Laugh.", weight: 0.1 }
            ]
        },
        {
            id: "s41",
            text: "You are jealous of your friend's new relationship.",
            weight: 1.4,
            options: [
                { text: "Tell them their partner is cheating (lie).", weight: 0.0 },
                { text: "Identify the jealousy is about your own loneliness, not them.", weight: 1.0 },
                { text: "Stop inviting them out.", weight: 0.2 },
                { text: "Flirt with their partner.", weight: 0.0 }
            ]
        },
        {
            id: "s42",
            text: "You borrow a friend's car and return it with an empty tank.",
            weight: 1.1,
            options: [
                { text: "Don't mention it.", weight: 0.1 },
                { text: "Fill it up (preferably more than it was) before returning.", weight: 1.0 },
                { text: "Say 'I forgot' and never pay them back.", weight: 0.2 },
                { text: "Laugh and say gas is too expensive.", weight: 0.0 }
            ]
        },
        {
            id: "s43",
            text: "A friend tells you a boring story you've heard before.",
            weight: 1.0,
            options: [
                { text: "Interrupt: 'You already told me this.'", weight: 0.3 },
                { text: "Smile and let them finish; they are enjoying telling it.", weight: 1.0 },
                { text: "Check your phone visibly.", weight: 0.1 },
                { text: "Walk away.", weight: 0.0 }
            ]
        },
        {
            id: "s44",
            text: "You are invited to a group trip but dislike the itinerary.",
            weight: 1.3,
            options: [
                { text: "Go and complain the whole time.", weight: 0.1 },
                { text: "Suggest one activity you like, or opt out of specific parts politely.", weight: 1.0 },
                { text: "Try to hijack the trip and change everything.", weight: 0.2 },
                { text: "Cancel last minute.", weight: 0.0 }
            ]
        },
        {
            id: "s45",
            text: "You realize you have been venting about your problems for an hour.",
            weight: 1.4,
            options: [
                { text: "Keep going; that's what friends are for.", weight: 0.2 },
                { text: "Pause and check in: 'Sorry for unloading, how are you doing?'", weight: 1.0 },
                { text: "Get mad if they look bored.", weight: 0.1 },
                { text: "Leave abruptly.", weight: 0.3 }
            ]
        },
        {
            id: "s46",
            text: "A friend asks for your honest opinion on their bad artwork.",
            weight: 1.5,
            options: [
                { text: "Say it's garbage.", weight: 0.0 },
                { text: "Find something positive to praise while being truthful but kind.", weight: 1.0 },
                { text: "Lie excessively about how it's a masterpiece.", weight: 0.4 },
                { text: "Laugh.", weight: 0.0 }
            ]
        },
        {
            id: "s47",
            text: "You are late meeting a friend.",
            weight: 1.2,
            options: [
                { text: "Don't text, just show up late.", weight: 0.1 },
                { text: "Text immediately with an ETA and apologize.", weight: 1.0 },
                { text: "Blame traffic (even though you left late).", weight: 0.3 },
                { text: "Cancel because you are embarrassed.", weight: 0.2 }
            ]
        },
        {
            id: "s48",
            text: "You see a friend's partner on a dating app.",
            weight: 1.9,
            options: [
                { text: "Screenshot it and post it online.", weight: 0.0 },
                { text: "Tell your friend privately and gently.", weight: 1.0 },
                { text: "Ignore it; not your circus.", weight: 0.4 },
                { text: "Match with the partner to trap them.", weight: 0.2 }
            ]
        },
        {
            id: "s49",
            text: "You drift apart from a childhood friend.",
            weight: 1.4,
            options: [
                { text: "Force the friendship even though it's awkward.", weight: 0.3 },
                { text: "Accept that people grow apart and cherish the memories.", weight: 1.0 },
                { text: "Ghost them aggressively.", weight: 0.2 },
                { text: "Start a fight to end it.", weight: 0.1 }
            ]
        },
        {
            id: "s50",
            text: "You feel socially burnt out at a party.",
            weight: 1.1,
            options: [
                { text: "Start a fight to create drama.", weight: 0.0 },
                { text: "Find the host, say thank you, and leave early.", weight: 1.0 },
                { text: "Hide in the corner and glare at people.", weight: 0.2 },
                { text: "Get blackout drunk.", weight: 0.1 }
            ]
        }
    ],
    "Professional": [
        {
            id: "p1",
            text: "A coworker is constantly slacking off, and it's starting to affect your workload.",
            weight: 1.9,
            options: [
                { text: "Gossip about them to other colleagues.", weight: 0.2 },
                { text: "Do their work silently to avoid conflict.", weight: 0.4 },
                { text: "Have a private, professional conversation with them first.", weight: 1.0 },
                { text: "Immediately report them to the boss.", weight: 0.6 }
            ]
        },
        {
            id: "p2",
            text: "You are assigned a task that you feel is beneath your skill level.",
            weight: 1.5,
            options: [
                { text: "Do it poorly on purpose so they don't ask again.", weight: 0.1 },
                { text: "Complain loudly to anyone who will listen.", weight: 0.2 },
                { text: "Complete it quickly and efficiently, then ask for more challenging work.", weight: 1.0 },
                { text: "Procrastinate until the last minute.", weight: 0.3 }
            ]
        },
        {
            id: "p3",
            text: "You realize you made a significant error in a report you just submitted.",
            weight: 2.0,
            options: [
                { text: "Hope nobody notices.", weight: 0.1 },
                { text: "Blame a software glitch.", weight: 0.2 },
                { text: "Immediately inform the stakeholder, apologize, and provide the corrected version.", weight: 1.0 },
                { text: "Wait to see if they catch it, then act surprised.", weight: 0.4 }
            ]
        },
        {
            id: "p4",
            text: "Your boss gives credit to the team, but you feel you did 90% of the work.",
            weight: 1.6,
            options: [
                { text: "Interrupt the boss to correct them publicly.", weight: 0.1 },
                { text: "Accept it gracefully; team wins are good for everyone.", weight: 0.9 },
                { text: "Privately document your contribution for your performance review.", weight: 1.0 },
                { text: "Stop working hard since it 'doesn't matter'.", weight: 0.2 }
            ]
        },
        {
            id: "p5",
            text: "You are offered a job with higher pay but known for a toxic work-life balance.",
            weight: 1.8,
            options: [
                { text: "Take it just for the money.", weight: 0.4 },
                { text: "Decline; mental health and longevity are worth more than the raise.", weight: 1.0 },
                { text: "Take it thinking you can 'change the culture'.", weight: 0.6 },
                { text: "Take it, burn out in 6 months, and quit.", weight: 0.3 }
            ]
        },
        {
            id: "p6",
            text: "You are in a meeting and someone takes credit for your idea.",
            weight: 1.7,
            options: [
                { text: "Scream 'That was my idea!'", weight: 0.1 },
                { text: "Say calmly, 'I'm glad you liked my suggestion about X...'", weight: 1.0 },
                { text: "Stay silent and resent them.", weight: 0.3 },
                { text: "Badmouth them after the meeting.", weight: 0.2 }
            ]
        },
        {
            id: "p7",
            text: "Your boss gives you vague instructions.",
            weight: 1.4,
            options: [
                { text: "Guess what to do and hope it's right.", weight: 0.3 },
                { text: "Do nothing until they clarify.", weight: 0.1 },
                { text: "Ask clarifying questions to ensure alignment.", weight: 1.0 },
                { text: "Complain that the boss is incompetent.", weight: 0.2 }
            ]
        },
        {
            id: "p8",
            text: "You catch a coworker crying in the breakroom.",
            weight: 1.2,
            options: [
                { text: "Pretend you didn't see them and walk out.", weight: 0.3 },
                { text: "Ask if they are okay or need a moment of privacy.", weight: 1.0 },
                { text: "Tell everyone else in the office immediately.", weight: 0.0 },
                { text: "Stand there and stare awkwardly.", weight: 0.2 }
            ]
        },
        {
            id: "p9",
            text: "You have a deadline tomorrow, but your friends invite you out tonight.",
            weight: 1.6,
            options: [
                { text: "Go out and try to work while hungover.", weight: 0.2 },
                { text: "Prioritize the work, finish it, then join them if time permits.", weight: 1.0 },
                { text: "Call in sick tomorrow.", weight: 0.0 },
                { text: "Go out and beg for an extension tomorrow.", weight: 0.1 }
            ]
        },
        {
            id: "p10",
            text: "You send an email with a typo to a client.",
            weight: 1.1,
            options: [
                { text: "Send a quick follow-up correction if it affects meaning.", weight: 1.0 },
                { text: "Panic and recall the message 5 times.", weight: 0.3 },
                { text: "Don't acknowledge it.", weight: 0.8 },
                { text: "Blame your keyboard.", weight: 0.2 }
            ]
        },
        {
            id: "p11",
            text: "You are asked to lead a project you have no experience in.",
            weight: 1.8,
            options: [
                { text: "Fake it till you make it (lie about skills).", weight: 0.2 },
                { text: "Decline immediately out of fear.", weight: 0.3 },
                { text: "Accept, but be honest about your learning curve and ask for resources.", weight: 1.0 },
                { text: "Outsource the work to someone else secretly.", weight: 0.1 }
            ]
        },
        {
            id: "p12",
            text: "A client is yelling at you for something that isn't your fault.",
            weight: 1.9,
            options: [
                { text: "Yell back.", weight: 0.0 },
                { text: "Hang up the phone.", weight: 0.2 },
                { text: "Listen, empathize with their frustration, and pivot to solutions.", weight: 1.0 },
                { text: "Cry and take it personally.", weight: 0.3 }
            ]
        },
        {
            id: "p13",
            text: "You finish your work early.",
            weight: 1.5,
            options: [
                { text: "Watch YouTube until 5 PM.", weight: 0.3 },
                { text: "Ask your team if anyone needs support.", weight: 1.0 },
                { text: "Sneak out of the office.", weight: 0.1 },
                { text: "Pretend to type whenever the boss walks by.", weight: 0.2 }
            ]
        },
        {
            id: "p14",
            text: "You are overlooked for a promotion you worked hard for.",
            weight: 2.0,
            options: [
                { text: "Quit on the spot without a backup.", weight: 0.1 },
                { text: "Schedule a meeting to ask what specific skills you need to advance.", weight: 1.0 },
                { text: "Sabotage the person who got the job.", weight: 0.0 },
                { text: "Stop trying at work.", weight: 0.3 }
            ]
        },
        {
            id: "p15",
            text: "Technology fails during your important presentation.",
            weight: 1.6,
            options: [
                { text: "Panic and freeze.", weight: 0.2 },
                { text: "Apologize profusely and end the meeting.", weight: 0.3 },
                { text: "Calmly switch to a verbal explanation or whiteboard.", weight: 1.0 },
                { text: "Swear at the computer.", weight: 0.1 }
            ]
        },
        {
            id: "p16",
            text: "You are bored at work and have no immediate tasks.",
            weight: 1.3,
            options: [
                { text: "Scroll social media on your phone.", weight: 0.3 },
                { text: "Use the time to upskill (online course) or organize files.", weight: 1.0 },
                { text: "Nap in the bathroom.", weight: 0.1 },
                { text: "Bother coworkers who are busy.", weight: 0.2 }
            ]
        },
        {
            id: "p17",
            text: "A coworker sends you a rude email.",
            weight: 1.8,
            options: [
                { text: "Reply all with a nastier email.", weight: 0.1 },
                { text: "Wait 1 hour, then reply professionally addressing the issue, not the tone.", weight: 1.0 },
                { text: "Forward it to the boss immediately.", weight: 0.5 },
                { text: "Print it out and burn it.", weight: 0.2 }
            ]
        },
        {
            id: "p18",
            text: "You are running late for a meeting.",
            weight: 1.5,
            options: [
                { text: "Sneak in the back and hope no one sees.", weight: 0.3 },
                { text: "Message the organizer beforehand with an ETA.", weight: 1.0 },
                { text: "Lie and say you were in another meeting.", weight: 0.2 },
                { text: "Skip the meeting entirely.", weight: 0.1 }
            ]
        },
        {
            id: "p19",
            text: "You need to negotiate your salary.",
            weight: 2.0,
            options: [
                { text: "Demand more money 'or else'.", weight: 0.1 },
                { text: "Present a list of your achievements and market rate data.", weight: 1.0 },
                { text: "Accept whatever they offer without question.", weight: 0.4 },
                { text: "Cry during the negotiation.", weight: 0.2 }
            ]
        },
        {
            id: "p20",
            text: "The company introduces a new software you find difficult.",
            weight: 1.6,
            options: [
                { text: "Refuse to use it.", weight: 0.1 },
                { text: "Attend training sessions and ask for help.", weight: 1.0 },
                { text: "Complain that 'the old way was better' every day.", weight: 0.3 },
                { text: "Get a younger coworker to do it for you.", weight: 0.2 }
            ]
        },
        {
            id: "p21",
            text: "You feel burned out and exhausted.",
            weight: 1.9,
            options: [
                { text: "Quiet quit (do nothing) and hope nobody notices.", weight: 0.2 },
                { text: "Take PTO and discuss workload management with your manager.", weight: 1.0 },
                { text: "Snap at a client.", weight: 0.0 },
                { text: "Drink excessive coffee and push through until you collapse.", weight: 0.3 }
            ]
        },
        {
            id: "p22",
            text: "You are required to attend a 'Mandatory Fun' team building event.",
            weight: 1.2,
            options: [
                { text: "Sit in the corner and text.", weight: 0.2 },
                { text: "Participate with a positive attitude, then leave when appropriate.", weight: 1.0 },
                { text: "Mock the activities loudly.", weight: 0.1 },
                { text: "Hide in the bathroom.", weight: 0.3 }
            ]
        },
        {
            id: "p23",
            text: "Your boss is wrong about a factual detail in a team meeting.",
            weight: 1.4,
            options: [
                { text: "Interrupt and correct them instantly.", weight: 0.2 },
                { text: "Wait until the end or send a private note to clarify gently.", weight: 1.0 },
                { text: "Let the team operate on wrong information.", weight: 0.4 },
                { text: "Laugh at them.", weight: 0.0 }
            ]
        },
        {
            id: "p24",
            text: "A colleague leaves early every Friday while you stay late.",
            weight: 1.5,
            options: [
                { text: "Report them to HR immediately.", weight: 0.2 },
                { text: "Focus on your own output; unless it impacts you, it's their business.", weight: 1.0 },
                { text: "Start leaving early too without permission.", weight: 0.3 },
                { text: "Gossip about their 'laziness'.", weight: 0.2 }
            ]
        },
        {
            id: "p25",
            text: "You have to work with a colleague you personally dislike.",
            weight: 1.7,
            options: [
                { text: "Refuse the project.", weight: 0.1 },
                { text: "Maintain a strict, polite professional relationship focusing on the work.", weight: 1.0 },
                { text: "Send passive-aggressive emails.", weight: 0.2 },
                { text: "Try to get them fired.", weight: 0.0 }
            ]
        },
        {
            id: "p26",
            text: "You notice a typo in a colleague's presentation before they present it.",
            weight: 1.4,
            options: [
                { text: "Let them fail so you look better.", weight: 0.1 },
                { text: "Privately and quickly point it out to them.", weight: 1.0 },
                { text: "Point it out loudly during the presentation.", weight: 0.2 },
                { text: "Gossip about how bad their spelling is.", weight: 0.3 }
            ]
        },
        {
            id: "p27",
            text: "Your company announces a restructuring, and rumors of layoffs circulate.",
            weight: 1.8,
            options: [
                { text: "Spread the rumors to everyone you know.", weight: 0.1 },
                { text: "Update your resume and network quietly, just in case.", weight: 1.0 },
                { text: "Stop working because 'what's the point'.", weight: 0.2 },
                { text: "Panic and ask the boss every hour if you are safe.", weight: 0.3 }
            ]
        },
        {
            id: "p28",
            text: "A junior employee asks you for help, but you are very busy.",
            weight: 1.6,
            options: [
                { text: "Ignore their message.", weight: 0.2 },
                { text: "Say: 'I'm slammed right now, but book 15 mins with me at 4 PM.'", weight: 1.0 },
                { text: "Snap at them for interrupting.", weight: 0.1 },
                { text: "Do their work for them so they go away faster.", weight: 0.4 }
            ]
        },
        {
            id: "p29",
            text: "You are in a meeting that could have been an email.",
            weight: 1.2,
            options: [
                { text: "Visibly fall asleep.", weight: 0.0 },
                { text: "Remain attentive and suggest action items to wrap it up efficiently.", weight: 1.0 },
                { text: "Text your friends about how boring it is.", weight: 0.3 },
                { text: "Interrupt and leave.", weight: 0.1 }
            ]
        },
        {
            id: "p30",
            text: "You receive feedback that you need to improve your 'soft skills'.",
            weight: 1.9,
            options: [
                { text: "Dismiss it as fluff; only technical skills matter.", weight: 0.2 },
                { text: "Ask for specific examples and work on communication.", weight: 1.0 },
                { text: "Assume your boss just doesn't like you.", weight: 0.3 },
                { text: "Become overly fake-nice in a sarcastic way.", weight: 0.1 }
            ]
        },
        {
            id: "p31",
            text: "Your boss is micromanaging a task you know how to do.",
            weight: 1.7,
            options: [
                { text: "Do it wrong on purpose.", weight: 0.1 },
                { text: "Proactively provide updates before they ask to build trust.", weight: 1.0 },
                { text: "Snap: 'Back off, I got this.'", weight: 0.2 },
                { text: "Complain to coworkers constantly.", weight: 0.3 }
            ]
        },
        {
            id: "p32",
            text: "You receive a message from your boss saying 'We need to talk' with no context.",
            weight: 1.4,
            options: [
                { text: "Assume you are fired and start packing.", weight: 0.2 },
                { text: "Reply: 'Sure, is there anything I should prepare for the meeting?'", weight: 1.0 },
                { text: "Ignore the message for hours.", weight: 0.1 },
                { text: "Have a panic attack.", weight: 0.3 }
            ]
        },
        {
            id: "p33",
            text: "You are required to attend a networking event.",
            weight: 1.5,
            options: [
                { text: "Stand by the food table and talk to no one.", weight: 0.3 },
                { text: "Set a goal to meet 3 new people, then leave.", weight: 1.0 },
                { text: "Get drunk.", weight: 0.1 },
                { text: "Hide in the bathroom on your phone.", weight: 0.2 }
            ]
        },
        {
            id: "p34",
            text: "A colleague takes credit for a very small task you did.",
            weight: 1.2,
            options: [
                { text: "Let it go; pick your battles.", weight: 1.0 },
                { text: "Send a company-wide email correcting them.", weight: 0.0 },
                { text: "Bring it up in every meeting for a month.", weight: 0.2 },
                { text: "Steal their lunch.", weight: 0.0 }
            ]
        },
        {
            id: "p35",
            text: "You have too many meetings to get your actual work done.",
            weight: 1.8,
            options: [
                { text: "Work late into the night to catch up.", weight: 0.3 },
                { text: "Decline non-essential meetings and block out 'focus time'.", weight: 1.0 },
                { text: "Join meetings but work on other things (multitask poorly).", weight: 0.5 },
                { text: "Stop doing the work.", weight: 0.1 }
            ]
        },
        {
            id: "p36",
            text: "You are asked to perform a task that is technically 'not your job' but helps the team.",
            weight: 1.5,
            options: [
                { text: "Refuse loudly: 'Not my pay grade!'", weight: 0.2 },
                { text: "Do it this time, but document it and discuss role scope later.", weight: 1.0 },
                { text: "Do it poorly so they don't ask again.", weight: 0.1 },
                { text: "Gossip about how lazy everyone else is.", weight: 0.3 }
            ]
        },
        {
            id: "p37",
            text: "You are feeling sick but have a lot of work to do.",
            weight: 1.7,
            options: [
                { text: "Go to work and infect everyone.", weight: 0.1 },
                { text: "Take a sick day to recover faster and protect the team.", weight: 1.0 },
                { text: "Work from home but complain about being sick in every email.", weight: 0.3 },
                { text: "Take the day off but secretly work anyway.", weight: 0.4 }
            ]
        },
        {
            id: "p38",
            text: "A client asks for a discount you are not authorized to give.",
            weight: 1.3,
            options: [
                { text: "Give it to them to be liked.", weight: 0.1 },
                { text: "Politely explain your pricing value or offer a smaller, authorized alternative.", weight: 1.0 },
                { text: "Say 'My boss is too cheap to give discounts.'", weight: 0.2 },
                { text: "Ignore the request.", weight: 0.0 }
            ]
        },
        {
            id: "p39",
            text: "You spot a major risk in a project plan approved by management.",
            weight: 1.9,
            options: [
                { text: "Stay silent; it's not your problem.", weight: 0.3 },
                { text: "Document the risk and propose a mitigation strategy to the lead.", weight: 1.0 },
                { text: "Wait for it to fail so you can say 'I knew it'.", weight: 0.1 },
                { text: "Panic and quit the project.", weight: 0.2 }
            ]
        },
        {
            id: "p40",
            text: "You are bored with your current role after 2 years.",
            weight: 1.6,
            options: [
                { text: "Start slacking off.", weight: 0.2 },
                { text: "Discuss career growth/new challenges with your manager.", weight: 1.0 },
                { text: "Quit without a new job lined up.", weight: 0.3 },
                { text: "Complain to new hires about the company.", weight: 0.1 }
            ]
        },
        {
            id: "p41",
            text: "Your boss asks you to work late on a Friday for a non-urgent task.",
            weight: 1.6,
            options: [
                { text: "Just leave without saying anything.", weight: 0.1 },
                { text: "Politely negotiate: 'I can get this done first thing Monday morning.'", weight: 1.0 },
                { text: "Do it but complain loudly the whole time.", weight: 0.3 },
                { text: "Throw a temper tantrum.", weight: 0.0 }
            ]
        },
        {
            id: "p42",
            text: "You witness a coworker doing something slightly unethical (e.g., stealing supplies).",
            weight: 1.8,
            options: [
                { text: "Blackmail them.", weight: 0.0 },
                { text: "Assess severity; if minor, ignore or mention privately. If major, report.", weight: 1.0 },
                { text: "Join in and steal too.", weight: 0.1 },
                { text: "Gossip about it to everyone.", weight: 0.2 }
            ]
        },
        {
            id: "p43",
            text: "You are passed over for a project you wanted.",
            weight: 1.5,
            options: [
                { text: "Sabotage the project.", weight: 0.0 },
                { text: "Ask for feedback on why and how to get the next one.", weight: 1.0 },
                { text: "Sulking at your desk.", weight: 0.2 },
                { text: "Badmouth the person who got it.", weight: 0.1 }
            ]
        },
        {
            id: "p44",
            text: "A client hates the work you spent weeks on.",
            weight: 2.0,
            options: [
                { text: "Take it personally and cry.", weight: 0.2 },
                { text: "Ask specific questions to understand their vision and iterate.", weight: 1.0 },
                { text: "Tell them they have bad taste.", weight: 0.1 },
                { text: "Ghost the client.", weight: 0.0 }
            ]
        },
        {
            id: "p45",
            text: "You accidentally reply-all to a company email with a joke.",
            weight: 1.2,
            options: [
                { text: "Send another email apologizing briefly.", weight: 1.0 },
                { text: "Panic and unplug your computer.", weight: 0.1 },
                { text: "Double down and send a meme.", weight: 0.2 },
                { text: "Pretend you were hacked.", weight: 0.3 }
            ]
        },
        {
            id: "p46",
            text: "You are overwhelmed and cannot meet a deadline.",
            weight: 1.9,
            options: [
                { text: "Hide and hope they forget.", weight: 0.0 },
                { text: "Communicate early: 'I can't make the date, can we prioritize or extend?'", weight: 1.0 },
                { text: "Submit incomplete work without saying anything.", weight: 0.2 },
                { text: "Blame your team.", weight: 0.1 }
            ]
        },
        {
            id: "p47",
            text: "You are quitting your job for a better offer.",
            weight: 1.7,
            options: [
                { text: "Tell your boss exactly what you hate about them.", weight: 0.1 },
                { text: "Give standard notice, document your work, and leave on good terms.", weight: 1.0 },
                { text: "Stop working during your notice period.", weight: 0.2 },
                { text: "Ghost them (just stop showing up).", weight: 0.0 }
            ]
        },
        {
            id: "p48",
            text: "A coworker is spreading gossip about you.",
            weight: 1.5,
            options: [
                { text: "Start a screaming match in the hallway.", weight: 0.0 },
                { text: "Address it with them privately or go to HR if it escalates.", weight: 1.0 },
                { text: "Spread rumors about them in return.", weight: 0.1 },
                { text: "Cry in the bathroom every day.", weight: 0.2 }
            ]
        },
        {
            id: "p49",
            text: "You don't know how to do a task assigned to you.",
            weight: 1.6,
            options: [
                { text: "Guess and do it wrong.", weight: 0.2 },
                { text: "Research first, then ask for guidance if stuck.", weight: 1.0 },
                { text: "Ask someone else to do it for you.", weight: 0.3 },
                { text: "Ignore the task.", weight: 0.1 }
            ]
        },
        {
            id: "p50",
            text: "You are asked to give feedback on a friend's poor work performance.",
            weight: 1.8,
            options: [
                { text: "Lie and say they are doing great.", weight: 0.2 },
                { text: "Give honest, constructive feedback professionally.", weight: 1.0 },
                { text: "Recuse yourself to avoid conflict.", weight: 0.5 },
                { text: "Roast them strictly.", weight: 0.1 }
            ]
        }
    ],
    "Resilience": [
        {
            id: "r1",
            text: "Your computer crashes and you lose 3 hours of unsaved work.",
            weight: 1.6,
            options: [
                { text: "Scream and throw the mouse.", weight: 0.1 },
                { text: "Take a 10-minute walk to cool down, then start over.", weight: 1.0 },
                { text: "Cry and give up for the day.", weight: 0.4 },
                { text: "Blame the computer manufacturer on Twitter.", weight: 0.3 }
            ]
        },
        {
            id: "r2",
            text: "You plan a picnic, but it starts raining heavily as you arrive.",
            weight: 1.0,
            options: [
                { text: "Go home and sulk.", weight: 0.3 },
                { text: "Have an indoor picnic in the car or living room instead.", weight: 1.0 },
                { text: "Sit in the rain and complain.", weight: 0.1 },
                { text: "Cancel the date entirely.", weight: 0.2 }
            ]
        },
        {
            id: "r3",
            text: "You are rejected from a job you really wanted.",
            weight: 1.9,
            options: [
                { text: "Send an angry email to the recruiter.", weight: 0.0 },
                { text: "Believe you are worthless.", weight: 0.1 },
                { text: "Ask for feedback, accept it, and keep applying elsewhere.", weight: 1.0 },
                { text: "Lie on your resume for the next application.", weight: 0.0 }
            ]
        },
        {
            id: "r4",
            text: "You realize you have gained weight and your favorite jeans don't fit.",
            weight: 1.4,
            options: [
                { text: "Crash diet and starve yourself for a week.", weight: 0.2 },
                { text: "Buy the next size up and focus on healthy habits gradually.", weight: 1.0 },
                { text: "Refuse to go out until you lose weight.", weight: 0.3 },
                { text: "Blame the clothing brand for changing sizes.", weight: 0.4 }
            ]
        },
        {
            id: "r5",
            text: "You get a flat tire in the rain.",
            weight: 1.4,
            options: [
                { text: "Kick the car.", weight: 0.1 },
                { text: "Call for help or change it safely, accepting the situation.", weight: 1.0 },
                { text: "Cry and call your mom screaming.", weight: 0.3 },
                { text: "Abandon the car.", weight: 0.0 }
            ]
        },
        {
            id: "r6",
            text: "You study hard for a certification but fail by 1 point.",
            weight: 1.9,
            options: [
                { text: "Give up on the career path entirely.", weight: 0.2 },
                { text: "Register for the retake immediately.", weight: 1.0 },
                { text: "Claim the test was rigged.", weight: 0.3 },
                { text: "Sink into a month-long depression.", weight: 0.2 }
            ]
        },
        {
            id: "r7",
            text: "You cook a complex dinner for a date and burn it completely.",
            weight: 1.2,
            options: [
                { text: "Have a meltdown.", weight: 0.2 },
                { text: "Laugh about it and order pizza.", weight: 1.0 },
                { text: "Serve the burnt food anyway.", weight: 0.1 },
                { text: "Cancel the date.", weight: 0.3 }
            ]
        },
        {
            id: "r8",
            text: "You get the flu right before a vacation you paid for.",
            weight: 1.6,
            options: [
                { text: "Go anyway and infect everyone.", weight: 0.1 },
                { text: "Check travel insurance/cancel policies and rest.", weight: 1.0 },
                { text: "Post angry updates every hour.", weight: 0.3 },
                { text: "Refuse to take medicine out of spite.", weight: 0.2 }
            ]
        },
        {
            id: "r9",
            text: "You lose your wallet.",
            weight: 1.7,
            options: [
                { text: "Assume identity theft is inevitable and panic.", weight: 0.2 },
                { text: "Systematically cancel cards and file a report.", weight: 1.0 },
                { text: "Blame the person you were with.", weight: 0.1 },
                { text: "Wait a week to see if it turns up.", weight: 0.4 }
            ]
        },
        {
            id: "r10",
            text: "You trip and fall in public.",
            weight: 1.0,
            options: [
                { text: "Stay on the ground and refuse to get up.", weight: 0.1 },
                { text: "Get up, laugh it off, and check if you are hurt.", weight: 1.0 },
                { text: "Scream at the sidewalk.", weight: 0.0 },
                { text: "Run away in shame.", weight: 0.3 }
            ]
        },
        {
            id: "r11",
            text: "You apply for 20 jobs and hear nothing back.",
            weight: 1.9,
            options: [
                { text: "Revise your resume and try a different strategy.", weight: 1.0 },
                { text: "Decide you are unemployable.", weight: 0.2 },
                { text: "Stop applying.", weight: 0.1 },
                { text: "Send angry emails to the companies.", weight: 0.0 }
            ]
        },
        {
            id: "r12",
            text: "You are working on a hobby project and it looks terrible.",
            weight: 1.3,
            options: [
                { text: "Destroy it.", weight: 0.2 },
                { text: "Analyze what went wrong and try again (learning process).", weight: 1.0 },
                { text: "Tell everyone you meant to make it look like that.", weight: 0.4 },
                { text: "Never do that hobby again.", weight: 0.2 }
            ]
        },
        {
            id: "r13",
            text: "It rains on your wedding day/big outdoor event.",
            weight: 1.5,
            options: [
                { text: "Let it ruin the entire memory.", weight: 0.2 },
                { text: "Embrace it, buy umbrellas, and make it a fun story.", weight: 1.0 },
                { text: "Sue the weather forecaster.", weight: 0.0 },
                { text: "Refuse to take any photos.", weight: 0.3 }
            ]
        },
        {
            id: "r14",
            text: "You get a bad haircut.",
            weight: 1.1,
            options: [
                { text: "Wear a hat for 3 months and talk to no one.", weight: 0.2 },
                { text: "Remember hair grows back and style it as best you can.", weight: 1.0 },
                { text: "Shave your head impulsively.", weight: 0.4 },
                { text: "Try to fix it yourself and make it worse.", weight: 0.3 }
            ]
        },
        {
            id: "r15",
            text: "You are rejected by a romantic interest.",
            weight: 1.8,
            options: [
                { text: "Beg them to change their mind.", weight: 0.1 },
                { text: "Accept their decision gracefully and distance yourself.", weight: 1.0 },
                { text: "Insult them.", weight: 0.0 },
                { text: "Stalk them to see who they date next.", weight: 0.2 }
            ]
        },
        {
            id: "r16",
            text: "You are giving a speech and your mind goes blank.",
            weight: 1.5,
            options: [
                { text: "Run off stage.", weight: 0.1 },
                { text: "Pause, take a breath, check your notes, and resume.", weight: 1.0 },
                { text: "Apologize over and over for being stupid.", weight: 0.3 },
                { text: "Start making up random facts.", weight: 0.2 }
            ]
        },
        {
            id: "r17",
            text: "Your luggage gets lost by the airline on a trip.",
            weight: 1.4,
            options: [
                { text: "Scream at the desk agent.", weight: 0.1 },
                { text: "File the claim, buy essentials, and try to enjoy the trip anyway.", weight: 1.0 },
                { text: "Fly back home immediately.", weight: 0.2 },
                { text: "Refuse to change clothes for 3 days.", weight: 0.3 }
            ]
        },
        {
            id: "r18",
            text: "You suffer a minor injury that stops you from exercising for a month.",
            weight: 1.3,
            options: [
                { text: "Give up on health entirely and eat junk food.", weight: 0.2 },
                { text: "Focus on what you *can* do (stretching, diet, rest).", weight: 1.0 },
                { text: "Exercise anyway and make it worse.", weight: 0.1 },
                { text: "Complain daily about your bad luck.", weight: 0.3 }
            ]
        },
        {
            id: "r19",
            text: "A pipe bursts in your house causing water damage.",
            weight: 1.8,
            options: [
                { text: "Sit in the water and cry.", weight: 0.1 },
                { text: "Turn off the main water valve and call a plumber.", weight: 1.0 },
                { text: "Ignore it and hope it dries.", weight: 0.0 },
                { text: "Move out.", weight: 0.2 }
            ]
        },
        {
            id: "r20",
            text: "You plan a surprise party and the guest of honor finds out.",
            weight: 1.1,
            options: [
                { text: "Cancel the party out of anger.", weight: 0.1 },
                { text: "Pivot: 'Well, now we can hype it up together!'", weight: 1.0 },
                { text: "Blame whoever told them.", weight: 0.3 },
                { text: "Sulking during the party.", weight: 0.2 }
            ]
        },
        {
            id: "r21",
            text: "You accidentally delete an important file you've been working on for hours.",
            weight: 1.7,
            options: [
                { text: "Throw your keyboard across the room.", weight: 0.1 },
                { text: "Check backups/autosave, take a deep breath, and start rebuilding.", weight: 1.0 },
                { text: "Cry and go home.", weight: 0.3 },
                { text: "Lie to your boss that the file corrupted itself.", weight: 0.2 }
            ]
        },
        {
            id: "r22",
            text: "You worked hard to lose weight but gained 2 lbs back this week.",
            weight: 1.4,
            options: [
                { text: "Binge eat because 'it doesn't matter anyway'.", weight: 0.1 },
                { text: "Acknowledge that weight fluctuates and stick to the plan.", weight: 1.0 },
                { text: "Starve yourself the next day.", weight: 0.2 },
                { text: "Blame your scale for being broken.", weight: 0.3 }
            ]
        },
        {
            id: "r23",
            text: "You submit a creative project and get negative feedback.",
            weight: 1.8,
            options: [
                { text: "Decide you have zero talent.", weight: 0.2 },
                { text: "Filter the feedback for constructive points and improve.", weight: 1.0 },
                { text: "Attack the person who gave feedback.", weight: 0.1 },
                { text: "Delete the project.", weight: 0.2 }
            ]
        },
        {
            id: "r24",
            text: "Your car breaks down on the way to a concert you were excited for.",
            weight: 1.5,
            options: [
                { text: "Scream on the side of the road.", weight: 0.2 },
                { text: "Call a tow truck, accept you might miss it, and find a solution.", weight: 1.0 },
                { text: "Kick the car until you hurt your foot.", weight: 0.1 },
                { text: "Blame your partner for not checking the oil.", weight: 0.3 }
            ]
        },
        {
            id: "r25",
            text: "You apply for a loan/apartment and get rejected.",
            weight: 1.9,
            options: [
                { text: "Assume the system is rigged against you.", weight: 0.3 },
                { text: "Ask for the reason, fix the credit issue, and try again later.", weight: 1.0 },
                { text: "Give up on ever moving/buying.", weight: 0.2 },
                { text: "Lie on the next application.", weight: 0.0 }
            ]
        },
        {
            id: "r26",
            text: "You lose your 'streak' on an app (Duolingo, Fitness, etc.) after 100 days.",
            weight: 1.3,
            options: [
                { text: "Delete the app in a rage.", weight: 0.2 },
                { text: "Start a new streak; the progress you made is still real.", weight: 1.0 },
                { text: "Email support demanding they fix it.", weight: 0.3 },
                { text: "Feel like a failure for a week.", weight: 0.4 }
            ]
        },
        {
            id: "r27",
            text: "Your favorite restaurant closes down permanently.",
            weight: 1.0,
            options: [
                { text: "Boycott all other restaurants.", weight: 0.1 },
                { text: "Feel sad, but use it as a chance to find a new favorite.", weight: 1.0 },
                { text: "Complain about the economy for hours.", weight: 0.4 },
                { text: "Refuse to eat out anymore.", weight: 0.2 }
            ]
        },
        {
            id: "r28",
            text: "You spill coffee on your shirt right before a meeting.",
            weight: 1.4,
            options: [
                { text: "Cancel the meeting.", weight: 0.2 },
                { text: "Clean it as best as possible, make a joke about it, and proceed.", weight: 1.0 },
                { text: "Sit with your arms crossed to hide it awkwardly.", weight: 0.5 },
                { text: "Cry in the bathroom.", weight: 0.2 }
            ]
        },
        {
            id: "r29",
            text: "Constructive criticism feels like a personal attack.",
            weight: 1.7,
            options: [
                { text: "Lash out at the critic.", weight: 0.1 },
                { text: "Take a deep breath, separate your ego from the work, and listen.", weight: 1.0 },
                { text: "Shut down completely.", weight: 0.2 },
                { text: "Plot revenge.", weight: 0.0 }
            ]
        },
        {
            id: "r30",
            text: "You plan a relaxing weekend, but family unexpectedly visits.",
            weight: 1.5,
            options: [
                { text: "Lock your door and pretend to be asleep.", weight: 0.2 },
                { text: "Adjust your expectations, set boundaries on their stay, and adapt.", weight: 1.0 },
                { text: "Scream at them for not calling.", weight: 0.1 },
                { text: "Leave your own house.", weight: 0.3 }
            ]
        },
        {
            id: "r31",
            text: "You set a goal to read 1 book a month but failed this month.",
            weight: 1.2,
            options: [
                { text: "Stop reading entirely.", weight: 0.2 },
                { text: "Forgive yourself and start a new book today.", weight: 1.0 },
                { text: "Lie and say you read it.", weight: 0.1 },
                { text: "Force yourself to read for 10 hours straight to catch up.", weight: 0.3 }
            ]
        },
        {
            id: "r32",
            text: "You get lost in a new city without GPS.",
            weight: 1.4,
            options: [
                { text: "Panic and cry on the street corner.", weight: 0.2 },
                { text: "Ask a local for directions or find a map.", weight: 1.0 },
                { text: "Keep walking in random circles hoping to find the way.", weight: 0.3 },
                { text: "Blame the city layout.", weight: 0.4 }
            ]
        },
        {
            id: "r33",
            text: "Your phone breaks and you lose your photos.",
            weight: 1.7,
            options: [
                { text: "Fall into a deep depression.", weight: 0.2 },
                { text: "Accept the loss, learn to back up data, and make new memories.", weight: 1.0 },
                { text: "Scream at the repair shop employee.", weight: 0.1 },
                { text: "Refuse to get a new phone.", weight: 0.3 }
            ]
        },
        {
            id: "r34",
            text: "You are training for a race but get injured a week before.",
            weight: 1.6,
            options: [
                { text: "Run anyway and permanently damage your body.", weight: 0.1 },
                { text: "Focus on recovery and volunteer at the race instead.", weight: 1.0 },
                { text: "Burn your running shoes.", weight: 0.2 },
                { text: "Tell everyone you 'decided not to run'.", weight: 0.4 }
            ]
        },
        {
            id: "r35",
            text: "You try to learn a new language and realize it's harder than you thought.",
            weight: 1.3,
            options: [
                { text: "Quit immediately.", weight: 0.2 },
                { text: "Adjust your pace and celebrate small wins.", weight: 1.0 },
                { text: "Switch to an easier language every week.", weight: 0.3 },
                { text: "Complain that the language makes no sense.", weight: 0.4 }
            ]
        },
        {
            id: "r36",
            text: "Your laptop battery dies right before you save a document.",
            weight: 1.5,
            options: [
                { text: "Throw the laptop.", weight: 0.1 },
                { text: "Take a deep breath, plug it in, and see what recovered.", weight: 1.0 },
                { text: "Scream for 10 minutes.", weight: 0.2 },
                { text: "Never use a computer again.", weight: 0.1 }
            ]
        },
        {
            id: "r37",
            text: "You try to build IKEA furniture and the pieces don't fit.",
            weight: 1.2,
            options: [
                { text: "Break the furniture.", weight: 0.1 },
                { text: "Re-read the instructions and check if you made a mistake.", weight: 1.0 },
                { text: "Force it until it cracks.", weight: 0.2 },
                { text: "Leave it half-finished for 6 months.", weight: 0.3 }
            ]
        },
        {
            id: "r38",
            text: "You get rejected from your dream university/program.",
            weight: 2.0,
            options: [
                { text: "Assume your life is over.", weight: 0.2 },
                { text: "Allow yourself to grieve, then look at Plan B options.", weight: 1.0 },
                { text: "Send hate mail to the admissions office.", weight: 0.0 },
                { text: "Lie and say you got in.", weight: 0.1 }
            ]
        },
        {
            id: "r39",
            text: "You bake a cake for a party and it collapses.",
            weight: 1.1,
            options: [
                { text: "Bring the crumbs and call it a 'deconstructed' cake (humor).", weight: 1.0 },
                { text: "Throw it in the trash and go empty-handed.", weight: 0.3 },
                { text: "Buy a store cake and lie that you made it.", weight: 0.4 },
                { text: "Cancel going to the party.", weight: 0.2 }
            ]
        },
        {
            id: "r40",
            text: "You are stuck in an elevator for 20 minutes.",
            weight: 1.6,
            options: [
                { text: "Hyperventilate and scream.", weight: 0.2 },
                { text: "Press the emergency button and wait calmly.", weight: 1.0 },
                { text: "Try to pry the doors open (dangerous).", weight: 0.1 },
                { text: "Attack the other passengers.", weight: 0.0 }
            ]
        },
        {
            id: "r41",
            text: "You catch a cold right before a long-awaited holiday.",
            weight: 1.3,
            options: [
                { text: "Go anyway and be miserable/contagious.", weight: 0.1 },
                { text: "Rest, adjust plans, and try to enjoy a cozy version of the holiday.", weight: 1.0 },
                { text: "Cry for 3 days.", weight: 0.3 },
                { text: "Blame everyone you know for infecting you.", weight: 0.2 }
            ]
        },
        {
            id: "r42",
            text: "You try to fix a leak and make it worse.",
            weight: 1.2,
            options: [
                { text: "Smash the pipes.", weight: 0.0 },
                { text: "Turn off the water, admit defeat, and call a pro.", weight: 1.0 },
                { text: "Leave the water running and walk away.", weight: 0.1 },
                { text: "Cry on the floor.", weight: 0.3 }
            ]
        },
        {
            id: "r43",
            text: "You are rejected after a job interview you thought went perfectly.",
            weight: 1.8,
            options: [
                { text: "Send a nasty email to the recruiter.", weight: 0.0 },
                { text: "Allow disappointment, then ask for feedback (if possible) and move on.", weight: 1.0 },
                { text: "Decide you are worthless.", weight: 0.2 },
                { text: "Lie to friends that you got the job.", weight: 0.1 }
            ]
        },
        {
            id: "r44",
            text: "Your computer crashes and you lose unsaved work.",
            weight: 1.5,
            options: [
                { text: "Destroy the computer.", weight: 0.1 },
                { text: "Take a walk to cool off, then redo the work.", weight: 1.0 },
                { text: "Scream at your IT guy.", weight: 0.2 },
                { text: "Quit your job.", weight: 0.1 }
            ]
        },
        {
            id: "r45",
            text: "You gain weight over the holidays.",
            weight: 1.1,
            options: [
                { text: "Hate yourself and starve for a week.", weight: 0.2 },
                { text: "Accept it as part of life and return to normal healthy habits.", weight: 1.0 },
                { text: "Give up on health entirely.", weight: 0.1 },
                { text: "Refuse to leave the house.", weight: 0.3 }
            ]
        },
        {
            id: "r46",
            text: "You get a flat tire in the rain.",
            weight: 1.4,
            options: [
                { text: "Kick the car.", weight: 0.1 },
                { text: "Call for help or change it, accepting it's just a bad moment, not a bad life.", weight: 1.0 },
                { text: "Sit in the car and scream.", weight: 0.3 },
                { text: "Abandon the car.", weight: 0.0 }
            ]
        },
        {
            id: "r47",
            text: "A relationship ends unexpectedly.",
            weight: 2.0,
            options: [
                { text: "Seek revenge.", weight: 0.0 },
                { text: "Process the grief, rely on friends, and give it time.", weight: 1.0 },
                { text: "Beg them to come back repeatedly.", weight: 0.2 },
                { text: "Stalk them.", weight: 0.1 }
            ]
        },
        {
            id: "r48",
            text: "You cook a meal for guests and burn it.",
            weight: 1.2,
            options: [
                { text: "Serve it anyway.", weight: 0.1 },
                { text: "Laugh, apologize, and order pizza.", weight: 1.0 },
                { text: "Lock yourself in the kitchen.", weight: 0.2 },
                { text: "Kick the guests out.", weight: 0.0 }
            ]
        },
        {
            id: "r49",
            text: "You fail a test or certification exam.",
            weight: 1.6,
            options: [
                { text: "Claim the test was rigged.", weight: 0.2 },
                { text: "Analyze study gaps and reschedule the exam.", weight: 1.0 },
                { text: "Give up on your career.", weight: 0.1 },
                { text: "Tear up the paper in front of the proctor.", weight: 0.0 }
            ]
        },
        {
            id: "r50",
            text: "You drop your phone and crack the screen.",
            weight: 1.1,
            options: [
                { text: "Throw it against the wall to finish the job.", weight: 0.0 },
                { text: "Sigh, accept the mistake, and look into repair costs.", weight: 1.0 },
                { text: "Cry for an hour.", weight: 0.3 },
                { text: "Blame the floor manufacturer.", weight: 0.1 }
            ]
        }
    ]
};
