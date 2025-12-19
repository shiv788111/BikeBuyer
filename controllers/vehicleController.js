/* Bike / Scooty related kaam

✔ Bike add
✔ Bike list
✔ Bike status change (available / sold)

Example APIs:

POST /api/vehicles

GET /api/vehicles

PATCH /api/vehicles/:id*/




/*  Vehicle data ek hi hota hai
Buyer aur Seller sirf use karne ka tarika alag hota hai

👉 Isliye same controller functions use honge
👉 Sirf routes alag honge*/



export const upsertVehicle = async (req, res) => {
  res.json({ message: "Seller vehicle create and upadte" });
};

export const deleteVehicle = async (req, res) => {
  res.json({ message: "Seller vehicle delete " });
};

export const getAllVehicles = async (req, res) => {
  res.json({ message: "Get all vehicles API " });
};

export const getVehicleById = async (req, res) => {
  res.json({ message: "Get vehicle by ID API " });
};
