// import { Link } from "react-router-dom";
import FooterContact from './footer-contact/footer-contact'
import FooterLogo from './footer-logo/footer-logo'
import DownloadApp from './download-app/download-app'
import TermsAndPolicies from './terms-and-policies/terms-and-policies'
// import styled from 'styled-components';
const Footer = () => {
  return (
    <>
      <FooterContact />
      <FooterLogo />
      <DownloadApp />
      <TermsAndPolicies />
    </>
  )
}
export default Footer;