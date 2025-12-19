/* Authentication related kaam

✔ Register
✔ Login
✔ JWT generate

Example APIs:

POST /api/auth/register

POST /api/auth/login */


export async function register(req, res) {
  return res.status(200).json({
    success: true,
    message: "Register API working"
  });
}


export async function login(req, res) {
  return res.status(200).json({
    success: true,
    message: "Login successfull"
  });
}



export async function logout(req, res) {
  return res.status(200).json({
    success: true,
    message: "logout successfull"
  });
}



export async function getProfile(req, res) {
  return res.status(200).json({
    success: true,
    message: "Profile fetch successfull"
  });
}
