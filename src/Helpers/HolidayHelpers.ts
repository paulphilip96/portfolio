import moment from "moment"
import type { Holiday, HolidayResponse } from "../Types/HolidayTypes"

export const transformHolidayResponse = (data: HolidayResponse): Holiday => {
  const holidayDate = moment(data.date, "YYYY-MM-DD").startOf("day");
  const today = moment().startOf("day");

  const formattedDaysToGo = holidayDate.diff(today, "days");
  const formattedDate = holidayDate.format("Do MMMM YYYY");

  return {
    name: data.name,
    description: data.description,
    date: formattedDate,
    daysToGo: formattedDaysToGo
  };
};