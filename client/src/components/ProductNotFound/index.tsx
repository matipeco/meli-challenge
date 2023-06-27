import productNot from '../../assets/productnot.svg'
import './style.scss'

export const ProductNotFound = ()=>{
  return(
      <div className='product-not__div'>
        <article className='product-not__article'>
          <img src={productNot} alt="" width="20" height="20" />
         <div>
            <p>No hay publicaciones que coincidan con tu búsqueda</p>
            <ul>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Utilizá palabras más genéricas o menos palabras.</li>
            </ul>
          </div> 
        </article>
      </div>
  )
}