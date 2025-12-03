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
        }
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
        }
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
        }
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
        }
    ]
};
