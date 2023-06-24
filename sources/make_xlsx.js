

// Require library
var excel = require('excel4node');


// Create a new instance of a Workbook class
var workbook = new excel.Workbook();

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Sheet 1');

let rowInd = 1;

/**
 * RESTAURANTS
 * Given list of prompts, and a mapping of restaurant -> menu items,
 * generates an XLSX with possible question/answers.
 */
const prompts = require('./known_burgers/prompts');
const mapping = require('./known_burgers/restaurant_menu_map.json');

const restaurants = Object.keys(mapping);

for (let i = 0; i < prompts.length; i+=2) {
  for (let j = 0; j < restaurants.length; j++) {
    const items = mapping[restaurants[j]];

    for (let k = 0; k < items.length; k++) {

      const a = (prompts[i] + "").replace('${item}', items[k]);
      worksheet.cell(rowInd, 2).string(restaurants[j]);
      worksheet.cell(rowInd, 1).string(a)
      ++rowInd;

      const b = (prompts[i] + "").replace('${item}', 'the ' + items[k]);

      worksheet.cell(rowInd, 2).string(restaurants[j]);
      worksheet.cell(rowInd, 1).string(b)
      ++rowInd;

      const c = (prompts[i] + "").replace('${item}', 'a ' + items[k]);

      worksheet.cell(rowInd, 2).string(restaurants[j]);
      worksheet.cell(rowInd, 1).string(c)
      ++rowInd;

      const d = (prompts[i] + "").replace('${item}', 'an ' + items[k]);

      worksheet.cell(rowInd, 2).string(restaurants[j]);
      worksheet.cell(rowInd, 1).string(d)
      ++rowInd;
    }

  }
}

/**
 * ADVICE
 * Given list of advice and their mappings, generate XLSX.
 * Replace hamburger -> burger -> cheeseburger
 * Replace patty -> patties -> burger -> burgers -> meat
 * Replace bun -> buns -> bread -> breads
 */
const advice = require('./burger_advice/advice_mapping.json');
const question = require('./burger_advice/question_mapping.json');

const adviceKeys = Object.keys(advice);

for (let i = 0; i < adviceKeys.length; i++) {
  const possibleUserQuestions = question[adviceKeys[i]];

  for (let j = 0; j < possibleUserQuestions.length; j++) {

    const origQ = possibleUserQuestions[j] + "";
    const possibleAnswers = advice[adviceKeys[i]];

    for (let k = 0; k < possibleAnswers.length; k++) {

      worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
      worksheet.cell(rowInd, 1).string(origQ)
      ++rowInd;

      if (origQ.includes('burger')) {
        const hamburger = (origQ + "").replace('burger', 'hamburger');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(hamburger)
        ++rowInd;        

        const cheeseburger = (origQ + "").replace('burger', 'cheeseburger');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(cheeseburger)
        ++rowInd;        
      }

      if (origQ.includes('patty')) {
        const patties = (origQ + "").replace('patty', 'patties');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(patties)
        ++rowInd;        

        const pattyToBurger = (origQ + "").replace('patty', 'burger');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(pattyToBurger)
        ++rowInd;        

        const pattyToBurgers = (origQ + "").replace('patty', 'burgers');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(pattyToBurgers)
        ++rowInd;        

        const pattyToMeat = (origQ + "").replace('patty', 'meat');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(pattyToMeat)
        ++rowInd;        
      }
      
      if (origQ.includes('bun')) {
        const bunToBuns = (origQ + "").replace('bun', 'buns');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(bunToBuns)
        ++rowInd;        

        const bunToBread = (origQ + "").replace('bun', 'bread');
        worksheet.cell(rowInd, 2).string(possibleAnswers[k]);
        worksheet.cell(rowInd, 1).string(bunToBread)
        ++rowInd;        
      }
    }
  }
}



workbook.write('known_burgers.xlsx');