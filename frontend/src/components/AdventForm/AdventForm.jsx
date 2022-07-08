import React from 'react'
import { useEffect } from 'react'
import { initInfoAC } from '../../redux/actionCreators/adventAC'
import { useDispatch, useSelector } from 'react-redux'

export default function AdventForm() {
    const dispatch = useDispatch()
   const { info } = useSelector(state => state.advent)
   console.log(info.typeAnimal)

    useEffect(()=> {
        fetch('/getAnimalInfo')
        .then(res => res.json())
        .then(data => dispatch( initInfoAC(data)))

    }, [dispatch])

    const addAdvent = (e) => {
      const data = {
        title: 'Пропал',
        description: e.target.description.value,
        genderAnimal: e.target.gender.value,
        location: e.target.address.value,
        lossTime: e.target.date.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
        nameUser: e.target.nameUser.value,
        cityId: e.target.city.value,
        colorId: e.target.color.value,
        typeId: e.target.animal.value,
      }
      
    }

    


  return (
    <div>
        <form onSubmit={addAdvent}>
           <div>
            <div> Тип животного</div>
            <div> {info.typeAnimal?.map(animal => {
             return <div key={animal.id}>
                <h2>{animal.title}</h2>
                <input type='radio' value={animal.id} name = 'animal'/>
              </div>
            })}</div>
           </div>
           <div>
            <div> Цвет животного </div>
            <div> {info.petColor?.map(el => {
              return <div key={el.id}>
                <h2>{el.title}</h2>
                <input type = 'radio' value={el.id} name = 'color'/>
              </div>
            } )}
            </div>
            </div>
              <div>
                <div> Пол животного </div>
                <div><p>Мальчик</p> <input type='radio' value = 'true' name='gender'/></div>
                <div><p>Девочка</p> <input type='radio' value = 'false' name='gender'/></div>
              </div>
              <div>
                <div>Город</div>
                <select name='city'>{info.city?.map(el => <option key={el.id} value={el.id}>{el.title} </option>)}</select>
              </div>
              <div>
                <div><p>Адрес пропажи</p> <input type='text' name='address'/></div>
              </div>
              <div>
                <div><p>Описание</p> <input type='text' name='description'/></div>
              </div>
              <div>
                <div> Дата и время пропажи </div>
                <div><p>Сейчас</p> <input type='radio' name='date'/></div>
              </div>
              <div>
                <div><p>Имя владельца</p> <input type='text' name='nameUser'/></div>
              </div>
              <div>
                <div><p>Телефон для связи</p> <input type='text' name='phone'/></div>
              </div>
              <div>
                <div><p>Пароль для регистрации</p> <input type='text' name='password'/></div>
              </div>
              <button type='submit'> Отправить форму </button>
        </form>
    </div>
  )
}
