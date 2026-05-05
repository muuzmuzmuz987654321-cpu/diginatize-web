@echo off
echo 🚀 Starting Automatic Upload to your new GitHub Repository...
git init
git add .
git commit -m "feat: complete diginatize marketplace with 3D UI"
git remote add origin https://github.com/muuzmuzmuz987654321-cpu/diginatize-web.git
git branch -M main
echo 📦 Pushing files to https://github.com/muuzmuzmuz987654321-cpu/diginatize-web.git
git push -u origin -f main
echo ✅ Done! Your website is now on GitHub.
echo 🌐 View your code: https://github.com/muuzmuzmuz987654321-cpu/diginatize-web
pause
