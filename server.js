const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const PORT = 3007;

let hospital = [
    {
        id: 1,
        Name: 'ufan-Abasi clinic',
        location: 'akwa Ibom',
        country: 'nigeria',
    },

    {
        id: 2,
        Name: 'sifon care homes',
        location: 'mita school',
        country: 'nigeria',
    },

    {
        id: 3,
        Name: 'shelter care hospital',
        location: 'shelter afrrique',
        country: 'nigeria',
    }

];

// GET endpoint to retrieve all hospitals
app.get('/api/hospitals', (req, res) => {
    res.json(hospital);
});


//create
app.post("/api/hospitals", (req, res) =>{
    const hospital = req.body;
    hospital.push(hospital);
    res.json(hospital);
});



//read
app.get("/api/hospitals/:id", (req, res)=>{
    const hospital = hospital.find(s => s.id === Number(req.params.id));

    res.json(hospital);
});


//update
app.put("/api/hospitals/:id", (req, res) => {
    const hospital = hospital.find(s => s.id === Number (req.params.id));
    hospital.country = req.body.country;
    res.json(hospital);
});


//patch
app.patch("/api/hospitals/:id", (req, res) =>{
    const hospital = hospital.find(s => s.id === Number(req.params.id));
    Object.assign(hospital, req.body);
    res.json(hospital);
});



app.delete("/api/hospitals/:id", (req, res) => {
    const hospitalId = Number(req.params.id);

    hospital = hospital.filter(s => s.id !== hospitalId);

    res.json({
        message: "Hospital deleted successfully"
    });
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});