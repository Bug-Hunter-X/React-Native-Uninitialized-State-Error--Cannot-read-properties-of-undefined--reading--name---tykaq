To solve this, use conditional rendering to only display the user's name after the data has been fetched and stored in the state:

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <View>
      {user ? (
        <Text>Name: {user.name}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
```

This revised code uses a conditional statement (`user ? ... : ...`) to render either the user's name (if `user` is not null) or a 'Loading...' message while the data is being fetched.  The `useEffect` hook manages the asynchronous operation.  This approach prevents the error by only attempting to access the `user` object's properties once they are available.