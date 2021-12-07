# My thoughts on making this PWA PoC

- Some of the features of react-router/remix are essential in building app like interfaces where the back button actually closes a modal/dialog, for example.
- framer-motion makes shared element transitions quite simple, but I'm not too sure about its runtime cost and some of the bugs I'm facing (pretty sure I'm using it incorrectly)
- While API response has been mocked, 100ms delay was added to simulate a somewhat ideal backend
- vercel provides excellent CD experience with preview links for branches & PRs.
  - deployments through vercel go through in under a minute
- interactions do take quite a bit of time on an old 7xx Snapdragon phone, I notice it a lot during route transitions
  - Maybe the way I use framer-motion in [ScreenTransition](./app/components/ScreenTransition.tsx) isn't quite performant.
  - Mounting and unmounting large DOM trees is surely a bottleneck. Deferred Rendering helps but ideally we'd like to wait for Concurrent Rendering from react team
- bubblewrap & PWABuilder helped in making the PWA within 1 hour
  - there's a bug with PWABuilder generated apk where killing default browser (if it's not Chrome) from recent apps causes app to freeze at splash screen

---

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
