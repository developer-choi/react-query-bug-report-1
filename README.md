### How to reproduce the bug - [Video](https://youtu.be/EFcFWIDEzl8)
1. Start this project (yarn dev)
2. Move http://localhost:3000/start
3. Open the Network panel in Chrome Developer Tools 
4. Click the "More" button at the bottom (at least once)
5. Click the "Move next page" link at the top 
6. Go back to the previous page after **3** seconds 
7. You should see that GET /api is not called

### How to reproduce expected behavior [Video](https://youtu.be/Jhy26BoDFKc)
1. Run this command "git reset f7455004"
2. Start this project (yarn dev)
3. Move http://localhost:3000/start
4. Open the Network panel in Chrome Developer Tools 
5. Click the "More" button at the bottom (at least once)
6. Click the "Move next page" link at the top 
7. Go back to the previous page after **3** seconds
8. You should see that GET /api is called.