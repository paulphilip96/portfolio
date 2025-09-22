import { Select } from "antd";
import { useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import { toast } from "react-toastify";
import CountUp from "react-countup";

import { COUNTRIES } from "../../Data/CountryList";
import { STATUS_CODES } from "../../Constants/API";
import { transformHolidayResponse } from "../../Helpers/HolidayHelpers";
import type { HolidayResponse, Holiday as HolidayType} from "../../Types/HolidayTypes";
import HolidayApi from "../../API/HolidayApi";

import "./Holiday.scss";
import React from "react";
import Loader from "../../Components/Loader/Loader";
import moment from "moment";


const Holiday = () => {

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [holidayData, setHolidayData] = useState<HolidayType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const countryList = Object.entries(COUNTRIES).map(([code, name]) => ({
    value: code,  
    label: name, 
  }));

  const handleCountryChange = async (countryCode: string): Promise<void> => {
    setLoading(true);
    setSelectedCountry(countryCode);

    const response = await HolidayApi.getHolidays(countryCode);
    if (response.statusCode !== STATUS_CODES.OK) toast.error("Unable to retrieve holiday data");
    else {
      const data = (response.data as HolidayResponse[]).map(transformHolidayResponse);
      const filteredData = data
        .filter((item) => item.daysToGo >= 0)
        .sort((a, b) => {
          const dateA = moment(a.date, "Do MMM YYYY");
          const dateB = moment(b.date, "Do MMM YYYY");
          return dateA.valueOf() - dateB.valueOf();
        });
      setHolidayData(filteredData);
    }

    setLoading(false);
  }

  return (
    <React.Fragment>
      {loading && (
        <Loader show={loading} />
      )}

      <div className="Holiday">
        {/* Title */}
        <h2>Select a Country</h2>

        {/* Input */}
        <Select
          style={{ width: 200 }}
          showSearch
          placeholder="Select a country"
          options={countryList} 
          onChange={handleCountryChange}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />

        {/* Map */}
        <div className="Holiday__Map">
          {selectedCountry && (
            <WorldMap
              color="gold"
              title="Selected Country"
              size="responsive"
              value-suffix=""
              data={[{ country: selectedCountry, value: "" }]}
            />
          )}
        </div>

        {/* LatestHoliday */}
        {holidayData.length > 0 ? (
          <div className="Holiday__LatestHoliday">
            <h2>Next Holiday</h2>
            <h1 className="number">
              <CountUp end={holidayData[0].daysToGo} duration={2.5} />days
            </h1>
            <h3>{holidayData[0].name}</h3>
            <div>{holidayData[0].description}</div>
            <div className="label">{holidayData[0].date}</div>
          </div>
        ) : (
          <React.Fragment>
            {selectedCountry && (
              <div className="label">No Holiday Data Available</div>
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>

  )
}

export default Holiday;