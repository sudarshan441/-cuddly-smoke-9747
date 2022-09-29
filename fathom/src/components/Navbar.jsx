import {Flex,Box,Image,Spacer, Container,ButtonGroup} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"
export default function Navbar(){
    return (
        <Container display={{ base: "none",md:"block"}} maxWidth={"container.xl"}>
<Flex minWidth='max-content' alignItems='center' gap='2' p={"5"}>
  <Box p='2'>
   <NavLink to={"/"}><Image width={"150px"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg" alt="logo"></Image></NavLink>
  </Box>
  <Spacer />
  <ButtonGroup gap='10'>
  <NavLink to={'/services'}>SERVICES</NavLink>
  <NavLink to={'/security'}>SECURITY</NavLink>
  <NavLink to={'/team'}>TEAM</NavLink>
  <NavLink to={'/careers'}>CAREERS</NavLink>
  <NavLink to={'/insights'}>INSIGHTS</NavLink>
  <NavLink to={'/contact'}>CONTACT</NavLink>
  </ButtonGroup>
  
  </Flex>
        </Container>
        

    )
}