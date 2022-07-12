const { User } = require('../db/models');

const getUser = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  if (!user) {
    res.status(404).send();
  }

  const userFrontend = {
    userName: user.userName,
    userId: user.id,
  };
  res.send(userFrontend);
};
module.exports = { getUser };
