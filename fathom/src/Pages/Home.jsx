import { Box, Button, Container,Image, Heading,Stack, Link,Text,Grid,GridItem} from "@chakra-ui/react"
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
    <Heading  m={"20px"}  size={"2xl"}>Coding services tailored to your workflow</Heading>
    <Container mt={"80px"}  maxWidth={"container.lg"}>
    <Grid  templateColumns='repeat(3, 1fr)' gap={4}>
        
        <GridItem w='100%' >
        <Stack direction={"column"} spacing='24px'>
          <Image  margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc79d75515e2ecd54be_automation.svg" alt="logo"></Image>
          <Heading size={'md'}>Coding automation</Heading>
          <Text fontSize={"18px"} >Our AI takes a first pass, automating what it can and flagging the remainder for your existing coding operations.</Text>
          </Stack>
        </GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7d802d608218cac51_full-service.svg" alt="logo"></Image>
          <Heading size={'md'} >Full-service coding</Heading>
          <Text fontSize={"18px"}>AI combined with our human infrastructure to maximize speed, and accuracy while reducing costs.</Text></Stack></GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7dc544573caf55a0b_audit.svg" alt="logo"></Image>
          <Heading size={'md'} >Real-time audit</Heading>
          <Text fontSize={"18px"}>Use Fathom to review the work of your coding team, editing errors and flagging problematic coding for review.</Text></Stack></GridItem>
       
      </Grid>
    </Container>
    <Button p={"7"} m={"60px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>EXPLORE SERVICES</Button>
    <Box >
    <Container  maxWidth={"container.lg"}>
        <Heading m={"60px"}>Fathom powers coding operations across</Heading>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Heading size={'4xl'}>4K+</Heading>
          <Text fontSize={"18px"} >PROVIDER SITES</Text>
          </Stack>
        </GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Heading size={'4xl'} >60M+</Heading>
          <Text fontSize={"18px"}>PATIENTS</Text>
          </Stack></GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Heading size={'4xl'} >25K+</Heading>
          <Text fontSize={"18px"}>PROVIDERS</Text>
          </Stack></GridItem>
       
      </Grid>
    </Container>
    </Box>
    <Text mt={"100px"}>BENEFITS</Text>
    <Heading  m={"20px"}  size={"2xl"}>Cost, speed, and accuracy</Heading>
    <Heading   size={"lg"}>No need to make trade-offs, choose all three</Heading>
    <Container mt={"80px"}  maxWidth={"container.lg"}>
    <Grid  templateColumns='repeat(3, 1fr)' gap={12}>
        
        <GridItem w='100%' >
        <Stack direction={"column"} spacing='24px'>
          <Image  margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81210fd802d6d4d78cc141_cost.svg" alt="logo"></Image>
          <Heading size={'md'}>Cost</Heading>
          <Text fontSize={"18px"} >Reduce the total cost of your coding operations by up to 50%.</Text>
          </Stack>
        </GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81250b9d7551effbcd8483_accuracy.svg" alt="logo"></Image>
          <Heading size={'md'} >Accuracy</Heading>
          <Text fontSize={"18px"}>Instantly reduce claim denials and mitigate audit risk.</Text></Stack></GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811b57a7eca1abcc96f85e_speed.svg" alt="logo"></Image>
          <Heading size={'md'} >Speed</Heading>
          <Text fontSize={"18px"}>Cut your coding turnaround by days, not hours or minutes.</Text></Stack></GridItem>
          <GridItem w='100%' >
        <Stack direction={"column"} spacing='24px'>
          <Image  margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81244ea7eca1517f971f83_scale.svg" alt="logo"></Image>
          <Heading size={'md'}>Scale</Heading>
          <Text fontSize={"18px"} >Effortlessly add the capacity to code millions of charts per day.</Text>
          </Stack>
        </GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81244e957e0aca8631fe64_reliability.svg" alt="logo"></Image>
          <Heading size={'md'} >Reliability</Heading>
          <Text fontSize={"18px"}>Ensure that your coding operations never slow down or stop.</Text></Stack></GridItem>
        <GridItem w='100%'  >
        <Stack direction={"column"} spacing='24px'>
          <Image margin={"auto"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81235429502fec7abc4315_security.svg" alt="logo"></Image>
          <Heading size={'md'} >Security</Heading>
          <Text fontSize={"18px"}>Keep your PHI secure with industry leading technology and protocol.</Text></Stack></GridItem>
      </Grid>
    </Container>
    <Button p={"7"} m={"60px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>SCHEDULE A CALL</Button>
    <Box>

    </Box>
    <Heading  m={"20px"}  size={"2xl"}>Industry news and insights</Heading>
    <Heading   size={"lg"}>Stay up to date with the latest from the Fathom team</Heading>
    
    </Box>
        
   
    )
} 