import { Button, Navbar } from "flowbite-react";
import logo from "../assets/logo.webp";
export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Tuongee Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tuongee Initiative</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Join Us Today</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About Us</Navbar.Link>
        <Navbar.Link href="/events">Our Events</Navbar.Link>
        <Navbar.Link href="/reviews">Reviews</Navbar.Link>
        <Navbar.Link href="/contacts">Contacts</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
