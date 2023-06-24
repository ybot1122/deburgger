/**
 * Given list of prompts, and a mapping of restaurant -> menu items,
 * generates an XLSX with possible question/answers.
 */

// Require library
var excel = require('excel4node');

const prompts = require('./prompts');
const mapping = require('./restaurant_menu_map.json');

// Create a new instance of a Workbook class
var workbook = new excel.Workbook();

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Sheet 1');

const restaurants = Object.keys(mapping);

let rowInd = 1;
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

workbook.write('known_burgers.xlsx');