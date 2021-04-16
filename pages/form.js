import { Text, Box, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react';
import LoginForm from '../components/form/loginForm';
import RegisterForm from '../components/form/registerForm';

const Form = () => {
  return (
    <Box bg="white" w="450px" rounded="md" boxShadow="sm">
      <Tabs isFitted variant="enclosed-colored">
        <TabList>
          <Tab fontSize={2.5}>
            <Text fontSize="2xl">Daftar</Text>
          </Tab>
          <Tab fontSize={2.5}>
            <Text fontSize="2xl">Masuk</Text>
          </Tab>
        </TabList>
        <TabPanels p={3}>
          <TabPanel>
            <RegisterForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Form;
