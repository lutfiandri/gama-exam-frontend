import { Flex, Text, Spacer } from '@chakra-ui/react';

const UserCard = () => {
  return (
    <Flex width="90rem" height="12rem" background="white" pd={3} alignItems="center" borderRadius={10} mb="3rem">
      <Flex direction="column" ml="3rem">
        <Text className="userName" fontSize="3xl" fontWeight="bold">
          Iskan Andriyanto Perjuangan
        </Text>
        <Text className="userInfo" fontSize="2xl">
          UNIVERSITAS GADJAH MADA
        </Text>
      </Flex>
      <Spacer />
      <Flex mr="3rem" width="14rem" height="6rem" background="grey" borderRadius={10} alignItems="center" color="white">
        <Flex direction="column" alignItems="center" width="7rem">
          <Text className="userRank" fontSize="4xl" fontWeight="semibold">
            1
          </Text>
          <Text fontSize="sm">Ranking</Text>
        </Flex>
        <Flex direction="column" alignItems="center" width="7rem" borderLeft="solid">
          <Text className="userScore" fontSize="4xl" fontWeight="semibold">
            100
          </Text>
          <Text fontSize="sm">Nilai</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserCard;
