const App = () => {
  return (
    <div>
      <Person name='ling xiaoyu' age={24} hobbies={['swimming', 'reading']} />
      <Person name='Chris' age={17} hobbies={['eating', 'music', 'exercise']} />
      <Person
        name='Treyvion'
        age={82}
        hobbies={['coding', 'vidya games', 'watching anime']}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
