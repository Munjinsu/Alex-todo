const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author: "L.론허바드",
    },
    {
        quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
        author: "알랭",
    },
    {
        quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
        author: "호라티우스",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "내일이란 오늘의 다른 이름일 뿐이다.",
        author: "윌리엄 포크너",
    },
    {
        quote: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "실패는 언제나 찾아오는 친구이며 성공은 어쩌다 찾아오는 손님이다.",
        author: "미르 임란",
    },
    {
        quote: "앞으로 다가올 8년을 신경 쓰기보다는 코앞의 8일에 더 집중하는 삶을 살기를 바란다.",
        author: "게리 베이너척",
    },
]

  const quote = document.querySelector("#quotes span:first-child");
  const author = document.querySelector("#quotes span:last-child");

  const todaySayQuote = quotes[Math.floor(Math.random() * quotes.length)]  

  quote.innerText = todaySayQuote.quote;
  author.innerText = `- ${todaySayQuote.author} -`;