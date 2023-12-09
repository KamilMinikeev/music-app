import moment from "moment/moment";

export default (seconds) => {
  //   let minute = Math.floor(seconds / 60);
  //   let second = seconds % 60;

  //   if (minute < 10) {
  //     minute = "0" + minute;
  //   }
  //   if (second < 10) {
  //     second = "0" + minute;
  //   }

  //   const total = `${minute} : ${second}`;

  return moment.utc(seconds * 1000).format("mm:ss");
};
