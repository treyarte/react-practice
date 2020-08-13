const App = () => {
  const date = new Date();
  const date2 = new Date('August 8, 2020');
  return (
    <div>
      <Tweet
        username='SSJUzamaki'
        name='Naruto Uzamaki'
        date={date.toDateString()}
        tweet='The DBZ Broly Movie was pretty good.'
      />
      <Tweet
        username='Kagome'
        name='Asuka Mishima'
        date={date2.toDateString()}
        tweet='We are finally getting a sequel'
      />
      <Tweet
        username='OneKickMan'
        name='Gintoki Sakata'
        date={date2.toDateString()}
        tweet='Our movies are pretty good!'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
