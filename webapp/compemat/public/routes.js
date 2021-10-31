const routes = {
  course: "/course",
  exercises: "/exercises",
  classes: "/classes",
  about: "/about",
  profile: "/profile",
  exercisesCategory: (category) => `/exercises/${category}`,
  exercisesPage: (id) => `/exercises/${id}/details`,
};

export default routes;
