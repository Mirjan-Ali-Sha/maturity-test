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
        },
        {
            id: "e51",
            text: "You are feeling extremely burnt out, but your family wants to visit for the weekend.",
            weight: 1.6,
            options: [
                { text: "Host them anyway and pretend everything is fine, then collapse later.", weight: 0.8 }, // Good but self-sacrificing
                { text: "Explain honestly: 'I'm exhausted and wouldn't be good company, can we reschedule?'", weight: 1.0 }, // Best: Boundaries + Honesty
                { text: "Ghost their calls.", weight: 0.1 },
                { text: "Let them come but stay in your room the whole time.", weight: 0.3 }
            ]
        },
        {
            id: "e52",
            text: "A project you led failed, and your boss asks for a 'post-mortem' analysis.",
            weight: 1.8,
            options: [
                { text: "Take full responsibility for your part and outline structural improvements.", weight: 1.0 }, // Best: Ownership + Solution
                { text: "Acknowledge the failure calmly and share the blame with the team fairly.", weight: 0.85 }, // Good: Shared responsibility
                { text: "Write a report detailing why it wasn't your fault.", weight: 0.2 },
                { text: "Quit before the meeting.", weight: 0.0 }
            ]
        },
        {
            id: "e53",
            text: "You realize you have been venting to your partner about work every single day.",
            weight: 1.4,
            options: [
                { text: "Stop talking about work entirely and bottle it up.", weight: 0.4 },
                { text: "Ask them: 'Is this too much? I want to make sure I'm supporting you too.'", weight: 1.0 }, // Best: Check-in
                { text: "Limit the venting to 15 minutes, then switch topics consciously.", weight: 0.9 }, // Good: Self-regulation
                { text: "Get angry if they don't listen.", weight: 0.1 }
            ]
        },
        {
            id: "e54",
            text: "You are corrected on a fact in front of a group.",
            weight: 1.2,
            options: [
                { text: "Laugh and say, 'Wow, you're right! My mistake.'", weight: 1.0 }, // Best: Confidence
                { text: "Nod and say 'I see', then quickly change the subject.", weight: 0.8 }, // Good: Acceptance without drama
                { text: "Argue until everyone is uncomfortable.", weight: 0.1 },
                { text: "Say 'Well, that's just your opinion.'", weight: 0.2 }
            ]
        },
        {
            id: "e55",
            text: "You feel a sudden wave of irrational anger over a small thing.",
            weight: 1.5,
            options: [
                { text: "Suppress it and smile fake-ly.", weight: 0.5 },
                { text: "Step away, take deep breaths, and label the emotion without acting on it.", weight: 1.0 }, // Best: Processing
                { text: "Physically remove yourself from the situation until you are calm.", weight: 0.9 }, // Good: Safety mechanism
                { text: "Scream at the nearest person.", weight: 0.0 }
            ]
        },
        {
            id: "e56",
            text: "You feel Imposter Syndrome at work/school and fear everyone will find out you're 'faking it'.",
            weight: 1.7,
            options: [
                { text: "Overwork yourself to exhaustion to prove your worth.", weight: 0.5 },
                { text: "Remind yourself that you were hired for a reason and focus on learning.", weight: 1.0 }, // Best: Fact-based self-talk
                { text: "Confide in a trusted mentor to normalize the feeling.", weight: 0.9 }, // Good: Seeking support
                { text: "Quit before you get fired.", weight: 0.1 }
            ]
        },
        {
            id: "e57",
            text: "Your partner snaps at you for a small mistake after they had a bad day.",
            weight: 1.5,
            options: [
                { text: "Snap back immediately: 'Don't talk to me like that!'", weight: 0.3 },
                { text: "Calmly say: 'I know you're stressed, but please don't take it out on me.'", weight: 1.0 }, // Best: Boundary + Empathy
                { text: "Ignore it this time because you know they are tired.", weight: 0.8 }, // Good: Pick your battles
                { text: "Give them the silent treatment for 2 days.", weight: 0.1 }
            ]
        },
        {
            id: "e58",
            text: "You receive a backhanded compliment (e.g., 'You look great for your age').",
            weight: 1.2,
            options: [
                { text: "Get offended and make a scene.", weight: 0.2 },
                { text: "Take the 'compliment' part and ignore the insult to deprive them of satisfaction.", weight: 1.0 }, // Best: Rise above
                { text: "Reply with a sarcastic backhanded compliment.", weight: 0.4 },
                { text: "Laugh it off but internalize the insult.", weight: 0.5 }
            ]
        },
        {
            id: "e59",
            text: "You break a promise you made to yourself (e.g., 'I won't check my ex's profile').",
            weight: 1.4,
            options: [
                { text: "Shame yourself spiraling into 'I have no self-control'.", weight: 0.2 },
                { text: "Acknowledge the slip-up, forgive yourself, and reset the boundary immediately.", weight: 1.0 }, // Best: Self-compassion
                { text: "Decide the rule was stupid anyway and keep doing it.", weight: 0.1 },
                { text: "Distract yourself so you don't have to think about it.", weight: 0.6 }
            ]
        },
        {
            id: "e60",
            text: "Someone takes the parking spot you were waiting for.",
            weight: 1.1,
            options: [
                { text: "Key their car when they leave.", weight: 0.0 },
                { text: "Take a deep breath, realize it's just 2 minutes of walking, and find another spot.", weight: 1.0 }, // Best: Perspective
                { text: "Honk repeatedly to shame them.", weight: 0.2 },
                { text: "Roll down your window and yell.", weight: 0.1 }
            ]
        },
        {
            id: "e61",
            text: "You realize you are the toxic one in a specific relationship dynamic.",
            weight: 2.0,
            options: [
                { text: "Deny it and blame them for making you act that way.", weight: 0.1 },
                { text: "Admit it to yourself, apologize sincerely, and seek therapy/change.", weight: 1.0 }, // Best: Accountability
                { text: "Distance yourself to 'save' them without explaining why.", weight: 0.6 },
                { text: "Ask them for feedback on how you can do better, then actually listen.", weight: 0.95 } // Good: Active improvement
            ]
        },
        {
            id: "e62",
            text: "You are overwhelmed by the news and world events.",
            weight: 1.3,
            options: [
                { text: "Doomscroll for 4 hours until you feel hopeless.", weight: 0.1 },
                { text: "Curate your feed, set time limits, and focus on local actions you can control.", weight: 1.0 }, // Best: Healthy boundaries
                { text: "Ignore everything and pretend the world is perfect.", weight: 0.4 },
                { text: "Talk about how terrible everything is to everyone you meet.", weight: 0.2 }
            ]
        },
        {
            id: "e63",
            text: "A partner or roommate cleans the house but does it 'wrong' (not your way).",
            weight: 1.1,
            options: [
                { text: "Redo it immediately in front of them.", weight: 0.1 },
                { text: "Thank them for the effort; a clean house is better than a perfect one.", weight: 1.0 }, // Best: Appreciation
                { text: "Criticize their technique while they are working.", weight: 0.0 },
                { text: "Gently show them your method next time, but accept their help now.", weight: 0.9 } // Good: Teaching moment
            ]
        },
        {
            id: "e64",
            text: "You feel envious of a friend who inherited wealth.",
            weight: 1.6,
            options: [
                { text: "Make passive-aggressive comments about their 'easy life'.", weight: 0.2 },
                { text: "Acknowledge the envy, then refocus on your own path and values.", weight: 1.0 }, // Best: Emotional regulation
                { text: "Try to make them feel guilty for having money.", weight: 0.1 },
                { text: "Use it as motivation to build your own success, without bitterness.", weight: 0.9 } // Good: Sublimation
            ]
        },
        {
            id: "e65",
            text: "You are in a bad mood and a stranger smiles at you.",
            weight: 1.0,
            options: [
                { text: "Scowl back.", weight: 0.1 },
                { text: "Force a small smile back; they didn't cause your bad mood.", weight: 1.0 }, // Best: Civility
                { text: "Look away and ignore them.", weight: 0.6 },
                { text: "Wonder what they want from you.", weight: 0.3 }
            ]
        },
        {
            id: "e66",
            text: "You discover your partner has been texting an ex secretly, but claims it's 'innocent'.",
            weight: 2.5, // Extreme weight
            options: [
                { text: "Snoop through their phone while they sleep to get proof.", weight: 0.2 },
                { text: "Calmly state: 'Secrecy breaks my trust. We need to discuss boundaries or I can't stay.'", weight: 1.0 }, // Best: Self-respect + Boundary
                { text: "Ignore it to avoid a breakup, but live with anxiety.", weight: 0.1 },
                { text: "Ask open questions to understand the 'why' before reacting impulsively.", weight: 0.9 } // Good: Information gathering
            ]
        },
        {
            id: "e67",
            text: "Your parent is toxic and verbally abusive, but they are getting old and sick.",
            weight: 2.2,
            options: [
                { text: "Cut them off completely without guilt; abuse is abuse.", weight: 0.9 }, // Good: Self-protection
                { text: "Support them from a distance (hired help/admin) without engaging emotionally.", weight: 1.0 }, // Best: Duty + Boundaries
                { text: "Sacrifice your mental health to be their caretaker.", weight: 0.2 },
                { text: "Scream at them for everything they did in your childhood.", weight: 0.1 }
            ]
        },
        {
            id: "e68",
            text: "You realize your entire career path was your parents' dream, not yours, and you are miserable.",
            weight: 2.0,
            options: [
                { text: "Quit today with no plan.", weight: 0.3 },
                { text: "Accept the sunk cost, formulate a transition plan, and have the hard conversation.", weight: 1.0 }, // Best: Strategic Pivot
                { text: "Stay in the job and resent them forever.", weight: 0.1 },
                { text: "Start a side-hustle quietly to regain a sense of control.", weight: 0.9 } // Good: Coping
            ]
        },
        {
            id: "e69",
            text: "A close friend humiliates you in public to look cool.",
            weight: 1.8,
            options: [
                { text: "Laugh along awkwardly.", weight: 0.2 },
                { text: "Walk away immediately and re-evaluate the friendship later.", weight: 1.0 }, // Best: Dignity
                { text: "Start a physical fight.", weight: 0.0 },
                { text: "Wait until private, then tell them: 'That was unacceptable. Don't do it again.'", weight: 0.95 } // Good: Direct feedback
            ]
        },
        {
            id: "e70",
            text: "You are wrongly accused of something serious at a family gathering.",
            weight: 1.7,
            options: [
                { text: "Scream and cry to prove your innocence.", weight: 0.2 },
                { text: "State the facts once, calmly, and refuse to engage in the drama circle.", weight: 1.0 }, // Best: Emotional Regulation
                { text: "Storm out and block everyone.", weight: 0.4 },
                { text: "Try to win everyone over one by one desperately.", weight: 0.3 }
            ]
        },
        {
            id: "e71",
            text: "You discover a secret about a friend that could ruin their marriage, but you promised not to tell.",
            weight: 2.3,
            options: [
                { text: "Keep the secret; a promise is absolute.", weight: 0.3 },
                { text: "Tell the friend: 'I cannot hold this secret for you. You need to tell your spouse, or I will have to distance myself.'", weight: 1.0 }, // Best: Integrity + Boundaries
                { text: "Tell the spouse immediately anonymously.", weight: 0.8 }, // Good intent, cowardly method
                { text: "Gossip about it to others to relieve the burden.", weight: 0.1 }
            ]
        },
        {
            id: "e72",
            text: "You win a prestigious award, but you know deep down you had unfair help/privilege getting it.",
            weight: 1.9,
            options: [
                { text: "Reject the award publicly.", weight: 0.8 }, // Noble but performative?
                { text: "Accept it, but use the platform to highlight the inequality and pull others up.", weight: 1.0 }, // Best: Strategic use of privilege
                { text: "Pretend you did it all yourself.", weight: 0.2 },
                { text: "Feel guilty and hide the award.", weight: 0.4 }
            ]
        },
        {
            id: "e73",
            text: "Your parents need full-time care, but moving them in would destroy your marriage/mental health.",
            weight: 2.4,
            options: [
                { text: "Move them in and suffer.", weight: 0.3 },
                { text: "Find a quality care facility and visit often, accepting the guilt but prioritizing your nuclear family.", weight: 1.0 }, // Best: Hard choice
                { text: "Abandon them to the state.", weight: 0.1 },
                { text: "Divorce your partner to care for your parents.", weight: 0.2 }
            ]
        },
        {
            id: "e74",
            text: "You accidentally kill a neighbor's pet with your car. Nobody saw you.",
            weight: 2.5,
            options: [
                { text: "Drive away and never speak of it.", weight: 0.0 },
                { text: "Go to their door immediately, confess, apologize, and offer everything you can.", weight: 1.0 }, // Best: Extreme Accountability
                { text: "Leave an anonymous note with money.", weight: 0.5 },
                { text: "Blame it on another car.", weight: 0.0 }
            ]
        },
        {
            id: "e75",
            text: "You realize you are falling out of love with your partner of 10 years.",
            weight: 2.1,
            options: [
                { text: "Cheat to see if you still have 'spark' with others.", weight: 0.0 },
                { text: "Communicate the disconnection honestly and try counseling before making a final decision.", weight: 1.0 }, // Best: Effort & Honesty
                { text: "Stay for convenience and be cold to them.", weight: 0.2 },
                { text: "Leave a note and disappear.", weight: 0.1 }
            ]
        },
        {
            id: "e76",
            text: "You discover your partner has an addiction they have been hiding for years.",
            weight: 2.4,
            options: [
                { text: "Leave immediately without discussion.", weight: 0.3 },
                { text: "Set a hard boundary: 'I love you, but I cannot stay unless you enter treatment immediately.'", weight: 1.0 }, // Best: Compassionate Boundary
                { text: "Pour all your energy into 'fixing' them yourself.", weight: 0.2 }, // Codependency
                { text: "Pretend you don't know to keep the peace.", weight: 0.1 }
            ]
        },
        {
            id: "e77",
            text: "Your child or young relative does something morally repugnant (e.g., bullying, theft).",
            weight: 2.2,
            options: [
                { text: "Defend them blindly: 'My angel would never.'", weight: 0.1 },
                { text: "Hold them accountable, ensure they make restitution, but keep loving them through the correction.", weight: 1.0 }, // Best: Parenting/Guidance
                { text: "Shame them publicly to 'teach them a lesson'.", weight: 0.0 },
                { text: "Hide the evidence.", weight: 0.2 }
            ]
        },
        {
            id: "e78",
            text: "You accidentally find out you were adopted or have a different biological father later in life.",
            weight: 2.5,
            options: [
                { text: "Cut off the parents who raised you for 'lying'.", weight: 0.2 },
                { text: "Process the shock, seek therapy, and have a calm conversation to understand their reasons.", weight: 1.0 }, // Best: Processing trauma
                { text: "Deny the DNA test.", weight: 0.1 },
                { text: "Post the drama on Facebook immediately.", weight: 0.0 }
            ]
        },
        {
            id: "e79",
            text: "You have to choose between your dream career in another country and staying near your aging, lonely parent.",
            weight: 2.3,
            options: [
                { text: "Stay and resent the parent forever.", weight: 0.2 },
                { text: "Go, but set up a robust support system (calls, visits, care) and accept the sadness of the trade-off.", weight: 1.0 }, // Best: Owning the choice
                { text: "Go and never call because of guilt.", weight: 0.1 },
                { text: "Force the parent to move with you against their will.", weight: 0.3 }
            ]
        },
        {
            id: "e80",
            text: "You realize you have built a life (marriage, house, job) that you hate.",
            weight: 2.1,
            options: [
                { text: "Burn it all down (affair, quit job) to force a change.", weight: 0.1 },
                { text: "Admit the unhappiness, plan a responsible exit strategy, and dismantle the life respectfully.", weight: 1.0 }, // Best: Courageous integrity
                { text: "Numb yourself with alcohol/drugs to tolerate it.", weight: 0.0 },
                { text: "Wait for a midlife crisis.", weight: 0.2 }
            ]
        },
        {
            id: "e81",
            text: "Your estranged, abusive parent needs a kidney, and you are a match.",
            weight: 2.5,
            options: [
                { text: "Do it out of guilt, but resent them forever.", weight: 0.3 },
                { text: "Make the decision based on your own values and medical advice, free from manipulation. Saying 'No' is valid.", weight: 1.0 }, // Best: Autonomy
                { text: "Refuse just to watch them suffer.", weight: 0.1 },
                { text: "Do it on the condition they pay you.", weight: 0.0 }
            ]
        },
        {
            id: "e82",
            text: "You discover your partner has a second family in another city.",
            weight: 2.5,
            options: [
                { text: "Burn their clothes and scream in the street.", weight: 0.1 },
                { text: "Secure your assets, hire a lawyer, and exit the relationship with cold, steely precision.", weight: 1.0 }, // Best: Strategic survival
                { text: "Stay and try to compete with the other family.", weight: 0.0 },
                { text: "Blame yourself for not being enough.", weight: 0.2 }
            ]
        },
        {
            id: "e83",
            text: "You are the caregiver for a spouse with dementia who no longer recognizes you and is violent.",
            weight: 2.4,
            options: [
                { text: "Keep them at home until you have a nervous breakdown.", weight: 0.4 },
                { text: "Transition them to professional care, accepting that 'loving them' now means keeping everyone safe.", weight: 1.0 }, // Best: Reality acceptance
                { text: "Abandon them.", weight: 0.0 },
                { text: "Yell back at them when they get confused.", weight: 0.1 }
            ]
        },
        {
            id: "e84",
            text: "You realize you have suppressed a traumatic memory for 20 years and it's surfacing.",
            weight: 2.2,
            options: [
                { text: "Drink to shove it back down.", weight: 0.0 },
                { text: "Seek trauma-informed therapy immediately to process it safely.", weight: 1.0 }, // Best: Healing
                { text: "Trauma dump on everyone you meet without context.", weight: 0.3 },
                { text: "Decide you are 'broken' and isolate.", weight: 0.2 }
            ]
        },
        {
            id: "e85",
            text: "You have to put a beloved pet down, but the surgery *might* save them for $10,000 (low odds).",
            weight: 2.0,
            options: [
                { text: "Spend the money you don't have and go into debt.", weight: 0.3 },
                { text: "Make the compassionate choice to end their suffering based on quality of life, not your fear of loss.", weight: 1.0 }, // Best: Selfless love
                { text: "Keep them alive in pain because you can't say goodbye.", weight: 0.1 },
                { text: "Get a new pet immediately to replace them.", weight: 0.2 }
            ]
        },
        {
            id: "e86",
            text: "You are going through a divorce, and your ex is turning your children against you with lies.",
            weight: 2.5,
            options: [
                { text: "Tell the kids the 'truth' about how terrible their other parent is.", weight: 0.1 },
                { text: "Maintain the high road; show them consistent love and stability, trusting they will see the truth in time.", weight: 1.0 }, // Best: Long-term stability
                { text: "Give up custody to avoid the fight.", weight: 0.2 },
                { text: "Use money/gifts to buy the kids' loyalty back.", weight: 0.3 }
            ]
        },
        {
            id: "e87",
            text: "Your dying parent, who abused you, asks for your forgiveness on their deathbed.",
            weight: 2.4,
            options: [
                { text: "Scream at them for everything they did.", weight: 0.2 },
                { text: "Choose what brings *you* peace. You can offer forgiveness (for letting go) or simple silence, without fake reconciliation.", weight: 1.0 }, // Best: Autonomy
                { text: "Lie and say 'I forgive you' just to end it.", weight: 0.8 }, // Good: Compassionate lie
                { text: "Refuse to visit them.", weight: 0.5 } // Valid, but less closure
            ]
        },
        {
            id: "e88",
            text: "You realize you are the toxic one in your friend group and people are pulling away.",
            weight: 2.1,
            options: [
                { text: "Get angry and call them fake friends.", weight: 0.1 },
                { text: "Sit with the shame, accept the isolation as a consequence, and start the hard work of therapy/change.", weight: 1.0 }, // Best: Radical Accountability
                { text: "Chase them and beg for another chance.", weight: 0.3 },
                { text: "Find a new group of vulnerable people to dominate.", weight: 0.0 }
            ]
        },
        {
            id: "e89",
            text: "You witness a traumatic event but are unharmed physically.",
            weight: 2.0,
            options: [
                { text: "Repress it and refuse to talk about it.", weight: 0.1 },
                { text: "Seek debriefing/counseling immediately to prevent PTSD setting in.", weight: 1.0 }, // Best: Proactive Health
                { text: "Use it as a story to get attention at parties.", weight: 0.0 },
                { text: "Drink to sleep.", weight: 0.1 }
            ]
        },
        {
            id: "e90",
            text: "Your partner transitions gender or changes their fundamental identity after 10 years together.",
            weight: 2.3,
            options: [
                { text: "Stay out of obligation even if you are no longer attracted.", weight: 0.4 },
                { text: "Support them as a human/friend, but honestly assess if the romantic relationship can continue for *both* your needs.", weight: 1.0 }, // Best: Honesty + Compassion
                { text: "Shame them for 'tricking' you.", weight: 0.0 },
                { text: "Ghost them.", weight: 0.1 }
            ]
        },
        {
            id: "e91",
            text: "Your partner admits they are in love with someone else but wants to stay with you for the kids.",
            weight: 2.5,
            options: [
                { text: "Accept it and live in a loveless marriage.", weight: 0.2 },
                { text: "Compassionately end the romantic relationship to model healthy self-respect for the kids.", weight: 1.0 }, // Best: Modeling Truth
                { text: "Stay and punish them daily.", weight: 0.1 },
                { text: "Beg them to love you again.", weight: 0.3 }
            ]
        },
        {
            id: "e92",
            text: "You find out your entire childhood religion/belief system was based on a lie.",
            weight: 2.4,
            options: [
                { text: "Become a bitter cynic who mocks all believers.", weight: 0.2 },
                { text: "Grieve the loss of certainty, then reconstruct your own moral framework from scratch.", weight: 1.0 }, // Best: Reconstruction
                { text: "Pretend you still believe to avoid social exclusion.", weight: 0.4 },
                { text: "Join a different extremist group to find certainty again.", weight: 0.1 }
            ]
        },
        {
            id: "e93",
            text: "You are jealous of your own child's success/opportunities that you never had.",
            weight: 2.2,
            options: [
                { text: "Sabotage them subtly.", weight: 0.0 },
                { text: "Admit the feeling to yourself, process the grief of your unlived life, and cheer them on.", weight: 1.0 }, // Best: Breaking Generational Trauma
                { text: "Guilt trip them about how much you sacrificed.", weight: 0.1 },
                { text: "Take credit for their success.", weight: 0.2 }
            ]
        },
        {
            id: "e94",
            text: "Your dying parent asks you to promise something you know you won't do.",
            weight: 2.1,
            options: [
                { text: "Lie and promise it to give them peace.", weight: 0.9 }, // High Compassion / Moral Grey
                { text: "Gently say: 'I can't promise that, but I promise to do my best to be happy.'", weight: 1.0 }, // Best: Truth & Love
                { text: "Argue with them on their deathbed.", weight: 0.0 },
                { text: "Say nothing and leave the room.", weight: 0.3 }
            ]
        },
        {
            id: "e95",
            text: "You realize you are the villain in someone else's life story.",
            weight: 2.3,
            options: [
                { text: "Defend yourself aggressively to everyone.", weight: 0.2 },
                { text: "Accept that you cannot control their narrative, apologize if appropriate, and move on.", weight: 1.0 }, // Best: Acceptance
                { text: "Harass them until they change their mind.", weight: 0.0 },
                { text: "Obsess over 'fixing' your image.", weight: 0.3 }
            ]
        },
        {
            id: "e96",
            text: "You have to choose between saving your relationship or your career dream.",
            weight: 2.0,
            options: [
                { text: "Choose the career and ghost the partner.", weight: 0.2 },
                { text: "Evaluate which aligns more with your core values and choose consciously, accepting the grief of the path not taken.", weight: 1.0 }, // Best: Conscious Choice
                { text: "Choose the partner and resent them forever.", weight: 0.1 },
                { text: "Try to do both poorly and lose both.", weight: 0.3 }
            ]
        },
        {
            id: "e97",
            text: "You discover you enjoy solitude more than being with your family.",
            weight: 1.8,
            options: [
                { text: "Feel guilty and force yourself to socialize until you snap.", weight: 0.3 },
                { text: "Communicate your need for solitude as a recharge mechanism, then be fully present when you are together.", weight: 1.0 }, // Best: Self-knowledge
                { text: "Abandon your family.", weight: 0.0 },
                { text: "Drink to tolerate them.", weight: 0.1 }
            ]
        },
        {
            id: "e98",
            text: "Someone you love commits a heinous crime.",
            weight: 2.5,
            options: [
                { text: "Help them escape.", weight: 0.0 },
                { text: "Love the person, hate the act, but allow them to face the consequences of the law.", weight: 1.0 }, // Best: Dual Reality
                { text: "Deny reality.", weight: 0.1 },
                { text: "Cut them off and pretend you never knew them.", weight: 0.6 }
            ]
        },
        {
            id: "e99",
            text: "You feel absolutely nothing when a tragedy happens (emotional numbness).",
            weight: 1.9,
            options: [
                { text: "Fake cry to fit in.", weight: 0.4 },
                { text: "Accept the numbness as a shock response/defense mechanism and wait for feelings to process naturally.", weight: 1.0 }, // Best: Psychological Safety
                { text: "Think you are a sociopath.", weight: 0.2 },
                { text: "Force yourself to feel sad.", weight: 0.3 }
            ]
        },
        {
            id: "e100",
            text: "You achieve everything you ever wanted and still feel empty.",
            weight: 2.5,
            options: [
                { text: "Buy more things.", weight: 0.1 },
                { text: "Realize that external achievements don't fix internal voids. Begin the journey of inner purpose.", weight: 1.0 }, // Best: Wisdom (Maslow's Self-Actualization)
                { text: "Destroy your achievements.", weight: 0.0 },
                { text: "Blame the world.", weight: 0.2 }
            ]
        }
    ],
    // ================================================================================================================
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
        },
        {
            id: "f51",
            text: "You get a tax refund of $1,000. You have $1,000 in credit card debt.",
            weight: 1.9,
            options: [
                { text: "Pay off the debt immediately to save on interest.", weight: 1.0 }, // Best: Mathematical sense
                { text: "Pay half the debt and save the other half for emergencies.", weight: 0.85 }, // Good: Balance
                { text: "Buy a new TV.", weight: 0.1 },
                { text: "Invest it in crypto while keeping the debt.", weight: 0.2 }
            ]
        },
        {
            id: "f52",
            text: "A friend invites you to a vacation that is slightly out of your budget.",
            weight: 1.5,
            options: [
                { text: "Go, but set a strict daily spending limit to minimize damage.", weight: 0.7 }, // Passable
                { text: "Decline the trip but propose a cheaper weekend getaway later.", weight: 1.0 }, // Best: Boundary + Alternative
                { text: "Go and put it all on credit.", weight: 0.1 },
                { text: "Join for just 2 days instead of the whole week to save money.", weight: 0.9 } // Good: Compromise
            ]
        },
        {
            id: "f53",
            text: "You want to start investing but don't know where to begin.",
            weight: 1.3,
            options: [
                { text: "Buy whatever stock is trending on Twitter.", weight: 0.1 },
                { text: "Read a few foundational books or take a course before putting money in.", weight: 1.0 }, // Best: Education first
                { text: "Put a small amount into a broad index fund to get started while learning.", weight: 0.9 }, // Good: Action + Safety
                { text: "Do nothing because it's too scary.", weight: 0.3 }
            ]
        },
        {
            id: "f54",
            text: "Your salary hasn't increased in 2 years despite good performance.",
            weight: 1.7,
            options: [
                { text: "Market research your role's value and schedule a negotiation meeting.", weight: 1.0 }, // Best: Data-driven
                { text: "Quietly start applying for other jobs to see your worth.", weight: 0.9 }, // Good: Options
                { text: "Complain to coworkers about being underpaid.", weight: 0.2 },
                { text: "Stop working hard.", weight: 0.1 }
            ]
        },
        {
            id: "f55",
            text: "You accidentally overdraw your checking account.",
            weight: 1.1,
            options: [
                { text: "Ignore the bank notification.", weight: 0.0 },
                { text: "Immediately transfer funds to cover it and analyze why it happened.", weight: 1.0 }, // Best: Fix + Prevent
                { text: "Pay the fee and promise to be careful next time.", weight: 0.8 }, // Good: Action
                { text: "Open a new bank account to hide.", weight: 0.1 }
            ]
        },
        {
            id: "f56",
            text: "You notice a billing error in your favor (you were undercharged $50).",
            weight: 1.8,
            options: [
                { text: "Keep quiet; it's a 'win' for you against the corporation.", weight: 0.4 },
                { text: "Notify the company to correct it because integrity matters more than $50.", weight: 1.0 }, // Best: Integrity
                { text: "Donate the $50 to charity to clear your conscience.", weight: 0.7 }, // Good: Moral compromise
                { text: "Brag about it to friends.", weight: 0.2 }
            ]
        },
        {
            id: "f57",
            text: "Your rent/mortgage takes up 50% of your income, leaving you stressed.",
            weight: 2.0,
            options: [
                { text: "Complain but stay because you love the apartment.", weight: 0.2 },
                { text: "Make a plan to downsize, get a roommate, or increase income within 3 months.", weight: 1.0 }, // Best: Actionable change
                { text: "Use credit cards to buy groceries.", weight: 0.1 },
                { text: "Cut all fun/social spending to zero to make it work.", weight: 0.8 } // Good: Discipline (but risky burnout)
            ]
        },
        {
            id: "f58",
            text: "You have a gym membership you actually use, but money is tight this month.",
            weight: 1.3,
            options: [
                { text: "Cancel it immediately; health is free outside.", weight: 0.9 }, // Good: Prioritizing cash flow
                { text: "Keep it, but cut a different non-essential (streaming/eating out) to cover it.", weight: 1.0 }, // Best: Value-based budgeting
                { text: "Pay it late and eat the late fee.", weight: 0.2 },
                { text: "Stop going to the gym to 'save the value'.", weight: 0.0 }
            ]
        },
        {
            id: "f59",
            text: "A family member asks you to co-sign a loan for them.",
            weight: 1.9,
            options: [
                { text: "Sign it because you love them.", weight: 0.2 },
                { text: "Refuse politely, knowing that co-signing risks your own credit and the relationship.", weight: 1.0 }, // Best: Financial boundary
                { text: "Sign it but make them promise to pay.", weight: 0.3 },
                { text: "Offer to gift them a smaller amount of cash instead of signing.", weight: 0.9 } // Good: Supportive alternative
            ]
        },
        {
            id: "f60",
            text: "You get a raise, and you really want a new luxury watch.",
            weight: 1.4,
            options: [
                { text: "Buy it immediately as a reward.", weight: 0.3 },
                { text: "Wait 30 days. If you still want it and have the cash, buy it.", weight: 1.0 }, // Best: Delayed gratification
                { text: "Buy a fake one to look rich.", weight: 0.1 },
                { text: "Invest the raise difference and forget the watch.", weight: 0.95 } // Good: Wealth building
            ]
        },
        {
            id: "f61",
            text: "Your car is paid off, but you want a newer model with better tech.",
            weight: 1.7,
            options: [
                { text: "Trade it in for a new lease immediately.", weight: 0.3 },
                { text: "Keep the paid-off car and invest the equivalent of a car payment monthly.", weight: 1.0 }, // Best: Wealth building
                { text: "Buy an aftermarket screen/tech upgrade for $300 instead of a new car.", weight: 0.95 }, // Good: Cost-effective solution
                { text: "Complain about your 'old beater' constantly.", weight: 0.2 }
            ]
        },
        {
            id: "f62",
            text: "You have a chance to cheat on your taxes with very low risk of getting caught.",
            weight: 2.0,
            options: [
                { text: "Do it; everyone does it.", weight: 0.1 },
                { text: "File honestly; peace of mind is worth more than the money saved.", weight: 1.0 }, // Best: Integrity
                { text: "Cheat a little bit, just in the grey areas.", weight: 0.3 },
                { text: "Hire a CPA to find every *legal* deduction possible.", weight: 0.95 } // Good: Smart optimization
            ]
        },
        {
            id: "f63",
            text: "You are invited to be a bridesmaid/groomsman, costing $2,000 you don't have.",
            weight: 1.5,
            options: [
                { text: "Go into debt to avoid disappointing them.", weight: 0.2 },
                { text: "Have a heartfelt conversation: 'I love you, but I can't afford the full role. Can I attend as a guest?'", weight: 1.0 }, // Best: Vulnerability + Boundary
                { text: "Agree, but then complain about money the whole trip.", weight: 0.1 },
                { text: "Ask if you can skip the bachelor party to save costs but do the wedding.", weight: 0.9 } // Good: Compromise
            ]
        },
        {
            id: "f64",
            text: "You receive an offer for a credit limit increase.",
            weight: 1.4,
            options: [
                { text: "Accept it and treat it as extra spending money.", weight: 0.1 },
                { text: "Accept it to lower your utilization ratio, but don't change spending habits.", weight: 1.0 }, // Best: Credit score hack
                { text: "Decline it because you don't trust yourself.", weight: 0.8 }, // Good: Self-awareness
                { text: "Max it out immediately.", weight: 0.0 }
            ]
        },
        {
            id: "f65",
            text: "You are dining out and realize the restaurant forgot to charge you for drinks.",
            weight: 1.2,
            options: [
                { text: "Walk out cheering.", weight: 0.2 },
                { text: "Point it out to the server so they don't get in trouble.", weight: 1.0 }, // Best: Integrity
                { text: "Leave a larger tip to cover the difference.", weight: 0.9 }, // Good: Karma balance
                { text: "Post about your 'free drinks' online.", weight: 0.1 }
            ]
        },
        {
            id: "f66",
            text: "Your sibling is in jail/legal trouble and begs you for $5,000 bail money you saved for a house.",
            weight: 2.5,
            options: [
                { text: "Pay it immediately; family comes first no matter what.", weight: 0.4 },
                { text: "Refuse, knowing that enabling their behavior won't help them long-term.", weight: 1.0 }, // Best: Hard Truth/Boundaries
                { text: "Pay it, but make them sign a legal repayment contract (that they might ignore).", weight: 0.8 }, // Good: Attempt at structure
                { text: "Ghost them.", weight: 0.1 }
            ]
        },
        {
            id: "f67",
            text: "You lose your job and have $0 savings and $20k debt. Bankruptcy is on the table.",
            weight: 2.3,
            options: [
                { text: "Use payday loans to stay afloat (spiral deeper).", weight: 0.0 },
                { text: "Consult a bankruptcy lawyer immediately to understand options and stop the bleeding.", weight: 1.0 }, // Best: Professional Help
                { text: "Sell everything you own first, even essentials.", weight: 0.5 },
                { text: "Call creditors to negotiate hardship plans and pause payments.", weight: 0.95 } // Good: Communication
            ]
        },
        {
            id: "f68",
            text: "You find a bag with $5,000 cash in it. No ID.",
            weight: 2.0,
            options: [
                { text: "Keep it; finders keepers.", weight: 0.1 },
                { text: "Turn it into the police/authorities.", weight: 1.0 }, // Best: Integrity
                { text: "Keep it but donate half to charity.", weight: 0.3 }, // Rationalization
                { text: "Wait a week to see if anyone posts about it locally, then decide.", weight: 0.6 }
            ]
        },
        {
            id: "f69",
            text: "Your partner has secretly racked up $50,000 in gambling debt.",
            weight: 2.4,
            options: [
                { text: "Divorce/Leave immediately.", weight: 0.7 }, // Understandable self-preservation
                { text: "Separate finances immediately, freeze credit, and demand therapy/Gamblers Anon.", weight: 1.0 }, // Best: Protection + Path to healing
                { text: "Pay it off for them to 'start fresh'.", weight: 0.1 }, // Enabling
                { text: "Ignore it and hope they win it back.", weight: 0.0 }
            ]
        },
        {
            id: "f70",
            text: "You have insider information that could make you rich but is illegal to use.",
            weight: 2.1,
            options: [
                { text: "Use it carefully.", weight: 0.0 },
                { text: "Ignore the info completely; jail isn't worth wealth.", weight: 1.0 }, // Best: Risk Assessment
                { text: "Tell a friend to do it and split the profit.", weight: 0.0 },
                { text: "Report the leak to compliance.", weight: 0.9 } // Good: Ethics
            ]
        },
        {
            id: "f71",
            text: "You find a legal loophole that allows you to screw over a small business vendor for $10,000.",
            weight: 2.2,
            options: [
                { text: "Take the money; business is business.", weight: 0.1 },
                { text: "Honor the spirit of the agreement rather than the loophole; pay them what is fair.", weight: 1.0 }, // Best: Ethics > Profit
                { text: "Split the difference.", weight: 0.5 },
                { text: "Tell your friends how smart you are for finding it.", weight: 0.2 }
            ]
        },
        {
            id: "f72",
            text: "Your best friend needs life-saving surgery not covered by insurance. You have the cash, but it's your house deposit.",
            weight: 2.5,
            options: [
                { text: "Give the money; people matter more than property.", weight: 1.0 }, // Best: Human Values
                { text: "Help them fundraise aggressively but keep your savings secure.", weight: 0.9 }, // Good: Support + Security
                { text: "Refuse and say you don't have it.", weight: 0.2 },
                { text: "Give it but hold it over their head forever.", weight: 0.1 }
            ]
        },
        {
            id: "f73",
            text: "You are heavily in debt and inherit $50,000. Your creditors don't know about it.",
            weight: 2.0,
            options: [
                { text: "Hide the cash and declare bankruptcy anyway.", weight: 0.1 }, // Fraud
                { text: "Use the inheritance to negotiate settlements and clear the debt honestly.", weight: 1.0 }, // Best: Fresh Start
                { text: "Spend it on a vacation before they take it.", weight: 0.0 },
                { text: "Pay off family debts but ignore the banks.", weight: 0.6 }
            ]
        },
        {
            id: "f74",
            text: "You discover your financial advisor has been stealing small amounts from you.",
            weight: 1.8,
            options: [
                { text: "Let it slide because they made you a profit overall.", weight: 0.2 },
                { text: "Fire them and report them to regulatory authorities immediately.", weight: 1.0 }, // Best: Justice
                { text: "Blackmail them for better rates.", weight: 0.0 },
                { text: "Just withdraw your money quietly.", weight: 0.5 }
            ]
        },
        {
            id: "f75",
            text: "Your parents saved nothing for retirement and expect you to fund them, but you have your own kids.",
            weight: 2.3,
            options: [
                { text: "Sacrifice your kids' college fund for your parents.", weight: 0.4 },
                { text: "Set clear boundaries: 'I can help with X amount, but I cannot fully fund you.'", weight: 1.0 }, // Best: Realistic Boundaries
                { text: "Cut them off completely.", weight: 0.3 },
                { text: "Go into debt to support everyone.", weight: 0.2 }
            ]
        },
        {
            id: "f76",
            text: "You are the executor of a will, and you can easily take an extra $20,000 without anyone knowing.",
            weight: 2.5,
            options: [
                { text: "Take it; you did all the work anyway.", weight: 0.1 },
                { text: "Distribute the assets exactly as written, to the penny.", weight: 1.0 }, // Best: Absolute Integrity
                { text: "Take it but donate it to charity.", weight: 0.4 },
                { text: "Tell the other heirs you deserve a 'fee' and pressure them to agree.", weight: 0.6 }
            ]
        },
        {
            id: "f77",
            text: "You are sued for a mistake that isn't fully your fault, costing you $50,000.",
            weight: 2.3,
            options: [
                { text: "Refuse to pay and flee the state.", weight: 0.0 },
                { text: "Hire a lawyer to minimize damage, but accept the outcome and pay the settlement.", weight: 1.0 }, // Best: Reality acceptance
                { text: "Harass the person suing you.", weight: 0.1 },
                { text: "Sell illegal items to pay for it.", weight: 0.0 }
            ]
        },
        {
            id: "f78",
            text: "You have a gambling addiction and just won back all your losses ($100k).",
            weight: 2.4,
            options: [
                { text: "Keep playing to double it.", weight: 0.0 },
                { text: "Cash out, self-exclude from the casino, and hand control of finances to a trusted person.", weight: 1.0 }, // Best: Breaking the cycle
                { text: "Pay off debts but keep $10k to play with.", weight: 0.3 },
                { text: "Hide the money from your spouse.", weight: 0.2 }
            ]
        },
        {
            id: "f79",
            text: "Your business is failing. You can save it by using employee pension funds illegally.",
            weight: 2.5,
            options: [
                { text: "Do it; you'll pay it back before anyone knows.", weight: 0.0 }, // Fraud
                { text: "Let the business fail rather than commit a crime.", weight: 1.0 }, // Best: Ethical Hardship
                { text: "Borrow from a loan shark.", weight: 0.1 },
                { text: "Fire everyone without notice to save cash.", weight: 0.2 }
            ]
        },
        {
            id: "f80",
            text: "You find a security flaw in a bank website that lets you duplicate money.",
            weight: 2.2,
            options: [
                { text: "Exploit it for millions.", weight: 0.0 },
                { text: "Report it via their 'Bug Bounty' program for a legal reward.", weight: 1.0 }, // Best: White Hat
                { text: "Test it once with $100 then stop.", weight: 0.3 },
                { text: "Sell the info on the dark web.", weight: 0.1 }
            ]
        },
        {
            id: "f81",
            text: "You are drowning in debt and your parents offer to pay it off, but they will control your life forever.",
            weight: 2.3,
            options: [
                { text: "Take the money and try to hide your life.", weight: 0.2 },
                { text: "Refuse the money; freedom and autonomy are worth more than a quick fix. Work your own way out.", weight: 1.0 }, // Best: Independence
                { text: "Take the money and then cut them off (scamming them).", weight: 0.1 },
                { text: "Take it and become their servant.", weight: 0.3 }
            ]
        },
        {
            id: "f82",
            text: "You have power of attorney for a relative who is in a coma. You are broke.",
            weight: 2.5,
            options: [
                { text: "Borrow' a little cash; they won't know.", weight: 0.0 }, // Crime
                { text: "Manage their finances strictly for their care; seek separate social aid for yourself.", weight: 1.0 }, // Best: Fiduciary Duty
                { text: "Sell their house cheap to get quick cash.", weight: 0.1 },
                { text: "Use their credit card for 'groceries' (that are mostly for you).", weight: 0.2 }
            ]
        },
        {
            id: "f83",
            text: "You buy a house and discover a massive structural issue the inspector missed ($50k repair).",
            weight: 2.1,
            options: [
                { text: "Cover it up and sell the house to some other sucker.", weight: 0.1 }, // Unethical
                { text: "Assess legal recourse against the inspector/seller, then budget for the repair.", weight: 1.0 }, // Best: Problem Solving
                { text: "Walk away from the mortgage and ruin your credit.", weight: 0.2 },
                { text: "Ignore it until the house collapses.", weight: 0.0 }
            ]
        },
        {
            id: "f84",
            text: "You win the lottery ($10 Million).",
            weight: 2.5,
            options: [
                { text: "Tell everyone on Facebook immediately.", weight: 0.0 },
                { text: "Tell no one. Hire a lawyer and financial planner. Claim anonymously if possible.", weight: 1.0 }, // Best: Wisdom
                { text: "Buy a mansion and a Lambo on day one.", weight: 0.1 },
                { text: "Give it all to family immediately without a plan.", weight: 0.4 }
            ]
        },
        {
            id: "f85",
            text: "You are starving and see a shop vendor leave their cash box open and unattended.",
            weight: 2.4,
            options: [
                { text: "Steal it; survival of the fittest.", weight: 0.0 },
                { text: "Guard the box until they return, or ignore it. Character is what you do when no one looks.", weight: 1.0 }, // Best: Integrity
                { text: "Take just enough for a sandwich.", weight: 0.3 }, // Moral Grey/Survival
                { text: "Tell the vendor but ask for a reward.", weight: 0.5 }
            ]
        },
        {
            id: "f86",
            text: "You have to choose: Pay for your child's expensive rehab (50% chance of success) or keep your retirement savings.",
            weight: 2.5,
            options: [
                { text: "Pay it, even if it means working until you die.", weight: 0.9 }, // High love, high risk
                { text: "Set a limit: Offer what you can afford without ruining your future, or look for state-funded options.", weight: 1.0 }, // Best: Balanced Reality
                { text: "Keep the money; they made their choice.", weight: 0.2 },
                { text: "Guilt trip them daily about the cost.", weight: 0.1 }
            ]
        },
        {
            id: "f87",
            text: "Your parents leave the family home to you in their will, excluding your struggling sibling.",
            weight: 2.2,
            options: [
                { text: "Keep it all; mom and dad wanted this.", weight: 0.5 },
                { text: "Share the inheritance equitably (unless the sibling is dangerous), valuing family bond over money.", weight: 1.0 }, // Best: Generosity/Justice
                { text: "Keep it but give them small allowances to control them.", weight: 0.2 },
                { text: "Sell it and hide the money.", weight: 0.1 }
            ]
        },
        {
            id: "f88",
            text: "You are offered a bribe to approve a subpar contract. You are broke.",
            weight: 2.4,
            options: [
                { text: "Take it just this once.", weight: 0.0 },
                { text: "Refuse. Integrity has no price tag, even in poverty.", weight: 1.0 }, // Best: Moral Absolutism
                { text: "Report the briber.", weight: 0.9 }, // Good: Justice
                { text: "Ask for more money.", weight: 0.0 }
            ]
        },
        {
            id: "f89",
            text: "You find out your spouse has hidden a secret bank account with $50,000.",
            weight: 2.1,
            options: [
                { text: "Steal the money.", weight: 0.1 },
                { text: "Confront them calmly to understand the 'why' (fear? exit plan?) before deciding the marriage's future.", weight: 1.0 }, // Best: Root Cause Analysis
                { text: "Start your own secret account.", weight: 0.2 }, // Retaliation
                { text: "Divorce immediately.", weight: 0.5 }
            ]
        },
        {
            id: "f90",
            text: "A recession hits. You can keep your staff if you take a 50% pay cut for a year.",
            weight: 2.3,
            options: [
                { text: "Fire the staff to keep your salary.", weight: 0.2 },
                { text: "Take the cut. Leaders eat last.", weight: 1.0 }, // Best: Leadership
                { text: "Cut everyone's pay by 10% including yours.", weight: 0.9 }, // Good: Shared burden
                { text: "Quit and let the company burn.", weight: 0.1 }
            ]
        },
        {
            id: "f91",
            text: "You are offered $1 Million to do something legal but morally wrong (e.g., promote gambling to kids).",
            weight: 2.5,
            options: [
                { text: "Take it; money is freedom.", weight: 0.1 },
                { text: "Refuse. Your soul and legacy are not for sale.", weight: 1.0 }, // Best: Incorruptibility
                { text: "Take it and donate 10% to appease guilt.", weight: 0.3 },
                { text: "Take it and say 'it's just business'.", weight: 0.2 }
            ]
        },
        {
            id: "f92",
            text: "Your business partner embezzles money and runs. You are liable for the debt ($100k).",
            weight: 2.4,
            options: [
                { text: "Run away and change your name.", weight: 0.1 },
                { text: "Face the creditors, work out a payment plan, and rebuild your reputation slowly.", weight: 1.0 }, // Best: Accountability
                { text: "Steal from someone else to pay it.", weight: 0.0 },
                { text: "Drink yourself into oblivion.", weight: 0.1 }
            ]
        },
        {
            id: "f93",
            text: "You can save your dying pet or keep your emergency fund. (High chance of pet survival).",
            weight: 2.0,
            options: [
                { text: "Let the pet die to save money.", weight: 0.2 },
                { text: "Spend the fund. Money can be earned again; a life is unique.", weight: 1.0 }, // Best: Value alignment
                { text: "Go into high-interest debt beyond the fund.", weight: 0.5 },
                { text: "Crowdfund without spending your own money.", weight: 0.4 }
            ]
        },
        {
            id: "f94",
            text: "You find a wallet with ID and $2,000 cash. You are late on rent and might be evicted.",
            weight: 2.5,
            options: [
                { text: "Keep it. The universe provided.", weight: 0.2 },
                { text: "Return it. Integrity is tested most when you are desperate.", weight: 1.0 }, // Best: Ultimate Integrity
                { text: "Take the cash, return the wallet.", weight: 0.4 },
                { text: "Leave it there.", weight: 0.3 }
            ]
        },
        {
            id: "f95",
            text: "Your parent gambles away their house and wants to move in with you.",
            weight: 2.3,
            options: [
                { text: "Let them move in and destroy your peace.", weight: 0.3 },
                { text: "Refuse housing but help them find social services/shelter. Enabling doesn't help.", weight: 1.0 }, // Best: Hard Boundaries
                { text: "Give them your savings.", weight: 0.1 },
                { text: "Cut contact.", weight: 0.5 }
            ]
        },
        {
            id: "f96",
            text: "You invest in a friend's startup and it fails. You lose everything you invested.",
            weight: 1.9,
            options: [
                { text: "Sue your friend.", weight: 0.2 },
                { text: "Accept the risk you took. Value the friendship over the lost capital.", weight: 1.0 }, // Best: Maturity
                { text: "Badmouth them to everyone.", weight: 0.1 },
                { text: "Never invest again.", weight: 0.4 }
            ]
        },
        {
            id: "f97",
            text: "You can marry for money (no love) or marry for love (poverty).",
            weight: 2.1,
            options: [
                { text: "Marry for money.", weight: 0.3 },
                { text: "Marry for love and build wealth together.", weight: 1.0 }, // Best: Partnership
                { text: "Marry for money then divorce.", weight: 0.2 },
                { text: "Stay single.", weight: 0.5 }
            ]
        },
        {
            id: "f98",
            text: "You are overpaid by $1,000 in your paycheck.",
            weight: 1.5,
            options: [
                { text: "Spend it quickly.", weight: 0.1 },
                { text: "Notify payroll. They will find out eventually and deduct it.", weight: 1.0 }, // Best: Prudence
                { text: "Put it in savings and wait for them to ask.", weight: 0.6 },
                { text: "Quit.", weight: 0.0 }
            ]
        },
        {
            id: "f99",
            text: "Your wealthy mentor offers to solve all your financial problems if you cover up a crime.",
            weight: 2.5,
            options: [
                { text: "Do it. Financial freedom is worth it.", weight: 0.0 },
                { text: "Walk away. A clear conscience is the only true wealth.", weight: 1.0 }, // Best: Wisdom
                { text: "Ask for more money.", weight: 0.0 },
                { text: "Record them and blackmail them.", weight: 0.2 }
            ]
        },
        {
            id: "f100",
            text: "You have enough money to retire today, but you feel purposeless.",
            weight: 2.2,
            options: [
                { text: "Keep working just to make more money.", weight: 0.3 },
                { text: "Retire and dedicate your life to philanthropy or mentoring.", weight: 1.0 }, // Best: Self-Actualization
                { text: "Buy a yacht and party.", weight: 0.4 },
                { text: "Become depressed.", weight: 0.2 }
            ]
        }
        
    ],
    // ================================================================================================================
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
        },
        {
            id: "s51",
            text: "A friend makes a joke that hurts your feelings.",
            weight: 1.4,
            options: [
                { text: "Laugh along but go home and cry.", weight: 0.4 },
                { text: "Say calmly: 'I know you're joking, but that one actually stung a bit.'", weight: 1.0 }, // Best: Direct & Vulnerable
                { text: "Pull them aside later and mention it casually.", weight: 0.9 }, // Good: Conflict reduction
                { text: "Insult them back.", weight: 0.1 }
            ]
        },
        {
            id: "s52",
            text: "You are at a dinner where everyone splits the bill, but you ordered a salad and they ordered steak.",
            weight: 1.3,
            options: [
                { text: "Pay the split and resent them.", weight: 0.5 },
                { text: "Cheerfully say: 'Hey, since I only got a salad, mind if I throw in $20 instead?'", weight: 1.0 }, // Best: Assertive & Polite
                { text: "Calculate everyone's exact debt to the penny.", weight: 0.3 },
                { text: "Just pay the split this time, but ask for separate checks next time before ordering.", weight: 0.9 } // Good: Future planning
            ]
        },
        {
            id: "s53",
            text: "A friend is constantly negative and draining your energy.",
            weight: 1.7,
            options: [
                { text: "Ghost them completely.", weight: 0.2 },
                { text: "Set boundaries on how much time you spend with them.", weight: 0.9 }, // Good: Self-preservation
                { text: "Have a compassionate conversation about how the dynamic affects you.", weight: 1.0 }, // Best: Growth opportunity
                { text: "Tell them to 'stop whining'.", weight: 0.1 }
            ]
        },
        {
            id: "s54",
            text: "You forgot a close friend's name introduction to another friend.",
            weight: 1.1,
            options: [
                { text: "Stand there in awkward silence.", weight: 0.2 },
                { text: "Laugh and say: 'My brain just froze, you guys introduce yourselves!'", weight: 1.0 }, // Best: Humor & Honesty
                { text: "Apologize quickly and ask them to remind you.", weight: 0.9 }, // Good: Directness
                { text: "Run away to the bathroom.", weight: 0.0 }
            ]
        },
        {
            id: "s55",
            text: "You disagree with a friend's parenting style.",
            weight: 1.6,
            options: [
                { text: "Criticize them openly.", weight: 0.1 },
                { text: "Say nothing unless the child is in danger; it's not your place.", weight: 1.0 }, // Best: Wisdom
                { text: "Offer support only if they ask for advice.", weight: 0.9 }, // Good: Respect
                { text: "Gossip about it to other friends.", weight: 0.2 }
            ]
        },
        {
            id: "s56",
            text: "You are always the one planning events for your friend group.",
            weight: 1.4,
            options: [
                { text: "Stop planning and let the group die.", weight: 0.2 },
                { text: "Tell them: 'I'm burnt out on planning, someone else needs to take the lead next time.'", weight: 1.0 }, // Best: Communication
                { text: "Plan an event but don't invite the lazy ones.", weight: 0.1 },
                { text: "Keep planning but resent them secretly.", weight: 0.3 }
            ]
        },
        {
            id: "s57",
            text: "A friend keeps checking their phone while you are talking.",
            weight: 1.2,
            options: [
                { text: "Stop talking until they look up.", weight: 0.9 }, // Good: Non-verbal cue
                { text: "Ask gently: 'Are you expecting an important call? We can pause.'", weight: 1.0 }, // Best: Classy confrontation
                { text: "Grab their phone.", weight: 0.0 },
                { text: "Talk louder to get attention.", weight: 0.2 }
            ]
        },
        {
            id: "s58",
            text: "You receive a gift you already own.",
            weight: 1.1,
            options: [
                { text: "Say: 'I already have this.'", weight: 0.1 },
                { text: "Accept it graciously and thank them for knowing your taste.", weight: 1.0 }, // Best: Grace
                { text: "Ask for the receipt immediately.", weight: 0.3 },
                { text: "Regift it to them later by accident.", weight: 0.0 }
            ]
        },
        {
            id: "s59",
            text: "A conversation hits an awkward silence.",
            weight: 1.0,
            options: [
                { text: "Panic and say something weird.", weight: 0.2 },
                { text: "Ask an open-ended question to restart the flow.", weight: 1.0 }, // Best: Social skill
                { text: "Check your phone.", weight: 0.3 },
                { text: "Be comfortable with the silence for a moment.", weight: 0.9 } // Good: Confidence
            ]
        },
        {
            id: "s60",
            text: "You are invited to a party where you only know the host.",
            weight: 1.5,
            options: [
                { text: "Don't go.", weight: 0.2 },
                { text: "Go and stick to the host like glue.", weight: 0.3 },
                { text: "Go, introduce yourself to 2-3 new people, and leave if it's bad.", weight: 1.0 }, // Best: Courage
                { text: "Get drunk to loosen up.", weight: 0.1 }
            ]
        },
        {
            id: "s61",
            text: "A friend keeps borrowing small items and returning them damaged.",
            weight: 1.4,
            options: [
                { text: "Stop lending them things without explanation.", weight: 0.8 }, // Good: Boundary
                { text: "Say: 'I can't lend this to you because the last few items came back broken.'", weight: 1.0 }, // Best: Honest boundary
                { text: "Lend it anyway and get mad when it breaks.", weight: 0.2 },
                { text: "Break something of theirs.", weight: 0.0 }
            ]
        },
        {
            id: "s62",
            text: "You are the only sober person at a party and people are being annoying.",
            weight: 1.2,
            options: [
                { text: "Lecture them about drinking.", weight: 0.1 },
                { text: "Leave early gracefully.", weight: 1.0 }, // Best: Self-care
                { text: "Stay and judge everyone visibly.", weight: 0.3 },
                { text: "Make sure your friends get home safe, then leave.", weight: 0.95 } // Good: Responsibility
            ]
        },
        {
            id: "s63",
            text: "You run into an ex-friend who you ended things badly with.",
            weight: 1.5,
            options: [
                { text: "Run away.", weight: 0.2 },
                { text: "Nod politely and keep moving.", weight: 1.0 }, // Best: Maturity
                { text: "Try to restart the argument right there.", weight: 0.0 },
                { text: "Stop and have a fake 'we should catch up' conversation.", weight: 0.4 }
            ]
        },
        {
            id: "s64",
            text: "A friend achieves a milestone you wanted (e.g., gets married, promoted) before you.",
            weight: 1.8,
            options: [
                { text: "Cry at their party.", weight: 0.1 },
                { text: "Celebrate them fully; their success doesn't mean your failure.", weight: 1.0 }, // Best: Abundance mindset
                { text: "Ask them when they are going to have kids (deflect).", weight: 0.2 },
                { text: "Privately journal your feelings but show up for them 100%.", weight: 0.95 } // Good: Processing
            ]
        },
        {
            id: "s65",
            text: "Someone interrupts you repeatedly in a group setting.",
            weight: 1.4,
            options: [
                { text: "Stop talking entirely.", weight: 0.3 },
                { text: "Continue talking at the same volume to hold the floor.", weight: 0.9 }, // Good: Assertiveness
                { text: "Pause, smile, and say: 'Hold on, I wasn't quite finished.'", weight: 1.0 }, // Best: Politeness + Firmness
                { text: "Scream 'SHUT UP!'", weight: 0.0 }
            ]
        },
        {
            id: "s66",
            text: "Your best friend confesses they committed a serious crime (e.g., hit and run).",
            weight: 2.5,
            options: [
                { text: "Help them hide the evidence.", weight: 0.0 },
                { text: "Urge them to turn themselves in and get a lawyer; refuse to be an accessory.", weight: 1.0 }, // Best: Tough Love/Law
                { text: "Cut contact immediately to protect yourself.", weight: 0.8 }, // Good: Self-preservation
                { text: "Call the police immediately without telling them.", weight: 0.9 } // Ethical Dilemma
            ]
        },
        {
            id: "s67",
            text: "Your friend's partner hits on you aggressively.",
            weight: 1.9,
            options: [
                { text: "Keep it a secret to save their relationship.", weight: 0.2 },
                { text: "Tell your friend immediately with receipts/proof.", weight: 1.0 }, // Best: Loyalty
                { text: "Flirt back.", weight: 0.0 },
                { text: "Tell the partner to stop but say nothing to the friend.", weight: 0.5 }
            ]
        },
        {
            id: "s68",
            text: "You witness a friend being racist/discriminatory.",
            weight: 1.8,
            options: [
                { text: "Laugh nervously.", weight: 0.1 },
                { text: "Call them out on the spot: 'That's not okay.'", weight: 1.0 }, // Best: Integrity
                { text: "Wait until later to explain why it was hurtful/wrong.", weight: 0.9 }, // Good: Education focus
                { text: "Ghost them.", weight: 0.4 }
            ]
        },
        {
            id: "s69",
            text: "Two of your best friends are divorcing and demanding you pick a side.",
            weight: 1.6,
            options: [
                { text: "Pick the one you like more.", weight: 0.3 },
                { text: "Refuse to pick sides: 'I love you both and won't be a messenger.'", weight: 1.0 }, // Best: Neutrality
                { text: "Play both sides and gossip.", weight: 0.0 },
                { text: "Step back from both until the dust settles.", weight: 0.9 } // Good: Boundary
            ]
        },
        {
            id: "s70",
            text: "You realize your entire friend group is holding you back in life.",
            weight: 1.7,
            options: [
                { text: "Ghost them all.", weight: 0.3 },
                { text: "Slowly distance yourself while actively seeking new circles aligned with your growth.", weight: 1.0 }, // Best: Growth
                { text: "Try to force them all to change with you.", weight: 0.2 },
                { text: "Stay because you are afraid of being lonely.", weight: 0.1 }
            ]
        },
        {
            id: "s71",
            text: "Your friend asks you to provide an alibi for them while they cheat on their partner.",
            weight: 2.2,
            options: [
                { text: "Do it; bros/girls before partners.", weight: 0.1 },
                { text: "Refuse: 'I won't blow your cover, but I won't lie for you either. Don't involve me.'", weight: 1.0 }, // Best: Boundary
                { text: "Tell the partner immediately.", weight: 0.8 }, // Moral, but explosive
                { text: " Agree but then mess it up on purpose.", weight: 0.2 }
            ]
        },
        {
            id: "s72",
            text: "You are not invited to the wedding of a close friend.",
            weight: 1.6,
            options: [
                { text: "Demand an explanation.", weight: 0.2 },
                { text: "Process the hurt privately, send a card, and re-evaluate the closeness of the friendship later.", weight: 1.0 }, // Best: Dignity
                { text: "Crash the wedding.", weight: 0.0 },
                { text: "Post passive-aggressive photos on that day.", weight: 0.1 }
            ]
        },
        {
            id: "s73",
            text: "A friend falls down a dangerous conspiracy theory rabbit hole.",
            weight: 1.8,
            options: [
                { text: "Mock them publicly.", weight: 0.1 },
                { text: "Maintain connection on other topics to keep them grounded, but don't validate the theory.", weight: 1.0 }, // Best: Empathy/Safety
                { text: "Debate them endlessly with facts (they won't listen).", weight: 0.5 },
                { text: "Cut them off immediately.", weight: 0.7 }
            ]
        },
        {
            id: "s74",
            text: "You realize *you* have been the toxic friend in the group.",
            weight: 2.0,
            options: [
                { text: "Deny it and say they are too sensitive.", weight: 0.1 },
                { text: "Apologize specifically to those you hurt and start behavior change immediately.", weight: 1.0 }, // Best: Redemption
                { text: "Leave the group and find new people to manipulate.", weight: 0.0 },
                { text: "Buy them gifts to buy forgiveness.", weight: 0.3 }
            ]
        },
        {
            id: "s75",
            text: "A friend with a drinking problem asks you to buy them alcohol.",
            weight: 2.1,
            options: [
                { text: "Buy it to avoid a fight.", weight: 0.1 },
                { text: "Refuse gently: 'I love you too much to help you hurt yourself.'", weight: 1.0 }, // Best: Loving boundary
                { text: "Buy it but water it down.", weight: 0.2 },
                { text: "Lecture them for an hour.", weight: 0.4 }
            ]
        },
        {
            id: "s76",
            text: "Your best friend is cheating on their spouse, who is also your close friend.",
            weight: 2.4,
            options: [
                { text: "Tell the spouse immediately.", weight: 0.8 }, // Honest but chaotic
                { text: "Tell the cheater: 'You have 48 hours to tell them, or I will. I won't be party to this lie.'", weight: 1.0 }, // Best: Ultimatum/Integrity
                { text: "Do nothing and hang out with both of them like normal.", weight: 0.1 },
                { text: "Help cover up the affair.", weight: 0.0 }
            ]
        },
        {
            id: "s77",
            text: "You witness a hate crime or severe harassment in public.",
            weight: 2.1,
            options: [
                { text: "Walk away quickly.", weight: 0.1 },
                { text: "Intervene safely (distraction, recording, or calling help) rather than being a bystander.", weight: 1.0 }, // Best: Civic Courage
                { text: "Join in.", weight: 0.0 },
                { text: "Film it for likes without helping.", weight: 0.2 }
            ]
        },
        {
            id: "s78",
            text: "Your friend group turns on one member and starts bullying them.",
            weight: 1.9,
            options: [
                { text: "Join in to stay safe.", weight: 0.1 },
                { text: "Stand up for the victim publicly: 'This isn't cool, stop it.'", weight: 1.0 }, // Best: Social Bravery
                { text: "Comfort the victim privately but stay silent publicly.", weight: 0.6 },
                { text: "Leave the group silently.", weight: 0.5 }
            ]
        },
        {
            id: "s79",
            text: "A friend with a contagious illness (like COVID) plans to attend a crowded wedding.",
            weight: 1.8,
            options: [
                { text: "Mind your own business.", weight: 0.3 },
                { text: "Tell them they are being selfish and urge them to stay home.", weight: 0.9 }, // Good: Direct
                { text: "If they refuse, alert the bride/groom to protect the vulnerable guests.", weight: 1.0 }, // Best: Protecting the collective
                { text: "Go to the wedding and avoid them.", weight: 0.4 }
            ]
        },
        {
            id: "s80",
            text: "You accidentally reveal a deep secret that ruins a reputation.",
            weight: 2.0,
            options: [
                { text: "Deny you said it.", weight: 0.1 },
                { text: "Take full public responsibility, apologize without caveats, and accept the social fallout.", weight: 1.0 }, // Best: Owning the damage
                { text: "Blame alcohol.", weight: 0.3 },
                { text: "Say 'it needed to be said'.", weight: 0.2 }
            ]
        },
        {
            id: "s81",
            text: "Your best friend's partner hits on you and says they are in an open relationship (you don't know if that's true).",
            weight: 2.0,
            options: [
                { text: "Sleep with them.", weight: 0.0 },
                { text: "Verify with your friend first before doing anything.", weight: 1.0 }, // Best: Verification/Loyalty
                { text: "assume it's a lie and tell your friend they are cheating.", weight: 0.8 },
                { text: "Ghost both of them.", weight: 0.2 }
            ]
        },
        {
            id: "s82",
            text: "You find out a friend in your group is a predator/abuser based on credible evidence.",
            weight: 2.5,
            options: [
                { text: "Defend them because 'they are nice to me'.", weight: 0.1 },
                { text: "Cut ties publicly and support the survivors/victims.", weight: 1.0 }, // Best: Moral Stance
                { text: "Quietly drift away to avoid drama.", weight: 0.4 },
                { text: "Warn others privately but stay friends publicly.", weight: 0.2 }
            ]
        },
        {
            id: "s83",
            text: "You are asked to testify in court against a friend.",
            weight: 2.4,
            options: [
                { text: "Lie under oath to save them.", weight: 0.1 },
                { text: "Tell the truth, the whole truth, and nothing but the truth.", weight: 1.0 }, // Best: Civic Duty
                { text: "Flee the country.", weight: 0.0 },
                { text: "Refuse to speak.", weight: 0.3 }
            ]
        },
        {
            id: "s84",
            text: "Your friend joins a cult or extremist group and tries to recruit you.",
            weight: 2.1,
            options: [
                { text: "Join to see what it's like.", weight: 0.0 },
                { text: "Set a firm boundary: 'I am not interested. If you keep pushing, we can't talk.'", weight: 1.0 }, // Best: Safety
                { text: "Debate them angrily every day.", weight: 0.2 },
                { text: "Try to 'deprogram' them yourself (dangerous).", weight: 0.5 }
            ]
        },
        {
            id: "s85",
            text: "You witness a parent hitting their child in public.",
            weight: 2.2,
            options: [
                { text: "Record it and post it on TikTok.", weight: 0.1 },
                { text: "Assess the danger; call authorities or intervene calmly if safety allows.", weight: 1.0 }, // Best: Child Safety
                { text: "Walk away; not your kid, not your problem.", weight: 0.2 },
                { text: "Yell at the parent and escalate the violence.", weight: 0.1 }
            ]
        },
        {
            id: "s86",
            text: "A close friend is accused of sexual assault by someone else you know.",
            weight: 2.5,
            options: [
                { text: "Defend your friend blindly and attack the accuser.", weight: 0.1 },
                { text: "Step back. Support a fair process, but do not silence the accuser or enable the accused.", weight: 1.0 }, // Best: Neutrality/Justice
                { text: "Cut them both off.", weight: 0.4 },
                { text: "Gossip about the details.", weight: 0.0 }
            ]
        },
        {
            id: "s87",
            text: "You become rich/successful and your old friends start asking for money or treating you differently.",
            weight: 2.0,
            options: [
                { text: "Give them money to make them like you.", weight: 0.2 },
                { text: "Set clear boundaries: 'I value our friendship, but I won't be a bank.'", weight: 1.0 }, // Best: Boundary
                { text: "Drop them all and find rich friends.", weight: 0.3 },
                { text: "Hide your success.", weight: 0.5 }
            ]
        },
        {
            id: "s88",
            text: "You see a stranger having a mental health crisis in public.",
            weight: 2.1,
            options: [
                { text: "Film it.", weight: 0.0 },
                { text: "Call for professional help (non-police if possible) and stay at a safe distance to monitor.", weight: 1.0 }, // Best: Civic Care
                { text: "Walk past like they are invisible.", weight: 0.2 },
                { text: "Mock them.", weight: 0.0 }
            ]
        },
        {
            id: "s89",
            text: "Your roommate is engaging in dangerous illegal activity in your shared home.",
            weight: 2.3,
            options: [
                { text: "Join in.", weight: 0.0 },
                { text: "Move out immediately or report it. Your safety/freedom is at risk.", weight: 1.0 }, // Best: Self-preservation
                { text: "Ask them nicely to stop (they won't).", weight: 0.3 },
                { text: "Ignore it.", weight: 0.1 }
            ]
        },
        {
            id: "s90",
            text: "You are invited to a wedding of two people you know are terrible for each other.",
            weight: 1.5,
            options: [
                { text: "Object during the ceremony.", weight: 0.0 },
                { text: "Go, support their choice as adults, and hope for the best.", weight: 1.0 }, // Best: Respect
                { text: "Decline the invite.", weight: 0.9 }, // Good: Integrity
                { text: "Go and place bets on how long it lasts.", weight: 0.2 }
            ]
        },
        {
            id: "s91",
            text: "You find out your best friend is abusing their partner physically.",
            weight: 2.5,
            options: [
                { text: "Stay out of it.", weight: 0.0 },
                { text: "Call the police/authorities immediately. Safety overrides loyalty.", weight: 1.0 }, // Best: Moral Obligation
                { text: "Ask the friend to stop nicely.", weight: 0.2 },
                { text: "Blame the partner.", weight: 0.0 }
            ]
        },
        {
            id: "s92",
            text: "Your political beliefs change, and your friend group threatens to ostracize you.",
            weight: 2.0,
            options: [
                { text: "Lie about your beliefs to fit in.", weight: 0.2 },
                { text: "Stand by your convictions respectfully. If they leave, they weren't true friends.", weight: 1.0 }, // Best: Integrity
                { text: "Attack their beliefs.", weight: 0.1 },
                { text: "Apologize for thinking differently.", weight: 0.3 }
            ]
        },
        {
            id: "s93",
            text: "You see someone slip a drug into a drink at a bar.",
            weight: 2.5,
            options: [
                { text: "Ignore it.", weight: 0.0 },
                { text: "Switch the drinks.", weight: 0.1 }, // Dangerous
                { text: "Alert the victim and security immediately. Do not let the drink be consumed.", weight: 1.0 }, // Best: Intervention
                { text: "Film it.", weight: 0.0 }
            ]
        },
        {
            id: "s94",
            text: "Your friend joins a hate group.",
            weight: 2.3,
            options: [
                { text: "Join to be with them.", weight: 0.0 },
                { text: "Challenge them, then cut ties if they persist. Intolerance cannot be tolerated.", weight: 1.0 }, // Best: Paradox of Tolerance
                { text: "Pretend you don't know.", weight: 0.2 },
                { text: "Make fun of them.", weight: 0.3 }
            ]
        },
        {
            id: "s95",
            text: "You become famous and social media digs up a bad joke you made 10 years ago.",
            weight: 1.8,
            options: [
                { text: "Deny it's you.", weight: 0.1 },
                { text: "Acknowledge the growth: 'I was ignorant then. I am different now. I apologize.'", weight: 1.0 }, // Best: Growth Ownership
                { text: "Attack the people digging it up.", weight: 0.1 },
                { text: "Delete your account.", weight: 0.3 }
            ]
        },
        {
            id: "s96",
            text: "A friend borrows money and uses it for drugs instead of the rent they promised.",
            weight: 2.1,
            options: [
                { text: "Give them more money for rent.", weight: 0.1 }, // Enabling
                { text: "Refuse future money. Offer to buy them food directly, but cut off cash flow.", weight: 1.0 }, // Best: Helping not Enabling
                { text: "Call the cops on them.", weight: 0.4 },
                { text: "Steal the money back.", weight: 0.1 }
            ]
        },
        {
            id: "s97",
            text: "You are in a position of power and a friend asks for an unfair advantage.",
            weight: 1.9,
            options: [
                { text: "Give it to them (Nepotism).", weight: 0.2 },
                { text: "Refuse: 'I have to be fair to everyone.'", weight: 1.0 }, // Best: Fairness
                { text: "Give it to them but ask for a kickback.", weight: 0.0 },
                { text: "Ignore them.", weight: 0.4 }
            ]
        },
        {
            id: "s98",
            text: "You witness a hit-and-run involving your friend's car.",
            weight: 2.4,
            options: [
                { text: "Provide a fake alibi.", weight: 0.0 },
                { text: "Turn them in. A life (or justice) is worth more than friendship.", weight: 1.0 }, // Best: Justice
                { text: "Forget you saw it.", weight: 0.2 },
                { text: "Blackmail the friend.", weight: 0.0 }
            ]
        },
        {
            id: "s99",
            text: "You have two friends who hate each other. They both want you to dump the other.",
            weight: 1.7,
            options: [
                { text: "Choose the richer friend.", weight: 0.1 },
                { text: "Refuse the ultimatum. Hang out with them separately or not at all.", weight: 1.0 }, // Best: Autonomy
                { text: "Dump both.", weight: 0.5 },
                { text: "Lie to both.", weight: 0.2 }
            ]
        },
        {
            id: "s100",
            text: "You are at a funeral and feel the urge to laugh (nervous reaction).",
            weight: 1.2,
            options: [
                { text: "Laugh loudly.", weight: 0.0 },
                { text: "Excuse yourself quietly to the bathroom to compose yourself.", weight: 1.0 }, // Best: Social Awareness
                { text: "Pretend you are crying.", weight: 0.8 },
                { text: "Make a joke.", weight: 0.0 }
            ]
        }
    ],
    // ================================================================================================================
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
        },
        {
            id: "p51",
            text: "A coworker sends you an email at 9 PM expecting an immediate reply.",
            weight: 1.6,
            options: [
                { text: "Reply immediately to show dedication.", weight: 0.6 }, // Common but risks burnout
                { text: "Reply the next morning during work hours.", weight: 1.0 }, // Best: Boundaries
                { text: "Reply: 'I'll look at this tomorrow' (acknowledgment without working).", weight: 0.9 }, // Good: Communication
                { text: "Reply angrily: 'It is 9 PM!'", weight: 0.2 }
            ]
        },
        {
            id: "p52",
            text: "You are assigned a project with an impossible deadline.",
            weight: 1.8,
            options: [
                { text: "Try to do it and burn out.", weight: 0.4 },
                { text: "Present a 'Good, Fast, Cheap' trade-off to your boss and ask what to cut.", weight: 1.0 }, // Best: Strategic negotiation
                { text: "Say 'I'll try my best' but know you will fail.", weight: 0.5 },
                { text: "Propose a phased delivery: 'I can get X done by then, but Y needs more time.'", weight: 0.9 } // Good: Solution-oriented
            ]
        },
        {
            id: "p53",
            text: "You spot a mistake in your boss's strategy that could cost money.",
            weight: 1.7,
            options: [
                { text: "Stay silent; not your job.", weight: 0.3 },
                { text: "Privately ask: 'Have we considered X risk? I ran some numbers...'", weight: 1.0 }, // Best: Helpful & Discreet
                { text: "Send an email framing it as a 'clarification question' to document it.", weight: 0.8 }, // Good: CYA (Cover Your Asset)
                { text: "Call them out in the team meeting.", weight: 0.1 }
            ]
        },
        {
            id: "p54",
            text: "A client is demanding features that were not in the contract.",
            weight: 1.5,
            options: [
                { text: "Do them for free to keep them happy.", weight: 0.3 },
                { text: "Refuse flat out.", weight: 0.2 },
                { text: "Say: 'We'd love to add that! Let me send over a quote for the additional scope.'", weight: 1.0 }, // Best: Business-minded
                { text: "Explain nicely that it's out of scope but offer a small compromise.", weight: 0.85 } // Good: Relationship management
            ]
        },
        {
            id: "p55",
            text: "You are bored in a meeting where you aren't needed.",
            weight: 1.2,
            options: [
                { text: "Play games on your phone.", weight: 0.1 },
                { text: "Listen for keywords and take notes on anything relevant.", weight: 0.9 }, // Good: Professionalism
                { text: "Privately message the organizer later asking if your attendance is optional next time.", weight: 1.0 }, // Best: Time management
                { text: "Fall asleep.", weight: 0.0 }
            ]
        },
        {
            id: "p56",
            text: "Your boss gives you contradictory instructions compared to last week.",
            weight: 1.6,
            options: [
                { text: "Do what they say now and ignore the contradiction.", weight: 0.5 },
                { text: "Gently clarify: 'Last week we decided X, do you want to switch to Y now?'", weight: 1.0 }, // Best: Clarification
                { text: "Complain to coworkers that the boss is confused.", weight: 0.2 },
                { text: "Do both tasks just to be safe.", weight: 0.3 }
            ]
        },
        {
            id: "p57",
            text: "You have to perform a repetitive, boring task for 3 days straight.",
            weight: 1.3,
            options: [
                { text: "Procrastinate and do it all on the last day.", weight: 0.2 },
                { text: "Automate it if possible, or power through with podcasts/music.", weight: 1.0 }, // Best: Efficiency/Attitude
                { text: "Do a sloppy job because 'it doesn't matter'.", weight: 0.1 },
                { text: "Break it into chunks combined with more interesting work.", weight: 0.9 } // Good: Energy management
            ]
        },
        {
            id: "p58",
            text: "You overhear a rumor about layoffs.",
            weight: 1.7,
            options: [
                { text: "Immediately start gossiping to find out more.", weight: 0.2 },
                { text: "Update your resume and savings quietly, just in case.", weight: 1.0 }, // Best: Preparation
                { text: "Ask your boss directly in a public meeting.", weight: 0.4 },
                { text: "Panic and stop working.", weight: 0.1 }
            ]
        },
        {
            id: "p59",
            text: "You are leaving your job and have an exit interview.",
            weight: 1.5,
            options: [
                { text: "Unload all your anger and burn bridges.", weight: 0.1 },
                { text: "Give constructive, factual feedback on systemic issues, but remain professional.", weight: 1.0 }, // Best: Professionalism
                { text: "Say everything was perfect (lie) to avoid awkwardness.", weight: 0.6 },
                { text: "Refuse to do the interview.", weight: 0.4 }
            ]
        },
        {
            id: "p60",
            text: "A client insults your intelligence.",
            weight: 1.8,
            options: [
                { text: "Hang up on them.", weight: 0.2 },
                { text: "Pause, stay calm, and bring the conversation back to the facts/data.", weight: 1.0 }, // Best: De-escalation
                { text: "Insult them back subtly.", weight: 0.1 },
                { text: "End the call professionally: 'I don't think we can be productive right now.'", weight: 0.9 } // Good: Boundary setting
            ]
        },
        {
            id: "p61",
            text: "You made a mistake that no one else noticed, but it might cause issues later.",
            weight: 1.9,
            options: [
                { text: "Hide it and hope for the best.", weight: 0.1 },
                { text: "Fix it silently if possible, or flag it if it impacts others.", weight: 1.0 }, // Best: Problem solving
                { text: "Blame the software documentation.", weight: 0.3 },
                { text: "Document the fix so it doesn't happen again.", weight: 0.95 } // Good: Process improvement
            ]
        },
        {
            id: "p62",
            text: "A coworker asks for feedback on a presentation that was objectively bad.",
            weight: 1.6,
            options: [
                { text: "Say 'It was great!' to be nice.", weight: 0.4 },
                { text: "Use the 'Sandwich Method': Positive, Constructive Critique, Positive.", weight: 1.0 }, // Best: Constructive
                { text: "Tear it apart completely.", weight: 0.1 },
                { text: "Focus on one key area for improvement so they aren't overwhelmed.", weight: 0.9 } // Good: Coaching
            ]
        },
        {
            id: "p63",
            text: "You finish a project early and have free time.",
            weight: 1.3,
            options: [
                { text: "Pretend to work so you don't get more tasks.", weight: 0.5 },
                { text: "Use the time for professional development or learning a new tool.", weight: 1.0 }, // Best: Growth
                { text: "Ask your boss for more work immediately.", weight: 0.9 }, // Good: Initiative (but risks burnout)
                { text: "Go home early without telling anyone.", weight: 0.0 }
            ]
        },
        {
            id: "p64",
            text: "You are forced to work with someone you find annoying.",
            weight: 1.5,
            options: [
                { text: "Gossip about them to bond with others.", weight: 0.1 },
                { text: "Focus strictly on the work deliverables and keep interactions professional.", weight: 1.0 }, // Best: Compartmentalization
                { text: "Try to get them moved to another team.", weight: 0.2 },
                { text: "Find one thing you respect about their work to make it easier.", weight: 0.95 } // Good: Mindset shift
            ]
        },
        {
            id: "p65",
            text: "Your company adopts a new value that you personally disagree with.",
            weight: 1.7,
            options: [
                { text: "Openly mock the value in meetings.", weight: 0.0 },
                { text: "Decide if it's a dealbreaker; if not, commit to the job requirements.", weight: 1.0 }, // Best: Professional alignment
                { text: "Ignore it and do your own thing.", weight: 0.5 },
                { text: "Start looking for a company better aligned with your values.", weight: 0.95 } // Good: Long-term fit
            ]
        },
        {
            id: "p66",
            text: "You discover your company is doing something illegal (fraud/safety violations).",
            weight: 2.5,
            options: [
                { text: "Whistleblow to authorities immediately.", weight: 0.9 }, // High Moral Ground (High Risk)
                { text: "Consult a lawyer privately, document evidence, then report safely.", weight: 1.0 }, // Best: Smart Ethics
                { text: "Ignore it to keep your paycheck.", weight: 0.2 },
                { text: "Quit immediately without saying why.", weight: 0.5 }
            ]
        },
        {
            id: "p67",
            text: "Your boss tells you to fire a high-performing employee because he personally dislikes them.",
            weight: 2.2,
            options: [
                { text: "Do it; you follow orders.", weight: 0.2 },
                { text: "Push back with performance data and document the instruction.", weight: 1.0 }, // Best: Integrity/Protection
                { text: "Tell the employee to look for a new job secretly.", weight: 0.9 }, // Good: Humanity
                { text: "Start a coup against the boss.", weight: 0.1 }
            ]
        },
        {
            id: "p68",
            text: "You unintentionally cause a data breach that could ruin the company.",
            weight: 2.4,
            options: [
                { text: "Delete the logs and hide.", weight: 0.0 },
                { text: "Report it immediately to the security team to mitigate damage, accepting consequences.", weight: 1.0 }, // Best: Responsibility
                { text: "Blame a junior developer.", weight: 0.0 },
                { text: "Fix it silently and pray nobody noticed.", weight: 0.3 }
            ]
        },
        {
            id: "p69",
            text: "You are offered a promotion that requires you to work 80 hours a week and miss your kids' childhood.",
            weight: 2.0,
            options: [
                { text: "Take it for the money.", weight: 0.4 },
                { text: "Reflect on your values; if family is #1, decline or negotiate scope.", weight: 1.0 }, // Best: Values Alignment
                { text: "Take it and complain constantly.", weight: 0.2 },
                { text: "Take it for 2 years to bank cash, then quit.", weight: 0.9 } // Good: Strategic Sacrifice
            ]
        },
        {
            id: "p70",
            text: "A coworker is being sexually harassed but is afraid to report it.",
            weight: 2.3,
            options: [
                { text: "Stay out of it.", weight: 0.1 },
                { text: "Support them privately and offer to be a witness if/when *they* choose to report.", weight: 1.0 }, // Best: Empowerment
                { text: "Report it yourself immediately against their wishes.", weight: 0.6 }, // Good intent, bad execution
                { text: "Confront the harasser publicly.", weight: 0.3 } // Dangerous
            ]
        },
        {
            id: "p71",
            text: "Your boss asks you to lie to a client about a missed deadline to save the account.",
            weight: 2.0,
            options: [
                { text: "Lie convincingly.", weight: 0.2 },
                { text: "Refuse to lie, but offer to explain the situation and the solution to the client directly.", weight: 1.0 }, // Best: Integrity
                { text: "Lie but send an anonymous email to the client telling the truth.", weight: 0.4 },
                { text: "Do it but demand a raise.", weight: 0.1 }
            ]
        },
        {
            id: "p72",
            text: "You are poached by a competitor for double salary in the middle of a critical project.",
            weight: 1.8,
            options: [
                { text: "Quit immediately without notice.", weight: 0.1 },
                { text: "Accept the offer but negotiate a longer notice period to hand over the project responsibly.", weight: 1.0 }, // Best: Professionalism
                { text: "Use the offer to threaten your current boss.", weight: 0.6 },
                { text: "Decline because of loyalty.", weight: 0.8 } // Good, but maybe sacrificing self
            ]
        },
        {
            id: "p73",
            text: "You catch your mentor taking credit for your work.",
            weight: 1.7,
            options: [
                { text: "Publicly accuse them of theft.", weight: 0.3 },
                { text: "Have a private, firm conversation: 'I noticed my name was left off. How do we fix this?'", weight: 1.0 }, // Best: Assertiveness
                { text: "Stop working hard.", weight: 0.2 },
                { text: "Start looking for a new job silently.", weight: 0.9 } // Good: Recognizing toxicity
            ]
        },
        {
            id: "p74",
            text: "You need to hire someone. Your friend is desperate but unqualified; a stranger is perfect.",
            weight: 1.9,
            options: [
                { text: "Hire the friend and do their work for them.", weight: 0.1 },
                { text: "Hire the stranger; business is business. Offer to help the friend with their resume instead.", weight: 1.0 }, // Best: Role clarity
                { text: "Hire the friend and hope they learn.", weight: 0.4 },
                { text: "Don't hire anyone to avoid the conflict.", weight: 0.2 }
            ]
        },
        {
            id: "p75",
            text: "Your team is drowning. Management says 'figure it out'.",
            weight: 2.1,
            options: [
                { text: "Work 100 hours a week to save the team.", weight: 0.5 }, // Martyrdom
                { text: "Let it fail visibly while documenting that the workload was impossible, to force structural change.", weight: 1.0 }, // Best: Strategic Failure
                { text: "Blame your team members.", weight: 0.1 },
                { text: "Quit and leave them to it.", weight: 0.6 }
            ]
        },
        {
            id: "p76",
            text: "You are sexually harassed by the CEO of a company you just joined.",
            weight: 2.5,
            options: [
                { text: "Laugh it off and try to ignore it.", weight: 0.2 },
                { text: "Document everything precisely and consult an employment lawyer immediately.", weight: 1.0 }, // Best: Strategic Self-Defense
                { text: "Quit immediately with no plan.", weight: 0.5 },
                { text: "Gossip about it to coworkers.", weight: 0.3 }
            ]
        },
        {
            id: "p77",
            text: "You are asked to build a product feature you know is addictive and harmful to children.",
            weight: 2.3,
            options: [
                { text: "Build it; it's just a job.", weight: 0.2 },
                { text: "Raise ethical concerns formally. If ignored, refuse to work on it or resign.", weight: 1.0 }, // Best: Professional Ethics
                { text: "Sabotage the code so it doesn't work.", weight: 0.4 },
                { text: "Do it but feel guilty.", weight: 0.3 }
            ]
        },
        {
            id: "p78",
            text: "Your incompetence caused a major accident. You can blame a glitch.",
            weight: 2.1,
            options: [
                { text: "Blame the glitch.", weight: 0.2 },
                { text: "Admit the human error immediately so protocols can be updated to prevent recurrence.", weight: 1.0 }, // Best: Safety Culture
                { text: "Blame a vendor.", weight: 0.1 },
                { text: "Resign without explaining.", weight: 0.4 }
            ]
        },
        {
            id: "p79",
            text: "You have to layoff 20% of your team who are also your friends.",
            weight: 2.2,
            options: [
                { text: "Send an email and hide.", weight: 0.1 },
                { text: "Deliver the news individually with empathy, clarity, and support resources.", weight: 1.0 }, // Best: Hard Leadership
                { text: "Blame 'upper management' entirely to save face.", weight: 0.5 },
                { text: "Cry during the meeting so they comfort you.", weight: 0.2 }
            ]
        },
        {
            id: "p80",
            text: "You find out your co-founder is stealing intellectual property from a previous employer.",
            weight: 2.4,
            options: [
                { text: "Ignore it; the tech is good.", weight: 0.1 },
                { text: "Confront them and demand the stolen IP be removed, or dissolve the partnership.", weight: 1.0 }, // Best: Legal/Moral protection
                { text: "Steal it for yourself.", weight: 0.0 },
                { text: "Sell your shares quietly before the lawsuit hits.", weight: 0.6 }
            ]
        },
        {
            id: "p81",
            text: "You work for a company that you discover is dumping toxic waste illegally. People are getting sick.",
            weight: 2.5,
            options: [
                { text: "Stay quiet to keep your salary.", weight: 0.0 },
                { text: "Gather evidence securely and report to the EPA/authorities/Press.", weight: 1.0 }, // Best: Public Safety > Career
                { text: "Quit quietly and say nothing.", weight: 0.4 },
                { text: "Blackmail the CEO.", weight: 0.1 }
            ]
        },
        {
            id: "p82",
            text: "Your boss is having an affair with your subordinate and asks you to give the subordinate a raise.",
            weight: 2.2,
            options: [
                { text: "Do it to curry favor with the boss.", weight: 0.1 },
                { text: "Refuse to execute the raise based on merit, and document the request with HR/Legal.", weight: 1.0 }, // Best: Protection
                { text: "Gossip about it to the office.", weight: 0.2 },
                { text: "Ask for a raise for yourself as 'hush money'.", weight: 0.0 }
            ]
        },
        {
            id: "p83",
            text: "You are a doctor/lawyer/professional and realize you made a mistake that could cost you your license.",
            weight: 2.4,
            options: [
                { text: "Shred the documents.", weight: 0.0 },
                { text: "Disclose the error to the board/client immediately and accept the consequences.", weight: 1.0 }, // Best: Ultimate Integrity
                { text: "Blame the nurse/paralegal.", weight: 0.1 },
                { text: "Try to fix it secretly and hope it never surfaces.", weight: 0.3 }
            ]
        },
        {
            id: "p84",
            text: "You are ordered to fire a single parent who has cancer because 'insurance premiums are too high'.",
            weight: 2.5,
            options: [
                { text: "Do it. Orders are orders.", weight: 0.1 },
                { text: "Refuse on ethical and legal grounds (ADA discrimination). Be prepared to be fired yourself.", weight: 1.0 }, // Best: Moral Courage
                { text: "Do it but tell them to sue the company.", weight: 0.8 }, // Good: Secret ally
                { text: "Cry while firing them.", weight: 0.2 }
            ]
        },
        {
            id: "p85",
            text: "You find out your colleague is stealing from the company to pay for their child's surgery.",
            weight: 2.3,
            options: [
                { text: "Report them immediately.", weight: 0.8 }, // Lawful Neutral
                { text: "Confront them: 'Put it back or I have to report you.' Help them find legal aid/charity.", weight: 1.0 }, // Best: Compassionate Justice
                { text: "Help them steal more.", weight: 0.1 },
                { text: "Look the other way.", weight: 0.4 }
            ]
        },
        {
            id: "p86",
            text: "You are tasked with building an AI tool that will automate your own team's jobs (firing them).",
            weight: 2.4,
            options: [
                { text: "Sabotage the project.", weight: 0.2 },
                { text: "Build it, but advocate fiercely for severance, retraining, and placement for your team.", weight: 1.0 }, // Best: Realistic Ethics
                { text: "Do it ruthlessly to get a promotion.", weight: 0.1 },
                { text: "Warn them secretly to start looking for jobs.", weight: 0.9 } // Good: Loyalty
            ]
        },
        {
            id: "p87",
            text: "Your dream job offer comes from a company with questionable ethics (e.g., weapons, tobacco).",
            weight: 2.0,
            options: [
                { text: "Take it; money is money.", weight: 0.3 },
                { text: "Decline if it violates your core values, regardless of the pay.", weight: 1.0 }, // Best: Integrity
                { text: "Take it and try to change them from the inside (rarely works).", weight: 0.6 },
                { text: "Take it but lie to friends about where you work.", weight: 0.2 }
            ]
        },
        {
            id: "p88",
            text: "A major mistake happens. You can blame a vendor and save your team, or admit it was internal.",
            weight: 2.1,
            options: [
                { text: "Blame the vendor; protect the tribe.", weight: 0.3 },
                { text: "Admit the internal error. Lying destroys long-term trust with partners.", weight: 1.0 }, // Best: Integrity
                { text: "Blame the intern.", weight: 0.0 },
                { text: "Say nothing and hope it blows over.", weight: 0.2 }
            ]
        },
        {
            id: "p89",
            text: "You discover your mentor/boss is stealing Intellectual Property from a startup.",
            weight: 2.3,
            options: [
                { text: "Help them do it.", weight: 0.0 },
                { text: "Report it anonymously to legal/compliance.", weight: 1.0 }, // Best: Justice
                { text: "Blackmail them.", weight: 0.0 },
                { text: "Quit to avoid being implicated.", weight: 0.8 } // Good: Self-protection
            ]
        },
        {
            id: "p90",
            text: "You are asked to act as a reference for a friend who was terrible at their job.",
            weight: 1.8,
            options: [
                { text: "Lie and say they were amazing.", weight: 0.2 },
                { text: "Decline to be a reference: 'I value our friendship too much to mix it with business.'", weight: 1.0 }, // Best: Honest Boundary
                { text: "Agree, then give a bad review.", weight: 0.0 }, // Betrayal
                { text: "Give a vague, lukewarm reference.", weight: 0.6 }
            ]
        },
        {
            id: "p91",
            text: "You are ordered to falsify safety data for a product that goes to market next week.",
            weight: 2.5,
            options: [
                { text: "Just do it.", weight: 0.0 },
                { text: "Refuse, document the order, and alert regulatory bodies if the product launches.", weight: 1.0 }, // Best: Public Safety
                { text: "Quit silently.", weight: 0.4 },
                { text: "Change the data slightly so it's 'less' bad.", weight: 0.1 }
            ]
        },
        {
            id: "p92",
            text: "You catch your boss sexually harassing an intern.",
            weight: 2.5,
            options: [
                { text: "Ignore it to protect your career.", weight: 0.1 },
                { text: "Intervene immediately in the moment, then report to HR/Legal.", weight: 1.0 }, // Best: Moral Courage
                { text: "Gossip about it.", weight: 0.2 },
                { text: "Blackmail the boss.", weight: 0.0 }
            ]
        },
        {
            id: "p93",
            text: "You are the CEO. The company is failing. You can fire 500 people or resign and let a shark take over.",
            weight: 2.4,
            options: [
                { text: "Fire them to save your bonus.", weight: 0.1 },
                { text: "Cut your own pay to zero, be transparent, and try to save as many jobs as possible.", weight: 1.0 }, // Best: Servant Leadership
                { text: "Resign and take a golden parachute.", weight: 0.3 },
                { text: "Lie to the employees until the last day.", weight: 0.0 }
            ]
        },
        {
            id: "p94",
            text: "You accidentally delete the production database. No backups.",
            weight: 2.5,
            options: [
                { text: "Pack your things and leave the country.", weight: 0.1 },
                { text: "Alert leadership immediately, own the mistake, and lead the manual reconstruction effort.", weight: 1.0 }, // Best: Crisis Management
                { text: "Blame a hacker.", weight: 0.2 },
                { text: "Try to fix it secretly for 24 hours while customers complain.", weight: 0.3 }
            ]
        },
        {
            id: "p95",
            text: "You are asked to mentor a younger employee who is more talented than you and will likely replace you.",
            weight: 1.8,
            options: [
                { text: "Sabotage them.", weight: 0.0 },
                { text: "Mentor them fully. Your legacy is the people you grow, not the chair you sit in.", weight: 1.0 }, // Best: Abundance Mindset
                { text: "Refuse to help.", weight: 0.4 },
                { text: "Give them bad advice.", weight: 0.1 }
            ]
        },
        {
            id: "p96",
            text: "You realize your industry causes net harm to the world (e.g., predatory gambling).",
            weight: 2.0,
            options: [
                { text: "Stay for the money.", weight: 0.3 },
                { text: "Plan a career pivot to an industry that aligns with your ethics.", weight: 1.0 }, // Best: Alignment
                { text: "Justify it by saying 'someone else would do it'.", weight: 0.2 },
                { text: "Sabotage the company.", weight: 0.1 }
            ]
        },
        {
            id: "p97",
            text: "You are giving a keynote speech and realize halfway through your data is wrong.",
            weight: 1.9,
            options: [
                { text: "Keep going and lie.", weight: 0.2 },
                { text: "Pause, admit the error, and correct the narrative live.", weight: 1.0 }, // Best: Vulnerability/Trust
                { text: "Fake a heart attack.", weight: 0.0 },
                { text: "Skip the slides quickly.", weight: 0.4 }
            ]
        },
        {
            id: "p98",
            text: "A client offers you a job, but your contract forbids soliciting clients.",
            weight: 1.7,
            options: [
                { text: "Take it secretly.", weight: 0.2 },
                { text: "Decline citing the contract, or negotiate an official buyout with your current employer.", weight: 1.0 }, // Best: Contractual Integrity
                { text: "Lie to your boss.", weight: 0.1 },
                { text: "Badmouth your current employer to the client.", weight: 0.0 }
            ]
        },
        {
            id: "p99",
            text: "You work remotely and haven't actually done work in 2 months, but get paid.",
            weight: 1.6,
            options: [
                { text: "Keep riding the gravy train.", weight: 0.2 },
                { text: "Recognize this destroys your skills and work ethic. Resign or re-engage fully.", weight: 1.0 }, // Best: Self-Respect
                { text: "Get a second job and do nothing at both.", weight: 0.1 },
                { text: "Brag about it online.", weight: 0.0 }
            ]
        },
        {
            id: "p100",
            text: "You have reached the top of your career and you are bored.",
            weight: 2.2,
            options: [
                { text: "Coast until retirement.", weight: 0.4 },
                { text: "Reinvent yourself. Start over in a new field as a beginner.", weight: 1.0 }, // Best: Continuous Growth
                { text: "Become a tyrant boss to feel something.", weight: 0.1 },
                { text: "Quit and do nothing.", weight: 0.3 }
            ]
        }
    ],
    // ================================================================================================================
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
        },
        {
            id: "r51",
            text: "You pour your heart into a project and it gets cancelled.",
            weight: 1.8,
            options: [
                { text: "Feel the disappointment, then document what you learned for the portfolio.", weight: 1.0 }, // Best: Growth Mindset
                { text: "Take a few days off to reset, then move to the next task.", weight: 0.9 }, // Good: Self-care
                { text: "Refuse to work on the next project.", weight: 0.2 },
                { text: "Delete all your files in anger.", weight: 0.0 }
            ]
        },
        {
            id: "r52",
            text: "You are injured and can't do your favorite hobby for 6 months.",
            weight: 1.5,
            options: [
                { text: "Give up on hobbies entirely.", weight: 0.2 },
                { text: "Find a low-impact adjacent hobby (e.g., reading about it, coaching).", weight: 1.0 }, // Best: Adaptation
                { text: "Focus on other parts of your life (work/social) during recovery.", weight: 0.9 }, // Good: Pivot
                { text: "Do the hobby anyway and get hurt worse.", weight: 0.1 }
            ]
        },
        {
            id: "r53",
            text: "You make a humiliating mistake in public.",
            weight: 1.3,
            options: [
                { text: "Laugh at yourself; it takes the power away.", weight: 1.0 }, // Best: Confidence
                { text: "Acknowledge it happened and focus on the present moment.", weight: 0.9 }, // Good: Mindfulness
                { text: "Go home and replay it for 48 hours.", weight: 0.3 },
                { text: "Blame someone else.", weight: 0.1 }
            ]
        },
        {
            id: "r54",
            text: "You lose 3 months of progress on a goal (fitness, savings, etc.).",
            weight: 1.7,
            options: [
                { text: "Quit because 'it's ruined'.", weight: 0.2 },
                { text: "Analyze what caused the slip, adjust the plan, and restart today.", weight: 1.0 }, // Best: Analytical Resilience
                { text: "Forgive yourself and just get back on track without overthinking.", weight: 0.9 }, // Good: Emotional Resilience
                { text: "Punish yourself aggressively.", weight: 0.1 }
            ]
        },
        {
            id: "r55",
            text: "You are rejected by a potential partner you really liked.",
            weight: 1.6,
            options: [
                { text: "Beg them for a second chance.", weight: 0.2 },
                { text: "Allow yourself to be sad, but respect their decision and cut contact to heal.", weight: 1.0 }, // Best: Healthy boundaries
                { text: "Vent to friends and distract yourself with hobbies.", weight: 0.9 }, // Good: Coping mechanism
                { text: "Stalk their social media.", weight: 0.1 }
            ]
        },
        {
            id: "r56",
            text: "You are stranded at an airport overnight due to a flight cancellation.",
            weight: 1.4,
            options: [
                { text: "Yell at the gate agent.", weight: 0.0 },
                { text: "Find a quiet spot, make a nest, and accept the adventure.", weight: 1.0 }, // Best: Adaptability
                { text: "Call everyone you know to complain.", weight: 0.3 },
                { text: "Refuse to sleep.", weight: 0.1 }
            ]
        },
        {
            id: "r57",
            text: "You relapse into a bad habit (smoking, junk food, procrastination) after a month.",
            weight: 1.7,
            options: [
                { text: "Decide you are a failure and binge.", weight: 0.1 },
                { text: "Forgive the slip, identify the trigger, and restart the streak immediately.", weight: 1.0 }, // Best: Recovery
                { text: "Pretend it didn't happen.", weight: 0.3 },
                { text: "Give up on the goal entirely.", weight: 0.0 }
            ]
        },
        {
            id: "r58",
            text: "You are ghosted by a recruiter after 3 rounds of interviews.",
            weight: 1.6,
            options: [
                { text: "Send a polite follow-up, then move on knowing you did your best.", weight: 1.0 }, // Best: Professionalism
                { text: "Send an angry email demanding answers.", weight: 0.1 },
                { text: "Internalize that you are unemployable.", weight: 0.2 },
                { text: "Leave bad reviews for the company everywhere.", weight: 0.3 }
            ]
        },
        {
            id: "r59",
            text: "You try to assemble furniture and realize a piece is missing.",
            weight: 1.2,
            options: [
                { text: "Throw the tools.", weight: 0.1 },
                { text: "Contact support to order the part and do something else in the meantime.", weight: 1.0 }, // Best: Patience
                { text: "Try to build it without the piece (risky).", weight: 0.3 },
                { text: "Leave the mess on the floor for weeks.", weight: 0.2 }
            ]
        },
        {
            id: "r60",
            text: "You experience 'Post-Vacation Blues' and hate your job upon returning.",
            weight: 1.3,
            options: [
                { text: "Quit your job impulsively.", weight: 0.1 },
                { text: "Acknowledge the feeling, plan the next small trip, and ease back into routine.", weight: 1.0 }, // Best: Perspective
                { text: "Slack off for a month.", weight: 0.2 },
                { text: "Complain to everyone that life is slavery.", weight: 0.3 }
            ]
        },
        {
            id: "s61",
            text: "A friend keeps borrowing small items and returning them damaged.",
            weight: 1.4,
            options: [
                { text: "Stop lending them things without explanation.", weight: 0.8 }, // Good: Boundary
                { text: "Say: 'I can't lend this to you because the last few items came back broken.'", weight: 1.0 }, // Best: Honest boundary
                { text: "Lend it anyway and get mad when it breaks.", weight: 0.2 },
                { text: "Break something of theirs.", weight: 0.0 }
            ]
        },
        {
            id: "s62",
            text: "You are the only sober person at a party and people are being annoying.",
            weight: 1.2,
            options: [
                { text: "Lecture them about drinking.", weight: 0.1 },
                { text: "Leave early gracefully.", weight: 1.0 }, // Best: Self-care
                { text: "Stay and judge everyone visibly.", weight: 0.3 },
                { text: "Make sure your friends get home safe, then leave.", weight: 0.95 } // Good: Responsibility
            ]
        },
        {
            id: "s63",
            text: "You run into an ex-friend who you ended things badly with.",
            weight: 1.5,
            options: [
                { text: "Run away.", weight: 0.2 },
                { text: "Nod politely and keep moving.", weight: 1.0 }, // Best: Maturity
                { text: "Try to restart the argument right there.", weight: 0.0 },
                { text: "Stop and have a fake 'we should catch up' conversation.", weight: 0.4 }
            ]
        },
        {
            id: "s64",
            text: "A friend achieves a milestone you wanted (e.g., gets married, promoted) before you.",
            weight: 1.8,
            options: [
                { text: "Cry at their party.", weight: 0.1 },
                { text: "Celebrate them fully; their success doesn't mean your failure.", weight: 1.0 }, // Best: Abundance mindset
                { text: "Ask them when they are going to have kids (deflect).", weight: 0.2 },
                { text: "Privately journal your feelings but show up for them 100%.", weight: 0.95 } // Good: Processing
            ]
        },
        {
            id: "s65",
            text: "Someone interrupts you repeatedly in a group setting.",
            weight: 1.4,
            options: [
                { text: "Stop talking entirely.", weight: 0.3 },
                { text: "Continue talking at the same volume to hold the floor.", weight: 0.9 }, // Good: Assertiveness
                { text: "Pause, smile, and say: 'Hold on, I wasn't quite finished.'", weight: 1.0 }, // Best: Politeness + Firmness
                { text: "Scream 'SHUT UP!'", weight: 0.0 }
            ]
        },
        {
            id: "r66",
            text: "You lose your home and possessions in a fire/disaster.",
            weight: 2.5,
            options: [
                { text: "Give up on life.", weight: 0.0 },
                { text: "Grieve the loss, then focus solely on the next 24 hours (shelter/food).", weight: 1.0 }, // Best: Survival Mode
                { text: "Refuse help from others out of pride.", weight: 0.2 },
                { text: "Focus on helping others affected to find meaning.", weight: 0.95 } // Good: Meaning-making
            ]
        },
        {
            id: "r67",
            text: "You are diagnosed with a chronic illness that changes your lifestyle forever.",
            weight: 2.2,
            options: [
                { text: "Deny the diagnosis and ignore doctor orders.", weight: 0.1 },
                { text: "Allow yourself to mourn your 'old life', then adapt to the new reality.", weight: 1.0 }, // Best: Radical Acceptance
                { text: "Identify solely as a 'sick person' now.", weight: 0.3 },
                { text: "Research everything and become an expert on your condition.", weight: 0.9 } // Good: Agency
            ]
        },
        {
            id: "r68",
            text: "You are falsely accused of a crime and lose your reputation.",
            weight: 2.3,
            options: [
                { text: "Attack the accuser publicly.", weight: 0.2 },
                { text: "Maintain dignity, fight legally, and find peace in knowing the truth yourself.", weight: 1.0 }, // Best: Stoicism
                { text: "Hide from the world forever.", weight: 0.1 },
                { text: "Seek revenge.", weight: 0.0 }
            ]
        },
        {
            id: "r69",
            text: "Your spouse dies suddenly, leaving you with young children.",
            weight: 2.5,
            options: [
                { text: "Check out emotionally.", weight: 0.1 },
                { text: "Accept help, grieve openly, and put one foot in front of the other for the kids.", weight: 1.0 }, // Best: Endurance
                { text: "Try to replace the spouse immediately.", weight: 0.0 },
                { text: "Pretend you are fine to appear strong.", weight: 0.3 }
            ]
        },
        {
            id: "r70",
            text: "You fail at your 'One Big Dream' after 10 years of trying.",
            weight: 2.0,
            options: [
                { text: "Become bitter and hate successful people.", weight: 0.1 },
                { text: "Redefine your identity: 'I am not my achievements.' Pivot to a new chapter.", weight: 1.0 }, // Best: Identity Shift
                { text: "Keep trying the exact same failing strategy.", weight: 0.2 },
                { text: "Teach others how to avoid your mistakes.", weight: 0.9 } // Good: Legacy
            ]
        },
        {
            id: "r71",
            text: "A humiliating video of you goes viral locally.",
            weight: 2.4,
            options: [
                { text: "Never leave the house again.", weight: 0.1 },
                { text: "Own it, laugh if possible, or stay offline until it blows over. It does not define you.", weight: 1.0 }, // Best: Perspective
                { text: "Attack everyone in the comments.", weight: 0.0 },
                { text: "Change your name and move.", weight: 0.3 }
            ]
        },
        {
            id: "r72",
            text: "You suffer a permanent injury that prevents you from doing your job.",
            weight: 2.5,
            options: [
                { text: "Give up on life.", weight: 0.0 },
                { text: "Grieve the loss, then assess your remaining skills to pivot to a new path.", weight: 1.0 }, // Best: Adaptation
                { text: "Sue everyone regardless of fault.", weight: 0.2 },
                { text: "Refuse to learn new skills.", weight: 0.1 }
            ]
        },
        {
            id: "r73",
            text: "You have been sober/clean for years and you relapse hard.",
            weight: 2.3,
            options: [
                { text: "Keep using because 'the streak is broken'.", weight: 0.0 },
                { text: "Call your sponsor/support immediately. A relapse is a data point, not the end.", weight: 1.0 }, // Best: Recovery
                { text: "Lie to everyone about it.", weight: 0.2 },
                { text: "Hate yourself into a depression.", weight: 0.1 }
            ]
        },
        {
            id: "r74",
            text: "Someone else gets public credit for your life's work.",
            weight: 1.9,
            options: [
                { text: "Destroy their reputation.", weight: 0.1 },
                { text: "Correct the record professionally where it matters, but know your own worth isn't external.", weight: 1.0 }, // Best: Internal Validation
                { text: "Give up on the field.", weight: 0.2 },
                { text: "Steal credit for their work later.", weight: 0.0 }
            ]
        },
        {
            id: "r75",
            text: "You move to a new country and everything goes wrong (no job, no friends, money stolen).",
            weight: 2.1,
            options: [
                { text: "Go home immediately in shame.", weight: 0.3 },
                { text: "Take it one problem at a time. Survival mode first, then growth.", weight: 1.0 }, // Best: Grit
                { text: "Break the law to survive.", weight: 0.0 },
                { text: "Blame the country.", weight: 0.2 }
            ]
        },
        {
            id: "r76",
            text: "You are wrongfully imprisoned or detained for a period of time.",
            weight: 2.5,
            options: [
                { text: "Plot violent revenge.", weight: 0.0 },
                { text: "Maintain your sanity through routine/mindfulness, fighting legally when released.", weight: 1.0 }, // Best: Nelson Mandela level resilience
                { text: "Give up hope entirely.", weight: 0.1 },
                { text: "Attack the guards.", weight: 0.0 }
            ]
        },
        {
            id: "r77",
            text: "Your child cuts off contact with you.",
            weight: 2.3,
            options: [
                { text: "Stalk them and force contact.", weight: 0.0 },
                { text: "Respect their boundary, examine your own behavior, and work on yourself in hope of future reconciliation.", weight: 1.0 }, // Best: Humility
                { text: "Write them out of the will.", weight: 0.2 },
                { text: "Badmouth them to relatives.", weight: 0.1 }
            ]
        },
        {
            id: "r78",
            text: "You lose a limb in an accident.",
            weight: 2.4,
            options: [
                { text: "Decide your life is over.", weight: 0.1 },
                { text: "Grieve, then focus on rehabilitation and what your body CAN still do.", weight: 1.0 }, // Best: Adaptation
                { text: "Refuse physical therapy.", weight: 0.1 },
                { text: "Isolate yourself from loved ones.", weight: 0.2 }
            ]
        },
        {
            id: "r79",
            text: "You are cancelled publicly and lose your career and friends.",
            weight: 2.5,
            options: [
                { text: "Double down and fight everyone online.", weight: 0.1 },
                { text: "Step back, reflect on the validity of the criticism, learn, and rebuild quietly.", weight: 1.0 }, // Best: Redemption Arc
                { text: "Change your identity and hide.", weight: 0.4 },
                { text: "Harm yourself.", weight: 0.0 }
            ]
        },
        {
            id: "r80",
            text: "You find out you are terminally ill with 1 year to live.",
            weight: 2.5,
            options: [
                { text: "Spend all your money on drugs.", weight: 0.1 },
                { text: "Prioritize relationships, make peace, and live fully in the remaining time.", weight: 1.0 }, // Best: Acceptance
                { text: "Deny it and refuse treatment that could extend quality of life.", weight: 0.3 },
                { text: "Spend the year angry at the world.", weight: 0.1 }
            ]
        },
        {
            id: "r81",
            text: "You are the sole survivor of an accident where your friends died.",
            weight: 2.5,
            options: [
                { text: "Commit suicide out of survivor's guilt.", weight: 0.0 },
                { text: "Seek grief counseling, honor their memory, and live a life worthy of the second chance.", weight: 1.0 }, // Best: Meaning
                { text: "Turn to drugs to numb the memory.", weight: 0.1 },
                { text: "Isolate yourself forever.", weight: 0.2 }
            ]
        },
        {
            id: "r82",
            text: "You lose your vision or hearing in an accident.",
            weight: 2.4,
            options: [
                { text: "Refuse to learn Braille/Sign Language.", weight: 0.1 },
                { text: "Grieve deeply, then embrace the assistive tools and community to reclaim independence.", weight: 1.0 }, // Best: Adaptation
                { text: "Become bitter and lash out at sighted/hearing people.", weight: 0.2 },
                { text: "Demand everyone wait on you hand and foot.", weight: 0.1 }
            ]
        },
        {
            id: "r83",
            text: "Your business goes bankrupt and you have to move back in with your parents at 40.",
            weight: 2.0,
            options: [
                { text: "Lie to everyone and say you are 'renovating' your penthouse.", weight: 0.1 },
                { text: "Swallow your pride, express gratitude for the safety net, and rebuild from zero.", weight: 1.0 }, // Best: Humility
                { text: "Blame the economy and refuse to get a job.", weight: 0.2 },
                { text: "Steal money from your parents.", weight: 0.0 }
            ]
        },
        {
            id: "r84",
            text: "You are diagnosed with early-onset dementia.",
            weight: 2.5,
            options: [
                { text: "Hide it until you hurt someone.", weight: 0.0 },
                { text: "Make advanced directives, record memories for loved ones, and cherish the clarity you have left.", weight: 1.0 }, // Best: Preparation/Love
                { text: "Deny the diagnosis.", weight: 0.1 },
                { text: "Drive your car anyway.", weight: 0.0 }
            ]
        },
        {
            id: "r85",
            text: "Everything in your life is going perfectly, then you lose it all in one week.",
            weight: 2.3,
            options: [
                { text: "Curse the universe and become a nihilist.", weight: 0.2 },
                { text: "Remember that you are the common denominator; your skills and character remain. You can build again.", weight: 1.0 }, // Best: Internal Locus of Control
                { text: "Assume you are cursed.", weight: 0.1 },
                { text: "Sleep for a month.", weight: 0.3 }
            ]
        },
        {
            id: "r86",
            text: "You work on a masterpiece (book, code, art) for 2 years and the file corrupts with no backup.",
            weight: 2.4,
            options: [
                { text: "Destroy your computer.", weight: 0.1 },
                { text: "Grieve the loss, then realize the skill remains in you. Start over better.", weight: 1.0 }, // Best: Growth Mindset
                { text: "Quit your career.", weight: 0.2 },
                { text: "Lie and say you finished it.", weight: 0.1 }
            ]
        },
        {
            id: "r87",
            text: "You are forced to become a refugee due to war/disaster.",
            weight: 2.5,
            options: [
                { text: "Give up hope.", weight: 0.0 },
                { text: "Focus on immediate survival and dignity. One step at a time.", weight: 1.0 }, // Best: Survival
                { text: "Steal from other refugees.", weight: 0.0 },
                { text: "Refuse to leave until it's too late.", weight: 0.1 }
            ]
        },
        {
            id: "r88",
            text: "Your child passes away before you.",
            weight: 2.5,
            options: [
                { text: "End your own life.", weight: 0.0 },
                { text: "Survive. Seek support groups. Honor their life by continuing yours, however painfully.", weight: 1.0 }, // Best: Ultimate Endurance
                { text: "Erase all memory of them to stop the pain.", weight: 0.2 },
                { text: "Blame your spouse.", weight: 0.1 }
            ]
        },
        {
            id: "r89",
            text: "You are a singer/speaker and you permanently lose your voice.",
            weight: 2.3,
            options: [
                { text: "Stay silent forever.", weight: 0.2 },
                { text: "Find a new medium (writing, sign language) to express your voice.", weight: 1.0 }, // Best: Adaptation
                { text: "Bitterly watch old videos of yourself all day.", weight: 0.1 },
                { text: "Get angry at people who can speak.", weight: 0.1 }
            ]
        },
        {
            id: "r90",
            text: "You reach age 60 and realize you haven't saved enough for retirement.",
            weight: 2.1,
            options: [
                { text: "Panic and gamble what you have left.", weight: 0.1 },
                { text: "Adjust expectations, downsize lifestyle immediately, and find joy in simplicity.", weight: 1.0 }, // Best: Reality Acceptance
                { text: "Rely entirely on your children without asking.", weight: 0.2 },
                { text: "Ignore it until the money runs out.", weight: 0.0 }
            ]
        },
        {
            id: "r91",
            text: "You are wrongfully imprisoned for a year before being exonerated.",
            weight: 2.5,
            options: [
                { text: "Spend the rest of your life bitter and hateful.", weight: 0.1 },
                { text: "Use the experience to advocate for justice reform. Transmute pain into purpose.", weight: 1.0 }, // Best: Victor Frankl style
                { text: "Commit crimes now since you already did the time.", weight: 0.0 },
                { text: "Sue everyone and spend the money on drugs.", weight: 0.2 }
            ]
        },
        {
            id: "r92",
            text: "You lose your child in an accident you feel you could have prevented.",
            weight: 2.5,
            options: [
                { text: "Punish yourself forever.", weight: 0.1 },
                { text: "Work toward radical self-forgiveness, knowing that hindsight is a liar. Live to honor them.", weight: 1.0 }, // Best: Radical Forgiveness
                { text: "Blame your spouse.", weight: 0.1 },
                { text: "End your life.", weight: 0.0 }
            ]
        },
        {
            id: "r93",
            text: "You are paralyzed from the neck down.",
            weight: 2.5,
            options: [
                { text: "Give up mentally.", weight: 0.1 },
                { text: "Find a new way to contribute to the world using your mind and voice.", weight: 1.0 }, // Best: Adaptation
                { text: "Abuse your caregivers verbally.", weight: 0.0 },
                { text: "Refuse to eat.", weight: 0.1 }
            ]
        },
        {
            id: "r94",
            text: "A natural disaster destroys your entire city. You have nothing.",
            weight: 2.4,
            options: [
                { text: "Loot your neighbors.", weight: 0.0 },
                { text: "Band together with survivors to rebuild. Community is the only survival.", weight: 1.0 }, // Best: Collective Resilience
                { text: "Wait for the government to save you.", weight: 0.3 },
                { text: "Give up.", weight: 0.1 }
            ]
        },
        {
            id: "r95",
            text: "You are betrayed by everyone you trust simultaneously (Count of Monte Cristo style).",
            weight: 2.5,
            options: [
                { text: "Devote your life to revenge.", weight: 0.2 },
                { text: "Leave, heal, and build a better life they can't touch. Success is the best revenge.", weight: 1.0 }, // Best: Transcendence
                { text: "Trust no one ever again.", weight: 0.3 },
                { text: "Beg them to take you back.", weight: 0.0 }
            ]
        },
        {
            id: "r96",
            text: "You discover you have a terminal illness but 5 good years left.",
            weight: 2.3,
            options: [
                { text: "Spend 5 years crying.", weight: 0.1 },
                { text: "Live the most intentional, beautiful 5 years possible.", weight: 1.0 }, // Best: Carpe Diem
                { text: "Pretend it's not happening.", weight: 0.2 },
                { text: "Spend all your money on fake cures.", weight: 0.3 }
            ]
        },
        {
            id: "r97",
            text: "You fail publicly on a global stage (viral humiliation).",
            weight: 2.2,
            options: [
                { text: "Change your face with surgery.", weight: 0.1 },
                { text: "Own the failure, learn from it, and keep walking. Shame cannot survive empathy.", weight: 1.0 }, // Best: Vulnerability
                { text: "Attack the audience.", weight: 0.0 },
                { text: "Hide forever.", weight: 0.2 }
            ]
        },
        {
            id: "r98",
            text: "You lose your memory and have to restart your identity.",
            weight: 2.1,
            options: [
                { text: "Panic constantly.", weight: 0.1 },
                { text: "View it as a clean slate to build the person you actually want to be.", weight: 1.0 }, // Best: Reinvention
                { text: "Trust anyone who claims to know you.", weight: 0.2 },
                { text: "Refuse to learn anything new.", weight: 0.1 }
            ]
        },
        {
            id: "r99",
            text: "You are the last surviving member of your family line.",
            weight: 2.0,
            options: [
                { text: "Despair that the name dies with you.", weight: 0.2 },
                { text: "Create a 'found family' and leave a legacy of kindness rather than genetics.", weight: 1.0 }, // Best: Legacy
                { text: "Have a child you don't want just to continue the line.", weight: 0.1 },
                { text: "Become a hermit.", weight: 0.2 }
            ]
        },
        {
            id: "r100",
            text: "You have lived a long life and have many regrets.",
            weight: 2.5,
            options: [
                { text: "Die bitter.", weight: 0.0 },
                { text: "Forgive your younger self for not knowing what you know now. Find peace.", weight: 1.0 }, // Best: Integration
                { text: "Try to fix everything in one day.", weight: 0.3 },
                { text: "Lie to everyone that you have no regrets.", weight: 0.2 }
            ]
        }
    ]
};
