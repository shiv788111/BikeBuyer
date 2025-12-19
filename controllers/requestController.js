/* ✔ Buyer bike ke liye request bheje
✔ Seller request approve / reject kare

Example APIs:

POST /api/requests

GET /api/requests/seller

PATCH /api/requests/:id/status*/


export const createRequest = async (req, res) => {
  res.json({ message: "Request createsuccessfully" });
};

export const getRequestsByBuyer = async (req, res) => {
  res.json({ message: "Get all requests by Buyer " });
};

export const getRequestsBySeller = async (req, res) => {
  res.json({ message: "Get all requests by Seller fro his vahicle" });
};

export const deleteRequest = async (req, res) => {
  res.json({ message: "Request delete API hit successfully" });
};
