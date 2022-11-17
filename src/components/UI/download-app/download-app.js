import { Link } from "react-router-dom";
const DownloadApp = () => {
  return (
    <div className="container" style={{ marginTop: "2rem", textAlign: 'center', padding: "20px", backgroundColor: "#f4f4f4", fontFamily: "'Open Sans', sans-serif", color: "#181818" }}>
      <p><b>Did you know we have an app?</b> create shareable art and custom PopSockets designs with our unique image editing tools</p>
      <Link style={{ color: "#181818" }}>
        <span>Download for IOS</span>
      </Link>
    </div>
  )
}
export default DownloadApp;