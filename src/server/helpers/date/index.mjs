const parseForslagDate = (date) => new Date(Date.parse(date));

export const forslagIsExpires = (forslagDate) => {
  const date = parseForslagDate(forslagDate);

  date.setDate(date.getDate + 180);

  return new Date() > date;
};

export default {
  forslagIsExpires,
};
