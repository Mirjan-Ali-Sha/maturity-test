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
    ]
};
