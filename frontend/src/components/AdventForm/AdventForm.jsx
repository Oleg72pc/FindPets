import React, { useState } from 'react'
import { useEffect } from 'react'
import { initInfoAC } from '../../redux/actionCreators/advertsAC'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, postFetchAddAdventAC } from '../../redux/thunk/thunk'
import { useNavigate, useParams } from 'react-router-dom'
import { addFormUserErrorFalseAC } from '../../redux/actionCreators/userAC'
import './AdvertForm.css'

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
    <form onSubmit={addAdvent} className="containerForm">
      <div className="filterType">
        <div className="animalsfilter">
          <div> Тип животного</div>
          <div className="inlinekr" action="#">
            {' '}
            {info.typeAnimal?.map((animal) => (
              <p key={animal.id}>
                <label>
                  <input value={animal.id} name="animal" type="radio" />
                  <span>{animal.title}</span>
                </label>
              </p>
            ))}
          </div>
        </div>
        <div className="animalsfilter">
          <div> Цвет животного </div>
          <div className="inlinekr" action="#">
            {' '}
            {info.petColor?.map((color) => (
              <p key={color.id}>
                <label>
                  <input value={color.id} name="color" type="radio" />
                  <span>{color.title}</span>
                </label>
              </p>
            ))}
          </div>
        </div>
        <div className="animalsfilter">
          <div> Пол животного </div>
          {name === 'missing' && (
            <div className="inlinekr" action="#">
              <p>
                <label>
                  <div></div>
                  <input value="true" name="gender" type="radio" />
                  <span>Мальчик</span>
                </label>
              </p>
              <p>
                <label>
                  <input value="false" name="gender" type="radio" />
                  <span>Девочка</span>
                </label>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="inlinekr">
        <div className="inlinekr1">
          <div className="titlenum2">Город</div>
          <select name="city" className="browser-default">
            {info.city?.map((el) => (
              <option key={el.id} value={el.id}>
                {el.title}
              </option>
            ))}
          </select>
        </div>

        {name === 'missing' ? (
          <div className="titlenum2">
            <p>Пропал по адресу:</p>
          </div>
        ) : (
          <div className="titlenum2">
            <p>Нашелся по адресу:</p>{' '}
          </div>
        )}
        <div>
          <input type="text" name="address" />
        </div>
      </div>
      <div>
        <div className="titlenum2">
          <p>Описание</p> <input type="text" name="description" />
        </div>
      </div>
      <div>
        <div>
          <p>Загрузить фото</p>{' '}
          <input
            type="file"
            multiple
            onChange={sendFiles}
            placeholder="Фото"
            autoComplete="off"
          />
        </div>
      </div>
      <div>
        {name === 'missing' ? (
          <div className="titlenum2">
            <p> Дата и время пропажи:</p>
          </div>
        ) : (
          <div className="titlenum2">
            <p> Дата и время находки:</p>
          </div>
        )}
        <input defaultValue={state} type="datetime-local" name="dateTime" required />
      </div>
      {name === 'missing' && !user && (
        <>
          <div>
            <div className="titlenum2">
              <p>Имя владельца</p> <input type="text" name="nameUser" />
            </div>
          </div>
          <div>
            <div className="titlenum2">
              <p>Телефон для связи</p> <input type="text" name="phone" />
            </div>
          </div>
          <div>
            <div className="titlenum2">
              <p>Пароль для регистрации</p> <input type="password" name="password" />
            </div>
          </div>
        </>
      )}
      <button className='btn' type="submit"> Отправить форму </button>
      {errorREGFORM && <div className="error-massage">{errorREGFORM}</div>}
    </form>
  );
}
