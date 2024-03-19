// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const minutesToWordsMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half',
  };

  // Filter out midnight
  if (time === '0:00') {
    return 'midnight';
  }

  // Filter out midnight
  if (time === '12:00') {
    return 'midday';
  }

  const hours = parseInt(time.split(':')[0]);
  const minutes = parseInt(time.split(':')[1]);
  let timeModifier = '';

  if (minutes === 0) {
    return `${minutesToWordsMap[hours]} o'clock`;
  }

  if (minutes > 30) {
    if (minutes === 45) {
      timeModifier = 'quarter to';
    } else {
      const remainingMinutesToHour = 60 - minutes;
      timeModifier = `${minutesToWordsMap[remainingMinutesToHour]} to`;
    }
    return `${timeModifier} ${minutesToWordsMap[hours + 1]}`;
  }

  if (minutes === 15) {
    timeModifier = 'quarter past';
  } else {
    timeModifier = `${minutesToWordsMap[minutes]} past`;
  }
  return `${timeModifier} ${minutesToWordsMap[hours]}`;
}

module.exports = { convertTimeToWords };
