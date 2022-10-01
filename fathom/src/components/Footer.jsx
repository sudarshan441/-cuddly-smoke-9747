import {Flex,Box,Image,Spacer, Container,ButtonGroup, Button, Stack, Grid,Text} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"
export default function Footer(){
    return (
        <Box style={{backgroundImage:"url(https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6edcb60f8bc32556bae915_footer-bg.png)"}} >
            <Stack pt={"100px"} pb={"100px"} direction={"row"}>
            <Container  maxWidth={"container.sm"}>
<Flex minWidth='max-content'direction={"column"} alignItems='center' gap='6' p={"5"}>
  <Box p='2'>
   <Image width={"150px"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6edda6e64d7d84dcdae233_logo-white.png" alt="logo"></Image>
  </Box>
  <Box  color={"#6f8093"}>Medical coding automation

</Box>
<Flex gap={7} direction={"row"}><Image width={"16px"} height={"16px"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7762ed7d8e63_twitter.svg" alt="logo"></Image>
<Image width={"16px"} height={"16px"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7768627d8e5d_linkedin.svg" alt="logo"></Image>
<Image width={"16px"} height={"16px"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e802c87d802d6155e87a90f_angel%20list.svg" alt="logo"></Image>
</Flex>
  </Flex>
  </Container>
  <Container display={{ base: "none",md:"block"}}  maxWidth={"container.xl"}>
<Stack mt={"20px"} direction={"row"} gap={10}>
<Grid color={"white"} templateColumns='repeat(1, 1fr)' gap={2}>
  <Box color={"#6f8093"} >Technology</Box>
  <Box >Solutions</Box>
  <Box >Security</Box>
  </Grid>
  <Grid color={"white"} templateColumns='repeat(1, 1fr)' gap={2}>
  <Box color={"#6f8093"}>Company</Box>
  <Box >Team</Box>
  <Box >Contact</Box>
  <Box >Careers</Box>
  </Grid>
  <Grid color={"white"} templateColumns='repeat(1, 1fr)' gap={2}>
  <Box color={"#6f8093"}>Legal</Box>
  <Box >Privacy policy</Box>
  <Box >Cookies</Box>
  
  </Grid>
  <Grid color={"white"} templateColumns='repeat(1, 1fr)' gap={2}>
  <Box color={"#6f8093"}>Articles</Box>
  <Box >Resources</Box>
  <Box >RFP guide for medical coding</Box>
  
  <Box >Medical coding automation checklist</Box>
  
  </Grid>
</Stack>
 </Container>

            </Stack>
            
            <Text paddingBottom={"80px"} color={"white"}>© Fathom, Inc. 2022</Text>
        </Box>
    )
}