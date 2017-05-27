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