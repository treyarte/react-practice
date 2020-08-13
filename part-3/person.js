const Person = ({ name, age, hobbies }) => {
  const canVote = age >= 18;
  const personHobbies = hobbies.map((h) => <li>{h}</li>);
  return (
    <div className='person'>
      <p>Learn some information about this person</p>
      <p>Name: {name.length > 8 ? name.slice(0, -2) : name}</p>
      <h3>{canVote ? 'please go vote!' : 'you must be 18'}</h3>
      <h3>Hobbies</h3>
      <ul>{personHobbies}</ul>
    </div>
  );
};
