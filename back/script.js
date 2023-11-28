function getAllCampaigns() {
    fetch('http://localhost:3000/api/campaigns')
        .then(response => response.json())
        .then(data => {
            const campaignListContainer = document.getElementById('campaignList');
            campaignListContainer.innerHTML = '';

            data.forEach(campaign => {
                const campaignCard = document.createElement('div');
                campaignCard.classList.add('campaign-card');
                campaignCard.innerHTML = `
                    <a href="./campaign.html?id=${campaign.id}">
                        <article class="article">
                            <img class="item__img" src="${campaign.imageUrl}" alt="${campaign.name}" />
                            <h3 class="productName">${campaign.name}</h3>
                            <p class="productDescription">${campaign.description}</p>
                            <p>Date de début: ${campaign.start_date}</p>
                            <p>Date de fin: ${campaign.end_date}</p>
                            <p>Budget: ${campaign.budget}</p>
                        </article>
                    </a>
                `;
                campaignListContainer.appendChild(campaignCard);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des campagnes:', error));
}