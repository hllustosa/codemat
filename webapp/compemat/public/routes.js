import About from "../pages/About";
import Exercise from "../pages/Exercise";
import ExerciseCategories from "../pages/ExerciseCategories";
import ExerciseList from "../pages/ExerciseList";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Tutorials from "../pages/Tutorials";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/about",
    component: About,
    key: "about",
    exact: true,
  },
  {
    path: "/exercise/:id",
    component: Exercise,
    key: "exercise",
    exact: true,
  },
  {
    path: "/exercise-categories",
    component: ExerciseCategories,
    key: "exercise-categories",
    exact: true,
  },
  {
    path: "/exercise-list",
    component: ExerciseList,
    key: "exercise-categories",
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    key: "login",
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    key: "profile",
    exact: true,
  },
  {
    path: "/tutorials",
    component: Tutorials,
    key: "tutorials",
    exact: true,
  },
  {
    path: "",
    component: Home,
    key: "Home",
    exact: false,
  } 
];
