var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Max'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(22, (user) => {
  console.log(user);
});
