import BigNumber from 'bignumber.js'
import {
  convertFromUnits,
  convertToUnits,
  ether,
  fromWei,
  hasValue,
  toEther,
  toWei
} from './big.js'

const assertEquals = (x, y, message) => {
  if (x !== y) {
    console.error(
      '\x1b[31m',
      `Failed (${message}):`,
      'Assertion failed. Expected',
      typeof x,
      x,
      'to equal',
      typeof y,
      y
    )
    return
  }

  console.info(
    '\x1b[0m',
    `Passed (${message}):`,
    typeof x,
    x,
    'equals',
    typeof y,
    y
  )
}

console.clear()
console.log('\nHas Value Tests\n')

assertEquals(hasValue(1), true, 'Accepts number')
assertEquals(hasValue('1'), true, 'Accepts string number')
assertEquals(hasValue('a'), false, 'Rejects invalid string')
assertEquals(hasValue(BigNumber(1)), true, 'Accepts BigNumber')
assertEquals(hasValue(false), false, 'Rejects bool value')
assertEquals(hasValue(true), false, 'Rejects bool value')
assertEquals(hasValue(null), false, 'Rejects null')
assertEquals(hasValue(undefined), false, 'Rejects undefied')
assertEquals(hasValue(NaN), false, 'Rejects NaN')

console.log('Convert to Smallest Unit (returns a big number instance)\n')
assertEquals(
  convertToUnits(123).toNumber(),
  123000000000000000000,
  'Accepts whole number'
)
assertEquals(
  convertToUnits('123').toNumber(),
  123000000000000000000,
  'Accepts whole number as string'
)
assertEquals(
  convertToUnits(123.344565).toNumber(),
  123344565000000000000,
  'Accepts decimal numbers'
)
assertEquals(
  convertToUnits('123.344565').toNumber(),
  123344565000000000000,
  'Accepts decimal numbers as string'
)
assertEquals(convertToUnits(1, 2).toNumber(), 100, '2 decimal places')
assertEquals(convertToUnits(1234.1234, 2).toNumber(), 123412, 'Drops decimals')

console.log('\nConvert from Smallest Unit (returns javascript number) \n')

assertEquals(
  convertFromUnits(convertToUnits(123.344565)),
  123.344565,
  'From Unit'
)
assertEquals(convertFromUnits(12334, 3), 12.334, '3 decimal places')
assertEquals(
  convertFromUnits('12334', 3),
  12.334,
  '3 decimal places, number as string'
)
assertEquals(convertFromUnits(12334, 1), 1233.4, '1 decimal place')
assertEquals(
  convertFromUnits(ether(123456789), 25),
  12.3456789,
  '25 decimal places'
)

console.log('\nTo Wei (returns bignumber instance)\n')
assertEquals(toWei(1.2).toString(), '1200000000000000000', 'to wei')
assertEquals(
  toWei('1.2').toString(),
  '1200000000000000000',
  'to wei, ether as string'
)
assertEquals(
  ether(10023033.23).toString(),
  '10023033230000000000000000',
  'ether function (same as to wei)'
)

console.log('\nFrom fromWei (returns javascript number)\n')
assertEquals(fromWei(1200000000000000000), 1.2, 'from wei')
assertEquals(fromWei('1200000000000000000'), 1.2, 'from wei, as string')
assertEquals(
  toEther('10023033230000000000000000'),
  10023033.23,
  'toEther function (same as from wei)'
)
