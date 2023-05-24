import { deltaX, deltaY, generateHexPoints} from './utils';

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


const HexMap = ({ hexArray }) => {
  if (!hexArray) return null;
  return (
      <svg
        id="hex-map"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`
          0 
          0 
          ${Math.floor(deltaY + deltaX * hexArray[0].length)} 
          ${Math.floor(deltaY + deltaY * hexArray.length)}
        `}
      >
        {hexArray.map((row, rowIndex) => (
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
  );
}

export default HexMap;