function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return user;
  }
  return null;
}

function setUser(data) {
  localStorage.setItem('user', JSON.stringify(data));
  return 'success';
}

export default { getUser, setUser };
