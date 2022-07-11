import React from 'react'
import { useEffect } from 'react'
import { initInfoAC } from '../../redux/actionCreators/advertsAC'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, postFetchAddAdventAC } from '../../redux/thunk/thunk'
import { useParams } from 'react-router-dom'

export default function AdventForm() {
    const dispatch = useDispatch()
   const { info, photo } = useSelector(state => state.advertRed)
 
   let {name} = useParams()

    useEffect(()=> {
        fetch('/getAnimalInfo')
        .then(res => res.json())
        .then(data => dispatch( initInfoAC(data)))

    }, [dispatch])

    const addAdvent = (e) => {
      let dTime = ''
      if(e.target.dateTime.value){
        dTime = e.target.dateTime.value
      } else {
        dTime = new Date()
      }
      let data = {}
      if(name === 'missing'){
      data = {
        title: name,
        description: e.target.description.value,
        genderAnimal: e.target.gender.value,
        location: e.target.address.value,
        lossTime: dTime,
        spenTime: null,
        password: e.target.password.value,
        phone: e.target.phone.value,
        nameUser: e.target.nameUser.value,
        cityId: e.target.city.value,
        colorId: e.target.color.value,
        typeId: e.target.animal.value,
        photo
      }
    } else {
      data = {
        title: name,
        description: e.target.description.value,
        genderAnimal: null,
        location: e.target.address.value,
        lossTime: null,
        spenTime: dTime,
        password: null,
        phone: null,
        nameUser: null,
        cityId: e.target.city.value,
        colorId: e.target.color.value,
        typeId: e.target.animal.value,
        photo
    }
  }
      dispatch(postFetchAddAdventAC(data))
    }

    const sendFiles = async (e) => {
      const picturesData = [...e.target.files];
      try {
        const data = new FormData();
        picturesData.forEach((img) => {
          data.append("homesImg", img);
        });
        dispatch(addPhoto(data))
      } catch (error) {}
    };

    


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
            {name === 'missing' && 
              <div>
                <div> Пол животного </div>
                <div><p>Мальчик</p> <input type='radio' value = 'true' name='gender'/></div>
                <div><p>Девочка</p> <input type='radio' value = 'false' name='gender'/></div>
              </div>
}
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
                <div><p>Загрузить фото</p> <input type="file" multiple onChange={sendFiles} placeholder="Фото" autoComplete="off" /></div>
              </div>
              <div>
                <div> Дата и время пропажи </div>
                <input name='dateTime' />
                <div><p>Сейчас</p> <input type='radio' name='date'/></div>
              </div>
              {name === 'missing' &&  
             <>
             <div>
                <div><p>Имя владельца</p> <input type='text' name='nameUser'/></div>
              </div>
              <div>
                <div><p>Телефон для связи</p> <input type='text' name='phone'/></div>
              </div>
              <div>
                <div><p>Пароль для регистрации</p> <input type='text' name='password'/></div>
              </div>
              </>
}
              <button type='submit'> Отправить форму </button>
        </form>
    </div>
  )
}
