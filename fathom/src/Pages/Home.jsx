import { Box, Button, Container,Image, Heading, Link,Text,Grid,GridItem} from "@chakra-ui/react"
export default function Home(){
    return(
        <Box><Box style={{backgroundImage:"url(https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8115255836db2cd3bfd6b2_background.jpg)"}} >
        <Container maxWidth={"container.lg"}>
        <Heading pt={"120px"} color={"white"} size='3xl'>AI built for medical coding</Heading>
      <Text p={"40px"} color={"white"} margin={"auto"} maxWidth={"650px"} fontSize="2xl">What if you had a coder who could code millions of charts per day at unparalleled accuracy and cost?</Text>
      <Button p={"7"} mb={"120px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>GET STARTED</Button>
        </Container>
     
    </Box><Box bg={"#f3f5fb"} margin={"10px"}><Box p={"15px"} fontSize={"26px"}>Read <Link  href="https://www.nvidia.com/en-us/" color='#9a76d0'>NVIDIA</Link>'s spotlight on Fathom: <Link href="https://blogs.nvidia.com/blog/2019/09/12/fathom-ai-medical-coding/" color='#9a76d0' >The Cure for the Common Code</Link></Box></Box>
    <Text mt={"100px"}>SERVICES</Text>
    <Heading  mt={"10px"}  size={"2xl"}>Coding services tailored to your workflow</Heading>
    <Container maxWidth={"container.lg"}>
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        
        <GridItem w='100%' >
          <Image  margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc79d75515e2ecd54be_automation.svg" alt="logo"></Image>
          <Heading size={'md'}>Coding automation</Heading>
          <Text fontSize={"18px"} >Our AI takes a first pass, automating what it can and flagging the remainder for your existing coding operations.</Text>
        </GridItem>
        <GridItem w='100%'  ><Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7d802d608218cac51_full-service.svg" alt="logo"></Image>
          <Heading size={'md'} >Full-service coding</Heading>
          <Text fontSize={"18px"}>AI combined with our human infrastructure to maximize speed, and accuracy while reducing costs.</Text></GridItem>
        <GridItem w='100%'  ><Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7dc544573caf55a0b_audit.svg" alt="logo"></Image>
          <Heading size={'md'} >Real-time audit</Heading>
          <Text fontSize={"18px"}>Use Fathom to review the work of your coding team, editing errors and flagging problematic coding for review.</Text></GridItem>
       
      </Grid>
    </Container>
    <Button p={"7"} mb={"120px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>EXPLORE SERVICES</Button>
    <Box>
    <Container maxWidth={"container.lg"}>
        <Heading>Fathom powers coding operations across</Heading>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        
        <GridItem w='100%'  >
         
          <Heading size={'4xl'}>4K+</Heading>
          <Text fontSize={"18px"} >PROVIDER SITES</Text>
        </GridItem>
        <GridItem w='100%'  >
          <Heading size={'4xl'} >60M+</Heading>
          <Text fontSize={"18px"}>PATIENTS</Text></GridItem>
        <GridItem w='100%'  >
          <Heading size={'4xl'} >25K+</Heading>
          <Text fontSize={"18px"}>PROVIDERS</Text></GridItem>
       
      </Grid>
    </Container>
    </Box>
   
    </Box>
        
   
    )
} 