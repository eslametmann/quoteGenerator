const quoteData = [{ "quote": "You can construct the character of a man and his age not only from what he does and says, but from what he fails to say and do.", "author": "Norman Douglas", "category": "age" },
{ "quote": "I believe it is essential for our planetary future to develop tools that can change the consciousness which has created the crisis that we are in.", "author": "Stanislav Grof", "category": "future" },
{ "quote": "It is funny that men who are supposed to be scientific cannot get themselves to realise the basic principle of physics, that action and reaction are equal and opposite, that when you persecute people you always rouse them to be strong and stronger.", "author": "Gertrude Stein", "category": "men" },
{ "quote": "One of the many things nobody ever tells you about middle age is that it's such a nice change from being young.", "author": "William Feather", "category": "age" },
{ "quote": "I love South American food, and I haven't really been down there. I really need a vacation.", "author": "Nate Silver", "category": "food" },
{ "quote": "My Dad is my hero. He's 85 now and he is in great health. He is handsome and strong. He has an incredible moral and ethical backbone. I couldn't have been luckier with my parents.", "author": "Harry Connick, Jr.", "category": "dad" },
{ "quote": "My mom taught me to go after my dreams. I have this faith in myself that I must have gotten from her.", "author": "Amy Jo Johnson", "category": "mom" },
{ "quote": "Education and democracy have the same goal: the fullest possible development of human capabilities.", "author": "Paul Wellstone", "category": "education" },
{ "quote": "Pale Death beats equally at the poor man's gate and at the palaces of kings.", "author": "Horace", "category": "death" },
{ "quote": "I think Prince should open up a little more to other artists. Just because we love Prince. Especially the old stuff - we love him to death. But if he opened up he would be something to deal with. Imagine Kanye West producing a Prince track? It would be banoodles!", "author": "Jamie Foxx", "category": "death" },
{ "quote": "There is no correlation between happiness and amounts of money.", "author": "Kesha", "category": "happiness" },
{ "quote": "Talent and intelligence never yet inoculated anyone against the caprice of the fates.", "author": "J. K. Rowling", "category": "intelligence" },
{ "quote": "Work and struggle and never accept an evil that you can change.", "author": "Andre Gide", "category": "change" },
{ "quote": "Never trust anyone completely but God. Love people, but put your full trust only in God.", "author": "Lawrence Welk", "category": "love" },
{ "quote": "Nobody had ever told me junk food was bad for me. Four years of medical school, and four years of internship and residency, and I never thought anything was wrong with eating sweet rolls and doughnuts, and potatoes, and bread, and sweets.", "author": "Robert Atkins", "category": "food" },
{ "quote": "All real education is the architecture of the soul.", "author": "William Bennett", "category": "architecture" },
{ "quote": "We are sinful not merely because we have eaten of the tree of knowledge, but also because we have not eaten of the tree of life.", "author": "Kafka, Franz", "category": "life" },
{ "quote": "All art is quite useless.", "author": "Oscar Wilde", "category": "art" },
{ "quote": "I see humanity now as one vast plant, needing for its highest fulfillment only love, the natural blessings of the great outdoors, and intelligent crossing and selection.", "author": "Luther Burbank", "category": "environmental" },
{ "quote": "There are pockets of great food in Spain, but there are also pockets of very mediocre food in Spain, and the same in Morocco and the same in Croatia and the same in Germany and the same in Austria.", "author": "Mario Batali", "category": "food" },
{ "quote": "I'm in that comfortable niche where I'm not that famous and sometimes people do need to put a barrier between them and their followers. When you're real famous you need to do that but I'm not that famous so I don't need that kind of barrier.", "author": "Tony Levin", "category": "famous" },
{ "quote": "You take somebody that cries their goddam eyes out over phoney stuff in the movies, and nine times out of ten they're mean bastards at heart.", "author": "J. D. Salinger", "category": "movies" },
{ "quote": "I love to go to Washington - if only to be near my money.", "author": "Bob Hope", "category": "love" },
{ "quote": "I'm from Canada, and New Zealand feels like you took all the best bits of Canada and squished them onto a tiny island like Hawaii. I was absolutely blown away by the beauty of the South Island.", "author": "Evangeline Lilly", "category": "beauty" },
{ "quote": "God doesn't seek for golden vessels, and does not ask for silver ones, but He must have clean ones.", "author": "Dwight L. Moody", "category": "god" },
{ "quote": "Behind every great man is a woman rolling her eyes.", "author": "Jim Carrey", "category": "funny" },
{ "quote": "There are worse things in life than death. Have you ever spent an evening with an insurance salesman?", "author": "Woody Allen", "category": "death" },
{ "quote": "I don't want to be famous as a movie star and have the whole world love me, I want to be a creative actress.", "author": "Juliette Lewis", "category": "famous" },
{ "quote": "Only idiots refuse to change their minds.", "author": "Brigitte Bardot", "category": "change" },
{ "quote": "Listening to my regular favourites - Mozart, Beethoven, Brahms and so on - I always feel, quite misguidedly, that nothing can be too bad if such beauty and brilliance exists in the world.", "author": "Jane Asher", "category": "beauty" }];

function App() {

  function randomQuote() {
    let randomIndex = Math.floor(Math.random() * (quoteData.length - 1));
    return quoteData[randomIndex];
  }

  let [currentQuote, setCurrentQuote] = React.useState(randomQuote());
  function newQuote() {
    setCurrentQuote(randomQuote());
  }


  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box", className: "container col-7 p-4 rounded " }, /*#__PURE__*/
    React.createElement("h3", { id: "text" }, currentQuote.quote), /*#__PURE__*/
    React.createElement("p", { id: "author", className: "row " }, /*#__PURE__*/
    React.createElement("div", { className: "col-6" }), /*#__PURE__*/
    React.createElement("i", { className: "col" }, currentQuote.author)), /*#__PURE__*/

    React.createElement("div", { className: "text-center" }, /*#__PURE__*/
    React.createElement("button", { id: "new-quote", className: "btn btn-danger text-center", onClick: newQuote }, "new quote")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", { href: "twitter.com/intent/tweet", id: "tweet-quote" }), /*#__PURE__*/
    React.createElement("i", { class: "fa-brands fa-twitter fa-2xl", style: { "color": "red" } }))));



}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));