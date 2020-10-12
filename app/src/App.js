import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Label } from 'recharts';
import './App.css';

const fakeData = [
  { msoffset: 1000, power: 117 },
  { msoffset: 5000, power: 225 },
  { msoffset: 10000, power: 353 },
  { msoffset: 15000, power: 200 },
  { msoffset: 20000, power: 273 }
];

function App() {

  const state = useSelector(state => state);
  const { message } = state;

  return (

    <div className="App">

      <header className="App-header">
        <h1>{ message }</h1>
      </header>

      <div className="display-flex">

        <section>
          <h3>Here is a chart</h3>
          <LineChart width={400} height={400} data={fakeData}>
            <Line type="monotone" dataKey="power" stroke="#8884d8" />
            <XAxis dataKey="msoffset">
                  <Label value="time (ms)" position="insideBottom" />
            </XAxis>
            <YAxis />
          </LineChart>
        </section>

      </div>
    </div>

  );
}

export default App;
