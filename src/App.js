import './App.css';
import hexArrayMock from './hexArrayMock';

const deltaX = 173.2;
const deltaY = 50;

const terrainTypeToTerrainName = (terrainType) => {
  if (!terrainType) return 'hide';
  switch (terrainType) {
    case 1:
    default:
      return 'clear';
    case 2:
      return 'ltbrush';
    case 3:
      return 'forest';
    case 4:
      return 'urban';
    case 5:
      return 'hill';
    case 6:
      return 'mountain';
    case 7:
      return 'water';
    case 8:
      return 'custom';
  }
};

const changeTerrain = (terrain) => {
  switch (terrain) {
    case 'clear':
    default:
      return {
        fill: '#BBC77E',
        stroke: '#444444',
        terrainType: 1,
      };
    case 'ltbrush':
      return {
        fill: '#85A35C',
        stroke: '#444444',
        terrainType: 2,
      };
    case 'forest':
      return {
        fill: '#656D38',
        stroke: '#444444',
        terrainType: 3,
      };
    case 'urban':
      return {
        fill: '#666666',
        stroke: '#444444',
        terrainType: 4,
      };
    case 'hill':
      return {
        fill: '#C3A452',
        stroke: '#444444',
        terrainType: 5,
      };
    case 'mountain':
      return {
        fill: '#A67E36',
        stroke: '#444444',
        terrainType: 6,
      };
    case 'water':
      return {
        fill: '#75ABDD',
        stroke: '#444444',
        terrainType: 7,
      };
    case 'hide':
      return {
        fill: 'transparent',
        stroke: 'transparent',
        terrainType: 0,
      };
    case 'custom':
      return {
        fill: 'red',
        stroke: '#444444',
        terrainType: 8,
      };
  }
};

const hexPointArray = [
  [115.947, 50.49],
  [87.085, 100.48],
  [29.362, 100.48],
  [0.5, 50.49],
  [29.362, 0.5],
  [87.085, 0.5],
  [115.947, 50.49],
];

const generateHexPoints = (rowIndex, hexIndex) => {
  return `${hexPointArray.map(
    (point) => `L
      ${point[0] + hexIndex * deltaX + ((rowIndex % 2) * deltaX) / 2},
      ${point[1] + rowIndex * deltaY}`
  )}Z`.replace('L', 'M');
};

function App() {
  return (
    <div className="App">
      <svg
        id="hex-map"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`
          0 
          0 
          ${Math.floor(deltaY + deltaX * hexArrayMock[0].length)} 
          ${Math.floor(deltaY + deltaY * hexArrayMock.length)}
        `}
      >
        {hexArrayMock.map((row, rowIndex) => (
          <g class="row">
            {row.map((hex, hexIndex) => (
              <path
                id={`${rowIndex}${hexIndex}`}
                class="hex"
                fill={changeTerrain(terrainTypeToTerrainName(hex)).fill}
                stroke={changeTerrain(terrainTypeToTerrainName(hex)).stroke}
                data-terrain={hex}
                d={generateHexPoints(rowIndex, hexIndex)}
              ></path>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

export default App;
// M115.947,50.49L87.085, 100.48L29.362, 100.48L0.5,  50.49L29.362, 0.5L87.085,0.5L115.947,50.49Z

// M202.547,100.49L173.685,150.48L115.962,150.48L87.1,100.49L115.962,50.5L173.685,50.5L202.547,100.49Z

// M115.947,150.49L87.085,200.48L29.362,200.48L0.5,150.49L29.362,100.5L87.085,100.5L115.947,150.49Z
