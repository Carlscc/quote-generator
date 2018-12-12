let quotes = [
"An ugly baby is better than no baby at all. If you wait and wait and wait for your product to be perfect before you release it out into the world, you will often never get there. I am a big supporter of the minimum viable product and taking something that is the simplest explanation of your idea and putting it into the marketplace so you can start to get feedback.- Kathryn Minshew, Co-Founder and CEO of The Muse",
"When I look back to my younger self, I would tell myself to be confident first and foremost, to believe in myself, before anyone else because if I believe in myself, then others will too. And ultimately, this confidence and belief in myself would enable me to enable other women around the world. It’s about believing in your goals and what you are passionate about, and from that, others will become passionate about it too.- Tiffany Pham, Founder of Mogul",
"Feeling a little uncomfortable with your skills is a sign of learning, and continuous learning is what the tech industry thrives on! It’s important to seek out environments where you are supported, but where you have the chance to be uncomfortable and learn new things.- Vanessa Hurst, Co-Founder of Girl Develop It",
"One of the best pieces of advice I’ve ever gotten is from my mom: ‘You get to choose how you react to things, and people can’t make you feel one way or another.’ You have agency over every reaction, in your work or personal life. It’s incredibly empowering to know that, and to really take advantage of that.-  Kerry Steib, Director of Social Impact at Spotify",
"It’s so easy for us to get caught up in negative patterns, versus seeing what positive change you can make. Especially for women and minorities, we need to learn to see challenges as stepping stones instead of hurdles. They really can bring you experience and closer to your goals. - Rebecca Garcia, Technical Head of Product at Next Caller",
"Give computer science a shot. It’s okay if you don’t like it, or end up doing something else. But you never know unless you dedicate serious time and effort to trying. And if you do like it, share that with others. You have no idea how many wonderful communities exist for supporting and encouraging women to keep it up, and that’s so empowering.- Terri Burns, President of Tech@NYU",
"Career choice and progression doesn’t have to fit into the standard societal mold. Do what you love and want to do. Find what you’re good at, what you can sell or provide that is unique to you and go for it. - Dana Donofree, Owner of AnaOno",
"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. - Sheryl Sandberg, COO Facebook",
"I don’t like the word ‘balance.’ To me, that somehow conjures up conflict between work and family… as long as we think of these things as conflicting, we will never have happiness. True happiness comes from integration… of work, family, self, community. – Padmasree Warrior, former CEO of Motorola & Cisco Systems, now CEO of NextEV US",
"Someone once told me growth and comfort do not coexist. And I think it’s a really good thing to remember. Ginni Rometty, CEO IBM",
"Now we’re in an age where technology is mandatory, and we wanted young girls to have this understanding and know how to build an app. – Peta Clarke, Technical Lead at Black Girls Code",
];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('newQuotes').innerHTML = quotes[randomNumber];
}
