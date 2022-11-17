import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styled from 'styled-components';
const HoverA = styled.div`
  &>a>svg{
    color: #181818;
    transition: all 0.3s ease-in-out;
  }
  &>a:hover>svg{
    color: #1818187a;
  }
`
const HoverLi = styled.ul`
  &>li{
    transition: all 0.3s ease-in-out;
  }
  &>li:hover{
    color: #1818187a;
  }
`
const FooterContact = () => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "4fr 2fr 2fr 2fr",
      gap: "1rem",
      fontFamily: "'Open Sans', sans-serif",
      marginTop: "4rem",
      color: "#181818",
    }}>
      <div
        className="footer-item"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingRight: "7rem"
        }}
      >
        <h2 className="footer-title">Grab 10% off your next order</h2>
        <div className="footer-control" style={{ position: "relative" }}>
          <input type="text" placeholder="Email" className="footer-form" style={{ width: "100%", padding: "10px", borderRadius: "5px", outline: "none" }} />
          <i className="fa-solid fa-arrow-right" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "0", cursor: "pointer" }}></i>
        </div>
        <p className="footer-content">By enter your email address you agree to receive our newsletter communications by email. You can unsubscribe at any time. Please see our {<Link style={{ color: "#181818" }}>Terms & Conditions</Link>} and {<Link style={{ color: "#181818" }}>Privacy Policy</Link>} for more details.</p>
        <HoverA className="footer-contact" style={{ display: "flex", gap: "2rem" }}>
          <Link>
            <FacebookIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
          </Link>
          <Link>
            <InstagramIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
          </Link>
          <Link>
            <PinterestIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
          </Link>
          <Link>
            <TwitterIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
          </Link>
          <Link>
            <YouTubeIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
          </Link>
        </HoverA>
      </div>
      <div className="footer-item" >
        <h2 className="footer-title">Purpose</h2>
        <HoverLi className="footer-content" style={{ cursor: 'pointer', listStyle: "none", padding: "0", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li className="text">Explore Our Purpose</li>
          <li className="text">Environmental & Social Impact</li>
          <li className="text">Nonprofit Partnerships</li>
          <li className="text">Product Recycling</li>
          <li className="text">Animal Welfare Policy</li>
          <li className="text">Supply Chain and Modern Slavery Disclosure</li>
        </HoverLi>
      </div>
      <div className="footer-item">
        <h2 className="footer-title">Customer Service</h2>
        <HoverLi className="footer-content" style={{ cursor: 'pointer', listStyle: "none", padding: "0", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li className="text">Help Center</li>
          <li className="text">Orders</li>
          <li className="text">Order Status</li>
          <li className="text">Returns</li>
          <li className="text">Contact Us</li>
          <li className="text">Report a Fake Product</li>
          <li className="text">Fundraising</li>
        </HoverLi>
      </div>
      <div className="footer-item">
        <h2 className="footer-title">About</h2>
        <HoverLi className="footer-content" style={{ cursor: 'pointer', listStyle: "none", padding: "0", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li className="text">About us</li>
          <li className="text">Student Discount</li>
          <li className="text">Jobs</li>
          <li className="text">Newsroom</li>
          <li className="text">Distributor</li>
          <li className="text">Corporate Sales</li>
          <li className="text">Careers</li>
        </HoverLi>
      </div>
    </div>
  )
}
export default FooterContact;