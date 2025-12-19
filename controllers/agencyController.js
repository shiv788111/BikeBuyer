/* Seller / Agency related kaam

✔ Seller apni agency banaye
✔ Agency details dekhe

Example APIs:

POST /api/agency/create

GET /api/agency/get */


// controllers/agencyController.js

export const upsertAgency = async (req, res) => {
  res.json({ message: "Agency create/update API hit successfully" });
};

export const getAgencyById = async (req, res) => {
  res.json({ message: "Get Agency by ID API hit successfully" });
};

export const getAgencyByUser = async (req, res) => {
  res.json({ message: "Get Agency by User ID API hit successfully" });
};



export const deleteAgency = async (req, res) => {
  res.json({ message: "Agency delete  successfully" });
};