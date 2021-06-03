@echo off
"C:\Program Files\7-Zip\7z.exe" a itch-scrollto-buy-button.zip manifest.json background.js icons\19.png icons\38.png
IF ERRORLEVEL 1 (
  pause
  EXIT /B 1
)
