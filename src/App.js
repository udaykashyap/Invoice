import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Logo from "./Assets/Shop_Logo.png";
import Background from "./Assets/bg.jpg";

function App() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <Box
      className="App"
      // color={"white"}
      // backgroundColor="blackAlpha.900"
      backgroundImage={Background}
      backgroundSize={"cover"}
      padding={"3%"}
      height={"100vh"}
    >
      {/* Header Start here */}
      <Box lineHeight={"10"} borderBottom={"2px solid #C1C1C1"}>
        <Image src={Logo} margin={"auto"} width={"120px"} />
        <Text color={"#912008"} fontSize={"5xl"} className="cinzel-regular">
          GAHNA JEWELLERS
        </Text>
        <Text fontWeight={"semibold"} className="cinzel-regular">
          100% Hallmark Jeweller Showroom
        </Text>
      </Box>
      {/* Header End here */}

      {/* Customer's Details */}
      <Box display={"flex"} justifyContent={"space-between"} padding={"1%"}>
        <Box>
          <Text>Name : Abhishek</Text>
          <Text>Address : Patna</Text>
        </Box>
        <Box>
          <Text fontSize={"2xl"} fontWeight={500}>
            Invoice
          </Text>
          <Text>Invoce No : 001</Text>
          <Text>Date : {currentDate}</Text>
        </Box>
      </Box>
      {/* Customer's Details end */}

      {/* Table */}
      {/* Table end */}
      {/* Notes */}

      {/* Notes end */}
      <Box
        border={"1px solid #C1C1C1"}
        display={"flex"}
        justifyContent={"space-between"}
        padding={"1rem"}
      >
        <Box>
          <Text fontWeight={500}>URD Doc No. :</Text>
          <Text>Govt. approved jeweller Reg. No. : HM/C-5390242212</Text>
        </Box>
        <Box>
          <Text fontWeight={500}>For GAHNA JEWELLERS</Text>
        </Box>
      </Box>
      {/* Footer */}
      <Text textAlign={"right"} fontWeight={500} marginBottom={"3%"}>
        Authorized Signatory
      </Text>
      <Box borderTop={"3px solid #912008"} textAlign={"center"}>
        <Text>
          <i class="fa-solid fa-location-dot" style={{ color: "#ff0000" }}></i>{" "}
          Anwarpur Chowk, Hajipur, Vaishali - 844101, Bihar,India
        </Text>
        <Text>
          <i class="fa-solid fa-envelope" style={{ color: "#0033ff" }}></i>{" "}
          gahna.hjp@gmail.com{" "}
          <i class="fa-brands fa-whatsapp" style={{ color: "#0cb800" }}></i>{" "}
          7323057831{" "}
          <i class="fa-solid fa-phone" style={{ color: "#073b08" }}></i> +91
          9334057831, +91 7903646960
        </Text>
      </Box>
      {/* Footer end*/}
    </Box>
  );
}

export default App;
