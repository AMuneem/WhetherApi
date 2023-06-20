import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ScaleLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Whether = () => {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [whetherData, setWhetherData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchBtn, setSearchBtn] = useState("Karachi");
  const [backgroundImage, setBackgroundImage] = useState(
    // "https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif"
    "https://res.cloudinary.com/dtwolquu4/image/upload/v1687257613/clouds_zvmd4w.gif"
  );
  const [result, setResult] = useState();
  const [conversionType, setConversionType] = useState("celsiusToFahrenheit"); // Default conversion type
  const [buttonText, setButtonText] = useState("Converter °C");
  // const [isLoading, setLoading] = useState(false);

  const searchFunc = (e) => {
    const value = e.target.value.toLowerCase();

    const values = value.charAt(0).toUpperCase() + value.slice(1);
    setInputValue(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "Lahore") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258663/lahore_asxwte.jpg`
      );
    } else if (inputValue === "Karachi") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258662/karachi_wlmxqi.jpg`
      );
    } else if (inputValue === "Murree") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258662/murree_plk76w.jpg`
      );
    } else if (inputValue === "Pindi") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258667/pindi_phorua.jpg`
      );
    } else if (inputValue === "islamabad") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258665/islamabad_t5ffi5.jpg`
      );
    } else if (inputValue === "Kashmir") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258664/murrees_b65xla.jpg`
      );
    } else if (inputValue === "London") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258675/london_r5gnwj.jpg`
      );
    } else if (inputValue === "Paris") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258665/paris_oxewgk.jpg`
      );
    } else if (inputValue === "Newyork") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258665/newyork_zovl3u.jpg`
      );
    } else if (inputValue === "") {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687258662/karachi_wlmxqi.jpg`
      );
      setInputValue("Karachi");
    } else {
      setBackgroundImage(
        `https://res.cloudinary.com/dtwolquu4/image/upload/v1687257613/clouds_zvmd4w.gif`
      );
      setInputValue("Karachi");
      setSearchBtn("karachi");
    }

    setSearchBtn(inputValue);
    setResult(`${whetherData.currentConditions?.temp} °F `);
    setInputValue("");
  };

  // copy URL
  // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/karachi?unitGroup=us&key=JY5P32XCP658ZTME3SQTMUT4H&contentType=json"
  const fetchApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchBtn}?unitGroup=us&key=JY5P32XCP658ZTME3SQTMUT4H&contentType=json`;
  const fetchWhetherData = async () => {
    try {
      setLoading(true);
      console.log(searchBtn);

      if (!searchBtn) {
        setSearchBtn("karachi");
      }
      const response = await fetch(fetchApi);
      const data = await response.json();

      setTimeout(async () => {
        setWhetherData(data);
        setResult(`${data.currentConditions?.temp} °F`);

        setLoading(false);
      }, 2000);
    } catch (error) {
      alert("Please Enter Correct City Name");
      setLoading(false);
    }
  };


  const convertTemperature = () => {
    if (conversionType === "celsiusToFahrenheit") {
      setResult(`${whetherData.currentConditions?.temp} °F`);
      setConversionType("fahrenheitToCelsius");
      setButtonText("Converter °C");
    } else if (conversionType === "fahrenheitToCelsius") {
      const celsius = ((whetherData.currentConditions?.temp - 32) * 5) / 9;
      setResult(`${celsius.toFixed(2)} °C`);
      setConversionType("celsiusToFahrenheit");
      setButtonText("Converter °F");
    }
  };

  useEffect(() => {
    fetchWhetherData();
  }, [searchBtn]);

  if (loading)
    return (
      <>
        <ClipLoader
          className='clipLoader_span'
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />

        {/* <div className='loadin_wrapper'>
          <div className='content'>
            <div className='ball red'></div>
            <div className='ball green'></div>
            <div className='ball yellow'></div>
            <div className='ball blue'></div>
            <div className='ball emerald-green'></div>
            <div className='ball pink'></div>
          </div>
        </div> */}
      </>
    );

  return (
    <>
      <div className='whetherWrapper sweet-loading'>
        <div>
          <div className='TemperaturWrapper'>
            <div
              className='tempBg'
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}>
              <div className='tempInner'>
                <div className='whetherSearch'>
                  <form onSubmit={handleSubmit}>
                    <input
                      type='search'
                      value={inputValue}
                      onChange={searchFunc}
                    />
                  </form>
                </div>

                <div className='serachBtn'>
                  <button onClick={handleSubmit}>Search</button>
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

// var str = 'AMMAR';
// var result = '';
// for (var i = str.length - 1; i >= 0; i--) {
//   result += str[i];
// }
// console.log(result);
// https://betterprogramming.pub/how-to-create-a-loading-screen-for-client-side-fetching-in-nextjs-eaede11c0921
export default Whether;
