const forslagIsExpires = (forslagDate) => {
  const date = parseForslagDate(forslagDate);

  date.setDate(date.getDate + 180);

  return new Date() > date;
};

const parseForslagDate = date => new Date(Date.parse(date));

module.exports = {
  forslagIsExpires,
};
