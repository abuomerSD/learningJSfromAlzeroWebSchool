let cardTitle = "Elzero",
  cardDescription = "Elzero Web School",
  cardDate = "25/10";

let card = `
    <div>
        <h3>Hello ${cardTitle}</h3>
        <p>${cardDescription}</p>
        <span>${cardDate}</span>
    </div>
`;

for (let i = 0; i <= 3; i++) {
  document.write(card);
}
