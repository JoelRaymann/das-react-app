function getDateList(startDate, endDate) {
  const dateList = [];
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  let dt = new Date(startDate);

  while (dt <= endDate) {
    dateList.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }

  return dateList;
}

console.log(getDateList("2020-10-6", "2020-10-12"));
