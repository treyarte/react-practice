const Tweet = ({ username, name, date, tweet }) => {
  return (
    <div className='tweet'>
      <div>
        <b>{username}</b> - {name}
      </div>

      <span>
        <i>Date: {date}</i>
      </span>
      <p>{tweet}</p>
    </div>
  );
};
