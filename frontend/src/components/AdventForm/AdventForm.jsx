import React, { useState } from 'react'
import { useEffect } from 'react'
import { initInfoAC } from '../../redux/actionCreators/advertsAC'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, postFetchAddAdventAC } from '../../redux/thunk/thunk'
import { useNavigate, useParams } from 'react-router-dom'
import { addFormUserErrorFalseAC } from '../../redux/actionCreators/userAC'

export default function AdventForm() {
  const [state] = useState('')
  const dispatch = useDispatch()
  const { info, photo } = useSelector(state => state.advertRed)
  const {errorREGFORM} = useSelector((state) => state.userRed);
    const navigation = useNavigate();
  const user = useSelector((state) => state.userRed.user);
  let { name } = useParams()
  useEffect(() => {
    fetch('/getAnimalInfo')
      .then(res => res.json())
      .then(data => dispatch(initInfoAC(data)))
      dispatch(addFormUserErrorFalseAC())

  }, [dispatch])
  

  const addAdvent = (e) => {
     e.preventDefault()
    const filter = info.city.filter((el) => el.id === +e.target.city.value)
    let data = {}
    if (name === 'missing' && !user) {
      if (photo) {
        data = {
          title: 'Потерялся',
          description: e.target.description.value,
          genderAnimal: e.target.gender.value,
          location: `${filter[0].title}, ${e.target.address.value}`,
          lossTime: e.target.dateTime.value,
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
          title: 'Потерялся',
          description: e.target.description.value,
          genderAnimal: e.target.gender.value,
          location: `${filter[0].title}, ${e.target.address.value}`,
          lossTime: e.target.dateTime.value,
          spenTime: null,
          password: e.target.password.value,
          phone: e.target.phone.value,
          nameUser: e.target.nameUser.value,
          cityId: e.target.city.value,
          colorId: e.target.color.value,
          typeId: e.target.animal.value,
        }
      }
    } else {
      if (photo) {
        data = {
          title: 'Нашелся',
          description: e.target.description.value,
          genderAnimal: null,
          location: `${filter[0].title}, ${e.target.address.value}`,
          lossTime: null,
          spenTime: e.target.dateTime.value,
          password: null,
          phone: null,
          nameUser: null,
          cityId: e.target.city.value,
          colorId: e.target.color.value,
          typeId: e.target.animal.value,
          photo
        }
      } else {
        data = {
          title: 'Нашелся',
          description: e.target.description.value,
          genderAnimal: null,
          location: `${filter[0].title}, ${e.target.address.value}`,
          lossTime: null,
          spenTime: e.target.dateTime.value,
          password: null,
          phone: null,
          nameUser: null,
          cityId: e.target.city.value,
          colorId: e.target.color.value,
          typeId: e.target.animal.value,
        }
      }
    }
    dispatch(postFetchAddAdventAC(data))
    navigation('/adverts');
    
  }

  const sendFiles = async (e) => {
    const picturesData = [...e.target.files];
    try {
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append("homesImg", img);
      });
      dispatch(addPhoto(data))
    } catch (error) { }
  };




  return (
    <form onSubmit={addAdvent} className='container'>
      <div> Тип животного</div>
      <div action="#"> {info.typeAnimal?.map(animal => (
        // <div key={animal.id}>
        //   <h2>{animal.title}</h2>
        //   <input type='radio' value={animal.id} name = 'animal'/>
        // </div>
        <p key={animal.id}>
          <label>
            <input value={animal.id} name="animal" type="radio" />
            <span>{animal.title}</span>
          </label>
        </p>
      ))}
      </div>



      <div> Цвет животного </div>
      <div action="#"> {info.petColor?.map(color => (
        //   <div key={el.id}>
        //   <h2>{el.title}</h2>
        //   <input type = 'radio' value={el.id} name = 'color'/>
        // </div>
        <p key={color.id}>
          <label>
            <input value={color.id} name="color" type="radio" />
            <span>{color.title}</span>
          </label>
        </p>
      ))}
      </div>

      {name === 'missing' && (
               <div action="#">
                <div> Пол животного </div>
               
                      <p>
                    <label>
                      <input value='true' name="gender" type="radio"  />
                      <span>Мальчик</span>
                    </label>
                    </p>
                    <p>
                    <label>
                      <input value='false' name="gender" type="radio"  />
                      <span>Девочка</span>
                    </label>
                    </p>
                {/* <p>Мальчик</p> <input type='radio' value = 'true' name='group1'/>
                <p>Девочка</p> <input type='radio' value = 'false' name='group1'/> */}
                </div>

      )}
      <div>
        <div>Город</div>
        <select name='city' className="browser-default">
          {info.city?.map(el => <option  key={el.id} value={el.id}>{el.title}</option>)}
        </select>
        {/* <select name='city'>{info.city?.map(el => <option key={el.id} value={el.id}>{el.title} </option>)}</select> */}
      </div>
      
      {name === 'missing' ? 
      (<div><p>Пропал по адресу:</p></div> )
        :
      (<div><p>Нашелся по адресу:</p> </div>)
      }
      <div><input type='text' name='address' /></div>
      
      <div>
        <div><p>Описание</p> <input type='text' name='description' /></div>
      </div>
      <div>
        <div><p>Загрузить фото</p> <input type="file" multiple onChange={sendFiles} placeholder="Фото" autoComplete="off" /></div>
      </div>
      <div>
      {name === 'missing' ? 
      (<div><p> Дата и время пропажи:</p></div>)
        :
      (<div><p> Дата и время находки:</p></div>)
      }
      {/* <p>Time</p>
          <input className="bodyCard_input" type="datetime-local" name="date" /> */}
        {/* <div> Дата и время пропажи </div> */}
        <input defaultValue={state} type="datetime-local" name='dateTime' required/>
        {/* <div>
          <p>
            <label>
              <input onChange={() => setState(new Date())} type='radio' name='date' />
              <span>Сейчас</span>
            </label>
          </p>
        </div> */}
        {/* <div><p>Сейчас</p> <input onChange={() => setState(new Date())} type='radio' name='date'/></div> */}
      </div>
      {
    name === 'missing' && !user && (
      <>
        <div>
          <div><p>Имя владельца</p> <input type='text' name='nameUser' /></div>
        </div>
        <div>
          <div><p>Телефон для связи</p> <input type='text' name='phone' /></div>
        </div>
        <div>
          <div><p>Пароль для регистрации</p> <input type='password' name='password' /></div>
        </div>
      </>
    )
  }
  <button type='submit'> Отправить форму </button> 
  {errorREGFORM && <div className="error-massage">{errorREGFORM}</div>}
    </form >

  )
}
