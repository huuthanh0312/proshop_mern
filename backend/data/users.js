import bcrypt from "bcryptjs";

const users = [
  {
    name: "AdminThanh",
    email: "thanhadmin@gmail.com",
    password: bcrypt.hashSync("Thanh1234", 10),
    isAdmin: true,
  },
  {
    name: "Thanh Nguyen",
    email: "thanhuser@gmail.com",
    password: bcrypt.hashSync("Thanh1234", 10),
    isAdmin: false,
  },
  {
    name: "Daisy Nguyen",
    email: "daisy@gmail.com",
    password: bcrypt.hashSync("Thanh1234", 10),
    isAdmin: false,
  },
];

export default users;
