/**
 * @author Di Wang on 18/11/19.
 */
const fs = require('fs');
const path = require('path');

function createFolder(componentName) {
  if (!componentName || componentName.length <= 0) {
    return console.error('Component name is required.');
  }

  const root = path.resolve(__dirname, '../');
  fs.mkdirSync(`${root}/components/${componentName}`);
  const fileName = `${root}/components/${componentName}/index.tsx`;
  fs.copyFileSync(`${root}/_template/index.tsx`, fileName);

  let content = fs.readFileSync(fileName, { encoding: 'utf-8' });
  let replacement = componentName;
  if (componentName.includes('-')) {
    const nameArray = componentName.split('-');
    replacement = nameArray.reduce((total, item) => {
      total += item.charAt(0).toUpperCase() + item.slice(1);
      return total;
    }, '');
  }
  content = content.replace(new RegExp('X', 'g'), replacement);
  fs.writeFileSync(fileName, content);
}

createFolder('');
