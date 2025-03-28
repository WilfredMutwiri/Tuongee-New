
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsWhatsapp, BsFacebook, BsLinkedin, BsInstagram, BsTwitterX } from "react-icons/bs";
import logo from "../assets/logo.webp";

export function FooterComponent() {

  const handleJoin=()=>{
    const phoneNo="254714938280";
    const message=`Hello Joel Munene, I visited Tuongee Initiative  website and I'm interested in joining you.How do I proceed? Thank you.`;
    const encodedMessage=encodeURIComponent(message);
    const whatsappUrl=`https://wa.me/${phoneNo}?text=${encodedMessage}`;
    window.open(whatsappUrl,"_blank");
  }

  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="/"
              src={logo}
              alt="Tuongee Logo"
              name="Tuongee Initiative"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="/about">Tuongee Initiative</FooterLink>
                <FooterLink href="/events">Our Events</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="https://www.facebook.com/joel.kibara.7" target="_blank">Facebook</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/joel-munene-21894918a/" target="_blank">LinkedIn</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Tuongee Initiative™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.facebook.com/joel.kibara.7" target="_blank" icon={BsFacebook} />
            <FooterIcon href="https://www.linkedin.com/in/joel-munene-21894918a/" target="_blank" icon={BsLinkedin} />
            <FooterIcon onClick={handleJoin} icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
