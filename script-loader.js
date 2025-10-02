const fs = require('fs');
const path = require('path');

function getScriptInfo(directory) {
    const results = [];
    
    function scanDirectory(dir) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                const infoPath = path.join(fullPath, 'info.json');
                if (fs.existsSync(infoPath)) {
                    try {
                        const info = JSON.parse(fs.readFileSync(infoPath, 'utf8'));
                        if (info.enabled) {
                            results.push({
                                name: info.name || item,
                                description: info.description || '',
                                author: info.author || 'Unknown',
                                version: info.version || '1.0',
                                filename: info.filename || '',
                                folder: path.basename(fullPath)
                            });
                        }
                    } catch (err) {
                        // skip invalid info.json
                    }
                }
            }
        }
    }
    
    scanDirectory(directory);
    return results;
}

// In getScriptInfo usage, make sure to use the scripts directory outside public

module.exports = { getScriptInfo };
