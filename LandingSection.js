const LandingSection = () => (
  <FullScreenSection backgroundColor="#2A4365" isDarkBackground>
    <VStack spacing={16} alignItems="center" justifyContent="center">
      <VStack spacing={4} alignItems="center">
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />
        <Heading as="h1" size="xl">{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h2" size="3xl">{bio1}</Heading>
        <Heading as="h2" size="3xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);