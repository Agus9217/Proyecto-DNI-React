import React, { useState } from 'react'
import { Data } from '../Data/Data'
import { CardButton, CardContainer, CardTitle } from '../Style/CardStyles'

const Card = () => {
  const [num, setNum] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setNum(num + 1)
  }
  
  const { title, content, id } = Data
  const dataOne = content[num]
  
  

  return (
    <CardContainer>
      <div>
        <div>
          <CardTitle>{id} - { title }</CardTitle>
        </div>
        <div>
          <p>{dataOne.id} - { dataOne.question }</p>
        </div>
        <form>
        {
          dataOne.allValues.map(item => {
            return(
              <>
                <input type='radio' value={item.value} name='value' />
                <label>{item.text}</label>
              </>
            )
          })
        }
          <CardButton onClick={handleSubmit}>Enviar</CardButton>
        </form>
      </div>
    </CardContainer>
  )
}

export default Card