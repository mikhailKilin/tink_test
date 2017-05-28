export class TimeScale {
  constructor() {
    this.domain = {
      start: 0,
      end: 1
    }
    this.range = {
      start: 0,
      end: 1
    }
  }

  setDomain(domain) {
    let startDate = domain[0].getTime()
    let endDate = domain[1].getTime()
    this.domain = {
      start: startDate,
      end: endDate
    }
    return this
  }

  setRange(range) {
    this.range = {
      start: range[0],
      end: range[1]
    }
    return this
  }

  map(date) {
    let currDateTime = date.getTime()
    let normalization = (currDateTime - this.domain.start ) / (this.domain.end - this.domain.start)
    let denormalization = this.range.start + normalization * (this.range.end - this.range.start)
    return denormalization
  }
}

export class LineScale {
  constructor() {
    this.domain = {
      start: 0,
      end: 1
    }
    this.range = {
      start: 0,
      end: 1
    }
  }

  setDomain(domain) {
    this.domain = {
      start: domain[0],
      end: domain[1]
    }
    return this
  }

  setRange(range) {
    this.range = {
      start: range[0],
      end: range[1]
    }
    return this
  }

  map(value) {
    let normalization = (value - this.domain.start ) / (this.domain.end - this.domain.start)
    let denormalization = this.range.start + normalization * (this.range.end - this.range.start)
    return denormalization
  }
}

export const generateData = () => {
  let retArray = []
  let endDate = new Date(2016, 0, 1).getTime()
  let incr = 86400000 * 5 //день в миллисекундах * 5
  for (let startDate = new Date(2015, 0, 1).getTime(); startDate <= endDate; startDate += incr) {
    retArray.push({
      value: Math.random() * 80,
      date: new Date(startDate),
      percents: Math.random() * 10
    })
  }
  return retArray
}

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


export const max = (data) => {
  return Math.max.apply(null, data)
}
