//* Connect database
import pool from "../../config/mysqlDb";

//* Get home page
let getHomePage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `user`");
  return res.render("../views", { dataUser: rows });
};

//* Get detail user page
let getDetailPage = async (req, res) => {
  const [row, fields] = await pool.execute(
    "SELECT * FROM `user` WHERE `ur_id` = ?",
    [req.params.ur_id]
  );
  return res.render("../views", { dataUser: row });
};

//* Get form add user
let formAddUser = async (req, res) => {
  return res.render("../views/formUser");
};

//* Add new user
let addNewUser = async (req, res) => {
  let { ur_name, ur_pass } = req.body;

  await pool.execute("INSERT INTO `user` (ur_name, ur_pass) VALUES (?, ?)", [
    ur_name,
    ur_pass,
  ]);

  return res.redirect("/");
};

//* Delete user
let deleteUser = async (req, res) => {
  let ur_id = req.params.ur_id;

  await pool.execute("DELETE FROM `user` WHERE ur_id = ?", [ur_id]);

  res.redirect("/");
};

//* Get admin page
let getAdminPage = (req, res) => {
  //* Logic
  return res.render("../views/admin");
};

//* Get introduce page
let getIntroducePage = (req, res) => {
  //* Logic
  return res.render("../views/introduce");
};

//* Pages public
const publicDefault = [
  {
    url: "/",
    file: getHomePage,
    layout: true,
  },
  {
    url: "/user/:ur_id",
    file: getDetailPage,
    layout: false,
  },
  {
    url: "/formAddUser",
    file: formAddUser,
    layout: false,
  },
  {
    url: "/addUser",
    file: addNewUser,
    layout: false,
    method: "post",
  },
  {
    url: "/delete-user/:ur_id",
    file: deleteUser,
    layout: false,
  },
  {
    url: "/admin",
    file: getAdminPage,
    layout: false,
  },
  {
    url: "/introduce",
    file: getIntroducePage,
    layout: true,
  },
];

export default publicDefault;
