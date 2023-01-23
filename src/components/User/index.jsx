import React from 'react'
import s from "./style.module.css"

export default function User({id,name,lastname,age,employee,deleteUser}) {
  return (
    <div className={s.card}>
        <p> <span className={s.text}>Имя: </span>{name}</p>
        <p> <span className={s.text}>Фамилия: </span>{lastname}</p>
        <p> <span className={s.text}>Возраст: </span>{age}</p>
        <p> <span className={s.text}>Должность: </span>{employee}</p>
        <button className={s.btn} onClick={() => deleteUser(id)}>Удалить</button>
    </div>
    
  )
}
