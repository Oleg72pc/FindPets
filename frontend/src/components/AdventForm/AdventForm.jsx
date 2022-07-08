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

    


  return (
    <div>
        <form>
           <div>
            <div> Тип животного</div>
            <div> {info.typeAnimal.map(animal => {
              return <div>
                <h2>{animal.title}</h2>
                <input type='checkbox'/>
              </div>
            })}</div>
           </div>
           <div>
            <div> Цвет животного </div>
            <div></div>
            </div>


        </form>
    
    </div>
  )
}
