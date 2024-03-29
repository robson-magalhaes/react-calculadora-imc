import { level } from '../../helpers/imc';
import style from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: level
}
export function GridItem({ item }: Props) {

    return (
        <div className={style.main} style={{ backgroundColor: item.color }}>
            <div className={style.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={style.gridTitle}>{item.title}</div>
            {item.yourImc && 
                <div className={style.yourImc}>Seu IMC é de {item.yourImc}Kg/m²</div>
            }
            <div className={style.gridInfo}>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>
                    {item.imc[1]}</strong>
            </div>
        </div>
    )
}