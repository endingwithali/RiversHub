# RiversHub

<p align="center">
<img src="./weezeroctocat.JPEG" width="29%"/>
</p>

This is a Chrome extension that makes your GitHub profile into Weezer colors and maps your GitHub  commit log into a playable audio soundtrack based off your GitHub contributions calendar! 

# Requirements 

- npm
- webpack

# How to build and run locally

To build, run the following command in terminal:
```
npm run build
```


While working on the project, dynamically save/update build of project using watch command:
```
npx webpack  --watch
```

Once you build the project, it will generate the relevant files to get this project working as a Chrome Extension. 

You will need import the folder containing the project as a [developer chrome extension](https://bashvlas.com/blog/install-chrome-extension-in-developer-mode/) to get it working on chrome once you've built it using webpack. 

This project will only show up on `github.com/*` pages that have a contribution calendar. 

## Tutorials that were helpful
- [AWS: adding webpack to your project](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/webpack.html)
- [tone js step sequence](https://github.com/Tonejs/Tone.js/blob/dev/examples/stepSequencer.html)
- [Synthesizer example](https://tonejs.github.io/examples/stepSequencer)
- [Trav's Synthesizer Tutorial](https://blog.techsavvytravvy.com/make-a-synthesizer-with-tonejs)
- [How to see printout of chrome extension](https://stackoverflow.com/questions/3829150/google-chrome-extension-console-log-from-background-page)
- [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)