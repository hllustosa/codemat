const routes = {
  course: "/course",
  exercises: "/exercises",
  classes: "/classes/unity-0/1",
  about: "/about",
  profile: "/profile",
  ide: "/ide",
  exercisesCategory: (category) => `/exercises/${category}`,
  exercisesPage: (id) => `/exercises/${id}/details`,
};

export default routes;
