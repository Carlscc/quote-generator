let quotes = [
"\'I am a big supporter of the minimum viable product and taking something that is the simplest explanation of your idea and putting it into the marketplace so you can start to get feedback.\'- Kathryn Minshew, Co-Founder and CEO of The Muse",
"\'When I look back to my younger self, I would tell myself to be confident first and foremost, to believe in myself, before anyone else because if I believe in myself, then others will too.\'- Tiffany Pham, Founder of Mogul",
"\'It’s important to seek out environments where you are supported, but where you have the chance to be uncomfortable and learn new things.\'- Vanessa Hurst, Co-Founder of Girl Develop It",
"\'One of the best pieces of advice I’ve ever gotten is from my mom: ‘You get to choose how you react to things, and people can’t make you feel one way or another.’\'-  Kerry Steib, Director of Social Impact at Spotify",
"\'Especially for women and minorities, we need to learn to see challenges as stepping stones instead of hurdles. They really can bring you experience and closer to your goals.\' - Rebecca Garcia, Technical Head of Product at Next Caller",
"\'Give computer science a shot. It’s okay if you don’t like it, or end up doing something else. But you never know unless you dedicate serious time and effort to trying.\'- Terri Burns, President of Tech@NYU",
"\'Do what you love and want to do. Find what you’re good at, what you can sell or provide that is unique to you and go for it.\' - Dana Donofree, Owner of AnaOno",
"\'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.\' - Sheryl Sandberg, COO Facebook",
"\'Someone once told me growth and comfort do not coexist. And I think it’s a really good thing to remember.\' Ginni Rometty, CEO IBM",
"\'Now we’re in an age where technology is mandatory, and we wanted young girls to have this understanding and know how to build an app.\' – Peta Clarke, Technical Lead at Black Girls Code",
"\'I would like to be remembered as someone who was not afraid to do what she wanted to do and as someone who took risks along the way in order to achieve her goals.\' - Sally Ride, Physicist, NASA Communicator and Astronaut",
];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('newQuotes').innerHTML = quotes[randomNumber];
	
	
//send to tweet button 
document.getElementById('twitterLink').href = "http://twitter.com/intent/tweet/?text=" + encodeURIComponent(quotes[randomNumber]);
}
