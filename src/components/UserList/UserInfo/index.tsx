const UserInfo = ({ user }) => {
  const formatDate = (date: string) => date.split("T")[0];

  return (
    <div className="list-item" >
      <div className="item-info">
        <span className="text-base">{user.login.salt}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.name.first}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.name.last}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.name.title}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{formatDate(user.dob.date)}</span>
      </div>
      <div className="item-info">
        <span className="text-base">{user.dob.age}</span>
      </div>
      <div className="item-info">
        <span className="text-base profile-link">View profile</span>
      </div>
    </div>
  );
};

export default UserInfo;