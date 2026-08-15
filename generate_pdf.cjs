const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Construct the correct file URL for the local HTML file
        const htmlPath = path.join(__dirname, 'public', 'brochure.html');
        const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
        
        console.log('Loading page:', fileUrl);
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        
        console.log('Generating PDF...');
        const outputPath = path.join(__dirname, 'OmniSchool_Brochure.pdf');
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            }
        });
        
        console.log('PDF successfully generated at:', outputPath);
        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
