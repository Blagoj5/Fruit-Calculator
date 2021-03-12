import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { MainForm } from '../components/MainForm';
import { useMyStore } from '../hooks/useMyStore';
import { generateCommonResponsive } from '../utils/generateCommonResponsive';

interface AboutProps {}

const ln = {
  header: ['About Us', 'За Нас'],
  text: [
    `At Fruit Calculator, we believe there is a better and funner way for
          children with special needs to learn math. A more valuable, less
          invasive way where customers are earned rather than bought. We're
          obsessively passionate about it, and our mission is to help kids learn
          math much faster and easier. We focus on the 4 basic aritmetic
          operations (subtraction, addition, division and multiplication) and
          finding creative way to teach them (by using fruits).`,
    `Користејќи го калкулаторот за овошје, веруваме дека постои подобар и позабавен начин децата со посебни потреби да учат математика. Повеќе вреден, помалку инвазивен начин каде што клиентите се заработуваат наместо да се купуваат. Ние сме опсесивно страствени за тоа и нашата мисија е да им помогнеме на децата да научат математика многу побрзо и полесно. Ние се фокусираме на 4-те основни аритметички операции (одземање, собирање, поделба и множење) и наоѓање креативен начин да ги научиме (со употреба на овошје).`,
  ],
};

const About: React.FC<AboutProps> = ({}) => {
  const { language } = useMyStore();
  return (
    <MainForm>
      <Box w={generateCommonResponsive('100%', '50%')} mx='auto' mt={16}>
        <Heading fontSize='3xl' textAlign='center' mb={6}>
          {ln.header[language]}
        </Heading>
        <Text fontSize='lg'>{ln.text[language]}</Text>
      </Box>
    </MainForm>
  );
};

export default About;
