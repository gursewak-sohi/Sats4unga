document.addEventListener("alpine:init", () => {
    Alpine.data("data", () => ({
        isMenuOpen: false,
        showReceiveDonation: false,
        donateForm: {
            email: "",
            bags: "",
        },
        selectedFaq: 1,
        faq: [{
            id: 1,
            question: "What is your future project?",
            answer: "Lorem ipsum dolor sit amet consectetur. Risus curabitur enim consectetur adipiscing varius quis. Tellus hac ipsum accumsan ut faucibus facilisi nulla. Elementum est tortor.",
        }, {
            id: 2,
            question: "Lorem ipsum",
            answer: "Lorem ipsum dolor sit amet consectetur. Risus curabitur enim consectetur adipiscing varius quis. Tellus hac ipsum accumsan ut faucibus facilisi nulla. Elementum est tortor.",
        }, {
            id: 3,
            question: "Lorem ipsum dolor sit amet consectetur.",
            answer: "Lorem ipsum dolor sit amet consectetur. Risus curabitur enim consectetur adipiscing varius quis. Tellus hac ipsum accumsan ut faucibus facilisi nulla. Elementum est tortor.",
        }, {
            id: 4,
            question: "Lorem ipsum dolor sit amet consectetur.",
            answer: "Lorem ipsum dolor sit amet consectetur. Risus curabitur enim consectetur adipiscing varius quis. Tellus hac ipsum accumsan ut faucibus facilisi nulla. Elementum est tortor.",
        }, {
            id: 5,
            question: "In iaculis libero sapien ut ante proin.",
            answer: "Lorem ipsum dolor sit amet consectetur. Risus curabitur enim consectetur adipiscing varius quis. Tellus hac ipsum accumsan ut faucibus facilisi nulla. Elementum est tortor.",
        }, {
            id: 6,
            question: " Vitae eu ornare tellus ante tortor.",
            answer: "Lorem ipsum dolor sit amet consectetur. Risus curabitur enim consectetur adipiscing varius quis. Tellus hac ipsum accumsan ut faucibus facilisi nulla. Elementum est tortor.",
        }, ],
        team: [{
            id: 1,
            avatar: "assets/images/about/team/Avatar.png",
            name: "Olivia Rhye",
            role: "Founder & CEO",
            description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            twitter: "javascript:;",
            linkedin: "javascript:;",
            dribbble: "javascript:;"
        }, {
            id: 2,
            avatar: "assets/images/about/team/Avatar-1.png",
            name: "Olivia Rhye",
            role: "Founder & CEO",
            description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
            twitter: "javascript:;",
            linkedin: "javascript:;",
            dribbble: "javascript:;"
        }, {
            id: 3,
            avatar: "assets/images/about/team/Avatar-2.png",
            name: "Lana Steiner",
            role: "Product Manager",
            description: "Former PM for Linear, Lambda School, and On Deck.",
            twitter: "javascript:;",
            linkedin: "javascript:;",
            dribbble: "javascript:;"
        }, {
            id: 4,
            avatar: "assets/images/about/team/Avatar-3.png",
            name: "Demi Wilkinson",
            role: "Frontend Developer",
            description: "Former frontend dev for Linear, Coinbase, and Postscript.",
            twitter: "javascript:;",
            linkedin: "javascript:;",
            dribbble: "javascript:;"
        }, {
            id: 5,
            avatar: "assets/images/about/team/Avatar-4.png",
            name: "Candice Wu",
            role: "Backend Developer",
            description: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
            twitter: "javascript:;",
            linkedin: "javascript:;",
            dribbble: "javascript:;"
        }, {
            id: 6,
            avatar: "assets/images/about/team/Avatar-5.png",
            name: "Natali Craig",
            role: "Product Designer",
            description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
            twitter: "javascript:;",
            linkedin: "javascript:;",
            dribbble: "javascript:;"
        }],
    }));
});