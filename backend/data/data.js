const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "Nasir Hasan",
          email: "Nasir@example.com",
        },
        {
          name: "Ashik",
          email: "Ashik@example.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "Nasir Hasan",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@example.com",
        },
        {
          name: "Ashik",
          email: "Ashik@example.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Guest User",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Mina",
          email: "Minay@example.com",
        },
        {
          name: "Ashik",
          email: "Ashik@example.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Mina",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Nasir",
          email: "nasir@example.com",
        },
        {
          name: "Ashik",
          email: "ashik@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Nasir",
          email: "nasir@example.com",
        },
        {
          name: "Ashik",
          email: "ashik@example.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Nasir",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Nasir",
          email: "nasir@example.com",
        },
        {
          name: "Ashik",
          email: "ashik@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Chill Zone",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
  ];

    module.exports=chats
