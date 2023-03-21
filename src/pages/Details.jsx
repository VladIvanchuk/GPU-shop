import { Link, useParams, useNavigate } from "react-router-dom";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import UndoIcon from "@material-ui/icons/Undo";

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-wrapper">
      <div className="details">
        <div className="back" onClick={() => navigate(-1)}>
          <UndoIcon /> Back
        </div>
        <div className="details-header">
          <div className="img"></div>
          <div className="details-info">
            <div className="name">
              GIGABYTE Gaming GeForce RTX 4080 16GB GDDR6X PCI Express 4.0 x16 ATX Video
              Card GV-N4080GAMING OC-16GD
            </div>
            <div className="price">
              <span className="price-current">$1,699.99</span>
              <span className="sale">$1,709.99</span>
            </div>
            <div className="buttons">
              <button>Add to cart</button>
              <button>Buy now!</button>
            </div>
            <div className="about">
              <div className="about-item">
                <LocalShippingIcon /> Free Shipping to your city.
              </div>
              <div className="about-item">
                <AccountBalanceWalletIcon /> Payment upon receipt of goods, Cashless for
                legal entities and individuals
              </div>
              <div className="about-item">
                <VerifiedUserIcon />
                Guarantee. The Law on the Protection of Consumer Rights does not provide
                for the return of this good quality product.
              </div>
            </div>
          </div>
        </div>
        <div className="details-body">
          <h2>SPECIFICATIONS</h2>
          <div className="details-content">
            <table className="table-horizontal">
              <caption>Model</caption>
              <tbody>
                <tr>
                  <th>Brand </th>
                  <td>GIGABYTE</td>
                </tr>
                <tr>
                  <th>Series </th>
                  <td>Gaming</td>
                </tr>
                <tr>
                  <th>Model </th>
                  <td>GV-N4080GAMING OC-16GD</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>Interface</caption>
              <tbody>
                <tr>
                  <th>Interface</th>
                  <td>PCI Express 4.0 x16</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>Chipset</caption>
              <tbody>
                <tr>
                  <th>Chipset Manufacturer </th>
                  <td>NVIDIA</td>
                </tr>
                <tr>
                  <th>GPU Series </th>
                  <td>NVIDIA GeForce RTX 40 Series</td>
                </tr>
                <tr>
                  <th>GPU</th>
                  <td>GeForce RTX 4080</td>
                </tr>
                <tr>
                  <th>CUDA Cores</th>
                  <td>9728</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>Memory</caption>
              <tbody>
                <tr>
                  <th>Memory Size </th>
                  <td>16GB</td>
                </tr>
                <tr>
                  <th>Memory Interfac</th>
                  <td>256-Bit</td>
                </tr>
                <tr>
                  <th>Memory Type </th>
                  <td>GDDR6X</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>3D API</caption>
              <tbody>
                <tr>
                  <th>DirectX</th>
                  <td>DirectX 12</td>
                </tr>
                <tr>
                  <th>OpenGL</th>
                  <td>OpenGL 4.6</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>Ports</caption>
              <tbody>
                <tr>
                  <th>Multi-Monitor Support </th>
                  <td>4</td>
                </tr>
                <tr>
                  <th>HDMI</th>
                  <td>1 x HDMI 2.1</td>
                </tr>
                <tr>
                  <th>DisplayPort</th>
                  <td>3 x DisplayPort 1.4a</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>Details</caption>
              <tbody>
                <tr>
                  <th>Max Resolution </th>
                  <td>7680 x 4320</td>
                </tr>
                <tr>
                  <th>Cooler </th>
                  <td>Triple Fans</td>
                </tr>
                <tr>
                  <th>Thermal Design Power </th>
                  <td>320W</td>
                </tr>
                <tr>
                  <th>Recommended PSU Wattage </th>
                  <td>850W</td>
                </tr>
                <tr>
                  <th>Power Connector </th>
                  <td>1 x 16-Pin</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>Form Factor &amp; Dimensions</caption>
              <tbody>
                <tr>
                  <th>Form Factor</th>
                  <td>ATX</td>
                </tr>
                <tr>
                  <th>Max GPU Length </th>
                  <td>342 mm</td>
                </tr>
              </tbody>
            </table>
            <table className="table-horizontal">
              <caption>Additional Information</caption>
              <tbody>
                <tr>
                  <th>Date First Available </th>
                  <td>November 01, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="back" onClick={() => navigate(-1)}>
          <UndoIcon /> Back
        </div>
      </div>
    </div>
  );
};
