import { chromium, firefox, PlaywrightTestConfig, webkit } from "@playwright/test";

// Declare playwright configurations
const CONFIG: PlaywrightTestConfig ={
timeout: 1500000,
retries : 0,
//testDir: '../tests',
use:{
    headless:true,
    viewport:{width:1280, height:720},
    actionTimeout:1500000,
    ignoreHTTPSErrors:true,
    video: "retain-on-failure", 
    screenshot:"only-on-failure",
    trace: 'retain-on-failure',
    },
    projects:[
        {
            name: 'chromium',
            use:{browserName:'chromium'}
        },

        {
            name: 'firefox',
            use:{browserName:'firefox'}
        },

        {
            name:'webkit',
            use: {browserName:'webkit'}
        },
    ],
}
export default CONFIG