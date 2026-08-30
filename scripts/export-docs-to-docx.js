const fs = require('fs');
const path = require('path');
const {remark} = require('remark');
const remarkMdx = require('remark-mdx');
const remarkHtml = require('remark-html');
const htmlDocx = require('html-docx-js');

const docsDir = path.join(__dirname, '..', 'docs');
const outDir = path.join(__dirname, '..', 'exported-docs');

function getDocFiles(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return getDocFiles(entryPath);
    }
    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      return [entryPath];
    }
    return [];
  });
}

async function convertFile(inputPath) {
  const relativePath = path.relative(docsDir, inputPath);
  const outputFileName = relativePath.replace(/\.mdx$/, '.docx');
  const outputPath = path.join(outDir, outputFileName);

  const markdown = fs.readFileSync(inputPath, 'utf8');
  const html = String(
    await remark().use(remarkMdx).use(remarkHtml, {sanitize: false}).process(markdown),
  );

  const docxBuffer = htmlDocx.asBlob(html);

  fs.mkdirSync(path.dirname(outputPath), {recursive: true});
  fs.writeFileSync(outputPath, docxBuffer);
  console.log(`Exported ${relativePath} -> ${path.relative(process.cwd(), outputPath)}`);
}

async function main() {
  const files = getDocFiles(docsDir);
  if (!files.length) {
    console.error('No MDX files found in docs/');
    process.exit(1);
  }

  fs.rmSync(outDir, {recursive: true, force: true});
  fs.mkdirSync(outDir, {recursive: true});

  for (const file of files) {
    await convertFile(file);
  }

  console.log(`\nExport complete: ${files.length} files written to ${path.relative(process.cwd(), outDir)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
