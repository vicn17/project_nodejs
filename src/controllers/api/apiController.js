import pool from "../../config/mysqlDb";

let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `user`");
  return res.status(200).json({ data: rows });
};

let createUserAPI = async (req, res) => {
  let { ur_name, ur_pass } = req.body;

  if (!ur_name || !ur_pass) {
    return res.status(200).json({ message: "ko oke" });
  } else {
    await pool.execute("INSERT INTO `user` (ur_name, ur_pass) VALUES (?, ?)", [
      ur_name,
      ur_pass,
    ]);

    return res.status(200).json({ message: "oke" });
  }
};

let deleteUserAPI = async (req, res) => {
  let ur_id = req.params.ur_id;

  if (!ur_id) {
    res.status(200).json({ message: "ko ok" });
  } else {
    await pool.execute("DELETE FROM `user` WHERE ur_id = ?", [ur_id]);

    res.status(200).json({ message: "ok" });
  }
};

let updateUserAPI = (req, res) => {};

export default { getAllUsers, createUserAPI, deleteUserAPI, updateUserAPI };
