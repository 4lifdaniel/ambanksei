# Redux

## Intro To Redux

Redux was created as a `state management` tool for large applications which includes the need to manage complex versions of state and ever increasing complexity of the business logic. 

If your learning about Redux then it's safe to assume that you are already familiar with managing state using `useState`, `useReducer` and possibly even `useContext`.  This familiarity is important as it uses both the `reducer` and `context` concepts. 

`React Context allows you to share data within a specific subtree of components`, while Redux `provides a global state store that is accessible to all components in the application`, including sibling components.

### The Need For Global State

As we can see below the nightmare of passing props further and further down the hierarchy may at some point become confusing and/or unmanageable. Redux creates a `central store` that any component can reference and pull the data they need when they need it. 

<img src="https://i.imgur.com/STJ8f7F.png" width=300/>

<img src="https://i.imgur.com/7RpahGf.png" width=400/> 

## Redux Terminology

Redux brings with it some new terminology so let's review these new terms first before we implement it. 

<p align='center'>
    <img src="https://i.imgur.com/6VoGGIX.png" width=400/>
</p>


#### Store

The store is the `single source of truth our app`. The store encapsulates not only the data in the program, but also controls the flow of the program using `reducers` and `actions`.

#### Actions

`Actions` are simply JavaScript objects that describes what change is being made and includes any data relative to that change.  The only `requirement` is that the object must contain a key called `type`. 

Any additional key/value pairs that are included are completely optional and dependent on the need of the app.

Here is an action object that intends to increment the counter by 1.
```sh
{ type: 'INCREMENT' } 
```

Although this meets the min requirements of an `action` we can extend it to include additional values.  So perhaps we want to control by how much the value is incremented.  For that we can add a new key called `value`. 

```sh
{ type: 'INCREMENT', value: 1 } 
```

We can continue that logic and create an action to decrement the counter by 1.
```sh
{ type: 'DECREMENT', value: 1 }
```

#### Reducers

When an action gets dispatched it is sent to a `Reducer` to perform the actions needed as they were set in `type`.   The `Reducer` is a pure function that describes how the action will update the store (aka state object)

The Reducer always take the previous state and the action that was dispatched and then returns a brand new state. 

The body of the function is always a `switch` statement that evaluates the `type` property in the action and executes the needed business logic.

```sh
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count += 1
      }
    case 'DECREMENT':
      return {
        count: state.count -= 1
      }
  }
}
```


## Reference:

- [Redux](https://react-redux.js.org/introduction/getting-started)