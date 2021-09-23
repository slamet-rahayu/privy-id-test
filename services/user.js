function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return user;
  }
  return null;
}

function getTempUser() {
  const user = JSON.parse(sessionStorage.getItem('user-id'));
  if (user) {
    return user;
  }
  return null;
}

const userServices = { getUser, getTempUser };

export default userServices;
