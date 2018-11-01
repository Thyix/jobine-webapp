// @flow

type Font = {
  fontFamily: string,
  fontWeight: number,
  fontSize: number,
}

type FontWeight = 'base' | 'bold'

const type = {
  base: 'Helvetica',
};

const weight = {
  base: 400,
  bold: 500,
};

function toCSS(font: Font) {
  return `
    font-family: ${font.fontFamily};
    font-weight: ${font.fontWeight};
    font-size: ${font.fontSize}px;
  `;
}

function huge(fontWeigth: FontWeight = 'base') {
  return {
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 34,
  };
}

function medium(fontWeigth: FontWeight = 'base') {
  return {
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 16,
  };
}

function small(fontWeigth: FontWeight = 'base') {
  return {
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 13,
  };
}

function xsmall(fontWeigth: FontWeight = 'base') {
  return {
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 12,
  };
}

function xxsmall(fontWeigth: FontWeight = 'base') {
  return {
    fontFamily: type.base,
    fontWeight: weight[fontWeigth],
    fontSize: 10,
  };
}

function tiny(fontWeigth: FontWeight = 'base') {
  return {
    fontWeight: weight[fontWeigth],
    fontFamily: type.base,
    fontSize: 6,
  };
}

export default {
  huge,
  medium,
  small,
  xsmall,
  xxsmall,
  tiny,
  toCSS,
};