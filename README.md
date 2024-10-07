### How to reproduce the bug - [Video](https://www.youtube.com/watch?v=R2LYSzM1MeY)
1. checkout the **test/try-1 branch**.
2. Run the command "yarn install"
3. Start the project: (yarn dev)
4. Open http://localhost:3000/start 
5. Click the "More" button at the bottom (at least once)
6. Check gcTime in react-query devtools. (it is set to 300000)
7. Click the "Move next page" link at the top
8. Click "Go back" link
9. The cached data is still present on the page.

### Issue
https://github.com/TanStack/query/issues/8136#issuecomment-2396326946