import React from 'react';
import './color-page.scss';

type ColorCardProps = {
  name: string;
  hex: string;
};

const ColorCard = ({ name, hex }: ColorCardProps): React.ReactElement => (
  <div className="color-card">
    <div className="color-card__header" style={{ backgroundColor: hex }} />
    <div className="color-card__footer">
      <div>
        <p className="color-card__title">NAME</p>
        <p className="color-card__subtitle">{name}</p>
      </div>
      <div>
        <p className="color-card__title">HEX</p>
        <p className="color-card__subtitle">{hex}</p>
      </div>
    </div>
  </div>
);

const NEUTRALS = [
  {
    name: 'Gray 100',
    hex: '#f6f9fc',
  },
  {
    name: 'Gray 200',
    hex: '#e9ecef',
  },
  {
    name: 'Gray 300',
    hex: '#dee2e6',
  },
  {
    name: 'Gray 400',
    hex: '#ced4da',
  },
  {
    name: 'Gray 500',
    hex: '#adb5bd',
  },
  {
    name: 'Gray 600',
    hex: '#8898aa',
  },
  {
    name: 'Gray 700',
    hex: '#525f7f',
  },
  {
    name: 'Gray 800',
    hex: '#32325d',
  },
  {
    name: 'Gray 900',
    hex: '#212529',
  },
];

const ColorPage = (): React.ReactElement => {
  return (
    <div className="color-page">
      <h1 className="markdown__heading-1">Color</h1>
      <p className="markdown__p">
        Tiny UI uses a specific set of palettes to specify colors to provide a consistent look and
        feel for the products you build.
      </p>

      <h2 className="markdown__heading-2">Primary colors</h2>
      <p className="markdown__p">
        Primary palette is comprised of neutrals, white, and purple. These colors are present across
        most touch points from marketing to product.
      </p>
      <div className="color-page__color-panel">
        <ColorCard name="Default" hex="#172b4d" />
        <ColorCard name="Primary" hex="#6E41BF" />
        <ColorCard name="Secondary" hex="#f7fafc" />
        <ColorCard name="Info" hex="#00bcd4" />
        <ColorCard name="Success" hex="#4caf50" />
        <ColorCard name="Danger" hex="#f44336" />
        <ColorCard name="Warning" hex="#ff9800" />
      </div>

      <h2 className="markdown__heading-2">Light neutrals</h2>
      <p className="markdown__p">
        Light neutrals are helpful for offsetting content in a primarily white layout without losing
        warmth and cleanliness, and are therefore often used as a background color for web
        components.
      </p>

      <div className="code-table-container">
        <table className="color-page__table">
          <tbody>
            {NEUTRALS.map((color) => (
              <tr key={color.hex}>
                <td>
                  <span
                    className="color-page__color-block"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                </td>
                <td>{color.hex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ColorPage;
