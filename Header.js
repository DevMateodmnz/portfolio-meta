const Header = () => {
  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box backgroundColor="#18181b">
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