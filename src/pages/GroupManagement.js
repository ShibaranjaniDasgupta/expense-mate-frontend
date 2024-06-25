/*Your Groups*/
import { VStack, Heading, Button, Grid, GridItem, Avatar, Text, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import { useState } from 'react';

const GroupManagement = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Group 1', desc: 'This is Group 1', members: ['Jack', 'John', 'Jill'] },
    { id: 2, name: 'Group 2', desc: 'This is Group 2', members: ['Brad', 'Ronald', 'David'] },
    { id: 3, name: 'Group 3', desc: 'This is Group 3', members: ['Shaun', 'Patrick', 'Hugh'] },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [editGroupName, setEditGroupName] = useState('');
  const [editGroupDesc, setEditGroupDesc] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const handleEditGroup = (groupId) => {
    const groupToEdit = groups.find(group => group.id === groupId);
    setSelectedGroup(groupToEdit);
    setEditGroupName(groupToEdit.name);
    setEditGroupDesc(groupToEdit.desc);
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    const updatedGroups = groups.map(group => {
      if (group.id === selectedGroup.id) {
        return {
          ...group,
          name: editGroupName,
          desc: editGroupDesc,
        };
      }
      return group;
    });
    setGroups(updatedGroups);
    setIsEditing(false);
    setSelectedGroup(null);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
    setSelectedGroup(null);
  };

  const handleViewGroup = (groupId) => {
    console.log(`Viewing group with id: ${groupId}`);
    const group = groups.find((group) => group.id === groupId);
    setSelectedGroup(group);
  };

  const handleCloseDetails = () => {
    setSelectedGroup(null);
  };

  return (
    <VStack spacing={4} p={4} width="100%" bg="#020c1b" minHeight="100vh" align="center" position="relative">
      <Heading color="#64ffda" size="lg" textAlign="center">
        Your Groups
      </Heading>
      <Center w="100%">
        <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={4} w="100%">
          {groups.map((group) => (
            <GridItem
              key={group.id}
              bg="#112240"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              textAlign="center"
              position="relative"
            >
              <Center mb={4}>
                <Avatar
                  name={group.name}
                  src={`/path/to/avatar/${group.id}.jpg`}
                  size="2xl"
                />
              </Center>
              <Text color="teal.500">{group.name}</Text>
              <Button
                mt={2}
                colorScheme="teal"
                bg="#64ffda"
                color="#020c1b"
                onClick={() => handleViewGroup(group.id)}
              >
                View Group
              </Button>
              <Button
                mt={2}
                size="sm"
                colorScheme="teal"
                bg="#64ffda"
                color="#020c1b"
                onClick={() => handleEditGroup(group.id)}
              >
                Edit
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Center>
      <Modal isOpen={isEditing} onClose={handleCloseModal}  isCentered>
        <ModalOverlay />
        <ModalContent bg="#112240" color="#64ffda" maxW="60%" maxH="300vh" zIndex="1500" marginTop="120px" marginLeft="200px" borderRadius="10px">
          <ModalHeader>Edit Group</ModalHeader>
          <ModalBody px={6}>
            <FormControl>
              <FormLabel>Group Name</FormLabel>
              <Input
                type="text"
                value={editGroupName}
                onChange={(e) => setEditGroupName(e.target.value)}
                placeholder="Enter group name"
              />
              <FormHelperText color="teal.500">Enter the new name for the group</FormHelperText>
              <FormLabel mt={4}>Description</FormLabel>
              <Input
                type="text"
                value={editGroupDesc}
                onChange={(e) => setEditGroupDesc(e.target.value)}
                placeholder="Enter group description"
              />
              <FormHelperText color="teal.500">Enter the new description for the group</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSaveChanges} bg="#020c1b"
                color="#64ffda">
              Save Changes
            </Button>
            <Button color="#64ffda"variant="outline" onClick={handleCloseModal} bg="#020c1b">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {selectedGroup && (
        <GridItem
          mt={8}
          p={4}
          bg="#112240"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          color="#64ffda"
          width="80%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="10"
        >
          <Heading size="md">{selectedGroup.name} Details</Heading>
          <Avatar
            name={selectedGroup.name}
            src={`/path/to/avatar/${selectedGroup.id}.jpg`}
            size="xl"
            mt={4}
          />
          <Text mt={2}>{selectedGroup.desc}</Text>
          <Text mt={4} fontWeight="bold" color="teal.500">
            Members:
          </Text>
          <VStack mt={2} spacing={1}>
            {selectedGroup.members.map((member, index) => (
              <Text key={index} color="teal.500">
                {member}
              </Text>
            ))}
          </VStack>
          <Button mt={4} colorScheme="teal" onClick={handleCloseDetails} bg="#020c1b"
                color="#64ffda">
            Close Details
          </Button>
        </GridItem>
      )}
    </VStack>
  );
};

export default GroupManagement;
