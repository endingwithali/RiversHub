# RiversHub

![github octocat on the weezer blue background][weezeroctocat.JPEG]

This is a chrome extension that makes your GitHub profile into Weezer colors and maps your GitHub  commit log into a playable midi soundtrack! 


# Running

To build, run the following command in terminal:
```
npm run build
```

While working on the project, and dynamically save/update build of project:
```
npx webpack  --watch
```

You will need to import this as a [developer chrome extension](https://bashvlas.com/blog/install-chrome-extension-in-developer-mode/) to get it working on chrome once you've built it using webpack. 

## Tutorials that were helpful
- [AWS: adding webpack to your project](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/webpack.html)
- [tone js step sequence](https://github.com/Tonejs/Tone.js/blob/dev/examples/stepSequencer.html)
- [Synthesizer example](https://tonejs.github.io/examples/stepSequencer)
- [Trav's Synthesizer Tutorial](https://blog.techsavvytravvy.com/make-a-synthesizer-with-tonejs)