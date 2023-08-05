import { Box, Button, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Box
      className="App"
      color={"white"}
      backgroundColor="blackAlpha.900"
      height={"100vh"}
    >
      {/* Header Start here */}

      <Heading textAlign={"center"}>Invoice</Heading>
      <hr />
      <Box display={"flex"} padding={"1rem"} justifyContent={"space-evenly"}>
        <Button backgroundColor={"coral"}>Print</Button>
        <Button backgroundColor={"coral"}>Download</Button>
        <Button backgroundColor={"coral"}>Send</Button>
      </Box>
      <hr />
      {/* Header End here */}
    </Box>
  );
}

export default App;
