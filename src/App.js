import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Agreement from './components/agree';
import Home from './components/Home';
import RootLayout from './layouts/RootLayout';
import Privacy from './footers/privacy';
import Service from './footers/service';
import useTitle from './hooks/useTitle';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth';
import Profilepage from './components/profilepage';
import Editprofile from './components/editprofile';

/** root routes */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Username" element={<Username />} />
      <Route path="agree" element={<Agreement />} />
      <Route path="register" element={<Register />} />
      <Route path="recovery" element={<Recovery />} />
      <Route path="reset" element={<Reset />} />
      <Route path="editprofile" element={<Editprofile />} />
      <Route path="profilepage" element={<Profilepage />} />
      {/* <Route path="profile" element={<Profile />} /> */}
      <Route path="*" element={<PageNotFound />} />
      <Route
        path="password"
        element={
          <ProtectRoute>
            <Password />
          </ProtectRoute>
        }
      />
      <Route
        path="profile"
        element={
          <AuthorizeUser>
            <Profile />
          </AuthorizeUser>
        }
      />

      <Route path="privacy" element={<Privacy />} />
      <Route path="service" element={<Service />} />
    </Route>
  )
);

export default function App() {
  useTitle('SkoutTng');
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
