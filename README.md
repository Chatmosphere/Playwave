# Chatmosphere Playwright Container
A fist setup for Loadtesting Chatmosphere / Jitsi / WebRTC Setups based on Playwright and it's loadtest setup made by [svenkatreddy](https://github.com/svenkatreddy/playwright-loadtest).

## Overview
tbd.
## Run container
### Simple run
```Shell
docker run --name nameOfYourContainer -e TARGET_URL=https://yourTargetUrl -e NUMBER_OF_USERS=3 nameOfImage
```


### Run with Playwright-Scripts mounted
You can run the container with a volume mounted at _/app/plays_ to inject playwright-scripts to your docker container. 

```Shell
docker run -v /local/playscripts:/app/plays chatmosphere/playwright:latest
```

By default, the container starts a script at _/app/plays/playwave.js_. If your start-script name is different, you need to set the start-script via the ENV Variable _TEST_NAME_: 

```Shell
docker run -e TEST_NAME=mystartscript.js -v /local/playscripts:/app/plays chatmosphere/playwright:latest
```

### Run with output-folder mounted
You can run the container with a volume mounted at _/app/output_ to receive outputs created by scripts within your docker host. 

```Shell
docker run -v /local/output:/app/output chatmosphere/playwright:latest
```

### Run with media files
You can run tests using real video files. 
Video files need to be mounted into the container and referenced within the playwright launchoptions. 

As an example, the following setting runs the tests with Media files mounted within from a local asset folder into _/app/assets_.

1. Download [FourPeople_1280x720_60.y4m](https://media.xiph.org/video/derf/y4m/FourPeople_1280x720_60.y4m) from https://www.xiph.org/video/ and store it locally (e.g. _/local/assets_).   

2. Adjust _sample.js_  
Uncomment `'--use-file-for-fake-video-capture=assets/FourPeople_1280x720_60.y4m',`

3. Run with scripts-folder and assets-folder mounted
    ```Shell
    docker run -v /local/playscripts:/app/plays -v /local/assets:/app/assets chatmosphere/playwright:latest
    ```

>thx a lot to xiph.org for making these files availabe <3

## Directories within Container
| Folder | Description |
|---|---|
| /app          | Working Directory |
| /app/assets   | Media Files |
| /app/plays    | Playwright Files |
| /app/output   | Output created by scripts should be placed here. |

