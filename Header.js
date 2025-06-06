import { useState, useEffect, useRef } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials"; // Asegúrate de tener esta lista

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      ref={headerRef}
      transform={visible ? "translateY(0)" : "translateY(-200px)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      position="fixed"
      width="100%"
      zIndex={10}
    >
      <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
        <nav>
          <HStack spacing={8}>
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>
        </nav>
        <nav>
          <HStack spacing={8}>
            <a href="#projects" onClick={handleClick("projects")}>Projects</a>
            <a href="#contactme" onClick={handleClick("contactme")}>Contact Me</a>
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
};

export default Header;
