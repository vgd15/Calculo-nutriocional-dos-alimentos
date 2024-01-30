import "./Formulario.css";
import React, { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [inputs, setInputs] = useState([{ foodName: "", qtdEmGramas: "" }]);
  const [nutritionData, setNutritionData] = useState([]);

  const APP_ID = "3dd04ec0";
  const APP_KEY = "67c774ae45097e6080a07521d50f6395	";

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const buscarNutritionData = () => {
    const promises = inputs.map(({ foodName, qtdEmGramas }) => {
      return axios.get(
        `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${encodeURIComponent(
          qtdEmGramas + "g " + foodName
        )}`
      );
    });

    Promise.all(promises)
      .then((responses) => {
        const nutritionData = responses.map((response) => response.data);
        setNutritionData(nutritionData);
        console.log(nutritionData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddInput = () => {
    setInputs([...inputs, { foodName: "", qtdEmGramas: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarNutritionData();
  };

  const calcularSomaCalorias = () => {
    let somaCalorias = 0;
    for (const data of nutritionData) {
      somaCalorias += data.calories;
    }
    return Math.round(somaCalorias / 2.5);
  };

  const calcularSomaProteinas = () => {
    let somaProteinas = 0;
    for (const data of nutritionData) {
      somaProteinas += data.totalNutrients.PROCNT.quantity;
    }
    return Math.round(somaProteinas);
  };

  const calcularSomaGordura = () => {
    let somaGordura = 0;
    for (const data of nutritionData) {
      somaGordura += data.totalNutrients.FAT.quantity;
    }
    return Math.round(somaGordura / 3);
  };

  const calcularSomaCarb = () => {
    let somaCarb = 0;
    for (const data of nutritionData) {
      somaCarb += data.totalNutrients.CHOCDF.quantity;
    }
    return Math.round(somaCarb / 3);
  };

  return (
    <div className="Container-input">
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div className="Container-caixa-texto" key={index}>
            <input
              className="Input"
              type="text"
              name="foodName"
              value={input.foodName}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Write the name of the food here"
            />
            <input
              className="Input"
              type="float"
              name="qtdEmGramas"
              value={input.qtdEmGramas}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Serving size in grams"
            />
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddInput}>
        Add more one option
        </button>
        <button type="submit" disabled={inputs.length === 0}>
        Get Nutritional Values
        </button>
      </form>
      <div className="informacaoNutricao">
        <h2>Nutrition facts</h2>
        {nutritionData && (
          <div>
            <p>Calories: {calcularSomaCalorias() * 2}</p>
            <p>Total Proteins: {calcularSomaProteinas()}</p>
            <p>Total Fat: {calcularSomaGordura()}</p>
            <p>Total Carbohidrates: {calcularSomaCarb()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Formulario;
