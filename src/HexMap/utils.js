export const deltaX = 173.2;
export const deltaY = 50;

const defaultHexPoints = [
  [115.947, 50.49],
  [87.085, 100.48],
  [29.362, 100.48],
  [0.5, 50.49],
  [29.362, 0.5],
  [87.085, 0.5],
  [115.947, 50.49],
];

export const generateHexPoints = (rowIndex, hexIndex) => {
  return `${defaultHexPoints.map(
    (point) => `L
      ${point[0] + hexIndex * deltaX + ((rowIndex % 2) * deltaX) / 2},
      ${point[1] + rowIndex * deltaY}`
  )}Z`.replace('L', 'M');
};

