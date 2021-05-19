const getUser = (req, res) => res.send(" Get Request with  route");

const postUser = (req, res) => res.send(" Post Request with  route");

const updateUser = (req, res) => res.send("Patch Request with  route");

const putUser = (req, res) => res.send("Put Request with  route");

const deleteUser = (req, res) => res.send(" Delete Request with  route");

module.exports = {
  getUser,
  postUser,
  updateUser,
  putUser,
  deleteUser,
};
