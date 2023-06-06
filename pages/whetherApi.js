import { useEffect, useState } from "react";

const Whether = () => {
  const [whetherData, setWhetherData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [searchBtn, setSearchBtn] = useState("Karachi");
  const [imageApi, setImageApi] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(
    "https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif"
  );
  const [result, setResult] = useState();
  const [conversionType, setConversionType] = useState("celsiusToFahrenheit"); // Default conversion type
  // const [convertBtnText, setConvertBtnText] = (`${"F"}`);
  const [buttonText, setButtonText] = useState('Converter °C');

  
  const searchFunc = (e) => {
    setInputValue(e.target.value);
  };
  const searchButton = () => {
    if (inputValue === "lahore") {
      setBackgroundImage(`images/lahore.jpg`);
    } else if (inputValue === "karachi") {
      setBackgroundImage(`images/karachi.jpg`);
    } else if (inputValue === "murree") {
      setBackgroundImage(`images/murree.jpg`);
    } else if (inputValue === "pindi") {
      setBackgroundImage(`images/pindi.jpg`);
    } else if (inputValue === "islamabad") {
      setBackgroundImage(`images/islamabad.jpg`);
    } else if (inputValue === "newyork") {
      setBackgroundImage(`images/newyork.jpg`);
    } else if (inputValue === "london") {
      setBackgroundImage(`images/london.jpg`);
    } else if (inputValue === "paris") {
      setBackgroundImage(`images/paris.jpg`);
    } else if (inputValue === "china") {
      setBackgroundImage(`images/paris.jpg`);
    } else {
      setBackgroundImage(
        `https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif`
      );
      setInputValue("");
      setSearchBtn(inputValue);
      setResult(`${whetherData.currentConditions?.temp} °F`);
    }

    setSearchBtn(inputValue);
    setResult(`${whetherData.currentConditions?.temp} °F`);

    setInputValue("");
  };

  // copy URL
  // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/karachi?unitGroup=us&key=JY5P32XCP658ZTME3SQTMUT4H&contentType=json"

  const fetchWhetherData = async () => {
    try {
      const fetchApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchBtn}?unitGroup=us&key=JY5P32XCP658ZTME3SQTMUT4H&contentType=json`;

      const response = await fetch(fetchApi);

      const data = await response.json();
      setWhetherData(data);
      console.log(data, "data");
      setResult(`${data.currentConditions?.temp} °F`);
    } catch (error) {
      alert("Please Enter Corrct City Name");
    }
  };

  // images api

  const backgroundImages = async () => {
    const responseImage = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    const imagesData = await responseImage.json();
    setImageApi(imagesData);
  };

  const convertTemperature = () => {
    if (conversionType === "celsiusToFahrenheit") {
      setResult(`${whetherData.currentConditions?.temp} °F`);
      setConversionType("fahrenheitToCelsius");
      setButtonText('Converter °C');
    } else if (conversionType === "fahrenheitToCelsius") {
      const celsius = ((whetherData.currentConditions?.temp - 32) * 5) / 9;
      setResult(`${celsius.toFixed(2)} °C`);
      setConversionType("celsiusToFahrenheit");
      setButtonText('Converter °F');
    }
  };

  useEffect(() => {
    fetchWhetherData();
    backgroundImages();
    // convertTemperature();
  }, [searchBtn]);
  return (
    <>
      <div className='whetherWrapper'>
        <div>
          <div className='TemperaturWrapper'>
            <div
              className='tempBg'
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}>
              <div className='tempInner'>
                <div className='whetherSearch'>
                  <input
                    type='search'
                    value={inputValue}
                    onChange={searchFunc}
                  />
                </div>

                <div className='serachBtn'>
                  <button onClick={searchButton}>Search</button>
                </div>

                <div className='timezone'>{whetherData.address}</div>

                <div className='currentTemp'>
                  <h1> {result} </h1>

                  <p>Current Temp</p>
                </div>
                <div className='converterBtn'>
                  <button onClick={convertTemperature}>{buttonText}</button>
                </div>
                <div className='wrapperhumiPressure'>
                  <div>
                    <p>Humidity {whetherData.currentConditions?.humidity}</p>
                  </div>
                  <div>
                    <p>Pressure {whetherData.currentConditions?.pressure} </p>
                  </div>
                </div>
                <div className='currentDateTime'>
                  <p>Current Time: {whetherData.currentConditions?.datetime}</p>
                </div>
                <div className='wheDescription'>
                  <p>{whetherData.description}</p>
                </div>
              </div>
              <div className='previousDaysWrapper'>
                <div className='temMaxMinWrapper'>
                  <div className='date'>
                    <p>Date Time</p>
                  </div>
                  <div className='temp_max'>
                    <p>Temp Max</p>
                  </div>
                  <div className='temp_min'>
                    <p>Temp Min</p>
                  </div>
                </div>

                <div className='daysScrollWrapper'>
                  {whetherData.days?.map((days) => {
                    return (
                      <>
                        <span key={days.id}></span>

                        <div className='DaysWrapper'>
                          <div>{days?.datetime}</div>
                          <div> {days?.tempmax}</div>
                          <div> {days?.tempmin}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whether;
