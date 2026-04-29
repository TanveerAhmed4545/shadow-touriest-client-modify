const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function getLoaderPath(filePath) {
    const depth = filePath.split(path.sep).length - 4; // Assuming src is depth 0. Example: src/Pages/Home/OurPackages.jsx -> depth 2.
    // wait, actually, we can just calculate relative path to src/components/Shared/Loader
    const srcDir = path.resolve(__dirname, 'src');
    let rel = path.relative(path.dirname(filePath), path.join(srcDir, 'components', 'Shared', 'Loader'));
    // Convert to posix path
    rel = rel.split(path.sep).join('/');
    if (!rel.startsWith('.')) rel = './' + rel;
    return rel;
}

walkDir(path.resolve(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Check if file has Lottie
    if (content.includes('Lottie') && content.includes('loaderAnimation')) {
        
        // Replace Lottie imports
        content = content.replace(/import\s+Lottie\s+from\s+['"]lottie-react['"];?\n?/g, '');
        content = content.replace(/import\s+loaderAnimation\s+from\s+['"].*?loader\.json['"];?\n?/g, '');
        
        // Add Loader import at the top (after other imports ideally, but top is fine for React)
        const loaderImportPath = getLoaderPath(filePath);
        const loaderImport = `import Loader from "${loaderImportPath}";\n`;
        
        // Inject Loader import after the first import or at the very top
        content = loaderImport + content;

        // Replace the Lottie block
        // Typical block:
        // <div className="flex justify-center items-center ">
        //   <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
        // </div>
        // or
        // <div className="...">
        //   <Lottie animationData={loaderAnimation} ... />
        // </div>
        
        // We'll use a regex to replace the entire div containing Lottie
        // This is a bit tricky, but since it's almost identical everywhere:
        content = content.replace(/<div[^>]*>\s*<Lottie[^>]*loaderAnimation[^>]*>\s*(?:<\/Lottie>\s*)?<\/div>/g, '<Loader />');
        
        // Just in case it's not wrapped in a div:
        content = content.replace(/<Lottie[^>]*loaderAnimation[^>]*>(?:<\/Lottie>)?/g, '<Loader />');

        if (original !== content) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
  }
});
console.log("Done");
