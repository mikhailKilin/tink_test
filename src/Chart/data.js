export const months = [{
  date: new Date(2015, 0),
  name: 'Январь'
}, {
  date: new Date(2015, 1),
  name: 'Февраль'
}, {
  date: new Date(2015, 2),
  name: 'Март'
}, {
  date: new Date(2015, 3),
  name: 'Апрель'
}, {
  date: new Date(2015, 4),
  name: 'Май'
}, {
  date: new Date(2015, 5),
  name: 'Июнь'
}, {
  date: new Date(2015, 6),
  name: 'Июль'
}, {
  date: new Date(2015, 7),
  name: 'Август'
}, {
  date: new Date(2015, 8),
  name: 'Сентябрь'
}, {
  date: new Date(2015, 9),
  name: 'Октябрь'
}, {
  date: new Date(2015, 10),
  name: 'Ноябрь'
}, {
  date: new Date(2015, 11),
  name: 'Декабрь'
}]

export const generateData = () => {
  let retArray = []
  let endDate = new Date(2016, 0, 1).getTime()
  let incr = 86400000 * 5 //день в миллисекундах * 5
  for (let startDate = new Date(2015, 0, 1).getTime(); startDate <= endDate; startDate += incr) {
    let rand = Math.random()
    retArray.push({
      value: Math.random() * 80,
      date: new Date(startDate),
      percents: (rand > 0.5 ? rand : -rand) * 10
    })
  }
  return retArray
}

export const inclinMonths = ['января', 'февраля', 'марта', 'апреля',
  'мая', 'июня', 'июля', 'августа', 'сентября',
  'октября', 'ноября', 'декабря']