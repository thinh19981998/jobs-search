// To calculate the no. of days past from present
export const dayPast = (d) => {
  const present = new Date();
  const date2 = new Date(d);
  // console.log(date2);

  // To calculate the time difference of two dates
  var Difference_In_Time = present.getTime() - date2.getTime();

  // To calculate the no. of days between two dates
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  const result = Difference_In_Days.toFixed(0);

  return result;
};

export const processQuery = (query) => {
  const string = query[0] === '&' ? query.slice(1) : query;
  const newString = string.trim().replace(/\s/g, '%20').replace(/,/g, '%2C');
  return newString;
};
