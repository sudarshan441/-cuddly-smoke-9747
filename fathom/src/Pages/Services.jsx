import { Box, Button, Container,Image, Heading,Stack, Link,Text,Grid,GridItem, HStack, ButtonGroup, Flex,Spacer} from "@chakra-ui/react"

export default function Services(){
    return (
        <Box>

       
        <Box style={{backgroundImage:"url(https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8115255836db2cd3bfd6b2_background.jpg)"}} >
        <Container maxWidth={"container.lg"}>
        <Heading pt={"120px"} color={"white"} size='3xl'>Medical coding automation services built for you</Heading>
      <Text p={"40px"} color={"white"} margin={"auto"} maxWidth={"650px"} fontSize="2xl">Fathom's AI seamlessly integrates into your workflow</Text>
      <Button p={"7"} mb={"120px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>GET STARTED</Button>
        </Container>
     
    </Box>
    <Box bg={"#f3f5fb"} margin={"10px"}><Box p={"15px"} fontSize={"26px"}>Read <Link  href="https://www.nvidia.com/en-us/" color='#9a76d0'>NVIDIA</Link>'s spotlight on Fathom: <Link href="https://blogs.nvidia.com/blog/2019/09/12/fathom-ai-medical-coding/" color='#9a76d0' >The Cure for the Common Code</Link></Box></Box>
    <Container m={"80px"} maxWidth={"container.xl"}><Flex gap={5}><Spacer /><Container  maxWidth={"container.md"}>< Image  src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8a616cf99d7caf1875c8a0_automation.svg"  alt="logo"></Image></Container><Spacer /><Container maxWidth={"400px"}><Stack textAlign={"left"} gap={2}><Text color={"#6f8093"}>AI-DRIVEN EFFICIENCY</Text><Heading>Coding automation</Heading><Heading color={"#6f8093"}>Let us take a first pass</Heading><Text>Use our AI to ease the burden on your coding team. In one quick step, we can review your incoming charts, process the charts that can be coded by our system and then pass the remainder to your current coding operation, allowing them to focus on the most critical charts while drastically reducing your overall coding costs.</Text><Button p={"7"} m={"60px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>REQUEST A CALL</Button></Stack></Container></Flex></Container>
    <Box  p={"40px"} bg={"#f3f5fb"}><Container mt={"100px"} maxWidth={"container.xl"}><Flex gap={5}><Spacer /><Container maxWidth={"400px"}><Stack textAlign={"left"} gap={2}><Text color={"#6f8093"}>100% COVERAGE</Text><Heading>Full-service coding</Heading><Heading color={"#6f8093"}>Automation augmented by world-class medical coders.</Heading><Text>A turn-key solution that combines our AI system with world class medical coders to handle all your coding needs, resulting in up to a 70% reduction in coding costs while increasing speed, accurracy, and security.</Text><Button p={"7"} m={"60px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>REQUEST A CALL</Button></Stack></Container><Spacer /><Container  maxWidth={"container.md"}>< Image  src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8a616cf99d7caf1875c8a0_automation.svg"  alt="logo"></Image></Container></Flex></Container></Box>
    
    <Container mt={"100px"} maxWidth={"container.xl"}><Flex gap={5}><Spacer /><Container  maxWidth={"container.md"}>< Image  src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8a6195a6b2c14cbeaa56fb_audit.svg"  alt="logo"></Image></Container><Spacer /><Container maxWidth={"400px"}><Stack textAlign={"left"} gap={2}><Text color={"#6f8093"}>MITIGATE RISK</Text><Heading >Audit complete</Heading><Heading color={"#6f8093"}>The world’s first comprehensive, real-time coding audit</Heading><Text>Use AI to check your coder or coding vendor’s work to ensure completion and accuracy. Our system looks at every coded chart and flags any that may represent a potential denial or unnecessary downcoding.</Text><Button p={"7"} m={"60px"} fontSize={"15px"} style={{borderRadius:"30px"}} color={"#9a76d0"}>REQUEST A CALL</Button></Stack></Container></Flex></Container>
    
    <Text color={"#6f8093"} mt={"100px"}>BENEFITS</Text>
    <Heading  m={"20px"}  size={"2xl"}>Cost, speed, and accuracy</Heading>
    <Heading color={"#6f8093"}  size={"lg"}>No need to make trade-offs, choose all three</Heading>
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
    </Box>
    )
}