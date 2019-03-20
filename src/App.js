import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'react-google-charts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>vista detallada</h3>
        <Chart
          width={'100%'}
          height={'200px'}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          rootProps={{ 'data-testid': '3' }}
          options={{ tooltip: { trigger: 'none' } }}
          data={[
            [
              { type: 'string', id: 'Position' },
              { type: 'string', id: 'Name' },
              { type: 'date', id: 'Start' },
              { type: 'date', id: 'End' },
            ],
            ['1', 'Fundacion instituto reumatologia', new Date(1987, 6, 1), new Date(1987, 11, 1)],
            ['Vacio', '', new Date(1986, 12, 1), new Date(1987, 6, 1)],

          ]}


        />
        <h3>vista 4 años</h3>

        <Chart
          width={'100%'}
          height={'200px'}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          rootProps={{ 'data-testid': '3' }}
          options={{ tooltip: { trigger: 'none' } }}
          data={[
            [
              { type: 'string', id: 'Position' },
              { type: 'string', id: 'Name' },
              { type: 'date', id: 'Start' },
              { type: 'date', id: 'End' },
            ],
            ['Vacio', '', new Date(1986, 12, 1), new Date(1987, 6, 1)],
            ['Vacio', '', new Date(1988, 4, 1), new Date(1990, 11, 1)],
            ['1', 'Fundacion instituto reumatologia', new Date(1987, 6, 1), new Date(1988, 4, 1)],
          ]}
        />

        <h3>vista general</h3>
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          rootProps={{ 'data-testid': '3' }}
          options={{ tooltip: { trigger: 'none' } }}
          data={[
            [
              { type: 'string', id: 'Position' },
              { type: 'string', id: 'Name' },
              { type: 'date', id: 'Start' },
              { type: 'date', id: 'End' },
            ],
            ['Vacio', '', new Date(1986, 1, 1), new Date(1987, 1, 3)],
            ['1', 'Empleador 1', new Date(1987, 1, 3), new Date(1990, 1, 1)],
            ['2', 'Empleador 2', new Date(1988, 1, 1), new Date(1990, 5, 1)],
            ['Vacio', '', new Date(1990, 5, 1), new Date(2000, 11, 1)],
            ['2', 'Empleador 2', new Date(2000, 11, 1), new Date(2000, 12, 1)],
            ['Vacio', '', new Date(2000, 12, 1), new Date(2002, 10, 1)],
            ['2', 'Empleador 2 incompleto', new Date(2002, 10, 1), new Date(2002, 12, 1)],
            ['2', 'Empleador 2', new Date(2002, 12, 1), new Date(2004, 1, 1)],
            ['2', 'Empleador 2 incompleto', new Date(2004, 1, 1), new Date(2004, 3, 1)],
            ['2', 'Empleador 2', new Date(2004, 3, 1), new Date(2006, 1, 1)],
            ['2', 'Empleador 2 incompleto', new Date(2006, 1, 1), new Date(2006, 3, 1)],
            ['2', 'Empleador 2', new Date(2006, 3, 1), new Date(2019, 1, 1)],
          ]}
        />
      </div>
    );
  }
}

export default App;