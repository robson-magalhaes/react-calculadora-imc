import { useState } from 'react';
import Style from './App.module.css';
import { calculateImc, level, levels } from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImg from './assets/leftarrow.png';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState<level | null>(null);

  function handleCalculeButton() {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert('Digite todos os campos!!');
    }
  }
  function handleBackButton(){
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={Style.main}>
      <br />
      <div className={Style.container}>
        <div className={Style.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para indice de massa corporal, medida internacional usada para calcular se uma pessoa está no peso ideal.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder='Digite o seu peso. Ex 75.3 (em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculeButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={Style.rightSide}>
          {!toShow &&
            <div className={Style.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={Style.rightBig}>
              <div className={Style.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImg} alt="" width={25}/>
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;