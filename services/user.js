function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return user;
  }
  return null;
}

const userServices = { getUser };

export default userServices;
