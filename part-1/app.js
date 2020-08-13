const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name='Trey Way' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
