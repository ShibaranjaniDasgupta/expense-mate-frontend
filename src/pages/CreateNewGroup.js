// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack,HStack,Heading } from '@chakra-ui/react';

// const CreateNewGroup = () => {
//   const [groupName, setGroupName] = useState('');
//   const [description, setDescription] = useState('');
//   const [members, setMembers] = useState([{ name: '', phone: '' }]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({
//       groupName,
//       description,
//       members
//     });
//   };
//   const handleMemberChange = (index, field, value) => {
//     const newMembers = members.map((member, i) => {
//       if (i === index) {
//         return { ...member, [field]: value };
//       }
//       return member;
//     });
//     setMembers(newMembers);
//   };

//   const addMember = () => {
//     setMembers([...members, { name: '', phone: '' }]);
//   };


//   return (
//     <Box
//       p={4}
//       bg="#020c1b"
//       color="#64ffda"
//       minH="100vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Box
//         p={6}
//         bg="#020c1b"
//         borderRadius="md"
//         boxShadow="md"
//         maxWidth="500px"
//         width="100%"
//         color="#64ffda"
//       >
//         <Heading as="h1" size="lg" mb={6} textAlign="center" color="#64ffda">
//           Create New Group
//         </Heading>
//         <form onSubmit={handleSubmit}>
//           <VStack spacing={6}>
//           <FormControl id="groupName" isRequired>
//             <FormLabel color={`#64ffda`}>Group Name</FormLabel>
//             <Input
//               type="text"
//               value={groupName}
//               onChange={(e) => setGroupName(e.target.value)}
//               placeholder='Enter group name'
//               color="black"
//               bg="white"
//             />
//           </FormControl>
//           <FormControl id="description">
//             <FormLabel color={`#64ffda`}>Description</FormLabel>
//             <Textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder='Enter group description'
//               color="black"
//               bg="white"
//             />
//           </FormControl>
//           <FormControl id="members" isRequired>
//               <FormLabel color="#64ffda">Members</FormLabel>
//               {members.map((member, index) => (
//                 <HStack key={index} spacing={4}>
//                   <Input
//                     placeholder="Enter member name"
//                     color="black"
//                     bg="white"
//                     md={4}
//                     value={member.name}
//                     onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
//                   />
//                   <Input
//                     placeholder="Enter phone number"
//                     color="black"
//                     bg="white"
//                     md={4}
//                     value={member.phone}
//                     onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
//                   />
//                 </HStack>
//               ))}
//               <Button colorScheme="teal" onClick={addMember} mt={4}>
//                 Add Member
//               </Button>
//             </FormControl>
//           <Button type="submit" colorScheme="teal">Create Group</Button>
//           </VStack>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default CreateNewGroup;



/* with box
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, HStack, Heading } from '@chakra-ui/react';

const CreateNewGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState([{ name: '', phone: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      groupName,
      description,
      members
    });
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = members.map((member, i) => {
      if (i === index) {
        return { ...member, [field]: value };
      }
      return member;
    });
    setMembers(newMembers);
  };

  const addMember = () => {
    setMembers([...members, { name: '', phone: '' }]);
  };

  return (
    <Box
      p={4}
      bg="#112240"  // Background color
      color="#64ffda"  // Text color
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p={6}
        bg="#112240"  // Background color
        borderRadius="md"
        boxShadow="md"
        maxWidth="500px"
        width="100%"
        color="#64ffda"  // Text color
      >
        <Heading as="h1" size="lg" mb={6} textAlign="center" marginTop={0}>
          Create New Group
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl id="groupName" isRequired>
              <FormLabel>Group Name</FormLabel>
              <Input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder='Enter group name'
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Enter group description'
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl id="members" isRequired>
              <FormLabel>Members</FormLabel>
              {members.map((member, index) => (
                <HStack key={index} spacing={4}>
                  <Input
                    placeholder="Enter member name"
                    color="black"
                    bg="white"
                    md={4}
                    value={member.name}
                    onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                  />
                  <Input
                    placeholder="Enter phone number"
                    color="black"
                    bg="white"
                    md={4}
                    value={member.phone}
                    onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                  />
                </HStack>
              ))}
              <Button colorScheme="teal" onClick={addMember} mt={4}>
                Add Member
              </Button>
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Create Group
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default CreateNewGroup;*/


import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, HStack, Heading } from '@chakra-ui/react';

const CreateNewGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState([{ name: '', phone: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      groupName,
      description,
      members
    });
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = members.map((member, i) => {
      if (i === index) {
        return { ...member, [field]: value };
      }
      return member;
    });
    setMembers(newMembers);
  };

  const addMember = () => {
    setMembers([...members, { name: '', phone: '' }]);
  };

  return (
      <Box
        p={6}
        bg="#0a192f"  // Background color
        color="#64ffda"  // Text color
        minH="60vh"
        borderRadius="md"
        boxShadow="xl"
        maxWidth="600px"
        width="100%"
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Create New Group
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl id="groupName" isRequired>
              <FormLabel>Group Name</FormLabel>
              <Input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder='Enter group name'
                color="#64ffda"
                bg="#0a192f"
                borderColor="#64ffda"
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Enter group description'
                color="#64ffda"
                bg="#0a192f"
                borderColor="#64ffda"
                
              />
            </FormControl>
            <FormControl id="members" isRequired>
              <FormLabel>Members</FormLabel>
              {members.map((member, index) => (
                <HStack key={index} spacing={4} width="100%">
                  <Input
                    placeholder="Enter member name"
                    color="#64ffda"
                    bg="#0a192f"
                    borderColor="#64ffda"
                    value={member.name}
                    onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                  />
                  <Input
                    placeholder="Enter phone number"
                    color="#64ffda"
                    bg="#0a192f"
                    borderColor="#64ffda"
                    value={member.phone}
                    onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                  />
                </HStack>
              ))}
              <Button
                bg="#64ffda"
                color="#020c1b"
                _hover={{ bg: "#64ffda", color: "#020c1b" }}
                onClick={addMember}
                mt={4}
                width="full"
              >
                Add Member
              </Button>
            </FormControl>
            <Button
              type="submit"
              bg="#64ffda"
              color="#020c1b"
              _hover={{ bg: "#64ffda", color: "#020c1b" }}
              width="full"
            >
              Create Group
            </Button>
          </VStack>
        </form>
      </Box>
  );
};

export default CreateNewGroup;
