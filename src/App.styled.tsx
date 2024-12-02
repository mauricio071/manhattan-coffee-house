import styled from "styled-components";
import parallaxImage1 from "./assets/parallax-imagem1.png";

interface NavbarContentType {
  $visible: string;
}

interface SectionType {
  $parallaximage?: string;
}

interface WrapperType {
  $parallax?: string;
}

interface BtnToTopType {
  $showbutton: boolean;
}

export const TitleFilled = styled.h2`
  color: white !important;
  background-color: burlywood;
  margin: auto;
  padding: 10px 100px;
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: burlywood;
  position: fixed;
  z-index: 10;
  padding-inline: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 768px) {
    padding-inline: 3rem;
  }
`;

export const NavbarContent = styled.div<NavbarContentType>`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 90px;
    height: 90px;
    transition-duration: 300ms;
  }

  img:hover {
    opacity: 0.8;
  }

  svg {
    color: white;
    max-width: 4rem;
  }

  ul {
    width: 100%;
    display: ${(props) => (props.$visible === "true" ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    padding-bottom: 2rem;
  }

  ul li:hover a {
    text-shadow: 10px 8px 6px black;
  }

  ul li a {
    text-decoration: none;
    color: white;
    text-shadow: 6px 4px 6px black;
    transition-duration: 300ms;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: end;
      padding-bottom: 0;
    }

    svg {
      display: none;
    }
  }
`;

export const Wrapper = styled.div<WrapperType>`
  width: 100%;
  max-width: 770px;
  margin: 0 auto;
  padding-block: ${(props) => (props.$parallax ? "160px" : "100px")};
  padding-inline: 20px;
  text-align: center;

  ${(props) =>
    props.$parallax &&
    `
    h3 {
      color: white;
      background-color: burlywood;
      margin: 0 auto;
      padding: 10px 40px;
    }
  `}

  h2,
  h3 {
    text-align: center;
  }

  h2 {
    color: burlywood;
    margin-bottom: 40px;
  }

  p {
    font-family: "Lato", sans-serif;
    text-align: center;
    line-height: 35px;
    color: #666;
  }
`;

export const HeaderSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${parallaxImage1}) no-repeat center center/cover fixed;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 104px;
  text-align: center;
  padding-inline: 1rem;

  h1 {
    color: white;
    font-size: 45px;
  }

  @media (min-width: 1024px) {
    height: 100vh;

    h1 {
      font-size: 75px;
    }
  }
`;

export const Section = styled.section<SectionType>`
  background: ${(props) =>
    props.$parallaximage &&
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.$parallaximage}) no-repeat center center/cover fixed`};
  background-position: ${(props) => props.id === "schedules" && "25% -55%"};

  iframe {
    margin-top: 30px;
    margin-bottom: 80px;
    width: 100%;
    height: 400px;
    max-width: 1000px;
  }
`;

export const Contacts = styled.div`
  color: white;
  background-color: burlywood;
  max-width: 700px;
  margin: auto;
  padding: 20px;

  p {
    color: white;
  }
`;

export const Schedules = styled.ul`
  max-width: 600px;
  margin: 0 auto;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    list-style: none;

    &:last-of-type p {
      color: burlywood;
    }

    p,
    h3 {
      text-align: start;
      color: white;
      flex-basis: 240px;
    }

    @media (min-width: 600px) {
      p,
      h3 {
        flex-basis: 120px;
      }
    }
  }
`;

export const Line = styled.div`
  background-color: white;
  height: 1px;
  width: 70%;
`;

export const Footer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 30px 10px;
  text-align: center;

  span {
    color: burlywood;
  }
`;

export const BtnToTop = styled.a<BtnToTopType>`
  position: fixed;
  right: 40px;
  bottom: 40px;
  transition-duration: 300ms;
  opacity: ${(props) => (props.$showbutton ? "100" : "0")};
  pointer-events: ${(props) => (props.$showbutton ? "auto" : "none")};

  img {
    max-width: 3rem;
  }

  @media (min-width: 768px) {
    img {
      max-width: 5rem;
    }
  }
`;
