# Getting started

Install `blip-iframe` in your project:

```bash
npm i blip-iframe
```

## Usage

You can use `blip-iframe` with any framework or even vanilla JavaScript.
In this section, we'll show how to get started using React, but the same principles
apply to any other tool or framework.

### Usage inside the Blip platform

If you're using `blip-iframe` inside Blip (ex.: Blip Extensions),
you can use the API functions without any additional configuration, as such:

```jsx
import { getBot } from 'blip-iframe';

export default function Component() {
  const [bot, setBot] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetches the current bot. If an error occurs, the response will be null.
    // The error is not thrown, but returned. This improves types and error awareness.
    getBot().then(({ response, error }) => {
      setLoading(false);
      setError(error);
      setBot(response);
    });
  }, []);

  if (loading) return <>Loading...</>;

  if (error) return <>An error ocurred!</>;

  // Shows data about the current bot
  return <pre>{JSON.stringify(bot, null, 2)}</pre>;
}
```

All set! Now you can use the `blip-iframe` API to make calls inside your application.

> **This method only works if your web app is inside Blip**
>
> Using `blip-iframe` without setting up authentication only works
> in web applications rendered as an iframe inside Blip, because the
> authentication is done automatically by the platform.
>
> If you want to make the same calls in a standalone app,
> follow the steps outlined below.

### Usage outside the Blip platform

Coming soon...
