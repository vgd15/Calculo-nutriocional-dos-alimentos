import './Formulario.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Formulario = () => {
    const [foodName, setFoodName] = useState('');
    const [qtdEmGramas, setQtdEmGramas] = useState('');
    const [nutritionData, setNutritionData] = useState(null);

    const APP_ID = "653f3ff9";
    const APP_KEY = "af58244f25e8226ae26d56f5afe2dc58";

    const buscarNutritionData = () => {
        axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${qtdEmGramas}g%20${foodName}`
            )
            .then(response => {
                setNutritionData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (foodName && qtdEmGramas) {
            buscarNutritionData();
        }
        });

    const handleFoodNameChange = event => {
        setFoodName(event.target.value);
    };

    const handleQtdEmGramasChange = event => {
        setQtdEmGramas(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (foodName && qtdEmGramas) {
            buscarNutritionData();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={foodName}
                    onChange={handleFoodNameChange}
                    placeholder="Escreva o nome do alimento"
                />

                <input
                    type="float"
                    value={qtdEmGramas}
                    onChange={handleQtdEmGramasChange}
                    placeholder="Digite a quantidade em gramas"
                />


                <button type="submit">Obter valores nutricionais</button>
            </form>

            {nutritionData && (
                <div className="informacaoNutricao">
                    <h2>Informações nutricionais</h2>
                    <p> Calorias: {nutritionData.calories / 3}</p>
                    <p>Proteínas: {nutritionData.totalNutrients.PROCNT.quantity / 3 }</p>
                    <p>Gorduras: {nutritionData.totalNutrients.FAT.quantity /3 }</p>
                    <p>Carboidratos: {nutritionData.totalNutrients.CHOCDF.quantity / 3}</p>
                </div>
            )}
        </div>
    );
};

export default Formulario;