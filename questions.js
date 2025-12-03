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
        }
    ]
};
