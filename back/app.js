
const express = require('express');
const campaignsData = require('./campaigns.js'); 
const app = express();
const port = 3000;

// route 1
app.get('/api/campaigns', (req, res) => {
    res.json(campaignsData);
});

// route 2
app.get('/api/campaigns/:id', (req, res) => {
    const campaignId = parseInt(req.params.id, 10); 

    const campaign = campaignsData.find(campaign => campaign.id === campaignId);

    if (!campaign) {
        return res.status(404).json({ message: 'Campagne non trouvée' });
    }

    res.json(campaign);
});

// route 3
app.use(bodyParser.json());

app.post('/api/campaigns', (req, res) => {
    const { name, description, start_date, end_date, budget } = req.body;

    if (!name || !description || !start_date || !end_date || !budget) {
        return res.status(400).json({ message: 'Toutes les données requises doivent être fournies' });
    }

    const newCampaignId = campaignsData.length + 1;

    const newCampaign = {
        id: newCampaignId,
        name,
        description,
        start_date,
        end_date,
        budget
    };

    campaignsData.push(newCampaign);

    res.status(201).json(newCampaign);
});


app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
