const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const orig = content;

      // specific background replacements
      content = content.replace(/bg-slate-950/g, 'bg-background');
      content = content.replace(/bg-slate-900/g, 'bg-card');
      
      content = content.replace(/from-slate-950/g, 'from-background');
      content = content.replace(/via-slate-950/g, 'via-background');
      content = content.replace(/to-slate-950/g, 'to-background');
      
      content = content.replace(/from-slate-900/g, 'from-card');
      content = content.replace(/via-slate-900/g, 'via-card');
      content = content.replace(/to-slate-900/g, 'to-card');

      if (content !== orig) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir('/Users/priyanshutiwari/Desktop/Portfolio/PRIYANSHU2026.github.io/src/components');
console.log("Replaced slate colors with theme background colors.");
