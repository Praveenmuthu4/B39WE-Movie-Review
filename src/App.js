import "./App.css";

function App() {
  return (
    <div>
      <Card />
      <Movie />
    </div>
  );
}

function Card() {
  const cardData = [
    {
      id: 1,
      cardImg:
        "https://pbs.twimg.com/media/Fg4L-5pakAA9IB2?format=jpg&name=medium",
      movieTitle: "Love Today",
      rating: "⭐ 9.1",
      cardContent:
        "Love Today is an Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles.",
      cardVideo: "https://youtu.be/FaQe8JFGdaM",
    },

    {
      id: 2,
      cardImg:
        "https://pbs.twimg.com/media/E4bQvR5XwAI3Dzp?format=jpg&name=medium",
      movieTitle: "Beast",
      rating: "⭐ 9.1",
      cardContent:
        "After a shopping mall in Chennai had been hijacked by terrorists who held the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
      cardVideo: "https://youtu.be/0E1kVRRi6lk",
    },

    {
      id: 3,
      cardImg:
        "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/10/06/203952-ps1.gif?itok=XHfGPrqX",
      movieTitle: "PS-1",
      rating: "⭐ 9.1",
      cardContent:
        "Vandiyathevan sets out to cross the Chola land to deliver a message from the Crown Prince Aditha Karikalan. Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne. Unrest grips the land as a long-tailed comet arrives, signalling a time of turmoil.",
      cardVideo: "https://youtu.be/D4qAQYlgZQs",
    },
    {
      id: 4,
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40Q6VA5vFxJgoKmBxv6E2NSGN37igvA0Ngt3tLErYyDCFeEoGxoivaUWVRIRdMV9M8gA&usqp=CAU",
      movieTitle: "Sardar",
      rating: "⭐ 9.1",
      cardContent:
        "This film is a depiction of contrast between father and son's beliefs. The son, a police officer, believes that any deed of his should be broadcasted whereas the father, an intelligence officer, spent thirty two years in a prison for the greater good.",
      cardVideo: "https://youtu.be/8OQzz_i3KFE",
    },
  ];
  const cardList = cardData.map((x) => {
    return (
      <div className="card-container">
        <div className="top-container">
          <a href={x.cardVideo}>
            <img className="movie-img" src={x.cardImg} />
          </a>
        </div>
        <div className="bottom-container">
          <span className="movie-title">{x.movieTitle}</span>
          <span className="rating">{x.rating}</span>
          <p>{x.cardContent}</p>
        </div>
      </div>
    );
  });

  return <div className="whole-container">{cardList}</div>;
}

function Movie({ id, cardVideo, cardImg }) {
  return (
    <div>
      {(() => {
        if (id === 1 || id === 2 || id === 3 || id === 4) {
          return (
            <div>
              <a href={cardVideo}>
                <img src={cardImg} />
              </a>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default App;
