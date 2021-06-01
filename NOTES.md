<Routes> can only contain <Route> elements — nothing else.




Users component must include <Outlet />
If you’re nesting <Route>s under /users, you need to tell React Router where to render those nested components (:userId, admin) inside Users.

Without <Outlet />, nothing nested will render!



######


✅ What is useParams()?

useParams() is a React Router hook that returns an object containing key-value pairs of the route parameters defined in your route path.

🔍 Example
<Route path="/users/:userId" element={<UserDetails />} />
This means when someone goes to /users/123, React Router extracts 123 as the userId parameter.

Inside your component:

const { userId } = useParams();
Now:

userId === "123" (as a string)

🧠 What can you do with userId?

1. 🔄 Fetch user data from an API or array

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate an API fetch
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}
Replace /api/users/${userId} with a real API or mock data if needed.

2. 🎨 Use the param to conditionally render UI

export function UserDetails() {
  const { userId } = useParams();

  return (
    <div>
      {userId === "admin" ? (
        <h3>Welcome, Admin</h3>
      ) : (
        <p>Viewing profile of user ID: {userId}</p>
      )}
    </div>
  );
}

3. 🛠 Use multiple dynamic params

If you had:

<Route path="/users/:userId/posts/:postId" element={<UserPost />} />

Then inside UserPost:

const { userId, postId } = useParams();

🚨 Notes
Params are always strings — even if they look like numbers.
useParams() must be used inside a component rendered by a route (not in global code).
If a param is missing or undefined, your app might crash — handle it safely.