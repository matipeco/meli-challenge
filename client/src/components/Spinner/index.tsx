import './style.scss';
import spinner from '../../assets/spinner.svg';

export const Spinner = ()=>{
  return(
    <div className='spinner__container'>
      <img src={spinner} alt="cargando" width="50" height="50"/>
    </div>
  )
}