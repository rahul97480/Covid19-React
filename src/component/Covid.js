import React, {useEffect, useState} from 'react'
import './Covid.css';

function Covid() {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try{
            const result = await fetch ('https://api.covid19india.org/data.json');
            const actualData = await result.json();
            console.log(actualData);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
       getCovidData();
    }, [])
    return (
        <>
        <div className="container">
        <div className="row">
          <div className="column">
            <div className="card">
              <h3>Country Name</h3>
              <p>India </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Total Recovered</h3>
              <p>{data.recovered}</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Total Confirmed </h3>
              <p>{data.confirmed}</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Total Deaths</h3>
              <p>{data.deaths}</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>Total Active</h3>
              <p>{data.active}</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>Last Updated</h3>
              <p>{data.lastupdatedtime}</p>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}

export default Covid
