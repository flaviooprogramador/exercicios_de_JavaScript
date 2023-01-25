
import dayjs from 'dayjs';

function birthday(date){
  const birthday =  dayjs(date)
  const  today = dayjs()

  const ageInYears = today.diff(birthday, 'year')
  const netBirthday  = birthday.add(ageInYears + 1)
  const daysToNextBirthday = netBirthday.diff(today,'day') + 1

  

  console.log(`idade ${ageInYears}`)
  console.log(`Proximo aniversario ${netBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos:${daysToNextBirthday}`)
}

birthday('2004-08-19')
