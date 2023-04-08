class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  };

  setUserInfo({ userName, userJob }) {
    this._userName.textContent = userName;
    this._userJob.textContent = userJob;
  };

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent
    };
  };
};

export default UserInfo;