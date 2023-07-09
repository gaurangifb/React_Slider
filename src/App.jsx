import {useEffect, useState} from "react";
import NetflixCard from "./components/NetflixCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./App.css"

const App = () => {
  const [myData, setMyData] = useState([]);

  const options = {
    method: "GET",
    headers: {
     
    },
  };

  const fetchData = async () => {
    try {
      //const res = await fetch("https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=e", options);
      const data = await res.json();
      setMyData(data.titles);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} showDots={true}>
        {/* {myData.map((currItem) => {
          return (
            <NetflixCard key={currItem.summary.id} actualData={currItem} />
          );
        })} */}
      </Carousel>
    </>
  );
};

export default App;
