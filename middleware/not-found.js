const notFound = (req, res) => {
  res.status(404).json({ message: `can not find this route` });
};

module.exports = notFound;
