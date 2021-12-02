A fist setup for Loadtesting Chatmosphere / Jitis / WebRTC Setups based on Playwright and 
it's loadtest setup made by svenkatreddy - https://github.com/svenkatreddy/playwright-loadtest

If you want to test with real video, download https://media.xiph.org/video/derf/y4m/FourPeople_1280x720_60.y4m from https://www.xiph.org/video/ and uncomment `'--use-file-for-fake-video-capture=assets/FourPeople_1280x720_60.y4m',` in sample.js 
- thx a lot to xiph.org for making these files availabe <3
### Run it by:

`docker run --name nameOfYourContainer -e TARGET_URL=https://yourTargetUrl -e NUMBER_OF_USERS=3 nameOfImage`

#### TODO:
- add Mount to easily change test file
- save screenshots in Mount to retrieve