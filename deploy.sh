#!/bin/bash

# Build the static site
echo "Building static site..."
npm run export

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed! Please check your code."
  exit 1
fi

echo "Static site generated successfully in the 'out' directory."
echo ""
echo "You can now deploy the 'out' directory to any static hosting service:"
echo "- Netlify: Just drag and drop the 'out' folder to Netlify's dashboard"
echo "- Vercel: Run 'vercel --prod' in the project root"
echo "- GitHub Pages: Copy contents to your gh-pages branch"
echo "- AWS S3: Use 'aws s3 sync out/ s3://your-bucket-name/'"
echo ""
echo "For local testing, you can run: npx serve out" 