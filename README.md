# Capybara Clicker

![A capybara sits in the middle of the screen above two buttons labeled "Feed" and "Pet".
Above the capybara are counts indicating how many times the capybara has been fed or
pet.](example.png)

## Keep components pure

A pure function has two main characteristics:

- _Same inputs, same output._ It returns the same output per input, no matter what.
- _It minds its own business._ It does not change any objects or variables that existed before it was called.

Consider the following functions, `fnA`, `fnB`, and `fnC`.

```js
const fnA = (n) => n * 2;

let multiplier = 2;
const fnB = (n) => n * multiplier;

const fnC = (n) => {
  multiplier += 1;
  return n * multiplier;
};
```

1. Is `fnA` pure? Why or why not? Yes there is nothing that changes it
2. Is `fnB` pure? Why or why not? No because it relies on var outside of function
3. Is `fnC` pure? Why or why not? relies on outside scope var 

An **effect** is anything that occurs within a function _other than_ the calculation of
the result, such as making an API call, mutating data in a database, or obtaining user
input. The effect resulting from any interaction with the world _outside_ of a function
is referred to as a **side effect**.

4. Which function above has a side effect? What is that side effect? *** fnB, it results from outside of the function ***
5. Why can't a function with side effects be pure? *** it changes the result ***

> [!NOTE]
>
> Why the emphasis on pure functions? Pure functions allow for lots of optimizations
> involving caching, portability, testing, and legibility. Side effects, on the other
> hand, can be a major cause of bugs and incorrect behavior. It's impossible to avoid side
> effects in real-world applications; they just have to be managed well!

## Handle side effects in React components

React assumes that every component you write is a **pure** function. In other words, React
components must always return the same JSX given the same inputs. So how do we handle side
effects? Just like in any other context, we want to contain them and run them in a
controlled way.

Event handlers allow you to contain side effects that are triggered by a particular event.
React provides a **hook** that allows you to specify side effects caused not by an event,
but rather the act of rendering.

6. What are the two state variables in `<App>`? *** fedCount and petCount ***
7. What argument is being passed into **`useEffect`**? *** anonymous function with console logs ***
8. Start the dev server and interact with the page while observing the browser console.
   What gets logged to the console, and when? *** nom nom nom --- ***
9. Pass an empty array `[]` as the second argument to `useEffect.` Then, refresh the page
   and interact with the page again while observing the browser console. What gets logged to the console, and when? *** logs on load, buttons lose effect ***
10. Put `fedCount` into the **dependency array** of `useEffect`. Refresh the page and
    interact with the page again while observing the browser console. What gets logged to
    the console, and when? *** feed count logs nom nom nom ***
11. Write another `useEffect` to log `"yippee!"` to the console whenever `petCount`
    changes. 

> [!TIP]
>
> Need a hint? Take a look at [the React docs on `useEffect`](https://react.dev/reference/react/useEffect#examples-dependencies)!
