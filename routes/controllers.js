exports.getDefault = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Got your request',
  });
};
