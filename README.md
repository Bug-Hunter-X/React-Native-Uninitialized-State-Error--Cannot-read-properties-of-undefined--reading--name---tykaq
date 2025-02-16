# React Native Uninitialized State Error

This repository demonstrates a common error in React Native applications: attempting to access a state variable or prop before it has been initialized. This typically occurs when asynchronous operations, like API calls, haven't completed before the component renders.

## The Problem

The `bug.js` file showcases the issue.  The component attempts to display user data before the data is fetched and stored in the state. This leads to a runtime error because `this.state.user` is initially `null` and accessing its properties causes an exception.

## The Solution

The `bugSolution.js` file provides a solution.  Conditional rendering checks if the `user` data is available before attempting to access its properties. This prevents the error by gracefully handling the case where data is still loading.